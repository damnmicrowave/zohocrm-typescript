"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecordUsingExternalIDHeader = exports.DeleteRecordUsingExternalIDHeader = exports.GetDeletedRecordsHeader = exports.RecordOperations = exports.MasterModel = exports.DeleteRecordsHeader = exports.DeleteRecordsParam = exports.DeleteRecordHeader = exports.SearchRecordsHeader = exports.UpdateRecordsHeader = exports.DeleteRecordParam = exports.SearchRecordsParam = exports.GetRecordsParam = exports.UpdateRecordHeader = exports.GetMassUpdateStatusParam = exports.UpdateRecordUsingExternalIDHeader = exports.GetDeletedRecordsParam = exports.GetRecordUsingExternalIDParam = exports.GetRecordHeader = exports.GetRecordsHeader = exports.DeleteRecordUsingExternalIDParam = exports.UpsertRecordsHeader = exports.CreateRecordsHeader = exports.GetRecordParam = void 0;
const header_1 = require("../../../../../../routes/header");
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const utility_1 = require("../../../../../../utils/util/utility");
const constants_1 = require("../../../../../../utils/util/constants");
class RecordOperations {
    /**
     * The method to get record
     * @param id A bigint representing the id
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getRecord(id, moduleAPIName, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        handlerInstance.setModuleAPIName(moduleAPIName);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to update record
     * @param id A bigint representing the id
     * @param moduleAPIName A string representing the moduleAPIName
     * @param request An instance of BodyWrapper
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateRecord(id, moduleAPIName, request, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setHeader(headerInstance);
        handlerInstance.setModuleAPIName(moduleAPIName);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to delete record
     * @param id A bigint representing the id
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async deleteRecord(id, moduleAPIName, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to get records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getRecords(moduleAPIName, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        handlerInstance.setModuleAPIName(moduleAPIName);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to create records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param request An instance of BodyWrapper
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async createRecords(moduleAPIName, request, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setHeader(headerInstance);
        handlerInstance.setModuleAPIName(moduleAPIName);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to update records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param request An instance of BodyWrapper
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateRecords(moduleAPIName, request, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setHeader(headerInstance);
        handlerInstance.setModuleAPIName(moduleAPIName);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to delete records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async deleteRecords(moduleAPIName, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to upsert records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param request An instance of BodyWrapper
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async upsertRecords(moduleAPIName, request, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/upsert");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_ACTION);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setHeader(headerInstance);
        handlerInstance.setModuleAPIName(moduleAPIName);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to get deleted records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<DeletedRecordsHandler>
     * @throws SDKException
     */
    async getDeletedRecords(moduleAPIName, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/deleted");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let DeletedRecordsHandler = require.resolve("./deleted_records_handler");
        return handlerInstance.apiCall(DeletedRecordsHandler, "application/json");
    }
    /**
     * The method to search records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async searchRecords(moduleAPIName, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/search");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        handlerInstance.setModuleAPIName(moduleAPIName);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to convert lead
     * @param id A bigint representing the id
     * @param request An instance of ConvertBodyWrapper
     * @returns An instance of APIResponse<ConvertActionHandler>
     * @throws SDKException
     */
    async convertLead(id, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Leads/");
        apiPath = apiPath.concat(id.toString());
        apiPath = apiPath.concat("/actions/convert");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setMandatoryChecker(true);
        await utility_1.Utility.getFields("Deals", handlerInstance);
        let ConvertActionHandler = require.resolve("./convert_action_handler");
        return handlerInstance.apiCall(ConvertActionHandler, "application/json");
    }
    /**
     * The method to get photo
     * @param id A bigint representing the id
     * @param moduleAPIName A string representing the moduleAPIName
     * @returns An instance of APIResponse<DownloadHandler>
     * @throws SDKException
     */
    async getPhoto(id, moduleAPIName) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(id.toString());
        apiPath = apiPath.concat("/photo");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let DownloadHandler = require.resolve("./download_handler");
        return handlerInstance.apiCall(DownloadHandler, "application/x-download");
    }
    /**
     * The method to upload photo
     * @param id A bigint representing the id
     * @param moduleAPIName A string representing the moduleAPIName
     * @param request An instance of FileBodyWrapper
     * @returns An instance of APIResponse<FileHandler>
     * @throws SDKException
     */
    async uploadPhoto(id, moduleAPIName, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(id.toString());
        apiPath = apiPath.concat("/photo");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
        handlerInstance.setContentType("multipart/form-data");
        handlerInstance.setRequest(request);
        handlerInstance.setMandatoryChecker(true);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        await utility_1.Utility.verifyPhotoSupport(moduleAPIName);
        let FileHandler = require.resolve("./file_handler");
        return handlerInstance.apiCall(FileHandler, "application/json");
    }
    /**
     * The method to delete photo
     * @param id A bigint representing the id
     * @param moduleAPIName A string representing the moduleAPIName
     * @returns An instance of APIResponse<FileHandler>
     * @throws SDKException
     */
    async deletePhoto(id, moduleAPIName) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(id.toString());
        apiPath = apiPath.concat("/photo");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let FileHandler = require.resolve("./file_handler");
        return handlerInstance.apiCall(FileHandler, "application/json");
    }
    /**
     * The method to mass update records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param request An instance of MassUpdateBodyWrapper
     * @returns An instance of APIResponse<MassUpdateActionHandler>
     * @throws SDKException
     */
    async massUpdateRecords(moduleAPIName, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/actions/mass_update");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setMandatoryChecker(true);
        handlerInstance.setModuleAPIName(moduleAPIName);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let MassUpdateActionHandler = require.resolve("./mass_update_action_handler");
        return handlerInstance.apiCall(MassUpdateActionHandler, "application/json");
    }
    /**
     * The method to get mass update status
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<MassUpdateResponseHandler>
     * @throws SDKException
     */
    async getMassUpdateStatus(moduleAPIName, paramInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/actions/mass_update");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let MassUpdateResponseHandler = require.resolve("./mass_update_response_handler");
        return handlerInstance.apiCall(MassUpdateResponseHandler, "application/json");
    }
    /**
     * The method to get record using external id
     * @param externalFieldValue A string representing the externalFieldValue
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getRecordUsingExternalId(externalFieldValue, moduleAPIName, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(externalFieldValue.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        handlerInstance.setModuleAPIName(moduleAPIName);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to update record using external id
     * @param externalFieldValue A string representing the externalFieldValue
     * @param moduleAPIName A string representing the moduleAPIName
     * @param request An instance of BodyWrapper
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateRecordUsingExternalId(externalFieldValue, moduleAPIName, request, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(externalFieldValue.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        handlerInstance.setHeader(headerInstance);
        handlerInstance.setModuleAPIName(moduleAPIName);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to delete record using external id
     * @param externalFieldValue A string representing the externalFieldValue
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async deleteRecordUsingExternalId(externalFieldValue, moduleAPIName, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/");
        apiPath = apiPath.concat(moduleAPIName.toString());
        apiPath = apiPath.concat("/");
        apiPath = apiPath.concat(externalFieldValue.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        await utility_1.Utility.getFields(moduleAPIName, handlerInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
}
exports.MasterModel = RecordOperations;
exports.RecordOperations = RecordOperations;
class GetRecordParam {
}
exports.GetRecordParam = GetRecordParam;
GetRecordParam.APPROVED = new param_1.Param("approved", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.CONVERTED = new param_1.Param("converted", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.CVID = new param_1.Param("cvid", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.UID = new param_1.Param("uid", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.FIELDS = new param_1.Param("fields", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.STARTDATETIME = new param_1.Param("startDateTime", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.ENDDATETIME = new param_1.Param("endDateTime", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.TERRITORY_ID = new param_1.Param("territory_id", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.INCLUDE_CHILD = new param_1.Param("include_child", "com.zoho.crm.api.Record.GetRecordParam");
class GetRecordHeader {
}
exports.GetRecordHeader = GetRecordHeader;
GetRecordHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordHeader");
GetRecordHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordHeader");
class UpdateRecordHeader {
}
exports.UpdateRecordHeader = UpdateRecordHeader;
UpdateRecordHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordHeader");
class DeleteRecordParam {
}
exports.DeleteRecordParam = DeleteRecordParam;
DeleteRecordParam.WF_TRIGGER = new param_1.Param("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordParam");
class DeleteRecordHeader {
}
exports.DeleteRecordHeader = DeleteRecordHeader;
DeleteRecordHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordHeader");
class GetRecordsParam {
}
exports.GetRecordsParam = GetRecordsParam;
GetRecordsParam.APPROVED = new param_1.Param("approved", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.CONVERTED = new param_1.Param("converted", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.CVID = new param_1.Param("cvid", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.UID = new param_1.Param("uid", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.FIELDS = new param_1.Param("fields", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.SORT_BY = new param_1.Param("sort_by", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.SORT_ORDER = new param_1.Param("sort_order", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.STARTDATETIME = new param_1.Param("startDateTime", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.ENDDATETIME = new param_1.Param("endDateTime", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.TERRITORY_ID = new param_1.Param("territory_id", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.INCLUDE_CHILD = new param_1.Param("include_child", "com.zoho.crm.api.Record.GetRecordsParam");
class GetRecordsHeader {
}
exports.GetRecordsHeader = GetRecordsHeader;
GetRecordsHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordsHeader");
GetRecordsHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordsHeader");
class CreateRecordsHeader {
}
exports.CreateRecordsHeader = CreateRecordsHeader;
CreateRecordsHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.CreateRecordsHeader");
class UpdateRecordsHeader {
}
exports.UpdateRecordsHeader = UpdateRecordsHeader;
UpdateRecordsHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordsHeader");
class DeleteRecordsParam {
}
exports.DeleteRecordsParam = DeleteRecordsParam;
DeleteRecordsParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.Record.DeleteRecordsParam");
DeleteRecordsParam.WF_TRIGGER = new param_1.Param("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordsParam");
class DeleteRecordsHeader {
}
exports.DeleteRecordsHeader = DeleteRecordsHeader;
DeleteRecordsHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordsHeader");
class UpsertRecordsHeader {
}
exports.UpsertRecordsHeader = UpsertRecordsHeader;
UpsertRecordsHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpsertRecordsHeader");
class GetDeletedRecordsParam {
}
exports.GetDeletedRecordsParam = GetDeletedRecordsParam;
GetDeletedRecordsParam.TYPE = new param_1.Param("type", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
GetDeletedRecordsParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
GetDeletedRecordsParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
class GetDeletedRecordsHeader {
}
exports.GetDeletedRecordsHeader = GetDeletedRecordsHeader;
GetDeletedRecordsHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Record.GetDeletedRecordsHeader");
class SearchRecordsParam {
}
exports.SearchRecordsParam = SearchRecordsParam;
SearchRecordsParam.CRITERIA = new param_1.Param("criteria", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.EMAIL = new param_1.Param("email", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.PHONE = new param_1.Param("phone", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.WORD = new param_1.Param("word", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.CONVERTED = new param_1.Param("converted", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.APPROVED = new param_1.Param("approved", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.FIELDS = new param_1.Param("fields", "com.zoho.crm.api.Record.SearchRecordsParam");
class SearchRecordsHeader {
}
exports.SearchRecordsHeader = SearchRecordsHeader;
SearchRecordsHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.SearchRecordsHeader");
class GetMassUpdateStatusParam {
}
exports.GetMassUpdateStatusParam = GetMassUpdateStatusParam;
GetMassUpdateStatusParam.JOB_ID = new param_1.Param("job_id", "com.zoho.crm.api.Record.GetMassUpdateStatusParam");
class GetRecordUsingExternalIDParam {
}
exports.GetRecordUsingExternalIDParam = GetRecordUsingExternalIDParam;
GetRecordUsingExternalIDParam.APPROVED = new param_1.Param("approved", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
GetRecordUsingExternalIDParam.CONVERTED = new param_1.Param("converted", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
GetRecordUsingExternalIDParam.CVID = new param_1.Param("cvid", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
GetRecordUsingExternalIDParam.UID = new param_1.Param("uid", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
GetRecordUsingExternalIDParam.FIELDS = new param_1.Param("fields", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
GetRecordUsingExternalIDParam.STARTDATETIME = new param_1.Param("startDateTime", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
GetRecordUsingExternalIDParam.ENDDATETIME = new param_1.Param("endDateTime", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
GetRecordUsingExternalIDParam.TERRITORY_ID = new param_1.Param("territory_id", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
GetRecordUsingExternalIDParam.INCLUDE_CHILD = new param_1.Param("include_child", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
class GetRecordUsingExternalIDHeader {
}
exports.GetRecordUsingExternalIDHeader = GetRecordUsingExternalIDHeader;
GetRecordUsingExternalIDHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordUsingExternalIDHeader");
GetRecordUsingExternalIDHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordUsingExternalIDHeader");
class UpdateRecordUsingExternalIDHeader {
}
exports.UpdateRecordUsingExternalIDHeader = UpdateRecordUsingExternalIDHeader;
UpdateRecordUsingExternalIDHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordUsingExternalIDHeader");
class DeleteRecordUsingExternalIDParam {
}
exports.DeleteRecordUsingExternalIDParam = DeleteRecordUsingExternalIDParam;
DeleteRecordUsingExternalIDParam.WF_TRIGGER = new param_1.Param("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordUsingExternalIDParam");
class DeleteRecordUsingExternalIDHeader {
}
exports.DeleteRecordUsingExternalIDHeader = DeleteRecordUsingExternalIDHeader;
DeleteRecordUsingExternalIDHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordUsingExternalIDHeader");
//# sourceMappingURL=record_operations.js.map