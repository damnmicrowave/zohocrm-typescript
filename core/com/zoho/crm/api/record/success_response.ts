import {ActionResponse} from "./action_response";
import {FileHandler} from "./file_handler";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class SuccessResponse implements Model, ActionResponse, FileHandler{

	private status?: Choice<string>;
	private code?: Choice<string>;
	private duplicateField?: string;
	private action?: Choice<string>;
	private message?: Choice<string>;
	private details?: Map<string, any>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the status
	 * @returns An instance of Choice<string>
	 */
	public getStatus(): Choice<string>	{
		return this.status!;

	}

	/**
	 * The method to set the value to status
	 * @param status An instance of Choice<string>
	 */
	public setStatus(status: Choice<string>): void	{
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the code
	 * @returns An instance of Choice<string>
	 */
	public getCode(): Choice<string>	{
		return this.code!;

	}

	/**
	 * The method to set the value to code
	 * @param code An instance of Choice<string>
	 */
	public setCode(code: Choice<string>): void	{
		this.code = code;
		this.keyModified.set("code", 1);

	}

	/**
	 * The method to get the duplicateField
	 * @returns A string representing the duplicateField
	 */
	public getDuplicateField(): string	{
		return this.duplicateField!;

	}

	/**
	 * The method to set the value to duplicateField
	 * @param duplicateField A string representing the duplicateField
	 */
	public setDuplicateField(duplicateField: string): void	{
		this.duplicateField = duplicateField;
		this.keyModified.set("duplicate_field", 1);

	}

	/**
	 * The method to get the action
	 * @returns An instance of Choice<string>
	 */
	public getAction(): Choice<string>	{
		return this.action!;

	}

	/**
	 * The method to set the value to action
	 * @param action An instance of Choice<string>
	 */
	public setAction(action: Choice<string>): void	{
		this.action = action;
		this.keyModified.set("action", 1);

	}

	/**
	 * The method to get the message
	 * @returns An instance of Choice<string>
	 */
	public getMessage(): Choice<string>	{
		return this.message!;

	}

	/**
	 * The method to set the value to message
	 * @param message An instance of Choice<string>
	 */
	public setMessage(message: Choice<string>): void	{
		this.message = message;
		this.keyModified.set("message", 1);

	}

	/**
	 * The method to get the details
	 * @returns A Map representing the details
	 */
	public getDetails(): Map<string, any>	{
		return this.details!;

	}

	/**
	 * The method to set the value to details
	 * @param details A Map representing the details
	 */
	public setDetails(details: Map<string, any>): void	{
		this.details = details;
		this.keyModified.set("details", 1);

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
	SuccessResponse as MasterModel,
	SuccessResponse as SuccessResponse
}
