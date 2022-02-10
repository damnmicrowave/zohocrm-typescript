import { DataCenter } from './data_center'

import { Environment } from './environment';

/**
 * This class represents the properties of Zoho CRM in EU Domain.
 * @extends DataCenter
 */
export class EUDataCenter extends DataCenter {

    private static _PRODUCTION: Environment;

    private static _SANDBOX: Environment;

    private static _DEVELOPER: Environment;

    private static EU: EUDataCenter = new EUDataCenter();

    /**
     * This method represents the Zoho CRM Production environment in EU domain
     * @returns {Environment} An instance of Environment
     */
    public static PRODUCTION(): Environment {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = DataCenter.setEnvironment("https://www.zohoapis.eu", this.EU.getIAMUrl(), this.EU.getFileUploadUrl(), "eu_prd");
        }

        return this._PRODUCTION;
    }

    /**
     *  This method represents the Zoho CRM Sandbox environment in EU domain
     * @returns {Environment} An instance of Environment
     */
    public static SANDBOX(): Environment {
        if (this._SANDBOX == null) {
            this._SANDBOX = DataCenter.setEnvironment("https://sandbox.zohoapis.eu", this.EU.getIAMUrl(), this.EU.getFileUploadUrl(), "eu_sdb");
        }

        return this._SANDBOX;
    }

    /**
     * This method represents the Zoho CRM Developer environment in EU domain
     * @returns {Environment} An instance of Environment
     */
    public static DEVELOPER(): Environment {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = DataCenter.setEnvironment("https://developer.zohoapis.eu", this.EU.getIAMUrl(), this.EU.getFileUploadUrl(), "eu_dev");
        }

        return this._DEVELOPER;
    }

    public getIAMUrl() {
        return "https://accounts.zoho.eu/oauth/v2/token";
    }

    public getFileUploadUrl() {
        return "https://content.zohoapis.eu";
    }
}