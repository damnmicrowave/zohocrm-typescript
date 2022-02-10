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
exports.MasterModel = exports.CommonAPIHandler = void 0;
const sdk_exception_1 = require("../../core/com/zoho/crm/api/exception/sdk_exception");
const constants_1 = require("../../utils/util/constants");
const api_http_connector_1 = require("../controllers/api_http_connector");
const header_map_1 = require("../header_map");
const initializer_1 = require("../initializer");
const parameter_map_1 = require("../parameter_map");
const Logger = __importStar(require("winston"));
const path = __importStar(require("path"));
const os = __importStar(require("os"));
const api_response_1 = require("../controllers/api_response");
const json_converter_1 = require("../../utils/util/json_converter");
const xml_converter_1 = require("../../utils/util/xml_converter");
const form_data_converter_1 = require("../../utils/util/form_data_converter");
const downloader_1 = require("../../utils/util/downloader");
/**
* This class is to process the API request and its response.
* Construct the objects that are to be sent as parameters or in the request body with the API.
* The Request parameter, header and body objects are constructed here.
* Process the response JSON and converts it to relevant objects in the library.
*/
class CommonAPIHandler {
    constructor() {
        this.apiPath = '';
        this.param = new parameter_map_1.ParameterMap();
        this.headers = new header_map_1.HeaderMap();
        this.httpMethod = '';
        this.moduleAPIName = null;
        this.contentType = '';
        this.categoryMethod = '';
        this.mandatoryChecker = null;
    }
    /**
     * This is a setter method to set an API request content type.
     * @param {string} contentType - A String containing the API request content type.
     */
    setContentType(contentType) {
        this.contentType = contentType;
    }
    /**
     * This is a setter method to set the API request URL.
     * @param {string} apiPath - A String containing the API request URL.
     */
    setAPIPath(apiPath) {
        this.apiPath = apiPath;
    }
    /**
     * This method is to add an API request parameter.
     * @param {Param} paramInstance - A Param instance containing the API request parameter.
     * @param {object} paramValue - An object containing the API request parameter value.
     * @throws {SDKException}
     */
    async addParam(paramInstance, paramValue) {
        if (paramValue === undefined || paramValue === null) {
            return;
        }
        if (this.param === null || this.param === undefined) {
            this.param = new parameter_map_1.ParameterMap();
        }
        await this.param.add(paramInstance, paramValue);
    }
    /**
     * This method is to add an API request header.
     * @param {Header} headerInstance - A Header instance containing the API request header.
     * @param {object} headerValue - An object containing the API request header value.
     * @throws {SDKException}
     */
    async addHeader(headerInstance, headerValue) {
        if (headerValue === undefined || headerValue === null) {
            return;
        }
        if (this.headers === null || this.headers === undefined) {
            this.headers = new header_map_1.HeaderMap();
        }
        await this.headers.add(headerInstance, headerValue);
    }
    /**
     * This is a setter method to set the API request parameter map.
     * @param {ParameterMap} param - A ParameterMap class instance containing the API request parameter.
     */
    setParam(param) {
        if (param == undefined || param == null) {
            return;
        }
        if (this.param.getParameterMap() != null && this.param.getParameterMap().size > 0) {
            param.getParameterMap().forEach((value, key) => {
                if (value !== undefined) {
                    this.param.getParameterMap().set(key, value);
                }
            });
        }
        else {
            this.param = param;
        }
    }
    /**
     * This is a getter method to get the Zoho CRM module API name.
     * @returns A String representing the Zoho CRM module API name.
     */
    getModuleAPIName() {
        return this.moduleAPIName;
    }
    /**
     * This is a setter method to set the Zoho CRM module API name.
     * @param {string} moduleAPIName - A String containing the Zoho CRM module API name.
     */
    setModuleAPIName(moduleAPIName) {
        this.moduleAPIName = moduleAPIName;
    }
    /**
     * This is a setter method to set the API request header map.
     * @param {HeaderMap} header - A HeaderMap class instance containing the API request header.
     */
    setHeader(header) {
        if (header === undefined || header === null) {
            return;
        }
        if (this.headers.getHeaderMap() != null && this.headers.getHeaderMap().size > 0) {
            header.getHeaderMap().forEach((value, key) => {
                if (value !== undefined) {
                    this.headers.getHeaderMap().set(key, value);
                }
            });
        }
        else {
            this.headers = header;
        }
    }
    /**
     * This is a setter method to set the API request body object.
     * @param {object} request - An Object containing the API request body object.
     */
    setRequest(request) {
        this.request = request;
    }
    /**
     * This is a setter method to set the HTTP API request method.
     * @param {string} httpMethod - A String containing the HTTP API request method.
     */
    setHttpMethod(httpMethod) {
        this.httpMethod = httpMethod;
    }
    /**
     * This method is used in constructing API request and response details. To make the Zoho CRM API calls.
     * @param {string} className - A Class containing the method return type.
     * @param {string} encodeType - A String containing the expected API response content type.
     * @see APIHTTPConnector
     * @returns {APIResponse} An instance of APIResponse representing the Zoho CRM API response
     * @throws {SDKException}
     */
    async apiCall(className, encodeType) {
        let initializer = await initializer_1.Initializer.getInitializer();
        if (initializer == null) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.SDK_UNINITIALIZATION_ERROR, constants_1.Constants.SDK_UNINITIALIZATION_MESSAGE);
        }
        var connector = new api_http_connector_1.APIHTTPConnector();
        try {
            await this.setAPIUrl(connector);
        }
        catch (error) {
            if (!(error instanceof sdk_exception_1.SDKException)) {
                error = new sdk_exception_1.SDKException(null, null, null, error);
            }
            Logger.error(constants_1.Constants.SET_API_URL_EXCEPTION, error);
            throw error;
        }
        connector.setRequestMethod(this.httpMethod);
        connector.setContentType(this.contentType);
        if (this.headers != null && this.headers.getHeaderMap().size > 0) {
            connector.setHeaders(this.headers.getHeaderMap());
        }
        if (this.param != null && this.param.getParameterMap().size > 0) {
            connector.setParams(this.param.getParameterMap());
        }
        try {
            await initializer.getToken().authenticate(connector);
        }
        catch (error) {
            if (!(error instanceof sdk_exception_1.SDKException)) {
                error = new sdk_exception_1.SDKException(null, null, null, error);
            }
            Logger.error(constants_1.Constants.AUTHENTICATION_EXCEPTION, error);
            throw error;
        }
        let baseName = className.replace(/\\/gm, '/').split('/');
        let fileName = path.basename(className).split('.').slice(0, -1).join('.');
        let index = baseName.indexOf(constants_1.Constants.CORE);
        let packageNames = baseName.slice(index, baseName.length - 1);
        packageNames.push(fileName);
        var pack = packageNames.join("/");
        var returnObject = null;
        var converterInstance = null;
        if (this.contentType != null && constants_1.Constants.IS_GENERATE_REQUEST_BODY.includes(this.httpMethod.toUpperCase())) {
            let requestObject = null;
            let baseName = pack.split("/");
            baseName.pop();
            try {
                converterInstance = this.getConverterClassInstance(this.contentType.toLowerCase());
                if (converterInstance !== null) {
                    var classFileName = converterInstance.getFileName(this.request.constructor.name);
                    baseName.push(classFileName);
                    requestObject = await converterInstance.formRequest(this.request, baseName.join("/"), null, null);
                }
            }
            catch (error) {
                if (!(error instanceof sdk_exception_1.SDKException)) {
                    error = new sdk_exception_1.SDKException(null, null, null, error);
                }
                Logger.error(constants_1.Constants.FORM_REQUEST_EXCEPTION, error);
                throw error;
            }
            if (requestObject !== null) {
                connector.setRequestBody(requestObject);
            }
        }
        try {
            connector.addHeader(constants_1.Constants.ZOHO_SDK, os.platform() + "/" + os.release() + "/" + constants_1.Constants.SDK_NAME + "/" + process.version + ":" + constants_1.Constants.SDK_VERSION);
            let response = await connector.fireRequest(converterInstance);
            let headerMap = await this.getHeaders(response.headers);
            if (response.headers.hasOwnProperty(constants_1.Constants.CONTENT_TYPE_HEADER.toLowerCase())) {
                let contentTypeHeader = response.headers[constants_1.Constants.CONTENT_TYPE_HEADER.toLowerCase()];
                if (contentTypeHeader !== undefined && !Array.isArray(contentTypeHeader)) {
                    let contentType = contentTypeHeader.split(";")[0];
                    converterInstance = this.getConverterClassInstance(contentType.toLowerCase());
                    if (converterInstance !== null) {
                        returnObject = await converterInstance.getWrappedResponse(response, pack);
                    }
                }
            }
            else {
                Logger.info(constants_1.Constants.API_ERROR_RESPONSE + response.statusCode.toString());
            }
            return new api_response_1.APIResponse(headerMap, response.statusCode, returnObject);
        }
        catch (error) {
            if (!(error instanceof sdk_exception_1.SDKException)) {
                error = new sdk_exception_1.SDKException(null, null, null, error);
            }
            Logger.error(constants_1.Constants.API_CALL_EXCEPTION, error);
            throw error;
        }
    }
    async getHeaders(headers) {
        let headerMap = new Map();
        if (Object.keys(headers).length > 0) {
            for (let key in headers) {
                headerMap.set(key, headers[key]);
            }
        }
        return headerMap;
    }
    /**
     * This method is used to get a Converter class instance.
     * @param {string} encodeType - A String containing the API response content type.
     * @returns A Converter class instance.
     */
    getConverterClassInstance(encodeType) {
        var type = null;
        switch (encodeType) {
            case "application/json":
            case "text/plain":
            case "application/ld+json":
                type = new json_converter_1.JSONConverter(this);
                break;
            case "application/xml":
            case "text/xml":
                type = new xml_converter_1.XMLConverter(this);
                break;
            case "multipart/form-data":
                type = new form_data_converter_1.FormDataConverter(this);
                break;
            case "image/png":
            case "image/jpeg":
            case "image/gif":
            case "image/tiff":
            case "image/svg+xml":
            case "image/bmp":
            case "image/webp":
            case "text/csv":
            case "text/html":
            case "text/css":
            case "text/javascript":
            case "text/calendar":
            case "application/x-download":
            case "application/zip":
            case "application/pdf":
            case "application/java-archive":
            case "application/javascript":
            case "application/octet-stream":
            case "application/xhtml+xml":
            case "application/x-bzip":
            case "application/msword":
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            case "application/gzip":
            case "application/x-httpd-php":
            case "application/vnd.ms-powerpoint":
            case "application/vnd.rar":
            case "application/x-sh":
            case "application/x-tar":
            case "application/vnd.ms-excel":
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            case "application/x-7z-compressed":
            case "audio/mpeg":
            case "audio/x-ms-wma":
            case "audio/vnd.rn-realaudio":
            case "audio/x-wav":
            case "audio/3gpp":
            case "audio/3gpp2":
            case "video/mpeg":
            case "video/mp4":
            case "video/webm":
            case "video/3gpp":
            case "video/3gpp2":
            case "font/ttf":
                type = new downloader_1.Downloader(this);
                break;
        }
        return type;
    }
    async setAPIUrl(connector) {
        var apiPath = "";
        let initializer = await initializer_1.Initializer.getInitializer();
        if (this.apiPath.includes(constants_1.Constants.HTTP)) {
            if (this.apiPath.includes(constants_1.Constants.CONTENT_API_URL)) {
                apiPath = apiPath.concat(initializer.getEnvironment().getFileUploadUrl());
                try {
                    const myURL = new URL(this.apiPath);
                    apiPath = apiPath.concat(myURL.pathname);
                }
                catch (error) {
                    throw new sdk_exception_1.SDKException(constants_1.Constants.INVALID_URL_ERROR, null, null, error);
                }
            }
            else {
                if (this.apiPath.substring(0, 1) === "/") {
                    this.apiPath = this.apiPath.substring(1);
                }
                apiPath = apiPath.concat(this.apiPath);
            }
        }
        else {
            apiPath = apiPath.concat(initializer.getEnvironment().getUrl());
            apiPath = apiPath.concat(this.apiPath);
        }
        connector.setUrl(apiPath);
    }
    /**
     * This is a getter method to get mandatoryChecker
     * @returns {Boolean} - A Boolean value representing mandatoryChecker
     */
    isMandatoryChecker() {
        return this.mandatoryChecker;
    }
    /**
     * This is a setter method to set mandatoryChecker
     * @param {Bool} mandatoryChecker - A Boolean value
     */
    setMandatoryChecker(mandatoryChecker) {
        this.mandatoryChecker = mandatoryChecker;
    }
    /**
     * This is a getter method to get the HTTP API request method.
     * @returns {string} A String containing the HTTP API request method.
     */
    getHttpMethod() {
        return this.httpMethod;
    }
    /**
     * This is a getter method to get categoryMethod
     * @returns {String} - A String value representing categoryMethod
     */
    getCategoryMethod() {
        return this.categoryMethod;
    }
    /**
     * This is a setter method to set categoryMethod
     * @param {String} categoryMethod - A String value representing categoryMethod
     */
    setCategoryMethod(categoryMethod) {
        this.categoryMethod = categoryMethod;
    }
    /**
     * This is a getter method to get the API request URL.
     * @returns {String} A String containing the API request URL.
     */
    getAPIPath() {
        return this.apiPath;
    }
}
exports.CommonAPIHandler = CommonAPIHandler;
exports.MasterModel = CommonAPIHandler;
//# sourceMappingURL=common_api_handler.js.map