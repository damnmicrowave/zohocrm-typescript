import { UserSignature } from "@zohocrm/typescript-sdk-2.0/routes/user_signature"
import { SDKConfigBuilder } from "@zohocrm/typescript-sdk-2.0/routes/sdk_config_builder"
import { DBStore } from "@zohocrm/typescript-sdk-2.0/models/authenticator/store/db_store"
import { FileStore } from "@zohocrm/typescript-sdk-2.0/models/authenticator/store/file_store"
import { SDKConfig } from "@zohocrm/typescript-sdk-2.0/routes/sdk_config"
import { Levels, Logger } from "@zohocrm/typescript-sdk-2.0/routes/logger/logger"
import { LogBuilder } from "@zohocrm/typescript-sdk-2.0/routes/logger/log_builder"
import { Environment } from "@zohocrm/typescript-sdk-2.0/routes/dc/environment"
import { USDataCenter } from "@zohocrm/typescript-sdk-2.0/routes/dc/us_data_center"
import { OAuthBuilder } from "@zohocrm/typescript-sdk-2.0/models/authenticator/oauth_builder"
import { InitializeBuilder } from "@zohocrm/typescript-sdk-2.0/routes/initialize_builder"
import { RequestProxy } from "@zohocrm/typescript-sdk-2.0/routes/request_proxy"
import { ProxyBuilder } from "@zohocrm/typescript-sdk-2.0/routes/proxy_builder"
import { DBBuilder } from "@zohocrm/typescript-sdk-2.0/models/authenticator/store/db_builder";

export class SDKInitializer {
    public static async initializeSDK() {

        /*
         * Create an instance of Logger Class that takes two parameters
         * level -> Level of the log messages to be logged. Can be configured by typing Levels "." and choose any level from the list displayed.
         * filePath -> Absolute file path, where messages need to be logged.
         */
        let logger: Logger = new LogBuilder()
            .level(Levels.INFO)
            .filePath("/Users/username/Documents/".concat(new Date().toISOString().split('T')[0], ".log"))
            .build();

        /*
         * Create an UserSignature instance that takes user Email as parameter
         */
        let user: UserSignature = new UserSignature("abc@zoho.com");

        /*
         * Configure the environment
         * which is of the pattern Domain.Environment
         * Available Domains: USDataCenter, EUDataCenter, INDataCenter, CNDataCenter, AUDataCenter
         * Available Environments: PRODUCTION(), DEVELOPER(), SANDBOX()
         */
        let environment: Environment = USDataCenter.PRODUCTION();

        /*
         * A Boolean value to allow or prevent auto-refreshing of the modules' fields in the background.
         * if true - all the modules' fields will be auto-refreshed in the background whenever there is any change.
         * if false - the fields will not be auto-refreshed in the background. The user can manually delete the file(s) or the specific module's fields using methods from ModuleFieldsHandler
         */
        let sdkConfig: SDKConfig = new SDKConfigBuilder().autoRefreshFields(false).pickListValidation(true).build();

        // let store: DBStore = new DBStore();
        // let tokenstore: FileStore = new FileStore("/Users/username/Documents/tokens1.txt");

        let token = new OAuthBuilder()
            // .id("id")
            .clientId("clientId")
            .clientSecret("clientSecret")
            // .grantToken("grantToken")
            .refreshToken("refreshToken")
            // .redirectURL("https://www.zoho.com")
            .build();

        /*
        * Create an instance of TokenStore.
        * host -> DataBase host name. Default "localhost"
        * databaseName -> DataBase name. Default "zohooauth"
        * userName -> DataBase user name. Default "root"
        * password -> DataBase password. Default ""
        * portNumber -> DataBase port number. Default "3306"
        * tableName -> DataBase table name. Default "oauthtoken"
        */
        // let store: DBStore = new DBBuilder().build();;

        let tokenstore = new DBBuilder()
        .host("hostName")
        .databaseName("databaseName")
        .userName("userName")
        .portNumber(3306)
        .tableName("tableName")
        .password("password")
        .build();

        /*
         * The path containing the absolute directory path to store user specific JSON files containing module fields information. 
         */
        let resourcePath: string = "/Users/user_name/Documents/ts-app";

        // let proxyBuilder = new ProxyBuilder().host().port()
        /*
         * Call the static initialize method of Initializer class that takes the following arguments
         * user -> UserSignature instance
         * environment -> Environment instance
         * token -> Token instance
         * store -> TokenStore instance
         * SDKConfig -> SDKConfig instance
         * resourcePath -> resourcePath
         * logger -> Logger instance
         */
        try {
            (await new InitializeBuilder())
                .user(user)
                .environment(environment)
                .token(token)
                .store(tokenstore)
                .SDKConfig(sdkConfig)
                .resourcePath(resourcePath)
                .logger(logger)
                .initialize();
        } catch (error) {
            console.log(error);
        }

        // console.log(await tokenstore.getTokens());
    }
}
