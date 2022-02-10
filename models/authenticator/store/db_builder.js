"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBBuilder = void 0;
const constants_1 = require("../../../utils/util/constants");
const db_store_1 = require("./db_store");
class DBBuilder {
    constructor() {
        this._userName = constants_1.Constants.MYSQL_USER_NAME;
        this._portNumber = constants_1.Constants.MYSQL_PORT_NUMBER;
        this._password = "";
        this._host = constants_1.Constants.MYSQL_HOST;
        this._databaseName = constants_1.Constants.MYSQL_DATABASE_NAME;
        this._tableName = constants_1.Constants.MYSQL_TABLE_NAME;
    }
    userName(userName) {
        if (userName != null) {
            this._userName = userName;
        }
        return this;
    }
    portNumber(portNumber) {
        if (portNumber != null) {
            this._portNumber = portNumber;
        }
        return this;
    }
    password(password) {
        if (password != null) {
            this._password = password;
        }
        return this;
    }
    host(host) {
        if (host != null) {
            this._host = host;
        }
        return this;
    }
    databaseName(databaseName) {
        if (databaseName != null) {
            this._databaseName = databaseName;
        }
        return this;
    }
    tableName(tableName) {
        if (tableName != null) {
            this._tableName = tableName;
        }
        return this;
    }
    build() {
        return new db_store_1.DBStore(this._host, this._databaseName, this._tableName, this._userName, this._password, this._portNumber);
    }
}
exports.DBBuilder = DBBuilder;
//# sourceMappingURL=db_builder.js.map