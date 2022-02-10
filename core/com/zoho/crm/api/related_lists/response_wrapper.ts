import {RelatedList} from "./related_list";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private relatedLists?: Array<RelatedList>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the relatedLists
	 * @returns An Array representing the relatedLists
	 */
	public getRelatedLists(): Array<RelatedList>	{
		return this.relatedLists!;

	}

	/**
	 * The method to set the value to relatedLists
	 * @param relatedLists An Array representing the relatedLists
	 */
	public setRelatedLists(relatedLists: Array<RelatedList>): void	{
		this.relatedLists = relatedLists;
		this.keyModified.set("related_lists", 1);

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
