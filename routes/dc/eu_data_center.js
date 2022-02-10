"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EUDataCenter = void 0;
const data_center_1 = require("./data_center");
/**
 * This class represents the properties of Zoho CRM in EU Domain.
 * @extends DataCenter
 */
class EUDataCenter extends data_center_1.DataCenter {
    /**
     * This method represents the Zoho CRM Production environment in EU domain
     * @returns {Environment} An instance of Environment
     */
    static PRODUCTION() {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = data_center_1.DataCenter.setEnvironment("https://www.zohoapis.eu", this.EU.getIAMUrl(), this.EU.getFileUploadUrl(), "eu_prd");
        }
        return this._PRODUCTION;
    }
    /**
     *  This method represents the Zoho CRM Sandbox environment in EU domain
     * @returns {Environment} An instance of Environment
     */
    static SANDBOX() {
        if (this._SANDBOX == null) {
            this._SANDBOX = data_center_1.DataCenter.setEnvironment("https://sandbox.zohoapis.eu", this.EU.getIAMUrl(), this.EU.getFileUploadUrl(), "eu_sdb");
        }
        return this._SANDBOX;
    }
    /**
     * This method represents the Zoho CRM Developer environment in EU domain
     * @returns {Environment} An instance of Environment
     */
    static DEVELOPER() {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = data_center_1.DataCenter.setEnvironment("https://developer.zohoapis.eu", this.EU.getIAMUrl(), this.EU.getFileUploadUrl(), "eu_dev");
        }
        return this._DEVELOPER;
    }
    getIAMUrl() {
        return "https://accounts.zoho.eu/oauth/v2/token";
    }
    getFileUploadUrl() {
        return "https://content.zohoapis.eu";
    }
}
exports.EUDataCenter = EUDataCenter;
EUDataCenter.EU = new EUDataCenter();
//# sourceMappingURL=eu_data_center.js.map