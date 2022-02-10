"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogBuilder = void 0;
const logger_1 = require("./logger");
class LogBuilder {
    constructor() {
        this._level = '';
        this._filePath = '';
    }
    level(level) {
        this._level = level;
        return this;
    }
    filePath(filePath) {
        this._filePath = filePath;
        return this;
    }
    build() {
        return logger_1.Logger.getInstance(this._level, this._filePath);
    }
}
exports.LogBuilder = LogBuilder;
//# sourceMappingURL=log_builder.js.map