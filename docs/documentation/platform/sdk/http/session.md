# API: session

> Source: `http/session.ts`

Provides a static façade (`Session` class) for accessing and manipulating
the HTTP session associated with the current request. This module is often used
to store user-specific data during their interaction with the application.

## Usage
```javascript
import { session, response } from "sdk/http";

session.setAttribute("attr1", "value1");
let attr = session.getAttribute("attr1");

response.println("[Attribute]: " + attr);
response.flush();
response.close();

```


## Classes

### Session

The static Session class provides methods to interact with the current user session<br/>(e.g., storing attributes, checking status, managing lifetime).

#### Methods

<hr/>

#### isValid

- `isValid ():boolean`

  Checks if a session is currently valid and active for the request context.<br/>@returns True if the session is valid, false otherwise (e.g., if it has been invalidated or timed out).

<hr/>

#### getAttribute

- `getAttribute (name:string):string`

  Retrieves the value of a named attribute stored in the session.<br/>Note: The underlying Java facade typically stores strings, but the value may represent<br/>serialized data that should be parsed if complex.<br/>@param name The name of the attribute.<br/>@returns The attribute value as a string, or null/undefined if not found.

<hr/>

#### getAttributeNames

- `getAttributeNames ():string[]`

  Retrieves an array of all attribute names currently stored in the session.<br/>The names are retrieved as a JSON string from the facade and then parsed.<br/>@returns An array of attribute names (strings), or an empty array if no attributes are present.

<hr/>

#### getCreationTime

- `getCreationTime ():Date`

  Returns the time at which this session was created, converted to a JavaScript Date object.<br/>@returns A Date object representing the session's creation time.

<hr/>

#### getId

- `getId ():string`

  Returns the unique identifier assigned to this session.<br/>@returns The session ID string.

<hr/>

#### getLastAccessedTime

- `getLastAccessedTime ():Date`

  Returns the last time the client accessed this session, converted to a JavaScript Date object.<br/>Access includes requests that retrieve or set session attributes.<br/>@returns A Date object representing the last access time.

<hr/>

#### getMaxInactiveInterval

- `getMaxInactiveInterval ():number`

  Returns the maximum time interval, in seconds, that the server should keep this session open<br/>between client requests. After this interval, the session will be invalidated.<br/>@returns The maximum inactive interval in seconds.

<hr/>

#### invalidate

- `invalidate ():void`

  Invalidates this session, unbinding any objects bound to it.<br/>After this call, the session is no longer valid.

<hr/>

#### isNew

- `isNew ():boolean`

  Checks if the client does not yet know about the session, typically meaning<br/>the server has not yet returned the session ID via a cookie or encoded URL.<br/>@returns True if the session is new (not yet used in a response), false otherwise.

<hr/>

#### setAttribute

- `setAttribute (name:string, value:any):void`

  Binds an object to this session, using the specified name.<br/>This is the primary way to store data in the user's session.<br/>@param name The name to bind the object under.<br/>@param value The value/object to store in the session.

<hr/>

#### removeAttribute

- `removeAttribute (name:string):void`

  Removes the attribute with the given name from the session.<br/>@param name The name of the attribute to remove.

<hr/>

#### setMaxInactiveInterval

- `setMaxInactiveInterval (interval:number):void`

  Specifies the maximum time interval, in seconds, that the server should keep this session open<br/>between client requests before automatically invalidating it.<br/>@param interval The new interval in seconds.

