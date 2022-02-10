import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {RecordActionHandler} from "./record_action_handler";
import {RecordBodyWrapper} from "./record_body_wrapper";
import {RecordResponseHandler} from "./record_response_handler";
import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import {Utility} from "../../../../../../utils/util/utility";
import { Constants } from "../../../../../../utils/util/constants";

class ContactRolesOperations{
	/**
	 * The method to get contact roles
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getContactRoles(): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/Contacts/roles");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create contact roles
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createContactRoles(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/Contacts/roles");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update contact roles
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateContactRoles(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/Contacts/roles");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete contact roles
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteContactRoles(paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/Contacts/roles");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get contact role
	 * @param id A bigint representing the id
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getContactRole(id: bigint): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/Contacts/roles/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update contact role
	 * @param id A bigint representing the id
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateContactRole(id: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/Contacts/roles/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete contact role
	 * @param id A bigint representing the id
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteContactRole(id: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/Contacts/roles/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get all contact roles of deal
	 * @param dealId A bigint representing the dealId
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<RecordResponseHandler>
	 * @throws SDKException
	 */
	public async getAllContactRolesOfDeal(dealId: bigint, paramInstance?: ParameterMap): Promise<APIResponse<RecordResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/Deals/");
		apiPath = apiPath.concat(dealId.toString());
		apiPath = apiPath.concat("/Contact_Roles");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setModuleAPIName("Contacts");
		await Utility.getFields("Contacts", handlerInstance);
		let RecordResponseHandler = require.resolve("./record_response_handler");
		return handlerInstance.apiCall<RecordResponseHandler>(RecordResponseHandler, "application/json");

	}

	/**
	 * The method to get contact role of deal
	 * @param contactId A bigint representing the contactId
	 * @param dealId A bigint representing the dealId
	 * @returns An instance of APIResponse<RecordResponseHandler>
	 * @throws SDKException
	 */
	public async getContactRoleOfDeal(contactId: bigint, dealId: bigint): Promise<APIResponse<RecordResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/Deals/");
		apiPath = apiPath.concat(dealId.toString());
		apiPath = apiPath.concat("/Contact_Roles/");
		apiPath = apiPath.concat(contactId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setModuleAPIName("Contacts");
		await Utility.getFields("Contacts", handlerInstance);
		let RecordResponseHandler = require.resolve("./record_response_handler");
		return handlerInstance.apiCall<RecordResponseHandler>(RecordResponseHandler, "application/json");

	}

	/**
	 * The method to add contact role to deal
	 * @param contactId A bigint representing the contactId
	 * @param dealId A bigint representing the dealId
	 * @param request An instance of RecordBodyWrapper
	 * @returns An instance of APIResponse<RecordActionHandler>
	 * @throws SDKException
	 */
	public async addContactRoleToDeal(contactId: bigint, dealId: bigint, request: RecordBodyWrapper): Promise<APIResponse<RecordActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/Deals/");
		apiPath = apiPath.concat(dealId.toString());
		apiPath = apiPath.concat("/Contact_Roles/");
		apiPath = apiPath.concat(contactId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let RecordActionHandler = require.resolve("./record_action_handler");
		return handlerInstance.apiCall<RecordActionHandler>(RecordActionHandler, "application/json");

	}

	/**
	 * The method to remove contact role from deal
	 * @param contactId A bigint representing the contactId
	 * @param dealId A bigint representing the dealId
	 * @returns An instance of APIResponse<RecordActionHandler>
	 * @throws SDKException
	 */
	public async removeContactRoleFromDeal(contactId: bigint, dealId: bigint): Promise<APIResponse<RecordActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/Deals/");
		apiPath = apiPath.concat(dealId.toString());
		apiPath = apiPath.concat("/Contact_Roles/");
		apiPath = apiPath.concat(contactId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		let RecordActionHandler = require.resolve("./record_action_handler");
		return handlerInstance.apiCall<RecordActionHandler>(RecordActionHandler, "application/json");

	}

}
class DeleteContactRolesParam{

	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.ContactRoles.DeleteContactRolesParam");
}

class GetAllContactRolesOfDealParam{

	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.ContactRoles.GetAllContactRolesOfDealParam");
}

export {
	DeleteContactRolesParam as DeleteContactRolesParam,
	ContactRolesOperations as MasterModel,
	ContactRolesOperations as ContactRolesOperations,
	GetAllContactRolesOfDealParam as GetAllContactRolesOfDealParam
}
