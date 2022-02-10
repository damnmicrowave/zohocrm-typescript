"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldsOperations = exports.MasterModel = exports.GetFieldParam = exports.GetFieldsParam = void 0;
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class FieldsOperations {
    /**
     * Creates an instance of FieldsOperations with the given parameters
     * @param module A string representing the module
     */
    constructor(module) {
        this.module = module;
    }
    /**
     * The method to get fields
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getFields(paramInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/fields");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addParam(new param_1.Param("module", "com.zoho.crm.api.Fields.GetFieldsParam"), this.module);
        handlerInstance.setParam(paramInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to get field
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getField(id) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/fields/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addParam(new param_1.Param("module", "com.zoho.crm.api.Fields.GetFieldParam"), this.module);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
}
exports.MasterModel = FieldsOperations;
exports.FieldsOperations = FieldsOperations;
class GetFieldsParam {
}
exports.GetFieldsParam = GetFieldsParam;
GetFieldsParam.TYPE = new param_1.Param("type", "com.zoho.crm.api.Fields.GetFieldsParam");
class GetFieldParam {
}
exports.GetFieldParam = GetFieldParam;
//# sourceMappingURL=fields_operations.js.map