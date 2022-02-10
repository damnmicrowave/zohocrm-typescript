"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryOperations = exports.MasterModel = void 0;
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class QueryOperations {
    /**
     * The method to get records
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getRecords(request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/coql");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setMandatoryChecker(true);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
}
exports.MasterModel = QueryOperations;
exports.QueryOperations = QueryOperations;
//# sourceMappingURL=query_operations.js.map