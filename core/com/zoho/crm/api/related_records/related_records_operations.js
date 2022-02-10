"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelinkRecordsParam = exports.UpdateRelatedRecordsHeader = exports.GetRelatedRecordsHeader = exports.UpdateRelatedRecordHeader = exports.DelinkRecordHeader = exports.DeleteRelatedRecordsUsingExternalIDParam = exports.GetRelatedRecordsUsingExternalIDHeader = exports.UpdateRelatedRecordsUsingExternalIDHeader = exports.GetRelatedRecordUsingExternalIDHeader = exports.DeleteRelatedRecordsUsingExternalIDHeader = exports.GetRelatedRecordsUsingExternalIDParam = exports.UpdateRelatedRecordUsingExternalIDHeader = exports.GetRelatedRecordsParam = exports.DeleteRelatedRecordUsingExternalIDHeader = exports.RelatedRecordsOperations = exports.MasterModel = exports.DelinkRecordsHeader = exports.GetRelatedRecordHeader = void 0;
const header_1 = require("../../../../../../routes/header");
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const utility_1 = require("../../../../../../utils/util/utility");
const constants_1 = require("../../../../../../utils/util/constants");
class RelatedRecordsOperations {
    /**
     * Creates an instance of RelatedRecordsOperations with the given parameters
     * @param relatedListAPIName A string representing the relatedListAPIName
     * @param moduleAPIName A string representing the moduleAPIName
     * @param xExternal A string representing the xExternal
     */
    constructor(relatedListAPIName, moduleAPIName, xExternal) {
        this.relatedListAPIName = relatedListAPIName;
        this.moduleAPIName = moduleAPIName;
        this.xExternal = xExternal;
    }
    /**
     * The method to get related records
     * @param recordId A bigint representing the recordId
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getRelatedRecords(recordId, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(recordId.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.relatedListAPIName.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addHeader(new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsHeader"), this.xExternal);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        await utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to update related records
     * @param recordId A bigint representing the recordId
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateRelatedRecords(recordId, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(recordId.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.relatedListAPIName.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        await handlerInstance.addHeader(new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordsHeader"), this.xExternal);
        await utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to delink records
     * @param recordId A bigint representing the recordId
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async delinkRecords(recordId, paramInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(recordId.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.relatedListAPIName.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        await handlerInstance.addHeader(new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DelinkRecordsHeader"), this.xExternal);
        handlerInstance.setParam(paramInstance);
        await utility_1.Utility.getFields(this.moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to get related records using external id
     * @param externalValue A string representing the externalValue
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getRelatedRecordsUsingExternalId(externalValue, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(externalValue.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.relatedListAPIName.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addHeader(new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDHeader"), this.xExternal);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        await utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to update related records using external id
     * @param externalValue A string representing the externalValue
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateRelatedRecordsUsingExternalId(externalValue, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(externalValue.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.relatedListAPIName.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        await handlerInstance.addHeader(new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordsUsingExternalIDHeader"), this.xExternal);
        await utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to delete related records using external id
     * @param externalValue A string representing the externalValue
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async deleteRelatedRecordsUsingExternalId(externalValue, paramInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(externalValue.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.relatedListAPIName.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        await handlerInstance.addHeader(new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DeleteRelatedRecordsUsingExternalIDHeader"), this.xExternal);
        handlerInstance.setParam(paramInstance);
        await utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to get related record
     * @param relatedRecordId A bigint representing the relatedRecordId
     * @param recordId A bigint representing the recordId
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getRelatedRecord(relatedRecordId, recordId, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(recordId.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.relatedListAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(relatedRecordId.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addHeader(new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordHeader"), this.xExternal);
        handlerInstance.setHeader(headerInstance);
        await utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to update related record
     * @param relatedRecordId A bigint representing the relatedRecordId
     * @param recordId A bigint representing the recordId
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateRelatedRecord(relatedRecordId, recordId, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(recordId.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.relatedListAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(relatedRecordId.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        await handlerInstance.addHeader(new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordHeader"), this.xExternal);
        await utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to delink record
     * @param relatedRecordId A bigint representing the relatedRecordId
     * @param recordId A bigint representing the recordId
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async delinkRecord(relatedRecordId, recordId) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(recordId.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.relatedListAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(relatedRecordId.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        await handlerInstance.addHeader(new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DelinkRecordHeader"), this.xExternal);
        await utility_1.Utility.getFields(this.moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to get related record using external id
     * @param externalFieldValue A string representing the externalFieldValue
     * @param externalValue A string representing the externalValue
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getRelatedRecordUsingExternalId(externalFieldValue, externalValue, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(externalValue.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.relatedListAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(externalFieldValue.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addHeader(new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordUsingExternalIDHeader"), this.xExternal);
        handlerInstance.setHeader(headerInstance);
        await utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to update related record using external id
     * @param externalFieldValue A string representing the externalFieldValue
     * @param externalValue A string representing the externalValue
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateRelatedRecordUsingExternalId(externalFieldValue, externalValue, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(externalValue.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.relatedListAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(externalFieldValue.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        await handlerInstance.addHeader(new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordUsingExternalIDHeader"), this.xExternal);
        await utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to delete related record using external id
     * @param externalFieldValue A string representing the externalFieldValue
     * @param externalValue A string representing the externalValue
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async deleteRelatedRecordUsingExternalId(externalFieldValue, externalValue) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(this.moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(externalValue.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(this.relatedListAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(externalFieldValue.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        await handlerInstance.addHeader(new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DeleteRelatedRecordUsingExternalIDHeader"), this.xExternal);
        await utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
}
exports.MasterModel = RelatedRecordsOperations;
exports.RelatedRecordsOperations = RelatedRecordsOperations;
class GetRelatedRecordsHeader {
}
exports.GetRelatedRecordsHeader = GetRelatedRecordsHeader;
GetRelatedRecordsHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsHeader");
class GetRelatedRecordsParam {
}
exports.GetRelatedRecordsParam = GetRelatedRecordsParam;
GetRelatedRecordsParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam");
GetRelatedRecordsParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam");
class UpdateRelatedRecordsHeader {
}
exports.UpdateRelatedRecordsHeader = UpdateRelatedRecordsHeader;
class DelinkRecordsHeader {
}
exports.DelinkRecordsHeader = DelinkRecordsHeader;
class DelinkRecordsParam {
}
exports.DelinkRecordsParam = DelinkRecordsParam;
DelinkRecordsParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.RelatedRecords.DelinkRecordsParam");
class GetRelatedRecordsUsingExternalIDHeader {
}
exports.GetRelatedRecordsUsingExternalIDHeader = GetRelatedRecordsUsingExternalIDHeader;
GetRelatedRecordsUsingExternalIDHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDHeader");
class GetRelatedRecordsUsingExternalIDParam {
}
exports.GetRelatedRecordsUsingExternalIDParam = GetRelatedRecordsUsingExternalIDParam;
GetRelatedRecordsUsingExternalIDParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDParam");
GetRelatedRecordsUsingExternalIDParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDParam");
class UpdateRelatedRecordsUsingExternalIDHeader {
}
exports.UpdateRelatedRecordsUsingExternalIDHeader = UpdateRelatedRecordsUsingExternalIDHeader;
class DeleteRelatedRecordsUsingExternalIDHeader {
}
exports.DeleteRelatedRecordsUsingExternalIDHeader = DeleteRelatedRecordsUsingExternalIDHeader;
class DeleteRelatedRecordsUsingExternalIDParam {
}
exports.DeleteRelatedRecordsUsingExternalIDParam = DeleteRelatedRecordsUsingExternalIDParam;
DeleteRelatedRecordsUsingExternalIDParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.RelatedRecords.DeleteRelatedRecordsUsingExternalIDParam");
class GetRelatedRecordHeader {
}
exports.GetRelatedRecordHeader = GetRelatedRecordHeader;
GetRelatedRecordHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordHeader");
class UpdateRelatedRecordHeader {
}
exports.UpdateRelatedRecordHeader = UpdateRelatedRecordHeader;
class DelinkRecordHeader {
}
exports.DelinkRecordHeader = DelinkRecordHeader;
class GetRelatedRecordUsingExternalIDHeader {
}
exports.GetRelatedRecordUsingExternalIDHeader = GetRelatedRecordUsingExternalIDHeader;
GetRelatedRecordUsingExternalIDHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordUsingExternalIDHeader");
class UpdateRelatedRecordUsingExternalIDHeader {
}
exports.UpdateRelatedRecordUsingExternalIDHeader = UpdateRelatedRecordUsingExternalIDHeader;
class DeleteRelatedRecordUsingExternalIDHeader {
}
exports.DeleteRelatedRecordUsingExternalIDHeader = DeleteRelatedRecordUsingExternalIDHeader;
//# sourceMappingURL=related_records_operations.js.map