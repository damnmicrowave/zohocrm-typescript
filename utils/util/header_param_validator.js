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
exports.HeaderParamValidator = exports.MasterModel = void 0;
const path = __importStar(require("path"));
const constants_1 = require("./constants");
const datatype_converter_1 = require("./datatype_converter");
/**
 * This class validates the Header and Parameter values with the type accepted by the CRM APIs.
 */
class HeaderParamValidator {
    async validate(headerParam, value) {
        let name = headerParam.getName();
        let className = headerParam.getClassName();
        let jsonDetails = await this.getJSONDetails();
        if (className !== undefined && className !== null) {
            let jsonClassName = await this.getFileName(className);
            let typeDetail = null;
            if (jsonDetails.hasOwnProperty(jsonClassName)) {
                typeDetail = await this.getKeyJSONDetails(name, jsonDetails[jsonClassName]);
            }
            if (typeDetail !== null) {
                value = await datatype_converter_1.DataTypeConverter.postConvert(value, typeDetail[constants_1.Constants.TYPE]);
            }
        }
        return value;
    }
    async getJSONDetails() {
        let Initializer = (await Promise.resolve().then(() => __importStar(require("../../routes/initializer")))).Initializer;
        if (Initializer.jsonDetails == null) {
            Initializer.jsonDetails = await Initializer.getJSON(path.join(__dirname, "..", "..", constants_1.Constants.CONFIG_DIRECTORY, constants_1.Constants.JSON_DETAILS_FILE_PATH));
        }
        return Initializer.jsonDetails;
    }
    getFileName(name) {
        let fileName = [];
        let spl = name.toString().split(".");
        let className = spl.pop();
        if (className !== undefined) {
            let nameParts = className.split(/([A-Z][a-z]+)/).filter(function (e) { return e; });
            fileName.push(nameParts[0].toLowerCase());
            for (let i = 1; i < nameParts.length; i++) {
                fileName.push(nameParts[i].toLowerCase());
            }
        }
        return "core/" + spl.join("/").toLowerCase() + "/" + fileName.join("_");
    }
    async getKeyJSONDetails(name, jsonDetails) {
        let keyArray = Array.from(Object.keys(jsonDetails));
        for (let index = 0; index < keyArray.length; index++) {
            const key = keyArray[index];
            let detail = jsonDetails[key];
            if (detail.hasOwnProperty(constants_1.Constants.NAME)) {
                if (detail[constants_1.Constants.NAME].toLowerCase() == name.toLowerCase()) {
                    return detail;
                }
            }
        }
    }
}
exports.MasterModel = HeaderParamValidator;
exports.HeaderParamValidator = HeaderParamValidator;
//# sourceMappingURL=header_param_validator.js.map