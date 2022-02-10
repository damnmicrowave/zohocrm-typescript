"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRelatedListParam = exports.RelatedListsOperations = exports.MasterModel = exports.GetRelatedListsParam = void 0;
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class RelatedListsOperations {
    /**
     * Creates an instance of RelatedListsOperations with the given parameters
     * @param module A string representing the module
     */
    constructor(module) {
        this.module = module;
    }
    /**
     * The method to get related lists
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getRelatedLists() {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/related_lists");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addParam(new param_1.Param("module", "com.zoho.crm.api.RelatedLists.GetRelatedListsParam"), this.module);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to get related list
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getRelatedList(id) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/related_lists/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addParam(new param_1.Param("module", "com.zoho.crm.api.RelatedLists.GetRelatedListParam"), this.module);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
}
exports.MasterModel = RelatedListsOperations;
exports.RelatedListsOperations = RelatedListsOperations;
class GetRelatedListsParam {
}
exports.GetRelatedListsParam = GetRelatedListsParam;
class GetRelatedListParam {
}
exports.GetRelatedListParam = GetRelatedListParam;
//# sourceMappingURL=related_lists_operations.js.map