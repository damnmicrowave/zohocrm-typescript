import {Model} from "../../../../../../utils/util/model";

class Info implements Model{

	private count?: number;
	private allowedCount?: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the count
	 * @returns A number representing the count
	 */
	public getCount(): number	{
		return this.count!;

	}

	/**
	 * The method to set the value to count
	 * @param count A number representing the count
	 */
	public setCount(count: number): void	{
		this.count = count;
		this.keyModified.set("count", 1);

	}

	/**
	 * The method to get the allowedCount
	 * @returns A number representing the allowedCount
	 */
	public getAllowedCount(): number	{
		return this.allowedCount!;

	}

	/**
	 * The method to set the value to allowedCount
	 * @param allowedCount A number representing the allowedCount
	 */
	public setAllowedCount(allowedCount: number): void	{
		this.allowedCount = allowedCount;
		this.keyModified.set("allowed_count", 1);

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
	Info as MasterModel,
	Info as Info
}
