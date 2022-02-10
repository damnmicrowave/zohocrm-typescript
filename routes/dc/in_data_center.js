"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INDataCenter = void 0;
const data_center_1 = require("./data_center");
/**
 * This class represents the properties of Zoho CRM in IN Domain.
 * @extends DataCenter
 */
class INDataCenter extends data_center_1.DataCenter {
    /**
     * This method represents the Zoho CRM Production environment in IN domain
     * @returns {Environment} An instance of Environment
     */
    static PRODUCTION() {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = data_center_1.DataCenter.setEnvironment("https://www.zohoapis.in", this.IN.getIAMUrl(), this.IN.getFileUploadUrl(), "in_prd");
        }
        return this._PRODUCTION;
    }
    /**
     * This method represents the Zoho CRM Sandbox environment in IN domain
     * @returns {Environment} An instance of Environment
     */
    static SANDBOX() {
        if (this._SANDBOX == null) {
            this._SANDBOX = data_center_1.DataCenter.setEnvironment("https://sandbox.zohoapis.in", this.IN.getIAMUrl(), this.IN.getFileUploadUrl(), "in_sdb");
        }
        return this._SANDBOX;
    }
    /**
     * This method represents the Zoho CRM Developer environment in IN domain
     * @returns {Environment} An instance of Environment
     */
    static DEVELOPER() {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = data_center_1.DataCenter.setEnvironment("https://developer.zohoapis.in", this.IN.getIAMUrl(), this.IN.getFileUploadUrl(), "in_dev");
        }
        return this._DEVELOPER;
    }
    getIAMUrl() {
        return "https://accounts.zoho.in/oauth/v2/token";
    }
    getFileUploadUrl() {
        return "https://content.zohoapis.in";
    }
}
exports.INDataCenter = INDataCenter;
INDataCenter.IN = new INDataCenter();
//# sourceMappingURL=in_data_center.js.map