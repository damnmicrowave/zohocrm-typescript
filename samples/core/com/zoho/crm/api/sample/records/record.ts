import * as fs from "fs";
import * as path from "path";
import { SearchRecordsHeader, UpsertRecordsHeader, DeleteRecordsHeader, UpdateRecordsHeader, CreateRecordsHeader, DeleteRecordHeader, UpdateRecordHeader, DeleteRecordParam, DeleteRecordsParam, GetDeletedRecordsHeader, GetDeletedRecordsParam, GetMassUpdateStatusParam, GetRecordHeader, GetRecordParam, GetRecordsHeader, GetRecordsParam, RecordOperations, SearchRecordsParam } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/record_operations"
import { ResponseHandler } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/response_handler';
import { ResponseWrapper } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/response_wrapper';
import { MassUpdateResponseWrapper } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update_response_wrapper';
import { SuccessfulConvert } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/successful_convert';
import { DeletedRecordsWrapper } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/deleted_records_wrapper';
import { ActionWrapper } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/action_wrapper';
import { MassUpdateActionWrapper } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update_action_wrapper';
import { ConvertActionWrapper } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/convert_action_wrapper';
import { SuccessResponse } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/success_response';
import { MassUpdateSuccessResponse } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update_success_response';
import { APIException } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/api_exception';
import { MassUpdate } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update';
import { Reminder } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/reminder';
import { RemindAt } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/remind_at';
import { Comment } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/comment';
import { Consent } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/consent';
import { Participants } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/participants';
import { Field } from '@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/field';
import { ParameterMap } from "@zohocrm/typescript-sdk-2.0/routes/parameter_map";
import { HeaderMap } from "@zohocrm/typescript-sdk-2.0/routes/header_map";
import { APIResponse } from "@zohocrm/typescript-sdk-2.0/routes/controllers/api_response";
import { Record } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/record";
import { User } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/users/user";
import { Tag } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/tags/tag";
import { FileDetails } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/file_details";
import { Choice } from "@zohocrm/typescript-sdk-2.0/utils/util/choice";
import { InventoryLineItems } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/inventory_line_items";
import { LineItemProduct } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/line_item_product";
import { LineTax } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/line_tax";
import { PricingDetails } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/pricing_details";
import { Attachment } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/attachments/attachment";
import { Layout } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/layouts/layout";
import { RecurringActivity } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/recurring_activity";
import { FileBodyWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/file_body_wrapper";
import { StreamWrapper } from "@zohocrm/typescript-sdk-2.0/utils/util/stream_wrapper";
import { Info } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/info";
import { BodyWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/body_wrapper";
import { ActionHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/action_handler";
import { ActionResponse } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/action_response";
import { DeletedRecordsHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/deleted_records_handler";
import { DeletedRecord } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/deleted_record";
import { ConvertBodyWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/convert_body_wrapper";
import { LeadConverter } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/lead_converter";
import { ConvertActionHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/convert_action_handler";
import { ConvertActionResponse } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/convert_action_response";
import { DownloadHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/download_handler";
import { FileHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/file_handler";
import { MassUpdateBodyWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update_body_wrapper";
import { Territory } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/territory";
import { MassUpdateActionHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update_action_handler";
import { MassUpdateActionResponse } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update_action_response";
import { MassUpdateResponseHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update_response_handler";
import { MassUpdateResponse } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update_response";
import { CarryOverTags } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/carry_over_tags";

export class Records {
    /**
     * <h3> Get Record</h3>
     * This method is used to get a single record of a module with ID and print the response.
     * @param moduleAPIName The API Name of the record's module.
     * @param recordId The ID of the record to be obtained.
     * @param {String} destinationFolder The absolute path of the destination folder to store the attachment
     */
    public static async getRecord(moduleAPIName: string, recordId: bigint, destinationFolder: string) {

        //example
        //let moduleAPIName = "Contacts";
        //let recordId = 34770616603276n;

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        /* Possible parameters for Get Record operation*/
        await paramInstance.add(GetRecordParam.APPROVED, "true");

        await paramInstance.add(GetRecordParam.CONVERTED, "false");

        await paramInstance.add(GetRecordParam.CVID, "3409643087501");

        let fieldsArray = ["id", "Company"];

        await paramInstance.add(GetRecordParam.FIELDS, fieldsArray.toString());

        // /* Month is zero-indexed.
        // 0 -> January ..... 11 -> December
        // */
        let startDateTime = new Date(2020, 7, 10, 10, 10, 10);

        await paramInstance.add(GetRecordParam.STARTDATETIME, startDateTime);

        let endDateTime = new Date(2020, 7, 10, 12, 12, 12);

        await paramInstance.add(GetRecordParam.ENDDATETIME, endDateTime);

        await paramInstance.add(GetRecordParam.TERRITORY_ID, "3409643505351");

        await paramInstance.add(GetRecordParam.INCLUDE_CHILD, "true");

        await paramInstance.add(GetRecordParam.UID, "3409643500741");

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        /* Possible headers for Get Record operation*/
        await headerInstance.add(GetRecordHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T01:01:01+05:30"));

        // await headerInstance.add(GetRecordHeader.X_EXTERNAL, "Leads.External");

        //Call getRecord method that takes paramInstance, headerInstance, moduleAPIName and recordID as parameter
        let response: APIResponse<ResponseHandler> = await recordOperations.getRecord(recordId, moduleAPIName, paramInstance, headerInstance);

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

                //Check if ResponseWrapper instance is received
                if (responseObject instanceof ResponseWrapper) {

                    //Get the array of obtained Record instances
                    let records: Record[] = responseObject.getData();

                    for (let record of records) {
                        //Get the ID of each Record
                        console.log("Record ID: " + record.getId());

                        //Get the createdBy User instance of each Record
                        let createdBy: User = record.getCreatedBy();

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
                        let modifiedBy: User = record.getModifiedBy();

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
                        let tags: Tag[] = record.getTag();

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
                        console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                        console.log("Record KeyValues: ");

                        let keyValues: Map<string, any> = record.getKeyValues();

                        let keyArray = Array.from(keyValues.keys());

                        for (let keyName of keyArray) {
                            let value = keyValues.get(keyName);

                            if (Array.isArray(value)) {

                                if (value.length > 0) {
                                    if (value[0] instanceof FileDetails) {
                                        let fileDetails: FileDetails[] = value;

                                        fileDetails.forEach(fileDetail => {
                                            //Get the Extn of each FileDetails
                                            console.log("Record FileDetails Extn: " + fileDetail.getExtn());

                                            //Get the IsPreviewAvailable of each FileDetails
                                            console.log("Record FileDetails IsPreviewAvailable: " + fileDetail.getIsPreviewAvailable());

                                            //Get the DownloadUrl of each FileDetails
                                            console.log("Record FileDetails DownloadUrl: " + fileDetail.getDownloadUrl());

                                            //Get the DeleteUrl of each FileDetails
                                            console.log("Record FileDetails DeleteUrl: " + fileDetail.getDeleteUrl());

                                            //Get the EntityId of each FileDetails
                                            console.log("Record FileDetails EntityId: " + fileDetail.getEntityId());

                                            //Get the Mode of each FileDetails
                                            console.log("Record FileDetails Mode: " + fileDetail.getMode());

                                            //Get the OriginalSizeByte of each FileDetails
                                            console.log("Record FileDetails OriginalSizeByte: " + fileDetail.getOriginalSizeByte());

                                            //Get the PreviewUrl of each FileDetails
                                            console.log("Record FileDetails PreviewUrl: " + fileDetail.getPreviewUrl());

                                            //Get the FileName of each FileDetails
                                            console.log("Record FileDetails FileName: " + fileDetail.getFileName());

                                            //Get the FileId of each FileDetails
                                            console.log("Record FileDetails FileId: " + fileDetail.getFileId());

                                            //Get the AttachmentId of each FileDetails
                                            console.log("Record FileDetails AttachmentId: " + fileDetail.getAttachmentId());

                                            //Get the FileSize of each FileDetails
                                            console.log("Record FileDetails FileSize: " + fileDetail.getFileSize());

                                            //Get the CreatorId of each FileDetails
                                            console.log("Record FileDetails CreatorId: " + fileDetail.getCreatorId());

                                            //Get the LinkDocs of each FileDetails
                                            console.log("Record FileDetails LinkDocs: " + fileDetail.getLinkDocs());
                                        });
                                    }
                                    else if (value[0] instanceof Reminder) {
                                        let reminders: Reminder[] = value;

                                        reminders.forEach(reminder => {
                                            console.log("Reminder Period: " + reminder.getPeriod());

                                            console.log("Reminder Unit: " + reminder.getUnit());
                                        });
                                    }
                                    else if (value[0] instanceof Participants) {
                                        let participants: Participants[] = value;

                                        participants.forEach(participant => {
                                            console.log("Record Participants Name: " + participant.getName());

                                            console.log("Record Participants Invited: " + participant.getInvited().toString());

                                            console.log("Record Participants ID: " + participant.getId());

                                            console.log("Record Participants Type: " + participant.getType());

                                            console.log("Record Participants Participant: " + participant.getParticipant());

                                            console.log("Record Participants Status: " + participant.getStatus());
                                        });
                                    }
                                    else if (value[0] instanceof Choice) {
                                        let choiceArray: Choice<any>[] = value;

                                        console.log(keyName);

                                        console.log("Values");

                                        choiceArray.forEach(eachChoice => {
                                            console.log(eachChoice.getValue());
                                        });
                                    }
                                    else if (value[0] instanceof InventoryLineItems) {
                                        let productDetails: InventoryLineItems[] = value;

                                        productDetails.forEach(productDetail => {
                                            let lineItemProduct: LineItemProduct = productDetail.getProduct();;

                                            if (lineItemProduct != null) {
                                                console.log("Record ProductDetails LineItemProduct ProductCode: " + lineItemProduct.getProductCode());

                                                console.log("Record ProductDetails LineItemProduct Currency: " + lineItemProduct.getCurrency());

                                                console.log("Record ProductDetails LineItemProduct Name: " + lineItemProduct.getName());

                                                console.log("Record ProductDetails LineItemProduct Id: " + lineItemProduct.getId());
                                            }

                                            console.log("Record ProductDetails Quantity: " + productDetail.getQuantity().toString());

                                            console.log("Record ProductDetails Discount: " + productDetail.getDiscount());

                                            console.log("Record ProductDetails TotalAfterDiscount: " + productDetail.getTotalAfterDiscount().toString());

                                            console.log("Record ProductDetails NetTotal: " + productDetail.getNetTotal().toString());

                                            if (productDetail.getBook() != null) {
                                                console.log("Record ProductDetails Book: " + productDetail.getBook().toString());
                                            }

                                            console.log("Record ProductDetails Tax: " + productDetail.getTax().toString());

                                            console.log("Record ProductDetails ListPrice: " + productDetail.getListPrice().toString());

                                            console.log("Record ProductDetails UnitPrice: " + productDetail.getUnitPrice());

                                            console.log("Record ProductDetails QuantityInStock: " + productDetail.getQuantityInStock().toString());

                                            console.log("Record ProductDetails Total: " + productDetail.getTotal().toString());

                                            console.log("Record ProductDetails ID: " + productDetail.getId());

                                            console.log("Record ProductDetails ProductDescription: " + productDetail.getProductDescription());

                                            let lineTaxes: LineTax[] = productDetail.getLineTax();

                                            lineTaxes.forEach(lineTax => {
                                                console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());

                                                console.log("Record ProductDetails LineTax Name: " + lineTax.getName());

                                                console.log("Record ProductDetails LineTax Id: " + lineTax.getId());

                                                console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                            });

                                        });
                                    }
                                    else if (value[0] instanceof Tag) {
                                        let tags: Tag[] = value;

                                        tags.forEach(tag => {
                                            //Get the Name of each Tag
                                            console.log("Record Tag Name: " + tag.getName());

                                            //Get the Id of each Tag
                                            console.log("Record Tag ID: " + tag.getId());
                                        });
                                    }
                                    else if (value[0] instanceof PricingDetails) {
                                        let pricingDetails: PricingDetails[] = value;

                                        pricingDetails.forEach(pricingDetail => {
                                            console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());

                                            console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());

                                            console.log("Record PricingDetails ID: " + pricingDetail.getId());

                                            console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                        });
                                    }
                                    else if (value[0] instanceof Record) {
                                        let recordArray: Record[] = value;

                                        recordArray.forEach(record => {
                                            Array.from(record.getKeyValues().keys()).forEach(key => {
                                                console.log(key + ": " + record.getKeyValues().get(key));
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof LineTax) {
                                        let lineTaxes: LineTax[] = value;

                                        lineTaxes.forEach(lineTax => {
                                            console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());

                                            console.log("Record ProductDetails LineTax Name: " + lineTax.getName());

                                            console.log("Record ProductDetails LineTax Id: " + lineTax.getId());

                                            console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                        });
                                    }
                                    else if (value[0] instanceof Comment) {
                                        let comments: Comment[] = value;

                                        comments.forEach(comment => {
                                            console.log("Record Comment CommentedBy: " + comment.getCommentedBy());

                                            console.log("Record Comment CommentedTime: " + comment.getCommentedTime().toString());

                                            console.log("Record Comment CommentContent: " + comment.getCommentContent());

                                            console.log("Record Comment Id: " + comment.getId());
                                        });
                                    }
                                    else if (value[0] instanceof Attachment) {
                                        let attachments: Attachment[] = value;

                                        attachments.forEach(attachment => {
                                            //Get the ID of each attachment
                                            console.log("Record Attachment ID: " + attachment.getId());

                                            //Get the owner User instance of each attachment
                                            let owner: User = attachment.getOwner();

                                            //Check if owner is not null
                                            if (owner != null) {
                                                //Get the Name of the Owner
                                                console.log("Record Attachment Owner - Name: " + owner.getName());

                                                //Get the ID of the Owner
                                                console.log("Record Attachment Owner ID: " + owner.getId());

                                                //Get the Email of the Owner
                                                console.log("Record Attachment Owner Email: " + owner.getEmail());
                                            }

                                            //Get the modified time of each attachment
                                            console.log("Record Attachment Modified Time: " + attachment.getModifiedTime().toString());

                                            //Get the name of the File
                                            console.log("Record Attachment File Name: " + attachment.getFileName());

                                            //Get the created time of each attachment
                                            console.log("Record Attachment Created Time: " + attachment.getCreatedTime());

                                            //Get the Attachment file size
                                            console.log("Record Attachment File Size: " + attachment.getSize());

                                            //Get the parentId Record instance of each attachment
                                            let parentId: Record = attachment.getParentId();

                                            //Check if parentId is not null
                                            if (parentId != null) {
                                                //Get the parent record Name of each attachment
                                                console.log("Record Attachment parent record Name: " + parentId.getKeyValue("name"));

                                                //Get the parent record ID of each attachment
                                                console.log("Record Attachment parent record ID: " + parentId.getId());
                                            }

                                            //Check if the attachment is Editable
                                            console.log("Record Attachment is Editable: " + attachment.getEditable().toString());

                                            //Get the file ID of each attachment
                                            console.log("Record Attachment File ID: " + attachment.getFileId());

                                            //Get the type of each attachment
                                            console.log("Record Attachment File Type: " + attachment.getType());

                                            //Get the seModule of each attachment
                                            console.log("Record Attachment seModule: " + attachment.getSeModule());

                                            //Get the modifiedBy User instance of each attachment
                                            let modifiedBy: User = attachment.getModifiedBy();

                                            //Check if modifiedBy is not null
                                            if (modifiedBy != null) {
                                                //Get the Name of the modifiedBy User
                                                console.log("Record Attachment Modified By User-Name: " + modifiedBy.getName());

                                                //Get the ID of the modifiedBy User
                                                console.log("Record Attachment Modified By User-ID: " + modifiedBy.getId());

                                                //Get the Email of the modifiedBy User
                                                console.log("Record Attachment Modified By User-Email: " + modifiedBy.getEmail());
                                            }

                                            //Get the state of each attachment
                                            console.log("Record Attachment State: " + attachment.getState());

                                            //Get the createdBy User instance of each attachment
                                            let createdBy: User = attachment.getCreatedBy();

                                            //Check if createdBy is not null
                                            if (createdBy != null) {
                                                //Get the name of the createdBy User
                                                console.log("Record Attachment Created By User-Name: " + createdBy.getName());

                                                //Get the ID of the createdBy User
                                                console.log("Record Attachment Created By User-ID: " + createdBy.getId());

                                                //Get the Email of the createdBy User
                                                console.log("Record Attachment Created By User-Email: " + createdBy.getEmail());
                                            }

                                            //Get the linkUrl of each attachment
                                            console.log("Record Attachment LinkUrl: " + attachment.getLinkUrl());
                                        });
                                    }
                                    else {
                                        console.log(keyName + ": " + value);
                                    }
                                }

                            }
                            else if (value instanceof User) {
                                console.log("Record " + keyName + " User-ID: " + value.getId());

                                console.log("Record " + keyName + " User-Name: " + value.getName());

                                console.log("Record " + keyName + " User-Email: " + value.getEmail());

                            }
                            else if (value instanceof Layout) {
                                console.log(keyName + " ID: " + value.getId());

                                console.log(keyName + " Name: " + value.getName());
                            }
                            else if (value instanceof Record) {
                                console.log(keyName + " Record ID: " + value.getId());

                                console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                            }
                            else if (value instanceof Choice) {
                                console.log(keyName + ": " + value.getValue());
                            }
                            else if (value instanceof RemindAt) {
                                console.log(keyName + ": " + value.getAlarm());
                            }
                            else if (value instanceof RecurringActivity) {
                                console.log(keyName);

                                console.log("RRULE: " + value.getRrule());
                            }
                            else if (value instanceof Consent) {

                                console.log("Record Consent ID: " + value.getId());

                                //Get the Owner User instance of each attachment
                                let owner: User = value.getOwner();

                                //Check if owner is not null
                                if (owner != null) {
                                    //Get the name of the owner User
                                    console.log("Record Consent Owner Name: " + owner.getName());

                                    //Get the ID of the owner User
                                    console.log("Record Consent Owner ID: " + owner.getId());

                                    //Get the Email of the owner User
                                    console.log("Record Consent Owner Email: " + owner.getEmail());
                                }

                                let consentCreatedBy: User = value.getCreatedBy();

                                //Check if createdBy is not null
                                if (consentCreatedBy != null) {
                                    //Get the name of the CreatedBy User
                                    console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());

                                    //Get the ID of the CreatedBy User
                                    console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());

                                    //Get the Email of the CreatedBy User
                                    console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                                }

                                let consentModifiedBy: User = value.getModifiedBy();

                                //Check if createdBy is not null
                                if (consentModifiedBy != null) {
                                    //Get the name of the ModifiedBy User
                                    console.log("Record Consent ModifiedBy Name: " + consentModifiedBy.getName());

                                    //Get the ID of the ModifiedBy User
                                    console.log("Record Consent ModifiedBy ID: " + consentModifiedBy.getId());

                                    //Get the Email of the ModifiedBy User
                                    console.log("Record Consent ModifiedBy Email: " + consentModifiedBy.getEmail());
                                }

                                console.log("Record Consent CreatedTime: " + value.getCreatedTime());

                                console.log("Record Consent ModifiedTime: " + value.getModifiedTime());

                                console.log("Record Consent ContactThroughEmail: " + value.getContactThroughEmail());

                                console.log("Record Consent ContactThroughSocial: " + value.getContactThroughSocial());

                                console.log("Record Consent ContactThroughSurvey: " + value.getContactThroughSurvey());

                                console.log("Record Consent ContactThroughPhone: " + value.getContactThroughPhone());

                                console.log("Record Consent MailSentTime: " + value.getMailSentTime().toString());

                                console.log("Record Consent ConsentDate: " + value.getConsentDate().toString());

                                console.log("Record Consent ConsentRemarks: " + value.getConsentRemarks());

                                console.log("Record Consent ConsentThrough: " + value.getConsentThrough());

                                console.log("Record Consent DataProcessingBasis: " + value.getDataProcessingBasis());

                                //To get custom values
                                console.log("Record Consent Lawful Reason: " + value.getKeyValue("Lawful_Reason"));
                            }
                            else if (value instanceof Map) {
                                console.log(keyName);

                                Array.from(value.keys()).forEach(key => {
                                    console.log(key + ": " + value.get(key));
                                });
                            }
                            else {
                                console.log(keyName + ": " + value);
                            }
                        }
                    }
                }
                //Check if expected FileBodyWrapper instance is received
                else if (responseObject instanceof FileBodyWrapper) {

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

    /**
     * <h3> Update Record</h3>
     * This method is used to update a single record of a module with ID and print the response.
     * @param moduleAPIName The API Name of the record's module.
     * @param recordId The ID of the record to be updated
     */
    public static async updateRecord(moduleAPIName: string, recordId: bigint) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: BodyWrapper = new BodyWrapper();

        //Array to hold Record instances
        let recordsArray: Record[] = [];

        //Get instance of Record Class
        let record1: Record = new Record();

        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record1.addFieldValue(Field.Leads.CITY, "City");

        record1.addFieldValue(Field.Leads.LAST_NAME, "Last Name");

        record1.addFieldValue(Field.Leads.FIRST_NAME, "First Name");

        record1.addFieldValue(Field.Leads.LAST_NAME, "Last Name");

        record1.addFieldValue(Field.Leads.COMPANY, "KKRNP");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Custom_field", "Value");

        record1.addKeyValue("Custom_field_2", "value");

        record1.addKeyValue("Date_1", new Date(2017, 1, 13));

        let fileDetails: FileDetails[] = [];

        let fileDetail: FileDetails = new FileDetails();

        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32537b7c2400dadca8ff55f620c65357da");

        fileDetails.push(fileDetail);

        fileDetail = new FileDetails();

        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32e0063e7321b5b4ca878a934519e6cdb2");

        fileDetails.push(fileDetail);

        fileDetail = new FileDetails();

        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c323daf4780bfe0058133556f155795981f");

        fileDetails.push(fileDetail);

        record1.addKeyValue("File_Upload_1", fileDetails);

        //Used when GDPR is enabled
        let dataConsent: Consent = new Consent();

        dataConsent.setConsentRemarks("Approved.");

        dataConsent.setConsentThrough("Email");

        dataConsent.setContactThroughEmail(true);

        dataConsent.setContactThroughSocial(false);

        record1.addKeyValue("Data_Processing_Basis_Details", dataConsent);

        //Add Record instance to the array
        recordsArray.push(record1);

        //Set the array to Records in BodyWrapper instance
        request.setData(recordsArray);

        let trigger: string[] = [];

        trigger.push("approval");

        trigger.push("workflow");

        trigger.push("blueprint");

        request.setTrigger(trigger);

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        // await headerInstance.add(UpdateRecordHeader.X_EXTERNAL, "Leads.External");

        //Call updateRecord method that takes BodyWrapper instance, ModuleAPIName and recordId as parameter.
        let response: APIResponse<ActionHandler> = await recordOperations.updateRecord(recordId, moduleAPIName, request, headerInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionHandler = response.getObject();

            if (responseObject != null) {

                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
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

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

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
     * <h3> Delete Record</h3>
     * This method is used to delete a single record of a module with ID and print the response.
     * @param moduleAPIName The API Name of the record's module.
     * @param recordId The ID of the record to be deleted
     */
    public static async deleteRecord(moduleAPIName: string, recordId: bigint) {

        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        //Possible parameters for Delete Record operation
        await paramInstance.add(DeleteRecordParam.WF_TRIGGER, true);

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        // await headerInstance.add(DeleteRecordHeader.X_EXTERNAL, "Leads.External");

        //Call deleteRecord method that takes paramInstance, ModuleAPIName and recordId as parameter.
        let response: APIResponse<ActionHandler> = await recordOperations.deleteRecord(recordId, moduleAPIName, paramInstance, headerInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionHandler = response.getObject();

            if (responseObject != null) {

                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
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

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

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
    * <h3> Get Record Using External Id</h3>
    * This method is used to get a single record of a module with ID and print the response.
    * @param moduleAPIName The API Name of the record's module.
    * @param {String} externalFieldValue 
    * @param {String} destinationFolder The absolute path of the destination folder to store the attachment
    */
    public static async getRecordUsingExternalId(moduleAPIName: string, externalFieldValue: string, destinationFolder: string) {

        //example
        //let moduleAPIName = "Contacts";
        //let recordId = 34770616603276n;

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        /* Possible parameters for Get Record operation*/
        // await paramInstance.add(GetRecordParam.APPROVED, "true");

        // await paramInstance.add(GetRecordParam.CONVERTED, "false");

        // await paramInstance.add(GetRecordParam.CVID, "3409643087501");

        // let fieldsArray = ["id", "Company"];

        // await paramInstance.add(GetRecordParam.FIELDS, fieldsArray.toString());

        // /* Month is zero-indexed.
        // 0 -> January ..... 11 -> December
        // */
        // let startDateTime = new Date(2020, 7, 10, 10, 10, 10);

        // await paramInstance.add(GetRecordParam.STARTDATETIME, startDateTime);

        // let endDateTime = new Date(2020, 7, 10, 12, 12, 12);

        // await paramInstance.add(GetRecordParam.ENDDATETIME, endDateTime);

        // await paramInstance.add(GetRecordParam.TERRITORY_ID, "3409643505351");

        // await paramInstance.add(GetRecordParam.INCLUDE_CHILD, "true");

        // await paramInstance.add(GetRecordParam.UID, "3409643500741");

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        /* Possible headers for Get Record operation*/
        // await headerInstance.add(GetRecordHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T01:01:01+05:30"));

        await headerInstance.add(GetRecordHeader.X_EXTERNAL, "Leads.External");

        //Call getRecordUsingExternalId method that takes externalFieldValue, moduleAPIName, paramInstance, headerInstance and moduleAPIName as parameter
        let response: APIResponse<ResponseHandler> = await recordOperations.getRecordUsingExternalId(externalFieldValue, moduleAPIName, paramInstance, headerInstance);

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

                //Check if ResponseWrapper instance is received
                if (responseObject instanceof ResponseWrapper) {

                    //Get the array of obtained Record instances
                    let records: Record[] = responseObject.getData();

                    for (let record of records) {
                        //Get the ID of each Record
                        console.log("Record ID: " + record.getId());

                        //Get the createdBy User instance of each Record
                        let createdBy: User = record.getCreatedBy();

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
                        let modifiedBy: User = record.getModifiedBy();

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
                        let tags: Tag[] = record.getTag();

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
                        console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                        console.log("Record KeyValues: ");

                        let keyValues: Map<string, any> = record.getKeyValues();

                        let keyArray = Array.from(keyValues.keys());

                        for (let keyName of keyArray) {
                            let value = keyValues.get(keyName);

                            if (Array.isArray(value)) {

                                if (value.length > 0) {
                                    if (value[0] instanceof FileDetails) {
                                        let fileDetails: FileDetails[] = value;

                                        fileDetails.forEach(fileDetail => {
                                            //Get the Extn of each FileDetails
                                            console.log("Record FileDetails Extn: " + fileDetail.getExtn());

                                            //Get the IsPreviewAvailable of each FileDetails
                                            console.log("Record FileDetails IsPreviewAvailable: " + fileDetail.getIsPreviewAvailable());

                                            //Get the DownloadUrl of each FileDetails
                                            console.log("Record FileDetails DownloadUrl: " + fileDetail.getDownloadUrl());

                                            //Get the DeleteUrl of each FileDetails
                                            console.log("Record FileDetails DeleteUrl: " + fileDetail.getDeleteUrl());

                                            //Get the EntityId of each FileDetails
                                            console.log("Record FileDetails EntityId: " + fileDetail.getEntityId());

                                            //Get the Mode of each FileDetails
                                            console.log("Record FileDetails Mode: " + fileDetail.getMode());

                                            //Get the OriginalSizeByte of each FileDetails
                                            console.log("Record FileDetails OriginalSizeByte: " + fileDetail.getOriginalSizeByte());

                                            //Get the PreviewUrl of each FileDetails
                                            console.log("Record FileDetails PreviewUrl: " + fileDetail.getPreviewUrl());

                                            //Get the FileName of each FileDetails
                                            console.log("Record FileDetails FileName: " + fileDetail.getFileName());

                                            //Get the FileId of each FileDetails
                                            console.log("Record FileDetails FileId: " + fileDetail.getFileId());

                                            //Get the AttachmentId of each FileDetails
                                            console.log("Record FileDetails AttachmentId: " + fileDetail.getAttachmentId());

                                            //Get the FileSize of each FileDetails
                                            console.log("Record FileDetails FileSize: " + fileDetail.getFileSize());

                                            //Get the CreatorId of each FileDetails
                                            console.log("Record FileDetails CreatorId: " + fileDetail.getCreatorId());

                                            //Get the LinkDocs of each FileDetails
                                            console.log("Record FileDetails LinkDocs: " + fileDetail.getLinkDocs());
                                        });
                                    }
                                    else if (value[0] instanceof Reminder) {
                                        let reminders: Reminder[] = value;

                                        reminders.forEach(reminder => {
                                            console.log("Reminder Period: " + reminder.getPeriod());

                                            console.log("Reminder Unit: " + reminder.getUnit());
                                        });
                                    }
                                    else if (value[0] instanceof Participants) {
                                        let participants: Participants[] = value;

                                        participants.forEach(participant => {
                                            console.log("Record Participants Name: " + participant.getName());

                                            console.log("Record Participants Invited: " + participant.getInvited().toString());

                                            console.log("Record Participants ID: " + participant.getId());

                                            console.log("Record Participants Type: " + participant.getType());

                                            console.log("Record Participants Participant: " + participant.getParticipant());

                                            console.log("Record Participants Status: " + participant.getStatus());
                                        });
                                    }
                                    else if (value[0] instanceof Choice) {
                                        let choiceArray: Choice<any>[] = value;

                                        console.log(keyName);

                                        console.log("Values");

                                        choiceArray.forEach(eachChoice => {
                                            console.log(eachChoice.getValue());
                                        });
                                    }
                                    else if (value[0] instanceof InventoryLineItems) {
                                        let productDetails: InventoryLineItems[] = value;

                                        productDetails.forEach(productDetail => {
                                            let lineItemProduct: LineItemProduct = productDetail.getProduct();;

                                            if (lineItemProduct != null) {
                                                console.log("Record ProductDetails LineItemProduct ProductCode: " + lineItemProduct.getProductCode());

                                                console.log("Record ProductDetails LineItemProduct Currency: " + lineItemProduct.getCurrency());

                                                console.log("Record ProductDetails LineItemProduct Name: " + lineItemProduct.getName());

                                                console.log("Record ProductDetails LineItemProduct Id: " + lineItemProduct.getId());
                                            }

                                            console.log("Record ProductDetails Quantity: " + productDetail.getQuantity().toString());

                                            console.log("Record ProductDetails Discount: " + productDetail.getDiscount());

                                            console.log("Record ProductDetails TotalAfterDiscount: " + productDetail.getTotalAfterDiscount().toString());

                                            console.log("Record ProductDetails NetTotal: " + productDetail.getNetTotal().toString());

                                            if (productDetail.getBook() != null) {
                                                console.log("Record ProductDetails Book: " + productDetail.getBook().toString());
                                            }

                                            console.log("Record ProductDetails Tax: " + productDetail.getTax().toString());

                                            console.log("Record ProductDetails ListPrice: " + productDetail.getListPrice().toString());

                                            console.log("Record ProductDetails UnitPrice: " + productDetail.getUnitPrice());

                                            console.log("Record ProductDetails QuantityInStock: " + productDetail.getQuantityInStock().toString());

                                            console.log("Record ProductDetails Total: " + productDetail.getTotal().toString());

                                            console.log("Record ProductDetails ID: " + productDetail.getId());

                                            console.log("Record ProductDetails ProductDescription: " + productDetail.getProductDescription());

                                            let lineTaxes: LineTax[] = productDetail.getLineTax();

                                            lineTaxes.forEach(lineTax => {
                                                console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());

                                                console.log("Record ProductDetails LineTax Name: " + lineTax.getName());

                                                console.log("Record ProductDetails LineTax Id: " + lineTax.getId());

                                                console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                            });

                                        });
                                    }
                                    else if (value[0] instanceof Tag) {
                                        let tags: Tag[] = value;

                                        tags.forEach(tag => {
                                            //Get the Name of each Tag
                                            console.log("Record Tag Name: " + tag.getName());

                                            //Get the Id of each Tag
                                            console.log("Record Tag ID: " + tag.getId());
                                        });
                                    }
                                    else if (value[0] instanceof PricingDetails) {
                                        let pricingDetails: PricingDetails[] = value;

                                        pricingDetails.forEach(pricingDetail => {
                                            console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());

                                            console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());

                                            console.log("Record PricingDetails ID: " + pricingDetail.getId());

                                            console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                        });
                                    }
                                    else if (value[0] instanceof Record) {
                                        let recordArray: Record[] = value;

                                        recordArray.forEach(record => {
                                            Array.from(record.getKeyValues().keys()).forEach(key => {
                                                console.log(key + ": " + record.getKeyValues().get(key));
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof LineTax) {
                                        let lineTaxes: LineTax[] = value;

                                        lineTaxes.forEach(lineTax => {
                                            console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());

                                            console.log("Record ProductDetails LineTax Name: " + lineTax.getName());

                                            console.log("Record ProductDetails LineTax Id: " + lineTax.getId());

                                            console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                        });
                                    }
                                    else if (value[0] instanceof Comment) {
                                        let comments: Comment[] = value;

                                        comments.forEach(comment => {
                                            console.log("Record Comment CommentedBy: " + comment.getCommentedBy());

                                            console.log("Record Comment CommentedTime: " + comment.getCommentedTime().toString());

                                            console.log("Record Comment CommentContent: " + comment.getCommentContent());

                                            console.log("Record Comment Id: " + comment.getId());
                                        });
                                    }
                                    else if (value[0] instanceof Attachment) {
                                        let attachments: Attachment[] = value;

                                        attachments.forEach(attachment => {
                                            //Get the ID of each attachment
                                            console.log("Record Attachment ID: " + attachment.getId());

                                            //Get the owner User instance of each attachment
                                            let owner: User = attachment.getOwner();

                                            //Check if owner is not null
                                            if (owner != null) {
                                                //Get the Name of the Owner
                                                console.log("Record Attachment Owner - Name: " + owner.getName());

                                                //Get the ID of the Owner
                                                console.log("Record Attachment Owner ID: " + owner.getId());

                                                //Get the Email of the Owner
                                                console.log("Record Attachment Owner Email: " + owner.getEmail());
                                            }

                                            //Get the modified time of each attachment
                                            console.log("Record Attachment Modified Time: " + attachment.getModifiedTime().toString());

                                            //Get the name of the File
                                            console.log("Record Attachment File Name: " + attachment.getFileName());

                                            //Get the created time of each attachment
                                            console.log("Record Attachment Created Time: " + attachment.getCreatedTime());

                                            //Get the Attachment file size
                                            console.log("Record Attachment File Size: " + attachment.getSize());

                                            //Get the parentId Record instance of each attachment
                                            let parentId: Record = attachment.getParentId();

                                            //Check if parentId is not null
                                            if (parentId != null) {
                                                //Get the parent record Name of each attachment
                                                console.log("Record Attachment parent record Name: " + parentId.getKeyValue("name"));

                                                //Get the parent record ID of each attachment
                                                console.log("Record Attachment parent record ID: " + parentId.getId());
                                            }

                                            //Check if the attachment is Editable
                                            console.log("Record Attachment is Editable: " + attachment.getEditable().toString());

                                            //Get the file ID of each attachment
                                            console.log("Record Attachment File ID: " + attachment.getFileId());

                                            //Get the type of each attachment
                                            console.log("Record Attachment File Type: " + attachment.getType());

                                            //Get the seModule of each attachment
                                            console.log("Record Attachment seModule: " + attachment.getSeModule());

                                            //Get the modifiedBy User instance of each attachment
                                            let modifiedBy: User = attachment.getModifiedBy();

                                            //Check if modifiedBy is not null
                                            if (modifiedBy != null) {
                                                //Get the Name of the modifiedBy User
                                                console.log("Record Attachment Modified By User-Name: " + modifiedBy.getName());

                                                //Get the ID of the modifiedBy User
                                                console.log("Record Attachment Modified By User-ID: " + modifiedBy.getId());

                                                //Get the Email of the modifiedBy User
                                                console.log("Record Attachment Modified By User-Email: " + modifiedBy.getEmail());
                                            }

                                            //Get the state of each attachment
                                            console.log("Record Attachment State: " + attachment.getState());

                                            //Get the createdBy User instance of each attachment
                                            let createdBy: User = attachment.getCreatedBy();

                                            //Check if createdBy is not null
                                            if (createdBy != null) {
                                                //Get the name of the createdBy User
                                                console.log("Record Attachment Created By User-Name: " + createdBy.getName());

                                                //Get the ID of the createdBy User
                                                console.log("Record Attachment Created By User-ID: " + createdBy.getId());

                                                //Get the Email of the createdBy User
                                                console.log("Record Attachment Created By User-Email: " + createdBy.getEmail());
                                            }

                                            //Get the linkUrl of each attachment
                                            console.log("Record Attachment LinkUrl: " + attachment.getLinkUrl());
                                        });
                                    }
                                    else {
                                        console.log(keyName + ": " + value);
                                    }
                                }

                            }
                            else if (value instanceof User) {
                                console.log("Record " + keyName + " User-ID: " + value.getId());

                                console.log("Record " + keyName + " User-Name: " + value.getName());

                                console.log("Record " + keyName + " User-Email: " + value.getEmail());

                            }
                            else if (value instanceof Layout) {
                                console.log(keyName + " ID: " + value.getId());

                                console.log(keyName + " Name: " + value.getName());
                            }
                            else if (value instanceof Record) {
                                console.log(keyName + " Record ID: " + value.getId());

                                console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                            }
                            else if (value instanceof Choice) {
                                console.log(keyName + ": " + value.getValue());
                            }
                            else if (value instanceof RemindAt) {
                                console.log(keyName + ": " + value.getAlarm());
                            }
                            else if (value instanceof RecurringActivity) {
                                console.log(keyName);

                                console.log("RRULE: " + value.getRrule());
                            }
                            else if (value instanceof Consent) {

                                console.log("Record Consent ID: " + value.getId());

                                //Get the Owner User instance of each attachment
                                let owner: User = value.getOwner();

                                //Check if owner is not null
                                if (owner != null) {
                                    //Get the name of the owner User
                                    console.log("Record Consent Owner Name: " + owner.getName());

                                    //Get the ID of the owner User
                                    console.log("Record Consent Owner ID: " + owner.getId());

                                    //Get the Email of the owner User
                                    console.log("Record Consent Owner Email: " + owner.getEmail());
                                }

                                let consentCreatedBy: User = value.getCreatedBy();

                                //Check if createdBy is not null
                                if (consentCreatedBy != null) {
                                    //Get the name of the CreatedBy User
                                    console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());

                                    //Get the ID of the CreatedBy User
                                    console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());

                                    //Get the Email of the CreatedBy User
                                    console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                                }

                                let consentModifiedBy: User = value.getModifiedBy();

                                //Check if createdBy is not null
                                if (consentModifiedBy != null) {
                                    //Get the name of the ModifiedBy User
                                    console.log("Record Consent ModifiedBy Name: " + consentModifiedBy.getName());

                                    //Get the ID of the ModifiedBy User
                                    console.log("Record Consent ModifiedBy ID: " + consentModifiedBy.getId());

                                    //Get the Email of the ModifiedBy User
                                    console.log("Record Consent ModifiedBy Email: " + consentModifiedBy.getEmail());
                                }

                                console.log("Record Consent CreatedTime: " + value.getCreatedTime());

                                console.log("Record Consent ModifiedTime: " + value.getModifiedTime());

                                console.log("Record Consent ContactThroughEmail: " + value.getContactThroughEmail());

                                console.log("Record Consent ContactThroughSocial: " + value.getContactThroughSocial());

                                console.log("Record Consent ContactThroughSurvey: " + value.getContactThroughSurvey());

                                console.log("Record Consent ContactThroughPhone: " + value.getContactThroughPhone());

                                console.log("Record Consent MailSentTime: " + value.getMailSentTime().toString());

                                console.log("Record Consent ConsentDate: " + value.getConsentDate().toString());

                                console.log("Record Consent ConsentRemarks: " + value.getConsentRemarks());

                                console.log("Record Consent ConsentThrough: " + value.getConsentThrough());

                                console.log("Record Consent DataProcessingBasis: " + value.getDataProcessingBasis());

                                //To get custom values
                                console.log("Record Consent Lawful Reason: " + value.getKeyValue("Lawful_Reason"));
                            }
                            else if (value instanceof Map) {
                                console.log(keyName);

                                Array.from(value.keys()).forEach(key => {
                                    console.log(key + ": " + value.get(key));
                                });
                            }
                            else {
                                console.log(keyName + ": " + value);
                            }
                        }
                    }
                }
                //Check if expected FileBodyWrapper instance is received
                else if (responseObject instanceof FileBodyWrapper) {

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

    /**
     * <h3>Update Record Using External Id</h3>
     * This method is used to update a single record of a module with ID and print the response.
     * @param {String} moduleAPIName The API Name of the record's module.
     * @param {String} externalFieldValue
     */
    public static async updateRecordUsingExternalId(moduleAPIName: string, externalFieldValue: string) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: BodyWrapper = new BodyWrapper();

        //Array to hold Record instances
        let recordsArray: Record[] = [];

        //Get instance of Record Class
        let record1: Record = new Record();

        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record1.addFieldValue(Field.Leads.CITY, "City");

        record1.addFieldValue(Field.Leads.LAST_NAME, "Last Name");

        record1.addFieldValue(Field.Leads.FIRST_NAME, "First Name");

        record1.addFieldValue(Field.Leads.LAST_NAME, "Last Name");

        record1.addFieldValue(Field.Leads.COMPANY, "KKRNP");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Custom_field", "Value");

        record1.addKeyValue("Custom_field_2", "value");

        record1.addKeyValue("Date_1", new Date(2017, 1, 13));

        let fileDetails: FileDetails[] = [];

        let fileDetail: FileDetails = new FileDetails();

        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32537b7c2400dadca8ff55f620c65357da");

        fileDetails.push(fileDetail);

        fileDetail = new FileDetails();

        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32e0063e7321b5b4ca878a934519e6cdb2");

        fileDetails.push(fileDetail);

        fileDetail = new FileDetails();

        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c323daf4780bfe0058133556f155795981f");

        fileDetails.push(fileDetail);

        record1.addKeyValue("File_Upload_1", fileDetails);

        //Used when GDPR is enabled
        let dataConsent: Consent = new Consent();

        dataConsent.setConsentRemarks("Approved.");

        dataConsent.setConsentThrough("Email");

        dataConsent.setContactThroughEmail(true);

        dataConsent.setContactThroughSocial(false);

        record1.addKeyValue("Data_Processing_Basis_Details", dataConsent);

        //Add Record instance to the array
        recordsArray.push(record1);

        //Set the array to Records in BodyWrapper instance
        request.setData(recordsArray);

        let trigger: string[] = [];

        trigger.push("approval");

        trigger.push("workflow");

        trigger.push("blueprint");

        request.setTrigger(trigger);

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        await headerInstance.add(UpdateRecordHeader.X_EXTERNAL, "Leads.External");

        //Call updateRecordUsingExternalId method that takes externalFieldValue, moduleAPIName, BodyWrapper instance and headerInstance as parameter.
        let response: APIResponse<ActionHandler> = await recordOperations.updateRecordUsingExternalId(externalFieldValue, moduleAPIName, request, headerInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionHandler = response.getObject();

            if (responseObject != null) {

                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
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

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

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
     * <h3> Delete Record</h3>
     * This method is used to delete a single record of a module with ID and print the response.
     * @param {String} moduleAPIName The API Name of the record's module.
     * @param {String} externalFieldValue
     */
    public static async deleteRecordUsingExternalId(moduleAPIName: string, externalFieldValue: string) {

        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        //Possible parameters for Delete Record operation
        await paramInstance.add(DeleteRecordParam.WF_TRIGGER, true);

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        await headerInstance.add(DeleteRecordHeader.X_EXTERNAL, "Leads.External");

        //Call deleteRecordUsingExternalId method that takes externalFieldValue, moduleAPIName, paramInstance and headerInstance as parameter.
        let response: APIResponse<ActionHandler> = await recordOperations.deleteRecordUsingExternalId(externalFieldValue, moduleAPIName, paramInstance, headerInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionHandler = response.getObject();

            if (responseObject != null) {

                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
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

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

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
     * <h3> Get Records</h3>
     * This method is used to get all the records of a module and print the response.
     * @param moduleAPIName The API Name of the module to fetch records
     */
    public static async getRecords(moduleAPIName: string) {

        //example
        //let moduleAPIName = "Leads";

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        /* Possible parameters for Get Records operation*/
        await paramInstance.add(GetRecordsParam.APPROVED, "both");

        await paramInstance.add(GetRecordsParam.CONVERTED, "both");

        await paramInstance.add(GetRecordsParam.CVID, "3477061087501");

        let ids = ["213456782", "LeadsExternal"];

        for (let id of ids) {
            await paramInstance.add(GetRecordsParam.IDS, id);
        }

        await paramInstance.add(GetRecordsParam.UID, "34770615181008");

        let fieldNames = ["Company", "Email"];

        await paramInstance.add(GetRecordsParam.FIELDS, fieldNames.toString());

        await paramInstance.add(GetRecordsParam.SORT_BY, "Email");

        await paramInstance.add(GetRecordsParam.SORT_ORDER, "desc");

        await paramInstance.add(GetRecordsParam.PAGE, 1);

        await paramInstance.add(GetRecordsParam.PER_PAGE, 200);

        let startDateTime = new Date(2020, 1, 10, 10, 10, 10);

        await paramInstance.add(GetRecordsParam.STARTDATETIME, startDateTime);

        let endDateTime = new Date(2020, 7, 10, 12, 12, 12);

        await paramInstance.add(GetRecordsParam.ENDDATETIME, endDateTime);

        await paramInstance.add(GetRecordsParam.TERRITORY_ID, "3409643505351");

        await paramInstance.add(GetRecordsParam.INCLUDE_CHILD, "true");

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        /* Possible headers for Get Record operation*/
        await headerInstance.add(GetRecordsHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T00:00:00+05:30"));

        // await headerInstance.add(GetRecordsHeader.X_EXTERNAL, "Leads.External");

        //Call getRecords method that takes moduleAPIName, paramInstance and headerInstance as parameters
        let response: APIResponse<ResponseHandler> = await recordOperations.getRecords(moduleAPIName, paramInstance, headerInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get the object from response
            let responseObject: ResponseHandler = response.getObject();

            if (responseObject != null) {

                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ResponseWrapper) {

                    //Get the array of obtained Record instances
                    let records: Record[] = responseObject.getData();

                    for (let record of records) {
                        //Get the ID of each Record
                        console.log("Record ID: " + record.getId());

                        //Get the createdBy User instance of each Record
                        let createdBy: User = record.getCreatedBy();

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
                        let modifiedBy: User = record.getModifiedBy();

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
                        let tags: Tag[] = record.getTag();

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
                        console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                        console.log("Record KeyValues: ");

                        let keyValues: Map<string, any> = record.getKeyValues();

                        let keyArray: string[] = Array.from(keyValues.keys());

                        for (let keyName of keyArray) {
                            let value: any = keyValues.get(keyName);

                            if (Array.isArray(value)) {

                                if (value.length > 0) {
                                    if (value[0] instanceof FileDetails) {
                                        let fileDetails: FileDetails[] = value;

                                        fileDetails.forEach(fileDetail => {
                                            //Get the Extn of each FileDetails
                                            console.log("Record FileDetails Extn: " + fileDetail.getExtn());

                                            //Get the IsPreviewAvailable of each FileDetails
                                            console.log("Record FileDetails IsPreviewAvailable: " + fileDetail.getIsPreviewAvailable());

                                            //Get the DownloadUrl of each FileDetails
                                            console.log("Record FileDetails DownloadUrl: " + fileDetail.getDownloadUrl());

                                            //Get the DeleteUrl of each FileDetails
                                            console.log("Record FileDetails DeleteUrl: " + fileDetail.getDeleteUrl());

                                            //Get the EntityId of each FileDetails
                                            console.log("Record FileDetails EntityId: " + fileDetail.getEntityId());

                                            //Get the Mode of each FileDetails
                                            console.log("Record FileDetails Mode: " + fileDetail.getMode());

                                            //Get the OriginalSizeByte of each FileDetails
                                            console.log("Record FileDetails OriginalSizeByte: " + fileDetail.getOriginalSizeByte());

                                            //Get the PreviewUrl of each FileDetails
                                            console.log("Record FileDetails PreviewUrl: " + fileDetail.getPreviewUrl());

                                            //Get the FileName of each FileDetails
                                            console.log("Record FileDetails FileName: " + fileDetail.getFileName());

                                            //Get the FileId of each FileDetails
                                            console.log("Record FileDetails FileId: " + fileDetail.getFileId());

                                            //Get the AttachmentId of each FileDetails
                                            console.log("Record FileDetails AttachmentId: " + fileDetail.getAttachmentId());

                                            //Get the FileSize of each FileDetails
                                            console.log("Record FileDetails FileSize: " + fileDetail.getFileSize());

                                            //Get the CreatorId of each FileDetails
                                            console.log("Record FileDetails CreatorId: " + fileDetail.getCreatorId());

                                            //Get the LinkDocs of each FileDetails
                                            console.log("Record FileDetails LinkDocs: " + fileDetail.getLinkDocs());
                                        });
                                    }
                                    else if (value[0] instanceof Reminder) {
                                        let reminders: Reminder[] = value;

                                        reminders.forEach(reminder => {
                                            console.log("Reminder Period: " + reminder.getPeriod());

                                            console.log("Reminder Unit: " + reminder.getUnit());
                                        });
                                    }
                                    else if (value[0] instanceof Choice) {
                                        let choiceArray: Choice<any>[] = value;

                                        console.log(keyName);

                                        console.log("Values");

                                        choiceArray.forEach(eachChoice => {
                                            console.log(eachChoice.getValue());
                                        });
                                    }
                                    else if (value[0] instanceof Participants) {
                                        let participants: Participants[] = value;

                                        participants.forEach(participant => {
                                            console.log("Record Participants Name: " + participant.getName());

                                            console.log("Record Participants Invited: " + participant.getInvited().toString());

                                            console.log("Record Participants ID: " + participant.getId());

                                            console.log("Record Participants Type: " + participant.getType());

                                            console.log("Record Participants Participant: " + participant.getParticipant());

                                            console.log("Record Participants Status: " + participant.getStatus());
                                        });
                                    }
                                    else if (value[0] instanceof InventoryLineItems) {
                                        let productDetails: InventoryLineItems[] = value;

                                        productDetails.forEach(productDetail => {
                                            let lineItemProduct: LineItemProduct = productDetail.getProduct();

                                            if (lineItemProduct != null) {
                                                console.log("Record ProductDetails LineItemProduct ProductCode: " + lineItemProduct.getProductCode());

                                                console.log("Record ProductDetails LineItemProduct Currency: " + lineItemProduct.getCurrency());

                                                console.log("Record ProductDetails LineItemProduct Name: " + lineItemProduct.getName());

                                                console.log("Record ProductDetails LineItemProduct Id: " + lineItemProduct.getId());
                                            }

                                            console.log("Record ProductDetails Quantity: " + productDetail.getQuantity().toString());

                                            console.log("Record ProductDetails Discount: " + productDetail.getDiscount());

                                            console.log("Record ProductDetails TotalAfterDiscount: " + productDetail.getTotalAfterDiscount().toString());

                                            console.log("Record ProductDetails NetTotal: " + productDetail.getNetTotal().toString());

                                            if (productDetail.getBook() != null) {
                                                console.log("Record ProductDetails Book: " + productDetail.getBook().toString());
                                            }

                                            console.log("Record ProductDetails Tax: " + productDetail.getTax().toString());

                                            console.log("Record ProductDetails ListPrice: " + productDetail.getListPrice().toString());

                                            console.log("Record ProductDetails UnitPrice: " + productDetail.getUnitPrice());

                                            console.log("Record ProductDetails QuantityInStock: " + productDetail.getQuantityInStock().toString());

                                            console.log("Record ProductDetails Total: " + productDetail.getTotal().toString());

                                            console.log("Record ProductDetails ID: " + productDetail.getId());

                                            console.log("Record ProductDetails ProductDescription: " + productDetail.getProductDescription());

                                            let lineTaxes: LineTax[] = productDetail.getLineTax();

                                            lineTaxes.forEach(lineTax => {
                                                console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());

                                                console.log("Record ProductDetails LineTax Name: " + lineTax.getName());

                                                console.log("Record ProductDetails LineTax Id: " + lineTax.getId());

                                                console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                            });

                                        });
                                    }
                                    else if (value[0] instanceof Tag) {
                                        let tags: Tag[] = value;

                                        tags.forEach(tag => {
                                            //Get the Name of each Tag
                                            console.log("Record Tag Name: " + tag.getName());

                                            //Get the Id of each Tag
                                            console.log("Record Tag ID: " + tag.getId());
                                        });
                                    }
                                    else if (value[0] instanceof PricingDetails) {
                                        let pricingDetails: PricingDetails[] = value;

                                        pricingDetails.forEach(pricingDetail => {
                                            console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());

                                            console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());

                                            console.log("Record PricingDetails ID: " + pricingDetail.getId());

                                            console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                        });
                                    }
                                    else if (value[0] instanceof Record) {
                                        let recordArray: Record[] = value;

                                        recordArray.forEach(record => {
                                            Array.from(record.getKeyValues().keys()).forEach(key => {
                                                console.log(key + ": " + record.getKeyValues().get(key));
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof LineTax) {
                                        let lineTaxes: LineTax[] = value;

                                        lineTaxes.forEach(lineTax => {
                                            console.log("Record LineTax Percentage: " + lineTax.getPercentage().toString());

                                            console.log("Record LineTax Name: " + lineTax.getName());

                                            console.log("Record LineTax Id: " + lineTax.getId());

                                            console.log("Record LineTax Value: " + lineTax.getValue().toString());
                                        });
                                    }
                                    else if (value[0] instanceof Comment) {
                                        let comments: Comment[] = value;

                                        comments.forEach(comment => {
                                            console.log("Record Comment CommentedBy: " + comment.getCommentedBy());

                                            console.log("Record Comment CommentedTime: " + comment.getCommentedTime().toString());

                                            console.log("Record Comment CommentContent: " + comment.getCommentContent());

                                            console.log("Record Comment Id: " + comment.getId());
                                        });
                                    }
                                    else if (value[0] instanceof Attachment) {
                                        let attachments: Attachment[] = value;

                                        attachments.forEach(attachment => {
                                            //Get the ID of each attachment
                                            console.log("Record Attachment ID: " + attachment.getId());

                                            //Get the owner User instance of each attachment
                                            let owner: User = attachment.getOwner();

                                            //Check if owner is not null
                                            if (owner != null) {
                                                //Get the Name of the Owner
                                                console.log("Record Attachment Owner - Name: " + owner.getName());

                                                //Get the ID of the Owner
                                                console.log("Record Attachment Owner ID: " + owner.getId());

                                                //Get the Email of the Owner
                                                console.log("Record Attachment Owner Email: " + owner.getEmail());
                                            }

                                            //Get the modified time of each attachment
                                            console.log("Record Attachment Modified Time: " + attachment.getModifiedTime().toString());

                                            //Get the name of the File
                                            console.log("Record Attachment File Name: " + attachment.getFileName());

                                            //Get the created time of each attachment
                                            console.log("Record Attachment Created Time: " + attachment.getCreatedTime());

                                            //Get the Attachment file size
                                            console.log("Record Attachment File Size: " + attachment.getSize());

                                            //Get the parentId Record instance of each attachment
                                            let parentId: Record = attachment.getParentId();

                                            //Check if parentId is not null
                                            if (parentId != null) {
                                                //Get the parent record Name of each attachment
                                                console.log("Record Attachment parent record Name: " + parentId.getKeyValue("name"));

                                                //Get the parent record ID of each attachment
                                                console.log("Record Attachment parent record ID: " + parentId.getId());
                                            }

                                            //Check if the attachment is Editable
                                            console.log("Record Attachment is Editable: " + attachment.getEditable().toString());

                                            //Get the file ID of each attachment
                                            console.log("Record Attachment File ID: " + attachment.getFileId());

                                            //Get the type of each attachment
                                            console.log("Record Attachment File Type: " + attachment.getType());

                                            //Get the seModule of each attachment
                                            console.log("Record Attachment seModule: " + attachment.getSeModule());

                                            //Get the modifiedBy User instance of each attachment
                                            let modifiedBy: User = attachment.getModifiedBy();

                                            //Check if modifiedBy is not null
                                            if (modifiedBy != null) {
                                                //Get the Name of the modifiedBy User
                                                console.log("Record Attachment Modified By User-Name: " + modifiedBy.getName());

                                                //Get the ID of the modifiedBy User
                                                console.log("Record Attachment Modified By User-ID: " + modifiedBy.getId());

                                                //Get the Email of the modifiedBy User
                                                console.log("Record Attachment Modified By User-Email: " + modifiedBy.getEmail());
                                            }

                                            //Get the state of each attachment
                                            console.log("Record Attachment State: " + attachment.getState());

                                            //Get the createdBy User instance of each attachment
                                            let createdBy: User = attachment.getCreatedBy();

                                            //Check if createdBy is not null
                                            if (createdBy != null) {
                                                //Get the name of the createdBy User
                                                console.log("Record Attachment Created By User-Name: " + createdBy.getName());

                                                //Get the ID of the createdBy User
                                                console.log("Record Attachment Created By User-ID: " + createdBy.getId());

                                                //Get the Email of the createdBy User
                                                console.log("Record Attachment Created By User-Email: " + createdBy.getEmail());
                                            }

                                            //Get the linkUrl of each attachment
                                            console.log("Record Attachment LinkUrl: " + attachment.getLinkUrl());
                                        });
                                    }
                                    else {
                                        console.log(keyName);

                                        for (let arrayIndex = 0; arrayIndex < value.length; arrayIndex++) {
                                            const arrayValue = value[arrayIndex];

                                            console.log(arrayValue);
                                        }
                                    }
                                }

                            }
                            else if (value instanceof User) {
                                console.log("Record " + keyName + " User-ID: " + value.getId());

                                console.log("Record " + keyName + " User-Name: " + value.getName());

                                console.log("Record " + keyName + " User-Email: " + value.getEmail());
                            }
                            else if (value instanceof Layout) {
                                console.log(keyName + " ID: " + value.getId());

                                console.log(keyName + " Name: " + value.getName());
                            }
                            else if (value instanceof Record) {
                                console.log(keyName + " Record ID: " + value.getId());

                                console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                            }
                            else if (value instanceof Choice) {
                                console.log(keyName + ": " + value.getValue());
                            }
                            else if (value instanceof RemindAt) {
                                console.log(keyName + ": " + value.getAlarm());
                            }
                            else if (value instanceof RecurringActivity) {
                                console.log(keyName);

                                console.log("RRULE: " + value.getRrule());
                            }
                            else if (value instanceof Consent) {

                                console.log("Record Consent ID: " + value.getId());

                                //Get the Owner User instance of each attachment
                                let owner: User = value.getOwner();

                                //Check if owner is not null
                                if (owner != null) {
                                    //Get the name of the owner User
                                    console.log("Record Consent Owner Name: " + owner.getName());

                                    //Get the ID of the owner User
                                    console.log("Record Consent Owner ID: " + owner.getId());

                                    //Get the Email of the owner User
                                    console.log("Record Consent Owner Email: " + owner.getEmail());
                                }

                                let consentCreatedBy: User = value.getCreatedBy();

                                //Check if createdBy is not null
                                if (consentCreatedBy != null) {
                                    //Get the name of the CreatedBy User
                                    console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());

                                    //Get the ID of the CreatedBy User
                                    console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());

                                    //Get the Email of the CreatedBy User
                                    console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                                }

                                let consentModifiedBy: User = value.getModifiedBy();

                                //Check if createdBy is not null
                                if (consentModifiedBy != null) {
                                    //Get the name of the ModifiedBy User
                                    console.log("Record Consent ModifiedBy Name: " + consentModifiedBy.getName());

                                    //Get the ID of the ModifiedBy User
                                    console.log("Record Consent ModifiedBy ID: " + consentModifiedBy.getId());

                                    //Get the Email of the ModifiedBy User
                                    console.log("Record Consent ModifiedBy Email: " + consentModifiedBy.getEmail());
                                }

                                console.log("Record Consent CreatedTime: " + value.getCreatedTime());

                                console.log("Record Consent ModifiedTime: " + value.getModifiedTime());

                                console.log("Record Consent ContactThroughEmail: " + value.getContactThroughEmail());

                                console.log("Record Consent ContactThroughSocial: " + value.getContactThroughSocial());

                                console.log("Record Consent ContactThroughSurvey: " + value.getContactThroughSurvey());

                                console.log("Record Consent ContactThroughPhone: " + value.getContactThroughPhone());

                                console.log("Record Consent MailSentTime: " + value.getMailSentTime().toString());

                                console.log("Record Consent ConsentDate: " + value.getConsentDate().toString());

                                console.log("Record Consent ConsentRemarks: " + value.getConsentRemarks());

                                console.log("Record Consent ConsentThrough: " + value.getConsentThrough());

                                console.log("Record Consent DataProcessingBasis: " + value.getDataProcessingBasis());

                                //To get custom values
                                console.log("Record Consent Lawful Reason: " + value.getKeyValue("Lawful_Reason"));
                            }
                            else if (value instanceof Map) {
                                console.log(keyName);

                                Array.from(value.keys()).forEach(key => {
                                    console.log(key + ": " + value.get(key));
                                });
                            }
                            else {
                                console.log(keyName + ": " + value);
                            }
                        }
                    }

                    //Get the obtained Info instance
                    let info: Info = responseObject.getInfo();

                    if (info != null) {

                        if (info.getPerPage() != null) {
                            //Get the PerPage of the Info
                            console.log("Record Info PerPage: " + info.getPerPage().toString());
                        }

                        if (info.getCount() != null) {
                            //Get the Count of the Info
                            console.log("Record Info Count: " + info.getCount().toString());
                        }

                        if (info.getPage() != null) {
                            //Get the Page of the Info
                            console.log("Record Info Page: " + info.getPage().toString());
                        }

                        if (info.getMoreRecords() != null) {
                            //Get the MoreRecords of the Info
                            console.log("Record Info MoreRecords: " + info.getMoreRecords().toString());
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

    /**
     * <h3> Create Records</h3>
     * This method is used to create records of a module and print the response.
     * @param moduleAPIName The API Name of the module to create records.
     */
    public static async createRecords(moduleAPIName: string) {

        //example
        //let moduleAPIName = "Leads";

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: BodyWrapper = new BodyWrapper();

        //Array to hold Record instances
        let recordsArray: Record[] = [];

        //Get instance of Record Class
        let record: Record = new Record();

        /* Value to Record's fields can be provided in any of the following ways */

        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record.addFieldValue(Field.Leads.LAST_NAME, "Node JS SDK");

        record.addFieldValue(Field.Leads.FIRST_NAME, "Node");

        record.addFieldValue(Field.Leads.COMPANY, "ZCRM");

        record.addFieldValue(Field.Leads.CITY, "City");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record.addKeyValue("Custom_field", "Value");

        record.addKeyValue("External", "LeadsExternal1");

        record.addKeyValue("Long_Integer_1", BigInt("3477061929401"));

        // record.addKeyValue("Date_1", new Date(2020,10,20));

        record.addKeyValue("Subject", "AutomatedSDK");

        let fileDetails: FileDetails[] = [];

        let fileDetail: FileDetails = new FileDetails();

        fileDetail.setFileId("479f0f5eebf0fb982f99e3832b35d23e29f67c2868ee4c789f22579895383c8");

        fileDetails.push(fileDetail);

        fileDetail = new FileDetails();

        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32e0063e7321b5b4ca878a934519e6cdb2");

        fileDetails.push(fileDetail);

        fileDetail = new FileDetails();

        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c323daf4780bfe0058133556f155795981f");

        fileDetails.push(fileDetail);

        record.addKeyValue("File_Upload", fileDetails);

        //Used when GDPR is enabled
        let dataConsent = new Consent();

        dataConsent.setConsentRemarks("Approved.");

        dataConsent.setConsentThrough("Email");

        dataConsent.setContactThroughEmail(true);

        dataConsent.setContactThroughSocial(false);

        record.addKeyValue("Data_Processing_Basis_Details", dataConsent);

        /** Following methods are being used only by Inventory modules */

        let dealName: Record = new Record();

        dealName.addFieldValue(Field.Deals.ID, BigInt("347706110830013"));

        record.addFieldValue(Field.Sales_Orders.DEAL_NAME, dealName);

        let contactName: Record = new Record();

        contactName.addFieldValue(Field.Contacts.ID, BigInt("347706110721012"));

        contactName.addFieldValue(Field.Sales_Orders.CONTACT_NAME, contactName);

        let accountName: Record = new Record();

        accountName.addKeyValue("name", "Account_Name");

        record.addFieldValue(Field.Sales_Orders.ACCOUNT_NAME, accountName);

        record.addKeyValue("Discount", 10.5);

        let inventoryLineItemArray: InventoryLineItems[] = [];

        let inventoryLineItem: InventoryLineItems = new InventoryLineItems();

        let lineItemProduct: LineItemProduct = new LineItemProduct();

        // lineItemProduct.setId(BigInt("34770618864005"));

        lineItemProduct.addKeyValue("Products_External", "ProductExternal");

        inventoryLineItem.setProduct(lineItemProduct);

        inventoryLineItem.setQuantity(3);

        inventoryLineItem.setProductDescription("productDescription");

        inventoryLineItem.setListPrice(10.0);

        inventoryLineItem.setDiscount("5.90");

        let productLineTaxes: LineTax[] = [];

        let productLineTax: LineTax = new LineTax();

        productLineTax.setName("MyTax1134");

        productLineTax.setPercentage(20.0);

        productLineTaxes.push(productLineTax);

        inventoryLineItem.setLineTax(productLineTaxes);

        inventoryLineItemArray.push(inventoryLineItem);

        record.addKeyValue("Product_Details", inventoryLineItemArray);

        let lineTaxes: LineTax[] = [];

        let lineTax: LineTax = new LineTax();

        lineTax.setName("MyTax1134");

        lineTax.setPercentage(20.0);

        lineTaxes.push(lineTax);

        record.addKeyValue("$line_tax", lineTaxes);

        /** End Inventory **/

        /** Following methods are being used only by Activity modules */

        record.addFieldValue(Field.Tasks.DESCRIPTION, "New Task");

        record.addKeyValue("Currency", new Choice("INR"));

        let remindAt: RemindAt = new RemindAt();

        remindAt.setAlarm("FREQ=NONE;ACTION=EMAILANDPOPUP;TRIGGER=DATE-TIME:2020-07-03T12:30:00+05:30");

        record.addFieldValue(Field.Tasks.REMIND_AT, remindAt);

        let whoId: Record = new Record();

        whoId.setId(BigInt("347706110721012"));

        record.addFieldValue(Field.Tasks.WHO_ID, whoId);

        record.addFieldValue(Field.Tasks.STATUS, new Choice("Waiting for input"));

        record.addFieldValue(Field.Tasks.DUE_DATE, new Date(2020, 10, 10));

        record.addFieldValue(Field.Tasks.PRIORITY, new Choice("High"));

        let whatId: Record = new Record();

        whatId.setId(BigInt("347706110721008"));

        record.addFieldValue(Field.Tasks.WHAT_ID, whatId);

        record.addKeyValue("$se_module", "Accounts");

        /** Recurring Activity can be provided in any activity module*/

        let recurringActivity: RecurringActivity = new RecurringActivity();

        recurringActivity.setRrule("FREQ=DAILY;INTERVAL=10;UNTIL=2020-08-14;DTSTART=2020-07-03");

        record.addFieldValue(Field.Events.RECURRING_ACTIVITY, recurringActivity);

        record.addFieldValue(Field.Events.DESCRIPTION, "My Event");

        let startDateTime: Date = new Date('October 15, 2020 05:35:32');

        record.addFieldValue(Field.Events.START_DATETIME, startDateTime);

        let participantsArray: Participants[] = [];

        let participant = new Participants();

        participant.setParticipant("zoho@gmail.com");

        participant.setType("email");

        participantsArray.push(participant);

        participant = new Participants();

        participant.setParticipant("347706110721012");

        participant.setType("contact");

        participantsArray.push(participant);

        record.addFieldValue(Field.Events.PARTICIPANTS, participantsArray);

        record.addKeyValue("$send_notification", true);

        record.addFieldValue(Field.Events.EVENT_TITLE, "New Automated Event");

        let endDateTime: Date = new Date('November 15, 2020 05:35:32');

        record.addFieldValue(Field.Events.END_DATETIME, endDateTime);

        let remindAt1: Date = new Date('October 15, 2020 04:35:32');

        record.addFieldValue(Field.Events.REMIND_AT, remindAt1);

        record.addFieldValue(Field.Events.CHECK_IN_STATUS, "PLANNED");

        whatId = new Record();

        whatId.setId(BigInt("347706110932020"));

        record.addFieldValue(Field.Tasks.WHAT_ID, whatId);

        record.addKeyValue("$se_module", "Leads");

        /** End Activity **/

        /** Following methods are being used only by Price_Books module */

        let pricingDetailsArray: PricingDetails[] = [];

        let pricingDetail: PricingDetails = new PricingDetails();

        pricingDetail.setFromRange(1.0);

        pricingDetail.setToRange(5.0);

        pricingDetail.setDiscount(2.0);

        pricingDetailsArray.push(pricingDetail);

        pricingDetail = new PricingDetails();

        pricingDetail.addKeyValue("from_range", 6.0);

        pricingDetail.addKeyValue("to_range", 11.0);

        pricingDetail.addKeyValue("discount", 3.0);

        pricingDetailsArray.push(pricingDetail);

        record.addFieldValue(Field.Price_Books.PRICING_DETAILS, pricingDetailsArray);

        record.addKeyValue("Email", "abc@zoho.com");

        record.addFieldValue(Field.Price_Books.DESCRIPTION, "TEST");

        record.addFieldValue(Field.Price_Books.PRICE_BOOK_NAME, "book_name");

        record.addFieldValue(Field.Price_Books.PRICING_MODEL, new Choice("Flat"));

        /** End of Price_Books */

        let tagsArray: Tag[] = [];

        let tag: Tag = new Tag();

        tag.setName("Testtask");

        tagsArray.push(tag);

        //Add Record instance to the array
        recordsArray.push(record);

        //Set the array to data in BodyWrapper instance
        request.setData(recordsArray);

        let trigger: string[] = [];

        trigger.push("approval");

        trigger.push("workflow");

        trigger.push("blueprint");

        //Set the array containing the trigger operations to be run
        request.setTrigger(trigger);

        let larId: string = "34096432157065";

        //Set the larId
        request.setLarId(larId);

        let process: string[] = ["review_process"];

        //Set the array containing the process to be run
        request.setProcess(process);

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        // await headerInstance.add(CreateRecordsHeader.X_EXTERNAL, "Quotes.Product_Details.product.Products_External");

        //Call createRecords method that takes moduleAPIName and BodyWrapper instance as parameters
        let response: APIResponse<ActionHandler> = await recordOperations.createRecords(moduleAPIName, request, headerInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionHandler = response.getObject();

            if (responseObject != null) {

                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
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

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

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
     * <h3> Update Records</h3>
     * This method is used to update the records of a module with ID and print the response.
     * @param moduleAPIName The API Name of the module to update records.
     */
    public static async updateRecords(moduleAPIName: string) {

        //example
        //let moduleAPIName = "Leads";

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: BodyWrapper = new BodyWrapper();

        //Array to hold Record instances
        let recordsArray: Record[] = [];

        let record1: Record = new Record();

        //ID of the record to be updated
        record1.setId(BigInt("34770619306008"));

        // record1.addKeyValue("External", "LeadsExternal1");
        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record1.addFieldValue(Field.Leads.CITY, "City");

        record1.addFieldValue(Field.Leads.LAST_NAME, "Last Name");

        record1.addFieldValue(Field.Leads.FIRST_NAME, "First Name");

        record1.addFieldValue(Field.Leads.COMPANY, "KKRNP");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Custom_field", "Custom val");

        record1.addKeyValue("Custom_field_2", 10);

        //Used when GDPR is enabled
        let dataConsent: Consent = new Consent();

        dataConsent.setConsentRemarks("Approved.");

        dataConsent.setConsentThrough("Email");

        dataConsent.setContactThroughEmail(true);

        dataConsent.setContactThroughSocial(false);

        // record1.addKeyValue("Data_Processing_Basis_Details", dataConsent);

        recordsArray.push(record1);

        let record2: Record = new Record();

        //ID of the record to be updated
        record2.addFieldValue(Field.Leads.ID, BigInt("34096431881002"));

        // record2.addKeyValue("External", "LeadsExternal1");

        /*
         * Call addFieldValue method that takes two arguments
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record2.addFieldValue(Field.Leads.CITY, "City");

        record2.addFieldValue(Field.Leads.LAST_NAME, "Last Name");

        record2.addFieldValue(Field.Leads.FIRST_NAME, "First Name");

        record2.addFieldValue(Field.Leads.COMPANY, "KKRNP");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record2.addKeyValue("Custom_field", "Value");

        record2.addKeyValue("Custom_field_2", "value");

        //Add Record instance to the array
        recordsArray.push(record2);

        //Set the array to data in BodyWrapper instance
        request.setData(recordsArray);

        let trigger: string[] = [];

        trigger.push("approval");

        trigger.push("workflow");

        trigger.push("blueprint");

        //Set the array containing the trigger operations to be run
        request.setTrigger(trigger);

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        // await headerInstance.add(UpdateRecordsHeader.X_EXTERNAL, "Leads.External");

        //Call updateRecords method that takes moduleAPIName, BodyWrapper instance and headerInstance as parameter.
        let response: APIResponse<ActionHandler> = await recordOperations.updateRecords(moduleAPIName, request, headerInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionHandler = response.getObject();

            if (responseObject != null) {

                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
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

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

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
     * <h3> Delete Records</h3>
     * This method is used to delete records of a module and print the response.
     * @param moduleAPIName The API Name of the module to delete records.
     * @param recordIds The array of record IDs to be deleted
     */
    public static async deleteRecords(moduleAPIName: string, recordIds: string[]) {
        //example
        //let moduleAPIName = "Contacts";
        // let recordIds = [3409643756050n, 3409643729017n, 3409643729009n];

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        /* Possible parameters for Delete Records operation */
        for (let recordId of recordIds) {
            await paramInstance.add(DeleteRecordsParam.IDS, recordId);
        }

        await paramInstance.add(DeleteRecordsParam.WF_TRIGGER, true);

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        // await headerInstance.add(DeleteRecordsHeader.X_EXTERNAL, "Leads.External");

        //Call deleteRecords method that takes moduleAPIName, paramInstance and headerInstance as parameter.
        let response: APIResponse<ActionHandler> = await recordOperations.deleteRecords(moduleAPIName, paramInstance, headerInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {

                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
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

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

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
     * <h3> Upsert Records</h3>
     * This method is used to Upsert records of a module and print the response.
     * @param moduleAPIName The API Name of the module to upsert records.
     */
    public static async upsertRecords(moduleAPIName: string) {

        //example
        //let moduleAPIName = "Leads";

        //Get instance of RecordOperations Class that takes moduleAPIName as parameter
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: BodyWrapper = new BodyWrapper();

        //Array to hold Record instances
        let recordsArray: Record[] = [];

        //Get instance of Record Class
        let record1: Record = new Record();

        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record1.addFieldValue(Field.Leads.CITY, "City");

        record1.addFieldValue(Field.Leads.LAST_NAME, "Last Name");

        record1.addFieldValue(Field.Leads.FIRST_NAME, "First Name");

        record1.addFieldValue(Field.Leads.COMPANY, "KKRNP");

        record1.addKeyValue("External", "LeadsExternal1");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Custom_field", "Custom val");

        record1.addKeyValue("Custom_field_2", 10);

        //Add the record to array
        recordsArray.push(record1);

        let record2: Record = new Record();

        /*
         * Call addFieldValue method that takes two arguments
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record2.addFieldValue(Field.Leads.CITY, "City");

        record2.addFieldValue(Field.Leads.LAST_NAME, "Last Name");

        record2.addFieldValue(Field.Leads.FIRST_NAME, "First Name");

        record2.addFieldValue(Field.Leads.COMPANY, "KKRNP");

        record2.addKeyValue("External", "TestExternal123456");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record2.addKeyValue("Custom_field", "Value");

        record2.addKeyValue("Custom_field_2", "value");

        //Add the record to array
        recordsArray.push(record2);

        //Set the array to data in BodyWrapper instance
        request.setData(recordsArray);

        let duplicateCheckFields: string[] = ["City", "Last_Name", "First_Name"];

        //Set the array containing duplicate check fiels to BodyWrapper instance
        request.setDuplicateCheckFields(duplicateCheckFields);

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        // await headerInstance.add(UpsertRecordsHeader.X_EXTERNAL, "Leads.External");

        //Call upsertRecords method that takes moduleAPIName, BodyWrapper instance and headerInstance as parameter.
        let response: APIResponse<ActionHandler> = await recordOperations.upsertRecords(moduleAPIName, request, headerInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionHandler = response.getObject();

            if (responseObject != null) {

                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
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

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

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
     * <h3> Get Deleted Records</h3>
     * This method is used to get the deleted records of a module and print the response.
     * @param moduleAPIName The API Name of the module to get the deleted records.
     */
    public static async getDeletedRecords(moduleAPIName: string) {

        //example
        //let moduleAPIName = "Deals";

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        /* Possible parameters for Get Deleted Records operation */

        //can be all/recycle/permanent
        await paramInstance.add(GetDeletedRecordsParam.TYPE, "permanent");

        await paramInstance.add(GetDeletedRecordsParam.PAGE, 1);

        await paramInstance.add(GetDeletedRecordsParam.PER_PAGE, 200);

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        /* Possible headers for Get Deleted Records operation */
        await headerInstance.add(GetDeletedRecordsHeader.IF_MODIFIED_SINCE, new Date('January 15, 2020 10:35:32'));

        //Call getDeletedRecords method that takes paramInstance, headerInstance and moduleAPIName as parameter
        let response: APIResponse<DeletedRecordsHandler> = await recordOperations.getDeletedRecords(moduleAPIName, paramInstance, headerInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get the object from response
            let responseObject: DeletedRecordsHandler = response.getObject();

            if (responseObject != null) {

                //Check if expected DeletedRecordsWrapper instance is received
                if (responseObject instanceof DeletedRecordsWrapper) {

                    //Get the array of obtained DeletedRecord instances
                    let deletedRecords: DeletedRecord[] = responseObject.getData();

                    deletedRecords.forEach(deletedRecord => {

                        //Get the deletedBy User instance of each DeletedRecord
                        let deletedBy: User = deletedRecord.getDeletedBy();

                        //Check if deletedBy is not null
                        if (deletedBy != null) {
                            //Get the name of the deletedBy User
                            console.log("DeletedRecord Deleted By User-Name: " + deletedBy.getName());

                            //Get the ID of the deletedBy User
                            console.log("DeletedRecord Deleted By User-ID: " + deletedBy.getId());
                        }

                        //Get the ID of each DeletedRecord
                        console.log("DeletedRecord ID: " + deletedRecord.getId());

                        //Get the DisplayName of each DeletedRecord
                        console.log("DeletedRecord DisplayName: " + deletedRecord.getDisplayName());

                        //Get the Type of each DeletedRecord
                        console.log("DeletedRecord Type: " + deletedRecord.getType());

                        //Get the createdBy User instance of each DeletedRecord
                        let createdBy: User = deletedRecord.getCreatedBy();

                        //Check if createdBy is not null
                        if (createdBy != null) {
                            //Get the name of the createdBy User
                            console.log("DeletedRecord Created By User-Name: " + createdBy.getName());

                            //Get the ID of the createdBy User
                            console.log("DeletedRecord Created By User-ID: " + createdBy.getId());
                        }

                        //Get the DeletedTime of each DeletedRecord
                        console.log("DeletedRecord DeletedTime: " + deletedRecord.getDeletedTime());
                    });

                    //Get the obtained Info object
                    let info: Info = responseObject.getInfo();

                    if (info != null) {

                        if (info.getPerPage() != null) {
                            //Get the PerPage of the Info
                            console.log("Record Info PerPage: " + info.getPerPage().toString());
                        }

                        if (info.getCount() != null) {
                            //Get the Count of the Info
                            console.log("Record Info Count: " + info.getCount().toString());
                        }

                        if (info.getPage() != null) {
                            //Get the Page of the Info
                            console.log("Record Info Page: " + info.getPage().toString());
                        }

                        if (info.getMoreRecords() != null) {
                            //Get the MoreRecords of the Info
                            console.log("Record Info MoreRecords: " + info.getMoreRecords().toString());
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

    /**
     * <h3> Search Records</h3>
     * This method is used to search records of a module and print the response.
     * @param moduleAPIName The API Name of the module to search records.
     */
    public static async searchRecords(moduleAPIName: string) {
        //example
        //let moduleAPIName = "Price_Books";

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        /* Possible parameters for Search Records operation */
        await paramInstance.add(SearchRecordsParam.EMAIL, "abc@zoho.com");

        await paramInstance.add(SearchRecordsParam.PHONE, "234567890");

        await paramInstance.add(SearchRecordsParam.WORD, "First Name Last Name");

        await paramInstance.add(SearchRecordsParam.CONVERTED, "both");

        await paramInstance.add(SearchRecordsParam.APPROVED, "both");

        await paramInstance.add(SearchRecordsParam.PAGE, 1);

        await paramInstance.add(SearchRecordsParam.PER_PAGE, 2);

        //Encoding must be done for parentheses or comma
        await paramInstance.add(SearchRecordsParam.CRITERIA, "((Last_Name:starts_with:Last Name) or (Company:starts_with:fasf\\(123\\) K))");

        // await paramInstance.add(SearchRecordsParam.CRITERIA, "(External:equals:LeadsExternal1)");

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        headerInstance.add(SearchRecordsHeader.X_EXTERNAL, "Leads.External");

        //Call searchRecords method that takes ParameterMap Instance and moduleAPIName as parameter
        let response: APIResponse<ResponseHandler> = await recordOperations.searchRecords(moduleAPIName, paramInstance, headerInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get the object from response
            let responseObject: ResponseHandler = response.getObject();

            if (responseObject != null) {
                if (responseObject instanceof ResponseWrapper) {

                    //Get the array of obtained Record instances
                    let records: Record[] = responseObject.getData();

                    for (let record of records) {
                        //Get the ID of each Record
                        console.log("Record ID: " + record.getId());

                        //Get the createdBy User instance of each Record
                        let createdBy: User = record.getCreatedBy();

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
                        let modifiedBy: User = record.getModifiedBy();

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
                        let tags: Tag[] = record.getTag();

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
                        console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                        console.log("Record KeyValues: ");

                        let keyValues: Map<string, any> = record.getKeyValues();

                        let keyArray: string[] = Array.from(keyValues.keys());

                        for (let keyName of keyArray) {
                            let value = keyValues.get(keyName);

                            if (Array.isArray(value)) {

                                if (value.length > 0) {
                                    if (value[0] instanceof FileDetails) {
                                        let fileDetails: FileDetails[] = value;

                                        fileDetails.forEach(fileDetail => {
                                            //Get the Extn of each FileDetails
                                            console.log("Record FileDetails Extn: " + fileDetail.getExtn());

                                            //Get the IsPreviewAvailable of each FileDetails
                                            console.log("Record FileDetails IsPreviewAvailable: " + fileDetail.getIsPreviewAvailable());

                                            //Get the DownloadUrl of each FileDetails
                                            console.log("Record FileDetails DownloadUrl: " + fileDetail.getDownloadUrl());

                                            //Get the DeleteUrl of each FileDetails
                                            console.log("Record FileDetails DeleteUrl: " + fileDetail.getDeleteUrl());

                                            //Get the EntityId of each FileDetails
                                            console.log("Record FileDetails EntityId: " + fileDetail.getEntityId());

                                            //Get the Mode of each FileDetails
                                            console.log("Record FileDetails Mode: " + fileDetail.getMode());

                                            //Get the OriginalSizeByte of each FileDetails
                                            console.log("Record FileDetails OriginalSizeByte: " + fileDetail.getOriginalSizeByte());

                                            //Get the PreviewUrl of each FileDetails
                                            console.log("Record FileDetails PreviewUrl: " + fileDetail.getPreviewUrl());

                                            //Get the FileName of each FileDetails
                                            console.log("Record FileDetails FileName: " + fileDetail.getFileName());

                                            //Get the FileId of each FileDetails
                                            console.log("Record FileDetails FileId: " + fileDetail.getFileId());

                                            //Get the AttachmentId of each FileDetails
                                            console.log("Record FileDetails AttachmentId: " + fileDetail.getAttachmentId());

                                            //Get the FileSize of each FileDetails
                                            console.log("Record FileDetails FileSize: " + fileDetail.getFileSize());

                                            //Get the CreatorId of each FileDetails
                                            console.log("Record FileDetails CreatorId: " + fileDetail.getCreatorId());

                                            //Get the LinkDocs of each FileDetails
                                            console.log("Record FileDetails LinkDocs: " + fileDetail.getLinkDocs());
                                        });
                                    }
                                    else if (value[0] instanceof Reminder) {
                                        let reminders: Reminder[] = value;

                                        reminders.forEach(reminder => {
                                            console.log("Reminder Period: " + reminder.getPeriod());

                                            console.log("Reminder Unit: " + reminder.getUnit());
                                        });
                                    }
                                    else if (value[0] instanceof Participants) {
                                        let participants: Participants[] = value;

                                        participants.forEach(participant => {
                                            console.log("Record Participants Name: " + participant.getName());

                                            console.log("Record Participants Invited: " + participant.getInvited().toString());

                                            console.log("Record Participants ID: " + participant.getId());

                                            console.log("Record Participants Type: " + participant.getType());

                                            console.log("Record Participants Participant: " + participant.getParticipant());

                                            console.log("Record Participants Status: " + participant.getStatus());
                                        });
                                    }
                                    else if (value[0] instanceof Choice) {
                                        let choiceArray: Choice<any>[] = value;

                                        console.log(keyName);

                                        console.log("Values");

                                        choiceArray.forEach(eachChoice => {
                                            console.log(eachChoice.getValue());
                                        });
                                    }
                                    else if (value[0] instanceof InventoryLineItems) {
                                        let productDetails: InventoryLineItems[] = value;

                                        productDetails.forEach(productDetail => {
                                            let lineItemProduct: LineItemProduct = productDetail.getProduct();

                                            if (lineItemProduct != null) {
                                                console.log("Record ProductDetails LineItemProduct ProductCode: " + lineItemProduct.getProductCode());

                                                console.log("Record ProductDetails LineItemProduct Currency: " + lineItemProduct.getCurrency());

                                                console.log("Record ProductDetails LineItemProduct Name: " + lineItemProduct.getName());

                                                console.log("Record ProductDetails LineItemProduct Id: " + lineItemProduct.getId());
                                            }

                                            console.log("Record ProductDetails Quantity: " + productDetail.getQuantity().toString());

                                            console.log("Record ProductDetails Discount: " + productDetail.getDiscount());

                                            console.log("Record ProductDetails TotalAfterDiscount: " + productDetail.getTotalAfterDiscount().toString());

                                            console.log("Record ProductDetails NetTotal: " + productDetail.getNetTotal().toString());

                                            if (productDetail.getBook() != null) {
                                                console.log("Record ProductDetails Book: " + productDetail.getBook().toString());
                                            }

                                            console.log("Record ProductDetails Tax: " + productDetail.getTax().toString());

                                            console.log("Record ProductDetails ListPrice: " + productDetail.getListPrice().toString());

                                            console.log("Record ProductDetails UnitPrice: " + productDetail.getUnitPrice());

                                            console.log("Record ProductDetails QuantityInStock: " + productDetail.getQuantityInStock().toString());

                                            console.log("Record ProductDetails Total: " + productDetail.getTotal().toString());

                                            console.log("Record ProductDetails ID: " + productDetail.getId());

                                            console.log("Record ProductDetails ProductDescription: " + productDetail.getProductDescription());

                                            let lineTaxes: LineTax[] = productDetail.getLineTax();

                                            lineTaxes.forEach(lineTax => {
                                                console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());

                                                console.log("Record ProductDetails LineTax Name: " + lineTax.getName());

                                                console.log("Record ProductDetails LineTax Id: " + lineTax.getId());

                                                console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                            });

                                        });
                                    }
                                    else if (value[0] instanceof Tag) {
                                        let tags: Tag[] = value;

                                        tags.forEach(tag => {
                                            //Get the Name of each Tag
                                            console.log("Record Tag Name: " + tag.getName());

                                            //Get the Id of each Tag
                                            console.log("Record Tag ID: " + tag.getId());
                                        });
                                    }
                                    else if (value[0] instanceof PricingDetails) {
                                        let pricingDetails: PricingDetails[] = value;

                                        pricingDetails.forEach(pricingDetail => {
                                            console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());

                                            console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());

                                            console.log("Record PricingDetails ID: " + pricingDetail.getId());

                                            console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                        });
                                    }
                                    else if (value[0] instanceof Record) {
                                        let recordArray: Record[] = value;

                                        recordArray.forEach(record => {
                                            Array.from(record.getKeyValues().keys()).forEach(key => {
                                                console.log(key + ": " + record.getKeyValues().get(key));
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof LineTax) {
                                        let lineTaxes: LineTax[] = value;

                                        lineTaxes.forEach(lineTax => {
                                            console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());

                                            console.log("Record ProductDetails LineTax Name: " + lineTax.getName());

                                            console.log("Record ProductDetails LineTax Id: " + lineTax.getId());

                                            console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                        });
                                    }
                                    else {
                                        console.log(keyName + ": " + value);
                                    }
                                }

                            }
                            else if (value instanceof Layout) {
                                console.log(keyName + " ID: " + value.getId());

                                console.log(keyName + " Name: " + value.getName());
                            }
                            else if (value instanceof User) {
                                console.log("Record " + keyName + " User-ID: " + value.getId());

                                console.log("Record " + keyName + " User-Name: " + value.getName());

                                console.log("Record " + keyName + " User-Email: " + value.getEmail());
                            }
                            else if (value instanceof Record) {
                                console.log(keyName + " Record ID: " + value.getId());

                                console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                            }
                            else if (value instanceof Choice) {
                                console.log(keyName + ": " + value.getValue());
                            }
                            else if (value instanceof RemindAt) {
                                console.log(keyName + ": " + value.getAlarm());
                            }
                            else if (value instanceof RecurringActivity) {
                                console.log(keyName);

                                console.log("RRULE: " + value.getRrule());
                            }
                            else if (value instanceof Consent) {

                                console.log("Record Consent ID: " + value.getId());

                                //Get the Owner User instance of the Consent
                                let owner: User = value.getOwner();

                                //Check if owner is not null
                                if (owner != null) {
                                    //Get the name of the owner User
                                    console.log("Record Consent Owner Name: " + owner.getName());

                                    //Get the ID of the owner User
                                    console.log("Record Consent Owner ID: " + owner.getId());

                                    //Get the Email of the owner User
                                    console.log("Record Consent Owner Email: " + owner.getEmail());
                                }

                                let consentCreatedBy: User = value.getCreatedBy();

                                //Check if createdBy is not null
                                if (consentCreatedBy != null) {
                                    //Get the name of the CreatedBy User
                                    console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());

                                    //Get the ID of the CreatedBy User
                                    console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());

                                    //Get the Email of the CreatedBy User
                                    console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                                }

                                let consentModifiedBy: User = value.getModifiedBy();

                                //Check if createdBy is not null
                                if (consentModifiedBy != null) {
                                    //Get the name of the ModifiedBy User
                                    console.log("Record Consent ModifiedBy Name: " + consentModifiedBy.getName());

                                    //Get the ID of the ModifiedBy User
                                    console.log("Record Consent ModifiedBy ID: " + consentModifiedBy.getId());

                                    //Get the Email of the ModifiedBy User
                                    console.log("Record Consent ModifiedBy Email: " + consentModifiedBy.getEmail());
                                }

                                console.log("Record Consent CreatedTime: " + value.getCreatedTime());

                                console.log("Record Consent ModifiedTime: " + value.getModifiedTime());

                                console.log("Record Consent ContactThroughEmail: " + value.getContactThroughEmail());

                                console.log("Record Consent ContactThroughSocial: " + value.getContactThroughSocial());

                                console.log("Record Consent ContactThroughSurvey: " + value.getContactThroughSurvey());

                                console.log("Record Consent ContactThroughPhone: " + value.getContactThroughPhone());

                                console.log("Record Consent MailSentTime: " + value.getMailSentTime().toString());

                                console.log("Record Consent ConsentDate: " + value.getConsentDate().toString());

                                console.log("Record Consent ConsentRemarks: " + value.getConsentRemarks());

                                console.log("Record Consent ConsentThrough: " + value.getConsentThrough());

                                console.log("Record Consent DataProcessingBasis: " + value.getDataProcessingBasis());

                                //To get custom values
                                console.log("Record Consent Lawful Reason: " + value.getKeyValue("Lawful_Reason"));
                            }
                            else if (value instanceof Map) {
                                console.log(keyName);

                                Array.from(value.keys()).forEach(key => {
                                    console.log(key + ": " + value.get(key));
                                });
                            }
                            else {
                                console.log(keyName + ": " + value);
                            }
                        }
                    }

                    //Get the obtained Info object
                    let info: Info = responseObject.getInfo();

                    if (info != null) {

                        if (info.getPerPage() != null) {
                            //Get the PerPage of the Info
                            console.log("Record Info PerPage: " + info.getPerPage().toString());
                        }

                        if (info.getCount() != null) {
                            //Get the Count of the Info
                            console.log("Record Info Count: " + info.getCount().toString());
                        }

                        if (info.getPage() != null) {
                            //Get the Page of the Info
                            console.log("Record Info Page: " + info.getPage().toString());
                        }

                        if (info.getMoreRecords() != null) {
                            //Get the MoreRecords of the Info
                            console.log("Record Info MoreRecords: " + info.getMoreRecords().toString());
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

    /**
     * <h3> Convert Lead</h3>
     * This method is used to Convert a Lead record and print the response.
     * @param leadId The ID of the Lead to be converted.
     */
    public static async convertLead(leadId: bigint) {

        //example
        //let leadId = 34096432034003n;

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of ConvertBodyWrapper Class that will contain the request body
        let request: ConvertBodyWrapper = new ConvertBodyWrapper();

        //Array to hold LeadConverter instances
        let data: LeadConverter[] = [];

        //Get instance of LeadConverter Class
        let record: LeadConverter = new LeadConverter();

        record.setOverwrite(true);

        record.setNotifyLeadOwner(true);

        record.setNotifyNewEntityOwner(true);

        record.setAccounts("3409643692007");

        record.setContacts("3409643836001");

        record.setAssignTo("3409643302031");

        let deals: Record = new Record();

        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        deals.addFieldValue(Field.Deals.DEAL_NAME, "deal_name");

        deals.addFieldValue(Field.Deals.DESCRIPTION, "deals description");

        deals.addFieldValue(Field.Deals.CLOSING_DATE, new Date(2021, 2, 13));

        deals.addFieldValue(Field.Deals.STAGE, new Choice("Closed Won"));

        deals.addFieldValue(Field.Deals.AMOUNT, 50.7);

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        deals.addKeyValue("Custom_field", "Value");

        deals.addKeyValue("Custom_field_2", "value");

        //Set the Deal record to deals in LeadConverter instance
        record.setDeals(deals);

        let carryOverTags: CarryOverTags = new CarryOverTags();

        carryOverTags.setAccounts(["Converted"]);

        carryOverTags.setContacts(["Converted"]);

        carryOverTags.setDeals(["Converted"]);

        record.setCarryOverTags(carryOverTags);

        //Add the instance to array
        data.push(record);

        //Set the array to data ConvertBodyWrapper instance
        request.setData(data);

        //Call convertLead method that takes ConvertBodyWrapper instance and leadId as parameter
        let response: APIResponse<ConvertActionHandler> = await recordOperations.convertLead(leadId, request);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ConvertActionHandler = response.getObject();

            if (responseObject != null) {

                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ConvertActionWrapper) {

                    //Get the array of ConvertActionResponses from object
                    let convertActionResponses: ConvertActionResponse[] = responseObject.getData();

                    convertActionResponses.forEach(convertActionResponse => {

                        //Check if the request is successful
                        if (convertActionResponse instanceof SuccessfulConvert) {
                            //Get the Accounts ID of  Record
                            console.log("LeadConvert Accounts ID: " + convertActionResponse.getAccounts());

                            //Get the Contacts ID of  Record
                            console.log("LeadConvert Contacts ID: " + convertActionResponse.getContacts());

                            //Get the Deals ID of  Record
                            console.log("LeadConvert Deals ID: " + convertActionResponse.getDeals());
                        }
                        //Check if the request returned an exception
                        else if (convertActionResponse instanceof APIException) {

                            //Get the Status
                            console.log("Status: " + convertActionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + convertActionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = convertActionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + convertActionResponse.getMessage().getValue());
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
     * This method is used to download a photo associated with a module.
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record
     * @param destinationFolder The absolute path of the destination folder to store the photo.
     */
    public static async getPhoto(moduleAPIName: string, recordId: bigint, destinationFolder: string) {

        //example
        // let moduleAPIName = "Contacts";
        // let recordId = 34096432034003n;
        // let destinationFolder = "/Users/user-name/Documents";

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Call getPhoto method that takes moduleAPIName and recordId as parameters
        let response: APIResponse<DownloadHandler> = await recordOperations.getPhoto(recordId, moduleAPIName);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: DownloadHandler = response.getObject();

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
            }
        }
    }

    /**
     * This method is used to attach a photo to a record. You must include the file in the request
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record
     * @param absoluteFilePath The absolute file path of the file to be uploaded
     */
    public static async uploadPhoto(moduleAPIName: string, recordId: bigint, absoluteFilePath: string) {

        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;
        //let absoluteFilePath = "/Users/user_name/Desktop/image.png";

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of FileBodyWrapper class that will contain the request file
        let request: FileBodyWrapper = new FileBodyWrapper();

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
        request.setFile(streamWrapper);

        //Call uploadPhoto method that takes FileBodyWrapper instance, moduleAPIName and recordId as parameter
        let response: APIResponse<FileHandler> = await recordOperations.uploadPhoto(recordId, moduleAPIName, request);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: FileHandler = response.getObject();

            if (responseObject != null) {

                //Check if the request is successful
                if (responseObject instanceof SuccessResponse) {
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
     * This method is used to delete a photo from a record in a module.
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record to delete photo
     */
    public static async deletePhoto(moduleAPIName: string, recordId: bigint) {

        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Call deletePhoto method that takes moduleAPIName and recordId as parameter
        let response: APIResponse<FileHandler> = await recordOperations.deletePhoto(recordId, moduleAPIName);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: FileHandler = response.getObject();

            if (responseObject != null) {

                //Check if the request is successful
                if (responseObject instanceof SuccessResponse) {
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
     * This method is used to update the values of specific fields for multiple records and print the response.
     * @param moduleAPIName The API Name of the module to mass update records.
     */
    public static async massUpdateRecords(moduleAPIName: string) {

        //example
        //let moduleAPIName = "Leads";

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of MassUpdateBodyWrapper Class that will contain the request body
        let request: MassUpdateBodyWrapper = new MassUpdateBodyWrapper();

        //Array to hold Record instances
        let recordsArray: Record[] = [];

        //Get instance of Record Class
        let record: Record = new Record();

        record.addFieldValue(Field.Leads.CITY, "Chennai");

        //Add the record instance to array
        recordsArray.push(record);

        //Set the array to data in MassUpdateBodyWrapper instance
        request.setData(recordsArray);

        //Set the cvid to MassUpdateBodyWrapper instance
        // request.setCvid("3409643087501");

        let ids: string[] = ["347706110780033"];

        //Set the array of IDs to MassUpdateBodyWrapper instance
        request.setIds(ids);

        //Set the value to over write
        request.setOverWrite(true);

        //Get instance of Territory Class
        let territory: Territory = new Territory();

        //Set ID to Territory
        territory.setId(BigInt("3409643505351"));

        territory.setIncludeChild(true);

        // request.setTerritory(territory);

        //Call massUpdateRecords method that takes MassUpdateBodyWrapper instance, ModuleAPIName as parameter.
        let response: APIResponse<MassUpdateActionHandler> = await recordOperations.massUpdateRecords(moduleAPIName, request);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: MassUpdateActionResponse = response.getObject();

            if (responseObject != null) {

                //Check if expected MassUpdateActionWrapper instance is received
                if (responseObject instanceof MassUpdateActionWrapper) {

                    //Get the array of MassUpdate ActionResponses
                    let massUpdateActionResponses: MassUpdateActionResponse[] = responseObject.getData();

                    massUpdateActionResponses.forEach(massUpdateActionResponse => {

                        //Check if the request is successful
                        if (massUpdateActionResponse instanceof MassUpdateSuccessResponse) {

                            //Get the Status
                            console.log("Status: " + massUpdateActionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + massUpdateActionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = massUpdateActionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + massUpdateActionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (massUpdateActionResponse instanceof APIException) {

                            //Get the Status
                            console.log("Status: " + massUpdateActionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + massUpdateActionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = massUpdateActionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + massUpdateActionResponse.getMessage().getValue());
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
     * This method is used to get the status of the mass update job scheduled previously and print the response.
     * @param moduleAPIName  The API Name of the module to obtain status of Mass Update.
     * @param jobId The ID of the job obtained from the response of Mass Update Records.
     */
    public static async getMassUpdateStatus(moduleAPIName: string, jobId: string) {

        //example
        //let moduleAPIName = "Leads";
        //let jobId = "34770615177002";

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        /* Possible parameters for Get MassUpdate Status operation */
        await paramInstance.add(GetMassUpdateStatusParam.JOB_ID, jobId);

        //Call getMassUpdateStatus method that takes ParameterMap instance and moduleAPIName as parameter
        let response: APIResponse<MassUpdateResponseHandler> = await recordOperations.getMassUpdateStatus(moduleAPIName, paramInstance);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: MassUpdateActionHandler = response.getObject();

            if (responseObject != null) {

                //Check if expected MassUpdateResponseWrapper instance is received
                if (responseObject instanceof MassUpdateResponseWrapper) {

                    //Get the array of MassUpdate ActionResponse data
                    let massUpdateResponses: MassUpdateResponse[] = responseObject.getData();

                    massUpdateResponses.forEach(massUpdateResponse => {

                        //Check if the request is successful
                        if (massUpdateResponse instanceof MassUpdate) {
                            //Get the Status of each MassUpdate
                            console.log("MassUpdate Status: " + massUpdateResponse.getStatus().getValue());

                            //Get the FailedCount of each MassUpdate
                            console.log("MassUpdate FailedCount: " + massUpdateResponse.getFailedCount().toString());

                            //Get the UpdatedCount of each MassUpdate
                            console.log("MassUpdate UpdatedCount: " + massUpdateResponse.getUpdatedCount().toString());

                            //Get the NotUpdatedCount of each MassUpdate
                            console.log("MassUpdate NotUpdatedCount: " + massUpdateResponse.getNotUpdatedCount());

                            //Get the TotalCount of each MassUpdate
                            console.log("MassUpdate TotalCount: " + massUpdateResponse.getTotalCount().toString());
                        }
                        //Check if the request returned an exception
                        else if (massUpdateResponse instanceof APIException) {

                            //Get the Status
                            console.log("Status: " + massUpdateResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + massUpdateResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = massUpdateResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + massUpdateResponse.getMessage().getValue());
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