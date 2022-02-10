"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLayoutParam = exports.GetLayoutsParam = exports.LayoutsOperations = exports.MasterModel = void 0;
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class LayoutsOperations {
    /**
     * Creates an instance of LayoutsOperations with the given parameters
     * @param module A string representing the module
     */
    constructor(module) {
        this.module = module;
    }
    /**
     * The method to get layouts
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getLayouts() {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/layouts");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addParam(new param_1.Param("module", "com.zoho.crm.api.Layouts.GetLayoutsParam"), this.module);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to get layout
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getLayout(id) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/layouts/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addParam(new param_1.Param("module", "com.zoho.crm.api.Layouts.GetLayoutParam"), this.module);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
}
exports.MasterModel = LayoutsOperations;
exports.LayoutsOperations = LayoutsOperations;
class GetLayoutsParam {
}
exports.GetLayoutsParam = GetLayoutsParam;
class GetLayoutParam {
}
exports.GetLayoutParam = GetLayoutParam;
//# sourceMappingURL=layouts_operations.js.map