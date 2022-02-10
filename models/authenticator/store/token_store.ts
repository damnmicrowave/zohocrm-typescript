import { UserSignature } from "../../../routes/user_signature";
import { Token } from "../token";

/**
 * This class stores the user token details.
*/
export interface TokenStore {

    /**
     This method is used to get user token details.
     * @param {UserSignature} user - A UserSignature class instance.
     * @param {Token} token - A Token class instance.
     * @returns {Token} A Token class instance representing the user token details.
     * @throws {SDKException}
     */
    getToken(user: UserSignature, token: Token): Promise<Token | undefined>;

    /**
     * This method is used to retrieve the user token details based on unique ID
     * @param {String} id - A String representing the unique ID
     * @param {Token} token - A Token class instance.
     * @return {Token} A Token class instance representing the user token details.
     * @throws SDKException
     */
    getTokenById(id: string, token: Token): Promise<Token | undefined>;

    /**
     * This method is used to store user token details.
     * @param {UserSignature} user - A UserSignature class instance.
     * @param {Token} token - A Token class instance.
     * @throws {SDKException}
     */
    saveToken(user: UserSignature, token: Token): Promise<void>;

    /**
     This method is used to delete user token details.
     * @param {Token} token - A Token class instance.
     * @throws {SDKException}
     */
    deleteToken(token: Token): Promise<void>;

    /**
     * The method to retrieve all the stored tokens.
     * @returns {Array} - An array of Token class instances
     * @throws {SDKException}
     */
    getTokens(): Promise<Array<Token> | undefined>;

    /**
     * The method to delete all the stored tokens.
     * @throws {SDKException}
     */
    deleteTokens(): void;
}