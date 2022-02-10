"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthBuilder = void 0;
const utility_1 = require("../../utils/util/utility");
const constants_1 = require("../../utils/util/constants");
const sdk_exception_1 = require("../../core/com/zoho/crm/api/exception/sdk_exception");
const oauth_token_1 = require("./oauth_token");
class OAuthBuilder {
    constructor() {
        this._clientID = null;
        this._clientSecret = null;
        this._redirectURL = null;
        this._refreshToken = null;
        this._grantToken = null;
        this._accessToken = null;
        this._id = null;
    }
    id(id) {
        this._id = id;
        return this;
    }
    clientId(clientID) {
        utility_1.Utility.assertNotNull(clientID, constants_1.Constants.TOKEN_ERROR, constants_1.Constants.CLIENT_ID_NULL_ERROR_MESSAGE);
        this._clientID = clientID;
        return this;
    }
    clientSecret(clientSecret) {
        utility_1.Utility.assertNotNull(clientSecret, constants_1.Constants.TOKEN_ERROR, constants_1.Constants.CLIENT_SECRET_NULL_ERROR_MESSAGE);
        this._clientSecret = clientSecret;
        return this;
    }
    redirectURL(redirectURL) {
        this._redirectURL = redirectURL;
        return this;
    }
    refreshToken(refreshToken) {
        this._refreshToken = refreshToken;
        return this;
    }
    grantToken(grantToken) {
        this._grantToken = grantToken;
        return this;
    }
    accessToken(accessToken) {
        this._accessToken = accessToken;
        return this;
    }
    build() {
        if (this._grantToken == null &&
            this._refreshToken == null &&
            this._id == null &&
            this._accessToken == null) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.MANDATORY_VALUE_ERROR, constants_1.Constants.MANDATORY_KEY_ERROR, constants_1.Constants.OAUTH_MANDATORY_KEYS);
        }
        return new oauth_token_1.OAuthToken(this._clientID, this._clientSecret, this._grantToken, this._refreshToken, this._redirectURL, this._id, this._accessToken);
    }
}
exports.OAuthBuilder = OAuthBuilder;
//# sourceMappingURL=oauth_builder.js.map