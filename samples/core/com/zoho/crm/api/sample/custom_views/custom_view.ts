import { CustomViewsOperations, GetCustomViewParam, GetCustomViewsParam } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/custom_views/custom_views_operations";
import { CustomView } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/custom_views/custom_view";
import { ResponseHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/custom_views/response_handler";
import { ResponseWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/custom_views/response_wrapper";
import { APIException } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/custom_views/api_exception";
import { ParameterMap } from "@zohocrm/typescript-sdk-2.0/routes/parameter_map";
import { APIResponse } from "@zohocrm/typescript-sdk-2.0/routes/controllers/api_response";
import { Info } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/custom_views/info";
import { Translation } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/custom_views/translation";
import { Criteria } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/custom_views/criteria";
import { SharedDetails } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/custom_views/shared_details";

export class CustomViews {
    /**
     * <h3> Get CustomViews </h3>
     * This method is used to get the custom views data of a particular module.
     * Specify the module name in your API request whose custom view data you want to retrieve.
     * @param smoduleAPIName Specify the API name of the required module.
     */
    public static async getCustomViews(moduleAPIName: string) {

        //example
        //let moduleAPIName = "Leads";

        //Get instance of CustomViewOperations Class that takes moduleAPIName as parameter
        let customViewsOperations: CustomViewsOperations = new CustomViewsOperations(moduleAPIName);

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        //Possible parameters of Get CustomViews operation
        await paramInstance.add(GetCustomViewsParam.PAGE, 1);

        await paramInstance.add(GetCustomViewsParam.PER_PAGE, 20);

        //Call getCustomViews method that takes ParameterMap instance as parameter
        let response: APIResponse<ResponseHandler> = await customViewsOperations.getCustomViews(paramInstance);

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

                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ResponseWrapper) {

                    //Get the array of obtained CustomView instances
                    let customViews: CustomView[] = responseObject.getCustomViews();

                    customViews.forEach(customView => {

                        //Get the ID of each CustomView
                        console.log("CustomView ID: " + customView.getId());

                        //Get the Name of each CustomView
                        console.log("CustomView Name: " + customView.getName());

                        //Get the DisplayValue of each CustomView
                        console.log("CustomView DisplayValue: " + customView.getDisplayValue());

                        //Get the Offline of each CustomView
                        console.log("CustomView Offline: " + customView.getOffline());

                        //Get the Default of each CustomView
                        console.log("CustomView Default: " + customView.getDefault());

                        //Get the SystemName of each CustomView
                        console.log("CustomView SystemName: " + customView.getSystemName());

                        //Get the SystemDefined of each CustomView
                        console.log("CustomView SystemDefined: " + customView.getSystemDefined().toString());

                        //Get the Category of each CustomView
                        console.log("CustomView Category: " + customView.getCategory());

                        if (customView.getFavorite() !== null) {
                            //Get the Favorite of each CustomView
                            console.log("CustomView Favorite: " + customView.getFavorite());
                        }
                    });

                    //Get the obtained Info instance from object
                    let info: Info = responseObject.getInfo();

                    //Check if info is not null
                    if (info !== null) {
                        console.log("CustomView Info");

                        if (info.getPerPage() !== null) {
                            //Get the PerPage from Info
                            console.log("CustomView PerPage: " + info.getPerPage().toString());
                        }

                        if (info.getDefault() !== null) {
                            //Get the Default from Info
                            console.log("Default: " + info.getDefault());
                        }

                        if (info.getCount() !== null) {
                            //Get the Count from Info
                            console.log("Count: " + info.getCount().toString());
                        }

                        //Get the Translation instance from Info
                        let translation: Translation = info.getTranslation();

                        if (translation !== null) {
                            console.log("Translation details");

                            //Get the PublicViews of the Translation
                            console.log("PublicViews: " + translation.getPublicViews());

                            //Get the OtherUsersViews of the Translation
                            console.log("OtherUsersViews: " + translation.getOtherUsersViews());

                            //Get the SharedWithMe of the Translation
                            console.log("SharedWithMe: " + translation.getSharedWithMe());

                            //Get the CreatedByMe of the Translation
                            console.log("CreatedByMe: " + translation.getCreatedByMe());
                        }

                        if (info.getPage() !== null) {
                            //Get the Page from Info
                            console.log("Page: " + info.getPage().toString());
                        }

                        if (info.getMoreRecords() !== null) {
                            //Get the MoreRecords from Info
                            console.log("MoreRecords: " + info.getMoreRecords().toString());
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
     * This method is used to get the data of any specific custom view of the module.
     * Specify the custom view ID of the module in your API request whose custom view data you want to retrieve.
     * @param moduleAPIName Specify the API name of the required module.
     * @param customViewId ID of the CustomView to be obtained.
     */
    public static async getCustomView(moduleAPIName: string, customViewId: bigint) {

        //example
        // let moduleAPIName = "Leads"
        // let customViewId = 3409643087507n;

        //Get instance of CustomViewOperations Class that takes moduleAPIName as parameter
        let customViewsOperations: CustomViewsOperations = new CustomViewsOperations(moduleAPIName);

        //Call getCustomView method that takes customViewId as parameter
        let response: APIResponse<ResponseHandler> = await customViewsOperations.getCustomView(customViewId);

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

                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ResponseWrapper) {

                    //Get the array of obtained CustomView instances
                    let customViews: CustomView[] = responseObject.getCustomViews();

                    for (let customView of customViews) {
                        //Get the ID of each CustomView
                        console.log("CustomView ID: " + customView.getId());

                        //Get the Name of each CustomView
                        console.log("CustomView Name: " + customView.getName());

                        //Get the DisplayValue of each CustomView
                        console.log("CustomView DisplayValue: " + customView.getDisplayValue());

                        //Get the SharedType of each CustomView
                        console.log("CustomView SharedType: " + customView.getSharedType());

                        //Get the SystemName of each CustomView
                        console.log("CustomView SystemName: " + customView.getSystemName());

                        //Get the Criteria instance of each CustomView
                        let criteria: Criteria = customView.getCriteria();

                        if (criteria !== null && criteria !== undefined) {
                            await this.printCriteria(criteria);
                        }

                        let sharedDetails: SharedDetails[] = customView.getSharedDetails();

                        if (sharedDetails != undefined && sharedDetails !== null) {
                            sharedDetails.forEach(sharedDetail => {

                                //Get the Name of the each SharedDetails
                                console.log("SharedDetails Name: " + sharedDetail.getName());

                                //Get the ID of the each SharedDetails
                                console.log("SharedDetails ID: " + sharedDetail.getId());

                                //Get the Type of the each SharedDetails
                                console.log("SharedDetails Type: " + sharedDetail.getType());

                                //Get the Subordinates of the each SharedDetails
                                console.log("SharedDetails Subordinates: " + sharedDetail.getSubordinates().toString());
                            });
                        }

                        //Get the SortBy of the each CustomView
                        console.log("CustomView SortBy: " + customView.getSortBy());

                        //Get the Offline of the each CustomView
                        console.log("CustomView Offline: " + customView.getOffline());

                        //Get the Default of each CustomView
                        console.log("CustomView Default: " + customView.getDefault());

                        //Get the SystemDefined of each CustomView
                        console.log("CustomView SystemDefined: " + customView.getSystemDefined().toString());

                        //Get the Category of each CustomView
                        console.log("CustomView Category: " + customView.getCategory());

                        //Get the list of fields in each CustomView
                        let fields: string[] = customView.getFields();

                        if (fields != undefined && fields !== null) {
                            console.log("Fields");

                            fields.forEach(field => {
                                console.log(field);

                            });
                        }

                        if (customView.getFavorite() !== null) {
                            //Get the Favorite of each CustomView
                            console.log("CustomView Favorite: " + customView.getFavorite());
                        }

                        if (customView.getSortOrder() !== null) {
                            //Get the SortOrder of each CustomView
                            console.log("CustomView SortOrder: " + customView.getSortOrder());
                        }

                    }

                    //Get the Info instance from object
                    let info: Info = responseObject.getInfo();

                    if (info !== null) {

                        //Get the Translation instance of CustomView
                        let translation: Translation = info.getTranslation();

                        if (translation !== null) {
                            console.log("Translation details");

                            //Get the PublicViews of the Translation
                            console.log("PublicViews: " + translation.getPublicViews());

                            //Get the OtherUsersViews of the Translation
                            console.log("OtherUsersViews: " + translation.getOtherUsersViews());

                            //Get the SharedWithMe of the Translation
                            console.log("SharedWithMe: " + translation.getSharedWithMe());

                            //Get the CreatedByMe of the Translation
                            console.log("CreatedByMe: " + translation.getCreatedByMe());
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

    private static async printCriteria(criteria: Criteria) {
        if (criteria.getComparator() !== undefined) {
            //Get the Comparator of the Criteria
            console.log("CustomView Criteria Comparator: " + criteria.getComparator().getValue());
        }

        if (criteria.getField() !== undefined) {
            //Get the Field of the Criteria
            console.log("CustomView Criteria Field: " + criteria.getField());
        }

        if (criteria.getValue() !== undefined) {
            //Get the Value of the Criteria
            console.log("CustomView Criteria Value: " + criteria.getValue().toString());
        }

        // Get the List of Criteria instance of each Criteria
        let criteriaGroup: Criteria[] = criteria.getGroup();

        if (criteriaGroup !== null && criteriaGroup !== undefined) {
            criteriaGroup.forEach(eachCriteria => {
                this.printCriteria(eachCriteria);
            });
        }

        if (criteria.getGroupOperator() !== undefined) {
            //Get the Group Operator of the Criteria
            console.log("CustomView Criteria Group Operator: " + criteria.getGroupOperator().getValue());
        }
    }
}