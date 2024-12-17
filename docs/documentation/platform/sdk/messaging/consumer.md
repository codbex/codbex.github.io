# Message Consumer

The Message Consumer is a fundamental component provided by the system, offering the capability to receive and process text messages from Queue or Topic destinations within the integrated Message Broker. Powered by Apache ActiveMQ, the Message Consumer enables seamless integration with messaging systems for reliable message consumption.

## Overview

The Message Consumer plays a crucial role in distributed systems by facilitating the consumption of text messages sent to designated destinations. With support for both Queues and Topics, developers can build robust applications that leverage asynchronous communication and event-driven architectures.

## Features

- **Destination Flexibility**: Receive messages from both Queues and Topics to adapt to diverse messaging patterns.

- **Text Message Handling**: Process text-based messages efficiently, providing a versatile solution for message consumption.

- **Reliable Messaging**: Relies on Apache ActiveMQ to ensure reliable message delivery and consumption under various conditions.

## Usage

Utilizing the Message Consumer is straightforward and involves the following steps:

1. **Initialization**: Obtain an instance of the Message Consumer from the system.

2. **Destination Setup**: Specify the destination (Queue or Topic) from which messages should be consumed.

3. **Message Handling**: Implement message handling logic to process received messages according to application requirements.

4. **Message Consumption**: Use the Message Consumer's API to start consuming messages from the specified destination.

### Example Usage

```javascript
import { consumer } from "sdk/messaging";

let message = consumer.queue("queue1").receive(1000);

console.log(message)
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**queue()**   | Returns an object representing a Message Queue | *Queue*
**topic()**   | Returns an object representing a Message Topic | *Topic*


## Objects

---

### Queue

Function     | Description | Returns
------------ | ----------- | --------
**receive(timeout)**   | Receives a message from this Message Queue if any or null with the given timeout in milliseconds | *string*


### Topic

Function     | Description | Returns
------------ | ----------- | --------
**receive(timeout)**   | Receives a message from this Message Topic if any or null with the given timeout in milliseconds | *string*
