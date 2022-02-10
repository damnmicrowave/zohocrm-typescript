import * as path from 'path';
import * as fs from 'fs';
import { BulkWriteOperations, UploadFileHeader } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/bulk_write_operations";
import { FileBodyWrapper } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/file_body_wrapper';
import { StreamWrapper } from '@zohocrm/typescript-sdk-2.0/utils/util/stream_wrapper';
import { HeaderMap } from '@zohocrm/typescript-sdk-2.0/routes/header_map';
import { APIResponse } from '@zohocrm/typescript-sdk-2.0/routes/controllers/api_response';
import { ActionResponse } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/action_response';
import { BulkWriteResponse } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/bulk_write_response';
import { SuccessResponse } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/success_response';
import { APIException } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/api_exception';
import { RequestWrapper } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/request_wrapper';
import { CallBack } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/call_back';
import { Choice } from '@zohocrm/typescript-sdk-2.0/utils/util/choice';
import { Resource } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/resource';
import { FieldMapping } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/field_mapping';
import { ResponseWrapper } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/response_wrapper';
import { File } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/file';
import { Result } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/result';
import { User } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/users/user';
import { ResponseHandler } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/bulk_write/response_handler';

export class BulkWrite {
    /**
     * <h3> Upload File</h3>
     * This method is used to upload a CSV file in ZIP format for bulk write API. The response contains the file_id.
     * Use this ID while making the bulk write request.
     * @param orgID The unique ID (zgid) of your organization obtained through the Organization API.
     * @param absoluteFilePath The absoluteFilePath of the zip file you want to upload.
     */
    public static async uploadFile(orgID: string, absoluteFilePath: string) {

        //example
        //let orgID = "673573045";
        //let absoluteFilePath = "/Users/user_name/Documents/Leads.zip";

        //Get instance of BulkWriteOperations Class
        let bulkWriteOperations: BulkWriteOperations = new BulkWriteOperations();

        //Get instance of FileBodyWrapper class that will contain the request file
        let fileBodyWrapper: FileBodyWrapper = new FileBodyWrapper();

        /** StreamWrapper can be initialized in any of the following ways */

        /**
         * param 1 -> fileName
         * param 2 -> Read Stream.
         */
        let streamWrapper: StreamWrapper = new StreamWrapper(undefined, fs.createReadStream(absoluteFilePath));

        /**
         * param 1 -> fileName
         * param 2 -> Read Stream
         * param 3 -> Absolute File Path of the file to be attached
         */
        // let streamWrapper = new StreamWrapper(null, null, absoluteFilePath);

        //Set file to the FileBodyWrapper instance
        fileBodyWrapper.setFile(streamWrapper);

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        //To indicate that this a bulk write operation
        await headerInstance.add(UploadFileHeader.FEATURE, "bulk-write");

        await headerInstance.add(UploadFileHeader.X_CRM_ORG, orgID);

        //Call uploadFile method that takes FileBodyWrapper instance and headerInstance as parameter
        let response: APIResponse<ActionResponse> = await bulkWriteOperations.uploadFile(fileBodyWrapper, headerInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionResponse = response.getObject();

            if (responseObject != null) {

                //Check if the request is successful
                if (responseObject instanceof SuccessResponse) {

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    let details: Map<string, any> = responseObject.getDetails();

                    //Get the details map
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
                //Check if the request returned an exception
                else if (responseObject instanceof APIException) {

                    if (responseObject.getStatus() != null) {
                        //Get the Status
                        console.log("Status: " + responseObject.getStatus().getValue());
                    }

                    if (responseObject.getCode() != null) {
                        //Get the Code
                        console.log("Code: " + responseObject.getCode().getValue());
                    }

                    console.log("Details");

                    if (responseObject.getDetails() != null) {
                        //Get the details map
                        let details: Map<string, any> = responseObject.getDetails();

                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                    }

                    if (responseObject.getErrorMessage() != null) {
                        //Get the Error Message
                        console.log("Error Message: " + responseObject.getErrorMessage().getValue());
                    }

                    //Get the ErrorCode
                    console.log("ErrorCode: " + responseObject.getErrorCode());

                    if (responseObject.getXError() != null) {
                        //Get the XError
                        console.log("XError: " + responseObject.getXError().getValue());
                    }

                    if (responseObject.getInfo() != null) {
                        //Get the Info
                        console.log("Info: " + responseObject.getInfo().getValue());
                    }

                    if (responseObject.getXInfo() != null) {
                        //Get the XInfo
                        console.log("XInfo: " + responseObject.getXInfo().getValue());
                    }

                    //Get the HttpStatus
                    console.log("HttpStatus: " + responseObject.getHttpStatus());

                }
            }
        }
    }

    /**
     * <h3> Create BulkWrite Job</h3>
     * This method is used to create bulk write job with the uploaded file ID
     * @param moduleAPIName The API Name of the module.
     * @param fileId The ID of the uploaded file to create BulkWrite Job.
     */
    public static async createBulkWriteJob(moduleAPIName: string, fileId: string) {

        //example
        //let moduleAPIName = "Leads";
        //let fileId  = "34770616121001";

        //Get instance of BulkWriteOperations Class
        let bulkWriteOperations: BulkWriteOperations = new BulkWriteOperations();

        //Get instance of RequestWrapper Class that will contain the request body
        let requestWrapper: RequestWrapper = new RequestWrapper();

        //Get instance of CallBack Class
        let callBack: CallBack = new CallBack();

        //Set valid callback URL.
        callBack.setUrl("https://www.example.com/callback");

        //Set the HTTP method of the callback URL. The allowed value is post.
        callBack.setMethod(new Choice("post"));

        //The Bulk Write Job's details are posted to this URL on successful completion / failure of the job.
        requestWrapper.setCallback(callBack);

        //Set the charset of the uploaded file
        requestWrapper.setCharacterEncoding("UTF-8");

        //To set the type of operation you want to perform on the bulk write job.
        requestWrapper.setOperation(new Choice("insert"));

        let resources: Resource[] = [];

        //Get instance of Resource Class
        let resource: Resource = new Resource();

        // To set the type of module that you want to import. The value is data.
        resource.setType(new Choice("data"));

        //To set API name of the module that you select for bulk write job.
        resource.setModule(moduleAPIName);

        //To set the fileId obtained from file upload API.
        resource.setFileId(fileId);

        //True - Ignores the empty values.The default value is false.
        resource.setIgnoreEmpty(true);

        // To set a field as a unique field or ID of a record.
        // resource.setFindBy("Email");

        let fieldMappings: FieldMapping[] = [];

        //Get instance of FieldMapping Class
        let fieldMapping: FieldMapping = new FieldMapping();

        //To set API name of the field present in Zoho module object that you want to import.
        fieldMapping.setAPIName("Last_Name");

        //To set the column index of the field you want to map to the CRM field.
        fieldMapping.setIndex(0);

        fieldMappings.push(fieldMapping);

        fieldMapping = new FieldMapping();

        fieldMapping.setAPIName("Email");

        fieldMapping.setIndex(1);

        fieldMappings.push(fieldMapping);

        fieldMapping = new FieldMapping();

        fieldMapping.setAPIName("Company");

        fieldMapping.setIndex(2);

        fieldMappings.push(fieldMapping);

        fieldMapping = new FieldMapping();

        fieldMapping.setAPIName("Phone");

        fieldMapping.setIndex(3);

        fieldMappings.push(fieldMapping);

        let defaultValue: Map<string, string> = new Map<string, string>();

        fieldMapping = new FieldMapping();

        fieldMapping.setAPIName("Website");

        defaultValue.set("value", "www.zohoapis.com");

        //To set the default value for an empty column in the uploaded file.
        fieldMapping.setDefaultValue(defaultValue);

        fieldMappings.push(fieldMapping);

        resource.setFieldMappings(fieldMappings);

        resources.push(resource);

        //Set the array of resources to RequestWrapper instance
        requestWrapper.setResource(resources);

        //Call createBulkWriteJob method that takes RequestWrapper instance as parameter
        let response: APIResponse<ActionResponse> = await bulkWriteOperations.createBulkWriteJob(requestWrapper);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionResponse = response.getObject();

            if (responseObject != null) {

                //Check if the request is successful
                if (responseObject instanceof SuccessResponse) {

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    let details: Map<string, any> = responseObject.getDetails();

                    //Get the details map
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
                //Check if the request returned an exception
                else if (responseObject instanceof APIException) {

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

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
     * <h3> Get BulkWriteJob Details</h3>
     * This method is used to get the details of a bulk write job performed previously.
     * @param jobId The unique ID of the bulk write job.
     */
    public static async getBulkWriteJobDetails(jobId: bigint) {

        //example
        //let jobId = 34770615615003n;

        //Get instance of BulkWriteOperations Class
        let bulkWriteOperations: BulkWriteOperations = new BulkWriteOperations();

        //Call getBulkWriteJobDetails method that takes jobId as parameter
        let response: APIResponse<ResponseWrapper> = await bulkWriteOperations.getBulkWriteJobDetails(jobId);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ResponseWrapper = response.getObject();

            if (responseObject != null) {

                //Check if expected BulkWriteResponse instance is received.
                if (responseObject instanceof BulkWriteResponse) {
                    //Get the Job Status of each bulkWriteResponse
                    console.log("Bulk write Job Status: " + responseObject.getStatus());

                    //Get the CharacterEncoding of each bulkWriteResponse
                    console.log("Bulk write Character Encoding: " + responseObject.getCharacterEncoding());

                    let resources: Resource[] = responseObject.getResource();

                    if (resources != null) {
                        resources.forEach(resource => {
                            //Get the Status of each Resource
                            console.log("Bulk write Resource Status: " + resource.getStatus().getValue());

                            //Get the Type of each Resource
                            console.log("Bulk write Resource Type: " + resource.getType().getValue());

                            //Get the Module of each Resource
                            console.log("Bulk write Resource Module: " + resource.getModule());

                            let fieldMappings: FieldMapping[] = resource.getFieldMappings();

                            if (fieldMappings != null) {
                                fieldMappings.forEach(fieldMapping => {
                                    //Get the APIName of each FieldMapping
                                    console.log("Bulk write Resource FieldMapping Module: " + fieldMapping.getAPIName());

                                    if (fieldMapping.getIndex() != null) {
                                        //Get the Index of each FieldMapping
                                        console.log("Bulk write Resource FieldMapping Inded: " + fieldMapping.getIndex().toString());
                                    }

                                    if (fieldMapping.getFormat() != null) {
                                        //Get the Format of each FieldMapping
                                        console.log("Bulk write Resource FieldMapping Format: " + fieldMapping.getFormat());
                                    }

                                    if (fieldMapping.getFindBy() != null) {
                                        //Get the FindBy of each FieldMapping
                                        console.log("Bulk write Resource FieldMapping FindBy: " + fieldMapping.getFindBy());
                                    }

                                    if (fieldMapping.getDefaultValue() != null) {
                                        Array.from(fieldMapping.getDefaultValue().keys()).forEach(key => {
                                            console.log(key + ": " + fieldMapping.getDefaultValue().get(key));
                                        });
                                    }
                                });
                            }

                            let file: File = resource.getFile();

                            if (file != null) {
                                //Get the Status of the File
                                console.log("Bulk write Resource File Status: " + file.getStatus().getValue());

                                //Get the Name of the File
                                console.log("Bulk write Resource File Name: " + file.getName());

                                //Get the AddedCount of the File
                                console.log("Bulk write Resource File AddedCount: " + file.getAddedCount().toString());

                                //Get the SkippedCount of the File
                                console.log("Bulk write Resource File SkippedCount: " + file.getSkippedCount().toString());

                                //Get the UpdatedCount of the File
                                console.log("Bulk write Resource File UpdatedCount: " + file.getUpdatedCount().toString());

                                //Get the TotalCount of the File
                                console.log("Bulk write Resource File TotalCount: " + file.getTotalCount().toString());
                            }
                        });
                    }

                    let callback: CallBack = responseObject.getCallback();

                    if (callback != null) {
                        //Get the CallBack Url
                        console.log("Bulk write CallBack Url: " + callback.getUrl());

                        //Get the CallBack Method
                        console.log("Bulk write CallBack Method: " + callback.getMethod().getValue());
                    }

                    //Get the ID of each BulkWriteResponse
                    console.log("Bulk write ID: " + responseObject.getId().toString());

                    let result: Result = responseObject.getResult();

                    if (result != null) {
                        //Get the DownloadUrl of the Result
                        console.log("Bulk write DownloadUrl: " + result.getDownloadUrl());
                    }

                    //Get the CreatedBy User instance of each BulkWriteResponse
                    let createdBy: User = responseObject.getCreatedBy();

                    //Check if createdBy is not null
                    if (createdBy != null) {
                        //Get the ID of the CreatedBy User
                        console.log("Bulkwrite Created By User-ID: " + createdBy.getId());

                        //Get the Name of the CreatedBy User
                        console.log("Bulkwrite Created By user-Name: " + createdBy.getName());
                    }

                    //Get the Operation of each BulkWriteResponse
                    console.log("Bulk write Operation: " + responseObject.getOperation());

                    //Get the CreatedTime of each BulkWriteResponse
                    console.log("Bulk write File CreatedTime: " + responseObject.getCreatedTime().toString());
                }
                //Check if the request returned an exception
                else if (responseObject instanceof APIException) {

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

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
     * <h3> Download BulkWrite Result</h3>
     * This method is used to download the result of bulk write job.
     * @param downloadUrl The URL present in the download_url key in the response of Get Bulk Write Job Details.
     * @param destinationFolder The absolute path where downloaded file has to be stored.
     */
    public static async downloadBulkWriteResult(downloadUrl: string, destinationFolder: string) {

        //example
        //let downloadUrl = "https://download-accl.zoho.com/v2/crm/6735/bulk-write/347706122009/347706122009.zip";
        //let destinationFolder = "/Users/user_name/Documents";

        //Get instance of BulkWriteOperations Class
        let bulkWriteOperations: BulkWriteOperations = new BulkWriteOperations();

        //Call downloadBulkWriteResult method that takes downloadUrl as parameter
        let response: APIResponse<ResponseHandler> = await bulkWriteOperations.downloadBulkWriteResult(downloadUrl);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ResponseHandler = response.getObject();

            if (responseObject != null) {

                //Check if expected FileBodyWrapper instance is received
                if (responseObject instanceof FileBodyWrapper) {

                    //Get StreamWrapper instance from the returned FileBodyWrapper instance
                    let streamWrapper: StreamWrapper = responseObject.getFile();

                    let name: string | undefined = streamWrapper.getName();

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
                else if (responseObject instanceof APIException) {

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

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