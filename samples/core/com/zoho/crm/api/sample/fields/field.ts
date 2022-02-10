import { APIException } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/api_exception";
import { AssociationDetails } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/association_details";
import { AutoNumber } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/auto_number";
import { Crypt } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/crypt";
import { Currency } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/currency";
import { Field } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/field";
import { FieldsOperations, GetFieldsParam } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/fields_operations";
import { Formula } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/formula";
import { LookupField } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/lookup_field";
import { Module } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/module";
import { MultiSelectLookup } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/multi_select_lookup";
import { PickListValue } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/pick_list_value";
import { ResponseHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/response_handler";
import { ResponseWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/response_wrapper";
import { ToolTip } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/tool_tip";
import { Unique } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/unique";
import { ViewType } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/fields/view_type";
import { Layout } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/layouts/layout";
import { APIResponse } from "@zohocrm/typescript-sdk-2.0/routes/controllers/api_response";
import { ParameterMap } from "@zohocrm/typescript-sdk-2.0/routes/parameter_map";

export class Fields {
    /**
     * <h3> Get Fields </h3>
     * This method is used to get metadata about all the fields of a module and print the response.
     * @param moduleAPIName The API Name of the module to get fields
     */
    public static async getFields(moduleAPIName: string) {

        //example
        //let moduleAPIName = "Leads";

        //Get instance of FieldsOperations Class that takes moduleAPIName as parameter
        let fieldsOperations: FieldsOperations = new FieldsOperations(moduleAPIName);

        //Get instance of ParameterMap Class
        let paramInstance: ParameterMap = new ParameterMap();

        // await paramInstance.add(GetFieldsParam.TYPE, "Unused");

        //Call getFields method that takes paramInstance as parameter
        let response: APIResponse<ResponseHandler> = await fieldsOperations.getFields(paramInstance);

        if (response !== null) {

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject !== null) {

                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ResponseWrapper) {

                    //Get the array of obtained Field instances
                    let fields: Field[] = responseObject.getFields();

                    fields.forEach(field => {
                        //Get the ID of each Field
                        console.log("Field ID: " + field.getId());

                        //Get the SystemMandatory of each Field
                        console.log("Field SystemMandatory: " + field.getSystemMandatory().toString());

                        //Get the Webhook of each Field
                        console.log("Field Webhook: " + field.getWebhook().toString());

                        //Get the JsonType of each Field
                        console.log("Field JsonType: " + field.getJsonType());

                        //Get the obtained Crypt instance
                        let crypt: Crypt = field.getCrypt();

                        if (crypt != undefined && crypt !== null) {
                            console.log("Crypt Details");

                            //Get the Crypt Mode
                            console.log("Mode: " + crypt.getMode());

                            //Get the Crypt Column
                            console.log("Column: " + crypt.getColumn());

                            //Get the Crypt Table
                            console.log("Table: " + crypt.getTable());

                            //Get the Crypt Status
                            console.log("Status: " + crypt.getStatus().toString());
                        }

                        //Get the FieldLabel of each Field
                        console.log("Field FieldLabel: " + field.getFieldLabel());

                        //Get the obtained Tooltip instance
                        let toolTip: ToolTip = field.getTooltip();

                        if (toolTip != undefined && toolTip !== null) {
                            //Get the Name of the ToolTip
                            console.log("Field ToolTip Name: " + toolTip.getName());

                            //Get the Value of the ToolTip
                            console.log("Field ToolTip Value: " + toolTip.getValue());
                        }

                        //Get the CreatedSource of each Field
                        console.log("Field CreatedSource: " + field.getCreatedSource());

                        //Get the FieldReadOnly of each Field
                        console.log("Field FieldReadOnly: " + field.getFieldReadOnly().toString());

                        //Get the DisplayLabel of each Field
                        console.log("Field DisplayLabel: " + field.getDisplayLabel());

                        //Get the ReadOnly of each Field
                        console.log("Field ReadOnly: " + field.getReadOnly().toString());

                        //Get the obtained AssociationDetails instance
                        let associationDetails: AssociationDetails = field.getAssociationDetails();

                        //Check if associationDetails is not null
                        if (associationDetails != undefined && associationDetails !== null) {

                            //Get the obtained LookupField instance
                            let lookupField: LookupField = associationDetails.getLookupField();

                            if (lookupField !== null) {

                                //Get the ID of the LookupField
                                console.log("Field AssociationDetails LookupField ID: " + lookupField.getId());

                                //Get the Name of the LookupField
                                console.log("Field AssociationDetails LookupField Name: " + lookupField.getName())
                            }

                            //Get the obtained LookupField instance
                            let relatedField: LookupField = associationDetails.getRelatedField();

                            if (relatedField !== null) {

                                //Get the ID of the relatedField
                                console.log("Field AssociationDetails RelatedField ID: " + relatedField.getId());

                                //Get the Name of the relatedField
                                console.log("Field AssociationDetails RelatedField Name: " + relatedField.getName());
                            }
                        }

                        if (field.getQuickSequenceNumber() !== null) {
                            //Get the QuickSequenceNumber of each Field
                            console.log("Field QuickSequenceNumber: " + field.getQuickSequenceNumber());
                        }

                        if (field.getBusinesscardSupported() !== null) {
                            //Get the BusinesscardSupported of each Field
                            console.log("Field BusinesscardSupported: " + field.getBusinesscardSupported());
                        }

                        //Check if MultiModuleLookup is not null
                        if (field.getMultiModuleLookup() !== null && field.getMultiModuleLookup() !== undefined) {

                            //Get the MultiModuleLookup map
                            Array.from(field.getMultiModuleLookup().keys()).forEach(key => {
                                console.log(key + ": " + field.getMultiModuleLookup().get(key));
                            });
                        }

                        //Get the obtained Currency instance
                        let currency: Currency = field.getCurrency();

                        //Check if currency is not null
                        if (currency !== null) {

                            //Get the RoundingOption of the Currency
                            console.log("Field Currency RoundingOption: " + currency.getRoundingOption());

                            if (currency.getPrecision() !== null) {
                                //Get the Precision of the Currency
                                console.log("Field Currency Precision: " + currency.getPrecision());
                            }
                        }

                        if (field.getCustomField() !== null) {
                            //Get the CustomField of each Field
                            console.log("Field CustomField: " + field.getCustomField());
                        }

                        //Get the obtained Module instance
                        let lookup: Module = field.getLookup();

                        //Check if lookup is not null
                        if (lookup !== undefined && lookup !== null) {

                            //Get the obtained Layout instance
                            let layout: Layout = lookup.getLayout();

                            //Check if layout is not null
                            if (layout !== undefined) {

                                //Get the ID of the Layout
                                console.log("Field ModuleLookup Layout ID: " + layout.getId());

                                //Get the Name of the Layout
                                console.log("Field ModuleLookup Layout Name: " + layout.getName());
                            }

                            //Get the DisplayLabel of the Module
                            console.log("Field ModuleLookup DisplayLabel: " + lookup.getDisplayLabel());

                            //Get the APIName of the Module
                            console.log("Field ModuleLookup APIName: " + lookup.getAPIName());

                            //Get the Module of the ModuleLookup
                            console.log("Field ModuleLookup Module: " + lookup.getModule());

                            if (lookup.getId() !== null) {
                                //Get the ID of the Module
                                console.log("Field ModuleLookup ID: " + lookup.getId());
                            }
                        }

                        if (field.getVisible() !== null) {
                            //Get the Visible of each Field
                            console.log("Field Visible: " + field.getVisible());
                        }

                        if (field.getLength() !== null) {
                            //Get the Length of each Field
                            console.log("Field Length: " + field.getLength());
                        }

                        //Get the obtained ViewType instance
                        let viewType: ViewType = field.getViewType();

                        //Check if viewType is not null
                        if (viewType !== null) {

                            //Get the View of the ViewType
                            console.log("Field ViewType View: " + viewType.getView().toString());

                            //Get the Edit of the ViewType
                            console.log("Field ViewType Edit: " + viewType.getEdit().toString());

                            //Get the Create of the ViewType
                            console.log("Field ViewType Create: " + viewType.getCreate().toString());

                            //Get the QuickCreate of the ViewType
                            console.log("Field ViewType QuickCreate: " + viewType.getQuickCreate().toString());
                        }

                        //Get the obtained Module instance
                        let subform: Module = field.getSubform();

                        if (subform !== undefined && subform !== null) {
                            //Get the Object obtained Layout instance
                            let layout: Layout = subform.getLayout();

                            //Check if layout is not null
                            if (layout !== undefined) {
                                //Get the ID of the Layout
                                console.log("Field Subform Layout ID: " + layout.getId());

                                //Get the Name of the Layout
                                console.log("Field Subform Layout Name: " + layout.getName());
                            }

                            //Get the DisplayLabel of the Module
                            console.log("Field Subform DisplayLabel: " + subform.getDisplayLabel());

                            //Get the APIName of the Module
                            console.log("Field Subform APIName: " + subform.getAPIName());

                            //Get the Module of the Module
                            console.log("Field Subform Module: " + subform.getModule());

                            if (subform.getId() !== undefined) {
                                //Get the ID of the Module
                                console.log("Field Subform ID: " + subform.getId().toString());
                            }
                        }

                        //Get the APIName of each Field
                        console.log("Field APIName: " + field.getAPIName().toString());

                        //Get the obtained Unique instance
                        let unique: Unique = field.getUnique();

                        //Check if unique is not null
                        if (unique !== null) {
                            //Get the Casesensitive of the Unique
                            console.log("Field Unique Casesensitive : " + unique.getCasesensitive());
                        }

                        if (field.getHistoryTracking() !== null) {
                            //Get the HistoryTracking of each Field
                            console.log("Field HistoryTracking: " + field.getHistoryTracking());
                        }

                        //Get the DataType of each Field
                        console.log("Field DataType: " + field.getDataType().toString());

                        //Get the Object obtained Formula instance
                        let formula: Formula = field.getFormula();

                        //Check if formula is not null
                        if (formula !== null) {
                            //Get the ReturnType of the Formula
                            console.log("Field Formula ReturnType : " + formula.getReturnType());

                            if (formula.getExpression() !== null) {
                                //Get the Expression of the Formula
                                console.log("Field Formula Expression : " + formula.getExpression());
                            }
                        }

                        if (field.getDecimalPlace() !== null) {
                            //Get the DecimalPlace of each Field
                            console.log("Field DecimalPlace: " + field.getDecimalPlace());
                        }

                        //Get the MassUpdate of each Field
                        console.log("Field MassUpdate: " + field.getMassUpdate());

                        if (field.getBlueprintSupported() !== null) {
                            //Get the BlueprintSupported of each Field
                            console.log("Field BlueprintSupported: " + field.getBlueprintSupported());
                        }

                        //Get all entries from the MultiSelectLookup instance
                        let multiSelectLookup: MultiSelectLookup = field.getMultiselectlookup();

                        //Check if multiSelectLookup is not null
                        if (multiSelectLookup !== null) {
                            //Get the DisplayValue of the MultiSelectLookup
                            console.log("Field MultiSelectLookup DisplayLabel: " + multiSelectLookup.getDisplayLabel());

                            //Get the LinkingModule of the MultiSelectLookup
                            console.log("Field MultiSelectLookup LinkingModule: " + multiSelectLookup.getLinkingModule());

                            //Get the LookupApiname of the MultiSelectLookup
                            console.log("Field MultiSelectLookup LookupApiname: " + multiSelectLookup.getLookupApiname());

                            //Get the APIName of the MultiSelectLookup
                            console.log("Field MultiSelectLookup APIName: " + multiSelectLookup.getAPIName());

                            //Get the ConnectedlookupApiname of the MultiSelectLookup
                            console.log("Field MultiSelectLookup ConnectedlookupApiname: " + multiSelectLookup.getConnectedlookupApiname());

                            //Get the ID of the MultiSelectLookup
                            console.log("Field MultiSelectLookup ID: " + multiSelectLookup.getId());
                        }

                        let pickListValues: PickListValue[] = field.getPickListValues();

                        if (pickListValues !== null && pickListValues !== undefined) {
                            pickListValues.forEach(pickListValue => {
                                //Get the DisplayValue of each PickListValues
                                console.log("Field PickListValue DisplayValue: " + pickListValue.getDisplayValue());

                                if (pickListValue.getSequenceNumber() !== null) {
                                    //Get the SequenceNumber of each PickListValues
                                    console.log("Field PickListValue SequenceNumber: " + pickListValue.getSequenceNumber());
                                }

                                //Get the ExpectedDataType of each PickListValues
                                console.log("Field PickListValue ExpectedDataType: " + pickListValue.getExpectedDataType());

                                //Get the ActualValue of each PickListValues
                                console.log("Field PickListValue ActualValue: " + pickListValue.getActualValue());

                                if (pickListValue.getMaps() !== null && pickListValue.getMaps() !== undefined) {

                                    pickListValue.getMaps().forEach(map => {
                                        //Get each value from the map
                                        console.log(map);
                                    });
                                }

                                //Get the SysRefName of each PickListValues
                                console.log("Field PickListValue SysRefName: " + pickListValue.getSysRefName());

                                //Get the Type of each PickListValues
                                console.log("Field PickListValue Type: " + pickListValue.getType());
                            });
                        }

                        let autoNumber: AutoNumber = field.getAutoNumber();

                        //Check if autoNumber is not null
                        if (autoNumber !== null) {
                            //Get the Prefix of the AutoNumber
                            console.log("Field AutoNumber Prefix: " + autoNumber.getPrefix());

                            //Get the Suffix of the AutoNumber
                            console.log("Field AutoNumber Suffix: " + autoNumber.getSuffix());

                            if (autoNumber.getStartNumber() !== null) {
                                //Get the StartNumber of the AutoNumber
                                console.log("Field AutoNumber StartNumber: " + autoNumber.getStartNumber());
                            }
                        }

                        if (field.getDefaultValue() !== null) {
                            //Get the DefaultValue of each Field
                            console.log("Field DefaultValue: " + field.getDefaultValue());
                        }

                        if (field.getSectionId() !== null) {
                            //Get the SectionId of each Field
                            console.log("Field SectionId: " + field.getSectionId());
                        }

                        //Check if ValidationRule is not null
                        if (field.getValidationRule() !== null && field.getValidationRule() !== undefined) {
                            //Get the validationRule map
                            Array.from(field.getValidationRule().keys()).forEach(key => {
                                console.log(key + ": " + field.getValidationRule().get(key));
                            });
                        }

                        //Check if ConvertMapping is not null
                        if (field.getConvertMapping() !== null && field.getConvertMapping() !== undefined) {
                            Array.from(field.getConvertMapping().keys()).forEach(key => {
                                console.log(key + ": " + field.getConvertMapping().get(key));
                            });
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
     * <h3> Get Field </h3>
     * This method is used to get metadata about a single field of a module with fieldID and print the response.
     * @param moduleAPIName The API Name of the field's module
     * @param fieldId The ID of the field to be obtained
     */
    public static async getField(moduleAPIName: string, fieldId: bigint) {

        //example
        // let moduleAPIName = "Leads"
        // let fieldId = 34096432293043n

        //Get instance of FieldsOperations Class that takes moduleAPIName as parameter
        let fieldsOperations: FieldsOperations = new FieldsOperations(moduleAPIName);

        //Call getField method which takes fieldId as parameter
        let response: APIResponse<ResponseHandler> = await fieldsOperations.getField(fieldId);

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

                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ResponseWrapper) {

                    //Get the array of obtained Field instances
                    let fields = responseObject.getFields();

                    fields.forEach(field => {

                        //Get the ID of each Field
                        console.log("Field ID: " + field.getId().toString());

                        //Get the SystemMandatory of each Field
                        console.log("Field SystemMandatory: " + field.getSystemMandatory().toString());

                        //Get the Webhook of each Field
                        console.log("Field Webhook: " + field.getWebhook().toString());

                        //Get the JsonType of each Field
                        console.log("Field JsonType: " + field.getJsonType());

                        //Get the obtained Crypt instance
                        let crypt: Crypt = field.getCrypt();

                        if (crypt != null && crypt !== undefined) {
                            console.log("Crypt Details");

                            //Get the Crypt Mode
                            console.log("Mode: " + crypt.getMode());

                            //Get the Crypt Column
                            console.log("Column: " + crypt.getColumn());

                            //Get the Crypt Table
                            console.log("Table: " + crypt.getTable());

                            //Get the Crypt Status
                            console.log("Status: " + crypt.getStatus().toString());
                        }

                        //Get the FieldLabel of each Field
                        console.log("Field FieldLabel: " + field.getFieldLabel());

                        //Get the obtained Tooltip instance
                        let toolTip: ToolTip = field.getTooltip();

                        if (toolTip != null && toolTip !== undefined) {

                            //Get the Name of the ToolTip
                            console.log("Field ToolTip Name: " + toolTip.getName());

                            //Get the Value of the ToolTip
                            console.log("Field ToolTip Value: " + toolTip.getValue());
                        }

                        //Get the CreatedSource of each Field
                        console.log("Field CreatedSource: " + field.getCreatedSource());

                        //Get the FieldReadOnly of each Field
                        console.log("Field FieldReadOnly: " + field.getFieldReadOnly());

                        //Get the DisplayLabel of each Field
                        console.log("Field DisplayLabel: " + field.getDisplayLabel());

                        //Get the ReadOnly of each Field
                        console.log("Field ReadOnly: " + field.getReadOnly());

                        //Get the obtained AssociationDetails instance
                        let associationDetails: AssociationDetails = field.getAssociationDetails();

                        //Check if associationDetails is not null
                        if (associationDetails != null && associationDetails !== undefined) {

                            //Get the obtained LookupField instance
                            let lookupField: LookupField = associationDetails.getLookupField();

                            if (lookupField != null) {

                                //Get the ID of the LookupField
                                console.log("Field AssociationDetails LookupField ID: " + lookupField.getId());

                                //Get the Name of the LookupField
                                console.log("Field AssociationDetails LookupField Name: " + lookupField.getName())
                            }

                            //Get the obtained LookupField instance
                            let relatedField: LookupField = associationDetails.getRelatedField();

                            if (relatedField != null) {

                                //Get the ID of the relatedField
                                console.log("Field AssociationDetails RelatedField ID: " + relatedField.getId());

                                //Get the Name of the relatedField
                                console.log("Field AssociationDetails RelatedField Name: " + relatedField.getName());
                            }
                        }

                        if (field.getQuickSequenceNumber() != null) {
                            //Get the QuickSequenceNumber of each Field
                            console.log("Field QuickSequenceNumber: " + field.getQuickSequenceNumber().toString());
                        }

                        if (field.getBusinesscardSupported() != null) {
                            //Get the BusinesscardSupported of each Field
                            console.log("Field BusinesscardSupported: " + field.getBusinesscardSupported().toString());
                        }

                        //Check if MultiModuleLookup is not null
                        if (field.getMultiModuleLookup() != null) {

                            //Get the MultiModuleLookup map
                            Array.from(field.getMultiModuleLookup().keys()).forEach(key => {
                                console.log(key + ": " + field.getMultiModuleLookup().get(key));
                            });
                        }

                        //Get the obtained Currency instance
                        let currency: Currency = field.getCurrency();

                        //Check if currency is not null
                        if (currency != null) {

                            //Get the RoundingOption of the Currency
                            console.log("Field Currency RoundingOption: " + currency.getRoundingOption());

                            if (currency.getPrecision() != null) {
                                //Get the Precision of the Currency
                                console.log("Field Currency Precision: " + currency.getPrecision());
                            }
                        }

                        if (field.getCustomField() != null) {
                            //Get the CustomField of each Field
                            console.log("Field CustomField: " + field.getCustomField().toString());
                        }

                        //Get the obtained Module instance
                        let lookup: Module = field.getLookup();

                        //Check if lookup is not null
                        if (lookup != null && lookup !== undefined) {

                            //Get the obtained Layout instance
                            let layout: Layout = lookup.getLayout();

                            //Check if layout is not null
                            if (layout != null) {

                                //Get the ID of the Layout
                                console.log("Field ModuleLookup Layout ID: " + layout.getId().toString());

                                //Get the Name of the Layout
                                console.log("Field ModuleLookup Layout Name: " + layout.getName());
                            }

                            //Get the DisplayLabel of the Module
                            console.log("Field ModuleLookup DisplayLabel: " + lookup.getDisplayLabel());

                            //Get the APIName of the Module
                            console.log("Field ModuleLookup APIName: " + lookup.getAPIName());

                            //Get the Module of the ModuleLookup
                            console.log("Field ModuleLookup Module: " + lookup.getModule());

                            if (lookup.getId() != null) {
                                //Get the ID of the Module
                                console.log("Field ModuleLookup ID: " + lookup.getId().toString());
                            }
                        }

                        if (field.getVisible() != null) {
                            //Get the Visible of each Field
                            console.log("Field Visible: " + field.getVisible().toString());
                        }

                        if (field.getLength() != null) {
                            //Get the Length of each Field
                            console.log("Field Length: " + field.getLength().toString());
                        }

                        //Get the obtained ViewType instance
                        let viewType: ViewType = field.getViewType();

                        //Check if viewType is not null
                        if (viewType != null) {

                            //Get the View of the ViewType
                            console.log("Field ViewType View: " + viewType.getView().toString());

                            //Get the Edit of the ViewType
                            console.log("Field ViewType Edit: " + viewType.getEdit().toString());

                            //Get the Create of the ViewType
                            console.log("Field ViewType Create: " + viewType.getCreate().toString());

                            //Get the QuickCreate of the ViewType
                            console.log("Field ViewType QuickCreate: " + viewType.getQuickCreate().toString());
                        }

                        //Get the obtained Module instance
                        let subform: Module = field.getSubform();

                        if (subform !== null && subform !== undefined) {
                            //Get the Object obtained Layout instance
                            let layout: Layout = subform.getLayout();

                            //Check if layout is not null
                            if (layout != null) {
                                //Get the ID of the Layout
                                console.log("Field Subform Layout ID: " + layout.getId().toString());

                                //Get the Name of the Layout
                                console.log("Field Subform Layout Name: " + layout.getName());
                            }

                            //Get the DisplayLabel of the Module
                            console.log("Field Subform DisplayLabel: " + subform.getDisplayLabel());

                            //Get the APIName of the Module
                            console.log("Field Subform APIName: " + subform.getAPIName());

                            //Get the Module of the Module
                            console.log("Field Subform Module: " + subform.getModule());

                            if (subform.getId() != null) {
                                //Get the ID of the Module
                                console.log("Field Subform ID: " + subform.getId().toString());
                            }
                        }

                        //Get the APIName of each Field
                        console.log("Field APIName: " + field.getAPIName().toString());

                        //Get the obtained Unique instance
                        let unique: Unique = field.getUnique();

                        //Check if unique is not null
                        if (unique != null) {
                            //Get the Casesensitive of the Unique
                            console.log("Field Unique Casesensitive : " + unique.getCasesensitive());
                        }

                        if (field.getHistoryTracking() != null) {
                            //Get the HistoryTracking of each Field
                            console.log("Field HistoryTracking: " + field.getHistoryTracking().toString());
                        }

                        //Get the DataType of each Field
                        console.log("Field DataType: " + field.getDataType().toString());

                        //Get the Object obtained Formula instance
                        let formula: Formula = field.getFormula();

                        //Check if formula is not null
                        if (formula != null) {
                            //Get the ReturnType of the Formula
                            console.log("Field Formula ReturnType : " + formula.getReturnType());

                            if (formula.getExpression() != null) {
                                //Get the Expression of the Formula
                                console.log("Field Formula Expression : " + formula.getExpression);
                            }
                        }

                        if (field.getDecimalPlace() != null) {
                            //Get the DecimalPlace of each Field
                            console.log("Field DecimalPlace: " + field.getDecimalPlace());
                        }

                        //Get the MassUpdate of each Field
                        console.log("Field MassUpdate: " + field.getMassUpdate());

                        if (field.getBlueprintSupported() != null) {
                            //Get the BlueprintSupported of each Field
                            console.log("Field BlueprintSupported: " + field.getBlueprintSupported());
                        }

                        //Get all entries from the MultiSelectLookup instance
                        let multiSelectLookup: MultiSelectLookup = field.getMultiselectlookup();

                        //Check if formula is not null
                        if (multiSelectLookup != null && multiSelectLookup !== undefined) {
                            //Get the DisplayLabel of the MultiSelectLookup
                            console.log("Field MultiSelectLookup DisplayLabel: " + multiSelectLookup.getDisplayLabel());

                            //Get the LinkingModule of the MultiSelectLookup
                            console.log("Field MultiSelectLookup LinkingModule: " + multiSelectLookup.getLinkingModule());

                            //Get the LookupApiname of the MultiSelectLookup
                            console.log("Field MultiSelectLookup LookupApiname: " + multiSelectLookup.getLookupApiname());

                            //Get the APIName of the MultiSelectLookup
                            console.log("Field MultiSelectLookup APIName: " + multiSelectLookup.getAPIName());

                            //Get the ConnectedlookupApiname of the MultiSelectLookup
                            console.log("Field MultiSelectLookup ConnectedlookupApiname: " + multiSelectLookup.getConnectedlookupApiname());

                            //Get the ID of the MultiSelectLookup
                            console.log("Field MultiSelectLookup ID: " + multiSelectLookup.getId());
                        }

                        let pickListValues: PickListValue[] = field.getPickListValues();

                        if (pickListValues != null && pickListValues != undefined) {
                            pickListValues.forEach(pickListValue => {
                                //Get the DisplayValue of each PickListValues
                                console.log("Field PickListValue DisplayValue: " + pickListValue.getDisplayValue());

                                if (pickListValue.getSequenceNumber() != null) {
                                    //Get the SequenceNumber of each PickListValues
                                    console.log(" Field PickListValue SequenceNumber: " + pickListValue.getSequenceNumber().toString());
                                }

                                //Get the ExpectedDataType of each PickListValues
                                console.log("Field PickListValue ExpectedDataType: " + pickListValue.getExpectedDataType());

                                //Get the ActualValue of each PickListValues
                                console.log("Field PickListValue ActualValue: " + pickListValue.getActualValue());

                                if (pickListValue.getMaps() != null && pickListValue.getMaps() != undefined) {

                                    pickListValue.getMaps().forEach(map => {
                                        //Get each value from the map
                                        console.log(map);
                                    });
                                }

                                //Get the SysRefName of each PickListValues
                                console.log("Field PickListValue SysRefName: " + pickListValue.getSysRefName());

                                //Get the Type of each PickListValues
                                console.log("Field PickListValue Type: " + pickListValue.getType());
                            });
                        }

                        let autoNumber: AutoNumber = field.getAutoNumber();

                        //Check if autoNumber is not null
                        if (autoNumber != null) {
                            //Get the Prefix of the AutoNumber
                            console.log("Field AutoNumber Prefix: " + autoNumber.getPrefix());

                            //Get the Suffix of the AutoNumber
                            console.log("Field AutoNumber Suffix: " + autoNumber.getSuffix());

                            if (autoNumber.getStartNumber() != null) {
                                //Get the StartNumber of the AutoNumber
                                console.log("Field AutoNumber StartNumber: " + autoNumber.getStartNumber().toString());
                            }
                        }

                        if (field.getDefaultValue() != null) {
                            //Get the DefaultValue of each Field
                            console.log("Field DefaultValue: " + field.getDefaultValue());
                        }

                        if (field.getSectionId() != null) {
                            //Get the SectionId of each Field
                            console.log("Field SectionId: " + field.getSectionId());
                        }

                        //Check if ValidationRule is not null
                        if (field.getValidationRule() != null && field.getValidationRule() !== undefined) {
                            //Get the validationRule map
                            Array.from(field.getValidationRule().keys()).forEach(key => {
                                console.log(key + ": " + field.getValidationRule().get(key));
                            });
                        }

                        //Check if ConvertMapping is not null
                        if (field.getConvertMapping() != null && field.getConvertMapping() != undefined) {
                            Array.from(field.getConvertMapping().keys()).forEach(key => {
                                console.log(key + ": " + field.getConvertMapping().get(key));
                            });
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
}