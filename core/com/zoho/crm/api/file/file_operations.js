"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileOperations = exports.MasterModel = exports.UploadFilesParam = exports.GetFileParam = void 0;
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class FileOperations {
    /**
     * The method to upload files
     * @param request An instance of BodyWrapper
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async uploadFiles(request, paramInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/files");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
        handlerInstance.setContentType("multipart/form-data");
        handlerInstance.setRequest(request);
        handlerInstance.setMandatoryChecker(true);
        handlerInstance.setParam(paramInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to get file
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getFile(paramInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/files");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/x-download");
    }
}
exports.MasterModel = FileOperations;
exports.FileOperations = FileOperations;
class UploadFilesParam {
}
exports.UploadFilesParam = UploadFilesParam;
UploadFilesParam.TYPE = new param_1.Param("type", "com.zoho.crm.api.File.UploadFilesParam");
class GetFileParam {
}
exports.GetFileParam = GetFileParam;
GetFileParam.ID = new param_1.Param("id", "com.zoho.crm.api.File.GetFileParam");
//# sourceMappingURL=file_operations.js.map