"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
class Constants {
}
exports.Constants = Constants;
Constants.TYPE_VS_DATATYPE = new Map([
    ["map", "[object Map]"],
    ["hashmap", "[object Map]"],
    ["string", "[object String]"],
    ["list", "[object Array]"],
    ["long", "[object BigInt]"],
    ["integer", "[object Number]"],
    ["float", "[object Number]"],
    ["double", "[object Number]"],
    ["boolean", "[object Boolean]"],
    ["datetime", "[object Date]"],
    ["date", "[object Date]"]
]);
Constants.SPECIAL_TYPES = new Map([
    ["DateTime", "Date"],
    ["Date", "Date"],
    ["Long", "BigInt"]
]);
Constants.OAUTH_HEADER_PREFIX = "Zoho-oauthtoken ";
Constants.AUTHORIZATION = "Authorization";
Constants.GRANT_TYPE = "grant_type";
Constants.GRANT_TYPE_AUTH_CODE = "authorization_code";
Constants.ACCESS_TOKEN = "access_token";
Constants.EXPIRES_IN = "expires_in";
Constants.EXPIRES_IN_SEC = "expires_in_sec";
Constants.REFRESH_TOKEN = "refresh_token";
Constants.CLIENT_ID = "client_id";
Constants.CLIENT_SECRET = "client_secret";
Constants.REDIRECT_URL = "redirect_url";
Constants.REQUEST_METHOD_POST = "POST";
Constants.REQUEST_METHOD_PATCH = "PATCH";
Constants.CODE = "code";
Constants.STATUS = "status";
Constants.MESSAGE = "message";
Constants.API_EXCEPTION = "API_EXCEPTION";
Constants.REQUEST_METHOD_PUT = "PUT";
Constants.REQUEST_METHOD_DELETE = "DELETE";
Constants.REQUEST_METHOD_GET = "GET";
Constants.ZOHO_SDK = "X-ZOHO-SDK";
Constants.SDK_VERSION = "3.0.0";
Constants.MYSQL_HOST = "localhost";
Constants.MYSQL_DATABASE_NAME = "zohooauth";
Constants.MYSQL_USER_NAME = "root";
Constants.MYSQL_PORT_NUMBER = 3306;
Constants.GET_TOKEN_DB_ERROR = "Exception in getToken - DBStore : ";
Constants.GET_TOKENS_DB_ERROR = "Exception in getTokens - DBStore : ";
Constants.DELETE_TOKEN_DB_ERROR = "Exception in deleteToken - DBStore : ";
Constants.DELETE_TOKENS_DB_ERROR = "Exception in deleteTokens - DBStore : ";
Constants.SAVE_TOKEN_DB_ERROR = "Exception in saveToken - DBStore : ";
Constants.GET_TOKEN_FILE_ERROR = "Exception in getToken - FileStore : ";
Constants.GET_TOKENS_FILE_ERROR = "Exception in getTokens - FileStore : ";
Constants.SAVE_TOKEN_FILE_ERROR = "Exception in saveToken - FileStore : ";
Constants.DELETE_TOKEN_FILE_ERROR = "Exception in deleteToken - FileStore : ";
Constants.DELETE_TOKENS_FILE_ERROR = "Exception in deleteTokens - FileStore : ";
Constants.TOKEN_STORE = "TOKEN_STORE";
Constants.USER_MAIL = "user_mail";
Constants.GRANT_TOKEN = "grant_token";
Constants.EXPIRY_TIME = "expiry_time";
Constants.TOKEN_ERROR = "TOKEN ERROR";
Constants.ERROR_HASH_FIELD = 'field';
Constants.ERROR_HASH_EXPECTED_TYPE = 'expected_type';
Constants.ERROR_HASH_CLASS = 'class';
Constants.CONTENT_TYPE = 'content-type';
Constants.INSTANCE_NUMBER = 'instance-number';
Constants.ERROR_HASH_MEMBER = 'member';
Constants.NAME = 'name';
Constants.DATA_TYPE_ERROR = "DATA TYPE ERROR";
Constants.VALUES = 'values';
Constants.ACCEPTED_VALUES = 'accepted-values';
Constants.ACCEPTED_TYPE = 'accepted-type';
Constants.GIVEN_TYPE = "given-type";
Constants.GIVEN_LENGTH = "given-length";
Constants.UNACCEPTED_VALUES_ERROR = 'UNACCEPTED VALUES ERROR';
Constants.MIN_LENGTH = "min-length";
Constants.MAX_LENGTH = "max-length";
Constants.ERROR_HASH_MAXIMUM_LENGTH = "maximum-length";
Constants.MAXIMUM_LENGTH_ERROR = "MAXIMUM LENGTH ERROR";
Constants.ERROR_HASH_MINIMUM_LENGTH = "minimum-length";
Constants.MINIMUM_LENGTH_ERROR = "MINIMUM LENGTH ERROR";
Constants.REGEX = "regex";
Constants.REGEX_MISMATCH_ERROR = "REGEX MISMATCH ERROR";
Constants.UNIQUE = "unique";
Constants.UNIQUE_KEY_ERROR = "UNIQUE KEY ERROR";
Constants.FIRST_INDEX = "first-index";
Constants.NEXT_INDEX = "next-index";
Constants.LONG_NAMESPACE = 'Long';
Constants.BOOLEAN_NAMESPACE = 'Boolean';
Constants.INTEGER_NAMESPACE = 'Integer';
Constants.STRING_NAMESPACE = 'String';
Constants.DOUBLE_NAMESPACE = 'Double';
Constants.DATETIME_NAMESPACE = 'DateTime';
Constants.DATE_NAMESPACE = 'Date';
Constants.DOUBLE_COLON = '::';
Constants.DOT = '.';
Constants.UNDERSCORE = "_";
Constants.STREAM_WRAPPER_CLASS_PATH = "utils/util/stream_wrapper";
Constants.FILE_NAMESPACE = "utils/util/stream_wrapper";
Constants.CONTENT_DISPOSITION = "content-disposition";
Constants.PACKAGE_PREFIX = 'com.zoho.crm.api.';
Constants.INTERFACE = "interface";
Constants.CLASSES = "classes";
Constants.CLASS_KEY = "class";
Constants.READ_ONLY = "read-only";
Constants.IS_KEY_MODIFIED = 'is_key_modified';
Constants.SET_KEY_MODIFIED = "set_key_modified";
Constants.REQUIRED = "required";
Constants.REQUIRED_IN_UPDATE = "required_in_update";
Constants.MANDATORY_VALUE_ERROR = "MANDATORY VALUE ERROR";
Constants.MANDATORY_VALUE_NULL_ERROR = "MANDATORY VALUE NULL ERROR";
Constants.MANDATORY_KEY_ERROR = "Value missing or null for mandatory key(s) :";
Constants.MANDATORY_KEY_NULL_ERROR = "Null Value for mandatory key : ";
Constants.LIST_NAMESPACE = "list";
Constants.MAP_NAMESPACE = "map";
Constants.HASH_MAP_NAMESPACE = "HashMap";
Constants.STRUCTURE_NAME = "structure_name";
Constants.KEYS = "keys";
Constants.INITIALIZATION_ERROR = 'INITIALIZATION ERROR';
Constants.INITIALIZATION_EXCEPTION = "Exception in initialization : ";
Constants.SWITCH_USER_EXCEPTION = "Exception in switching user : ";
Constants.EMAIL = "email";
Constants.USER_ERROR = "USER ERROR";
Constants.CLIENT_ID_FIELD = "clientID";
Constants.CLIENT_SECRET_FIELD = "clientSecret";
Constants.REDIRECT_URL_FIELD = "redirectURL";
Constants.TYPE = "type";
Constants.TYPE_ERROR = "TYPE ERROR";
Constants.HEADER_PARAM_VALIDATION_ERROR = "Exception in header or param validation";
Constants.TOKEN = "token";
Constants.EXPECTED_TOKEN_TYPES = "REFRESH, GRANT";
Constants.INVALID_CLIENT_ERROR = "INVALID CLIENT ERROR";
Constants.ERROR_KEY = "error";
Constants.GET_TOKEN_ERROR = "Exception in getting access token";
Constants.LOG_FILE_NAME = "sdk_logs.log";
Constants.TOKEN_FILE = "sdk_tokens.txt";
Constants.JSON_DETAILS_FILE_PATH = "json_details.json";
Constants.CONFIG_DIRECTORY = "config";
Constants.JSON_DETAILS_ERROR = "ERROR IN READING JSONDETAILS FILE";
Constants.USER = "user";
Constants.ENVIRONMENT = "environment";
Constants.STORE = "store";
Constants.SDK_CONFIG = "sdkConfig";
Constants.USER_PROXY = "proxy";
Constants.INDEX = "index";
Constants.APPLICATION_JSON_CONTENT_TYPE = 'application/json';
Constants.EXCEPTION_IS_KEY_MODIFIED = "Exception in calling isKeyModified";
Constants.EXCEPTION_SET_KEY_MODIFIED = "Exception in calling setKeyModified";
Constants.ARRAY_TYPE = "[object Array]";
Constants.ARRAY_KEY = "Array";
Constants.MAP_TYPE = "[object Map]";
Constants.OBJECT_TYPE = "[object Object]";
Constants.OBJECT_KEY = "object";
Constants.STRING_TYPE = "[object String]";
Constants.INTEGER_TYPE = "[object Integer]";
Constants.RECORD_NAMESPACE = 'core/com/zoho/crm/api/record/record';
Constants.ATTACHMENTS_NAMESPACE = 'core/com/zoho/crm/api/attachments/attachment';
Constants.FIELD_FILE_NAMESPACE = 'core/com/zoho/crm/api/record/file_details';
Constants.LINE_TAX_NAMESPACE = 'core/com/zoho/crm/api/record/line_tax';
Constants.INVENTORY_LINE_ITEMS = 'core/com/zoho/crm/api/record/inventory_line_items';
Constants.PRICINGDETAILS = 'core/com/zoho/crm/api/record/pricing_details';
Constants.COMMENT_NAMESPACE = 'core/com/zoho/crm/api/record/comment';
Constants.PARTICIPANTS = 'core/com/zoho/crm/api/record/participants';
Constants.REMINDAT_NAMESPACE = 'core/com/zoho/crm/api/record/remind_at';
Constants.CONSENT_NAMESPACE = 'core/com/zoho/crm/api/record/consent';
Constants.REMINDER_NAMESPACE = 'core/com/zoho/crm/api/record/reminder';
Constants.RECURRING_ACTIVITY_NAMESPACE = 'core/com/zoho/crm/api/record/recurring_activity';
Constants.USER_NAMESPACE = 'core/com/zoho/crm/api/users/user';
Constants.MODULE_NAMESPACE = 'core/com/zoho/crm/api/modules/module';
Constants.LAYOUT_NAMESPACE = 'core/com/zoho/crm/api/layouts/layout';
Constants.KEY_VALUES = "keyValues";
Constants.KEY_MODIFIED = "keyModified";
Constants.CHOICE_NAMESPACE = "utils/util/choice";
Constants.MODULE = "module";
Constants.CHOICE_PATH = "./choice";
Constants.PACKAGE_NAMESPACE = "core/com/zoho/crm/api";
Constants.MODULEPACKAGENAME = "modulePackageName";
Constants.MODULEDETAILS = "moduleDetails";
Constants.KEYS_TO_SKIP = ["Created_Time", "Modified_Time", "Created_By", "Modified_By", "Tag"];
Constants.PRODUCT_DETAILS = "Product_Details";
Constants.PRICING_DETAILS = "Pricing_Details";
Constants.PARTICIPANT_API_NAME = "Participants";
Constants.COMMENTS = 'Comments';
Constants.SOLUTIONS = 'solutions';
Constants.CASES = 'cases';
Constants.NOTES = "notes";
Constants.ATTACHMENTS = "$attachments";
Constants.INVENTORY_MODULES = ["invoices", "sales_orders", "purchase_orders", "quotes"];
Constants.PRICE_BOOKS = "price_books";
Constants.EVENTS = "events";
Constants.CALLS = "calls";
Constants.CALL_DURATION = "call_duration";
Constants.ACTIVITIES = "activities";
Constants.LAYOUT = "Layout";
Constants.SUBFORM = "subform";
Constants.LOOKUP = "lookup";
Constants.SE_MODULE = "se_module";
Constants.FIELDS_LAST_MODIFIED_TIME = "FIELDS-LAST-MODIFIED-TIME";
Constants.ATTACHMENT_ID = "attachment_id";
Constants.FILE_ID = "file_id";
Constants.DELETE_FIELD_FILE_ERROR = "Exception in deleting Current User Fields file";
Constants.DELETE_FIELD_FILES_ERROR = "Exception in deleting all Fields files";
Constants.DELETE_MODULE_FROM_FIELDFILE_ERROR = "Exception in deleting module from Fields file";
Constants.HTTP = "http";
Constants.CONTENT_API_URL = "content.zohoapis.com";
Constants.INVALID_URL_ERROR = "Invalid URL Error";
Constants.SET_API_URL_EXCEPTION = "Exception in setting API URL : ";
Constants.AUTHENTICATION_EXCEPTION = "Exception in authenticating current request : ";
Constants.FORM_REQUEST_EXCEPTION = "Exception in forming request body : ";
Constants.API_CALL_EXCEPTION = "Exception in current API call execution : ";
Constants.CORE = "core";
Constants.SAVE_TOKEN_ERROR = "Exception in saving tokens";
Constants.SET_TO_CONTENT_TYPE = ["/crm/bulk/v2/read", "/crm/bulk/v2/write"];
Constants.CONTENT_TYPE_HEADER = "Content-Type";
Constants.EVENTS_MODULE_PARAMS = ["startDateTime", "endDateTime"];
Constants.FILE_BODY_WRAPPER = "file_body_wrapper";
Constants.USER_NOT_FOUND_ERROR_MESSAGE = "Given user not found in SDK configuration details";
Constants.USER_NOT_FOUND_ERROR = "USER NOT FOUND ERROR";
Constants.LINE_TAX = "$line_tax";
Constants.RESOURCE_PATH_ERROR = "EMPTY_RESOURCE_PATH";
Constants.RESOURCE_PATH_ERROR_MESSAGE = "Resource Path MUST NOT be null/empty.";
Constants.INITIALIZATION_SUCCESSFUL = "Initialization successful ";
Constants.INITIALIZATION_SWITCHED = "Initialization switched ";
Constants.IN_ENVIRONMENT = " in Environment : ";
Constants.FOR_EMAIL_ID = "for Email Id : ";
Constants.FIELD_DETAILS_DIRECTORY = "resources";
Constants.CANT_DISCLOSE = " ## can't disclose ## ";
Constants.URL = "URL";
Constants.HEADERS = "HEADERS";
Constants.PARAMS = "PARAMS";
Constants.REQUEST_METHOD = "REQUEST-METHOD";
Constants.RELATED_LISTS = "Related_Lists";
Constants.API_NAME = "api_name";
Constants.HREF = "href";
Constants.NO_CONTENT_STATUS_CODE = 204;
Constants.NOT_MODIFIED_STATUS_CODE = 304;
Constants.EXCEPTION = "Exception ";
Constants.REFRESH_TOKEN_MESSAGE = "Access Token has expired. Hence refreshing.";
Constants.PRIMARY = "primary";
Constants.ID = "id";
Constants.REQUEST_CATEGORY_CREATE = "CREATE";
Constants.REQUEST_CATEGORY_UPDATE = "UPDATE";
Constants.REQUEST_CATEGORY_READ = "READ";
Constants.REQUEST_CATEGORY_ACTION = "ACTION";
Constants.FORMULA = "formula";
Constants.ACCOUNTS = "accounts";
Constants.REFRESH_SINGLE_MODULE_FIELDS_ERROR = "Exception in refreshing fields of module : ";
Constants.REFRESH_ALL_MODULE_FIELDS_ERROR = "Exception in refreshing fields of all modules : ";
Constants.SKIP_MANDATORY = "skip_mandatory";
Constants.PRIMARY_KEY_ERROR = "Value missing or null for required key(s) : ";
Constants.PICKLIST = "picklist";
Constants.AUTO_REFRESH_FIELDS_ERROR_MESSAGE = "autoRefreshFields MUST NOT be null.";
Constants.SDK_UNINITIALIZATION_ERROR = "SDK UNINITIALIZED ERROR";
Constants.SDK_UNINITIALIZATION_MESSAGE = "SDK is UnInitialized";
Constants.USER_PROXY_ERROR = "USERPROXY ERROR";
Constants.HOST_ERROR_MESSAGE = "Host MUST NOT be null.";
Constants.PORT_ERROR_MESSAGE = "Port MUST NOT be null.";
Constants.SWITCH_USER_ERROR = "SWITCH USER ERROR";
Constants.PARAMETER_NULL_ERROR = "NULL PARAMETER ERROR";
Constants.HEADER_NULL_ERROR = "NULL HEADER ERROR";
Constants.PARAM_NAME_NULL_ERROR = "NULL PARAM NAME ERROR";
Constants.HEADER_NAME_NULL_ERROR = "NULL HEADER NAME ERROR";
Constants.PARAM_NAME_NULL_ERROR_MESSAGE = "Param Name MUST NOT be null";
Constants.HEADER_NAME_NULL_ERROR_MESSAGE = "Header Name MUST NOT be null";
Constants.NULL_VALUE_ERROR_MESSAGE = " MUST NOT be null";
Constants.PARAM_INSTANCE_NULL_ERROR = "Param Instance MUST NOT be null";
Constants.HEADER_INSTANCE_NULL_ERROR = "Header Instance MUST NOT be null";
Constants.PARAMETER_ERROR_MESSAGE = " MUST NOT be null";
Constants.UNSUPPORTED_IN_API = "API UNSUPPORTED OPERATION";
Constants.UNSUPPORTED_IN_API_MESSAGE = " Operation is not supported by API";
Constants.NULL_VALUE = "null";
Constants.PROXY_SETTINGS = "Proxy settings - ";
Constants.PROXY_HOST = "Host: ";
Constants.PROXY_PORT = "Port: ";
Constants.PROXY_USER = "User: ";
Constants.API_ERROR_RESPONSE = "Error response : ";
Constants.FILE_ERROR = "file_error";
Constants.FILE_DOES_NOT_EXISTS = "file does not exists";
Constants.CONSENT_LOOKUP = "consent_lookup";
Constants.IS_GENERATE_REQUEST_BODY = ["PATCH", "POST", "PUT"];
Constants.BIGINT_TYPE = "bigint";
Constants.USER_SIGNATURE_ERROR = "USERSIGNATURE ERROR";
Constants.REGULAR_EXPRESSION = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
Constants.SDK_NAME = "typescript-2.0";
Constants.RESOURCE_PATH_INVALID_ERROR_MESSAGE = "Resource Path MUST be a valid directory.";
Constants.MYSQL_TABLE_NAME = "oauthtoken";
Constants.USER_MAIL_NULL_ERROR = "USER MAIL NULL ERROR";
Constants.USER_MAIL_NULL_ERROR_MESSAGE = "User Mail MUST NOT be null. Use userMail setter to set value.";
Constants.GET_TOKEN_BY_ID_FILE_ERROR = "Exception in getTokenById - FileStore : Given ID is invalid";
Constants.CLIENT_ID_NULL_ERROR_MESSAGE = "ClientID MUST NOT be null";
Constants.CLIENT_SECRET_NULL_ERROR_MESSAGE = "ClientSecret MUST NOT be null";
Constants.OAUTH_MANDATORY_KEYS = ["grantToken", "refreshToken", "id", "accessToken"];
Constants.REDIRECT_URI = "redirect_uri";
Constants.INVALID_TOKEN_ERROR = "INVALID TOKEN ERROR";
Constants.NO_ACCESS_TOKEN_ERROR = "ACCESS TOKEN IS NOT PRESENT IN RESPONSE";
Constants.GET_TOKEN_BY_ID_DB_ERROR = "Exception in getTokenById - DBStore : Given ID is invalid";
Constants.USER_SIGNATURE_ERROR_MESSAGE = "UserSignature MUST NOT be null.";
Constants.ENVIRONMENT_ERROR_MESSAGE = "Environment MUST NOT be null.";
Constants.TOKEN_ERROR_MESSAGE = "Token MUST NOT be null.";
Constants.STORE_ERROR_MESSAGE = "Store MUST NOT be null.";
Constants.SDK_CONFIG_ERROR_MESSAGE = "sdkConfig MUST NOT be null.";
Constants.REQUEST_PROXY_ERROR = "REQUEST_PROXY ERROR";
Constants.FLOAT_NAMESPACE = 'Float';
Constants.OBJECT_NAMESPACE = 'Object';
Constants.DEFAULT_MODULENAME_VS_APINAME = new Map([
    ["leads", "Leads"],
    ["contacts", "Contacts"],
    ["accounts", "Accounts"],
    ["deals", "Deals"],
    ["tasks", "Tasks"],
    ["events", "Events"],
    ["activities", "Activities"],
    ["calls", "Calls"],
    ["products", "Products"],
    ["quotes", "Quotes"],
    ["sales_orders", "Sales_Orders"],
    ["purchase_orders", "Purchase_Orders"],
    ["invoices", "Invoices"],
    ["campaigns", "Campaigns"],
    ["vendors", "Vendors"],
    ["price_books", "Price_Books"],
    ["cases", "Cases"],
    ["solutions", "Solutions"],
    ["visits", "Visits"],
    ["approvals", "Approvals"],
    ["notes", "Notes"],
    ["attachments", "Attachments"],
    ["actions_performed", "Actions_Performed"]
]);
Constants.SDK_MODULE_METADATA = "SDK-MODULE-METADATA";
Constants.SKIP_MODULES = ["deals"];
Constants.PHOTO_SUPPORTED_MODULES = ["leads", "contacts", "accounts", "products", "vendors"];
Constants.GENERATED_TYPE = "generated_type";
Constants.GENERATED_TYPE_CUSTOM = "custom";
Constants.UPLOAD_PHOTO_UNSUPPORTED_ERROR = "UPLOAD PHOTO UNSUPPORTED MODULE";
Constants.UPLOAD_PHOTO_UNSUPPORTED_MESSAGE = "Photo Upload Operation is not supported by the module: ";
Constants.TYPE_SCRIPT = "typescript_";
//# sourceMappingURL=constants.js.map