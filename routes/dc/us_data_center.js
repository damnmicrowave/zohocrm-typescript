"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USDataCenter = void 0;
const data_center_1 = require("./data_center");
/**
 * This class represents the properties of Zoho CRM in US Domain.
 */
class USDataCenter extends data_center_1.DataCenter {
    /**
     * This method represents the Zoho CRM Production environment in US domain
     * @returns {Environment} An instance of Environment
     */
    static PRODUCTION() {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = data_center_1.DataCenter.setEnvironment("https://www.zohoapis.com", this.US.getIAMUrl(), this.US.getFileUploadUrl(), "us_prd");
        }
        return this._PRODUCTION;
    }
    /**
     * This method represents the Zoho CRM Sandbox environment in US domain
     * @returns {Environment} An instance of Environment
     */
    static SANDBOX() {
        if (this._SANDBOX == null) {
            this._SANDBOX = data_center_1.DataCenter.setEnvironment("https://sandbox.zohoapis.com", this.US.getIAMUrl(), this.US.getFileUploadUrl(), "us_sdb");
        }
        return this._SANDBOX;
    }
    /**
     * This method represents the Zoho CRM Developer environment in US domain
     * @returns {Environment} An instance of Environment
     */
    static DEVELOPER() {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = data_center_1.DataCenter.setEnvironment("https://developer.zohoapis.com", this.US.getIAMUrl(), this.US.getFileUploadUrl(), "us_dev");
        }
        return this._DEVELOPER;
    }
    getIAMUrl() {
        return "https://accounts.zoho.com/oauth/v2/token";
    }
    getFileUploadUrl() {
        return "https://content.zohoapis.com";
    }
}
exports.USDataCenter = USDataCenter;
USDataCenter.US = new USDataCenter();
//# sourceMappingURL=us_data_center.js.map