import { BluePrintOperations } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/blue_print/blue_print_operations";
import { ResponseHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/blue_print/response_handler";
import { ResponseWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/blue_print/response_wrapper";
import { APIException } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/blue_print/api_exception";
import { SuccessResponse } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/blue_print/success_response";
import { BluePrint as ZCRMBluePrint } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/blue_print/blue_print";
import { APIResponse } from "@zohocrm/typescript-sdk-2.0/routes/controllers/api_response";
import { ProcessInfo } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/blue_print/process_info";
import { Transition } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/blue_print/transition";
import { NextTransition } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/blue_print/next_transition";
import { Record } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/record/record";
import { User } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/users/user";
import { Field } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/field";
import { Layout } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/layouts/layout";
import { Crypt } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/crypt";
import { ToolTip } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/tool_tip";
import { Criteria } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/custom_views/criteria";
import { RelatedDetails } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/related_details";
import { Module } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/module";
import { ViewType } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/view_type";
import { PickListValue } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/pick_list_value";
import { MultiSelectLookup } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/multi_select_lookup";
import { AutoNumber } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/auto_number";
import { BodyWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/blue_print/body_wrapper";
import { ActionResponse } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/blue_print/action_response";

export class BluePrint {
    /**
     * <h3> Get Blueprint </h3>
     * This method is used to get a single record's Blueprint details with ID and print the response.
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record to get Blueprint
     */
    public static async getBlueprint(moduleAPIName: string, recordId: bigint) {

        //example
        // let moduleAPIName = "Leads";
        // let recordId = 34096432469044n;

        //Get instance of BluePrintOperations Class that takes moduleAPIName and recordId as parameter
        let bluePrintOperations: BluePrintOperations = new BluePrintOperations(recordId, moduleAPIName);

        //Call getBlueprint method
        let response: APIResponse<ResponseHandler> = await bluePrintOperations.getBlueprint();

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

                    //Get the obtained BluePrint instance
                    let bluePrint: ZCRMBluePrint = responseObject.getBlueprint();

                    //Get the ProcessInfo instance of the obtained BluePrint
                    let processInfo: ProcessInfo = bluePrint.getProcessInfo();

                    //Check if ProcessInfo is not null
                    if (processInfo !== null) {

                        //Get the ID of the ProcessInfo
                        console.log("ProcessInfo ID: " + processInfo.getId());

                        //Get the Field ID of the ProcessInfo
                        console.log("ProcessInfo Field-ID: " + processInfo.getFieldId());

                        //Get the isContinuous of the ProcessInfo
                        console.log("ProcessInfo isContinuous: " + processInfo.getIsContinuous());

                        //Get the API Name of the ProcessInfo
                        console.log("ProcessInfo API Name: " + processInfo.getAPIName());

                        //Get the Continuous of the ProcessInfo
                        console.log("ProcessInfo Continuous: " + processInfo.getContinuous());

                        //Get the FieldLabel of the ProcessInfo
                        console.log("ProcessInfo FieldLabel: " + processInfo.getFieldLabel());

                        //Get the Name of the ProcessInfo
                        console.log("ProcessInfo Name: " + processInfo.getName());

                        //Get the ColumnName of the ProcessInfo
                        console.log("ProcessInfo ColumnName: " + processInfo.getColumnName());

                        //Get the FieldValue of the ProcessInfo
                        console.log("ProcessInfo FieldValue: " + processInfo.getFieldValue());

                        //Get the FieldName of the ProcessInfo
                        console.log("ProcessInfo FieldName: " + processInfo.getFieldName());

                        //Get the Escalation of the ProcessInfo
                        console.log("ProcessInfo FieldName: " + processInfo.getEscalation());


                    }

                    //Get the array of transitions from BluePrint instance
                    let transitions: Array<Transition> = bluePrint.getTransitions();

                    // if(transitions !== undefined)

                    transitions.forEach(async transition => {
                        let nextTransitions: Array<NextTransition> = transition.getNextTransitions();

                        nextTransitions.forEach(nextTransition => {
                            //Get the ID of the NextTransition
                            console.log("NextTransition ID: " + nextTransition.getId());

                            //Get the Name of the NextTransition
                            console.log("NextTransition Name: " + nextTransition.getName());
                        });

                        //Get the PercentPartialSave of each Transition
                        console.log("Transition PercentPartialSave: " + transition.getPercentPartialSave());

                        let data: Record = transition.getData();

                        if (data !== null) {
                            //Get the ID of each record
                            console.log("Record ID: " + data.getId());

                            //Get the createdBy User instance of each record
                            let createdBy: User = data.getCreatedBy();

                            if (createdBy !== null) {
                                //Get the ID of the createdBy User
                                console.log("Record Created By User-ID: " + createdBy.getId());

                                //Get the name of the createdBy User
                                console.log("Record Created By User-Name: " + createdBy.getName());
                            }

                            //Check if the created time is not null
                            if (data.getCreatedTime() !== null) {
                                //Get the created time of each record
                                console.log("Record Created Time: " + data.getCreatedTime().toString());
                            }

                            //Check if the modified time is not null
                            if (data.getModifiedTime() !== null) {
                                //Get the modified time of each record
                                console.log("Record Modified Time: " + data.getModifiedTime().toString());
                            }

                            //Get the modifiedBy User instance of each record
                            let modifiedBy: User = data.getModifiedBy();

                            //Check if modifiedByUser is not null
                            if (modifiedBy !== null) {
                                //Get the ID of the modifiedBy User
                                console.log("Record Modified By User-ID: " + modifiedBy.getId());

                                //Get the name of the modifiedBy User
                                console.log("Record Modified By user-Name: " + modifiedBy.getName());
                            }

                            //Get all entries from the keyValues map
                            Array.from(data.getKeyValues().keys()).forEach(key => {
                                console.log(key + ": " + data.getKeyValues().get(key));
                            });
                        }

                        //Get the NextFieldValue of the Transition
                        console.log("Transition NextFieldValue: " + transition.getNextFieldValue());

                        //Get the Name of each Transition
                        console.log("Transition Name: " + transition.getName());

                        //Get the CriteriaMatched of the Transition
                        console.log("Transition CriteriaMatched: " + transition.getCriteriaMatched().toString());

                        //Get the ID of the Transition
                        console.log("Transition ID: " + transition.getId());

                        if (transition.getExecutionTime() !== null) {
                            //Get the Execution Time of the Transition
                            console.log("Transition Execution Time: " + transition.getExecutionTime());
                        }

                        let fields: Array<Field> = transition.getFields();

                        console.log("Transition Fields");

                        for (let field of fields) {
                            //Get the webhook of each Field
                            console.log("Webhook: " + field.getWebhook());

                            //Get the JsonType of each Field
                            console.log("JsonType: " + field.getJsonType());

                            //Get the DisplayLabel of each Field
                            console.log("DisplayLabel: " + field.getDisplayLabel());

                            //Get the DataType of each Field
                            console.log("DataType: " + field.getDataType());

                            //Get the ColumnName of each Field
                            console.log("ColumnName: " + field.getColumnName());

                            //Get the PersonalityName of each Field
                            console.log("PersonalityName: " + field.getPersonalityName());

                            //Get the ID of each Field
                            console.log("ID: " + field.getId());

                            //Get the TransitionSequence of each Field
                            console.log("TransitionSequence: " + field.getTransitionSequence().toString());

                            if (field.getMandatory() !== null && field.getMandatory() !== undefined) {
                                //Get the Mandatory of each Field
                                console.log("Mandatory: " + field.getMandatory().toString());
                            }

                            let layout: Layout = await field.getLayouts();

                            if (layout != undefined && layout !== null) {
                                //Get the ID of the Layout
                                console.log("Layout ID: " + layout.getId());

                                //Get the name of the Layout
                                console.log("Layout Name: " + layout.getName());
                            }

                            //Get the APIName of each Field
                            console.log("APIName: " + field.getAPIName());

                            //Get the Content of each Field
                            console.log("Content: " + field.getContent());

                            //Get the Message of each Field
                            console.log("Message :" + field.getMessage());

                            if (field.getSystemMandatory() !== undefined && field.getSystemMandatory !== null) {
                                //Get the SystemMandatory of each Field
                                console.log("SystemMandatory: " + field.getSystemMandatory().toString());
                            }

                            //Get the Crypt of each Field
                            console.log("Crypt: " + field.getCrypt());

                            if (field.getCrypt() !== undefined && field.getCrypt() !== null) {
                                let crypt: Crypt = field.getCrypt();

                                console.log("Crypt Mode: " + crypt.getMode());

                                console.log("Crypt Column: " + crypt.getColumn());

                                console.log("Crypt Table: " + crypt.getTable());

                                console.log("Crypt Status: " + crypt.getStatus());
                            }

                            //Get the FieldLabel of each Field
                            console.log("FieldLabel: " + field.getFieldLabel());

                            //Get the Tooltip of each Field
                            let toolTip: ToolTip = field.getTooltip();

                            if (toolTip !== null && toolTip !== undefined) {
                                //Get the Tooltip Name
                                console.log("Tooltip Name: " + toolTip.getName());

                                //Get the Tooltip Value
                                console.log("Tooltip Value: " + toolTip.getValue());
                            }

                            //Get the CreatedSource of each Field
                            console.log("CreatedSource: " + field.getCreatedSource());

                            if (field.getFieldReadOnly() !== null && field.getReadOnly() !== undefined) {
                                //Get the FieldReadOnly of each Field
                                console.log("FieldReadOnly: " + field.getFieldReadOnly().toString());
                            }

                            //Get the Criteria of each Field
                            let criteria: Criteria = field.getCriteria();

                            if (criteria !== null && criteria !== undefined) {
                                this.printCriteria(criteria);
                            }

                            //Get the Related Details of each Field
                            let relatedDetails: RelatedDetails = field.getRelatedDetails();

                            if (relatedDetails !== null && relatedDetails !== undefined) {
                                //Get the display label of related detail
                                if (relatedDetails.getDisplayLabel() !== null) {
                                    console.log("RelatedDetails Display Label: " + relatedDetails.getDisplayLabel());
                                }

                                //Get the API Name of related detail
                                console.log("Related Details API Name: " + relatedDetails.getAPIName());

                                //Get the module of related detail
                                if (relatedDetails.getModule() !== null && relatedDetails.getModule() !== undefined) {
                                    let module: Module = relatedDetails.getModule();

                                    //Get the layout of the module
                                    if (module.getLayout() !== null && module.getLayout() !== undefined) {
                                        let layout: Layout = module.getLayout();

                                        console.log("Related Details Module Layout ID: " + layout.getId());

                                        console.log("Related Details Module Layout Name: " + layout.getName());
                                    }

                                    //Get the display label of the module
                                    if (module.getDisplayLabel() !== null && module.getDisplayLabel() !== undefined) {
                                        console.log("Related Details Module Display Label: " + module.getDisplayLabel());
                                    }

                                    //Get the Module API Name of the Related detail module
                                    console.log("Related Details Module API Name: " + module.getAPIName());

                                    //Get the Module of the Related detail module
                                    console.log("Related Details Module: " + module.getModule());

                                    //Get the Module Name of the Related detail
                                    console.log("Related Details Module Name: " + module.getModuleName());
                                }

                                //Get the ID of the Related detail
                                console.log("Related Details ID: " + relatedDetails.getId());

                                //Get the Type of the Related detail
                                console.log("Related Details Type: " + relatedDetails.getType());
                            }

                            if (field.getReadOnly() !== null && field.getReadOnly() !== undefined) {
                                //Get the ReadOnly of each Field
                                console.log("ReadOnly: " + field.getReadOnly().toString());
                            }

                            //Get the AssociationDetails of each Field
                            console.log("AssociationDetails: " + field.getAssociationDetails());

                            //Get the DisplayLabel of each Field
                            console.log("DisplayLabel: " + field.getDisplayLabel());

                            if (field.getQuickSequenceNumber() !== null && field.getQuickSequenceNumber() !== undefined) {
                                //Get the QuickSequenceNumber of each Field
                                console.log("QuickSequenceNumber: " + field.getQuickSequenceNumber().toString());
                            }

                            if (field.getCustomField() !== null && field.getCustomField() !== undefined) {
                                //Get the CustomField of each Field
                                console.log("CustomField: " + field.getCustomField().toString());
                            }

                            if (field.getVisible() !== null && field.getVisible() !== undefined) {
                                //Get the Visible of each Field
                                console.log("Visible: " + field.getVisible().toString());
                            }

                            if (field.getLength() !== null && field.getLength() !== undefined) {
                                //Get the Length of each Field
                                console.log("Length: " + field.getLength().toString());
                            }

                            //Get the DecimalPlace of each Field
                            console.log("DecimalPlace: " + field.getDecimalPlace());

                            let viewType: ViewType = field.getViewType();

                            if (viewType !== null && viewType !== undefined) {
                                //Get the View of the ViewType
                                console.log("View: " + viewType.getView().toString());

                                //Get the Edit of the ViewType
                                console.log("Edit: " + viewType.getEdit().toString());

                                //Get the Create of the ViewType
                                console.log("Create: " + viewType.getCreate().toString());

                                //Get the View of the ViewType
                                console.log("QuickCreate: " + viewType.getQuickCreate().toString());
                            }

                            let pickListValues: PickListValue[] = field.getPickListValues();

                            if (pickListValues !== null && pickListValues !== undefined) {
                                pickListValues.forEach(pickListValue => {
                                    //Get the DisplayValue of each PickListValues
                                    console.log("DisplayValue: " + pickListValue.getDisplayValue());

                                    //Get the SequenceNumber of each PickListValues
                                    console.log("SequenceNumber: " + pickListValue.getSequenceNumber().toString());

                                    //Get the ExpectedDataType of each PickListValues
                                    console.log("ExpectedDataType: " + pickListValue.getExpectedDataType());

                                    //Get the ActualValue of each PickListValues
                                    console.log("ActualValue: " + pickListValue.getActualValue());

                                    if (pickListValue.getMaps() !== null) {
                                        pickListValue.getMaps().forEach(value => {
                                            console.log(value);
                                        });
                                    }
                                });
                            }

                            //Get all entries from the MultiSelectLookup instance
                            let multiSelectLookup: MultiSelectLookup = field.getMultiselectlookup();

                            if (multiSelectLookup !== null && multiSelectLookup !== undefined) {
                                //Get the DisplayValue of the MultiSelectLookup
                                console.log("DisplayLabel: " + multiSelectLookup.getDisplayLabel());

                                //Get the LinkingModule of the MultiSelectLookup
                                console.log("LinkingModule: " + multiSelectLookup.getLinkingModule());

                                //Get the LookupApiname of the MultiSelectLookup
                                console.log("LookupApiname: " + multiSelectLookup.getLookupApiname());

                                //Get the APIName of the MultiSelectLookup
                                console.log("APIName: " + multiSelectLookup.getAPIName());

                                //Get the ConnectedlookupApiname of the MultiSelectLookup
                                console.log("ConnectedlookupApiname: " + multiSelectLookup.getConnectedlookupApiname());

                                //Get the ID of the MultiSelectLookup
                                console.log("ID: " + multiSelectLookup.getId());
                            }

                            //Get the AutoNumber of each Field
                            let autoNumber: AutoNumber = field.getAutoNumber();

                            if (autoNumber !== null && autoNumber !== undefined) {
                                //Get the Prefix of the AutoNumber
                                console.log("Prefix: " + autoNumber.getPrefix());

                                //Get the Suffix of the AutoNumber
                                console.log("Suffix: " + autoNumber.getSuffix());

                                if (autoNumber.getStartNumber() !== null && autoNumber.getStartNumber() !== undefined) {
                                    //Get the StartNumber of the AutoNumber
                                    console.log("StartNumber: " + autoNumber.getStartNumber().toString());
                                }
                            }
                        }

                        //Get the CriteriaMessage of each Transition
                        console.log("Transition CriteriaMessage: " + transition.getCriteriaMessage());
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
     * <h3> Update Blueprint </h3>
     * This method is used to update a single record's Blueprint details with ID and print the response.
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record to update Blueprint
     * @param transitionId The ID of the Blueprint transition Id
     */
    public static async updateBlueprint(moduleAPIName: string, recordId: bigint, transitionId: bigint) {

        //example
        // let moduleAPIName = "Leads";
        // let recordId = 34096432469044n;
        // let transitionId = 34096431172075n;

        //Get instance of BluePrintOperations Class that takes moduleAPIName and recordId as parameter
        let bluePrintOperations = new BluePrintOperations(recordId, moduleAPIName);

        //Get instance of BodyWrapper Class that will contain the request body
        let bodyWrapper: BodyWrapper = new BodyWrapper();

        //Array to contain BluePrint instances
        let bluePrintArray: ZCRMBluePrint[] = [];

        //Get instance of BluePrint Class
        let bluePrint: ZCRMBluePrint = new ZCRMBluePrint();

        //Set transitionId to the BluePrint instance
        bluePrint.setTransitionId(transitionId);

        //Get instance of Record Class
        let data: Record = new Record();

        let lookup = new Map();

        lookup.set("Phone", "8940372937");

        lookup.set("id", "8940372937");

        // data.addKeyValue("Data_3", lookup);

        data.addKeyValue("Phone", "8940372937");

        data.addKeyValue("Notes", "Updated via blueprint");

        let checkLists = [];

        let checkListItem = new Map();

        checkListItem.set("list 1", true);

        checkLists.push(checkListItem);

        checkListItem = new Map();

        checkListItem.set("list 2", true);

        checkLists.push(checkListItem);

        checkListItem = new Map();

        checkListItem.set("list 3", true);

        checkLists.push(checkListItem);

        // data.addKeyValue("CheckLists", checkLists);

        //Set data to the BluePrint instance
        bluePrint.setData(data);

        //Add BluePrint instance to the array
        bluePrintArray.push(bluePrint);

        //Set the array to bluePrint in BodyWrapper instance
        bodyWrapper.setBlueprint(bluePrintArray);

        //Call updateBluePrint method that takes BodyWrapper instance
        let response: APIResponse<ActionResponse> = await bluePrintOperations.updateBlueprint(bodyWrapper);

        if (response !== null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionResponse = response.getObject();

            if (responseObject !== null) {
                if (responseObject instanceof SuccessResponse) {
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
                else if (responseObject instanceof APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

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
        if (criteria.getComparator() !== null) {
            //Get the Comparator of the Field Criteria
            console.log("Field Criteria Comparator: " + criteria.getComparator().getValue());
        }

        if (criteria.getValue() !== null) {
            //Get the Value of the the Field Criteria
            console.log("Field Criteria Value: " + criteria.getValue().toString());
        }

        // Get the array of Criteria instance of each Criteria
        let criteriaGroup: Criteria[] = criteria.getGroup();

        if (criteriaGroup !== null && criteriaGroup !== undefined) {
            criteriaGroup.forEach(eachCriteria => {
                this.printCriteria(eachCriteria);
            });
        }

        //Get the Group Operator of the Field Criteria
        if (criteria.getGroupOperator() !== null) {
            console.log("Field Criteria Group Operator: " + criteria.getGroupOperator().getValue());
        }
    }
}