# API: consumer

> Source: `messaging/consumer.ts`

Provides an API for consuming messages from JMS-style destinations,
supporting both Queues (point-to-point) and Topics (publish/subscribe).

## Usage
```javascript
import { consumer } from "sdk/messaging";

let message = consumer.queue("queue1").receive(1000);

console.log(message)

```


## Classes

### Consumer

The entry point for creating messaging consumers.<br/>Use this class to obtain instances of Queue or Topic consumers.

#### Methods

<hr/>

#### queue

- `queue (destination:string):Queue`

  Creates a Queue consumer instance for point-to-point messaging.<br/>Messages sent to this destination are consumed by only one receiver.<br/><br/>@param destination The name of the queue destination (e.g., 'orders.queue').<br/>@returns A {@link Queue} instance.

<hr/>

#### topic

- `topic (destination:string):Topic`

  Creates a Topic consumer instance for publish/subscribe messaging.<br/>Messages sent to this destination can be consumed by multiple subscribers.<br/><br/>@param destination The name of the topic destination (e.g., 'market.updates.topic').<br/>@returns A {@link Topic} instance.

### Queue

Represents a consumer for a Queue destination (point-to-point).

#### Methods

<hr/>

#### receive

- `receive (timeout:number=1000):number=1000)`

  Attempts to synchronously receive a message from the queue.<br/><br/>@param timeout The maximum time (in milliseconds) to wait for a message. Defaults to 1000ms.<br/>@returns The received message content (usually a string or object), or null if the timeout is reached.

### Topic

Represents a consumer for a Topic destination (publish/subscribe).

#### Methods

<hr/>

#### receive

- `receive (timeout:number=1000):number=1000)`

  Attempts to synchronously receive a message from the topic.<br/><br/>@param timeout The maximum time (in milliseconds) to wait for a message. Defaults to 1000ms.<br/>@returns The received message content (usually a string or object), or null if the timeout is reached.

