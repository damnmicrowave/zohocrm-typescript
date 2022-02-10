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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthToken = void 0;
const initializer_1 = require("../../routes/initializer");
const form_data_1 = __importDefault(require("form-data"));
const constants_1 = require("../../utils/util/constants");
const Logger = __importStar(require("winston"));
const sdk_exception_1 = require("../../core/com/zoho/crm/api/exception/sdk_exception");
const got_1 = __importDefault(require("got"));
/**
 * This class maintains the tokens and authenticates every request.
 */
class OAuthToken {
    /**
     * Creates an OAuthToken class instance with the specified parameters.
     * @param {String} clientID - A String containing the OAuth client id.
     * @param {String} clientSecret - A String containing the OAuth client secret.
     * @param {String} grantToken - A String containing the GRANT token.
     * @param {String} refreshToken - A String containing the REFRESH token.
     * @param {String} redirectURL - A String containing the OAuth redirect URL.
     * @param {String} id - A string
     */
    constructor(clientID, clientSecret, grantToken, refreshToken, redirectURL, id, accessToken) {
        this.clientID = clientID;
        this.clientSecret = clientSecret;
        this.grantToken = grantToken;
        this.refreshToken = refreshToken;
        this.redirectURL = redirectURL;
        this.accessToken = accessToken;
        this.id = id;
    }
    /**
     * This is a setter method to set OAuth client id.
     * @param {string} clientID - A String containing the client Id.
     */
    setClientId(clientID) {
        this.clientID = clientID;
    }
    /**
     * This is a getter method to get OAuth client id.
     * @returns A String representing the OAuth client id.
     */
    getClientId() {
        return this.clientID;
    }
    /**
     * This is a setter method to set OAuth client secret.
     * @param {string} clientSecret - A String containing the client Secret.
     */
    setClientSecret(clientSecret) {
        this.clientSecret = clientSecret;
    }
    /**
     * This is a getter method to get OAuth client secret.
     * @returns A String representing the OAuth client secret.
     */
    getClientSecret() {
        return this.clientSecret;
    }
    /**
     * This is a setter method to set OAuth redirect URL.
     * @param {string} redirectURL - A String containing the redirectURL.
     */
    setRedirectURL(redirectURL) {
        this.redirectURL = redirectURL;
    }
    /**
     * This is a getter method to get OAuth redirect URL.
     * @returns A String representing the OAuth redirect URL.
     */
    getRedirectURL() {
        return this.redirectURL;
    }
    /**
     * This is a setter method to set grant token.
     * @param {string} grantToken - A String containing the grantToken.
     */
    setGrantToken(grantToken) {
        this.grantToken = grantToken;
    }
    /**
     * This is a getter method to get grant token.
     * @returns A String representing the grant token.
     */
    getGrantToken() {
        return this.grantToken;
    }
    /**
     * This is a getter method to get refresh token.
     * @returns A String representing the refresh token.
     */
    getRefreshToken() {
        return this.refreshToken;
    }
    /**
     * This is a setter method to set refresh token.
     * @param {string} refreshToken - A String containing the refresh token.
     */
    setRefreshToken(refreshToken) {
        this.refreshToken = refreshToken;
    }
    /**
     * This is a getter method to get access token.
     * @returns A String representing the access token.
     */
    getAccessToken() {
        return this.accessToken;
    }
    /**
     * This is a setter method to set access token.
     * @param {string} accessToken A String containing the access token.
     */
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    /**
     * This is a getter method to get token expire time.
     * @returns A String representing the token expire time.
     */
    getExpiresIn() {
        return this.expiresIn;
    }
    /**
     * This is a setter method to set token expire time.
     * @param {string} expiresIn A String containing the token expire time.
     */
    setExpiresIn(expiresIn) {
        this.expiresIn = expiresIn;
    }
    /**
     * This is a getter method to get token user mail.
     * @returns A String representing the userMail
     */
    getUserMail() {
        return this.userMail;
    }
    /**
     * This is a setter method to set token user email.
     * @param {String} userMail A String containing the userMail
     */
    setUserMail(userMail) {
        this.userMail = userMail;
    }
    /**
     * This is a getter method to get the id
     * @returns the id
     */
    getId() {
        return this.id;
    }
    /**
     * This is a setter method to set the id
     * @param {String} id A String containing the id
     */
    setId(id) {
        this.id = id;
    }
    async authenticate(urlConnection) {
        try {
            var token;
            var initializer = await initializer_1.Initializer.getInitializer();
            var store = initializer.getStore();
            var user = initializer.getUser();
            var oauthToken = null;
            if (this.accessToken == null) {
                if (this.id != null) {
                    oauthToken = (await store.getTokenById(this.id, this));
                }
                else {
                    oauthToken = (await store.getToken(user, this));
                }
            }
            else {
                oauthToken = this;
            }
            if (oauthToken == null) {
                //first time
                token =
                    this.refreshToken === null
                        ? (await this.generateAccessToken(user, store)).getAccessToken()
                        : (await this.refreshAccessToken(user, store)).getAccessToken();
            }
            else if (oauthToken.getExpiresIn() !== undefined &&
                parseInt(oauthToken.getExpiresIn()) - new Date().getTime() < 5000) {
                //access token will expire in next 5 seconds or less
                Logger.info(constants_1.Constants.REFRESH_TOKEN_MESSAGE);
                token = (await this.refreshAccessToken(user, store)).getAccessToken();
            }
            else {
                token = this.getAccessToken();
            }
            if (token !== null) {
                urlConnection.addHeader(constants_1.Constants.AUTHORIZATION, constants_1.Constants.OAUTH_HEADER_PREFIX.concat(token));
            }
        }
        catch (error) {
            if (!(error instanceof sdk_exception_1.SDKException)) {
                error = new sdk_exception_1.SDKException(null, null, null, error);
            }
            throw error;
        }
    }
    async refreshAccessToken(user, store) {
        let initializer = await initializer_1.Initializer.getInitializer();
        let url = initializer.getEnvironment().getAccountsUrl();
        var formDataRequestBody = new form_data_1.default();
        formDataRequestBody.append(constants_1.Constants.REFRESH_TOKEN, this.refreshToken);
        formDataRequestBody.append(constants_1.Constants.CLIENT_ID, this.clientID);
        formDataRequestBody.append(constants_1.Constants.CLIENT_SECRET, this.clientSecret);
        formDataRequestBody.append(constants_1.Constants.GRANT_TYPE, constants_1.Constants.REFRESH_TOKEN);
        const requestDetails = {
            method: constants_1.Constants.REQUEST_METHOD_POST,
            headers: {},
            body: formDataRequestBody,
            encoding: 'utf8',
            allowGetBody: true,
            throwHttpErrors: false
        };
        var response = await this.getResponse(url, requestDetails);
        try {
            await this.parseResponse(response.body);
            if (this.id == null) {
                await this.generateId();
            }
            store.saveToken(user, this);
        }
        catch (error) {
            if (error instanceof sdk_exception_1.SDKException) {
                throw error;
            }
            else if (error instanceof Error) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.SAVE_TOKEN_ERROR, null, null, error);
            }
        }
        return this;
    }
    async generateAccessToken(user, store) {
        let initializer = await initializer_1.Initializer.getInitializer();
        let url = initializer.getEnvironment().getAccountsUrl();
        var formDataRequestBody = new form_data_1.default();
        formDataRequestBody.append(constants_1.Constants.REFRESH_TOKEN, this.refreshToken);
        formDataRequestBody.append(constants_1.Constants.CLIENT_ID, this.clientID);
        formDataRequestBody.append(constants_1.Constants.CLIENT_SECRET, this.clientSecret);
        if (this.redirectURL != null) {
            formDataRequestBody.append(constants_1.Constants.REDIRECT_URI, this.redirectURL);
        }
        formDataRequestBody.append(constants_1.Constants.GRANT_TYPE, constants_1.Constants.GRANT_TYPE_AUTH_CODE);
        formDataRequestBody.append(constants_1.Constants.CODE, this.grantToken);
        const requestDetails = {
            method: constants_1.Constants.REQUEST_METHOD_POST,
            headers: {},
            body: formDataRequestBody,
            encoding: 'utf8',
            allowGetBody: true,
            throwHttpErrors: false
        };
        var response = await this.getResponse(url, requestDetails);
        try {
            await this.parseResponse(response.body);
            await this.generateId();
            await store.saveToken(user, this);
        }
        catch (error) {
            if (error instanceof sdk_exception_1.SDKException) {
                throw error;
            }
            else if (error instanceof Error) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.SAVE_TOKEN_ERROR, null, null, error);
            }
        }
        return this;
    }
    async getResponse(url, requestDetails) {
        return await (0, got_1.default)(url, requestDetails);
    }
    async parseResponse(response) {
        var responseJSON = JSON.parse(response);
        if (!responseJSON.hasOwnProperty(constants_1.Constants.ACCESS_TOKEN)) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.INVALID_TOKEN_ERROR, responseJSON.hasOwnProperty(constants_1.Constants.ERROR_KEY)
                ? responseJSON[constants_1.Constants.ERROR_KEY].toString()
                : constants_1.Constants.NO_ACCESS_TOKEN_ERROR);
        }
        this.accessToken = responseJSON[constants_1.Constants.ACCESS_TOKEN];
        this.expiresIn = (new Date().getTime() + (await this.getTokenExpiryTime(responseJSON))).toString();
        if (responseJSON.hasOwnProperty(constants_1.Constants.REFRESH_TOKEN)) {
            this.refreshToken = responseJSON[constants_1.Constants.REFRESH_TOKEN];
        }
        return this;
    }
    getTokenExpiryTime(response) {
        return response.hasOwnProperty(constants_1.Constants.EXPIRES_IN_SEC)
            ? response[constants_1.Constants.EXPIRES_IN]
            : response[constants_1.Constants.EXPIRES_IN] * 1000;
    }
    async remove() {
        try {
            let initializer = await initializer_1.Initializer.getInitializer();
            await initializer.getStore().deleteToken(this);
            return true;
        }
        catch (error) {
            if (error instanceof sdk_exception_1.SDKException) {
                throw error;
            }
            else if (error instanceof Error) {
                throw new sdk_exception_1.SDKException(null, null, null, error);
            }
        }
        return false;
    }
    async generateId() {
        let email = (await initializer_1.Initializer.getInitializer()).getUser().getEmail();
        let builder = constants_1.Constants.TYPE_SCRIPT + email.substring(0, email.indexOf('@')) + '_';
        builder =
            builder +
                (await initializer_1.Initializer.getInitializer()).getEnvironment().getName() +
                '_';
        if (this.refreshToken != null) {
            builder =
                builder + this.refreshToken.substring(this.refreshToken.length - 4);
        }
        this.id = builder;
    }
}
exports.OAuthToken = OAuthToken;
//# sourceMappingURL=oauth_token.js.map