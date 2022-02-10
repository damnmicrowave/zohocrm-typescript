"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesOperations = exports.MasterModel = exports.GetProfileHeader = exports.GetProfilesHeader = void 0;
const header_1 = require("../../../../../../routes/header");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class ProfilesOperations {
    /**
     * Creates an instance of ProfilesOperations with the given parameters
     * @param ifModifiedSince An instance of Date
     */
    constructor(ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
    }
    /**
     * The method to get profiles
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getProfiles() {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/profiles");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addHeader(new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Profiles.GetProfilesHeader"), this.ifModifiedSince);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
    /**
     * The method to get profile
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    async getProfile(id) {
        let handlerInstance = new common_api_handler_1.CommonAPIHandler();
        let apiPath = '';
        apiPath = apiPath.concat("/crm/v2/settings/profiles/");
        apiPath = apiPath.concat(id.toString());
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
        await handlerInstance.addHeader(new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Profiles.GetProfileHeader"), this.ifModifiedSince);
        let ResponseHandler = require.resolve("./response_handler");
        return handlerInstance.apiCall(ResponseHandler, "application/json");
    }
}
exports.MasterModel = ProfilesOperations;
exports.ProfilesOperations = ProfilesOperations;
class GetProfilesHeader {
}
exports.GetProfilesHeader = GetProfilesHeader;
class GetProfileHeader {
}
exports.GetProfileHeader = GetProfileHeader;
//# sourceMappingURL=profiles_operations.js.map