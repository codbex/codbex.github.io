# API: utils

> Source: `http/utils.ts`

A utility class providing static methods to standardize and send
common HTTP responses (success and error) with application/json content type.

## Classes

### HttpUtils

Provides convenient static methods for sending standard HTTP responses.<br/>All responses are automatically formatted as 'application/json'.

#### Methods

<hr/>

#### sendResponseOk

- `sendResponseOk (entity:any):void`

  Sends a successful response with HTTP status 200 (OK).<br/>The provided entity is serialized as the JSON response body.<br/>@param entity The data entity to return in the response body.

<hr/>

#### sendResponseCreated

- `sendResponseCreated (entity:any):void`

  Sends a successful response with HTTP status 201 (Created).<br/>Typically used after a resource has been successfully created.<br/>@param entity The data entity of the newly created resource.

<hr/>

#### sendResponseNoContent

- `sendResponseNoContent ():void`

  Sends a successful response with HTTP status 204 (No Content).<br/>Typically used for successful DELETE requests or updates that do not return a body.

<hr/>

#### sendResponseBadRequest

- `sendResponseBadRequest (message:string):void`

  Sends an error response with HTTP status 400 (Bad Request).<br/>Used when the request could not be understood or processed due to client-side errors (e.g., validation failure).<br/>@param message A descriptive error message explaining why the request was invalid.

<hr/>

#### sendForbiddenRequest

- `sendForbiddenRequest (message:string):void`

  Sends an error response with HTTP status 403 (Forbidden).<br/>Used when the client is authenticated but does not have the necessary permissions to access the resource.<br/>@param message A descriptive error message.

<hr/>

#### sendResponseNotFound

- `sendResponseNotFound (message:string):void`

  Sends an error response with HTTP status 404 (Not Found).<br/>Used when the requested resource could not be found.<br/>@param message A descriptive error message.

<hr/>

#### sendInternalServerError

- `sendInternalServerError (message:string):void`

  Sends an error response with HTTP status 500 (Internal Server Error).<br/>Used for unexpected server-side conditions encountered during processing.<br/>@param message A descriptive error message (should mask internal details in production).

<hr/>

#### sendResponse

- `sendResponse (status:number, body?:any):void`

  Generic private method to set the response status, content type, and body.<br/>If a body is provided, it is stringified into JSON and written to the response.<br/>@param status The HTTP status code to set (e.g., 200, 404, 500).<br/>@param body The JavaScript object or string to be serialized as the response body (optional).

