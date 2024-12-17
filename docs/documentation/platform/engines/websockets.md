# WebSockets Engine

## Introduction

The WebSockets Engine in the __codbex__ platform provides a robust solution for real-time communication between clients and the server. This documentation explores key features of the WebSockets Engine, highlighting its support for the SockJS framework and the Stomp protocol.

## WebSockets Engine Features

### Real-Time Communication

The WebSockets Engine enables real-time bidirectional communication between clients and the server. This is particularly useful for applications that require instant updates, such as chat applications, live dashboards, and collaborative editing.

Example:

```javascript
// Establish WebSocket Connection
var socket = new WebSocket("ws://example.com/socket");
```

### SockJS Framework Support

WebSockets Engine supports the SockJS framework, a JavaScript library that provides a WebSocket-like object for browsers that do not support native WebSocket connections. SockJS seamlessly falls back to alternative transport mechanisms when necessary.

Example SockJS Connection:

```javascript
// Establish SockJS Connection
var socket = new SockJS("http://example.com/sockjs");
```

### Stomp Protocol Integration

The WebSockets Engine integrates the Stomp protocol (Simple Text Oriented Messaging Protocol) for framing messages and interacting with the WebSocket server. Stomp simplifies the communication protocol and supports features such as message acknowledgment and subscription.

Example Stomp Connection:

```javascript
// Connect to WebSocket using Stomp
var stompClient = Stomp.over(socket);
stompClient.connect({}, function (frame) {
    console.log("Connected: " + frame);
});
```

### WebSocket File Descriptor Configuration

The configuration of WebSocket endpoints is defined in *.websocket descriptor files. Below is an example descriptor configuration:

```json
{
  "handler":"my-project/websockets/my-handler.js",
  "endpoint":"my-websocket",
  "description":"My Websocket"
}
```

* `handler`: Specifies the location of the JavaScript file serving as the WebSocket endpoint's handler logic.

* `endpoint`: Specifies the WebSocket endpoint path that clients use to connect.

* `description`: Provides a brief description of the WebSocket endpoint.


### WebSocket Handler

JavaScript file serving as the WebSocket endpoint's handler logic.

Example:

```javascript
export function onOpen()  {
  console.log("Connection openned.");
}

export function onMessage(message, from) {
  console.log("Message received: " + message + ", from: " + from);
  return "Hello from WebSocket! [" + message + "]";
}

export function onError(error) {
  console.error("Error: " + error);
}

export function onClose() {
  console.warn("Connection closed.");
}
```

### WebSocket Client

Below is an example HTML code snippet for a WebSocket client:

```html
<html>
	<head>
	    <title>JavaScript WebSocket</title>
	    
	    <script src="js/sockjs-0.3.4.js"></script>
	    <script src="js/stomp.js"></script>
	    
	    <script type="text/javascript">

	        var stompClient = null;

	        function setConnected(connected) {

	            document.getElementById('connect').disabled = connected;
	            document.getElementById('disconnect').disabled = !connected;
	            document.getElementById('conversationDiv').style.visibility = connected ? 'visible' : 'hidden';
	            document.getElementById('response').innerHTML = '';
	        }

	        function connect() {

	            var socket = new SockJS('/stomp');
	            stompClient = Stomp.over(socket);

	            stompClient.connect({}, function(frame) {

	            	setConnected(true);
	                console.log('Connected: ' + frame);

	                stompClient.subscribe('/user/queue/reply/my-websocket', function(messageOutput) {
	                    showMessage(JSON.parse(messageOutput.body));
	                });

	                stompClient.subscribe('/user/queue/errors/my-websocket', function(error) {
	                	showError(error);
	                });

	            }, function(error) {
	            	showError(error);
	            });
	        }

	        function disconnect() {

	            if(stompClient != null) {
	                stompClient.disconnect();
	            }

	            setConnected(false);
	            console.log("Disconnected");
	        }

	        function sendMessage() {
	        	var from = document.getElementById('from').value;
	            var text = document.getElementById('text').value;
	            stompClient.send("/ws/stomp/my-websocket", {}, JSON.stringify({'from':from, 'text':text}));
	        }

	        function showMessage(messageOutput) {
	            var response = document.getElementById('response');
	            var p = document.createElement('p');
	            p.style.wordWrap = 'break-word';
	            p.appendChild(document.createTextNode(messageOutput.from + ": " + messageOutput.text + " (" + messageOutput.time + ")"));
	            response.appendChild(p);
	        }
	        
	        function showError(error) {
	            var response = document.getElementById('response');
	            var p = document.createElement('p');
	            p.style.wordWrap = 'break-word';
	            p.appendChild(document.createTextNode(error));
	            response.appendChild(p);
	        }

	    </script>
	    
	</head>
	
	<body onload="disconnect()">

		<div>
		
		
			<div>
				<input type="text" id="from" placeholder="Choose a nickname"/>
			</div>
			<br />
		    <div>
		        <button id="connect" onclick="connect();">Connect</button>
		        <button id="disconnect" disabled="disabled" onclick="disconnect();">Disconnect</button>
		    </div>
		    <br />
		    <div id="conversationDiv">
		        <input type="text" id="text" placeholder="Write a message..."/>
		        <button id="sendMessage" onclick="sendMessage();">Send</button>
		        <p id="response"></p>
		    </div>
		</div>

	</body>
</html>
```

## Conclusion

The WebSockets Engine in the __codbex__ platform provides a powerful and flexible solution for real-time communication. With support for the SockJS framework, integration with the Stomp protocol, and the ability to configure WebSocket endpoints through `*.websocket` descriptors, developers can create dynamic and responsive applications that leverage the capabilities of WebSockets.
