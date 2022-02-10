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
exports.FileStore = void 0;
const fs = __importStar(require("fs"));
const sdk_exception_1 = require("../../../core/com/zoho/crm/api/exception/sdk_exception");
const constants_1 = require("../../../utils/util/constants");
const oauth_token_1 = require("../oauth_token");
const oauth_builder_1 = require("../oauth_builder");
/**
 * This class stores the user token details to the file.
*/
class FileStore {
    /**
     * Creates an FileStore class instance with the specified parameters.
     * @param {string} filePath
    */
    constructor(filePath) {
        this.filePath = filePath;
        this.headers = [constants_1.Constants.ID, constants_1.Constants.USER_MAIL, constants_1.Constants.CLIENT_ID, constants_1.Constants.CLIENT_SECRET, constants_1.Constants.REFRESH_TOKEN, constants_1.Constants.ACCESS_TOKEN, constants_1.Constants.GRANT_TOKEN, constants_1.Constants.EXPIRY_TIME, constants_1.Constants.REDIRECT_URL];
        if (!fs.existsSync(this.filePath) || (fs.existsSync(this.filePath) && fs.readFileSync(this.filePath, 'utf-8') === "")) {
            fs.writeFileSync(filePath, this.headers.join(), 'utf-8');
        }
    }
    async getToken(user, token) {
        var oauth = undefined;
        try {
            var array = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            if (token instanceof oauth_token_1.OAuthToken) {
                for (var i = 0; i < array.length; i++) {
                    var line = array[i];
                    var nextRecord = line.split(",");
                    if (this.checkTokenExists(user.getEmail(), token, nextRecord)) {
                        token.setAccessToken(nextRecord[5]);
                        token.setExpiresIn(nextRecord[7]);
                        token.setRefreshToken(nextRecord[4]);
                        token.setId(nextRecord[0]);
                        token.setUserMail(nextRecord[1]);
                        return token;
                    }
                }
            }
        }
        catch (error) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.GET_TOKEN_FILE_ERROR, null, error);
        }
        return oauth;
    }
    async saveToken(user, token) {
        try {
            if (token instanceof oauth_token_1.OAuthToken) {
                token.setUserMail(user.getEmail());
                await this.deleteToken(token);
                var data = [];
                data[0] = token.getId();
                data[1] = user.getEmail();
                data[2] = token.getClientId();
                data[3] = token.getClientSecret();
                data[4] = token.getRefreshToken();
                data[5] = token.getAccessToken();
                data[6] = token.getGrantToken();
                data[7] = token.getExpiresIn();
                data[8] = token.getRedirectURL();
                fs.appendFileSync(this.filePath, "\n" + data.join());
            }
        }
        catch (e) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.SAVE_TOKEN_FILE_ERROR, null, e);
        }
    }
    async deleteToken(token) {
        try {
            var array = [];
            array = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            let deleted = false;
            if (token instanceof oauth_token_1.OAuthToken) {
                for (var i = 0; i < array.length; i++) {
                    var nextRecord = array[i].toString().split(",");
                    if (this.checkTokenExists(token.getUserMail(), token, nextRecord)) {
                        array.splice(i, 1);
                        deleted = true;
                        break; // Stop searching after we found the email
                    }
                }
                // Rewrite the file if we deleted the user account details.
                if (deleted) {
                    fs.writeFileSync(this.filePath, array.join("\n"), 'utf8');
                }
            }
        }
        catch (e) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.DELETE_TOKEN_FILE_ERROR, null, e);
        }
    }
    async getTokens() {
        try {
            var tokens = [];
            var array = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            for (var i = 1; i < array.length; i++) {
                let allContents = array[i];
                let nextRecord = allContents.split(",");
                let grantToken = (nextRecord[6] != null && nextRecord[6].length > 0) ? nextRecord[6] : null;
                let token = new oauth_builder_1.OAuthBuilder().clientId(nextRecord[2]).clientSecret(nextRecord[3]).refreshToken(nextRecord[4]).build();
                token.setId(nextRecord[0]);
                if (grantToken != null) {
                    token.setGrantToken(grantToken);
                }
                token.setUserMail(nextRecord[1]);
                token.setAccessToken(nextRecord[5]);
                token.setExpiresIn(nextRecord[7]);
                token.setRedirectURL(nextRecord[8]);
                tokens.push(token);
            }
            return tokens;
        }
        catch (error) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.GET_TOKENS_FILE_ERROR, null, error);
        }
    }
    deleteTokens() {
        try {
            fs.writeFileSync(this.filePath, this.headers.join(), 'utf-8');
        }
        catch (error) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.DELETE_TOKENS_FILE_ERROR, null, error);
        }
    }
    checkTokenExists(email, token, row) {
        if (email == null) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.USER_MAIL_NULL_ERROR, constants_1.Constants.USER_MAIL_NULL_ERROR_MESSAGE);
        }
        var clientId = token.getClientId();
        var grantToken = token.getGrantToken();
        var refreshToken = token.getRefreshToken();
        var tokenCheck = grantToken != null ? grantToken === row[6] : refreshToken === row[4];
        if (row[1] === email && row[2] === clientId && tokenCheck) {
            return true;
        }
        return false;
    }
    async getTokenById(id, token) {
        var oauth = undefined;
        try {
            var array = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            if (token instanceof oauth_token_1.OAuthToken) {
                let isRowPresent = false;
                for (var i = 0; i < array.length; i++) {
                    var allContents = array[i];
                    var nextRecord = allContents.split(",");
                    if (nextRecord[0] == id) {
                        isRowPresent = true;
                        let grantToken = (nextRecord[6] != null && nextRecord[6].length > 0) ? nextRecord[6] : null;
                        let redirectURL = (nextRecord[8] != null && nextRecord[8].length > 0) ? nextRecord[8] : null;
                        token.setClientId(nextRecord[2]);
                        token.setClientSecret(nextRecord[3]);
                        token.setRefreshToken(nextRecord[4]);
                        token.setId(id);
                        if (grantToken != null) {
                            token.setGrantToken(grantToken);
                        }
                        token.setUserMail(nextRecord[1]);
                        token.setAccessToken(nextRecord[5]);
                        token.setExpiresIn(nextRecord[7]);
                        token.setRedirectURL(redirectURL);
                        return token;
                    }
                }
                if (!isRowPresent) {
                    throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.GET_TOKEN_BY_ID_FILE_ERROR);
                }
            }
        }
        catch (error) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.GET_TOKEN_FILE_ERROR, null, error);
        }
        return oauth;
    }
}
exports.FileStore = FileStore;
//# sourceMappingURL=file_store.js.map