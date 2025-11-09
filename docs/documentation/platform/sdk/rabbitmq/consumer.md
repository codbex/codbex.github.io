# API: consumer

> Source: `rabbitmq/consumer.ts`

RabbitMQ Consumer

This facade provides static methods to start and stop listening on RabbitMQ queues,
wrapping the underlying Java implementation provided by the `RabbitMQFacade`.

## Usage
```javascript
// --------
// start.ts
// --------

import { consumer } from "sdk/rabbitmq";
consumer.startListening("rabbitmq-queue", "my-rabbitmq-project/my-rabbitmq-handler");

// ----------------------
// my-rabbitmq-handler.ts
// ----------------------

exports.onMessage = function(message) {
    console.log("Hello from My RabbitMQ Listener! Message: " + message);
};

exports.onError = function(error) {
    console.error("Error from My RabbitMQ Listener! Error: " + error);
};

// -------
// stop.ts
// -------

import { consumer } from "sdk/rabbitmq";
consumer.stopListening("rabbitmq-queue", "my-rabbitmq-project/my-rabbitmq-handler");

```


## Classes

### Consumer

RabbitMQ Consumer<br/><br/>This facade provides static methods to start and stop listening on RabbitMQ queues,<br/>wrapping the underlying Java implementation provided by the `RabbitMQFacade`.

#### Methods

<hr/>

#### startListening

- `startListening (queue:string, handler:string):void`

  Starts listening for messages on a specified RabbitMQ queue.<br/>The handler is typically a service or script URI that will be executed<br/>when a message arrives.<br/><br/>@param queue The name of the RabbitMQ queue to listen to.<br/>@param handler The URI/name of the component/script that will handle the message.

<hr/>

#### stopListening

- `stopListening (queue:string, handler:string):void`

  Stops the message listener previously started on a specified RabbitMQ queue<br/>for a given handler.<br/><br/>@param queue The name of the RabbitMQ queue.<br/>@param handler The URI/name of the component/script whose listener should be stopped.

