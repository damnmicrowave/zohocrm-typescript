import { Utility } from '../../utils/util/utility'
import { Constants } from '../../utils/util/constants'
import { SDKException } from '../../core/com/zoho/crm/api/exception/sdk_exception'
import { OAuthToken } from './oauth_token'

export class OAuthBuilder {
  private _clientID: string | null = null

  private _clientSecret: string | null = null

  private _redirectURL: string | null = null

  private _refreshToken: string | null = null

  private _grantToken: string | null = null

  private _accessToken: string | null = null

  private _id: string | null = null

  public id(id: string): OAuthBuilder {
    this._id = id

    return this
  }

  public clientId(clientID: string): OAuthBuilder {
    Utility.assertNotNull(
      clientID,
      Constants.TOKEN_ERROR,
      Constants.CLIENT_ID_NULL_ERROR_MESSAGE
    )

    this._clientID = clientID

    return this
  }

  public clientSecret(clientSecret: string): OAuthBuilder {
    Utility.assertNotNull(
      clientSecret,
      Constants.TOKEN_ERROR,
      Constants.CLIENT_SECRET_NULL_ERROR_MESSAGE
    )

    this._clientSecret = clientSecret

    return this
  }

  public redirectURL(redirectURL: string): OAuthBuilder {
    this._redirectURL = redirectURL

    return this
  }

  public refreshToken(refreshToken: string): OAuthBuilder {
    this._refreshToken = refreshToken

    return this
  }

  public grantToken(grantToken: string): OAuthBuilder {
    this._grantToken = grantToken

    return this
  }

  public accessToken(accessToken: string): OAuthBuilder {
    this._accessToken = accessToken

    return this
  }

  public build(): OAuthToken {
    if (
      this._grantToken == null &&
      this._refreshToken == null &&
      this._id == null &&
      this._accessToken == null
    ) {
      throw new SDKException(
        Constants.MANDATORY_VALUE_ERROR,
        Constants.MANDATORY_KEY_ERROR,
        Constants.OAUTH_MANDATORY_KEYS
      )
    }

    return new OAuthToken(
      this._clientID,
      this._clientSecret,
      this._grantToken,
      this._refreshToken,
      this._redirectURL,
      this._id,
      this._accessToken
    )
  }
}
