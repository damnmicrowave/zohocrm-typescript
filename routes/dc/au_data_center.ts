import { DataCenter } from './data_center'

import { Environment } from './environment';

/**
 * This class represents the properties of Zoho CRM in AU Domain.
 * @extends DataCenter
*/
export class AUDataCenter extends DataCenter {
    private static _PRODUCTION: Environment;

    private static _SANDBOX: Environment;

    private static _DEVELOPER: Environment;

    private static AU: AUDataCenter = new AUDataCenter();

    /**
     * This method represents the Zoho CRM Production environment in AU domain
     * @returns {Environment} An instance of Environment
    */
    public static PRODUCTION(): Environment {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = DataCenter.setEnvironment("https://www.zohoapis.com.au", this.AU.getIAMUrl(), this.AU.getFileUploadUrl(), "au_prd");
        }

        return this._PRODUCTION;
    }

    /**
     * This method represents the Zoho CRM Sandbox environment in AU domain
     * @returns {Environment} An instance of Environment
    */
    public static SANDBOX(): Environment {
        if (this._SANDBOX == null) {
            this._SANDBOX = DataCenter.setEnvironment("https://sandbox.zohoapis.com.au", this.AU.getIAMUrl(), this.AU.getFileUploadUrl(), "au_sdb");
        }

        return this._SANDBOX;
    }

    /**
     * This method represents the Zoho CRM Developer environment in AU domain
     * @returns {Environment} An instance of Environment
    */
    public static DEVELOPER(): Environment {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = DataCenter.setEnvironment("https://developer.zohoapis.com.au", this.AU.getIAMUrl(), this.AU.getFileUploadUrl(), "au_dev");
        }

        return this._DEVELOPER;
    }

    public getIAMUrl() {
        return "https://accounts.zoho.com.au/oauth/v2/token";
    }

    public getFileUploadUrl() {
        return "https://content.zohoapis.com.au";
    }
}