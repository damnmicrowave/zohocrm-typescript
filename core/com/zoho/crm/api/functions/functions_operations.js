"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteFunctionUsingRequestBodyParam = exports.FunctionsOperations = exports.MasterModel = exports.ExecuteFunctionUsingParametersParam = exports.ExecuteFunctionUsingFileHeader = exports.ExecuteFunctionUsingRequestBodyHeader = exports.ExecuteFunctionUsingParametersHeader = exports.ExecuteFunctionUsingFileParam = void 0;
const header_1 = require("../../../../../../routes/header");
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class FunctionsOperations {
    /**
     * Creates an instance of FunctionsOperations with the given parameters
     * @param functionName A string representing the functionName
     * @param authType A string representing the authType
     * @param arguments1 A Map representing the arguments1
     */
    constructor(functionName, authType, arguments1) {
        this.functionName = functionName;
        this.authType = authType;
        this.arguments1 = arguments1;
    }
    /**
     * The method to execute function using request body
     * @param request An instance of BodyWrapper
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseWrapper>
     * @throws SDKException
     */
    async executeFunctionUsingRequestBody(request, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/functions/");
        apiPath = apiPath.concat(this.functionName.toString());
        apiPath = apiPath.concat("/actions/execute");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setMandatoryChecker(true);
        await handlerInstance.addParam(new param_1.Param("auth_type", "com.zoho.crm.api.Functions.ExecuteFunctionUsingRequestBodyParam"), this.authType);
        await handlerInstance.addParam(new param_1.Param("arguments", "com.zoho.crm.api.Functions.ExecuteFunctionUsingRequestBodyParam"), this.arguments1);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        let ResponseWrapper = require.resolve("./response_wrapper");
        return handlerInstance.apiCall(ResponseWrapper, "application/json");
    }
    /**
     * The method to execute function using parameters
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseWrapper>
     * @throws SDKException
     */
    async executeFunctionUsingParameters(paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/functions/");
        apiPath = apiPath.concat(this.functionName.toString());
        apiPath = apiPath.concat("/actions/execute");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addParam(new param_1.Param("auth_type", "com.zoho.crm.api.Functions.ExecuteFunctionUsingParametersParam"), this.authType);
        await handlerInstance.addParam(new param_1.Param("arguments", "com.zoho.crm.api.Functions.ExecuteFunctionUsingParametersParam"), this.arguments1);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        let ResponseWrapper = require.resolve("./response_wrapper");
        return handlerInstance.apiCall(ResponseWrapper, "application/json");
    }
    /**
     * The method to execute function using file
     * @param request An instance of FileBodyWrapper
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseWrapper>
     * @throws SDKException
     */
    async executeFunctionUsingFile(request, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/functions/");
        apiPath = apiPath.concat(this.functionName.toString());
        apiPath = apiPath.concat("/actions/execute");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
        handlerInstance.setContentType("multipart/form-data");
        handlerInstance.setRequest(request);
        handlerInstance.setMandatoryChecker(true);
        await handlerInstance.addParam(new param_1.Param("auth_type", "com.zoho.crm.api.Functions.ExecuteFunctionUsingFileParam"), this.authType);
        await handlerInstance.addParam(new param_1.Param("arguments", "com.zoho.crm.api.Functions.ExecuteFunctionUsingFileParam"), this.arguments1);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        let ResponseWrapper = require.resolve("./response_wrapper");
        return handlerInstance.apiCall(ResponseWrapper, "application/json");
    }
}
exports.MasterModel = FunctionsOperations;
exports.FunctionsOperations = FunctionsOperations;
class ExecuteFunctionUsingRequestBodyParam {
}
exports.ExecuteFunctionUsingRequestBodyParam = ExecuteFunctionUsingRequestBodyParam;
ExecuteFunctionUsingRequestBodyParam.CUSTOM_FUNCTIONS_PARAM = new param_1.Param("custom_functions_param", "com.zoho.crm.api.Functions.ExecuteFunctionUsingRequestBodyParam");
class ExecuteFunctionUsingRequestBodyHeader {
}
exports.ExecuteFunctionUsingRequestBodyHeader = ExecuteFunctionUsingRequestBodyHeader;
ExecuteFunctionUsingRequestBodyHeader.CUSTOM_FUNCTIONS_HEADER = new header_1.Header("custom_functions_header", "com.zoho.crm.api.Functions.ExecuteFunctionUsingRequestBodyHeader");
class ExecuteFunctionUsingParametersParam {
}
exports.ExecuteFunctionUsingParametersParam = ExecuteFunctionUsingParametersParam;
ExecuteFunctionUsingParametersParam.GET_CUSTOM_FUNCTIONS_PARAM = new param_1.Param("get_custom_functions_param", "com.zoho.crm.api.Functions.ExecuteFunctionUsingParametersParam");
class ExecuteFunctionUsingParametersHeader {
}
exports.ExecuteFunctionUsingParametersHeader = ExecuteFunctionUsingParametersHeader;
ExecuteFunctionUsingParametersHeader.GET_CUSTOM_FUNCTIONS_HEADER = new header_1.Header("get_custom_functions_header", "com.zoho.crm.api.Functions.ExecuteFunctionUsingParametersHeader");
class ExecuteFunctionUsingFileParam {
}
exports.ExecuteFunctionUsingFileParam = ExecuteFunctionUsingFileParam;
ExecuteFunctionUsingFileParam.UPLOAD_FILE_PARAM = new param_1.Param("upload_file_param", "com.zoho.crm.api.Functions.ExecuteFunctionUsingFileParam");
class ExecuteFunctionUsingFileHeader {
}
exports.ExecuteFunctionUsingFileHeader = ExecuteFunctionUsingFileHeader;
ExecuteFunctionUsingFileHeader.UPLOAD_FILE_HEADER = new header_1.Header("upload_file_header", "com.zoho.crm.api.Functions.ExecuteFunctionUsingFileHeader");
//# sourceMappingURL=functions_operations.js.map