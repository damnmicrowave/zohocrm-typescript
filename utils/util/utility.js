"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = exports.MasterModel = void 0;
const sdk_exception_1 = require("../../core/com/zoho/crm/api/exception/sdk_exception");
const header_map_1 = require("../../routes/header_map");
const initializer_1 = require("../../routes/initializer");
const constants_1 = require("./constants");
const path = __importStar(require("path"));
const converter_1 = require("./converter");
const Logger = __importStar(require("winston"));
const faunadb_1 = __importStar(require("faunadb"));
const db = new faunadb_1.Client({
    secret: process.env.FAUNADB_SERVER,
    domain: 'db.eu.fauna.com'
});
/**
 * This class handles module field details.
 */
class Utility {
    static async assertNotNull(value, errorCode, errorMessage) {
        if (value == null) {
            throw new sdk_exception_1.SDKException(errorCode, errorMessage);
        }
    }
    static async fileExistsFlow(moduleAPIName, lastModifiedTime) {
        let initializer = await initializer_1.Initializer.getInitializer();
        if (!initializer.getSDKConfig().getAutoRefreshFields() && this.forceRefresh && !this.getModifiedModules) {
            this.getModifiedModules = true;
            await Utility.modifyFields(lastModifiedTime);
            this.getModifiedModules = false;
        }
        let recordFieldDetailsJson = await this.retrieveFields();
        if (moduleAPIName == null || (recordFieldDetailsJson.hasOwnProperty(moduleAPIName.toLowerCase()) && recordFieldDetailsJson[moduleAPIName.toLowerCase()] != null)) {
            return;
        }
        else {
            await Utility.fillDataType();
            recordFieldDetailsJson[moduleAPIName.toLowerCase()] = {};
            await this.saveFields(recordFieldDetailsJson);
            let fieldsDetails = await Utility.getFieldsDetails(moduleAPIName);
            recordFieldDetailsJson = await this.retrieveFields();
            recordFieldDetailsJson[moduleAPIName.toLowerCase()] = fieldsDetails;
            await this.saveFields(recordFieldDetailsJson);
        }
    }
    static async verifyModuleAPIName(moduleName) {
        if (moduleName != null && constants_1.Constants.DEFAULT_MODULENAME_VS_APINAME.has(moduleName.toLowerCase()) && constants_1.Constants.DEFAULT_MODULENAME_VS_APINAME.get(moduleName.toLowerCase()) != null) {
            return constants_1.Constants.DEFAULT_MODULENAME_VS_APINAME.get(moduleName.toLowerCase());
        }
        if (moduleName != null) {
            let fieldsJSON = await this.retrieveFields();
            if (fieldsJSON.hasOwnProperty(constants_1.Constants.SDK_MODULE_METADATA) && fieldsJSON[constants_1.Constants.SDK_MODULE_METADATA].hasOwnProperty(moduleName.toLowerCase())) {
                let moduleMeta = fieldsJSON[constants_1.Constants.SDK_MODULE_METADATA];
                return moduleMeta[moduleName.toLowerCase()][constants_1.Constants.API_NAME];
            }
        }
        return moduleName;
    }
    static async setHandlerAPIPath(moduleAPIName, handlerInstance) {
        if (handlerInstance == null) {
            return;
        }
        let apiPath = handlerInstance.getAPIPath();
        if (moduleAPIName != null && apiPath.toLowerCase().includes(moduleAPIName.toLowerCase())) {
            let apiPathSplit = apiPath.split('/');
            for (var i = 0; i < apiPathSplit.length; i++) {
                if (apiPathSplit[i] != undefined) {
                    if (apiPathSplit[i].toLowerCase() == moduleAPIName.toLowerCase()) {
                        apiPathSplit[i] = moduleAPIName;
                    }
                    else if (constants_1.Constants.DEFAULT_MODULENAME_VS_APINAME.has(apiPathSplit[i].toLowerCase()) && constants_1.Constants.DEFAULT_MODULENAME_VS_APINAME.get(apiPathSplit[i].toLowerCase()) != null) {
                        apiPathSplit[i] = constants_1.Constants.DEFAULT_MODULENAME_VS_APINAME.get(apiPathSplit[i].toLowerCase());
                    }
                }
            }
            apiPath = apiPathSplit.join('/');
            handlerInstance.setAPIPath(apiPath);
        }
    }
    /**
     * This method to fetch field details of the current module for the current user and store the result in a JSON file.
     * @param {string} moduleAPIName - A String containing the CRM module API name.
     * @param {CommonAPIHandler} handlerInstance - A String containing CommonAPIHandler Instance.
     */
    static async getFields(moduleAPIName, handlerInstance) {
        this.moduleAPIName = moduleAPIName;
        await this.getFieldsInfo(moduleAPIName, handlerInstance);
    }
    static async retrieveFields() {
        const crmInfo = await db.query(faunadb_1.default.Get(faunadb_1.default.Documents(faunadb_1.default.Collection('crm-resources'))));
        return crmInfo.data.fields;
    }
    static async saveFields(fields) {
        const crmInfo = await db.query(faunadb_1.default.Get(faunadb_1.default.Documents(faunadb_1.default.Collection('crm-resources'))));
        await db.query(faunadb_1.default.Update(crmInfo.ref, {
            data: {
                fields
            }
        }));
    }
    /**
     * This method to fetch field details of the current module for the current user and store the result in a JSON file.
     * @param {string} moduleAPIName - A String containing the CRM module API name.
     * @param {CommonAPIHandler} handlerInstance - A String containing CommonAPIHandler Instance.
     */
    static async getFieldsInfo(moduleAPIName, handlerInstance) {
        let lastModifiedTime = null;
        try {
            if (moduleAPIName != null && await Utility.searchJSONDetails(moduleAPIName) != null) {
                return;
            }
            moduleAPIName = await Utility.verifyModuleAPIName(moduleAPIName);
            await Utility.setHandlerAPIPath(moduleAPIName, handlerInstance);
            if (handlerInstance != null && handlerInstance.getModuleAPIName() == null && (moduleAPIName != null && !constants_1.Constants.SKIP_MODULES.includes(moduleAPIName.toLowerCase()))) {
                return;
            }
            await Utility.fileExistsFlow(moduleAPIName, lastModifiedTime);
            if (this.forceRefresh && !this.getModifiedModules) {
                //New file - and force refresh by Users
                this.getModifiedModules = true;
                let recordFieldDetailsJson = {};
                await this.saveFields(recordFieldDetailsJson);
                await Utility.modifyFields(lastModifiedTime);
                this.getModifiedModules = false;
            }
            else {
                await Utility.fillDataType();
                let recordFieldDetailsJson = {};
                if (moduleAPIName !== null) {
                    recordFieldDetailsJson[moduleAPIName.toLowerCase()] = {};
                    await this.saveFields(recordFieldDetailsJson);
                    let fieldsDetails = await Utility.getFieldsDetails(moduleAPIName);
                    recordFieldDetailsJson = await this.retrieveFields();
                    recordFieldDetailsJson[moduleAPIName.toLowerCase()] = fieldsDetails;
                    await this.saveFields(recordFieldDetailsJson);
                }
            }
        }
        catch (error) {
            try {
                let recordFieldDetailsJson = await this.retrieveFields();
                if (moduleAPIName !== null && recordFieldDetailsJson.hasOwnProperty(moduleAPIName.toLowerCase())) {
                    delete recordFieldDetailsJson[moduleAPIName.toLowerCase()];
                }
                if (this.newFile) {
                    if (recordFieldDetailsJson.hasOwnProperty(constants_1.Constants.FIELDS_LAST_MODIFIED_TIME)) {
                        delete recordFieldDetailsJson[constants_1.Constants.FIELDS_LAST_MODIFIED_TIME];
                    }
                    this.newFile = false;
                }
                if (this.getModifiedModules || this.forceRefresh) {
                    this.getModifiedModules = false;
                    this.forceRefresh = false;
                    if (lastModifiedTime != null) {
                        recordFieldDetailsJson[constants_1.Constants.FIELDS_LAST_MODIFIED_TIME] = lastModifiedTime;
                    }
                }
                await this.saveFields(recordFieldDetailsJson);
            }
            catch (error) {
                error = new sdk_exception_1.SDKException(null, null, null, error);
                Logger.error(constants_1.Constants.EXCEPTION, error);
                throw error;
            }
            if (!(error instanceof sdk_exception_1.SDKException)) {
                error = new sdk_exception_1.SDKException(null, null, null, error);
            }
            Logger.error(constants_1.Constants.EXCEPTION, error);
            throw error;
        }
    }
    static async modifyFields(modifiedTime) {
        let modifiedModules = await this.getModules(modifiedTime);
        let recordFieldDetailsJson = await this.retrieveFields();
        recordFieldDetailsJson[constants_1.Constants.FIELDS_LAST_MODIFIED_TIME] = new Date().getTime();
        await this.saveFields(recordFieldDetailsJson);
        if (Object.keys(modifiedModules).length > 0) {
            for (let module in modifiedModules) {
                if (recordFieldDetailsJson.hasOwnProperty(module.toLowerCase())) {
                    delete recordFieldDetailsJson[module];
                }
            }
            await this.saveFields(recordFieldDetailsJson);
            for (let module in modifiedModules) {
                let moduleData = modifiedModules[module];
                await Utility.getFieldsInfo(moduleData[constants_1.Constants.API_NAME], null);
            }
        }
    }
    static async deleteFields(recordFieldDetailsJson, module) {
        let subformModules = [];
        let fieldsJSON = recordFieldDetailsJson[module.toLowerCase()];
        for (let keyName of Object.keys(fieldsJSON)) {
            if (fieldsJSON[keyName].hasOwnProperty(constants_1.Constants.SUBFORM) && fieldsJSON[keyName][constants_1.Constants.SUBFORM] == true && recordFieldDetailsJson.hasOwnProperty((fieldsJSON[keyName][constants_1.Constants.MODULE]).toLowerCase())) {
                subformModules.push(fieldsJSON[keyName][constants_1.Constants.MODULE]);
            }
        }
        delete recordFieldDetailsJson[module.toLowerCase()];
        if (subformModules.length > 0) {
            for (let subformModule of subformModules) {
                await this.deleteFields(recordFieldDetailsJson, subformModule);
            }
        }
    }
    static async getFileName() {
        let initializer = await initializer_1.Initializer.getInitializer();
        return path.join(initializer.getResourcePath(), constants_1.Constants.FIELD_DETAILS_DIRECTORY, await converter_1.Converter.getEncodedFileName());
    }
    static async getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler) {
        try {
            let isnewData = false;
            let key = (moduleAPIName + constants_1.Constants.UNDERSCORE + constants_1.Constants.RELATED_LISTS).toLowerCase();
            let recordFieldDetailsJSON = await this.retrieveFields();
            if ((!recordFieldDetailsJSON.hasOwnProperty(key) || (recordFieldDetailsJSON[key] == null) || recordFieldDetailsJSON[key].length <= 0)) {
                isnewData = true;
                moduleAPIName = await Utility.verifyModuleAPIName(moduleAPIName);
                let relatedListValues = await this.getRelatedListDetails(moduleAPIName);
                let recordFieldDetailsJSON = await this.retrieveFields();
                recordFieldDetailsJSON[key] = relatedListValues;
                await this.saveFields(recordFieldDetailsJSON);
            }
            recordFieldDetailsJSON = await this.retrieveFields();
            let moduleRelatedList = recordFieldDetailsJSON.hasOwnProperty(key) ? recordFieldDetailsJSON[key] : {};
            if (!(await this.checkRelatedListExists(relatedModuleName, moduleRelatedList, commonAPIHandler)) && !isnewData) {
                delete recordFieldDetailsJSON[key];
                await this.saveFields(recordFieldDetailsJSON);
                await Utility.getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler);
            }
        }
        catch (error) {
            if (!(error instanceof sdk_exception_1.SDKException)) {
                error = new sdk_exception_1.SDKException(null, null, null, error);
            }
            Logger.error(constants_1.Constants.EXCEPTION, error);
            throw error;
        }
    }
    static async checkRelatedListExists(relatedModuleName, modulerelatedListArray, commonAPIHandler) {
        for (let index = 0; index < modulerelatedListArray.length; index++) {
            const relatedListObject = modulerelatedListArray[index];
            if (relatedListObject[constants_1.Constants.API_NAME] != null && relatedListObject[constants_1.Constants.API_NAME].toLowerCase() == relatedModuleName.toLowerCase()) {
                if (relatedListObject[constants_1.Constants.HREF].toLowerCase() == constants_1.Constants.NULL_VALUE) {
                    throw new sdk_exception_1.SDKException(constants_1.Constants.UNSUPPORTED_IN_API, commonAPIHandler.getHttpMethod() + ' ' + commonAPIHandler.getAPIPath() + constants_1.Constants.UNSUPPORTED_IN_API_MESSAGE);
                }
                if (relatedListObject[constants_1.Constants.MODULE].toLowerCase() != constants_1.Constants.NULL_VALUE) {
                    commonAPIHandler.setModuleAPIName(relatedListObject[constants_1.Constants.MODULE]);
                    await Utility.getFieldsInfo(relatedListObject[constants_1.Constants.MODULE], commonAPIHandler);
                }
                return true;
            }
        }
        return false;
    }
    static async getRelatedListDetails(moduleAPIName) {
        let RelatedListsOperations = (await Promise.resolve().then(() => __importStar(require('../../core/com/zoho/crm/api/related_lists/related_lists_operations')))).RelatedListsOperations;
        let ResponseWrapper = (await Promise.resolve().then(() => __importStar(require('../../core/com/zoho/crm/api/related_lists/response_wrapper')))).ResponseWrapper;
        let APIException = (await Promise.resolve().then(() => __importStar(require('../../core/com/zoho/crm/api/related_lists/api_exception')))).APIException;
        let relatedListArray = [];
        let response = await new RelatedListsOperations(moduleAPIName).getRelatedLists();
        if (response !== null) {
            if (response.getStatusCode() === constants_1.Constants.NO_CONTENT_STATUS_CODE) {
                return relatedListArray;
            }
            let responseObject = response.getObject();
            if (responseObject !== null) {
                if (responseObject instanceof ResponseWrapper) {
                    let relatedLists = responseObject.getRelatedLists();
                    relatedLists.forEach(relatedList => {
                        let relatedListDetail = {};
                        relatedListDetail[constants_1.Constants.API_NAME] = relatedList.getAPIName();
                        relatedListDetail[constants_1.Constants.MODULE] = relatedList.getModule() != null ? relatedList.getModule() : constants_1.Constants.NULL_VALUE;
                        relatedListDetail[constants_1.Constants.NAME] = relatedList.getName();
                        relatedListDetail[constants_1.Constants.HREF] = relatedList.getHref() != null ? relatedList.getHref() : constants_1.Constants.NULL_VALUE;
                        relatedListArray.push(relatedListDetail);
                    });
                }
                else if (responseObject instanceof APIException) {
                    let errorResponse = {};
                    errorResponse[constants_1.Constants.CODE] = responseObject.getCode().getValue();
                    errorResponse[constants_1.Constants.STATUS] = responseObject.getStatus().getValue();
                    errorResponse[constants_1.Constants.MESSAGE] = responseObject.getMessage().getValue();
                    throw new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
                }
                else {
                    let errorResponse = {};
                    errorResponse[constants_1.Constants.CODE] = response.getStatusCode();
                    throw new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
                }
            }
            else {
                let errorResponse = {};
                errorResponse[constants_1.Constants.CODE] = response.getStatusCode();
                throw new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
            }
        }
        return relatedListArray;
    }
    /**
     * This method is to get module field data from Zoho CRM.
     * @param {string} moduleAPIName - A String containing the CRM module API name.
     * @returns {object} An Object representing the Zoho CRM module field details.
     */
    static async getFieldsDetails(moduleAPIName) {
        let FieldOperations = (await Promise.resolve().then(() => __importStar(require('../../core/com/zoho/crm/api/fields/fields_operations')))).FieldsOperations;
        let FieldsResponseWrapper = (await Promise.resolve().then(() => __importStar(require('../../core/com/zoho/crm/api/fields/response_wrapper')))).ResponseWrapper;
        let APIException = (await Promise.resolve().then(() => __importStar(require('../../core/com/zoho/crm/api/fields/api_exception')))).APIException;
        let response = await new FieldOperations(moduleAPIName).getFields();
        let fieldsDetails = {};
        if (response !== null) {
            if (response.getStatusCode() == constants_1.Constants.NO_CONTENT_STATUS_CODE) {
                return fieldsDetails;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof FieldsResponseWrapper) {
                    let fields = responseObject.getFields();
                    for (let field of fields) {
                        let keyName = field.getAPIName();
                        if (constants_1.Constants.KEYS_TO_SKIP.includes(keyName)) {
                            continue;
                        }
                        var fieldDetail = {};
                        await Utility.setDataType(fieldDetail, field, moduleAPIName);
                        fieldsDetails[field.getAPIName()] = fieldDetail;
                    }
                    if (constants_1.Constants.INVENTORY_MODULES.includes(moduleAPIName.toLowerCase())) {
                        let fieldDetail = {};
                        fieldDetail[constants_1.Constants.NAME] = constants_1.Constants.LINE_TAX;
                        fieldDetail[constants_1.Constants.TYPE] = constants_1.Constants.LIST_NAMESPACE;
                        fieldDetail[constants_1.Constants.STRUCTURE_NAME] = constants_1.Constants.LINE_TAX_NAMESPACE;
                        fieldsDetails[constants_1.Constants.LINE_TAX] = fieldDetail;
                    }
                    if (moduleAPIName.toLowerCase() == constants_1.Constants.NOTES) {
                        let fieldDetail = {};
                        fieldDetail[constants_1.Constants.NAME] = constants_1.Constants.ATTACHMENTS;
                        fieldDetail[constants_1.Constants.TYPE] = constants_1.Constants.LIST_NAMESPACE;
                        fieldDetail[constants_1.Constants.STRUCTURE_NAME] = constants_1.Constants.ATTACHMENTS_NAMESPACE;
                        fieldsDetails[constants_1.Constants.ATTACHMENTS] = fieldDetail;
                    }
                }
                else if (responseObject instanceof APIException) {
                    let errorResponse = {};
                    errorResponse[constants_1.Constants.CODE] = responseObject.getCode().getValue();
                    errorResponse[constants_1.Constants.STATUS] = responseObject.getStatus().getValue();
                    errorResponse[constants_1.Constants.MESSAGE] = responseObject.getMessage().getValue();
                    let exception = new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
                    if (this.moduleAPIName != null && this.moduleAPIName.toLowerCase() == moduleAPIName.toLowerCase()) {
                        throw exception;
                    }
                    Logger.error(constants_1.Constants.API_EXCEPTION, exception);
                }
            }
            else {
                let errorResponse = {};
                errorResponse[constants_1.Constants.CODE] = response.getStatusCode();
                throw new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
            }
        }
        return fieldsDetails;
    }
    static async searchJSONDetails(key) {
        key = constants_1.Constants.PACKAGE_NAMESPACE + '/record/' + key;
        var jsonDetails = initializer_1.Initializer.jsonDetails;
        for (let keyInJSON in jsonDetails) {
            if (keyInJSON.toLowerCase() == key.toLowerCase()) {
                let returnJSON = {};
                returnJSON[constants_1.Constants.MODULEPACKAGENAME] = keyInJSON;
                returnJSON[constants_1.Constants.MODULEDETAILS] = jsonDetails[keyInJSON];
                return returnJSON;
            }
        }
        return null;
    }
    static async verifyPhotoSupport(moduleAPIName) {
        try {
            moduleAPIName = await Utility.verifyModuleAPIName(moduleAPIName);
            if (constants_1.Constants.PHOTO_SUPPORTED_MODULES.includes(moduleAPIName.toLowerCase())) {
                return true;
            }
            let modules = await Utility.getModuleNames();
            if (modules.hasOwnProperty(moduleAPIName.toLowerCase()) && modules[moduleAPIName.toLowerCase()] != null) {
                let moduleMetaData = modules[moduleAPIName.toLowerCase()];
                if (moduleMetaData.hasOwnProperty(constants_1.Constants.GENERATED_TYPE) && moduleMetaData[constants_1.Constants.GENERATED_TYPE] != constants_1.Constants.GENERATED_TYPE_CUSTOM) {
                    throw new sdk_exception_1.SDKException(constants_1.Constants.UPLOAD_PHOTO_UNSUPPORTED_ERROR, constants_1.Constants.UPLOAD_PHOTO_UNSUPPORTED_MESSAGE + moduleAPIName);
                }
            }
        }
        catch (error) {
            if (!(error instanceof sdk_exception_1.SDKException)) {
                error = new sdk_exception_1.SDKException(null, null, null, error);
            }
            Logger.error(constants_1.Constants.EXCEPTION, error);
            throw error;
        }
        return true;
    }
    static async getModuleNames() {
        let moduleData = {};
        let recordFieldDetailsJson = await this.retrieveFields();
        if (!recordFieldDetailsJson.hasOwnProperty(constants_1.Constants.SDK_MODULE_METADATA) || (recordFieldDetailsJson.hasOwnProperty(constants_1.Constants.SDK_MODULE_METADATA) && (recordFieldDetailsJson[constants_1.Constants.SDK_MODULE_METADATA] == null || recordFieldDetailsJson[constants_1.Constants.SDK_MODULE_METADATA] == undefined || Object.keys(recordFieldDetailsJson[constants_1.Constants.SDK_MODULE_METADATA]).length <= 0))) {
            moduleData = await Utility.getModules(null);
            await Utility.writeModuleMetaData(moduleData);
            return moduleData;
        }
        return recordFieldDetailsJson[constants_1.Constants.SDK_MODULE_METADATA];
    }
    static async writeModuleMetaData(moduleData) {
        let fieldDetailsJSON = await this.retrieveFields();
        fieldDetailsJSON[constants_1.Constants.SDK_MODULE_METADATA] = moduleData;
        await this.saveFields(fieldDetailsJSON);
    }
    static async getModules(header) {
        let ResponseWrapper = (await Promise.resolve().then(() => __importStar(require('../../core/com/zoho/crm/api/modules/response_wrapper')))).ResponseWrapper;
        let APIException = (await Promise.resolve().then(() => __importStar(require('../../core/com/zoho/crm/api/modules/api_exception')))).APIException;
        let ModulesOperations = (await Promise.resolve().then(() => __importStar(require('../../core/com/zoho/crm/api/modules/modules_operations')))).ModulesOperations;
        let GetModulesHeader = (await Promise.resolve().then(() => __importStar(require('../../core/com/zoho/crm/api/modules/modules_operations')))).GetModulesHeader;
        let apiNames = {};
        let headerMap = new header_map_1.HeaderMap();
        if (header !== null) {
            await headerMap.add(GetModulesHeader.IF_MODIFIED_SINCE, new Date(header));
        }
        let response = await new ModulesOperations().getModules(headerMap);
        if (response !== null) {
            if ([constants_1.Constants.NO_CONTENT_STATUS_CODE, constants_1.Constants.NOT_MODIFIED_STATUS_CODE].includes(response.getStatusCode())) {
                return apiNames;
            }
            let responseObject = response.getObject();
            if (responseObject !== null) {
                if (responseObject instanceof ResponseWrapper) {
                    let modules = responseObject.getModules();
                    modules.forEach(module => {
                        if (module.getAPISupported() == true) {
                            let moduleDetails = {};
                            moduleDetails[constants_1.Constants.API_NAME] = module.getAPIName();
                            moduleDetails[constants_1.Constants.GENERATED_TYPE] = module.getGeneratedType().getValue();
                            apiNames[module.getAPIName().toLowerCase()] = moduleDetails;
                        }
                    });
                }
                else if (responseObject instanceof APIException) {
                    let errorResponse = {};
                    errorResponse[constants_1.Constants.CODE] = responseObject.getCode().getValue();
                    errorResponse[constants_1.Constants.STATUS] = responseObject.getStatus().getValue();
                    errorResponse[constants_1.Constants.MESSAGE] = responseObject.getMessage().getValue();
                    throw new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
                }
            }
            else {
                let errorResponse = {};
                errorResponse[constants_1.Constants.CODE] = response.getStatusCode();
                throw new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
            }
        }
        if (header == null) {
            try {
                await Utility.writeModuleMetaData(apiNames);
            }
            catch (error) {
                if (!(error instanceof sdk_exception_1.SDKException)) {
                    error = new sdk_exception_1.SDKException(null, null, null, error);
                }
                Logger.error(constants_1.Constants.EXCEPTION, error);
                throw error;
            }
        }
        return apiNames;
    }
    static async refreshModules() {
        this.forceRefresh = true;
        await Utility.getFieldsInfo(null, null);
        this.forceRefresh = false;
    }
    static async getJSONObject(json, key) {
        let keyArray = Array.from(Object.keys(json));
        for (let keyInJSON of keyArray) {
            if (key.toLowerCase() == keyInJSON.toLowerCase()) {
                return json[keyInJSON];
            }
        }
        return null;
    }
    static async setDataType(fieldDetail, field, moduleAPIName) {
        var apiType = field.getDataType();
        var module = '';
        var keyName = field.getAPIName();
        if (field.getSystemMandatory() != null && field.getSystemMandatory() == true && !(moduleAPIName.toLowerCase() == constants_1.Constants.CALLS && keyName.toLowerCase() == constants_1.Constants.CALL_DURATION)) {
            fieldDetail.required = true;
        }
        if (keyName.toLowerCase() == constants_1.Constants.PRODUCT_DETAILS.toLowerCase() && constants_1.Constants.INVENTORY_MODULES.includes(moduleAPIName.toLowerCase())) {
            fieldDetail.name = keyName;
            fieldDetail.type = constants_1.Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = constants_1.Constants.INVENTORY_LINE_ITEMS;
            fieldDetail.skip_mandatory = true;
            return;
        }
        else if (keyName.toLowerCase() == constants_1.Constants.PRICING_DETAILS.toLowerCase() && moduleAPIName.toLowerCase() == constants_1.Constants.PRICE_BOOKS) {
            fieldDetail.name = keyName;
            fieldDetail.type = constants_1.Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = constants_1.Constants.PRICINGDETAILS;
            fieldDetail.skip_mandatory = true;
            return;
        }
        else if (keyName.toLowerCase() == constants_1.Constants.PARTICIPANT_API_NAME.toLowerCase() && (moduleAPIName.toLowerCase() == constants_1.Constants.EVENTS || moduleAPIName.toLowerCase() == constants_1.Constants.ACTIVITIES)) {
            fieldDetail.name = keyName;
            fieldDetail.type = constants_1.Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = constants_1.Constants.PARTICIPANTS;
            fieldDetail.skip_mandatory = true;
            return;
        }
        else if (keyName.toLowerCase() == constants_1.Constants.COMMENTS.toLowerCase() && (moduleAPIName.toLowerCase() == constants_1.Constants.SOLUTIONS || moduleAPIName.toLowerCase() == constants_1.Constants.CASES)) {
            fieldDetail.name = keyName;
            fieldDetail.type = constants_1.Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = constants_1.Constants.COMMENT_NAMESPACE;
            fieldDetail.lookup = true;
            return;
        }
        else if (keyName.toLowerCase() == constants_1.Constants.LAYOUT.toLowerCase()) {
            fieldDetail.name = keyName;
            fieldDetail.type = constants_1.Constants.LAYOUT_NAMESPACE;
            fieldDetail.structure_name = constants_1.Constants.LAYOUT_NAMESPACE;
            fieldDetail.lookup = true;
            return;
        }
        else if (Utility.apiTypeVsDataType.has(apiType)) {
            fieldDetail.type = Utility.apiTypeVsDataType.get(apiType);
        }
        else if (apiType.toLowerCase() == constants_1.Constants.FORMULA.toLowerCase()) {
            if (field.getFormula() != null) {
                let returnType = field.getFormula().getReturnType();
                if (Utility.apiTypeVsDataType.has(returnType)) {
                    fieldDetail.type = Utility.apiTypeVsDataType.get(returnType);
                }
            }
            fieldDetail[constants_1.Constants.READ_ONLY] = true;
        }
        else {
            return;
        }
        if (apiType.toLowerCase().includes(constants_1.Constants.LOOKUP.toLowerCase())) {
            fieldDetail.lookup = true;
        }
        if (apiType.toLowerCase() == constants_1.Constants.CONSENT_LOOKUP) {
            fieldDetail.skip_mandatory = true;
        }
        if (Utility.apiTypeVsStructureName.has(apiType)) {
            fieldDetail.structure_name = Utility.apiTypeVsStructureName.get(apiType);
        }
        if (apiType.toLowerCase() == constants_1.Constants.PICKLIST && field.getPickListValues() != null && field.getPickListValues().length > 0) {
            let values = [];
            fieldDetail.picklist = true;
            field.getPickListValues().every(x => values.push(x.getDisplayValue()));
            fieldDetail.values = values;
        }
        if (apiType.toLowerCase() == constants_1.Constants.SUBFORM && field.getSubform() != null) {
            module = field.getSubform().getModule();
            fieldDetail.module = module;
            fieldDetail.skip_mandatory = true;
            fieldDetail.subform = true;
        }
        if (apiType.toLowerCase() == constants_1.Constants.LOOKUP && field.getLookup() != null) {
            module = field.getLookup().getModule();
            if (module != null && module != constants_1.Constants.SE_MODULE) {
                fieldDetail.module = module;
                if (module.toLowerCase() == constants_1.Constants.ACCOUNTS && !field.getCustomField()) {
                    fieldDetail.skip_mandatory = true;
                }
            }
            else {
                module = '';
            }
            fieldDetail.lookup = true;
        }
        if (module.length > 0) {
            await Utility.getFieldsInfo(module, null);
        }
        fieldDetail.name = keyName;
    }
    static async fillDataType() {
        if (this.apiTypeVsDataType.size > 0) {
            return;
        }
        let fieldAPINamesString = ['textarea', 'text', 'website', 'email', 'phone', 'mediumtext', 'multiselectlookup', 'profileimage', 'autonumber'];
        let fieldAPINamesInteger = ['integer'];
        let fieldAPINamesBoolean = ['boolean'];
        let fieldAPINamesLong = ['long', 'bigint'];
        let fieldAPINamesDouble = ['double', 'percent', 'lookup', 'currency'];
        let fieldAPINamesFile = ['imageupload'];
        let fieldAPINamesFieldFile = ['fileupload'];
        let fieldAPINamesDateTime = ['datetime', 'event_reminder'];
        let fieldAPINamesDate = ['date'];
        let fieldAPINamesLookup = ['lookup'];
        let fieldAPINamesPickList = ['picklist'];
        let fieldAPINamesMultiSelectPickList = ['multiselectpicklist'];
        let fieldAPINamesSubForm = ['subform'];
        let fieldAPINamesOwnerLookUp = ['ownerlookup', 'userlookup'];
        let fieldAPINamesMultiUserLookUp = ['multiuserlookup'];
        let fieldAPINamesMultiModuleLookUp = ['multimodulelookup'];
        let fieldAPINameTaskRemindAt = ['ALARM'];
        let fieldAPINameRecurringActivity = ['RRULE'];
        let fieldAPINameReminder = ['multireminder'];
        let fieldAPINameConsentLookUp = ['consent_lookup'];
        for (let fieldAPIName of fieldAPINamesString) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.STRING_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesInteger) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.INTEGER_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesBoolean) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.BOOLEAN_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesLong) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.LONG_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesDouble) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.DOUBLE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesFile) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.FILE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesDateTime) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.DATETIME_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesDate) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.DATE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesLookup) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.RECORD_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.RECORD_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesPickList) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.CHOICE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesMultiSelectPickList) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.CHOICE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesSubForm) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.RECORD_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesOwnerLookUp) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.USER_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.USER_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesMultiUserLookUp) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.USER_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesMultiModuleLookUp) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.MODULE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesFieldFile) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.FIELD_FILE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINameTaskRemindAt) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.REMINDAT_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.REMINDAT_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINameRecurringActivity) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.RECURRING_ACTIVITY_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.RECURRING_ACTIVITY_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINameReminder) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.REMINDER_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINameConsentLookUp) {
            Utility.apiTypeVsDataType.set(fieldAPIName, constants_1.Constants.CONSENT_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.CONSENT_NAMESPACE);
        }
    }
}
exports.MasterModel = Utility;
exports.Utility = Utility;
Utility.apiTypeVsDataType = new Map();
Utility.apiTypeVsStructureName = new Map();
Utility.newFile = false;
Utility.getModifiedModules = false;
Utility.forceRefresh = false;
Utility.moduleAPIName = null;
Utility.apiSupportedModule = {};
//# sourceMappingURL=utility.js.map