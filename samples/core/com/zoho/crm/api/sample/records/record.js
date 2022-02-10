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
exports.Records = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const record_operations_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/record_operations");
const response_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/response_wrapper");
const mass_update_response_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update_response_wrapper");
const successful_convert_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/successful_convert");
const deleted_records_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/deleted_records_wrapper");
const action_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/action_wrapper");
const mass_update_action_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update_action_wrapper");
const convert_action_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/convert_action_wrapper");
const success_response_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/success_response");
const mass_update_success_response_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update_success_response");
const api_exception_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/api_exception");
const mass_update_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update");
const reminder_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/reminder");
const remind_at_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/remind_at");
const comment_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/comment");
const consent_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/consent");
const participants_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/participants");
const field_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/field");
const parameter_map_1 = require("@zohocrm/typescript-sdk-2.0/routes/parameter_map");
const header_map_1 = require("@zohocrm/typescript-sdk-2.0/routes/header_map");
const record_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/record");
const user_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/users/user");
const tag_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/tags/tag");
const file_details_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/file_details");
const choice_1 = require("@zohocrm/typescript-sdk-2.0/utils/util/choice");
const inventory_line_items_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/inventory_line_items");
const line_item_product_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/line_item_product");
const line_tax_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/line_tax");
const pricing_details_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/pricing_details");
const attachment_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/attachments/attachment");
const layout_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/layouts/layout");
const recurring_activity_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/recurring_activity");
const file_body_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/file_body_wrapper");
const stream_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/utils/util/stream_wrapper");
const body_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/body_wrapper");
const convert_body_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/convert_body_wrapper");
const lead_converter_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/lead_converter");
const mass_update_body_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/mass_update_body_wrapper");
const territory_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/territory");
const carry_over_tags_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/carry_over_tags");
class Records {
    /**
     * <h3> Get Record</h3>
     * This method is used to get a single record of a module with ID and print the response.
     * @param moduleAPIName The API Name of the record's module.
     * @param recordId The ID of the record to be obtained.
     * @param {String} destinationFolder The absolute path of the destination folder to store the attachment
     */
    static async getRecord(moduleAPIName, recordId, destinationFolder) {
        //example
        //let moduleAPIName = "Contacts";
        //let recordId = 34770616603276n;
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new parameter_map_1.ParameterMap();
        /* Possible parameters for Get Record operation*/
        await paramInstance.add(record_operations_1.GetRecordParam.APPROVED, "true");
        await paramInstance.add(record_operations_1.GetRecordParam.CONVERTED, "false");
        await paramInstance.add(record_operations_1.GetRecordParam.CVID, "3409643087501");
        let fieldsArray = ["id", "Company"];
        await paramInstance.add(record_operations_1.GetRecordParam.FIELDS, fieldsArray.toString());
        // /* Month is zero-indexed.
        // 0 -> January ..... 11 -> December
        // */
        let startDateTime = new Date(2020, 7, 10, 10, 10, 10);
        await paramInstance.add(record_operations_1.GetRecordParam.STARTDATETIME, startDateTime);
        let endDateTime = new Date(2020, 7, 10, 12, 12, 12);
        await paramInstance.add(record_operations_1.GetRecordParam.ENDDATETIME, endDateTime);
        await paramInstance.add(record_operations_1.GetRecordParam.TERRITORY_ID, "3409643505351");
        await paramInstance.add(record_operations_1.GetRecordParam.INCLUDE_CHILD, "true");
        await paramInstance.add(record_operations_1.GetRecordParam.UID, "3409643500741");
        //Get instance of HeaderMap Class
        let headerInstance = new header_map_1.HeaderMap();
        /* Possible headers for Get Record operation*/
        await headerInstance.add(record_operations_1.GetRecordHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T01:01:01+05:30"));
        // await headerInstance.add(GetRecordHeader.X_EXTERNAL, "Leads.External");
        //Call getRecord method that takes paramInstance, headerInstance, moduleAPIName and recordID as parameter
        let response = await recordOperations.getRecord(recordId, moduleAPIName, paramInstance, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if ResponseWrapper instance is received
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
                            if (Array.isArray(value)) {
                                if (value.length > 0) {
                                    if (value[0] instanceof file_details_1.FileDetails) {
                                        let fileDetails = value;
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
                                    else if (value[0] instanceof reminder_1.Reminder) {
                                        let reminders = value;
                                        reminders.forEach(reminder => {
                                            console.log("Reminder Period: " + reminder.getPeriod());
                                            console.log("Reminder Unit: " + reminder.getUnit());
                                        });
                                    }
                                    else if (value[0] instanceof participants_1.Participants) {
                                        let participants = value;
                                        participants.forEach(participant => {
                                            console.log("Record Participants Name: " + participant.getName());
                                            console.log("Record Participants Invited: " + participant.getInvited().toString());
                                            console.log("Record Participants ID: " + participant.getId());
                                            console.log("Record Participants Type: " + participant.getType());
                                            console.log("Record Participants Participant: " + participant.getParticipant());
                                            console.log("Record Participants Status: " + participant.getStatus());
                                        });
                                    }
                                    else if (value[0] instanceof choice_1.Choice) {
                                        let choiceArray = value;
                                        console.log(keyName);
                                        console.log("Values");
                                        choiceArray.forEach(eachChoice => {
                                            console.log(eachChoice.getValue());
                                        });
                                    }
                                    else if (value[0] instanceof inventory_line_items_1.InventoryLineItems) {
                                        let productDetails = value;
                                        productDetails.forEach(productDetail => {
                                            let lineItemProduct = productDetail.getProduct();
                                            ;
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
                                            let lineTaxes = productDetail.getLineTax();
                                            lineTaxes.forEach(lineTax => {
                                                console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());
                                                console.log("Record ProductDetails LineTax Name: " + lineTax.getName());
                                                console.log("Record ProductDetails LineTax Id: " + lineTax.getId());
                                                console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof tag_1.Tag) {
                                        let tags = value;
                                        tags.forEach(tag => {
                                            //Get the Name of each Tag
                                            console.log("Record Tag Name: " + tag.getName());
                                            //Get the Id of each Tag
                                            console.log("Record Tag ID: " + tag.getId());
                                        });
                                    }
                                    else if (value[0] instanceof pricing_details_1.PricingDetails) {
                                        let pricingDetails = value;
                                        pricingDetails.forEach(pricingDetail => {
                                            console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());
                                            console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());
                                            console.log("Record PricingDetails ID: " + pricingDetail.getId());
                                            console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                        });
                                    }
                                    else if (value[0] instanceof record_1.Record) {
                                        let recordArray = value;
                                        recordArray.forEach(record => {
                                            Array.from(record.getKeyValues().keys()).forEach(key => {
                                                console.log(key + ": " + record.getKeyValues().get(key));
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof line_tax_1.LineTax) {
                                        let lineTaxes = value;
                                        lineTaxes.forEach(lineTax => {
                                            console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());
                                            console.log("Record ProductDetails LineTax Name: " + lineTax.getName());
                                            console.log("Record ProductDetails LineTax Id: " + lineTax.getId());
                                            console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                        });
                                    }
                                    else if (value[0] instanceof comment_1.Comment) {
                                        let comments = value;
                                        comments.forEach(comment => {
                                            console.log("Record Comment CommentedBy: " + comment.getCommentedBy());
                                            console.log("Record Comment CommentedTime: " + comment.getCommentedTime().toString());
                                            console.log("Record Comment CommentContent: " + comment.getCommentContent());
                                            console.log("Record Comment Id: " + comment.getId());
                                        });
                                    }
                                    else if (value[0] instanceof attachment_1.Attachment) {
                                        let attachments = value;
                                        attachments.forEach(attachment => {
                                            //Get the ID of each attachment
                                            console.log("Record Attachment ID: " + attachment.getId());
                                            //Get the owner User instance of each attachment
                                            let owner = attachment.getOwner();
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
                                            let parentId = attachment.getParentId();
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
                                            let modifiedBy = attachment.getModifiedBy();
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
                                            let createdBy = attachment.getCreatedBy();
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
                            else if (value instanceof user_1.User) {
                                console.log("Record " + keyName + " User-ID: " + value.getId());
                                console.log("Record " + keyName + " User-Name: " + value.getName());
                                console.log("Record " + keyName + " User-Email: " + value.getEmail());
                            }
                            else if (value instanceof layout_1.Layout) {
                                console.log(keyName + " ID: " + value.getId());
                                console.log(keyName + " Name: " + value.getName());
                            }
                            else if (value instanceof record_1.Record) {
                                console.log(keyName + " Record ID: " + value.getId());
                                console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                            }
                            else if (value instanceof choice_1.Choice) {
                                console.log(keyName + ": " + value.getValue());
                            }
                            else if (value instanceof remind_at_1.RemindAt) {
                                console.log(keyName + ": " + value.getAlarm());
                            }
                            else if (value instanceof recurring_activity_1.RecurringActivity) {
                                console.log(keyName);
                                console.log("RRULE: " + value.getRrule());
                            }
                            else if (value instanceof consent_1.Consent) {
                                console.log("Record Consent ID: " + value.getId());
                                //Get the Owner User instance of each attachment
                                let owner = value.getOwner();
                                //Check if owner is not null
                                if (owner != null) {
                                    //Get the name of the owner User
                                    console.log("Record Consent Owner Name: " + owner.getName());
                                    //Get the ID of the owner User
                                    console.log("Record Consent Owner ID: " + owner.getId());
                                    //Get the Email of the owner User
                                    console.log("Record Consent Owner Email: " + owner.getEmail());
                                }
                                let consentCreatedBy = value.getCreatedBy();
                                //Check if createdBy is not null
                                if (consentCreatedBy != null) {
                                    //Get the name of the CreatedBy User
                                    console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());
                                    //Get the ID of the CreatedBy User
                                    console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());
                                    //Get the Email of the CreatedBy User
                                    console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                                }
                                let consentModifiedBy = value.getModifiedBy();
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
                else if (responseObject instanceof file_body_wrapper_1.FileBodyWrapper) {
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
    /**
     * <h3> Update Record</h3>
     * This method is used to update a single record of a module with ID and print the response.
     * @param moduleAPIName The API Name of the record's module.
     * @param recordId The ID of the record to be updated
     */
    static async updateRecord(moduleAPIName, recordId) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of BodyWrapper Class that will contain the request body
        let request = new body_wrapper_1.BodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        //Get instance of Record Class
        let record1 = new record_1.Record();
        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record1.addFieldValue(field_1.Field.Leads.CITY, "City");
        record1.addFieldValue(field_1.Field.Leads.LAST_NAME, "Last Name");
        record1.addFieldValue(field_1.Field.Leads.FIRST_NAME, "First Name");
        record1.addFieldValue(field_1.Field.Leads.LAST_NAME, "Last Name");
        record1.addFieldValue(field_1.Field.Leads.COMPANY, "KKRNP");
        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Custom_field", "Value");
        record1.addKeyValue("Custom_field_2", "value");
        record1.addKeyValue("Date_1", new Date(2017, 1, 13));
        let fileDetails = [];
        let fileDetail = new file_details_1.FileDetails();
        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32537b7c2400dadca8ff55f620c65357da");
        fileDetails.push(fileDetail);
        fileDetail = new file_details_1.FileDetails();
        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32e0063e7321b5b4ca878a934519e6cdb2");
        fileDetails.push(fileDetail);
        fileDetail = new file_details_1.FileDetails();
        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c323daf4780bfe0058133556f155795981f");
        fileDetails.push(fileDetail);
        record1.addKeyValue("File_Upload_1", fileDetails);
        //Used when GDPR is enabled
        let dataConsent = new consent_1.Consent();
        dataConsent.setConsentRemarks("Approved.");
        dataConsent.setConsentThrough("Email");
        dataConsent.setContactThroughEmail(true);
        dataConsent.setContactThroughSocial(false);
        record1.addKeyValue("Data_Processing_Basis_Details", dataConsent);
        //Add Record instance to the array
        recordsArray.push(record1);
        //Set the array to Records in BodyWrapper instance
        request.setData(recordsArray);
        let trigger = [];
        trigger.push("approval");
        trigger.push("workflow");
        trigger.push("blueprint");
        request.setTrigger(trigger);
        //Get instance of HeaderMap Class
        let headerInstance = new header_map_1.HeaderMap();
        // await headerInstance.add(UpdateRecordHeader.X_EXTERNAL, "Leads.External");
        //Call updateRecord method that takes BodyWrapper instance, ModuleAPIName and recordId as parameter.
        let response = await recordOperations.updateRecord(recordId, moduleAPIName, request, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
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
     * <h3> Delete Record</h3>
     * This method is used to delete a single record of a module with ID and print the response.
     * @param moduleAPIName The API Name of the record's module.
     * @param recordId The ID of the record to be deleted
     */
    static async deleteRecord(moduleAPIName, recordId) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new parameter_map_1.ParameterMap();
        //Possible parameters for Delete Record operation
        await paramInstance.add(record_operations_1.DeleteRecordParam.WF_TRIGGER, true);
        //Get instance of HeaderMap Class
        let headerInstance = new header_map_1.HeaderMap();
        // await headerInstance.add(DeleteRecordHeader.X_EXTERNAL, "Leads.External");
        //Call deleteRecord method that takes paramInstance, ModuleAPIName and recordId as parameter.
        let response = await recordOperations.deleteRecord(recordId, moduleAPIName, paramInstance, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
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
    * <h3> Get Record Using External Id</h3>
    * This method is used to get a single record of a module with ID and print the response.
    * @param moduleAPIName The API Name of the record's module.
    * @param {String} externalFieldValue
    * @param {String} destinationFolder The absolute path of the destination folder to store the attachment
    */
    static async getRecordUsingExternalId(moduleAPIName, externalFieldValue, destinationFolder) {
        //example
        //let moduleAPIName = "Contacts";
        //let recordId = 34770616603276n;
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new parameter_map_1.ParameterMap();
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
        let headerInstance = new header_map_1.HeaderMap();
        /* Possible headers for Get Record operation*/
        // await headerInstance.add(GetRecordHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T01:01:01+05:30"));
        await headerInstance.add(record_operations_1.GetRecordHeader.X_EXTERNAL, "Leads.External");
        //Call getRecordUsingExternalId method that takes externalFieldValue, moduleAPIName, paramInstance, headerInstance and moduleAPIName as parameter
        let response = await recordOperations.getRecordUsingExternalId(externalFieldValue, moduleAPIName, paramInstance, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if ResponseWrapper instance is received
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
                            if (Array.isArray(value)) {
                                if (value.length > 0) {
                                    if (value[0] instanceof file_details_1.FileDetails) {
                                        let fileDetails = value;
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
                                    else if (value[0] instanceof reminder_1.Reminder) {
                                        let reminders = value;
                                        reminders.forEach(reminder => {
                                            console.log("Reminder Period: " + reminder.getPeriod());
                                            console.log("Reminder Unit: " + reminder.getUnit());
                                        });
                                    }
                                    else if (value[0] instanceof participants_1.Participants) {
                                        let participants = value;
                                        participants.forEach(participant => {
                                            console.log("Record Participants Name: " + participant.getName());
                                            console.log("Record Participants Invited: " + participant.getInvited().toString());
                                            console.log("Record Participants ID: " + participant.getId());
                                            console.log("Record Participants Type: " + participant.getType());
                                            console.log("Record Participants Participant: " + participant.getParticipant());
                                            console.log("Record Participants Status: " + participant.getStatus());
                                        });
                                    }
                                    else if (value[0] instanceof choice_1.Choice) {
                                        let choiceArray = value;
                                        console.log(keyName);
                                        console.log("Values");
                                        choiceArray.forEach(eachChoice => {
                                            console.log(eachChoice.getValue());
                                        });
                                    }
                                    else if (value[0] instanceof inventory_line_items_1.InventoryLineItems) {
                                        let productDetails = value;
                                        productDetails.forEach(productDetail => {
                                            let lineItemProduct = productDetail.getProduct();
                                            ;
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
                                            let lineTaxes = productDetail.getLineTax();
                                            lineTaxes.forEach(lineTax => {
                                                console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());
                                                console.log("Record ProductDetails LineTax Name: " + lineTax.getName());
                                                console.log("Record ProductDetails LineTax Id: " + lineTax.getId());
                                                console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof tag_1.Tag) {
                                        let tags = value;
                                        tags.forEach(tag => {
                                            //Get the Name of each Tag
                                            console.log("Record Tag Name: " + tag.getName());
                                            //Get the Id of each Tag
                                            console.log("Record Tag ID: " + tag.getId());
                                        });
                                    }
                                    else if (value[0] instanceof pricing_details_1.PricingDetails) {
                                        let pricingDetails = value;
                                        pricingDetails.forEach(pricingDetail => {
                                            console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());
                                            console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());
                                            console.log("Record PricingDetails ID: " + pricingDetail.getId());
                                            console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                        });
                                    }
                                    else if (value[0] instanceof record_1.Record) {
                                        let recordArray = value;
                                        recordArray.forEach(record => {
                                            Array.from(record.getKeyValues().keys()).forEach(key => {
                                                console.log(key + ": " + record.getKeyValues().get(key));
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof line_tax_1.LineTax) {
                                        let lineTaxes = value;
                                        lineTaxes.forEach(lineTax => {
                                            console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());
                                            console.log("Record ProductDetails LineTax Name: " + lineTax.getName());
                                            console.log("Record ProductDetails LineTax Id: " + lineTax.getId());
                                            console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                        });
                                    }
                                    else if (value[0] instanceof comment_1.Comment) {
                                        let comments = value;
                                        comments.forEach(comment => {
                                            console.log("Record Comment CommentedBy: " + comment.getCommentedBy());
                                            console.log("Record Comment CommentedTime: " + comment.getCommentedTime().toString());
                                            console.log("Record Comment CommentContent: " + comment.getCommentContent());
                                            console.log("Record Comment Id: " + comment.getId());
                                        });
                                    }
                                    else if (value[0] instanceof attachment_1.Attachment) {
                                        let attachments = value;
                                        attachments.forEach(attachment => {
                                            //Get the ID of each attachment
                                            console.log("Record Attachment ID: " + attachment.getId());
                                            //Get the owner User instance of each attachment
                                            let owner = attachment.getOwner();
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
                                            let parentId = attachment.getParentId();
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
                                            let modifiedBy = attachment.getModifiedBy();
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
                                            let createdBy = attachment.getCreatedBy();
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
                            else if (value instanceof user_1.User) {
                                console.log("Record " + keyName + " User-ID: " + value.getId());
                                console.log("Record " + keyName + " User-Name: " + value.getName());
                                console.log("Record " + keyName + " User-Email: " + value.getEmail());
                            }
                            else if (value instanceof layout_1.Layout) {
                                console.log(keyName + " ID: " + value.getId());
                                console.log(keyName + " Name: " + value.getName());
                            }
                            else if (value instanceof record_1.Record) {
                                console.log(keyName + " Record ID: " + value.getId());
                                console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                            }
                            else if (value instanceof choice_1.Choice) {
                                console.log(keyName + ": " + value.getValue());
                            }
                            else if (value instanceof remind_at_1.RemindAt) {
                                console.log(keyName + ": " + value.getAlarm());
                            }
                            else if (value instanceof recurring_activity_1.RecurringActivity) {
                                console.log(keyName);
                                console.log("RRULE: " + value.getRrule());
                            }
                            else if (value instanceof consent_1.Consent) {
                                console.log("Record Consent ID: " + value.getId());
                                //Get the Owner User instance of each attachment
                                let owner = value.getOwner();
                                //Check if owner is not null
                                if (owner != null) {
                                    //Get the name of the owner User
                                    console.log("Record Consent Owner Name: " + owner.getName());
                                    //Get the ID of the owner User
                                    console.log("Record Consent Owner ID: " + owner.getId());
                                    //Get the Email of the owner User
                                    console.log("Record Consent Owner Email: " + owner.getEmail());
                                }
                                let consentCreatedBy = value.getCreatedBy();
                                //Check if createdBy is not null
                                if (consentCreatedBy != null) {
                                    //Get the name of the CreatedBy User
                                    console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());
                                    //Get the ID of the CreatedBy User
                                    console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());
                                    //Get the Email of the CreatedBy User
                                    console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                                }
                                let consentModifiedBy = value.getModifiedBy();
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
                else if (responseObject instanceof file_body_wrapper_1.FileBodyWrapper) {
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
    /**
     * <h3>Update Record Using External Id</h3>
     * This method is used to update a single record of a module with ID and print the response.
     * @param {String} moduleAPIName The API Name of the record's module.
     * @param {String} externalFieldValue
     */
    static async updateRecordUsingExternalId(moduleAPIName, externalFieldValue) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of BodyWrapper Class that will contain the request body
        let request = new body_wrapper_1.BodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        //Get instance of Record Class
        let record1 = new record_1.Record();
        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record1.addFieldValue(field_1.Field.Leads.CITY, "City");
        record1.addFieldValue(field_1.Field.Leads.LAST_NAME, "Last Name");
        record1.addFieldValue(field_1.Field.Leads.FIRST_NAME, "First Name");
        record1.addFieldValue(field_1.Field.Leads.LAST_NAME, "Last Name");
        record1.addFieldValue(field_1.Field.Leads.COMPANY, "KKRNP");
        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Custom_field", "Value");
        record1.addKeyValue("Custom_field_2", "value");
        record1.addKeyValue("Date_1", new Date(2017, 1, 13));
        let fileDetails = [];
        let fileDetail = new file_details_1.FileDetails();
        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32537b7c2400dadca8ff55f620c65357da");
        fileDetails.push(fileDetail);
        fileDetail = new file_details_1.FileDetails();
        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32e0063e7321b5b4ca878a934519e6cdb2");
        fileDetails.push(fileDetail);
        fileDetail = new file_details_1.FileDetails();
        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c323daf4780bfe0058133556f155795981f");
        fileDetails.push(fileDetail);
        record1.addKeyValue("File_Upload_1", fileDetails);
        //Used when GDPR is enabled
        let dataConsent = new consent_1.Consent();
        dataConsent.setConsentRemarks("Approved.");
        dataConsent.setConsentThrough("Email");
        dataConsent.setContactThroughEmail(true);
        dataConsent.setContactThroughSocial(false);
        record1.addKeyValue("Data_Processing_Basis_Details", dataConsent);
        //Add Record instance to the array
        recordsArray.push(record1);
        //Set the array to Records in BodyWrapper instance
        request.setData(recordsArray);
        let trigger = [];
        trigger.push("approval");
        trigger.push("workflow");
        trigger.push("blueprint");
        request.setTrigger(trigger);
        //Get instance of HeaderMap Class
        let headerInstance = new header_map_1.HeaderMap();
        await headerInstance.add(record_operations_1.UpdateRecordHeader.X_EXTERNAL, "Leads.External");
        //Call updateRecordUsingExternalId method that takes externalFieldValue, moduleAPIName, BodyWrapper instance and headerInstance as parameter.
        let response = await recordOperations.updateRecordUsingExternalId(externalFieldValue, moduleAPIName, request, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
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
     * <h3> Delete Record</h3>
     * This method is used to delete a single record of a module with ID and print the response.
     * @param {String} moduleAPIName The API Name of the record's module.
     * @param {String} externalFieldValue
     */
    static async deleteRecordUsingExternalId(moduleAPIName, externalFieldValue) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new parameter_map_1.ParameterMap();
        //Possible parameters for Delete Record operation
        await paramInstance.add(record_operations_1.DeleteRecordParam.WF_TRIGGER, true);
        //Get instance of HeaderMap Class
        let headerInstance = new header_map_1.HeaderMap();
        await headerInstance.add(record_operations_1.DeleteRecordHeader.X_EXTERNAL, "Leads.External");
        //Call deleteRecordUsingExternalId method that takes externalFieldValue, moduleAPIName, paramInstance and headerInstance as parameter.
        let response = await recordOperations.deleteRecordUsingExternalId(externalFieldValue, moduleAPIName, paramInstance, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
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
     * <h3> Get Records</h3>
     * This method is used to get all the records of a module and print the response.
     * @param moduleAPIName The API Name of the module to fetch records
     */
    static async getRecords(moduleAPIName) {
        //example
        //let moduleAPIName = "Leads";
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new parameter_map_1.ParameterMap();
        /* Possible parameters for Get Records operation*/
        await paramInstance.add(record_operations_1.GetRecordsParam.APPROVED, "both");
        await paramInstance.add(record_operations_1.GetRecordsParam.CONVERTED, "both");
        await paramInstance.add(record_operations_1.GetRecordsParam.CVID, "3477061087501");
        let ids = ["213456782", "LeadsExternal"];
        for (let id of ids) {
            await paramInstance.add(record_operations_1.GetRecordsParam.IDS, id);
        }
        await paramInstance.add(record_operations_1.GetRecordsParam.UID, "34770615181008");
        let fieldNames = ["Company", "Email"];
        await paramInstance.add(record_operations_1.GetRecordsParam.FIELDS, fieldNames.toString());
        await paramInstance.add(record_operations_1.GetRecordsParam.SORT_BY, "Email");
        await paramInstance.add(record_operations_1.GetRecordsParam.SORT_ORDER, "desc");
        await paramInstance.add(record_operations_1.GetRecordsParam.PAGE, 1);
        await paramInstance.add(record_operations_1.GetRecordsParam.PER_PAGE, 200);
        let startDateTime = new Date(2020, 1, 10, 10, 10, 10);
        await paramInstance.add(record_operations_1.GetRecordsParam.STARTDATETIME, startDateTime);
        let endDateTime = new Date(2020, 7, 10, 12, 12, 12);
        await paramInstance.add(record_operations_1.GetRecordsParam.ENDDATETIME, endDateTime);
        await paramInstance.add(record_operations_1.GetRecordsParam.TERRITORY_ID, "3409643505351");
        await paramInstance.add(record_operations_1.GetRecordsParam.INCLUDE_CHILD, "true");
        //Get instance of HeaderMap Class
        let headerInstance = new header_map_1.HeaderMap();
        /* Possible headers for Get Record operation*/
        await headerInstance.add(record_operations_1.GetRecordsHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T00:00:00+05:30"));
        // await headerInstance.add(GetRecordsHeader.X_EXTERNAL, "Leads.External");
        //Call getRecords method that takes moduleAPIName, paramInstance and headerInstance as parameters
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
                            if (Array.isArray(value)) {
                                if (value.length > 0) {
                                    if (value[0] instanceof file_details_1.FileDetails) {
                                        let fileDetails = value;
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
                                    else if (value[0] instanceof reminder_1.Reminder) {
                                        let reminders = value;
                                        reminders.forEach(reminder => {
                                            console.log("Reminder Period: " + reminder.getPeriod());
                                            console.log("Reminder Unit: " + reminder.getUnit());
                                        });
                                    }
                                    else if (value[0] instanceof choice_1.Choice) {
                                        let choiceArray = value;
                                        console.log(keyName);
                                        console.log("Values");
                                        choiceArray.forEach(eachChoice => {
                                            console.log(eachChoice.getValue());
                                        });
                                    }
                                    else if (value[0] instanceof participants_1.Participants) {
                                        let participants = value;
                                        participants.forEach(participant => {
                                            console.log("Record Participants Name: " + participant.getName());
                                            console.log("Record Participants Invited: " + participant.getInvited().toString());
                                            console.log("Record Participants ID: " + participant.getId());
                                            console.log("Record Participants Type: " + participant.getType());
                                            console.log("Record Participants Participant: " + participant.getParticipant());
                                            console.log("Record Participants Status: " + participant.getStatus());
                                        });
                                    }
                                    else if (value[0] instanceof inventory_line_items_1.InventoryLineItems) {
                                        let productDetails = value;
                                        productDetails.forEach(productDetail => {
                                            let lineItemProduct = productDetail.getProduct();
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
                                            let lineTaxes = productDetail.getLineTax();
                                            lineTaxes.forEach(lineTax => {
                                                console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());
                                                console.log("Record ProductDetails LineTax Name: " + lineTax.getName());
                                                console.log("Record ProductDetails LineTax Id: " + lineTax.getId());
                                                console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof tag_1.Tag) {
                                        let tags = value;
                                        tags.forEach(tag => {
                                            //Get the Name of each Tag
                                            console.log("Record Tag Name: " + tag.getName());
                                            //Get the Id of each Tag
                                            console.log("Record Tag ID: " + tag.getId());
                                        });
                                    }
                                    else if (value[0] instanceof pricing_details_1.PricingDetails) {
                                        let pricingDetails = value;
                                        pricingDetails.forEach(pricingDetail => {
                                            console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());
                                            console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());
                                            console.log("Record PricingDetails ID: " + pricingDetail.getId());
                                            console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                        });
                                    }
                                    else if (value[0] instanceof record_1.Record) {
                                        let recordArray = value;
                                        recordArray.forEach(record => {
                                            Array.from(record.getKeyValues().keys()).forEach(key => {
                                                console.log(key + ": " + record.getKeyValues().get(key));
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof line_tax_1.LineTax) {
                                        let lineTaxes = value;
                                        lineTaxes.forEach(lineTax => {
                                            console.log("Record LineTax Percentage: " + lineTax.getPercentage().toString());
                                            console.log("Record LineTax Name: " + lineTax.getName());
                                            console.log("Record LineTax Id: " + lineTax.getId());
                                            console.log("Record LineTax Value: " + lineTax.getValue().toString());
                                        });
                                    }
                                    else if (value[0] instanceof comment_1.Comment) {
                                        let comments = value;
                                        comments.forEach(comment => {
                                            console.log("Record Comment CommentedBy: " + comment.getCommentedBy());
                                            console.log("Record Comment CommentedTime: " + comment.getCommentedTime().toString());
                                            console.log("Record Comment CommentContent: " + comment.getCommentContent());
                                            console.log("Record Comment Id: " + comment.getId());
                                        });
                                    }
                                    else if (value[0] instanceof attachment_1.Attachment) {
                                        let attachments = value;
                                        attachments.forEach(attachment => {
                                            //Get the ID of each attachment
                                            console.log("Record Attachment ID: " + attachment.getId());
                                            //Get the owner User instance of each attachment
                                            let owner = attachment.getOwner();
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
                                            let parentId = attachment.getParentId();
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
                                            let modifiedBy = attachment.getModifiedBy();
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
                                            let createdBy = attachment.getCreatedBy();
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
                            else if (value instanceof user_1.User) {
                                console.log("Record " + keyName + " User-ID: " + value.getId());
                                console.log("Record " + keyName + " User-Name: " + value.getName());
                                console.log("Record " + keyName + " User-Email: " + value.getEmail());
                            }
                            else if (value instanceof layout_1.Layout) {
                                console.log(keyName + " ID: " + value.getId());
                                console.log(keyName + " Name: " + value.getName());
                            }
                            else if (value instanceof record_1.Record) {
                                console.log(keyName + " Record ID: " + value.getId());
                                console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                            }
                            else if (value instanceof choice_1.Choice) {
                                console.log(keyName + ": " + value.getValue());
                            }
                            else if (value instanceof remind_at_1.RemindAt) {
                                console.log(keyName + ": " + value.getAlarm());
                            }
                            else if (value instanceof recurring_activity_1.RecurringActivity) {
                                console.log(keyName);
                                console.log("RRULE: " + value.getRrule());
                            }
                            else if (value instanceof consent_1.Consent) {
                                console.log("Record Consent ID: " + value.getId());
                                //Get the Owner User instance of each attachment
                                let owner = value.getOwner();
                                //Check if owner is not null
                                if (owner != null) {
                                    //Get the name of the owner User
                                    console.log("Record Consent Owner Name: " + owner.getName());
                                    //Get the ID of the owner User
                                    console.log("Record Consent Owner ID: " + owner.getId());
                                    //Get the Email of the owner User
                                    console.log("Record Consent Owner Email: " + owner.getEmail());
                                }
                                let consentCreatedBy = value.getCreatedBy();
                                //Check if createdBy is not null
                                if (consentCreatedBy != null) {
                                    //Get the name of the CreatedBy User
                                    console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());
                                    //Get the ID of the CreatedBy User
                                    console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());
                                    //Get the Email of the CreatedBy User
                                    console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                                }
                                let consentModifiedBy = value.getModifiedBy();
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
                    let info = responseObject.getInfo();
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
     * <h3> Create Records</h3>
     * This method is used to create records of a module and print the response.
     * @param moduleAPIName The API Name of the module to create records.
     */
    static async createRecords(moduleAPIName) {
        //example
        //let moduleAPIName = "Leads";
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of BodyWrapper Class that will contain the request body
        let request = new body_wrapper_1.BodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        //Get instance of Record Class
        let record = new record_1.Record();
        /* Value to Record's fields can be provided in any of the following ways */
        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record.addFieldValue(field_1.Field.Leads.LAST_NAME, "Node JS SDK");
        record.addFieldValue(field_1.Field.Leads.FIRST_NAME, "Node");
        record.addFieldValue(field_1.Field.Leads.COMPANY, "ZCRM");
        record.addFieldValue(field_1.Field.Leads.CITY, "City");
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
        let fileDetails = [];
        let fileDetail = new file_details_1.FileDetails();
        fileDetail.setFileId("479f0f5eebf0fb982f99e3832b35d23e29f67c2868ee4c789f22579895383c8");
        fileDetails.push(fileDetail);
        fileDetail = new file_details_1.FileDetails();
        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32e0063e7321b5b4ca878a934519e6cdb2");
        fileDetails.push(fileDetail);
        fileDetail = new file_details_1.FileDetails();
        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c323daf4780bfe0058133556f155795981f");
        fileDetails.push(fileDetail);
        record.addKeyValue("File_Upload", fileDetails);
        //Used when GDPR is enabled
        let dataConsent = new consent_1.Consent();
        dataConsent.setConsentRemarks("Approved.");
        dataConsent.setConsentThrough("Email");
        dataConsent.setContactThroughEmail(true);
        dataConsent.setContactThroughSocial(false);
        record.addKeyValue("Data_Processing_Basis_Details", dataConsent);
        /** Following methods are being used only by Inventory modules */
        let dealName = new record_1.Record();
        dealName.addFieldValue(field_1.Field.Deals.ID, BigInt("347706110830013"));
        record.addFieldValue(field_1.Field.Sales_Orders.DEAL_NAME, dealName);
        let contactName = new record_1.Record();
        contactName.addFieldValue(field_1.Field.Contacts.ID, BigInt("347706110721012"));
        contactName.addFieldValue(field_1.Field.Sales_Orders.CONTACT_NAME, contactName);
        let accountName = new record_1.Record();
        accountName.addKeyValue("name", "Account_Name");
        record.addFieldValue(field_1.Field.Sales_Orders.ACCOUNT_NAME, accountName);
        record.addKeyValue("Discount", 10.5);
        let inventoryLineItemArray = [];
        let inventoryLineItem = new inventory_line_items_1.InventoryLineItems();
        let lineItemProduct = new line_item_product_1.LineItemProduct();
        // lineItemProduct.setId(BigInt("34770618864005"));
        lineItemProduct.addKeyValue("Products_External", "ProductExternal");
        inventoryLineItem.setProduct(lineItemProduct);
        inventoryLineItem.setQuantity(3);
        inventoryLineItem.setProductDescription("productDescription");
        inventoryLineItem.setListPrice(10.0);
        inventoryLineItem.setDiscount("5.90");
        let productLineTaxes = [];
        let productLineTax = new line_tax_1.LineTax();
        productLineTax.setName("MyTax1134");
        productLineTax.setPercentage(20.0);
        productLineTaxes.push(productLineTax);
        inventoryLineItem.setLineTax(productLineTaxes);
        inventoryLineItemArray.push(inventoryLineItem);
        record.addKeyValue("Product_Details", inventoryLineItemArray);
        let lineTaxes = [];
        let lineTax = new line_tax_1.LineTax();
        lineTax.setName("MyTax1134");
        lineTax.setPercentage(20.0);
        lineTaxes.push(lineTax);
        record.addKeyValue("$line_tax", lineTaxes);
        /** End Inventory **/
        /** Following methods are being used only by Activity modules */
        record.addFieldValue(field_1.Field.Tasks.DESCRIPTION, "New Task");
        record.addKeyValue("Currency", new choice_1.Choice("INR"));
        let remindAt = new remind_at_1.RemindAt();
        remindAt.setAlarm("FREQ=NONE;ACTION=EMAILANDPOPUP;TRIGGER=DATE-TIME:2020-07-03T12:30:00+05:30");
        record.addFieldValue(field_1.Field.Tasks.REMIND_AT, remindAt);
        let whoId = new record_1.Record();
        whoId.setId(BigInt("347706110721012"));
        record.addFieldValue(field_1.Field.Tasks.WHO_ID, whoId);
        record.addFieldValue(field_1.Field.Tasks.STATUS, new choice_1.Choice("Waiting for input"));
        record.addFieldValue(field_1.Field.Tasks.DUE_DATE, new Date(2020, 10, 10));
        record.addFieldValue(field_1.Field.Tasks.PRIORITY, new choice_1.Choice("High"));
        let whatId = new record_1.Record();
        whatId.setId(BigInt("347706110721008"));
        record.addFieldValue(field_1.Field.Tasks.WHAT_ID, whatId);
        record.addKeyValue("$se_module", "Accounts");
        /** Recurring Activity can be provided in any activity module*/
        let recurringActivity = new recurring_activity_1.RecurringActivity();
        recurringActivity.setRrule("FREQ=DAILY;INTERVAL=10;UNTIL=2020-08-14;DTSTART=2020-07-03");
        record.addFieldValue(field_1.Field.Events.RECURRING_ACTIVITY, recurringActivity);
        record.addFieldValue(field_1.Field.Events.DESCRIPTION, "My Event");
        let startDateTime = new Date('October 15, 2020 05:35:32');
        record.addFieldValue(field_1.Field.Events.START_DATETIME, startDateTime);
        let participantsArray = [];
        let participant = new participants_1.Participants();
        participant.setParticipant("zoho@gmail.com");
        participant.setType("email");
        participantsArray.push(participant);
        participant = new participants_1.Participants();
        participant.setParticipant("347706110721012");
        participant.setType("contact");
        participantsArray.push(participant);
        record.addFieldValue(field_1.Field.Events.PARTICIPANTS, participantsArray);
        record.addKeyValue("$send_notification", true);
        record.addFieldValue(field_1.Field.Events.EVENT_TITLE, "New Automated Event");
        let endDateTime = new Date('November 15, 2020 05:35:32');
        record.addFieldValue(field_1.Field.Events.END_DATETIME, endDateTime);
        let remindAt1 = new Date('October 15, 2020 04:35:32');
        record.addFieldValue(field_1.Field.Events.REMIND_AT, remindAt1);
        record.addFieldValue(field_1.Field.Events.CHECK_IN_STATUS, "PLANNED");
        whatId = new record_1.Record();
        whatId.setId(BigInt("347706110932020"));
        record.addFieldValue(field_1.Field.Tasks.WHAT_ID, whatId);
        record.addKeyValue("$se_module", "Leads");
        /** End Activity **/
        /** Following methods are being used only by Price_Books module */
        let pricingDetailsArray = [];
        let pricingDetail = new pricing_details_1.PricingDetails();
        pricingDetail.setFromRange(1.0);
        pricingDetail.setToRange(5.0);
        pricingDetail.setDiscount(2.0);
        pricingDetailsArray.push(pricingDetail);
        pricingDetail = new pricing_details_1.PricingDetails();
        pricingDetail.addKeyValue("from_range", 6.0);
        pricingDetail.addKeyValue("to_range", 11.0);
        pricingDetail.addKeyValue("discount", 3.0);
        pricingDetailsArray.push(pricingDetail);
        record.addFieldValue(field_1.Field.Price_Books.PRICING_DETAILS, pricingDetailsArray);
        record.addKeyValue("Email", "abc@zoho.com");
        record.addFieldValue(field_1.Field.Price_Books.DESCRIPTION, "TEST");
        record.addFieldValue(field_1.Field.Price_Books.PRICE_BOOK_NAME, "book_name");
        record.addFieldValue(field_1.Field.Price_Books.PRICING_MODEL, new choice_1.Choice("Flat"));
        /** End of Price_Books */
        let tagsArray = [];
        let tag = new tag_1.Tag();
        tag.setName("Testtask");
        tagsArray.push(tag);
        //Add Record instance to the array
        recordsArray.push(record);
        //Set the array to data in BodyWrapper instance
        request.setData(recordsArray);
        let trigger = [];
        trigger.push("approval");
        trigger.push("workflow");
        trigger.push("blueprint");
        //Set the array containing the trigger operations to be run
        request.setTrigger(trigger);
        let larId = "34096432157065";
        //Set the larId
        request.setLarId(larId);
        let process = ["review_process"];
        //Set the array containing the process to be run
        request.setProcess(process);
        //Get instance of HeaderMap Class
        let headerInstance = new header_map_1.HeaderMap();
        // await headerInstance.add(CreateRecordsHeader.X_EXTERNAL, "Quotes.Product_Details.product.Products_External");
        //Call createRecords method that takes moduleAPIName and BodyWrapper instance as parameters
        let response = await recordOperations.createRecords(moduleAPIName, request, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
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
     * <h3> Update Records</h3>
     * This method is used to update the records of a module with ID and print the response.
     * @param moduleAPIName The API Name of the module to update records.
     */
    static async updateRecords(moduleAPIName) {
        //example
        //let moduleAPIName = "Leads";
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of BodyWrapper Class that will contain the request body
        let request = new body_wrapper_1.BodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        let record1 = new record_1.Record();
        //ID of the record to be updated
        record1.setId(BigInt("34770619306008"));
        // record1.addKeyValue("External", "LeadsExternal1");
        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record1.addFieldValue(field_1.Field.Leads.CITY, "City");
        record1.addFieldValue(field_1.Field.Leads.LAST_NAME, "Last Name");
        record1.addFieldValue(field_1.Field.Leads.FIRST_NAME, "First Name");
        record1.addFieldValue(field_1.Field.Leads.COMPANY, "KKRNP");
        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Custom_field", "Custom val");
        record1.addKeyValue("Custom_field_2", 10);
        //Used when GDPR is enabled
        let dataConsent = new consent_1.Consent();
        dataConsent.setConsentRemarks("Approved.");
        dataConsent.setConsentThrough("Email");
        dataConsent.setContactThroughEmail(true);
        dataConsent.setContactThroughSocial(false);
        // record1.addKeyValue("Data_Processing_Basis_Details", dataConsent);
        recordsArray.push(record1);
        let record2 = new record_1.Record();
        //ID of the record to be updated
        record2.addFieldValue(field_1.Field.Leads.ID, BigInt("34096431881002"));
        // record2.addKeyValue("External", "LeadsExternal1");
        /*
         * Call addFieldValue method that takes two arguments
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record2.addFieldValue(field_1.Field.Leads.CITY, "City");
        record2.addFieldValue(field_1.Field.Leads.LAST_NAME, "Last Name");
        record2.addFieldValue(field_1.Field.Leads.FIRST_NAME, "First Name");
        record2.addFieldValue(field_1.Field.Leads.COMPANY, "KKRNP");
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
        let trigger = [];
        trigger.push("approval");
        trigger.push("workflow");
        trigger.push("blueprint");
        //Set the array containing the trigger operations to be run
        request.setTrigger(trigger);
        //Get instance of HeaderMap Class
        let headerInstance = new header_map_1.HeaderMap();
        // await headerInstance.add(UpdateRecordsHeader.X_EXTERNAL, "Leads.External");
        //Call updateRecords method that takes moduleAPIName, BodyWrapper instance and headerInstance as parameter.
        let response = await recordOperations.updateRecords(moduleAPIName, request, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
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
     * <h3> Delete Records</h3>
     * This method is used to delete records of a module and print the response.
     * @param moduleAPIName The API Name of the module to delete records.
     * @param recordIds The array of record IDs to be deleted
     */
    static async deleteRecords(moduleAPIName, recordIds) {
        //example
        //let moduleAPIName = "Contacts";
        // let recordIds = [3409643756050n, 3409643729017n, 3409643729009n];
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new parameter_map_1.ParameterMap();
        /* Possible parameters for Delete Records operation */
        for (let recordId of recordIds) {
            await paramInstance.add(record_operations_1.DeleteRecordsParam.IDS, recordId);
        }
        await paramInstance.add(record_operations_1.DeleteRecordsParam.WF_TRIGGER, true);
        //Get instance of HeaderMap Class
        let headerInstance = new header_map_1.HeaderMap();
        // await headerInstance.add(DeleteRecordsHeader.X_EXTERNAL, "Leads.External");
        //Call deleteRecords method that takes moduleAPIName, paramInstance and headerInstance as parameter.
        let response = await recordOperations.deleteRecords(moduleAPIName, paramInstance, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
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
     * <h3> Upsert Records</h3>
     * This method is used to Upsert records of a module and print the response.
     * @param moduleAPIName The API Name of the module to upsert records.
     */
    static async upsertRecords(moduleAPIName) {
        //example
        //let moduleAPIName = "Leads";
        //Get instance of RecordOperations Class that takes moduleAPIName as parameter
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of BodyWrapper Class that will contain the request body
        let request = new body_wrapper_1.BodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        //Get instance of Record Class
        let record1 = new record_1.Record();
        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record1.addFieldValue(field_1.Field.Leads.CITY, "City");
        record1.addFieldValue(field_1.Field.Leads.LAST_NAME, "Last Name");
        record1.addFieldValue(field_1.Field.Leads.FIRST_NAME, "First Name");
        record1.addFieldValue(field_1.Field.Leads.COMPANY, "KKRNP");
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
        let record2 = new record_1.Record();
        /*
         * Call addFieldValue method that takes two arguments
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record2.addFieldValue(field_1.Field.Leads.CITY, "City");
        record2.addFieldValue(field_1.Field.Leads.LAST_NAME, "Last Name");
        record2.addFieldValue(field_1.Field.Leads.FIRST_NAME, "First Name");
        record2.addFieldValue(field_1.Field.Leads.COMPANY, "KKRNP");
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
        let duplicateCheckFields = ["City", "Last_Name", "First_Name"];
        //Set the array containing duplicate check fiels to BodyWrapper instance
        request.setDuplicateCheckFields(duplicateCheckFields);
        //Get instance of HeaderMap Class
        let headerInstance = new header_map_1.HeaderMap();
        // await headerInstance.add(UpsertRecordsHeader.X_EXTERNAL, "Leads.External");
        //Call upsertRecords method that takes moduleAPIName, BodyWrapper instance and headerInstance as parameter.
        let response = await recordOperations.upsertRecords(moduleAPIName, request, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
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
     * <h3> Get Deleted Records</h3>
     * This method is used to get the deleted records of a module and print the response.
     * @param moduleAPIName The API Name of the module to get the deleted records.
     */
    static async getDeletedRecords(moduleAPIName) {
        //example
        //let moduleAPIName = "Deals";
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new parameter_map_1.ParameterMap();
        /* Possible parameters for Get Deleted Records operation */
        //can be all/recycle/permanent
        await paramInstance.add(record_operations_1.GetDeletedRecordsParam.TYPE, "permanent");
        await paramInstance.add(record_operations_1.GetDeletedRecordsParam.PAGE, 1);
        await paramInstance.add(record_operations_1.GetDeletedRecordsParam.PER_PAGE, 200);
        //Get instance of HeaderMap Class
        let headerInstance = new header_map_1.HeaderMap();
        /* Possible headers for Get Deleted Records operation */
        await headerInstance.add(record_operations_1.GetDeletedRecordsHeader.IF_MODIFIED_SINCE, new Date('January 15, 2020 10:35:32'));
        //Call getDeletedRecords method that takes paramInstance, headerInstance and moduleAPIName as parameter
        let response = await recordOperations.getDeletedRecords(moduleAPIName, paramInstance, headerInstance);
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
                //Check if expected DeletedRecordsWrapper instance is received
                if (responseObject instanceof deleted_records_wrapper_1.DeletedRecordsWrapper) {
                    //Get the array of obtained DeletedRecord instances
                    let deletedRecords = responseObject.getData();
                    deletedRecords.forEach(deletedRecord => {
                        //Get the deletedBy User instance of each DeletedRecord
                        let deletedBy = deletedRecord.getDeletedBy();
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
                        let createdBy = deletedRecord.getCreatedBy();
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
                    let info = responseObject.getInfo();
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
     * <h3> Search Records</h3>
     * This method is used to search records of a module and print the response.
     * @param moduleAPIName The API Name of the module to search records.
     */
    static async searchRecords(moduleAPIName) {
        //example
        //let moduleAPIName = "Price_Books";
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new parameter_map_1.ParameterMap();
        /* Possible parameters for Search Records operation */
        await paramInstance.add(record_operations_1.SearchRecordsParam.EMAIL, "abc@zoho.com");
        await paramInstance.add(record_operations_1.SearchRecordsParam.PHONE, "234567890");
        await paramInstance.add(record_operations_1.SearchRecordsParam.WORD, "First Name Last Name");
        await paramInstance.add(record_operations_1.SearchRecordsParam.CONVERTED, "both");
        await paramInstance.add(record_operations_1.SearchRecordsParam.APPROVED, "both");
        await paramInstance.add(record_operations_1.SearchRecordsParam.PAGE, 1);
        await paramInstance.add(record_operations_1.SearchRecordsParam.PER_PAGE, 2);
        //Encoding must be done for parentheses or comma
        await paramInstance.add(record_operations_1.SearchRecordsParam.CRITERIA, "((Last_Name:starts_with:Last Name) or (Company:starts_with:fasf\\(123\\) K))");
        // await paramInstance.add(SearchRecordsParam.CRITERIA, "(External:equals:LeadsExternal1)");
        //Get instance of HeaderMap Class
        let headerInstance = new header_map_1.HeaderMap();
        headerInstance.add(record_operations_1.SearchRecordsHeader.X_EXTERNAL, "Leads.External");
        //Call searchRecords method that takes ParameterMap Instance and moduleAPIName as parameter
        let response = await recordOperations.searchRecords(moduleAPIName, paramInstance, headerInstance);
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
                            if (Array.isArray(value)) {
                                if (value.length > 0) {
                                    if (value[0] instanceof file_details_1.FileDetails) {
                                        let fileDetails = value;
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
                                    else if (value[0] instanceof reminder_1.Reminder) {
                                        let reminders = value;
                                        reminders.forEach(reminder => {
                                            console.log("Reminder Period: " + reminder.getPeriod());
                                            console.log("Reminder Unit: " + reminder.getUnit());
                                        });
                                    }
                                    else if (value[0] instanceof participants_1.Participants) {
                                        let participants = value;
                                        participants.forEach(participant => {
                                            console.log("Record Participants Name: " + participant.getName());
                                            console.log("Record Participants Invited: " + participant.getInvited().toString());
                                            console.log("Record Participants ID: " + participant.getId());
                                            console.log("Record Participants Type: " + participant.getType());
                                            console.log("Record Participants Participant: " + participant.getParticipant());
                                            console.log("Record Participants Status: " + participant.getStatus());
                                        });
                                    }
                                    else if (value[0] instanceof choice_1.Choice) {
                                        let choiceArray = value;
                                        console.log(keyName);
                                        console.log("Values");
                                        choiceArray.forEach(eachChoice => {
                                            console.log(eachChoice.getValue());
                                        });
                                    }
                                    else if (value[0] instanceof inventory_line_items_1.InventoryLineItems) {
                                        let productDetails = value;
                                        productDetails.forEach(productDetail => {
                                            let lineItemProduct = productDetail.getProduct();
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
                                            let lineTaxes = productDetail.getLineTax();
                                            lineTaxes.forEach(lineTax => {
                                                console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());
                                                console.log("Record ProductDetails LineTax Name: " + lineTax.getName());
                                                console.log("Record ProductDetails LineTax Id: " + lineTax.getId());
                                                console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof tag_1.Tag) {
                                        let tags = value;
                                        tags.forEach(tag => {
                                            //Get the Name of each Tag
                                            console.log("Record Tag Name: " + tag.getName());
                                            //Get the Id of each Tag
                                            console.log("Record Tag ID: " + tag.getId());
                                        });
                                    }
                                    else if (value[0] instanceof pricing_details_1.PricingDetails) {
                                        let pricingDetails = value;
                                        pricingDetails.forEach(pricingDetail => {
                                            console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());
                                            console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());
                                            console.log("Record PricingDetails ID: " + pricingDetail.getId());
                                            console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                        });
                                    }
                                    else if (value[0] instanceof record_1.Record) {
                                        let recordArray = value;
                                        recordArray.forEach(record => {
                                            Array.from(record.getKeyValues().keys()).forEach(key => {
                                                console.log(key + ": " + record.getKeyValues().get(key));
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof line_tax_1.LineTax) {
                                        let lineTaxes = value;
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
                            else if (value instanceof layout_1.Layout) {
                                console.log(keyName + " ID: " + value.getId());
                                console.log(keyName + " Name: " + value.getName());
                            }
                            else if (value instanceof user_1.User) {
                                console.log("Record " + keyName + " User-ID: " + value.getId());
                                console.log("Record " + keyName + " User-Name: " + value.getName());
                                console.log("Record " + keyName + " User-Email: " + value.getEmail());
                            }
                            else if (value instanceof record_1.Record) {
                                console.log(keyName + " Record ID: " + value.getId());
                                console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                            }
                            else if (value instanceof choice_1.Choice) {
                                console.log(keyName + ": " + value.getValue());
                            }
                            else if (value instanceof remind_at_1.RemindAt) {
                                console.log(keyName + ": " + value.getAlarm());
                            }
                            else if (value instanceof recurring_activity_1.RecurringActivity) {
                                console.log(keyName);
                                console.log("RRULE: " + value.getRrule());
                            }
                            else if (value instanceof consent_1.Consent) {
                                console.log("Record Consent ID: " + value.getId());
                                //Get the Owner User instance of the Consent
                                let owner = value.getOwner();
                                //Check if owner is not null
                                if (owner != null) {
                                    //Get the name of the owner User
                                    console.log("Record Consent Owner Name: " + owner.getName());
                                    //Get the ID of the owner User
                                    console.log("Record Consent Owner ID: " + owner.getId());
                                    //Get the Email of the owner User
                                    console.log("Record Consent Owner Email: " + owner.getEmail());
                                }
                                let consentCreatedBy = value.getCreatedBy();
                                //Check if createdBy is not null
                                if (consentCreatedBy != null) {
                                    //Get the name of the CreatedBy User
                                    console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());
                                    //Get the ID of the CreatedBy User
                                    console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());
                                    //Get the Email of the CreatedBy User
                                    console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                                }
                                let consentModifiedBy = value.getModifiedBy();
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
                    let info = responseObject.getInfo();
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
     * <h3> Convert Lead</h3>
     * This method is used to Convert a Lead record and print the response.
     * @param leadId The ID of the Lead to be converted.
     */
    static async convertLead(leadId) {
        //example
        //let leadId = 34096432034003n;
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of ConvertBodyWrapper Class that will contain the request body
        let request = new convert_body_wrapper_1.ConvertBodyWrapper();
        //Array to hold LeadConverter instances
        let data = [];
        //Get instance of LeadConverter Class
        let record = new lead_converter_1.LeadConverter();
        record.setOverwrite(true);
        record.setNotifyLeadOwner(true);
        record.setNotifyNewEntityOwner(true);
        record.setAccounts("3409643692007");
        record.setContacts("3409643836001");
        record.setAssignTo("3409643302031");
        let deals = new record_1.Record();
        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        deals.addFieldValue(field_1.Field.Deals.DEAL_NAME, "deal_name");
        deals.addFieldValue(field_1.Field.Deals.DESCRIPTION, "deals description");
        deals.addFieldValue(field_1.Field.Deals.CLOSING_DATE, new Date(2021, 2, 13));
        deals.addFieldValue(field_1.Field.Deals.STAGE, new choice_1.Choice("Closed Won"));
        deals.addFieldValue(field_1.Field.Deals.AMOUNT, 50.7);
        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        deals.addKeyValue("Custom_field", "Value");
        deals.addKeyValue("Custom_field_2", "value");
        //Set the Deal record to deals in LeadConverter instance
        record.setDeals(deals);
        let carryOverTags = new carry_over_tags_1.CarryOverTags();
        carryOverTags.setAccounts(["Converted"]);
        carryOverTags.setContacts(["Converted"]);
        carryOverTags.setDeals(["Converted"]);
        record.setCarryOverTags(carryOverTags);
        //Add the instance to array
        data.push(record);
        //Set the array to data ConvertBodyWrapper instance
        request.setData(data);
        //Call convertLead method that takes ConvertBodyWrapper instance and leadId as parameter
        let response = await recordOperations.convertLead(leadId, request);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof convert_action_wrapper_1.ConvertActionWrapper) {
                    //Get the array of ConvertActionResponses from object
                    let convertActionResponses = responseObject.getData();
                    convertActionResponses.forEach(convertActionResponse => {
                        //Check if the request is successful
                        if (convertActionResponse instanceof successful_convert_1.SuccessfulConvert) {
                            //Get the Accounts ID of  Record
                            console.log("LeadConvert Accounts ID: " + convertActionResponse.getAccounts());
                            //Get the Contacts ID of  Record
                            console.log("LeadConvert Contacts ID: " + convertActionResponse.getContacts());
                            //Get the Deals ID of  Record
                            console.log("LeadConvert Deals ID: " + convertActionResponse.getDeals());
                        }
                        //Check if the request returned an exception
                        else if (convertActionResponse instanceof api_exception_1.APIException) {
                            //Get the Status
                            console.log("Status: " + convertActionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + convertActionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = convertActionResponse.getDetails();
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
     * This method is used to download a photo associated with a module.
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record
     * @param destinationFolder The absolute path of the destination folder to store the photo.
     */
    static async getPhoto(moduleAPIName, recordId, destinationFolder) {
        //example
        // let moduleAPIName = "Contacts";
        // let recordId = 34096432034003n;
        // let destinationFolder = "/Users/user-name/Documents";
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Call getPhoto method that takes moduleAPIName and recordId as parameters
        let response = await recordOperations.getPhoto(recordId, moduleAPIName);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
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
                    let details = responseObject.getDetails();
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
    static async uploadPhoto(moduleAPIName, recordId, absoluteFilePath) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;
        //let absoluteFilePath = "/Users/user_name/Desktop/image.png";
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of FileBodyWrapper class that will contain the request file
        let request = new file_body_wrapper_1.FileBodyWrapper();
        /** StreamWrapper can be initialized in any of the following ways */
        /**
         * param 1 -> fileName
         * param 2 -> Read Stream.
         */
        let streamWrapper = new stream_wrapper_1.StreamWrapper(undefined, fs.createReadStream(absoluteFilePath));
        /**
         * param 1 -> fileName
         * param 2 -> Read Stream
         * param 3 -> Absolute File Path of the file to be attached
         */
        // let streamWrapper = new StreamWrapper(null, null, absoluteFilePath);
        //Set file to the FileBodyWrapper instance
        request.setFile(streamWrapper);
        //Call uploadPhoto method that takes FileBodyWrapper instance, moduleAPIName and recordId as parameter
        let response = await recordOperations.uploadPhoto(recordId, moduleAPIName, request);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if the request is successful
                if (responseObject instanceof success_response_1.SuccessResponse) {
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
                    console.log("Message: " + responseObject.getMessage().getValue());
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
     * This method is used to delete a photo from a record in a module.
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record to delete photo
     */
    static async deletePhoto(moduleAPIName, recordId) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Call deletePhoto method that takes moduleAPIName and recordId as parameter
        let response = await recordOperations.deletePhoto(recordId, moduleAPIName);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if the request is successful
                if (responseObject instanceof success_response_1.SuccessResponse) {
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
                    console.log("Message: " + responseObject.getMessage().getValue());
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
     * This method is used to update the values of specific fields for multiple records and print the response.
     * @param moduleAPIName The API Name of the module to mass update records.
     */
    static async massUpdateRecords(moduleAPIName) {
        //example
        //let moduleAPIName = "Leads";
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of MassUpdateBodyWrapper Class that will contain the request body
        let request = new mass_update_body_wrapper_1.MassUpdateBodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        //Get instance of Record Class
        let record = new record_1.Record();
        record.addFieldValue(field_1.Field.Leads.CITY, "Chennai");
        //Add the record instance to array
        recordsArray.push(record);
        //Set the array to data in MassUpdateBodyWrapper instance
        request.setData(recordsArray);
        //Set the cvid to MassUpdateBodyWrapper instance
        // request.setCvid("3409643087501");
        let ids = ["347706110780033"];
        //Set the array of IDs to MassUpdateBodyWrapper instance
        request.setIds(ids);
        //Set the value to over write
        request.setOverWrite(true);
        //Get instance of Territory Class
        let territory = new territory_1.Territory();
        //Set ID to Territory
        territory.setId(BigInt("3409643505351"));
        territory.setIncludeChild(true);
        // request.setTerritory(territory);
        //Call massUpdateRecords method that takes MassUpdateBodyWrapper instance, ModuleAPIName as parameter.
        let response = await recordOperations.massUpdateRecords(moduleAPIName, request);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected MassUpdateActionWrapper instance is received
                if (responseObject instanceof mass_update_action_wrapper_1.MassUpdateActionWrapper) {
                    //Get the array of MassUpdate ActionResponses
                    let massUpdateActionResponses = responseObject.getData();
                    massUpdateActionResponses.forEach(massUpdateActionResponse => {
                        //Check if the request is successful
                        if (massUpdateActionResponse instanceof mass_update_success_response_1.MassUpdateSuccessResponse) {
                            //Get the Status
                            console.log("Status: " + massUpdateActionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + massUpdateActionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = massUpdateActionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            //Get the Message
                            console.log("Message: " + massUpdateActionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (massUpdateActionResponse instanceof api_exception_1.APIException) {
                            //Get the Status
                            console.log("Status: " + massUpdateActionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + massUpdateActionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = massUpdateActionResponse.getDetails();
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
     * This method is used to get the status of the mass update job scheduled previously and print the response.
     * @param moduleAPIName  The API Name of the module to obtain status of Mass Update.
     * @param jobId The ID of the job obtained from the response of Mass Update Records.
     */
    static async getMassUpdateStatus(moduleAPIName, jobId) {
        //example
        //let moduleAPIName = "Leads";
        //let jobId = "34770615177002";
        //Get instance of RecordOperations Class
        let recordOperations = new record_operations_1.RecordOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new parameter_map_1.ParameterMap();
        /* Possible parameters for Get MassUpdate Status operation */
        await paramInstance.add(record_operations_1.GetMassUpdateStatusParam.JOB_ID, jobId);
        //Call getMassUpdateStatus method that takes ParameterMap instance and moduleAPIName as parameter
        let response = await recordOperations.getMassUpdateStatus(moduleAPIName, paramInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected MassUpdateResponseWrapper instance is received
                if (responseObject instanceof mass_update_response_wrapper_1.MassUpdateResponseWrapper) {
                    //Get the array of MassUpdate ActionResponse data
                    let massUpdateResponses = responseObject.getData();
                    massUpdateResponses.forEach(massUpdateResponse => {
                        //Check if the request is successful
                        if (massUpdateResponse instanceof mass_update_1.MassUpdate) {
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
                        else if (massUpdateResponse instanceof api_exception_1.APIException) {
                            //Get the Status
                            console.log("Status: " + massUpdateResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + massUpdateResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = massUpdateResponse.getDetails();
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
exports.Records = Records;
//# sourceMappingURL=record.js.map