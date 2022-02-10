"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllContactRolesOfDealParam = exports.ContactRolesOperations = exports.MasterModel = exports.DeleteContactRolesParam = void 0;
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const utility_1 = require("../../../../../../utils/util/utility");
const constants_1 = require("../../../../../../utils/util/constants");
class ContactRolesOperations {
    /**
     * The method to get contact roles
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getContactRoles() {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Contacts/roles");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to create contact roles
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async createContactRoles(request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Contacts/roles");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setMandatoryChecker(true);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to update contact roles
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateContactRoles(request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Contacts/roles");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setMandatoryChecker(true);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to delete contact roles
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async deleteContactRoles(paramInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Contacts/roles");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setParam(paramInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to get contact role
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getContactRole(id) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Contacts/roles/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to update contact role
     * @param id A bigint representing the id
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateContactRole(id, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Contacts/roles/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to delete contact role
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async deleteContactRole(id) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Contacts/roles/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to get all contact roles of deal
     * @param dealId A bigint representing the dealId
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<RecordResponseHandler>
     * @throws SDKException
     */
    async getAllContactRolesOfDeal(dealId, paramInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Deals/");
        apiPath = apiPath.concat(dealId.toString());
        apiPath = apiPath.concat("/Contact_Roles");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setModuleAPIName("Contacts");
        await utility_1.Utility.getFields("Contacts", handlerInstance);
        let RecordResponseHandler = require.resolve("./record_response_handler");
        return handlerInstance.apiCall(RecordResponseHandler, "application/json");
    }
    /**
     * The method to get contact role of deal
     * @param contactId A bigint representing the contactId
     * @param dealId A bigint representing the dealId
     * @returns An instance of APIResponse<RecordResponseHandler>
     * @throws SDKException
     */
    async getContactRoleOfDeal(contactId, dealId) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Deals/");
        apiPath = apiPath.concat(dealId.toString());
        apiPath = apiPath.concat("/Contact_Roles/");
        apiPath = apiPath.concat(contactId.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setModuleAPIName("Contacts");
        await utility_1.Utility.getFields("Contacts", handlerInstance);
        let RecordResponseHandler = require.resolve("./record_response_handler");
        return handlerInstance.apiCall(RecordResponseHandler, "application/json");
    }
    /**
     * The method to add contact role to deal
     * @param contactId A bigint representing the contactId
     * @param dealId A bigint representing the dealId
     * @param request An instance of RecordBodyWrapper
     * @returns An instance of APIResponse<RecordActionHandler>
     * @throws SDKException
     */
    async addContactRoleToDeal(contactId, dealId, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Deals/");
        apiPath = apiPath.concat(dealId.toString());
        apiPath = apiPath.concat("/Contact_Roles/");
        apiPath = apiPath.concat(contactId.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        let RecordActionHandler = require.resolve("./record_action_handler");
        return handlerInstance.apiCall(RecordActionHandler, "application/json");
    }
    /**
     * The method to remove contact role from deal
     * @param contactId A bigint representing the contactId
     * @param dealId A bigint representing the dealId
     * @returns An instance of APIResponse<RecordActionHandler>
     * @throws SDKException
     */
    async removeContactRoleFromDeal(contactId, dealId) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Deals/");
        apiPath = apiPath.concat(dealId.toString());
        apiPath = apiPath.concat("/Contact_Roles/");
        apiPath = apiPath.concat(contactId.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        let RecordActionHandler = require.resolve("./record_action_handler");
        return handlerInstance.apiCall(RecordActionHandler, "application/json");
    }
}
exports.MasterModel = ContactRolesOperations;
exports.ContactRolesOperations = ContactRolesOperations;
class DeleteContactRolesParam {
}
exports.DeleteContactRolesParam = DeleteContactRolesParam;
DeleteContactRolesParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.ContactRoles.DeleteContactRolesParam");
class GetAllContactRolesOfDealParam {
}
exports.GetAllContactRolesOfDealParam = GetAllContactRolesOfDealParam;
GetAllContactRolesOfDealParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.ContactRoles.GetAllContactRolesOfDealParam");
//# sourceMappingURL=contact_roles_operations.js.map