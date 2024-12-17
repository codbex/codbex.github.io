# Message Producer

The Message Producer is an object provided by the system, designed to facilitate the sending of text messages to a Queue or Topic destination within the built-in Message Broker. This component is backed by the robust messaging broker Apache ActiveMQ, offering reliable and scalable message delivery.

## Overview

The Message Producer serves as a bridge between applications and the messaging infrastructure, allowing developers to seamlessly send text messages to designated destinations. Whether it's for asynchronous communication, event-driven architectures, or distributed systems, the Message Producer offers a convenient interface for sending messages with ease.

## Features

- **Destination Flexibility**: Send messages to both Queues and Topics based on your application's requirements.
  
- **Text Message Support**: Send text-based messages, providing a versatile solution for various use cases.

- **Reliable Messaging**: Utilizes Apache ActiveMQ under the hood, ensuring reliable and efficient message delivery.

## Usage

To use the Message Producer, developers can follow these simple steps:

1. **Initialization**: Obtain an instance of the Message Producer from the system.

2. **Destination Setup**: Specify the destination (Queue or Topic) to which the message should be sent.

3. **Message Composition**: Compose the text message that needs to be sent.

4. **Message Sending**: Use the Message Producer's API to send the message to the specified destination.

### Example Usage

```javascript
import { producer } from "sdk/messaging"

producer.queue("queue1").send("Text Message");
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
**send(message)**   | Send a message to this Message Queue | -


### Topic

Function     | Description | Returns
------------ | ----------- | --------
**send(message)**   | Send a message to this Message Topic | -