# API: response

> Source: `http/response.ts`

Provides a static façade (`Response` class) for managing the HTTP response.
This class wraps a native Java HTTP response object, offering methods for setting
status codes, headers, cookies, and writing content (text, JSON, or binary).

## Usage
```javascript
import { response } from "sdk/http";

response.println("Hello World!");
response.flush();
response.close();

```


## Classes

### Response

The static Response class providing standardized HTTP status codes and methods<br/>for constructing the server's response.

#### Methods

<hr/>

#### isValid

- `isValid ():boolean`

  Checks if the response façade is currently valid or connected to an active request context.<br/>@returns True if valid, false otherwise.

<hr/>

#### json

- `json (obj:any):void`

  Serializes a JavaScript object to JSON, sets the `Content-Type: application/json` header,<br/>and writes the JSON string to the response output stream.<br/>@param obj The JavaScript object to be serialized and sent.

<hr/>

#### print

- `print (text:string):void`

  Writes a string of text to the response body using **UTF-8** encoding.<br/>Note: This method automatically handles flushing the output stream.<br/>@param text The string content to write.

<hr/>

#### println

- `println (text:string):void`

  Writes a string of text followed by a newline character (`\n`) to the response body<br/>using **UTF-8** encoding.<br/>@param text The string content to write.

<hr/>

#### write

- `write (bytes:any[]):void`

  Writes an array of bytes directly to the response output stream, typically used for binary data.<br/>@param bytes The array of bytes to write.

<hr/>

#### isCommitted

- `isCommitted ():boolean`

  Checks if the response headers and status have already been sent to the client.<br/>@returns True if the response is committed, false otherwise.

<hr/>

#### setContentType

- `setContentType (contentType:string):void`

  Sets the value of the `Content-Type` header.<br/>@param contentType The MIME type string (e.g., 'text/html', 'application/pdf').

<hr/>

#### flush

- `flush ():void`

  Forces any buffered output to be written to the client.

<hr/>

#### close

- `close ():void`

  Closes the response output stream.

<hr/>

#### addCookie

- `addCookie (cookie:Cookie):void`

  Adds a cookie to the response. The cookie object is serialized to JSON before being passed<br/>to the underlying Java facade.<br/>@param cookie The cookie definition object.

<hr/>

#### containsHeader

- `containsHeader (name:string):boolean`

  Checks if a response header with the specified name has already been set.<br/>@param name The name of the header.<br/>@returns True if the header exists, false otherwise.

<hr/>

#### encodeURL

- `encodeURL (url:string):string`

  Encodes a URL for use in redirects or forms, including session information if necessary.<br/>@param url The URL to encode.<br/>@returns The encoded URL string.

<hr/>

#### getCharacterEncoding

- `getCharacterEncoding ():string`

  Gets the character encoding used for the response body.<br/>@returns The character encoding string.

<hr/>

#### encodeRedirectURL

- `encodeRedirectURL (url:string):string`

  Encodes a URL for use in the `Location` header of a redirect response.<br/>@param url The redirect URL to encode.<br/>@returns The encoded redirect URL string.

<hr/>

#### getContentType

- `getContentType ():string`

  Gets the current `Content-Type` header value.<br/>@returns The content type string.

<hr/>

#### sendError

- `sendError (status:number, message?:string):void`

  Sends an HTTP error response to the client with the specified status code and optional message.<br/>This bypasses the normal response body writing process.<br/>@param status The HTTP status code (e.g., 404, 500).<br/>@param message An optional message to include in the error response.

<hr/>

#### setCharacterEncoding

- `setCharacterEncoding (charset:string):void`

  Sets the character encoding to be used for the response body (e.g., 'UTF-8').<br/>@param charset The character set string.

<hr/>

#### sendRedirect

- `sendRedirect (location:string):void`

  Sends a redirect response (status code 302 by default) to the client.<br/>@param location The new URL to redirect the client to.

<hr/>

#### setContentLength

- `setContentLength (length:number):void`

  Sets the `Content-Length` header for the response.<br/>@param length The size of the response body in bytes.

<hr/>

#### setHeader

- `setHeader (name:string, value:string):void`

  Sets a response header with the given name and value. If the header already exists, its value is overwritten.<br/>@param name The name of the header.<br/>@param value The value of the header.

<hr/>

#### addHeader

- `addHeader (name:string, value:string):void`

  Adds a response header with the given name and value. If the header already exists, a second header with the same name is added.<br/>@param name The name of the header.<br/>@param value The value of the header.

<hr/>

#### setStatus

- `setStatus (status:number):void`

  Sets the HTTP status code for the response.<br/>@param status The integer status code (e.g., 200, 404).

<hr/>

#### reset

- `reset ():void`

  Clears all buffers, status code, and headers from the response, allowing a new response to be generated.<br/>This is only possible if the response has not yet been committed.

<hr/>

#### getHeader

- `getHeader (name:string):string`

  Gets the value of a specific header. If multiple headers with the same name exist, it returns the first one.<br/>@param name The name of the header.<br/>@returns The header value string.

<hr/>

#### setLocale

- `setLocale (language:string, country?:string, variant?:string):void`

  Sets the locale for the response, which may affect language and date/time formatting.<br/>@param language The language code (e.g., 'en', 'fr').<br/>@param country The optional country code (e.g., 'US', 'GB').<br/>@param variant The optional variant code.

<hr/>

#### getHeaders

- `getHeaders (name:string):string[]`

  Gets all header values for a specific header name as an array of strings.<br/>@param name The name of the header.<br/>@returns An array of header values.

<hr/>

#### getHeaderNames

- `getHeaderNames ():string[]`

  Gets the names of all headers that have been set on the response.<br/>@returns An array of header names.

<hr/>

#### getLocale

- `getLocale ():string`

  Gets the currently set locale string for the response.<br/>@returns The locale string.

<hr/>

#### getOutputStream

- `getOutputStream ():OutputStream`

  Gets the underlying output stream object, wrapped in the SDK's `OutputStream` class.<br/>This is useful for writing raw or large amounts of data.<br/>@returns The output stream object.

