# Listeners Engine

## Introduction

The Listeners Engine in the __codbex__ platform provides a powerful mechanism for creating event-driven applications. This documentation explores the key features of the Listeners Engine, including the concepts of Topics and Queues, JavaScript handlers, and the underlying ActiveMQ framework.

## Listeners Engine Features

### Event-Driven Architecture

The Listeners Engine enables developers to build event-driven applications by setting up listeners for specific events. Listeners can be configured to react to changes in the system, such as database updates, file system events, or custom triggers.

Example:

```
{
  "name":"my_listener",
  "kind":"Queue",
  "handler":"my-project/listeners/my-handler.js",
  "description":"My Listener"
}
```

### Topics and Queues Concepts

* __Topics__: Topics represent a publish-subscribe model where messages sent to a topic are broadcasted to all subscribers. Subscribers interested in a specific topic receive relevant messages.

Example:

`"kind":"Topic",`

* __Queues__: Queues represent a point-to-point model where messages are sent to a specific queue, and only one subscriber (consumer) receives and processes each message.

Example:

`"kind":"Queue",`

### JavaScript Handlers

Listeners in the platform can be associated with JavaScript handlers that define the logic to be executed when an event occurs. Handlers have access to the event data and can perform custom actions based on the event type.

Example:

```javascript
export function onMessage(message) {
	console.log(message);
}

export function onError(error) {
	console.error(error);
}
```


## Underlying ActiveMQ Framework

The Listeners Engine in the __codbex__ platform is built on the ActiveMQ framework, a robust open-source messaging and integration patterns server. ActiveMQ provides reliable and scalable messaging capabilities, supporting both Topics and Queues.

Key Features of ActiveMQ:

### JMS (Java Message Service) Support

ActiveMQ adheres to the JMS specification, allowing seamless integration with applications written in various programming languages. JMS provides a standard way to send and receive messages.

### Persistence and Redelivery

ActiveMQ supports message persistence, ensuring that messages are not lost even in the event of system failures. It also provides redelivery mechanisms to handle scenarios where message processing fails.

### Clustering and High Availability

ActiveMQ supports clustering, allowing multiple instances of the message broker to work together. This ensures high availability and load balancing for handling messages.

## Conclusion

The Listeners Engine in the __codbex__ platform, built on the ActiveMQ framework, provides a robust and scalable solution for building event-driven applications. By leveraging Topics, Queues, and JavaScript handlers, developers can create flexible and responsive systems that react to changes in real-time.
