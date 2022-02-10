import {Header} from "../../../../../../routes/header";
import {HeaderMap} from "../../../../../../routes/header_map";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {ResponseHandler} from "./response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import {Utility} from "../../../../../../utils/util/utility";
import { Constants } from "../../../../../../utils/util/constants";

class RelatedRecordsOperations{

	private moduleAPIName: string;
	private relatedListAPIName: string;
	private xExternal?: string;
	/**
	 * Creates an instance of RelatedRecordsOperations with the given parameters
	 * @param relatedListAPIName A string representing the relatedListAPIName
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param xExternal A string representing the xExternal
	 */
	constructor(relatedListAPIName: string, moduleAPIName: string, xExternal?: string){
		this.relatedListAPIName = relatedListAPIName;
		this.moduleAPIName = moduleAPIName;
		this.xExternal = xExternal;

	}

	/**
	 * The method to get related records
	 * @param recordId A bigint representing the recordId
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRelatedRecords(recordId: bigint, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsHeader"), this.xExternal);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update related records
	 * @param recordId A bigint representing the recordId
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRelatedRecords(recordId: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addHeader(new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordsHeader"), this.xExternal);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delink records
	 * @param recordId A bigint representing the recordId
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async delinkRecords(recordId: bigint, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addHeader(new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DelinkRecordsHeader"), this.xExternal);
		handlerInstance.setParam(paramInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get related records using external id
	 * @param externalValue A string representing the externalValue
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRelatedRecordsUsingExternalId(externalValue: string, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalValue.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDHeader"), this.xExternal);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update related records using external id
	 * @param externalValue A string representing the externalValue
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRelatedRecordsUsingExternalId(externalValue: string, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalValue.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addHeader(new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordsUsingExternalIDHeader"), this.xExternal);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete related records using external id
	 * @param externalValue A string representing the externalValue
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteRelatedRecordsUsingExternalId(externalValue: string, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalValue.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addHeader(new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DeleteRelatedRecordsUsingExternalIDHeader"), this.xExternal);
		handlerInstance.setParam(paramInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get related record
	 * @param relatedRecordId A bigint representing the relatedRecordId
	 * @param recordId A bigint representing the recordId
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRelatedRecord(relatedRecordId: bigint, recordId: bigint, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(relatedRecordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordHeader"), this.xExternal);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update related record
	 * @param relatedRecordId A bigint representing the relatedRecordId
	 * @param recordId A bigint representing the recordId
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRelatedRecord(relatedRecordId: bigint, recordId: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(relatedRecordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addHeader(new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordHeader"), this.xExternal);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delink record
	 * @param relatedRecordId A bigint representing the relatedRecordId
	 * @param recordId A bigint representing the recordId
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async delinkRecord(relatedRecordId: bigint, recordId: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(relatedRecordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addHeader(new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DelinkRecordHeader"), this.xExternal);
		await Utility.getFields(this.moduleAPIName, handlerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get related record using external id
	 * @param externalFieldValue A string representing the externalFieldValue
	 * @param externalValue A string representing the externalValue
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRelatedRecordUsingExternalId(externalFieldValue: string, externalValue: string, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalValue.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalFieldValue.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordUsingExternalIDHeader"), this.xExternal);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update related record using external id
	 * @param externalFieldValue A string representing the externalFieldValue
	 * @param externalValue A string representing the externalValue
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRelatedRecordUsingExternalId(externalFieldValue: string, externalValue: string, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalValue.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalFieldValue.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addHeader(new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordUsingExternalIDHeader"), this.xExternal);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete related record using external id
	 * @param externalFieldValue A string representing the externalFieldValue
	 * @param externalValue A string representing the externalValue
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteRelatedRecordUsingExternalId(externalFieldValue: string, externalValue: string): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalValue.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalFieldValue.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addHeader(new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DeleteRelatedRecordUsingExternalIDHeader"), this.xExternal);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetRelatedRecordsHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsHeader");
}

class GetRelatedRecordsParam{

	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam");
}

class UpdateRelatedRecordsHeader{

}

class DelinkRecordsHeader{

}

class DelinkRecordsParam{

	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.RelatedRecords.DelinkRecordsParam");
}

class GetRelatedRecordsUsingExternalIDHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDHeader");
}

class GetRelatedRecordsUsingExternalIDParam{

	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDParam");
}

class UpdateRelatedRecordsUsingExternalIDHeader{

}

class DeleteRelatedRecordsUsingExternalIDHeader{

}

class DeleteRelatedRecordsUsingExternalIDParam{

	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.RelatedRecords.DeleteRelatedRecordsUsingExternalIDParam");
}

class GetRelatedRecordHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordHeader");
}

class UpdateRelatedRecordHeader{

}

class DelinkRecordHeader{

}

class GetRelatedRecordUsingExternalIDHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordUsingExternalIDHeader");
}

class UpdateRelatedRecordUsingExternalIDHeader{

}

class DeleteRelatedRecordUsingExternalIDHeader{

}

export {
	GetRelatedRecordHeader as GetRelatedRecordHeader,
	DelinkRecordsHeader as DelinkRecordsHeader,
	RelatedRecordsOperations as MasterModel,
	RelatedRecordsOperations as RelatedRecordsOperations,
	DeleteRelatedRecordUsingExternalIDHeader as DeleteRelatedRecordUsingExternalIDHeader,
	GetRelatedRecordsParam as GetRelatedRecordsParam,
	UpdateRelatedRecordUsingExternalIDHeader as UpdateRelatedRecordUsingExternalIDHeader,
	GetRelatedRecordsUsingExternalIDParam as GetRelatedRecordsUsingExternalIDParam,
	DeleteRelatedRecordsUsingExternalIDHeader as DeleteRelatedRecordsUsingExternalIDHeader,
	GetRelatedRecordUsingExternalIDHeader as GetRelatedRecordUsingExternalIDHeader,
	UpdateRelatedRecordsUsingExternalIDHeader as UpdateRelatedRecordsUsingExternalIDHeader,
	GetRelatedRecordsUsingExternalIDHeader as GetRelatedRecordsUsingExternalIDHeader,
	DeleteRelatedRecordsUsingExternalIDParam as DeleteRelatedRecordsUsingExternalIDParam,
	DelinkRecordHeader as DelinkRecordHeader,
	UpdateRelatedRecordHeader as UpdateRelatedRecordHeader,
	GetRelatedRecordsHeader as GetRelatedRecordsHeader,
	UpdateRelatedRecordsHeader as UpdateRelatedRecordsHeader,
	DelinkRecordsParam as DelinkRecordsParam
}
