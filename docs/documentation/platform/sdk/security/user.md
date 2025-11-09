# API: user

> Source: `security/user.ts`

Provides static access to the currently authenticated user's security and session context.
This class acts as a facade for the underlying UserFacade component.

## Usage
```javascript
import { user } from "sdk/security";
import { response } from "sdk/http";

response.println("[UserName]: " + user.getName());
response.println("[Is in Role]: " + user.isInRole("Developer"));
response.flush();
response.close();

```


## Classes

### User

Provides static access to the currently authenticated user's security and session context.<br/>This class acts as a facade for the underlying UserFacade component.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Retrieves the principal name (username or ID) of the currently authenticated user.<br/><br/>@returns The user's name or identifier as a string.

<hr/>

#### isInRole

- `isInRole (role:string):boolean`

  Checks if the currently authenticated user is assigned to a specific security role.<br/><br/>@param role The name of the role to check (e.g., 'Administrator', 'User').<br/>@returns True if the user is in the specified role, false otherwise.

<hr/>

#### getTimeout

- `getTimeout ():number`

  Retrieves the remaining session timeout for the current user session in seconds.<br/><br/>@returns The session timeout duration in seconds.

<hr/>

#### getAuthType

- `getAuthType ():string`

  Retrieves the authentication mechanism used for the current session (e.g., 'BASIC', 'FORM').<br/><br/>@returns The type of authentication used.

<hr/>

#### getSecurityToken

- `getSecurityToken ():string`

  Retrieves the security token associated with the current user session.<br/>This might be a session ID or an access token.<br/><br/>@returns The security token as a string.

<hr/>

#### getInvocationCount

- `getInvocationCount ():number`

  Retrieves the number of requests (invocations) made by the current user<br/>during the lifecycle of the current session.<br/><br/>@returns The total invocation count.

<hr/>

#### getLanguage

- `getLanguage ():string`

  Retrieves the preferred language setting (e.g., 'en', 'de', 'es') for the current user.<br/><br/>@returns The user's preferred language code.

