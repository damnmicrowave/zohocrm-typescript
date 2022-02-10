"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetModulesHeader = exports.ModulesOperations = exports.MasterModel = void 0;
const header_1 = require("../../../../../../routes/header");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class ModulesOperations {
    /**
     * The method to get modules
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getModules(headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/modules");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setHeader(headerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to get module
     * @param apiName A string representing the apiName
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getModule(apiName) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/modules/");
        apiPath = apiPath.concat(apiName.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to update module by api name
     * @param apiName A string representing the apiName
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateModuleByAPIName(apiName, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/modules/");
        apiPath = apiPath.concat(apiName.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to update module by id
     * @param id A bigint representing the id
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateModuleById(id, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/modules/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
}
exports.MasterModel = ModulesOperations;
exports.ModulesOperations = ModulesOperations;
class GetModulesHeader {
}
exports.GetModulesHeader = GetModulesHeader;
GetModulesHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Modules.GetModulesHeader");
//# sourceMappingURL=modules_operations.js.map