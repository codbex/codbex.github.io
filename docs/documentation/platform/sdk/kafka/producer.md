# API: producer

> Source: `kafka/producer.ts`

Provides an API for configuring and managing Kafka producers,
allowing scripts to create topics, send messages, and close the producer connection.

## Usage
```javascript
// Send

import { producer } from "sdk/producer";
producer.topic("topic1", "{}").send("key1", "value1");


// Close

import { producer } from "sdk/producer";
producer.close("{}");

```


## Classes

### Producer

The Producer class serves as the main entry point for creating and configuring<br/>Kafka topic producers.

#### Methods

<hr/>

#### topic

- `topic (destination:string, configuration:{[key:string]:string}={}):Topic`

  Creates a new topic configuration wrapper that can be used to send messages<br/>to a specific Kafka topic.<br/><br/>@param destination The name of the Kafka topic to send messages to.<br/>@param configuration Optional key-value object containing Kafka producer properties<br/>(e.g., 'bootstrap.servers', 'acks').<br/>@returns A {@link Topic} instance configured for the specified destination and properties.

<hr/>

#### close

- `close (configuration:{[key:string]:string}={}):void`

  Closes the Kafka producer connection pool, releasing associated resources.<br/>This should be called when message sending is complete to ensure proper cleanup.<br/><br/>@param configuration Optional key-value object containing the configuration<br/>used to initialize the producer to be closed.

### Topic

Represents a configured Kafka topic that can be used to send messages.

#### Methods

<hr/>

#### send

- `send (key:string, value:string):void`

  Sends a message with an optional key to the configured Kafka topic.<br/><br/>@param key The key of the message. Messages with the same key go to the same partition.<br/>@param value The content of the message to be sent.

