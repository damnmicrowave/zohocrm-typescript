import {Module} from "../modules/module";
import {Model} from "../../../../../../utils/util/model";

class SharedThrough implements Model{

	private module: Module;
	private id: bigint;
	private entityName: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the module
	 * @returns An instance of Module
	 */
	public getModule(): Module	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of Module
	 */
	public setModule(module: Module): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the id
	 * @returns A bigint representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A bigint representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the entityName
	 * @returns A string representing the entityName
	 */
	public getEntityName(): string	{
		return this.entityName;

	}

	/**
	 * The method to set the value to entityName
	 * @param entityName A string representing the entityName
	 */
	public setEntityName(entityName: string): void	{
		this.entityName = entityName;
		this.keyModified.set("entity_name", 1);

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
	SharedThrough as MasterModel,
	SharedThrough as SharedThrough
}
