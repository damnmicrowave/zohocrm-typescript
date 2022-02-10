import {ResponseHandler} from "./response_handler";
import {Variable} from "./variable";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private variables: Array<Variable>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the variables
	 * @returns An Array representing the variables
	 */
	public getVariables(): Array<Variable>	{
		return this.variables;

	}

	/**
	 * The method to set the value to variables
	 * @param variables An Array representing the variables
	 */
	public setVariables(variables: Array<Variable>): void	{
		this.variables = variables;
		this.keyModified.set("variables", 1);

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
