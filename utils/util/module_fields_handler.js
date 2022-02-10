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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleFieldsHandler = void 0;
const initializer_1 = require("../../routes/initializer");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("./constants");
const converter_1 = require("./converter");
const sdk_exception_1 = require("../../core/com/zoho/crm/api/exception/sdk_exception");
const Logger = __importStar(require("winston"));
const utility_1 = require("./utility");
/**
 * The class contains methods to manipulate the module fields only when autoRefreshFields is set to false in Initializer.
 */
class ModuleFieldsHandler {
    /**
     * The method to obtain resources directory path.
     * @returns {String} A String representing the directory's absolute path.
     */
    static async getDirectory() {
        let initializer = await initializer_1.Initializer.getInitializer();
        return path_1.default.join(initializer.getResourcePath(), constants_1.Constants.FIELD_DETAILS_DIRECTORY);
    }
    /**
     * The method to delete fields JSON File of the current user.
     * @throws {SDKException}
     */
    static async deleteFieldsFile() {
        try {
            let recordFieldDetailsPath = path_1.default.join(await this.getDirectory(), await converter_1.Converter.getEncodedFileName());
            if (fs_1.default.existsSync(recordFieldDetailsPath)) {
                fs_1.default.unlinkSync(recordFieldDetailsPath);
            }
        }
        catch (error) {
            let exception = new sdk_exception_1.SDKException(null, null, null, error);
            Logger.error(constants_1.Constants.DELETE_FIELD_FILE_ERROR, exception);
            throw exception;
        }
    }
    /**
     * The method to delete all field JSON files.
     * @throws {SDKException}
     */
    static async deleteAllFieldFiles() {
        try {
            let dir = await this.getDirectory();
            fs_1.default.readdirSync(dir).forEach(fileName => {
                let filepath = path_1.default.resolve(dir, fileName);
                fs_1.default.unlinkSync(filepath);
            });
        }
        catch (error) {
            let exception = new sdk_exception_1.SDKException(null, null, null, error);
            Logger.error(constants_1.Constants.DELETE_FIELD_FILES_ERROR, exception);
            throw exception;
        }
    }
    /**
     * The method to delete fields of the given module from the current user's fields JSON file.
     * @param {String} module A string representing the module.
     * @throws {SDKException}
     */
    static async deleteFields(module) {
        try {
            const recordFieldDetailsJson = await utility_1.Utility.retrieveFields();
            if (recordFieldDetailsJson.hasOwnProperty(module.toLowerCase())) {
                await utility_1.Utility.deleteFields(recordFieldDetailsJson, module);
                await utility_1.Utility.saveFields(recordFieldDetailsJson);
            }
        }
        catch (error) {
            throw new sdk_exception_1.SDKException(null, null, null, error);
        }
    }
    /**
     * The method to force-refresh fields of a module.
     * @param {String} module A string representing the module.
     * @throws {SDKException}
     */
    static async refreshFields(module) {
        try {
            await this.deleteFields(module);
            await utility_1.Utility.getFieldsInfo(module, null);
        }
        catch (error) {
            if (!(error instanceof sdk_exception_1.SDKException)) {
                error = new sdk_exception_1.SDKException(null, null, null, error);
            }
            Logger.error(constants_1.Constants.REFRESH_SINGLE_MODULE_FIELDS_ERROR + module, error);
            throw error;
        }
    }
    /**
     * The method to force-refresh fields of all the available modules.
     * @throws {SDKException}
     */
    static async refreshAllModules() {
        try {
            await utility_1.Utility.refreshModules();
        }
        catch (error) {
            if (!(error instanceof sdk_exception_1.SDKException)) {
                error = new sdk_exception_1.SDKException(null, null, null, error);
            }
            Logger.error(constants_1.Constants.REFRESH_ALL_MODULE_FIELDS_ERROR, error);
            throw error;
        }
    }
}
exports.ModuleFieldsHandler = ModuleFieldsHandler;
//# sourceMappingURL=module_fields_handler.js.map