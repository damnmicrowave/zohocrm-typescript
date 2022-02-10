"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_signature_1 = require("@zohocrm/typescript-sdk-2.0/routes/user_signature");
const sdk_config_builder_1 = require("@zohocrm/typescript-sdk-2.0/routes/sdk_config_builder");
const file_store_1 = require("@zohocrm/typescript-sdk-2.0/models/authenticator/store/file_store");
const logger_1 = require("@zohocrm/typescript-sdk-2.0/routes/logger/logger");
const log_builder_1 = require("@zohocrm/typescript-sdk-2.0/routes/logger/log_builder");
const us_data_center_1 = require("@zohocrm/typescript-sdk-2.0/routes/dc/us_data_center");
const oauth_builder_1 = require("@zohocrm/typescript-sdk-2.0/models/authenticator/oauth_builder");
const initialize_builder_1 = require("@zohocrm/typescript-sdk-2.0/routes/initialize_builder");
const record_operations_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/record_operations");
const response_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/response_wrapper");
const parameter_map_1 = require("@zohocrm/typescript-sdk-2.0/routes/parameter_map");
const header_map_1 = require("@zohocrm/typescript-sdk-2.0/routes/header_map");
class SampleRecord {
    static async call() {
        /*
         * Create an instance of Logger Class that takes two parameters
         * level -> Level of the log messages to be logged. Can be configured by typing Levels "." and choose any level from the list displayed.
         * filePath -> Absolute file path, where messages need to be logged.
         */
        let logger = new log_builder_1.LogBuilder()
            .level(logger_1.Levels.INFO)
            .filePath("/Users/username/Documents/final-logs.log")
            .build();
        /*
         * Create an UserSignature instance that takes user Email as parameter
         */
        let user1 = new user_signature_1.UserSignature("abc@zoho.com");
        /*
         * Configure the environment
         * which is of the pattern Domain.Environment
         * Available Domains: USDataCenter, EUDataCenter, INDataCenter, CNDataCenter, AUDataCenter
         * Available Environments: PRODUCTION(), DEVELOPER(), SANDBOX()
         */
        let environment1 = us_data_center_1.USDataCenter.PRODUCTION();
        /*
        * Create a Token instance
        * clientId -> OAuth client id.
        * clientSecret -> OAuth client secret.
        * grantToken -> OAuth Grant Token.
        * refreshToken -> OAuth Refresh Token token.
        * redirectURL -> OAuth Redirect URL.
        */
        let token1 = new oauth_builder_1.OAuthBuilder()
            .clientId("clientId")
            .clientSecret("clientSecret")
            .refreshToken("refreshToken")
            .redirectURL("redirectURL")
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
        // let tokenstore: DBStore = new DBBuilder()
        //  .host("hostName")
        //  .databaseName("databaseName")
        //  .userName("userName")
        //  .portNumber(3306)
        //  .tableName("tableName")
        //  .password("password")
        //  .build();
        /*
         * Create an instance of FileStore that takes absolute file path as parameter
         */
        let store = new file_store_1.FileStore("/Users/username/ts_sdk_tokens.txt");
        /*
        * autoRefreshFields
        * if true - all the modules' fields will be auto-refreshed in the background, every    hour.
        * if false - the fields will not be auto-refreshed in the background. The user can manually delete the file(s) or refresh the fields using methods from ModuleFieldsHandler(utils/util/module_fields_handler.js)
        *
        * pickListValidation
        * A boolean field that validates user input for a pick list field and allows or disallows the addition of a new value to the list.
        * True - the SDK validates the input. If the value does not exist in the pick list, the SDK throws an error.
        * False - the SDK does not validate the input and makes the API request with the user’s input to the pick list
        */
        let sdkConfig = new sdk_config_builder_1.SDKConfigBuilder().pickListValidation(false).autoRefreshFields(true).build();
        /*
         * The path containing the absolute directory path to store user specific JSON files containing module fields information.
         */
        let resourcePath = "/Users/user_name/Documents/ts-app";
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
            (await new initialize_builder_1.InitializeBuilder())
                .user(user1)
                .environment(environment1)
                .token(token1)
                .store(store)
                .SDKConfig(sdkConfig)
                .resourcePath(resourcePath)
                .logger(logger)
                .initialize();
        }
        catch (error) {
            console.log(error);
        }
        await SampleRecord.getRecords("leads");
        // await Initializer.removeUserConfiguration(user1, environment1);
        // let user2: UserSignature = new UserSignature("abc2@zoho.eu");
        // let environment2: Environment = EUDataCenter.SANDBOX();
        // let token2: OAuthToken = new OAuthBuilder()
        //  .clientId("clientId")
        //  .clientSecret("clientSecret")
        //  .grantToken("grantToken")
        //  .refreshToken("refreshToken")
        //  .redirectURL("https://www.zoho.com")
        //  .build();
        // let sdkConfig2: SDKConfig = new SDKConfigBuilder()
        // .pickListValidation(true)
        // .autoRefreshFields(true)
        // .build();
        // (await new InitializeBuilder())
        // .user(user2)
        // .environment(environment2)
        // .token(token2)
        // .SDKConfig(sdkConfig2)
        // // .requestProxy(requestProxy)
        // .switchUser();
        // await SampleRecord.getRecords("Leads");
    }
    static async getRecords(moduleAPIName) {
        try {
            let moduleAPIName = "Leads";
            //Get instance of RecordOperations Class
            let recordOperations = new record_operations_1.RecordOperations();
            let paramInstance = new parameter_map_1.ParameterMap();
            await paramInstance.add(record_operations_1.GetRecordsParam.APPROVED, "both");
            let headerInstance = new header_map_1.HeaderMap();
            await headerInstance.add(record_operations_1.GetRecordsHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T00:00:00+05:30"));
            //Call getRecords method that takes paramInstance, headerInstance and moduleAPIName as parameters
            let response = await recordOperations.getRecords(moduleAPIName, paramInstance, headerInstance);
            if (response != null) {
                //Get the status code from response
                console.log("Status Code: " + response.getStatusCode());
                if ([204, 304].includes(response.getStatusCode())) {
                    console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                    return;
                }
                //Get the object from response
                let responseObject = response.getObject();
                if (responseObject != null) {
                    //Check if expected ResponseWrapper instance is received
                    if (responseObject instanceof response_wrapper_1.ResponseWrapper) {
                        //Get the array of obtained Record instances
                        let records = responseObject.getData();
                        for (let record of records) {
                            //Get the ID of each Record
                            console.log("Record ID: " + record.getId());
                            //Get the createdBy User instance of each Record
                            let createdBy = record.getCreatedBy();
                            //Check if createdBy is not null
                            if (createdBy != null) {
                                //Get the ID of the createdBy User
                                console.log("Record Created By User-ID: " + createdBy.getId());
                                //Get the name of the createdBy User
                                console.log("Record Created By User-Name: " + createdBy.getName());
                                //Get the Email of the createdBy User
                                console.log("Record Created By User-Email: " + createdBy.getEmail());
                            }
                            //Get the CreatedTime of each Record
                            console.log("Record CreatedTime: " + record.getCreatedTime());
                            //Get the modifiedBy User instance of each Record
                            let modifiedBy = record.getModifiedBy();
                            //Check if modifiedBy is not null
                            if (modifiedBy != null) {
                                //Get the ID of the modifiedBy User
                                console.log("Record Modified By User-ID: " + modifiedBy.getId());
                                //Get the name of the modifiedBy User
                                console.log("Record Modified By User-Name: " + modifiedBy.getName());
                                //Get the Email of the modifiedBy User
                                console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                            }
                            //Get the ModifiedTime of each Record
                            console.log("Record ModifiedTime: " + record.getModifiedTime());
                            //Get the list of Tag instance each Record
                            let tags = record.getTag();
                            //Check if tags is not null
                            if (tags != null) {
                                tags.forEach(tag => {
                                    //Get the Name of each Tag
                                    console.log("Record Tag Name: " + tag.getName());
                                    //Get the Id of each Tag
                                    console.log("Record Tag ID: " + tag.getId());
                                });
                            }
                            //To get particular field value
                            console.log("Record Field Value: " + record.getKeyValue("Last_Name")); // FieldApiName
                            console.log("Record KeyValues: ");
                            let keyValues = record.getKeyValues();
                            let keyArray = Array.from(keyValues.keys());
                            for (let keyName of keyArray) {
                                let value = keyValues.get(keyName);
                                console.log(keyName + " : " + value);
                            }
                        }
                    }
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
SampleRecord.call();
//# sourceMappingURL=multi_thread.js.map