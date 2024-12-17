# WebSocket

The WebSocket API provides access to the Session object for the management of bi-directional communication based on the WebSocket specification. WebSockets enable real-time, full-duplex communication between a client (such as a web browser) and a server over a single, long-lived connection.

## Overview

WebSocket is a communication protocol that provides a full-duplex, persistent connection between a client and a server, allowing them to exchange messages in real-time. The WebSocket API offers developers a way to interact with WebSocket sessions, handle events, and send/receive messages efficiently.

## Key Features

- **WebSocket Session Management**: The API provides functionalities to manage WebSocket sessions, including opening, closing, and handling events.
- **Message Exchange**: Developers can send and receive messages over WebSocket connections, enabling real-time communication between clients and servers.
- **Event Handling**: The API supports event-driven programming, allowing developers to define callback functions to handle WebSocket events such as connection open, close, error, and message reception.
- **Protocol Support**: WebSocket API adheres to the WebSocket protocol specification, ensuring compatibility with WebSocket servers and clients.

### Example Usage

#### Client

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
```

#### Server

For example: `my-endpoint.websocket` is using the same **handler** from above

```json
{
  "handler": "my-project/ws-handler",
  "endpoint":"my-endpoint",
  "description":"My Websocket"
}
```

then you can call from a browser:

```javascript
let ws = new WebSocket("ws://localhost:8080/websockets/v4/service/my-endpoint");
ws.send('hello');
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**createWebsocket(uri, handler, engine)**   | Creates a WebsocketClient by URI, handler and engine type | *WebsocketClient*
**getClients()**    | Returns the list of the created WebsocketClients | *list of WebsocketClient metadata*
**getClient(id)**   | Returns the client by its id, if exists or null otherwise | *WebsocketClient*
**getClientByHandler(handler)**   | Returns the client by its handler, if exists or null otherwise | *WebsocketClient*
**getMessage()**   | Returns the message in context of OnMessage handler | *string*
**getError()**   | Returns the error in context of OnError handler | *string*
**getMethod()**   | Returns the method type in context of the handler | *onopen, onmessage, onerror, onclose*
**isOnOpen()**   | Returns true in context of OnOpen handler | *boolean*
**isOnMessage()**   | Returns true in context of OnMessage handler | *boolean*
**isOnError()**   | Returns true in context of OnError handler | *boolean*
**isOnClose()**   | Returns true in context of OnClose handler | *boolean*



## Objects

---

### WebsocketClient

Function     | Description | Returns
------------ | ----------- | --------
**send(message)**   | Sends a text message via the Websocket connection | -
**close()**   | Closes the Websocket connection | -
