"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareRecordsOperations = exports.MasterModel = exports.GetSharedRecordDetailsParam = void 0;
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class ShareRecordsOperations {
    /**
     * Creates an instance of ShareRecordsOperations with the given parameters
     * @param recordId A bigint representing the recordId
     * @param moduleAPIName A string representing the moduleAPIName
     */
    constructor(recordId, moduleAPIName) {
        this.recordId = recordId;
        this.moduleAPIName = moduleAPIName;
    }
    /**
     * The method to get shared record details
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getSharedRecordDetails(paramInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.recordId.toString());
        apiPath = apiPath.concat("/actions/share");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to share record
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async shareRecord(request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.recordId.toString());
        apiPath = apiPath.concat("/actions/share");
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
     * The method to update share permissions
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateSharePermissions(request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.recordId.toString());
        apiPath = apiPath.concat("/actions/share");
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
     * The method to revoke shared record
     * @returns An instance of APIResponse<DeleteActionHandler>
     * @throws SDKException
     */
    async revokeSharedRecord() {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.recordId.toString());
        apiPath = apiPath.concat("/actions/share");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        let DeleteActionHandler = require.resolve("./delete_action_handler");
        return handlerInstance.apiCall(DeleteActionHandler, "application/json");
    }
}
exports.MasterModel = ShareRecordsOperations;
exports.ShareRecordsOperations = ShareRecordsOperations;
class GetSharedRecordDetailsParam {
}
exports.GetSharedRecordDetailsParam = GetSharedRecordDetailsParam;
GetSharedRecordDetailsParam.SHAREDTO = new param_1.Param("sharedTo", "com.zoho.crm.api.ShareRecords.GetSharedRecordDetailsParam");
GetSharedRecordDetailsParam.VIEW = new param_1.Param("view", "com.zoho.crm.api.ShareRecords.GetSharedRecordDetailsParam");
//# sourceMappingURL=share_records_operations.js.map