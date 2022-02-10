import { Model } from "../../utils/util/model";

/**
 * This class is the common API response object.
*/
export class APIResponse<T> {
    private statusCode: number;

    private object: any;

    private headers: Map<string, string>;

    /**
     * Creates an APIResponse class instance with the specified parameters.
     * @param {Map} headers The map containing the API Response headers
     * @param {number} statusCode The integer containing the API response HTTP status code.
     * @param {Model | null | any} object The object containing the API response class instance.
    */
    constructor(headers: Map<string, string>, statusCode: number, object: Model | null | any) {
        this.headers = headers;

        this.statusCode = statusCode;

        this.object = object;
    }

    /**
     * The method to get the API response HTTP status code.
     * @returns {number} The integer containing the API response HTTP status code.
    */
    public getStatusCode(): number {
        return this.statusCode;
    }

    /**
     * The method to get the API Response headers
     * @returns {Map} The map containing the API Response headers
    */
    public getHeaders(): Map<string, string> {
        return this.headers;
    }

    /**
     * The method to get the API response class instance.
     * @returns {Model | null | any} The object containing the API response class instance.
    */
    public getObject(): Model | null | any {
        return this.object as T;
    }
}