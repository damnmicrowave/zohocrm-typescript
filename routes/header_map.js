"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderMap = exports.MasterModel = void 0;
const header_param_validator_1 = require("../utils/util/header_param_validator");
const sdk_exception_1 = require("../core/com/zoho/crm/api/exception/sdk_exception");
const constants_1 = require("../utils/util/constants");
/**
 * This class represents the HTTP header name and value.
 */
class HeaderMap {
    constructor() {
        this.headerMap = new Map();
    }
    /**
     * This is a getter method to get the header map.
     * @returns {Map} A Map representing the API request headers.
     */
    getHeaderMap() {
        return this.headerMap;
    }
    /**
     * The method to add the header name and value.
     * @param {Header} header - A Header class instance.
     * @param {object} value - An object containing the header value.
     * @throws {SDKException}
     */
    async add(header, value) {
        if (header == null || header == undefined) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.HEADER_NULL_ERROR, constants_1.Constants.HEADER_INSTANCE_NULL_ERROR);
        }
        let headerName = header.getName();
        if (headerName == null || headerName == undefined) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.HEADER_NAME_NULL_ERROR, constants_1.Constants.HEADER_NAME_NULL_ERROR_MESSAGE);
        }
        if (value == null) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.HEADER_NULL_ERROR, headerName + constants_1.Constants.NULL_VALUE_ERROR_MESSAGE);
        }
        let headerClassName = header.getClassName();
        let parsedHeaderValue;
        if (headerClassName !== undefined && headerClassName != null) {
            parsedHeaderValue = await new header_param_validator_1.HeaderParamValidator().validate(header, value);
        }
        if (this.headerMap.has(headerName) && this.headerMap.get(headerName) != null) {
            let headerValue = this.headerMap.get(headerName);
            if (headerValue !== undefined) {
                headerValue = headerValue.concat(",", parsedHeaderValue.toString());
                this.headerMap.set(headerName, headerValue);
            }
        }
        else {
            this.headerMap.set(headerName, parsedHeaderValue.toString());
        }
    }
}
exports.MasterModel = HeaderMap;
exports.HeaderMap = HeaderMap;
//# sourceMappingURL=header_map.js.map