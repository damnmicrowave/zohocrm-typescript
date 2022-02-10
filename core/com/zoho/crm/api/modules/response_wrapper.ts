import {Module} from "./module";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private modules?: Array<Module>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the modules
	 * @returns An Array representing the modules
	 */
	public getModules(): Array<Module>	{
		return this.modules!;

	}

	/**
	 * The method to set the value to modules
	 * @param modules An Array representing the modules
	 */
	public setModules(modules: Array<Module>): void	{
		this.modules = modules;
		this.keyModified.set("modules", 1);

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
