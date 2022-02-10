"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataConverter = exports.MasterModel = void 0;
const converter_1 = require("./converter");
const stream_wrapper_1 = require("./stream_wrapper");
const initializer_1 = require("../../routes/initializer");
const constants_1 = require("./constants");
const sdk_exception_1 = require("../../core/com/zoho/crm/api/exception/sdk_exception");
const form_data_1 = __importDefault(require("form-data"));
/**
 * This class is to process the upload file and stream.
 * @extends {Converter}
 */
class FormDataConverter extends converter_1.Converter {
    constructor(commonAPIHandler) {
        super(commonAPIHandler);
        this.uniqueValuesMap = new Map();
    }
    async appendToRequest(requestBase) {
        let request = requestBase;
        var formDataRequestBody = new form_data_1.default();
        await this.addFileBody(request.getRequestBody(), formDataRequestBody);
        return formDataRequestBody;
    }
    async addFileBody(requestObject, formData) {
        let requestKeys = Object.keys(requestObject);
        for (let key of requestKeys) {
            let value = requestObject[key];
            if (Array.isArray(value)) {
                for (let fileObject of value) {
                    if (fileObject instanceof stream_wrapper_1.StreamWrapper) {
                        formData.append(key, fileObject.getStream());
                    }
                    else {
                        formData.append(key, fileObject);
                    }
                }
            }
            else if (value instanceof stream_wrapper_1.StreamWrapper) {
                formData.append(key, value.getStream());
            }
            else {
                formData.append(key, value);
            }
        }
    }
    async formRequest(requestInstance, pack, instanceNumber, classMemberDetail) {
        var classDetail = initializer_1.Initializer.jsonDetails[pack];
        var request = {};
        if (classDetail.hasOwnProperty(constants_1.Constants.INTERFACE) && classDetail[constants_1.Constants.INTERFACE]) {
            var classes = classDetail[constants_1.Constants.CLASSES];
            var baseName = pack.split('/').slice(0, -1);
            let className = this.getFileName(requestInstance.constructor.name);
            baseName.push(className);
            let requestObjectClassName = baseName.join('/');
            for (let className in classes) {
                if (classes[className].toLowerCase() == requestObjectClassName) {
                    classDetail = initializer_1.Initializer.jsonDetails[requestObjectClassName];
                    break;
                }
            }
        }
        for (let memberName in classDetail) {
            var modification = null;
            var memberDetail = classDetail[memberName];
            if ((memberDetail.hasOwnProperty(constants_1.Constants.READ_ONLY) && memberDetail[constants_1.Constants.READ_ONLY] == 'true') || !memberDetail.hasOwnProperty(constants_1.Constants.NAME)) {
                continue;
            }
            try {
                modification = requestInstance.isKeyModified(memberDetail[constants_1.Constants.NAME]);
            }
            catch (e) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.EXCEPTION_IS_KEY_MODIFIED, null, null, e);
            }
            // check required
            if ((modification == null || modification == 0) && memberDetail.hasOwnProperty(constants_1.Constants.REQUIRED) && memberDetail[constants_1.Constants.REQUIRED] == 'true') {
                throw new sdk_exception_1.SDKException(constants_1.Constants.MANDATORY_VALUE_ERROR, constants_1.Constants.MANDATORY_KEY_ERROR + memberName);
            }
            var fieldValue = Reflect.get(requestInstance, memberName);
            if (modification != null && modification != 0 && await this.valueChecker(requestInstance.constructor.name, memberName, memberDetail, fieldValue, this.uniqueValuesMap, instanceNumber)) {
                var keyName = memberDetail[constants_1.Constants.NAME];
                var type = memberDetail[constants_1.Constants.TYPE];
                if (type.toLowerCase() == constants_1.Constants.LIST_NAMESPACE.toLowerCase()) {
                    request[keyName] = await this.setJSONArray(fieldValue, memberDetail);
                }
                else if (type.toLowerCase() == constants_1.Constants.MAP_NAMESPACE.toLowerCase()) {
                    request[keyName] = await this.setJSONObject(fieldValue, memberDetail);
                }
                else if (memberDetail.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME)) {
                    request[keyName] = await this.formRequest(fieldValue, memberDetail[constants_1.Constants.STRUCTURE_NAME], 0, memberDetail);
                }
                else {
                    request[keyName] = fieldValue;
                }
            }
        }
        return request;
    }
    async setJSONObject(fieldValue, memberDetail) {
        var jsonObject = {};
        var requestObject = fieldValue;
        if (memberDetail == null) {
            for (let key of Array.from(requestObject.keys())) {
                jsonObject[key] = this.redirectorForObjectToJSON(requestObject.get(key));
            }
        }
        else {
            var keysDetail = memberDetail[constants_1.Constants.KEYS];
            for (let keyIndex = 0; keyIndex < keysDetail.length; keyIndex++) {
                let keyDetail = keysDetail[keyIndex];
                let keyName = keyDetail[constants_1.Constants.NAME];
                let keyValue = null;
                if (requestObject.has(keyName) && requestObject.get(keyName) != null) {
                    if (keyDetail.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME)) {
                        keyValue = await this.formRequest(requestObject.get(keyName), keyDetail[constants_1.Constants.STRUCTURE_NAME], 0, memberDetail);
                        jsonObject[keyName] = keyValue;
                    }
                    else {
                        keyValue = requestObject.get(keyName);
                        jsonObject[keyName] = await this.redirectorForObjectToJSON(keyValue);
                    }
                }
            }
        }
        return jsonObject;
    }
    async setJSONArray(fieldValue, memberDetail) {
        var jsonArray = [];
        var requestObjects = fieldValue;
        if (memberDetail == null) {
            for (let request of requestObjects) {
                jsonArray.push(await this.redirectorForObjectToJSON(request));
            }
        }
        else {
            if (memberDetail.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME)) {
                let instanceCount = 0;
                let pack = memberDetail[constants_1.Constants.STRUCTURE_NAME];
                for (let request of requestObjects) {
                    jsonArray.push(await this.formRequest(request, pack, instanceCount++, memberDetail));
                }
            }
            else {
                for (let request of requestObjects) {
                    jsonArray.push(await this.redirectorForObjectToJSON(request));
                }
            }
        }
        return jsonArray;
    }
    async redirectorForObjectToJSON(request) {
        let type = Object.prototype.toString.call(request);
        if (type == constants_1.Constants.ARRAY_TYPE) {
            return await this.setJSONArray(request, null);
        }
        else if (type == constants_1.Constants.MAP_TYPE) {
            return await this.setJSONObject(request, null);
        }
        else {
            return request;
        }
    }
    async getWrappedResponse(responseObject, pack) {
        return this.getResponse(responseObject, pack);
    }
    async getResponse(response, pack) {
        return null;
    }
}
exports.MasterModel = FormDataConverter;
exports.FormDataConverter = FormDataConverter;
//# sourceMappingURL=form_data_converter.js.map