import { UserSignature } from './user_signature';

import { Constants } from '../utils/util/constants';

import { Utility } from '../utils/util/utility';

import { SDKException } from '../core/com/zoho/crm/api/exception/sdk_exception';

import { Token } from '../models/authenticator/token';

import { TokenStore } from '../models/authenticator/store/token_store';

import { SDKConfig } from './sdk_config';

import { Environment } from '../routes/dc/environment';

import { Initializer } from './initializer';

import * as LoggerFile from './logger/logger';

import { Logger, Levels } from "./logger/logger";

import { LogBuilder } from "./logger/log_builder";

import { SDKConfigBuilder } from "../routes/sdk_config_builder";

import { FileStore } from "../models/authenticator/store/file_store";

import { RequestProxy } from './request_proxy';

import * as fs from 'fs';

import * as path from "path";

export class InitializeBuilder {
    // @ts-ignore
    private _environment: Environment;
    // @ts-ignore
    private _store: TokenStore;
    // @ts-ignore
    private _user: UserSignature;
    // @ts-ignore
    private _token: Token;
    // @ts-ignore
    private _resourcePath: string;
    private _requestProxy: RequestProxy | undefined;
    // @ts-ignore
    private _sdkConfig: SDKConfig;
    // @ts-ignore
    private _logger: LoggerFile.Logger;
    private errorMessage: string = '';
    // @ts-ignore
    private initializer: Initializer;

    constructor() {
        (async () => {
            this.initializer = await Initializer.getInitializer();

            this.errorMessage = (await this.initializer != null) ? Constants.SWITCH_USER_ERROR : Constants.INITIALIZATION_ERROR;

            if (this.initializer != null) {
                this._user = await this.initializer.getUser();

                this._environment = await this.initializer.getEnvironment();

                this._token = await this.initializer.getToken();

                this._sdkConfig = await this.initializer.getSDKConfig();
            }
            return this;
        })();
    }

    public async initialize() {
        Utility.assertNotNull(this._user, this.errorMessage, Constants.USER_SIGNATURE_ERROR_MESSAGE);

        Utility.assertNotNull(this._environment, this.errorMessage, Constants.ENVIRONMENT_ERROR_MESSAGE);

        Utility.assertNotNull(this._token, this.errorMessage, Constants.TOKEN_ERROR_MESSAGE);

        if (this._store == null) {
            this._store = new FileStore(path.join(__dirname, "../../../../", Constants.TOKEN_FILE));
        }

        if (this._sdkConfig == null) {
            this._sdkConfig = new SDKConfigBuilder().build();
        }

        if (this._resourcePath == null) {
            this._resourcePath = path.join(__dirname, "../../../../", '');
        }

        if (this._logger == null) {
            this._logger = new LogBuilder().level(Levels.INFO).filePath(path.join(__dirname, "../../../../", Constants.LOG_FILE_NAME)).build();
        }

        Initializer.initialize(this._user, this._environment, this._token, this._store, this._sdkConfig, this._resourcePath, this._logger, this._requestProxy);
    }

    public async switchUser() {
        Utility.assertNotNull(Initializer.getInitializer(), Constants.SDK_UNINITIALIZATION_ERROR, Constants.SDK_UNINITIALIZATION_MESSAGE);

        Initializer.switchUser(this._user, this._environment, this._token, this._sdkConfig, this._requestProxy);
    }

    public logger(logger: LoggerFile.Logger): InitializeBuilder {
        this._logger = logger;

        return this;
    }

    public token(token: Token): InitializeBuilder {
        Utility.assertNotNull(token, this.errorMessage, Constants.TOKEN_ERROR_MESSAGE);

        this._token = token;

        return this;
    }

    public SDKConfig(sdkConfig: SDKConfig): InitializeBuilder {
        this._sdkConfig = sdkConfig;

        return this;
    }

    public requestProxy(requestProxy: RequestProxy): InitializeBuilder {
        this._requestProxy = requestProxy;

        return this;
    }

    public resourcePath(resourcePath: string): InitializeBuilder {
        if (resourcePath != null && !fs.statSync(resourcePath).isDirectory()) {
            throw new SDKException(this.errorMessage, Constants.RESOURCE_PATH_INVALID_ERROR_MESSAGE);
        }

        this._resourcePath = resourcePath;

        return this;
    }

    public user(user: UserSignature): InitializeBuilder {
        Utility.assertNotNull(user, this.errorMessage, Constants.USER_SIGNATURE_ERROR_MESSAGE);

        this._user = user;

        return this;
    }

    public store(store: TokenStore): InitializeBuilder {
        this._store = store;

        return this;
    }

    public environment(environment: Environment): InitializeBuilder {
        Utility.assertNotNull(environment, this.errorMessage, Constants.ENVIRONMENT_ERROR_MESSAGE);

        this._environment = environment;

        return this;
    }
}