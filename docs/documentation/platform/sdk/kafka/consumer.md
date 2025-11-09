# API: consumer

> Source: `kafka/consumer.ts`

Provides an API for configuring and managing Kafka consumers,
allowing scripts to start and stop listening to specific topics.

## Usage
```javascript
// --------
// start.ts
// --------

import { consumer } from "sdk/kafka";
consumer.topic("topic1", "{}").startListening("my-kafka-project/my-kafka-handler", 1000);

// -------------------
// my-kafka-handler.ts
// -------------------

exports.onMessage = function(message) {
    console.log("Hello from My Kafka Listener! Message: " + message);
};

exports.onError = function(error) {
    console.error("Error from My Kafka Listener! Error: " + error);
};

// -------
// stop.ts
// -------

import { consumer } from "sdk/kafka";
consumer.topic("topic1", "{}").stopListening();

```


## Classes

### Consumer

The Consumer class acts as the main entry point for creating and configuring<br/>Kafka topic consumers.

#### Methods

<hr/>

#### topic

- `topic (destination:string, configuration:{[key:string]:string}={}):Topic`

  Creates a new topic configuration wrapper that can be used to start or<br/>stop listening for messages on a Kafka topic.<br/><br/>@param destination The name of the Kafka topic to consume messages from.<br/>@param configuration Optional key-value object containing Kafka consumer properties<br/>(e.g., 'group.id', 'auto.offset.reset').<br/>@returns A {@link Topic} instance configured for the specified destination and properties.

### Topic

Represents a configured Kafka topic consumer capable of starting and stopping<br/>background message listening.

#### Methods

<hr/>

#### startListening

- `startListening (handler:string, timeout:number):void`

  Starts listening to the configured topic in a background process.<br/><br/>@param handler The path to the script or function name that will handle the incoming Kafka messages.<br/>This function should accept two arguments: `message` (string) and `headers` (object).<br/>@param timeout The maximum amount of time (in milliseconds) the consumer should wait for messages.

<hr/>

#### stopListening

- `stopListening ():void`

  Stops the background process that is listening to the configured topic.<br/>Note: Stopping is based on matching the topic and configuration, so the same<br/>configuration object used in `startListening` should be used here.

