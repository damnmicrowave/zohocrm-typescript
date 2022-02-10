import * as fs from "fs";
import * as path from "path";
import { ActionWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/attachments/action_wrapper"
import { ResponseWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/attachments/response_wrapper"
import { APIException } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/attachments/api_exception"
import { SuccessResponse } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/attachments/success_response"
import { Attachment } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/attachments/attachment"
import { AttachmentsOperations, DeleteAttachmentsParam, GetAttachmentsParam, UploadLinkAttachmentParam } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/attachments/attachments_operations"
import { ParameterMap } from "@zohocrm/typescript-sdk-2.0/routes/parameter_map";
import { FileBodyWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/attachments/file_body_wrapper";
import { StreamWrapper } from "@zohocrm/typescript-sdk-2.0/utils/util/stream_wrapper";
import { APIResponse } from "@zohocrm/typescript-sdk-2.0/routes/controllers/api_response";
import { ActionHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/attachments/action_handler";
import { ResponseHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/attachments/response_handler";
import { ActionResponse } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/attachments/action_response";
import { Info } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/info";
import { User } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/users/user";
import { Record } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/record";

export class Attachments {
    /**
     * <h3> Get Attachments</h3>
     * This method is used to get a single record's attachments' details with ID and print the response.
     * @param moduleAPIName The API Name of the record's module
     * @param recordID The ID of the record to get attachments
     */
    public static async getAttachments(moduleAPIName: string, recordID: bigint) {
        //example
        // let moduleAPIName = "Leads";
        // let recordId = 34096432267003n;

        //Get instance of AttachmentsOperations Class that takes recordId and moduleAPIName as parameter
        let attachmentsOperations: AttachmentsOperations = new AttachmentsOperations(moduleAPIName, recordID);

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        //Possible parameters of Get Attachments Operation
        // await paramInstance.add(GetAttachmentsParam.FIELDS, 'id');

        await paramInstance.add(GetAttachmentsParam.PAGE, 1);

        await paramInstance.add(GetAttachmentsParam.PER_PAGE, 10);

        //Call getAttachments method that takes ParameterMap instance as parameter
        let response: APIResponse<ResponseHandler> = await attachmentsOperations.getAttachments(paramInstance);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ResponseHandler = response.getObject();

            if (responseObject !== null) {
                //Check if expected ResponseWrapper instance is received.
                if (responseObject instanceof ResponseWrapper) {
                    //Get the array of obtained Attachment instances
                    let attachments: Attachment[] = responseObject.getData();

                    attachments.forEach(attachment => {
                        //Get the ID of each attachment
                        console.log("Attachment ID: " + attachment.getId());

                        //Get the owner User instance of each attachment
                        let owner: User = attachment.getOwner();

                        //Check if owner is not null
                        if (owner !== undefined) {
                            //Get the Name of the Owner
                            console.log("Attachment Owner - Name: " + owner.getName());

                            //Get the ID of the Owner
                            console.log("Attachment Owner ID: " + owner.getId());

                            //Get the Email of the Owner
                            console.log("Attachment Owner Email: " + owner.getEmail());
                        }
                        if (attachment.getModifiedTime() !== undefined && attachment.getModifiedTime() !== null) {
                            //Get the modified time of each attachment
                            console.log("Attachment Modified Time: " + attachment.getModifiedTime().toString());
                        }

                        //Get the name of the File
                        console.log("Attachment File Name: " + attachment.getFileName());

                        //Get the created time of each attachment
                        console.log("Attachment Created Time: " + attachment.getCreatedTime());

                        //Get the Attachment file size
                        console.log("Attachment File Size: " + attachment.getSize());

                        //Get the parentId Record instance of each attachment
                        let parentId: Record = attachment.getParentId();

                        //Check if parentId is not null
                        if (parentId !== undefined) {
                            //Get the parent record Name of each attachment
                            console.log("Attachment parent record Name: " + parentId.getKeyValue("name"));

                            //Get the parent record ID of each attachment
                            console.log("Attachment parent record ID: " + parentId.getId());
                        }

                        if (attachment.getEditable() !== null && attachment.getEditable() !== undefined) {
                            //Check if the attachment is Editable
                            console.log("Attachment is Editable: " + attachment.getEditable().toString());
                        }

                        //Get the file ID of each attachment
                        console.log("Attachment File ID: " + attachment.getFileId());

                        //Get the type of each attachment
                        console.log("Attachment File Type: " + attachment.getType());

                        //Get the seModule of each attachment
                        console.log("Attachment seModule: " + attachment.getSeModule());

                        //Get the modifiedBy User instance of each attachment
                        let modifiedBy: User = attachment.getModifiedBy();

                        //Check if modifiedBy is not null
                        if (modifiedBy !== undefined) {
                            //Get the Name of the modifiedBy User
                            console.log("Attachment Modified By User-Name: " + modifiedBy.getName());

                            //Get the ID of the modifiedBy User
                            console.log("Attachment Modified By User-ID: " + modifiedBy.getId());

                            //Get the Email of the modifiedBy User
                            console.log("Attachment Modified By User-Email: " + modifiedBy.getEmail());
                        }

                        //Get the state of each attachment
                        console.log("Attachment State: " + attachment.getState());

                        //Get the createdBy User instance of each attachment
                        let createdBy: User = attachment.getCreatedBy();

                        //Check if createdBy is not null
                        if (createdBy !== undefined) {
                            //Get the name of the createdBy User
                            console.log("Attachment Created By User-Name: " + createdBy.getName());

                            //Get the ID of the createdBy User
                            console.log("Attachment Created By User-ID: " + createdBy.getId());

                            //Get the Email of the createdBy User
                            console.log("Attachment Created By User-Email: " + createdBy.getEmail());
                        }

                        //Get the linkUrl of each attachment
                        console.log("Attachment LinkUrl: " + attachment.getLinkUrl());
                    });

                    //Get the obtained Info object
                    let info: Info = responseObject.getInfo();

                    if (info !== null) {

                        if (info.getPerPage() !== null) {
                            //Get the PerPage of the Info
                            console.log("Attachment Info PerPage: " + info.getPerPage().toString());
                        }

                        if (info.getCount() !== null) {
                            //Get the Count of the Info
                            console.log("Attachment Info Count: " + info.getCount().toString());
                        }

                        if (info.getPage() !== null) {
                            //Get the Page of the Info
                            console.log("Attachment Info Page: " + info.getPage().toString());
                        }

                        if (info.getMoreRecords() !== null) {
                            //Get the MoreRecords of the Info
                            console.log("Attachment Info MoreRecords: " + info.getMoreRecords().toString());
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
                    let details = responseObject.getDetails();

                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Upload Attachments</h3>
     * @param moduleAPIName The API Name of the record's module
     * @param {BigInt} recordId The ID of the record to upload attachment
     * @param {String} absoluteFilePath The absolute file path of the file to be attached
     */
    public static async uploadAttachments(moduleAPIName: string, recordId: bigint, absoluteFilePath: string) {

        //example
        // let moduleAPIName = "Leads";
        // let recordId = 34096432267003n;
        // let absoluteFilePath = "/Users/user-name/Documents/image.jpg";

        //Get instance of AttachmentsOperations Class that takes recordId and moduleAPIName as parameter
        let attachmentsOperations: AttachmentsOperations = new AttachmentsOperations(moduleAPIName, recordId);

        //Get instance of FileBodyWrapper class that will contain the request file
        let fileBodyWrapper: FileBodyWrapper = new FileBodyWrapper();

        /** StreamWrapper can be initialized in any of the following ways */

        /**
         * param 1 -> fileName
         * param 2 -> Read Stream.
         */
        // let streamWrapper: StreamWrapper = new StreamWrapper(undefined, fs.createReadStream(absoluteFilePath));

        /**
         * param 1 -> fileName
         * param 2 -> Read Stream
         * param 3 -> Absolute File Path of the file to be attached
         */
        let streamWrapper = new StreamWrapper(undefined, undefined, absoluteFilePath);

        //Set file to the FileBodyWrapper instance
        fileBodyWrapper.setFile(streamWrapper);

        //Call uploadAttachment method that takes FileBodyWrapper instance as parameter
        let response: APIResponse<ActionHandler> = await attachmentsOperations.uploadAttachment(fileBodyWrapper);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionHandler = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received.
                if (responseObject instanceof ActionWrapper) {

                    //Get the array of obtained action responses
                    let actionResponses: ActionResponse[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
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
                else if (responseObject instanceof APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

                    if (details !== null) {
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
     * <h3> Delete Attachments</h3>
     * This method is used to Delete attachments of a single record with ID and print the response.
     * @param moduleAPIName The API Name of the record's module
     * @param recordId  The ID of the record to delete attachments
     * @param attachmentIds The array of attachment IDs to be deleted
     */
    public static async deleteAttachments(moduleAPIName: string, recordId: bigint, attachmentIds: bigint[]) {

        //example
        // let moduleAPIName = "Leads";
        // let recordId = 34096432267003n;
        // let attachmentIds = [34096432267024n, 34096432267034n, 34096432267198n]

        //Get instance of AttachmentsOperations Class that takes recordId and moduleAPIName as parameter
        let attachmentsOperations: AttachmentsOperations = new AttachmentsOperations(moduleAPIName, recordId);

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        for (let attachmentId of attachmentIds) {
            //Add the ids to parameter map instance
            await paramInstance.add(DeleteAttachmentsParam.IDS, attachmentId);
        }

        //Call deleteAttachments method that takes paramInstance as parameter
        let response: APIResponse<ActionHandler> = await attachmentsOperations.deleteAttachments(paramInstance);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionHandler = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received.
                if (responseObject instanceof ActionWrapper) {

                    //Get the array of obtained Action Responses.
                    let actionResponses = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof SuccessResponse) {

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            let details: Map<string, any> = actionResponse.getDetails();

                            //Get the details map
                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof APIException) {

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            let details: Map<string, any> = actionResponse.getDetails();

                            //Get the details map
                            if (details !== null) {
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
                else if (responseObject instanceof APIException) {

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    let details: Map<string, any> = responseObject.getDetails();

                    //Get the details map
                    if (details !== null) {
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
     * <h3> Download Attachment</h3>
     * This method is used to download an attachment of a single record of a module with ID and attachment ID and write the file in the specified destination.
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record to download attachment
     * @param attachmentId The ID of the attachment to be downloaded
     * @param destinationFolder The absolute path of the destination folder to store the attachment
     */
    public static async downloadAttachment(moduleAPIName: string, recordId: bigint, attachmentId: bigint, destinationFolder: string) {

        //example
        // let moduleAPIName = "Leads";
        // let recordId = 34096432267003n;
        // let attachmentId = 34096432267024n;
        // let destinationFolder = "/Users/user-name/Desktop";

        //Get instance of AttachmentsOperations Class that takes recordId and moduleAPIName as parameter
        let attachmentsOperations: AttachmentsOperations = new AttachmentsOperations(moduleAPIName, recordId);

        //Call downloadAttachment method that takes attachmentId as parameters
        let response: APIResponse<ResponseHandler> = await attachmentsOperations.downloadAttachment(attachmentId);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if (response.getStatusCode() == 204) {
                console.log("No Content");

                return;
            }

            //Get object from response
            let responseObject: ResponseHandler = response.getObject();

            if (responseObject !== null) {
                //Check if expected FileBodyWrapper instance is received.
                if (responseObject instanceof FileBodyWrapper) {

                    //Get StreamWrapper instance from the returned FileBodyWrapper instance
                    let streamWrapper: StreamWrapper = responseObject.getFile();

                    let name: string | undefined = streamWrapper.getName();

                    if (name !== undefined) {

                        //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                        let fileName = path.join(destinationFolder, name);

                        //Get the stream from StreamWrapper instance
                        let readStream: Buffer | fs.ReadStream | undefined = streamWrapper.getStream();

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

                    let details = responseObject.getDetails();

                    //Get the details map
                    if (details !== null) {
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
     * <h3> Delete Attachment</h3>
     * This method is used to delete an attachment of a single record of a module with ID and attachment ID and print the response
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record to delete attachment
     * @param attachmentId The ID of the attachment to be deleted
     */
    public static async deleteAttachment(moduleAPIName: string, recordId: bigint, attachmentId: bigint) {

        //example
        // let moduleAPIName = "Leads";
        // let recordId = 34096432267003n;
        // let attachmentId = 34096432267024n;

        //Get instance of AttachmentsOperations Class that takes recordId and moduleAPIName as parameter
        let attachmentsOperations: AttachmentsOperations = new AttachmentsOperations(moduleAPIName, recordId);

        //Call deleteAttachment method that takes attachmentId as parameter
        let response: APIResponse<ActionHandler> = await attachmentsOperations.deleteAttachment(attachmentId);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionHandler = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received.
                if (responseObject instanceof ActionWrapper) {

                    //Get the list of obtained Action Response instances
                    let actionResponses: ActionResponse[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof SuccessResponse) {

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof APIException) {

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            let details: Map<string, any> = actionResponse.getDetails();

                            //Get the details map
                            if (details !== null) {
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
                else if (responseObject instanceof APIException) {

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    let details: Map<string, any> = responseObject.getDetails();

                    //Get the details map
                    if (details !== null) {
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
     * <h3> Upload Link Attachments</h3>
     * This method is used to upload link attachment and print the response.
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record to upload Link attachment
     * @param attachmentURL The attachmentURL of the doc or image link to be attached
     */
    public static async uploadLinkAttachment(moduleAPIName: string, recordId: bigint, attachmentURL: string) {

        //example
        // let moduleAPIName = "Leads";
        // let recordId = 34096432267003n;
        // let attachmentURL = "https://5.imimg.com/data5/KJ/UP/MY-8655440/zoho-crm-500x500.png";

        //Get instance of AttachmentsOperations Class that takes recordId and moduleAPIName as parameter
        let attachmentsOperations: AttachmentsOperations = new AttachmentsOperations(moduleAPIName, recordId);

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        //Add the attachmentURL to parameter Instance
        await paramInstance.add(UploadLinkAttachmentParam.ATTACHMENTURL, attachmentURL);

        //Call uploadLinkAttachments method that takes paramInstance as parameter
        let response = await attachmentsOperations.uploadLinkAttachment(paramInstance);

        if (response !== null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received.
                if (responseObject instanceof ActionWrapper) {

                    //Get the array of obtained Action Response instances
                    let actionResponses: ActionResponse[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {

                        //Check if the request is successful
                        if (actionResponse instanceof SuccessResponse) {

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof APIException) {

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
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
                else if (responseObject instanceof APIException) {

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

                    if (details !== null) {
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