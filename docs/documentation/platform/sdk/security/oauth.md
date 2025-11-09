# API: oauth

> Source: `security/oauth.ts`

Configuration structure for the OAuth client.

## Classes

### OAuthClient

A client class for fetching OAuth access tokens.<br/><br/>It uses the HTTP client to send a POST request with client credentials<br/>to the specified token endpoint.

#### Methods

<hr/>

#### getToken

- `getToken ()void`

  Executes the OAuth token request and returns the parsed response.<br/><br/>The request uses the client credentials grant type (default) and<br/>sends credentials as URL-encoded parameters in the body.<br/><br/>@returns A parsed JSON object containing the OAuth token (e.g., { access_token: string, expires_in: number, ... }).<br/>@throws {Error} If the HTTP status code is not 200.

