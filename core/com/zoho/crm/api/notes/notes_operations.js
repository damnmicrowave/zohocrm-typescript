"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteNotesParam = exports.NotesOperations = exports.MasterModel = exports.GetNotesParam = exports.GetNoteHeader = exports.GetNoteParam = exports.GetNotesHeader = void 0;
const header_1 = require("../../../../../../routes/header");
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class NotesOperations {
    /**
     * The method to get notes
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getNotes(paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Notes");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to create notes
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async createNotes(request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Notes");
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
     * The method to update notes
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateNotes(request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Notes");
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
     * The method to delete notes
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async deleteNotes(paramInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Notes");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setParam(paramInstance);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to get note
     * @param id A bigint representing the id
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getNote(id, paramInstance, headerInstance) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Notes/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        handlerInstance.setHeader(headerInstance);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to update note
     * @param id A bigint representing the id
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async updateNote(id, request) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Notes/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
        handlerInstance.setContentType("application/json");
        handlerInstance.setRequest(request);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
    /**
     * The method to delete note
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    async deleteNote(id) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/Notes/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
        let ActionHandler = require.resolve("./action_handler");
        return handlerInstance.apiCall(ActionHandler, "application/json");
    }
}
exports.MasterModel = NotesOperations;
exports.NotesOperations = NotesOperations;
class GetNotesParam {
}
exports.GetNotesParam = GetNotesParam;
GetNotesParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.Notes.GetNotesParam");
GetNotesParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.Notes.GetNotesParam");
GetNotesParam.FIELDS = new param_1.Param("fields", "com.zoho.crm.api.Notes.GetNotesParam");
class GetNotesHeader {
}
exports.GetNotesHeader = GetNotesHeader;
GetNotesHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Notes.GetNotesHeader");
class DeleteNotesParam {
}
exports.DeleteNotesParam = DeleteNotesParam;
DeleteNotesParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.Notes.DeleteNotesParam");
class GetNoteParam {
}
exports.GetNoteParam = GetNoteParam;
GetNoteParam.FIELDS = new param_1.Param("fields", "com.zoho.crm.api.Notes.GetNoteParam");
class GetNoteHeader {
}
exports.GetNoteHeader = GetNoteHeader;
GetNoteHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Notes.GetNoteHeader");
//# sourceMappingURL=notes_operations.js.map