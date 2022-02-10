import {Query} from "./query";
import {Result} from "./result";
import {User} from "../users/user";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class JobDetail implements Model{

	private id: bigint;
	private operation: string;
	private state: Choice<string>;
	private query: Query;
	private createdBy: User;
	private createdTime: Date;
	private result: Result;
	private fileType: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the operation
	 * @returns A string representing the operation
	 */
	public getOperation(): string	{
		return this.operation;

	}

	/**
	 * The method to set the value to operation
	 * @param operation A string representing the operation
	 */
	public setOperation(operation: string): void	{
		this.operation = operation;
		this.keyModified.set("operation", 1);

	}

	/**
	 * The method to get the state
	 * @returns An instance of Choice<string>
	 */
	public getState(): Choice<string>	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param state An instance of Choice<string>
	 */
	public setState(state: Choice<string>): void	{
		this.state = state;
		this.keyModified.set("state", 1);

	}

	/**
	 * The method to get the query
	 * @returns An instance of Query
	 */
	public getQuery(): Query	{
		return this.query;

	}

	/**
	 * The method to set the value to query
	 * @param query An instance of Query
	 */
	public setQuery(query: Query): void	{
		this.query = query;
		this.keyModified.set("query", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of User
	 */
	public getCreatedBy(): User	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of User
	 */
	public setCreatedBy(createdBy: User): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the result
	 * @returns An instance of Result
	 */
	public getResult(): Result	{
		return this.result;

	}

	/**
	 * The method to set the value to result
	 * @param result An instance of Result
	 */
	public setResult(result: Result): void	{
		this.result = result;
		this.keyModified.set("result", 1);

	}

	/**
	 * The method to get the fileType
	 * @returns A string representing the fileType
	 */
	public getFileType(): string	{
		return this.fileType;

	}

	/**
	 * The method to set the value to fileType
	 * @param fileType A string representing the fileType
	 */
	public setFileType(fileType: string): void	{
		this.fileType = fileType;
		this.keyModified.set("file_type", 1);

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
	JobDetail as MasterModel,
	JobDetail as JobDetail
}
