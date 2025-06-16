# Client Registration

These configuration options allow you to register and manage custom OAuth 2.0 clients via environment variables in the **codbex** platform. This provides support for both browser-based (`authorization_code` grant type) and service-to-service (`client_credentials` grant type) authentication flows.

To activate OAuth client registration, set the appropriate Spring profile and define the required clients and their properties using the following environment variables.


## Client Registration

| Parameter                     | Description                                                  | Default*  |
|-------------------------------|--------------------------------------------------------------|-----------|
| **SPRING_PROFILES_ACTIVE** | Specifies the active Spring profiles. Check the [Cognito](cognito-auth) or the [Keycloak](keycloak-auth) documentation. | `-`    |
| **DIRIGIBLE_OAUTH_CUSTOM_CLIENTS** | Comma-separated list of registered OAuth client identifiers (e.g., `Client1,S2S`). | `-`    |

### Per Client Configuration

Prefix each with client ID, _(e.g., `Client1_`, `S2S_`)_:

| Parameter Suffix        | Description                                                  | Required  |
|-------------------------|--------------------------------------------------------------|-----------|
| **CLIENT_ID**           | The OAuth client ID.                                         | Yes       |
| **CLIENT_SECRET**       | The OAuth client secret.                                     | Yes       |
| **REDIRECT_URI**        | The redirect URI used for authorization code flow.           | Yes _(for `authorization_code`)_ |
| **GRANT_TYPE**          | The OAuth 2.0 grant type. Supported values: `authorization_code`, `client_credentials`. | Yes |
| **SCOPE**               | Requested scopes (e.g., `openid`, `email`).                  | Yes       |
| **USER_NAME_ATTRIBUTE** | The attribute used to identify the user (e.g., `email`, `sub`). | Yes _(for `authorization_code`)_ |
| **TOKEN_URI**           | Endpoint for token exchange.	                             | Yes       |
| **AUTHORIZATION_URI**   | Authorization endpoint for initiating login.	             | Yes _(for `authorization_code`)_ |
| **USER_INFO_URI**       | Endpoint to retrieve authenticated user details.             | Optional  |
| **ISSUER_URI**          | OAuth provider's issuer URI for identity verification.       | Optional  |
| **JWK_SET_URI**         | URI to retrieve the public keys for verifying ID tokens (JWK format). | Optional  |



## Sample Configuration

```shell
# Enable Cognito authentication
export SPRING_PROFILES_ACTIVE=common,cognito,app-default

# Register clients
export DIRIGIBLE_OAUTH_CUSTOM_CLIENTS=Client1,S2S

# Client1 - Browser-based login
export Client1_CLIENT_ID=your_client_id
export Client1_CLIENT_SECRET=your_client_secret
export Client1_REDIRECT_URI=https://your-app.eu1.codbex.com/login/oauth2/code/your_client_id
export Client1_GRANT_TYPE=authorization_code
export Client1_SCOPE=openid
export Client1_USER_NAME_ATTRIBUTE=email
export Client1_TOKEN_URI=https://your-domain.auth.region.amazoncognito.com/oauth2/token
export Client1_AUTHORIZATION_URI=https://your-domain.auth.region.amazoncognito.com/oauth2/authorize
export Client1_USER_INFO_URI=https://your-domain.auth.region.amazoncognito.com/oauth2/userInfo
export Client1_ISSUER_URI=https://cognito-idp.region.amazonaws.com/your_user_pool_id
export Client1_JWK_SET_URI=https://cognito-idp.region.amazonaws.com/your_user_pool_id/.well-known/jwks.json

# S2S - Service to service authentication
export S2S_CLIENT_ID=your_s2s_client_id
export S2S_CLIENT_SECRET=your_s2s_client_secret
export S2S_REDIRECT_URI=https://your-app.eu1.codbex.com/login/oauth2/code/your_s2s_client_id
export S2S_GRANT_TYPE=client_credentials
export S2S_SCOPE=email
export S2S_USER_NAME_ATTRIBUTE=openid
export S2S_TOKEN_URI=https://your-domain.auth.region.amazoncognito.com/oauth2/token
export S2S_AUTHORIZATION_URI=https://your-domain.auth.region.amazoncognito.com/oauth2/authorize
export S2S_USER_INFO_URI=https://your-domain.auth.region.amazoncognito.com/oauth2/userInfo
export S2S_ISSUER_URI=https://cognito-idp.region.amazonaws.com/your_user_pool_id
export S2S_JWK_SET_URI=https://cognito-idp.region.amazonaws.com/your_user_pool_id/.well-known/jwks.json
```
