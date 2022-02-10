"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BluePrintOperations = exports.MasterModel = void 0;
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class BluePrintOperations {
    /**
     * Creates an instance of BluePrintOperations with the given parameters
     * @param recordId A bigint representing the recordId
     * @param moduleAPIName A string representing the moduleAPIName
     */
    constructor(recordId, moduleAPIName) {
        this.recordId = recordId;
        this.moduleAPIName = moduleAPIName;
    }
    /**
     * The method to get blueprint
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getBlueprint() {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.recordId.toString());
        apiPath = apiPath.concat("/actions/blueprint");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to update blueprint
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionResponse>
     * @throws SDKException
     */
    async updateBlueprint(request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.recordId.toString());
        apiPath = apiPath.concat("/actions/blueprint");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setMandatoryChecker(true);
        let ActionResponse = require.resolve("./action_response");
        return handlerInstance.apiCall(ActionResponse, "application/json");
    }
}
exports.MasterModel = BluePrintOperations;
exports.BluePrintOperations = BluePrintOperations;
//# sourceMappingURL=blue_print_operations.js.map