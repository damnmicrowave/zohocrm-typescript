"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkReadOperations = exports.MasterModel = void 0;
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class BulkReadOperations {
    /**
     * The method to get bulk read job details
     * @param jobId A bigint representing the jobId
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getBulkReadJobDetails(jobId) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/bulk/v2/read/");
        apiPath = apiPath.concat(jobId.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to download result
     * @param jobId A bigint representing the jobId
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async downloadResult(jobId) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/bulk/v2/read/");
        apiPath = apiPath.concat(jobId.toString());
        apiPath = apiPath.concat("/result");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/x-download");
    }
    /**
     * The method to create bulk read job
     * @param request An instance of RequestWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async createBulkReadJob(request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/bulk/v2/read");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setMandatoryChecker(true);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
}
exports.MasterModel = BulkReadOperations;
exports.BulkReadOperations = BulkReadOperations;
//# sourceMappingURL=bulk_read_operations.js.map