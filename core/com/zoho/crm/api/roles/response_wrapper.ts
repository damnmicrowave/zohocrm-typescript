import {ResponseHandler} from "./response_handler";
import {Role} from "./role";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private roles?: Array<Role>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the roles
	 * @returns An Array representing the roles
	 */
	public getRoles(): Array<Role>	{
		return this.roles!;

	}

	/**
	 * The method to set the value to roles
	 * @param roles An Array representing the roles
	 */
	public setRoles(roles: Array<Role>): void	{
		this.roles = roles;
		this.keyModified.set("roles", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param key A string representing the key
	 * @returns A number representing the modification
	 */
	public isKeyModified(key: string): number | null | undefined	{
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param key A string representing the key
	 * @param modification A number representing the modification
	 */
	public setKeyModified(key: string, modification: number): void	{
		this.keyModified.set(key, modification);

	}

}
export {
	ResponseWrapper as MasterModel,
	ResponseWrapper as ResponseWrapper
}
