"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserHeader = exports.GetUsersParam = exports.GetUsersHeader = exports.UsersOperations = exports.MasterModel = void 0;
const header_1 = require("../../../../../../routes/header");
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class UsersOperations {
    /**
     * The method to get users
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getUsers(paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/users");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to create user
     * @param request An instance of RequestWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async createUser(request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/users");
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
     * The method to update users
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateUsers(request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/users");
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
     * The method to get user
     * @param id A bigint representing the id
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getUser(id, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/users/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setHeader(headerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to update user
     * @param id A bigint representing the id
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateUser(id, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/users/");
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
     * The method to delete user
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async deleteUser(id) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/users/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
}
exports.MasterModel = UsersOperations;
exports.UsersOperations = UsersOperations;
class GetUsersParam {
}
exports.GetUsersParam = GetUsersParam;
GetUsersParam.TYPE = new param_1.Param("type", "com.zoho.crm.api.Users.GetUsersParam");
GetUsersParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.Users.GetUsersParam");
GetUsersParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.Users.GetUsersParam");
class GetUsersHeader {
}
exports.GetUsersHeader = GetUsersHeader;
GetUsersHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Users.GetUsersHeader");
class GetUserHeader {
}
exports.GetUserHeader = GetUserHeader;
GetUserHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Users.GetUserHeader");
//# sourceMappingURL=users_operations.js.map