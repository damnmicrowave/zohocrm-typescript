import {ResponseHandler} from "./response_handler";
import {VariableGroup} from "./variable_group";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private variableGroups: Array<VariableGroup>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the variableGroups
	 * @returns An Array representing the variableGroups
	 */
	public getVariableGroups(): Array<VariableGroup>	{
		return this.variableGroups;

	}

	/**
	 * The method to set the value to variableGroups
	 * @param variableGroups An Array representing the variableGroups
	 */
	public setVariableGroups(variableGroups: Array<VariableGroup>): void	{
		this.variableGroups = variableGroups;
		this.keyModified.set("variable_groups", 1);

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
