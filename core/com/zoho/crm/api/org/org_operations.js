"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgOperations = exports.MasterModel = void 0;
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class OrgOperations {
    /**
     * The method to get organization
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getOrganization() {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/org");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to upload organization photo
     * @param request An instance of FileBodyWrapper
     * @returns An instance of APIResponse<ActionResponse>
     * @throws SDKException
     */
    async uploadOrganizationPhoto(request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/org/photo");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
        handlerInstance.setContentType("multipart/form-data");
        handlerInstance.setRequest(request);
        handlerInstance.setMandatoryChecker(true);
        let ActionResponse = require.resolve("./action_response");
        return handlerInstance.apiCall(ActionResponse, "application/json");
    }
}
exports.MasterModel = OrgOperations;
exports.OrgOperations = OrgOperations;
//# sourceMappingURL=org_operations.js.map