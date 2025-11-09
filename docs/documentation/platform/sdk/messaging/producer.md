# API: producer

> Source: `messaging/producer.ts`

Provides an API for producing (sending) messages to JMS-style destinations,
supporting both Queues (point-to-point) and Topics (publish/subscribe).

## Usage
```javascript
import { producer } from "sdk/messaging"

producer.queue("queue1").send("Text Message");

```


## Classes

### Producer

The entry point for creating messaging producers.<br/>Use this class to obtain instances of Queue or Topic producers for sending messages.

#### Methods

<hr/>

#### queue

- `queue (destination:string):Queue`

  Creates a Queue producer instance for point-to-point messaging.<br/>Messages sent to this destination are intended to be consumed by a single receiver.<br/><br/>@param destination The name of the queue destination (e.g., 'task.queue').<br/>@returns A {@link Queue} instance.

<hr/>

#### topic

- `topic (destination:string):Topic`

  Creates a Topic producer instance for publish/subscribe messaging.<br/>Messages sent to this destination can be consumed by multiple subscribers simultaneously.<br/><br/>@param destination The name of the topic destination (e.g., 'sensor.data.topic').<br/>@returns A {@link Topic} instance.

### Queue

Represents a producer for a Queue destination (point-to-point).

#### Methods

<hr/>

#### send

- `send (message:string):void`

  Sends a message to the configured queue destination.<br/><br/>@param message The content of the message to send (typically a string or serialized object).

### Topic

Represents a producer for a Topic destination (publish/subscribe).

#### Methods

<hr/>

#### send

- `send (message:string):void`

  Sends a message to the configured topic destination. All active subscribers will receive the message.<br/><br/>@param message The content of the message to publish (typically a string or serialized object).

