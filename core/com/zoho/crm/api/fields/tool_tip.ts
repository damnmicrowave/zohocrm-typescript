import {Model} from "../../../../../../utils/util/model";

class ToolTip implements Model{

	private name?: string;
	private value?: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the name
	 * @returns A string representing the name
	 */
	public getName(): string	{
		return this.name!;

	}

	/**
	 * The method to set the value to name
	 * @param name A string representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the value
	 * @returns A string representing the value
	 */
	public getValue(): string	{
		return this.value!;

	}

	/**
	 * The method to set the value to value
	 * @param value A string representing the value
	 */
	public setValue(value: string): void	{
		this.value = value;
		this.keyModified.set("value", 1);

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
	ToolTip as MasterModel,
	ToolTip as ToolTip
}
