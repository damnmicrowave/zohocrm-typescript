import { QueryOperations } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/query/query_operations"
import { APIException } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/query/api_exception"
import { ResponseHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/query/response_handler"
import { ResponseWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/query/response_wrapper"
import { BodyWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/query/body_wrapper"
import { APIResponse } from "@zohocrm/typescript-sdk-2.0/routes/controllers/api_response"
import { Record } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/record"
import { User } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/users/user"
import { Tag } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/tags/tag"
import { Info } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/info"

export class Query {
    public static async getRecords() {
        //Get instance of QueryOperations Class
        let queryOperations: QueryOperations = new QueryOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let bodyWrapper: BodyWrapper = new BodyWrapper();

        let selectQuery: string = "select Last_Name, Account_Name.Parent_Account, Account_Name.Parent_Account.Account_Name, First_Name, Full_Name, Created_Time from Contacts where Last_Name is not null limit 200";

        bodyWrapper.setSelectQuery(selectQuery);

        //Call getRecords method that takes BodyWrapper instance as parameter
        let response: APIResponse<ResponseHandler> = await queryOperations.getRecords(bodyWrapper);

        if (response != null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
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

                        let keyArray = Array.from(keyValues.keys());

                        for (let keyName of keyArray) {
                            let value: any = keyValues.get(keyName);

                            if (Array.isArray(value)) {
                                console.log("Record keyName: " + keyName);

                                for (let data of value) {
                                    if (data instanceof Map) {
                                        for (let mapKey in data) {
                                            console.log(mapKey + " : " + data.get(mapKey));
                                        }
                                    }
                                    else {
                                        console.log(data);
                                    }
                                }
                            }
                            else if (value instanceof Map) {
                                console.log("Record keyName: " + keyName);

                                for (let mapKey in value) {
                                    console.log(mapKey + " : " + value.get(mapKey));
                                }
                            }
                            else {
                                console.log("Record keyName: " + keyName + " - Value - " + value);
                            }
                        }
                    }

                    //Get the obtained Info instance
                    let info: Info = responseObject.getInfo();

                    if (info != null) {

                        if (info.getCount() != null) {
                            //Get the Count of the Info
                            console.log("Record Info Count: " + info.getCount().toString());
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
}