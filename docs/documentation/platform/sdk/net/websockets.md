# API: websockets

> Source: `net/websockets.ts`

Provides a high-level API for managing WebSocket clients and handling
lifecycle events within the application context. It wraps the internal Java
WebsocketsFacade.

## Usage
```javascript
import { websockets } from "sdk/net"

const uri = "ws://echo.websocket.org:80/";
const handler = "my-project/ws-handler"

function initialize() {
    console.log("Connect to: " + uri);
    let websocket = websockets.createWebsocket(uri, handler);
    websocket.send("hello");
}

initialize();

websockets.getClientByHandler(handler).close();


// my-endpoint.websocket

{
  "handler": "my-project/ws-handler",
  "endpoint":"my-endpoint",
  "description":"My Websocket"
}


// ----------------
// from web browser
// ----------------

let ws = new WebSocket("ws://localhost:8080/websockets/service/my-endpoint");
ws.send('hello');


```


## Classes

### Websockets

Websockets<br/>Static utility class for accessing and managing WebSocket functionality.

#### Methods

<hr/>

#### createWebsocket

- `createWebsocket (uri:string, handler:string):WebsocketClient`

  Creates a new WebSocket client connection to a specified URI, managed by a handler script.<br/><br/>@param uri The target WebSocket URI (e.g., 'ws://example.com/socket').<br/>@param  handler The identifier or path of the script handling the WebSocket events.<br/>@returns  A wrapper object for the new WebSocket session.

<hr/>

#### getClients

- `getClients ():string}[]`

  Retrieves a list of all active WebSocket clients.<br/><br/>@returns {{ uri: string, handler: string }[]} An array of objects detailing the URI and handler of each client.

<hr/>

#### getClient

- `getClient (id:string):WebsocketClient|undefined`

  Retrieves a specific WebSocket client wrapper by its session ID.<br/><br/>@param  id The session ID of the client.<br/>@returns  The client wrapper or undefined if not found.

<hr/>

#### getClientByHandler

- `getClientByHandler (handler:string):WebsocketClient|undefined`

  Retrieves a specific WebSocket client wrapper by its handler identifier.<br/><br/>@param  handler The handler identifier associated with the client.<br/>@returns  The client wrapper or undefined if not found.

<hr/>

#### getMessage

- `getMessage ():any`

  Retrieves the message payload from the current context, typically used inside an 'onmessage' handler.<br/><br/>@returns  The message content.

<hr/>

#### getError

- `getError ():any`

  Retrieves error details from the current context, typically used inside an 'onerror' handler.<br/><br/>@returns  The error object or string.

<hr/>

#### getMethod

- `getMethod ():string`

  Retrieves the event method name that triggered the current script execution (e.g., "onopen", "onmessage").<br/><br/>@returns  The name of the event method.

<hr/>

#### isOnOpen

- `isOnOpen ():boolean`

  Checks if the current event context is 'onopen'.<br/>@returns  True if the method is 'onopen'.

<hr/>

#### isOnMessage

- `isOnMessage ():boolean`

  Checks if the current event context is 'onmessage'.<br/>@returns  True if the method is 'onmessage'.

<hr/>

#### isOnError

- `isOnError ():boolean`

  Checks if the current event context is 'onerror'.<br/>@returns  True if the method is 'onerror'.

<hr/>

#### isOnClose

- `isOnClose ():boolean`

  Checks if the current event context is 'onclose'.<br/>@returns  True if the method is 'onclose'.

### WebsocketClient

@class WebsocketClient<br/>@description Wrapper for a native WebSocket session, providing methods to send and close the connection.

#### Methods

<hr/>

#### send

- `send (text:string):void`

  Sends a text message over the WebSocket connection.<br/>@param  text The message to send.

<hr/>

#### close

- `close ():void`

  Closes the WebSocket connection.

