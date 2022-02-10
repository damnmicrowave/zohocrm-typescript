import { Initializer } from '../../routes/initializer'
import { Token } from './token'
import FormData from 'form-data'
import { Constants } from '../../utils/util/constants'
import { UserSignature } from '../../routes/user_signature'
import { TokenStore } from './store/token_store'
import * as Logger from 'winston'
import { SDKException } from '../../core/com/zoho/crm/api/exception/sdk_exception'
import got from 'got'
import { APIHTTPConnector } from '../../routes/controllers/api_http_connector'

/**
 * This class maintains the tokens and authenticates every request.
 */
export class OAuthToken implements Token {
  private clientID: string | null

  private clientSecret: string | null

  private redirectURL: string | null

  private grantToken: string | null

  private refreshToken: string | null

  private accessToken: string | null

  private expiresIn?: string

  private userMail?: string

  private id: string | null

  /**
   * This is a setter method to set OAuth client id.
   * @param {string} clientID - A String containing the client Id.
   */
  public setClientId(clientID: string) {
    this.clientID = clientID
  }

  /**
   * This is a getter method to get OAuth client id.
   * @returns A String representing the OAuth client id.
   */
  public getClientId(): string | null {
    return this.clientID
  }

  /**
   * This is a setter method to set OAuth client secret.
   * @param {string} clientSecret - A String containing the client Secret.
   */
  public setClientSecret(clientSecret: string) {
    this.clientSecret = clientSecret
  }

  /**
   * This is a getter method to get OAuth client secret.
   * @returns A String representing the OAuth client secret.
   */
  public getClientSecret(): string | null {
    return this.clientSecret
  }

  /**
   * This is a setter method to set OAuth redirect URL.
   * @param {string} redirectURL - A String containing the redirectURL.
   */
  public setRedirectURL(redirectURL: string | null) {
    this.redirectURL = redirectURL
  }

  /**
   * This is a getter method to get OAuth redirect URL.
   * @returns A String representing the OAuth redirect URL.
   */
  public getRedirectURL(): string | null {
    return this.redirectURL
  }

  /**
   * This is a setter method to set grant token.
   * @param {string} grantToken - A String containing the grantToken.
   */
  public setGrantToken(grantToken: string | null) {
    this.grantToken = grantToken
  }

  /**
   * This is a getter method to get grant token.
   * @returns A String representing the grant token.
   */
  public getGrantToken(): string | null {
    return this.grantToken
  }

  /**
   * This is a getter method to get refresh token.
   * @returns A String representing the refresh token.
   */
  public getRefreshToken(): string | null {
    return this.refreshToken
  }

  /**
   * This is a setter method to set refresh token.
   * @param {string} refreshToken - A String containing the refresh token.
   */
  public setRefreshToken(refreshToken: string | null) {
    this.refreshToken = refreshToken
  }

  /**
   * This is a getter method to get access token.
   * @returns A String representing the access token.
   */
  public getAccessToken(): string | null {
    return this.accessToken
  }

  /**
   * This is a setter method to set access token.
   * @param {string} accessToken A String containing the access token.
   */
  public setAccessToken(accessToken: string | null) {
    this.accessToken = accessToken
  }

  /**
   * This is a getter method to get token expire time.
   * @returns A String representing the token expire time.
   */
  public getExpiresIn(): string {
    return this.expiresIn!
  }

  /**
   * This is a setter method to set token expire time.
   * @param {string} expiresIn A String containing the token expire time.
   */
  public setExpiresIn(expiresIn: string) {
    this.expiresIn = expiresIn
  }

  /**
   * This is a getter method to get token user mail.
   * @returns A String representing the userMail
   */
  public getUserMail(): string {
    return this.userMail!
  }

  /**
   * This is a setter method to set token user email.
   * @param {String} userMail A String containing the userMail
   */
  public setUserMail(userMail: string) {
    this.userMail = userMail
  }

  /**
   * This is a getter method to get the id
   * @returns the id
   */
  public getId(): string | null {
    return this.id
  }

  /**
   * This is a setter method to set the id
   * @param {String} id A String containing the id
   */
  public setId(id: string | null) {
    this.id = id
  }

  public async authenticate(urlConnection: APIHTTPConnector) {
    try {
      var token: string | null

      var initializer = await Initializer.getInitializer()

      var store = initializer.getStore()

      var user = initializer.getUser()

      var oauthToken = null

      if (this.accessToken == null) {
        if (this.id != null) {
          oauthToken = (await store.getTokenById(this.id, this)) as OAuthToken
        } else {
          oauthToken = (await store.getToken(user, this)) as OAuthToken
        }
      } else {
        oauthToken = this
      }

      if (oauthToken == null) {
        //first time
        token =
          this.refreshToken === null
            ? (await this.generateAccessToken(user, store)).getAccessToken()
            : (await this.refreshAccessToken(user, store)).getAccessToken()
      } else if (
        oauthToken.getExpiresIn() !== undefined &&
        parseInt(oauthToken.getExpiresIn()) - new Date().getTime() < 5000
      ) {
        //access token will expire in next 5 seconds or less
        Logger.info(Constants.REFRESH_TOKEN_MESSAGE)

        token = (await this.refreshAccessToken(user, store)).getAccessToken()
      } else {
        token = this.getAccessToken()
      }

      if (token !== null) {
        urlConnection.addHeader(
          Constants.AUTHORIZATION,
          Constants.OAUTH_HEADER_PREFIX.concat(token)
        )
      }
    } catch (error) {
      if (!(error instanceof SDKException)) {
        error = new SDKException(null, null, null, error)
      }

      throw error
    }
  }

  private async refreshAccessToken(
    user: UserSignature,
    store: TokenStore
  ): Promise<OAuthToken> {
    let initializer = await Initializer.getInitializer()

    let url = initializer.getEnvironment().getAccountsUrl()

    var formDataRequestBody = new FormData()

    formDataRequestBody.append(Constants.REFRESH_TOKEN, this.refreshToken)

    formDataRequestBody.append(Constants.CLIENT_ID, this.clientID)

    formDataRequestBody.append(Constants.CLIENT_SECRET, this.clientSecret)

    formDataRequestBody.append(Constants.GRANT_TYPE, Constants.REFRESH_TOKEN)

    const requestDetails = {
      method: Constants.REQUEST_METHOD_POST,
      headers: {},
      body: formDataRequestBody,
      encoding: 'utf8',
      allowGetBody: true,
      throwHttpErrors: false
    }

    var response = await this.getResponse(url, requestDetails)

    try {
      await this.parseResponse(response.body)

      if (this.id == null) {
        await this.generateId()
      }

      store.saveToken(user, this)
    } catch (error) {
      if (error instanceof SDKException) {
        throw error
      } else if (error instanceof Error) {
        throw new SDKException(Constants.SAVE_TOKEN_ERROR, null, null, error)
      }
    }

    return this
  }

  private async generateAccessToken(
    user: UserSignature,
    store: TokenStore
  ): Promise<OAuthToken> {
    let initializer = await Initializer.getInitializer()

    let url = initializer.getEnvironment().getAccountsUrl()

    var formDataRequestBody = new FormData()

    formDataRequestBody.append(Constants.REFRESH_TOKEN, this.refreshToken)

    formDataRequestBody.append(Constants.CLIENT_ID, this.clientID)

    formDataRequestBody.append(Constants.CLIENT_SECRET, this.clientSecret)

    if (this.redirectURL != null) {
      formDataRequestBody.append(Constants.REDIRECT_URI, this.redirectURL)
    }

    formDataRequestBody.append(
      Constants.GRANT_TYPE,
      Constants.GRANT_TYPE_AUTH_CODE
    )

    formDataRequestBody.append(Constants.CODE, this.grantToken)

    const requestDetails = {
      method: Constants.REQUEST_METHOD_POST,
      headers: {},
      body: formDataRequestBody,
      encoding: 'utf8',
      allowGetBody: true,
      throwHttpErrors: false
    }

    var response = await this.getResponse(url, requestDetails)

    try {
      await this.parseResponse(response.body)

      await this.generateId()

      await store.saveToken(user, this)
    } catch (error) {
      if (error instanceof SDKException) {
        throw error
      } else if (error instanceof Error) {
        throw new SDKException(Constants.SAVE_TOKEN_ERROR, null, null, error)
      }
    }

    return this
  }

  async getResponse(url: string, requestDetails: {}) {
    return await got(url, requestDetails)
  }

  async parseResponse(response: string) {
    var responseJSON = JSON.parse(response)

    if (!responseJSON.hasOwnProperty(Constants.ACCESS_TOKEN)) {
      throw new SDKException(
        Constants.INVALID_TOKEN_ERROR,
        responseJSON.hasOwnProperty(Constants.ERROR_KEY)
          ? responseJSON[Constants.ERROR_KEY].toString()
          : Constants.NO_ACCESS_TOKEN_ERROR
      )
    }

    this.accessToken = responseJSON[Constants.ACCESS_TOKEN]

    this.expiresIn = (
      new Date().getTime() + (await this.getTokenExpiryTime(responseJSON))
    ).toString()

    if (responseJSON.hasOwnProperty(Constants.REFRESH_TOKEN)) {
      this.refreshToken = responseJSON[Constants.REFRESH_TOKEN]
    }

    return this
  }

  getTokenExpiryTime(response: any) {
    return response.hasOwnProperty(Constants.EXPIRES_IN_SEC)
      ? response[Constants.EXPIRES_IN]
      : response[Constants.EXPIRES_IN] * 1000
  }

  async remove(): Promise<boolean> {
    try {
      let initializer = await Initializer.getInitializer()

      await initializer.getStore().deleteToken(this)

      return true
    } catch (error) {
      if (error instanceof SDKException) {
        throw error
      } else if (error instanceof Error) {
        throw new SDKException(null, null, null, error)
      }
    }

    return false
  }

  /**
   * Creates an OAuthToken class instance with the specified parameters.
   * @param {String} clientID - A String containing the OAuth client id.
   * @param {String} clientSecret - A String containing the OAuth client secret.
   * @param {String} grantToken - A String containing the GRANT token.
   * @param {String} refreshToken - A String containing the REFRESH token.
   * @param {String} redirectURL - A String containing the OAuth redirect URL.
   * @param {String} id - A string
   */
  constructor(
    clientID: string | null,
    clientSecret: string | null,
    grantToken: string | null,
    refreshToken: string | null,
    redirectURL: string | null,
    id: string | null,
    accessToken: string | null
  ) {
    this.clientID = clientID

    this.clientSecret = clientSecret

    this.grantToken = grantToken

    this.refreshToken = refreshToken

    this.redirectURL = redirectURL

    this.accessToken = accessToken

    this.id = id
  }

  async generateId() {
    let email = (await Initializer.getInitializer()).getUser().getEmail()

    let builder =
      Constants.TYPE_SCRIPT + email.substring(0, email.indexOf('@')) + '_'

    builder =
      builder +
      (await Initializer.getInitializer()).getEnvironment().getName() +
      '_'

    if (this.refreshToken != null) {
      builder =
        builder + this.refreshToken.substring(this.refreshToken.length - 4)
    }

    this.id = builder
  }
}
