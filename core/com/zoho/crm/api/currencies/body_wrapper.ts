import {Currency} from "./currency";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private currencies: Array<Currency>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the currencies
	 * @returns An Array representing the currencies
	 */
	public getCurrencies(): Array<Currency>	{
		return this.currencies;

	}

	/**
	 * The method to set the value to currencies
	 * @param currencies An Array representing the currencies
	 */
	public setCurrencies(currencies: Array<Currency>): void	{
		this.currencies = currencies;
		this.keyModified.set("currencies", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
