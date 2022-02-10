"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initializer = void 0;
const Logger = __importStar(require("winston"));
const path = __importStar(require("path"));
const LoggerFile = __importStar(require("./logger/logger"));
const constants_1 = require("../utils/util/constants");
const sdk_logger_1 = require("./logger/sdk_logger");
const sdk_exception_1 = require("../core/com/zoho/crm/api/exception/sdk_exception");
/**
 * The class to initialize Zoho CRM SDK.
 */
class Initializer {
    /**
     * The method is to initialize the SDK.
     * @param {UserSignature} user - A UserSignature class instance represents the CRM user.
     * @param {Environment} environment - A Environment class instance containing the CRM API base URL and Accounts URL.
     * @param {Token} token - A Token class instance containing the OAuth client application information.
     * @param {TokenStore} store - A TokenStore class instance containing the token store information.
     * @param {SDKConfig} sdkConfig - A SDKConfig class instance containing the configuration.
     * @param {String} resourcePath - A String containing the absolute directory path to store user specific JSON files containing module fields information.
     * @param {LoggerFile.Logger} logger - A Logger class instance containing the log file path and Logger type.
     * @param {RequestProxy} proxy - A RequestProxy class instance containing the proxy properties of the user.
     * @throws {SDKException}
     */
    static async initialize(user, environment, token, store, sdkConfig, resourcePath, logger, proxy) {
        try {
            if (logger.getLevel() !== LoggerFile.Levels.OFF) {
                sdk_logger_1.SDKLogger.initialize(logger);
            }
            try {
                if (Initializer.jsonDetails == null) {
                    Initializer.jsonDetails = Initializer.getJSON(path.join(__dirname, "..", constants_1.Constants.CONFIG_DIRECTORY, constants_1.Constants.JSON_DETAILS_FILE_PATH));
                }
            }
            catch (ex) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.JSON_DETAILS_ERROR, null, null, ex);
            }
            let initializer = new Initializer();
            initializer._user = user;
            initializer._environment = environment;
            initializer._token = token;
            initializer._store = store;
            initializer._sdkConfig = sdkConfig;
            initializer._resourcePath = resourcePath;
            initializer._requestProxy = proxy;
            Initializer.LOCAL.set(await initializer.getEncodedKey(user, environment), initializer);
            Initializer.initializer = initializer;
            Logger.info(constants_1.Constants.INITIALIZATION_SUCCESSFUL.concat(await Initializer.initializer.toString()));
        }
        catch (err) {
            if (!(err instanceof sdk_exception_1.SDKException)) {
                err = new sdk_exception_1.SDKException(null, null, null, err);
            }
            throw err;
        }
    }
    /**
     * This method to get record field and class details.
     * @param filePath A String containing the file path.
     * @returns A JSON representing the class information details.
     */
    static getJSON(filePath) {
        let fs = require('fs');
        let fileData = fs.readFileSync(filePath);
        return JSON.parse(fileData);
    }
    /**
     * This method is to get Initializer class instance.
     * @returns A Initializer class instance representing the SDK configuration details.
     */
    static async getInitializer() {
        if (Array.from(Initializer.LOCAL.keys()).length > 0) {
            let initializer = new Initializer();
            let encodedKey = await initializer.getEncodedKey(Initializer.initializer._user, Initializer.initializer._environment);
            if (Initializer.LOCAL.has(encodedKey)) {
                let value = Initializer.LOCAL.get(encodedKey);
                if (value !== undefined) {
                    return value;
                }
            }
        }
        return Initializer.initializer;
    }
    /**
     * This method is to switch the different user in SDK environment.
     * @param {UserSignature} user - A UserSignature class instance represents the CRM user.
     * @param {Environment} environment - A Environment class instance containing the CRM API base URL and Accounts URL.
     * @param {Token} token - A Token class instance containing the OAuth client application information.
     * @param {SDKConfig} sdkConfig - A SDKConfig instance representing the configuration
     * @param {RequestProxy} proxy - A RequestProxy class instance containing the proxy properties.
     */
    static async switchUser(user, environment, token, sdkConfig, proxy) {
        let initializer = new Initializer();
        initializer._user = user;
        initializer._environment = environment;
        initializer._token = token;
        initializer._store = Initializer.initializer.getStore();
        initializer._sdkConfig = sdkConfig;
        initializer._requestProxy = proxy;
        initializer._resourcePath = Initializer.initializer.getResourcePath();
        Initializer.LOCAL.set(await initializer.getEncodedKey(user, environment), initializer);
        Initializer.initializer = initializer;
        Logger.info(constants_1.Constants.INITIALIZATION_SWITCHED.concat(await Initializer.initializer.toString()));
    }
    /**
     * This is a getter method to get API environment.
     * @returns A Environment representing the API environment.
     */
    getEnvironment() {
        return this._environment;
    }
    /**
     * This is a getter method to get Token Store.
     * @returns A TokenStore class instance containing the token store information.
     */
    getStore() {
        return this._store;
    }
    /**
     * This is a getter method to get CRM User.
     * @returns A User class instance representing the CRM user.
     */
    getUser() {
        return this._user;
    }
    /**
     * This is a getter method to get Proxy information.
     * @returns {RequestProxy} A RequestProxy class instance representing the API Proxy information.
     */
    getRequestProxy() {
        return this._requestProxy;
    }
    /**
     * This is a getter method to get OAuth client application information.
     * @returns {Token} A Token class instance representing the OAuth client application information.
     */
    getToken() {
        return this._token;
    }
    /**
     * This is a getter method to get resourcePath value.
     * @returns {string} A String value representing the resourcePath.
     */
    getResourcePath() {
        return this._resourcePath;
    }
    /**
     * This is a getter method to get the SDK Configuration
     * @returns {SDKConfig} A SDKConfig instance representing the configuration
     */
    getSDKConfig() {
        return this._sdkConfig;
    }
    static async removeUserConfiguration(user, environment) {
        let initializer = new Initializer();
        let encodedKey = await initializer.getEncodedKey(user, environment);
        if (Initializer.LOCAL.has(encodedKey)) {
            Initializer.LOCAL.delete(encodedKey);
        }
        else {
            throw new sdk_exception_1.SDKException(constants_1.Constants.USER_NOT_FOUND_ERROR, constants_1.Constants.USER_NOT_FOUND_ERROR);
        }
    }
    async getEncodedKey(user, environment) {
        let key = (user.getEmail()).substring(0, (user.getEmail().indexOf('@'))) + environment.getUrl();
        return Buffer.from(this.toUTF8Array(key)).toString('base64');
    }
    async toString() {
        return constants_1.Constants.FOR_EMAIL_ID.concat((await Initializer.initializer)._user.getEmail()).concat(constants_1.Constants.IN_ENVIRONMENT).concat((await Initializer.initializer)._environment.getUrl()).concat(".");
    }
    toUTF8Array(str) {
        var utf8 = [];
        for (var i = 0; i < str.length; i++) {
            var charcode = str.charCodeAt(i);
            if (charcode < 0x80)
                utf8.push(charcode);
            else if (charcode < 0x800) {
                utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
            }
            else if (charcode < 0xd800 || charcode >= 0xe000) {
                utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
            }
            else {
                i++;
                charcode = 0x10000 + (((charcode & 0x3ff) << 10)
                    | (str.charCodeAt(i) & 0x3ff));
                utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
            }
        }
        return utf8;
    }
}
exports.Initializer = Initializer;
Initializer.LOCAL = new Map();
//# sourceMappingURL=initializer.js.map