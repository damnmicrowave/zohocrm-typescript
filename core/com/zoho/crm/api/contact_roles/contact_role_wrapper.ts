import {Model} from "../../../../../../utils/util/model";

class ContactRoleWrapper implements Model{

	private contactRole: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the contactRole
	 * @returns A string representing the contactRole
	 */
	public getContactRole(): string	{
		return this.contactRole;

	}

	/**
	 * The method to set the value to contactRole
	 * @param contactRole A string representing the contactRole
	 */
	public setContactRole(contactRole: string): void	{
		this.contactRole = contactRole;
		this.keyModified.set("Contact_Role", 1);

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
	ContactRoleWrapper as MasterModel,
	ContactRoleWrapper as ContactRoleWrapper
}
