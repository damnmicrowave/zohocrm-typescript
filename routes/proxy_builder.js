"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyBuilder = void 0;
const constants_1 = require("../utils/util/constants");
const utility_1 = require("../utils/util/utility");
const request_proxy_1 = require("./request_proxy");
class ProxyBuilder {
    constructor() {
        this._password = "";
    }
    host(host) {
        utility_1.Utility.assertNotNull(host, constants_1.Constants.REQUEST_PROXY_ERROR, constants_1.Constants.HOST_ERROR_MESSAGE);
        this._host = host;
        return this;
    }
    port(port) {
        utility_1.Utility.assertNotNull(port, constants_1.Constants.REQUEST_PROXY_ERROR, constants_1.Constants.PORT_ERROR_MESSAGE);
        this._port = port;
        return this;
    }
    user(user) {
        this._user = user;
        return this;
    }
    password(password) {
        this._password = password;
        return this;
    }
    build() {
        utility_1.Utility.assertNotNull(this._host, constants_1.Constants.REQUEST_PROXY_ERROR, constants_1.Constants.HOST_ERROR_MESSAGE);
        utility_1.Utility.assertNotNull(this._port, constants_1.Constants.REQUEST_PROXY_ERROR, constants_1.Constants.PORT_ERROR_MESSAGE);
        return new request_proxy_1.RequestProxy(this._host, this._port, this._user, this._password);
    }
}
exports.ProxyBuilder = ProxyBuilder;
//# sourceMappingURL=proxy_builder.js.map