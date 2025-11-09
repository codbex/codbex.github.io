# API: resource-http-controller

> Source: `http/rs/resource-http-controller.ts`

Interface for the context object passed to handler functions (before, serve, catch).

## Classes

### HttpController

The main class for handling HTTP requests and routing them to the correct resource handlers.

#### Methods

<hr/>

#### listen

- `listen (request:any, response:any):void`

  Alias for execute.

<hr/>

#### execute

- `execute (request?:any, response?:any):void`

  Executes the request handling logic, finding the best matching resource and handler.

<hr/>

#### mappings

- `mappings ():ResourceMappings`

  Returns the ResourceMappings instance of this controller.

<hr/>

#### sendError

- `sendError (httpErrorCode:number, applicationErrorCode:any, errorName:string, errorDetails:string):void`

  Sends an error response to the client, formatted based on the accepted media type.

<hr/>

#### closeResponse

- `closeResponse ():void`

  Flushes and closes the HTTP response stream.

