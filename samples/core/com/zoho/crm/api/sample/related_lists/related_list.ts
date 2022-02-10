import { RelatedListsOperations } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/related_lists/related_lists_operations"
import { APIException } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/related_lists/api_exception"
import { RelatedList } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/related_lists/related_list"
import { ResponseHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/related_lists/response_handler"
import { ResponseWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/related_lists/response_wrapper"
import { APIResponse } from "@zohocrm/typescript-sdk-2.0/routes/controllers/api_response"
export class RelatedLists {
	/**
	 * <h3> Get RelatedLists </h3>
	 * This method is used to get the related list data of a particular module and print the response.
	 * @param moduleAPIName The API Name of the module to get related lists
	 */
	public static async getRelatedLists(moduleAPIName: string) {

		//example
		//let moduleAPIName = "Leads";

		//Get instance of RelatedListsOperations Class that takes moduleAPIName as parameter
		let relatedListsOperations: RelatedListsOperations = new RelatedListsOperations(moduleAPIName);

		//Call getRelatedLists method
		let response: APIResponse<ResponseHandler> = await relatedListsOperations.getRelatedLists();

		if (response != null) {

			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject: ResponseHandler = response.getObject();

			if (responseObject != null) {

				//Check if expected ResponseWrapper instance is received
				if (responseObject instanceof ResponseWrapper) {

					//Get the array of obtained RelatedList instances
					let relatedLists: RelatedList[] = responseObject.getRelatedLists();

					relatedLists.forEach(relatedList => {
						//Get the SequenceNumber of each RelatedList
						console.log("RelatedList SequenceNumber: " + relatedList.getSequenceNumber());

						//Get the DisplayLabel of each RelatedList
						console.log("RelatedList DisplayLabel: " + relatedList.getDisplayLabel());

						//Get the APIName of each RelatedList
						console.log("RelatedList APIName: " + relatedList.getAPIName());

						//Get the Module of each RelatedList
						console.log("RelatedList Module: " + relatedList.getModule());

						//Get the Name of each RelatedList
						console.log("RelatedList Name: " + relatedList.getName());

						//Get the Action of each RelatedList
						console.log("RelatedList Action: " + relatedList.getAction());

						//Get the ID of each RelatedList
						console.log("RelatedList ID: " + relatedList.getId());

						//Get the Href of each RelatedList
						console.log("RelatedList Href: " + relatedList.getHref());

						//Get the Type of each RelatedList
						console.log("RelatedList Type: " + relatedList.getType());

						//Get the Connected Module of each RelatedList
						console.log("RelatedList Connectedmodule: " + relatedList.getConnectedmodule());

						//Get the Linking Module of each RelatedList
						console.log("RelatedList Linkingmodule: " + relatedList.getLinkingmodule());
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof APIException) {
					//Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					//Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

					console.log("Details");

					//Get the details map
					let details: Map<string, any> = responseObject.getDetails();

					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}

					//Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
			}
		}
	}

	/**
	 * <h3> Get RelatedList </h3>
	 * This method is used to get the single related list data of a particular module with relatedListId and print the response.
	 * @param moduleAPIName The API Name of the module to get related list
	 * @param relatedListId The ID of the relatedList to be obtained
	 */
	static async getRelatedList(moduleAPIName: string, relatedListId: bigint) {

		//example
		//let moduleAPIName = "Contacts";
		// let relatedListId = 340964362003n;

		//Get instance of RelatedListsOperations Class that takes moduleAPIName as parameter
		let relatedListsOperations: RelatedListsOperations = new RelatedListsOperations(moduleAPIName);

		//Call getRelatedList method which takes relatedListId as parameter
		let response: APIResponse<ResponseHandler> = await relatedListsOperations.getRelatedList(relatedListId);

		if (response != null) {

			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject: ResponseHandler = response.getObject();

			if (responseObject != null) {

				//Check if expected ResponseWrapper instance is received
				if (responseObject instanceof ResponseWrapper) {
					let relatedLists: RelatedList[] = responseObject.getRelatedLists();

					relatedLists.forEach(relatedList => {
						//Get the SequenceNumber of each RelatedList
						console.log("RelatedList SequenceNumber: " + relatedList.getSequenceNumber());

						//Get the DisplayLabel of each RelatedList
						console.log("RelatedList DisplayLabel: " + relatedList.getDisplayLabel());

						//Get the APIName of each RelatedList
						console.log("RelatedList APIName: " + relatedList.getAPIName());

						//Get the Module of each RelatedList
						console.log("RelatedList Module: " + relatedList.getModule());

						//Get the Name of each RelatedList
						console.log("RelatedList Name: " + relatedList.getName());

						//Get the Action of each RelatedList
						console.log("RelatedList Action: " + relatedList.getAction());

						//Get the ID of each RelatedList
						console.log("RelatedList ID: " + relatedList.getId());

						//Get the Href of each RelatedList
						console.log("RelatedList Href: " + relatedList.getHref());

						//Get the Type of each RelatedList
						console.log("RelatedList Type: " + relatedList.getType());

						//Get the Connected Module of each RelatedList
						console.log("RelatedList Connectedmodule: " + relatedList.getConnectedmodule());

						//Get the Linking Module of each RelatedList
						console.log("RelatedList Linkingmodule: " + relatedList.getLinkingmodule());
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof APIException) {
					//Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					//Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

					console.log("Details");

					//Get the details map
					let details: Map<string, any> = responseObject.getDetails();

					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}

					//Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
			}
		}

	}
}