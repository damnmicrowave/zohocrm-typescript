"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomViewsOperations = exports.MasterModel = exports.GetCustomViewParam = exports.GetCustomViewsParam = void 0;
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class CustomViewsOperations {
    /**
     * Creates an instance of CustomViewsOperations with the given parameters
     * @param module A string representing the module
     */
    constructor(module) {
        this.module = module;
    }
    /**
     * The method to get custom views
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getCustomViews(paramInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/custom_views");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addParam(new param_1.Param("module", "com.zoho.crm.api.CustomViews.GetCustomViewsParam"), this.module);
        handlerInstance.setParam(paramInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to get custom view
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getCustomView(id) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/custom_views/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addParam(new param_1.Param("module", "com.zoho.crm.api.CustomViews.GetCustomViewParam"), this.module);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
}
exports.MasterModel = CustomViewsOperations;
exports.CustomViewsOperations = CustomViewsOperations;
class GetCustomViewsParam {
}
exports.GetCustomViewsParam = GetCustomViewsParam;
GetCustomViewsParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.CustomViews.GetCustomViewsParam");
GetCustomViewsParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.CustomViews.GetCustomViewsParam");
class GetCustomViewParam {
}
exports.GetCustomViewParam = GetCustomViewParam;
//# sourceMappingURL=custom_views_operations.js.map