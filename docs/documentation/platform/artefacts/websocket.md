# WebSocket

## Overview:

The `*.websocket` files in the __codbex__ platform are used to define and configure WebSocket endpoints. WebSocket is a communication protocol that provides full-duplex communication channels over a single, long-lived connection.

Here's an explanation of the example `myws.websocket` file and its properties:

```json
{
  "location": "/my-project/websockets/myws.websocket",
  "handler": "my-project/websockets/my-handler.js",
  "endpoint": "my-websocket",
  "description": "My Websocket",
  "createdBy": "admin",
  "createdAt": "2022-07-06T2:24:12+0000"
}
```

::: tip
File extension: `*.websocket`
:::

**Properties:**

* `location` (String): Specifies the location or path of the WebSocket file within the project. In this example, it is located at `/my-project/websockets/myws.websocket`.
* `handler` (String): Specifies the location or path of the script or module that serves as the WebSocket handler. The handler contains the logic to be executed when WebSocket events occur. In this example, it is `my-project/websockets/my-handler.js`.
* `endpoint` (String): Represents the endpoint or URI path for the WebSocket connection. Clients connect to this endpoint to establish a WebSocket connection. In this example, it is `my-websocket`.
* `description` (String): Provides a description of the WebSocket, explaining its purpose or functionality. In this example, the description is `My WebSocket`.
* `createdBy` (String): Indicates the entity or user who created the WebSocket configuration. In this example, it is marked as `admin`.
* `createdAt` (String): Represents the timestamp when the WebSocket configuration was created. The timestamp follows the **ISO 8601** format. In this example, it is "2022-07-06T2:24:12+0000."

## Example Usage:

The example `myws.websocket` file defines a WebSocket configuration for an endpoint at `my-websocket`. The WebSocket handler script is located at `my-project/websockets/my-handler.js`.

## Getting Started:

### Create a WebSocket File:

Create a new `*.websocket` file or modify an existing one based on your specific WebSocket requirements.

### Configure WebSocket Properties:

Adjust the properties within the file to match the details of your WebSocket. Update the location, handler, endpoint, description, createdBy, and createdAt accordingly.

### Implement WebSocket Handler Logic:

Create the associated module or script (e.g., `my-project/websockets/my-handler.js`) to provide the implementation logic for the WebSocket. This script should handle events such as connection open, message reception, and connection close.

### Connect to WebSocket Endpoint:

Clients can connect to the WebSocket by accessing the specified endpoint (e.g., `ws://your-server/my-websocket`). Use WebSocket libraries in client applications to establish a connection.

## Best Practices:

### Clear Endpoint Naming:

Choose a clear and meaningful endpoint name for WebSocket connections.

### Secure Connections:

Consider using secure WebSocket connections (WSS) for secure communication.

### Handle WebSocket Events:

Implement logic in the WebSocket handler to handle events like connection open, message reception, and connection close.

## Conclusion:

The `*.websocket` files in the platform provide a simple and structured way to configure WebSocket endpoints. Customize these configurations based on your specific WebSocket communication needs.