import { RolesOperations } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/roles/roles_operations"
import { ResponseHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/roles/response_handler"
import { ResponseWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/roles/response_wrapper"
import { APIResponse } from "@zohocrm/typescript-sdk-2.0/routes/controllers/api_response";
import { Role } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/roles/role";
import { User } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/users/user";
import { APIException } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/related_lists/api_exception";
export class Roles {
	/**
	 * <h3> Get Roles </h3>
	 * This method is used to retrieve the data of roles through an API request and print the response.
	 */
	public static async getRoles() {

		//Get instance of RolesOperations Class
		let rolesOperations: RolesOperations = new RolesOperations();

		//Call getRoles method
		let response: APIResponse<ResponseHandler> = await rolesOperations.getRoles();

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

					//Get the array of obtained Role instances
					let roles: Role[] = responseObject.getRoles();

					roles.forEach(role => {

						//Get the DisplayLabel of each Role
						console.log("Role DisplayLabel: " + role.getDisplayLabel());

						//Get the forecastManager User instance of each Role
						let forecastManager: User = role.getForecastManager();

						//Check if forecastManager is not null
						if (forecastManager != null) {
							//Get the ID of the forecast Manager
							console.log("Role Forecast Manager User-ID: " + forecastManager.getId());

							//Get the name of the forecast Manager
							console.log("Role Forecast Manager User-Name: " + forecastManager.getName());
						}

						//Get the ShareWithPeers of each Role
						console.log("Role ShareWithPeers: " + role.getShareWithPeers().toString());

						//Get the Name of each Role
						console.log("Role Name: " + role.getName());

						//Get the Description of each Role
						console.log("Role Description: " + role.getDescription());

						//Get the Id of each Role
						console.log("Role ID: " + role.getId());

						//Get the reportingTo User instance of each Role
						let reportingTo: User = role.getReportingTo();

						//Check if reportingTo is not null
						if (reportingTo != null) {
							//Get the ID of the reportingTo User
							console.log("Role ReportingTo User-ID: " + reportingTo.getId());

							//Get the name of the reportingTo User
							console.log("Role ReportingTo User-Name: " + reportingTo.getName());
						}

						//Get the AdminUser of each Role
						console.log("Role AdminUser: " + role.getAdminUser().toString());
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
	 * <h3> Get Role </h3>
	 * This method is used to retrieve the data of single role through an API request and print the response.
	 * @param roleId The ID of the role to be obtained
	 */
	public static async getRole(roleId: bigint) {

		//example
		//let roleId = 34096430026005n;

		//Get instance of RolesOperations Class
		let rolesOperations: RolesOperations = new RolesOperations();

		//Call getRole method that takes roleId as parameter
		let response: APIResponse<ResponseHandler> = await rolesOperations.getRole(roleId);

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

					//Get the array of obtained Role instances
					let roles: Role[] = responseObject.getRoles();

					roles.forEach(role => {

						//Get the DisplayLabel of each Role
						console.log("Role DisplayLabel: " + role.getDisplayLabel());

						//Get the forecastManager User instance of each Role
						let forecastManager: User = role.getForecastManager();

						//Check if forecastManager is not null
						if (forecastManager != null) {
							//Get the ID of the forecast Manager
							console.log("Role Forecast Manager User-ID: " + forecastManager.getId());

							//Get the name of the forecast Manager
							console.log("Role Forecast Manager User-Name: " + forecastManager.getName());
						}

						//Get the ShareWithPeers of each Role
						console.log("Role ShareWithPeers: " + role.getShareWithPeers().toString());

						//Get the Name of each Role
						console.log("Role Name: " + role.getName());

						//Get the Description of each Role
						console.log("Role Description: " + role.getDescription());

						//Get the Id of each Role
						console.log("Role ID: " + role.getId());

						//Get the reportingTo User instance of each Role
						let reportingTo: User = role.getReportingTo();

						//Check if reportingTo is not null
						if (reportingTo != null) {
							//Get the ID of the reportingTo User
							console.log("Role ReportingTo User-ID: " + reportingTo.getId());

							//Get the name of the reportingTo User
							console.log("Role ReportingTo User-Name: " + reportingTo.getName());
						}

						//Get the AdminUser of each Role
						console.log("Role AdminUser: " + role.getAdminUser().toString());
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