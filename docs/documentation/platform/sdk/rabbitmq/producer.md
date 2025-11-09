# API: producer

> Source: `rabbitmq/producer.ts`

RabbitMQ Producer

This facade provides a static method to send messages to a RabbitMQ queue,
wrapping the underlying Java implementation provided by the `RabbitMQFacade`.

## Usage
```javascript
import { producer } from "sdk/rabbitmq";
producer.send("rabbitmq-queue", "My RabbitMQ message");

```


## Classes

### Producer

RabbitMQ Producer<br/><br/>This facade provides a static method to send messages to a RabbitMQ queue,<br/>wrapping the underlying Java implementation provided by the `RabbitMQFacade`.

#### Methods

<hr/>

#### send

- `send (queue:string, message:string):void`

  Sends a message to the specified RabbitMQ queue.<br/><br/>@param queue The name of the RabbitMQ queue to send the message to.<br/>@param message The content of the message to be sent (as a string).

