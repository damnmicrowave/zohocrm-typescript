"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterMap = exports.MasterModel = void 0;
const header_param_validator_1 = require("../utils/util/header_param_validator");
const sdk_exception_1 = require("../core/com/zoho/crm/api/exception/sdk_exception");
const constants_1 = require("../utils/util/constants");
/**
 * This class represents the HTTP parameter name and value.
 */
class ParameterMap {
    constructor() {
        this.parameterMap = new Map();
    }
    /**
     * This is a getter method to get parameter map.
     * @returns {Map} A Map representing the API request parameters.
     */
    getParameterMap() {
        return this.parameterMap;
    }
    /**
     * The method to add parameter name and value.
     * @param {Param} param - A Param class instance.
     * @param {object} value - An object containing the parameter value.
     * @throws {SDKException}
     */
    async add(param, value) {
        if (param == null || param == undefined) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.PARAMETER_NULL_ERROR, constants_1.Constants.PARAM_INSTANCE_NULL_ERROR);
        }
        let paramName = param.getName();
        if (paramName == null || paramName == undefined) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.PARAM_NAME_NULL_ERROR, constants_1.Constants.PARAM_NAME_NULL_ERROR_MESSAGE);
        }
        if (value == null) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.PARAMETER_NULL_ERROR, paramName + constants_1.Constants.NULL_VALUE_ERROR_MESSAGE);
        }
        let paramClassName = param.getClassName();
        let parsedParamValue;
        if (paramClassName !== undefined && paramClassName !== null) {
            parsedParamValue = await new header_param_validator_1.HeaderParamValidator().validate(param, value);
        }
        if (this.parameterMap.has(paramName) && this.parameterMap.get(paramName) != null) {
            let paramValue = this.parameterMap.get(paramName);
            if (paramValue !== undefined) {
                paramValue = paramValue.concat(",", parsedParamValue.toString());
                this.parameterMap.set(paramName, paramValue);
            }
        }
        else {
            this.parameterMap.set(paramName, parsedParamValue.toString());
        }
    }
}
exports.MasterModel = ParameterMap;
exports.ParameterMap = ParameterMap;
//# sourceMappingURL=parameter_map.js.map