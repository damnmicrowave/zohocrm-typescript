"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResponse = void 0;
/**
 * This class is the common API response object.
*/
class APIResponse {
    /**
     * Creates an APIResponse class instance with the specified parameters.
     * @param {Map} headers The map containing the API Response headers
     * @param {number} statusCode The integer containing the API response HTTP status code.
     * @param {Model | null | any} object The object containing the API response class instance.
    */
    constructor(headers, statusCode, object) {
        this.headers = headers;
        this.statusCode = statusCode;
        this.object = object;
    }
    /**
     * The method to get the API response HTTP status code.
     * @returns {number} The integer containing the API response HTTP status code.
    */
    getStatusCode() {
        return this.statusCode;
    }
    /**
     * The method to get the API Response headers
     * @returns {Map} The map containing the API Response headers
    */
    getHeaders() {
        return this.headers;
    }
    /**
     * The method to get the API response class instance.
     * @returns {Model | null | any} The object containing the API response class instance.
    */
    getObject() {
        return this.object;
    }
}
exports.APIResponse = APIResponse;
//# sourceMappingURL=api_response.js.map