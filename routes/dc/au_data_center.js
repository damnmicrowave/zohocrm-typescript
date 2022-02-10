"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUDataCenter = void 0;
const data_center_1 = require("./data_center");
/**
 * This class represents the properties of Zoho CRM in AU Domain.
 * @extends DataCenter
*/
class AUDataCenter extends data_center_1.DataCenter {
    /**
     * This method represents the Zoho CRM Production environment in AU domain
     * @returns {Environment} An instance of Environment
    */
    static PRODUCTION() {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = data_center_1.DataCenter.setEnvironment("https://www.zohoapis.com.au", this.AU.getIAMUrl(), this.AU.getFileUploadUrl(), "au_prd");
        }
        return this._PRODUCTION;
    }
    /**
     * This method represents the Zoho CRM Sandbox environment in AU domain
     * @returns {Environment} An instance of Environment
    */
    static SANDBOX() {
        if (this._SANDBOX == null) {
            this._SANDBOX = data_center_1.DataCenter.setEnvironment("https://sandbox.zohoapis.com.au", this.AU.getIAMUrl(), this.AU.getFileUploadUrl(), "au_sdb");
        }
        return this._SANDBOX;
    }
    /**
     * This method represents the Zoho CRM Developer environment in AU domain
     * @returns {Environment} An instance of Environment
    */
    static DEVELOPER() {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = data_center_1.DataCenter.setEnvironment("https://developer.zohoapis.com.au", this.AU.getIAMUrl(), this.AU.getFileUploadUrl(), "au_dev");
        }
        return this._DEVELOPER;
    }
    getIAMUrl() {
        return "https://accounts.zoho.com.au/oauth/v2/token";
    }
    getFileUploadUrl() {
        return "https://content.zohoapis.com.au";
    }
}
exports.AUDataCenter = AUDataCenter;
AUDataCenter.AU = new AUDataCenter();
//# sourceMappingURL=au_data_center.js.map