import {ConflictWrapper} from "./conflict_wrapper";
import {Model} from "../../../../../../utils/util/model";

class MergeWrapper implements Model{

	private tags?: Array<ConflictWrapper>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the tags
	 * @returns An Array representing the tags
	 */
	public getTags(): Array<ConflictWrapper>	{
		return this.tags!;

	}

	/**
	 * The method to set the value to tags
	 * @param tags An Array representing the tags
	 */
	public setTags(tags: Array<ConflictWrapper>): void	{
		this.tags = tags;
		this.keyModified.set("tags", 1);

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
	MergeWrapper as MasterModel,
	MergeWrapper as MergeWrapper
}
