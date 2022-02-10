"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CNDataCenter = void 0;
const data_center_1 = require("./data_center");
/**
 * This class represents the properties of Zoho CRM in CN Domain.
*/
class CNDataCenter extends data_center_1.DataCenter {
    /**
     * This method represents the Zoho CRM Production environment in CN domain
     * @returns {Environment} An instance of Environment
    */
    static PRODUCTION() {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = data_center_1.DataCenter.setEnvironment("https://www.zohoapis.com.cn", this.CN.getIAMUrl(), this.CN.getFileUploadUrl(), "cn_prd");
        }
        return this._PRODUCTION;
    }
    /**
     *  This method represents the Zoho CRM Sandbox environment in CN domain
     * @returns {Environment} An instance of Environment
    */
    static SANDBOX() {
        if (this._SANDBOX == null) {
            this._SANDBOX = data_center_1.DataCenter.setEnvironment("https://sandbox.zohoapis.com.cn", this.CN.getIAMUrl(), this.CN.getFileUploadUrl(), "cn_sdb");
        }
        return this._SANDBOX;
    }
    /**
     *  This method represents the Zoho CRM Developer environment in CN domain
     * @returns {Environment} An instance of Environment
    */
    static DEVELOPER() {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = data_center_1.DataCenter.setEnvironment("https://developer.zohoapis.com.cn", this.CN.getIAMUrl(), this.CN.getFileUploadUrl(), "cn_dev");
        }
        return this._DEVELOPER;
    }
    getIAMUrl() {
        return "https://accounts.zoho.com.cn/oauth/v2/token";
    }
    getFileUploadUrl() {
        return "https://content.zohoapis.com.cn";
    }
}
exports.CNDataCenter = CNDataCenter;
CNDataCenter.CN = new CNDataCenter();
//# sourceMappingURL=cn_data_center.js.map