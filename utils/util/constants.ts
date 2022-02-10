export class Constants {
    public static TYPE_VS_DATATYPE = new Map([
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

    public static SPECIAL_TYPES = new Map([
        ["DateTime", "Date"],
        ["Date", "Date"],
        ["Long", "BigInt"]
    ]);

    public static OAUTH_HEADER_PREFIX = "Zoho-oauthtoken ";

    public static AUTHORIZATION = "Authorization";

    public static GRANT_TYPE = "grant_type";

    public static GRANT_TYPE_AUTH_CODE = "authorization_code";

    public static ACCESS_TOKEN = "access_token";

    public static EXPIRES_IN = "expires_in";

    public static EXPIRES_IN_SEC = "expires_in_sec";

    public static REFRESH_TOKEN = "refresh_token";

    public static CLIENT_ID = "client_id";

    public static CLIENT_SECRET = "client_secret";

    public static REDIRECT_URL = "redirect_url";

    public static REQUEST_METHOD_POST = "POST";

    public static REQUEST_METHOD_PATCH = "PATCH";

    public static CODE = "code";

    public static STATUS = "status";

    public static MESSAGE = "message";

    public static API_EXCEPTION = "API_EXCEPTION";

    public static REQUEST_METHOD_PUT = "PUT";

    public static REQUEST_METHOD_DELETE = "DELETE";

    public static REQUEST_METHOD_GET = "GET";

    public static ZOHO_SDK = "X-ZOHO-SDK";

    public static SDK_VERSION = "3.0.0";

    public static MYSQL_HOST = "localhost";

    public static MYSQL_DATABASE_NAME = "zohooauth";

    public static MYSQL_USER_NAME = "root";

    public static MYSQL_PORT_NUMBER = 3306;

    public static GET_TOKEN_DB_ERROR = "Exception in getToken - DBStore : ";

    public static GET_TOKENS_DB_ERROR = "Exception in getTokens - DBStore : ";

    public static DELETE_TOKEN_DB_ERROR = "Exception in deleteToken - DBStore : ";

    public static DELETE_TOKENS_DB_ERROR = "Exception in deleteTokens - DBStore : ";

    public static SAVE_TOKEN_DB_ERROR = "Exception in saveToken - DBStore : ";

    public static GET_TOKEN_FILE_ERROR = "Exception in getToken - FileStore : ";

    public static GET_TOKENS_FILE_ERROR = "Exception in getTokens - FileStore : ";

    public static SAVE_TOKEN_FILE_ERROR = "Exception in saveToken - FileStore : ";

    public static DELETE_TOKEN_FILE_ERROR = "Exception in deleteToken - FileStore : ";

    public static DELETE_TOKENS_FILE_ERROR = "Exception in deleteTokens - FileStore : ";

    public static TOKEN_STORE = "TOKEN_STORE";

    public static USER_MAIL = "user_mail";

    public static GRANT_TOKEN = "grant_token";

    public static EXPIRY_TIME = "expiry_time";

    public static TOKEN_ERROR = "TOKEN ERROR";

    public static ERROR_HASH_FIELD = 'field';

    public static ERROR_HASH_EXPECTED_TYPE = 'expected_type';

    public static ERROR_HASH_CLASS = 'class';

    public static CONTENT_TYPE = 'content-type';

    public static INSTANCE_NUMBER = 'instance-number';

    public static ERROR_HASH_MEMBER = 'member';

    public static NAME = 'name';

    public static DATA_TYPE_ERROR = "DATA TYPE ERROR";

    public static VALUES = 'values';

    public static ACCEPTED_VALUES = 'accepted-values';

    public static ACCEPTED_TYPE = 'accepted-type';

    public static GIVEN_TYPE = "given-type";

    public static GIVEN_LENGTH = "given-length";

    public static UNACCEPTED_VALUES_ERROR = 'UNACCEPTED VALUES ERROR';

    public static MIN_LENGTH = "min-length";

    public static MAX_LENGTH = "max-length";

    public static ERROR_HASH_MAXIMUM_LENGTH = "maximum-length";

    public static MAXIMUM_LENGTH_ERROR = "MAXIMUM LENGTH ERROR";

    public static ERROR_HASH_MINIMUM_LENGTH = "minimum-length";

    public static MINIMUM_LENGTH_ERROR = "MINIMUM LENGTH ERROR";

    public static REGEX = "regex";

    public static REGEX_MISMATCH_ERROR = "REGEX MISMATCH ERROR";

    public static UNIQUE = "unique";

    public static UNIQUE_KEY_ERROR = "UNIQUE KEY ERROR";

    public static FIRST_INDEX = "first-index";

    public static NEXT_INDEX = "next-index";

    public static LONG_NAMESPACE = 'Long';

    public static BOOLEAN_NAMESPACE = 'Boolean';

    public static INTEGER_NAMESPACE = 'Integer';

    public static STRING_NAMESPACE = 'String';

    public static DOUBLE_NAMESPACE = 'Double';

    public static DATETIME_NAMESPACE = 'DateTime';

    public static DATE_NAMESPACE = 'Date';

    public static DOUBLE_COLON = '::';

    public static DOT = '.';

    public static UNDERSCORE = "_";

    public static STREAM_WRAPPER_CLASS_PATH = "utils/util/stream_wrapper";

    public static FILE_NAMESPACE = "utils/util/stream_wrapper";

    public static CONTENT_DISPOSITION = "content-disposition";

    public static PACKAGE_PREFIX = 'com.zoho.crm.api.';

    public static INTERFACE = "interface";

    public static CLASSES = "classes";

    public static CLASS_KEY = "class";

    public static READ_ONLY = "read-only";

    public static IS_KEY_MODIFIED = 'is_key_modified';

    public static SET_KEY_MODIFIED = "set_key_modified";

    public static REQUIRED = "required";

    public static REQUIRED_IN_UPDATE = "required_in_update";

    public static MANDATORY_VALUE_ERROR = "MANDATORY VALUE ERROR";

    public static MANDATORY_VALUE_NULL_ERROR = "MANDATORY VALUE NULL ERROR";

    public static MANDATORY_KEY_ERROR = "Value missing or null for mandatory key(s) :";

    public static MANDATORY_KEY_NULL_ERROR = "Null Value for mandatory key : ";

    public static LIST_NAMESPACE = "list";

    public static MAP_NAMESPACE = "map";

    public static HASH_MAP_NAMESPACE = "HashMap";

    public static STRUCTURE_NAME = "structure_name";

    public static KEYS = "keys";

    public static INITIALIZATION_ERROR = 'INITIALIZATION ERROR';

    public static INITIALIZATION_EXCEPTION = "Exception in initialization : ";

    public static SWITCH_USER_EXCEPTION = "Exception in switching user : ";

    public static EMAIL = "email";

    public static USER_ERROR = "USER ERROR";

    public static CLIENT_ID_FIELD = "clientID";

    public static CLIENT_SECRET_FIELD = "clientSecret";

    public static REDIRECT_URL_FIELD = "redirectURL";

    public static TYPE = "type";

    public static TYPE_ERROR = "TYPE ERROR";

    public static HEADER_PARAM_VALIDATION_ERROR = "Exception in header or param validation";

    public static TOKEN = "token";

    public static EXPECTED_TOKEN_TYPES = "REFRESH, GRANT";

    public static INVALID_CLIENT_ERROR = "INVALID CLIENT ERROR";

    public static ERROR_KEY = "error";

    public static GET_TOKEN_ERROR = "Exception in getting access token";

    public static LOG_FILE_NAME = "sdk_logs.log";

    public static TOKEN_FILE = "sdk_tokens.txt";

    public static JSON_DETAILS_FILE_PATH = "json_details.json";

    public static CONFIG_DIRECTORY = "config";

    public static JSON_DETAILS_ERROR = "ERROR IN READING JSONDETAILS FILE";

    public static USER = "user";

    public static ENVIRONMENT = "environment"

    public static STORE = "store";

    public static SDK_CONFIG = "sdkConfig";

    public static USER_PROXY = "proxy";

    public static INDEX = "index";

    public static APPLICATION_JSON_CONTENT_TYPE = 'application/json'

    public static EXCEPTION_IS_KEY_MODIFIED = "Exception in calling isKeyModified";

    public static EXCEPTION_SET_KEY_MODIFIED = "Exception in calling setKeyModified";

    public static ARRAY_TYPE = "[object Array]";

    public static ARRAY_KEY = "Array";

    public static MAP_TYPE = "[object Map]";

    public static OBJECT_TYPE = "[object Object]";

    public static OBJECT_KEY = "object";

    public static STRING_TYPE = "[object String]";

    public static INTEGER_TYPE = "[object Integer]";

    public static RECORD_NAMESPACE = 'core/com/zoho/crm/api/record/record';

    public static ATTACHMENTS_NAMESPACE = 'core/com/zoho/crm/api/attachments/attachment';

    public static FIELD_FILE_NAMESPACE = 'core/com/zoho/crm/api/record/file_details';

    public static LINE_TAX_NAMESPACE = 'core/com/zoho/crm/api/record/line_tax';

    public static INVENTORY_LINE_ITEMS = 'core/com/zoho/crm/api/record/inventory_line_items';

    public static PRICINGDETAILS = 'core/com/zoho/crm/api/record/pricing_details';

    public static COMMENT_NAMESPACE = 'core/com/zoho/crm/api/record/comment';

    public static PARTICIPANTS = 'core/com/zoho/crm/api/record/participants';

    public static REMINDAT_NAMESPACE = 'core/com/zoho/crm/api/record/remind_at';

    public static CONSENT_NAMESPACE = 'core/com/zoho/crm/api/record/consent';

    public static REMINDER_NAMESPACE = 'core/com/zoho/crm/api/record/reminder';

    public static RECURRING_ACTIVITY_NAMESPACE = 'core/com/zoho/crm/api/record/recurring_activity';

    public static USER_NAMESPACE = 'core/com/zoho/crm/api/users/user';

    public static MODULE_NAMESPACE = 'core/com/zoho/crm/api/modules/module';

    public static LAYOUT_NAMESPACE = 'core/com/zoho/crm/api/layouts/layout';

    public static KEY_VALUES = "keyValues";

    public static KEY_MODIFIED = "keyModified";

    public static CHOICE_NAMESPACE = "utils/util/choice";

    public static MODULE = "module";

    public static CHOICE_PATH = "./choice";

    public static PACKAGE_NAMESPACE = "core/com/zoho/crm/api";

    public static MODULEPACKAGENAME = "modulePackageName";

    public static MODULEDETAILS = "moduleDetails";

    public static KEYS_TO_SKIP = ["Created_Time", "Modified_Time", "Created_By", "Modified_By", "Tag"];

    public static PRODUCT_DETAILS = "Product_Details";

    public static PRICING_DETAILS = "Pricing_Details";

    public static PARTICIPANT_API_NAME = "Participants";

    public static COMMENTS = 'Comments';

    public static SOLUTIONS = 'solutions';

    public static CASES = 'cases';

    public static NOTES = "notes";

    public static ATTACHMENTS = "$attachments";

    public static INVENTORY_MODULES = ["invoices", "sales_orders", "purchase_orders", "quotes"];

    public static PRICE_BOOKS = "price_books";

    public static EVENTS = "events";

    public static CALLS = "calls";

    public static CALL_DURATION = "call_duration";

    public static ACTIVITIES = "activities";

    public static LAYOUT = "Layout";

    public static SUBFORM = "subform";

    public static LOOKUP = "lookup";

    public static SE_MODULE = "se_module";

    public static FIELDS_LAST_MODIFIED_TIME = "FIELDS-LAST-MODIFIED-TIME";

    public static ATTACHMENT_ID = "attachment_id";

    public static FILE_ID = "file_id";

    public static DELETE_FIELD_FILE_ERROR = "Exception in deleting Current User Fields file";

    public static DELETE_FIELD_FILES_ERROR = "Exception in deleting all Fields files";

    public static DELETE_MODULE_FROM_FIELDFILE_ERROR = "Exception in deleting module from Fields file";

    public static HTTP = "http";

    public static CONTENT_API_URL = "content.zohoapis.com";

    public static INVALID_URL_ERROR = "Invalid URL Error";

    public static SET_API_URL_EXCEPTION = "Exception in setting API URL : ";

    public static AUTHENTICATION_EXCEPTION = "Exception in authenticating current request : ";

    public static FORM_REQUEST_EXCEPTION = "Exception in forming request body : ";

    public static API_CALL_EXCEPTION = "Exception in current API call execution : ";

    public static CORE = "core";

    public static SAVE_TOKEN_ERROR = "Exception in saving tokens";

    public static SET_TO_CONTENT_TYPE = ["/crm/bulk/v2/read", "/crm/bulk/v2/write"];

    public static CONTENT_TYPE_HEADER = "Content-Type";

    public static EVENTS_MODULE_PARAMS = ["startDateTime", "endDateTime"];

    public static FILE_BODY_WRAPPER = "file_body_wrapper";

    public static USER_NOT_FOUND_ERROR_MESSAGE = "Given user not found in SDK configuration details";

    public static USER_NOT_FOUND_ERROR = "USER NOT FOUND ERROR";

    public static LINE_TAX = "$line_tax";

    public static RESOURCE_PATH_ERROR = "EMPTY_RESOURCE_PATH";

    public static RESOURCE_PATH_ERROR_MESSAGE = "Resource Path MUST NOT be null/empty.";

    public static INITIALIZATION_SUCCESSFUL = "Initialization successful ";

    public static INITIALIZATION_SWITCHED = "Initialization switched ";

    public static IN_ENVIRONMENT = " in Environment : ";

    public static FOR_EMAIL_ID = "for Email Id : ";

    public static FIELD_DETAILS_DIRECTORY = "resources";

    public static CANT_DISCLOSE = " ## can't disclose ## ";

    public static URL = "URL";

    public static HEADERS = "HEADERS";

    public static PARAMS = "PARAMS";

    public static REQUEST_METHOD = "REQUEST-METHOD";

    public static RELATED_LISTS = "Related_Lists";

    public static API_NAME = "api_name";

    public static HREF = "href";

    public static NO_CONTENT_STATUS_CODE = 204;

    public static NOT_MODIFIED_STATUS_CODE = 304;

    public static EXCEPTION = "Exception ";

    public static REFRESH_TOKEN_MESSAGE = "Access Token has expired. Hence refreshing.";

    public static PRIMARY = "primary";

    public static ID = "id";

    public static REQUEST_CATEGORY_CREATE = "CREATE";

    public static REQUEST_CATEGORY_UPDATE = "UPDATE";

    public static REQUEST_CATEGORY_READ = "READ";

    public static REQUEST_CATEGORY_ACTION = "ACTION";

    public static FORMULA = "formula";

    public static ACCOUNTS = "accounts";

    public static REFRESH_SINGLE_MODULE_FIELDS_ERROR = "Exception in refreshing fields of module : ";

    public static REFRESH_ALL_MODULE_FIELDS_ERROR = "Exception in refreshing fields of all modules : ";

    public static SKIP_MANDATORY = "skip_mandatory";

    public static PRIMARY_KEY_ERROR = "Value missing or null for required key(s) : ";

    public static PICKLIST = "picklist";

    public static AUTO_REFRESH_FIELDS_ERROR_MESSAGE = "autoRefreshFields MUST NOT be null.";

    public static SDK_UNINITIALIZATION_ERROR = "SDK UNINITIALIZED ERROR";

    public static SDK_UNINITIALIZATION_MESSAGE = "SDK is UnInitialized";

    public static USER_PROXY_ERROR = "USERPROXY ERROR";

    public static HOST_ERROR_MESSAGE = "Host MUST NOT be null.";

    public static PORT_ERROR_MESSAGE = "Port MUST NOT be null.";

    public static SWITCH_USER_ERROR = "SWITCH USER ERROR";

    public static PARAMETER_NULL_ERROR = "NULL PARAMETER ERROR";

    public static HEADER_NULL_ERROR = "NULL HEADER ERROR";

    public static PARAM_NAME_NULL_ERROR = "NULL PARAM NAME ERROR";

    public static HEADER_NAME_NULL_ERROR = "NULL HEADER NAME ERROR";

    public static PARAM_NAME_NULL_ERROR_MESSAGE = "Param Name MUST NOT be null";

    public static HEADER_NAME_NULL_ERROR_MESSAGE = "Header Name MUST NOT be null";

    public static NULL_VALUE_ERROR_MESSAGE = " MUST NOT be null";

    public static PARAM_INSTANCE_NULL_ERROR = "Param Instance MUST NOT be null";

    public static HEADER_INSTANCE_NULL_ERROR = "Header Instance MUST NOT be null";

    public static PARAMETER_ERROR_MESSAGE = " MUST NOT be null";

    public static UNSUPPORTED_IN_API = "API UNSUPPORTED OPERATION";

    public static UNSUPPORTED_IN_API_MESSAGE = " Operation is not supported by API";

    public static NULL_VALUE = "null";

    public static PROXY_SETTINGS = "Proxy settings - ";

    public static PROXY_HOST = "Host: ";

    public static PROXY_PORT = "Port: ";

    public static PROXY_USER = "User: ";

    public static API_ERROR_RESPONSE = "Error response : ";

    public static FILE_ERROR = "file_error";

    public static FILE_DOES_NOT_EXISTS = "file does not exists";

    public static CONSENT_LOOKUP = "consent_lookup";

    public static IS_GENERATE_REQUEST_BODY = ["PATCH", "POST", "PUT"];

    public static BIGINT_TYPE = "bigint";

    public static USER_SIGNATURE_ERROR = "USERSIGNATURE ERROR";

    public static REGULAR_EXPRESSION = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    public static SDK_NAME = "typescript-2.0";

    public static RESOURCE_PATH_INVALID_ERROR_MESSAGE = "Resource Path MUST be a valid directory.";

    public static MYSQL_TABLE_NAME = "oauthtoken";

    public static USER_MAIL_NULL_ERROR = "USER MAIL NULL ERROR";

    public static USER_MAIL_NULL_ERROR_MESSAGE = "User Mail MUST NOT be null. Use userMail setter to set value.";

    public static GET_TOKEN_BY_ID_FILE_ERROR = "Exception in getTokenById - FileStore : Given ID is invalid";

    public static CLIENT_ID_NULL_ERROR_MESSAGE = "ClientID MUST NOT be null";

    public static CLIENT_SECRET_NULL_ERROR_MESSAGE = "ClientSecret MUST NOT be null";

    public static OAUTH_MANDATORY_KEYS = ["grantToken", "refreshToken", "id", "accessToken"];

    public static REDIRECT_URI = "redirect_uri";

    public static INVALID_TOKEN_ERROR = "INVALID TOKEN ERROR";

    public static NO_ACCESS_TOKEN_ERROR = "ACCESS TOKEN IS NOT PRESENT IN RESPONSE";

    public static GET_TOKEN_BY_ID_DB_ERROR = "Exception in getTokenById - DBStore : Given ID is invalid";

    public static USER_SIGNATURE_ERROR_MESSAGE = "UserSignature MUST NOT be null.";

    public static ENVIRONMENT_ERROR_MESSAGE = "Environment MUST NOT be null.";

    public static TOKEN_ERROR_MESSAGE = "Token MUST NOT be null.";

    public static STORE_ERROR_MESSAGE = "Store MUST NOT be null.";

    public static SDK_CONFIG_ERROR_MESSAGE = "sdkConfig MUST NOT be null.";

    public static REQUEST_PROXY_ERROR = "REQUEST_PROXY ERROR";

    public static FLOAT_NAMESPACE = 'Float';

    public static OBJECT_NAMESPACE = 'Object';

    public static DEFAULT_MODULENAME_VS_APINAME = new Map([
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

    public static SDK_MODULE_METADATA = "SDK-MODULE-METADATA";

    public static SKIP_MODULES = ["deals"];

    public static PHOTO_SUPPORTED_MODULES = ["leads", "contacts", "accounts", "products", "vendors"];

    public static GENERATED_TYPE = "generated_type";

    public static GENERATED_TYPE_CUSTOM = "custom";

    public static UPLOAD_PHOTO_UNSUPPORTED_ERROR = "UPLOAD PHOTO UNSUPPORTED MODULE";

    public static UPLOAD_PHOTO_UNSUPPORTED_MESSAGE = "Photo Upload Operation is not supported by the module: ";

    public static TYPE_SCRIPT = "typescript_";
}