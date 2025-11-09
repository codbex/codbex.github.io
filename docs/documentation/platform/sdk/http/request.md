# API: request

> Source: `http/request.ts`

The Request API under the HTTP module is responsible for
managing standard HTTP request parameters, headers, cookies,
and request metadata provided to server-side scripting services.

## Usage
```javascript
import { request, response } from "sdk/http";

let method = request.getMethod();

response.println("[Method]: " + method);
response.flush();
response.close();
```


## Classes

### Request

Represents the HTTP Request object available within a service execution<br/>context. It provides access to HTTP metadata, query parameters, request<br/>body content, cookies, and security information.<br/><br/>All functions in this class are static: no instance of `Request`<br/>needs to be created.

#### Methods

<hr/>

#### isValid

- `isValid ():boolean`

  Determines whether the current thread is handling a valid HTTP request.<br/><br/>@returns `true` if called in a valid HTTP request context, otherwise `false`.

<hr/>

#### getMethod

- `getMethod ():string`

  Returns the HTTP method (GET, POST, PUT, DELETE, etc.).

<hr/>

#### getRemoteUser

- `getRemoteUser ():string`

  Returns the authenticated remote user name if available.

<hr/>

#### getPathInfo

- `getPathInfo ():string`

  Returns the portion of the request path following the servlet path.

<hr/>

#### getPathTranslated

- `getPathTranslated ():string`

  Returns the translated file system path for the request.

<hr/>

#### getHeader

- `getHeader (name:string):string`

  Returns the value of a specific HTTP header.<br/><br/>@param name - Header name to retrieve.<br/>@returns The header value or `undefined` if not found.

<hr/>

#### isUserInRole

- `isUserInRole (role:string):boolean`

  Checks whether the remote user has the given role.<br/><br/>@param role - The role name to check.

<hr/>

#### getAttribute

- `getAttribute (name:string):string|undefined`

  Returns a request attribute value previously associated with the request.<br/><br/>@param name - The attribute name.<br/>@returns A string value or `undefined`.

<hr/>

#### getAuthType

- `getAuthType ():string`

  Returns the authentication type if known (BASIC, CLIENT_CERT, etc.).

<hr/>

#### getCookies

- `getCookies ():Cookie[]`

  Returns all cookies sent with the request.<br/><br/>@returns An array of Cookie objects.

<hr/>

#### getAttributeNames

- `getAttributeNames ():string[]`

  Returns all available request attribute names.

<hr/>

#### getCharacterEncoding

- `getCharacterEncoding ():string`

  Returns the character encoding used in the request body.

<hr/>

#### getContentLength

- `getContentLength ():number`

  Returns the size of the request body in bytes, if known.

<hr/>

#### getHeaders

- `getHeaders (name:string):string[]`

  Returns all values of a specific header.<br/><br/>@param name - Header name to retrieve.

<hr/>

#### getContentType

- `getContentType ():string`

  Returns the MIME content type of the request body.

<hr/>

#### getBytes

- `getBytes ():any[]`

  Returns the raw request body as a byte array.

<hr/>

#### getText

- `getText ()void`

  Returns the request body as text. This is computed once and cached.

<hr/>

#### json

- `json ():any}|undefined`

  Returns the request body parsed as JSON if valid.<br/><br/>@returns A JSON object or `undefined` if parsing fails.

<hr/>

#### getJSON

- `getJSON ():any}|undefined`

  Same as json(); explicit form.

<hr/>

#### getParameter

- `getParameter (name:string):string`

  Returns a request parameter value.

<hr/>

#### getParameters

- `getParameters ():string[]}`

  Returns a map of request parameters to arrays of values.

<hr/>

#### getResourcePath

- `getResourcePath ():string`

  Returns the allocated request resource path.

<hr/>

#### getHeaderNames

- `getHeaderNames ():string[]`

  Returns all header names.

<hr/>

#### getParameterNames

- `getParameterNames ():string[]`

  Returns all parameter names.

<hr/>

#### getParameterValues

- `getParameterValues (name:string):string[]`

  Returns all values for a given parameter name.

<hr/>

#### getProtocol

- `getProtocol ():string`

  Returns the HTTP protocol version.

<hr/>

#### getScheme

- `getScheme ():string`

  Returns the transport scheme (e.g., http, https).

<hr/>

#### getContextPath

- `getContextPath ():string`

  Returns the context path of the request.

<hr/>

#### getServerName

- `getServerName ():string`

  Returns the server host name.

<hr/>

#### getServerPort

- `getServerPort ():number`

  Returns the server port number.

<hr/>

#### getQueryString

- `getQueryString ():string`

  Returns the full raw query string.

<hr/>

#### getQueryParametersMap

- `getQueryParametersMap ():string|string[]}`

  Parses the query string and returns a map of parameter keys to values.<br/>If the same key appears multiple times, values are collected into arrays.

<hr/>

#### getRemoteAddress

- `getRemoteAddress ():string`

  Returns the remote client IP address.

<hr/>

#### getRemoteHost

- `getRemoteHost ():string`

  Returns the remote client host name.

<hr/>

#### setAttribute

- `setAttribute (name:string, value:string):void`

  Assigns a new attribute to the request.

<hr/>

#### removeAttribute

- `removeAttribute (name:string):void`

  Removes an attribute from the request.

<hr/>

#### getLocale

- `getLocale ():any`

  Returns the client locale preferences.

<hr/>

#### getRequestURI

- `getRequestURI ():string`

  Returns the full request URI.

<hr/>

#### isSecure

- `isSecure ():boolean`

  Returns `true` if the request was made over HTTPS.

<hr/>

#### getRequestURL

- `getRequestURL ():string`

  Returns the full request URL including protocol and host.

<hr/>

#### getServicePath

- `getServicePath ():string`

  Returns the internal service path for routing.

<hr/>

#### getRemotePort

- `getRemotePort ():number`

  Returns the remote client port number.

<hr/>

#### getLocalName

- `getLocalName ():string`

  Returns the local network host name.

<hr/>

#### getLocalAddress

- `getLocalAddress ():string`

  Returns the local IP address.

<hr/>

#### getLocalPort

- `getLocalPort ():number`

  Returns the server local port number handling the request.

<hr/>

#### getInputStream

- `getInputStream ():InputStream`

  Returns the request body as a binary input stream.<br/><br/>Useful for processing binary uploads.

