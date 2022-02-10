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
exports.Files = void 0;
const body_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/file/body_wrapper");
const action_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/file/action_wrapper");
const file_body_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/file/file_body_wrapper");
const success_response_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/file/success_response");
const api_exception_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/file/api_exception");
const file_operations_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/file/file_operations");
const parameter_map_1 = require("@zohocrm/typescript-sdk-2.0/routes/parameter_map");
const stream_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/utils/util/stream_wrapper");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
class Files {
    /**
     * <h3> Upload File</h3>
     * This method is used to upload a file and print the response.
     */
    static async uploadFiles(absoluteFilePath) {
        //Get instance of FileOperations Class
        let fileOperations = new file_operations_1.FileOperations();
        //Get instance of FileBodyWrapper Class that will contain the request body
        let request = new body_wrapper_1.BodyWrapper();
        let paramInstance = new parameter_map_1.ParameterMap();
        await paramInstance.add(file_operations_1.UploadFilesParam.TYPE, "inline");
        /** StreamWrapper can be initialized in any of the following ways */
        /**
         * param 1 -> fileName
         * param 2 -> Read Stream.
         */
        // let streamWrapper1 = new StreamWrapper(null, fs.createReadStream("/Users/user_name/Desktop/file1.txt"));
        // let streamWrapper3 = new StreamWrapper(null, fs.createReadStream("/Users/user_name/Desktop/file2.txt"));
        /**
         * param 1 -> fileName
         * param 2 -> Read Stream
         * param 3 -> Absolute File Path of the file to be attached
         */
        let streamWrapper2 = new stream_wrapper_1.StreamWrapper(undefined, undefined, absoluteFilePath);
        let files = [];
        files.push(streamWrapper2);
        //Set files to the FileBodyWrapper instance
        request.setFile(files);
        //Call uploadFile method that takes BodyWrapper instance and ParameterMap instance as parameter.
        let response = await fileOperations.uploadFiles(request, paramInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received.
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained action responses
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof success_response_1.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof api_exception_1.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof api_exception_1.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());
                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    //Get the details map
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
    /**
     * <h3> Get File</h3>
     * This method is used to download the file with ID and write in the destinationFolder
     * @param id The ID of the uploaded File.
     * @param destinationFolder The absolute path of the destination folder to store the File
     */
    static async getFile(id, destinationFolder) {
        //example
        //let id = "ae9c7cefa418aec1d6a5cc2d9ab35c3231aae3bfeef7d5e00a54b7563c0dd42b";
        //let destinationFolder = "/Users/user_name/Desktop"
        //Get instance of FileOperations Class
        let fileOperations = new file_operations_1.FileOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new parameter_map_1.ParameterMap();
        //Add the id to ParameterMap instance
        await paramInstance.add(file_operations_1.GetFileParam.ID, id);
        //Call getFile method that takes ParameterMap instance as parameter
        let response = await fileOperations.getFile(paramInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject !== null) {
                //Check if expected FileBodyWrapper instance is received
                if (responseObject instanceof file_body_wrapper_1.FileBodyWrapper) {
                    //Get StreamWrapper instance from the returned FileBodyWrapper instance
                    let streamWrapper = responseObject.getFile();
                    let name = streamWrapper.getName();
                    if (name !== undefined) {
                        //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                        let fileName = path.join(destinationFolder, name);
                        //Get the stream from StreamWrapper instance
                        let readStream = streamWrapper.getStream();
                        if (readStream !== undefined && readStream instanceof Buffer) {
                            //Write the stream to the destination file.
                            fs.writeFileSync(fileName, readStream);
                        }
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof api_exception_1.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());
                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    //Get the details map
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
exports.Files = Files;
//# sourceMappingURL=file.js.map