# API: integrations

> Source: `integrations/integrations.ts`

Provides a static façade for interacting with Apache Camel routes
within the execution environment. This allows JavaScript code to synchronously
invoke integration routes and access the current message context.

## Classes

### Integrations

The Integrations class provides utility methods for triggering and interacting<br/>with predefined Apache Camel integration routes.

#### Methods

<hr/>

#### invokeRoute

- `invokeRoute (routeId:string, payload:any, headers:HeadersMap, exchangeProperties:ExchangeProperties):ExchangeProperties)`

  Synchronously invokes a specified Camel route.<br/><br/>@param routeId The unique identifier of the Camel route to be executed.<br/>@param payload The initial message body/payload for the route.<br/>@param headers A map of headers to set on the initial Camel Message.<br/>@param exchangeProperties A map of properties to set on the Camel Exchange context.<br/>@returns The final result (the body of the resulting Camel Message) after the route has completed execution.

<hr/>

#### getInvokingRouteMessage

- `getInvokingRouteMessage ():IntegrationMessage`

  Retrieves the current message being processed by the underlying integration<br/>engine's context. This is typically used within a route endpoint (e.g., a script component)<br/>to access or modify the message.<br/><br/>Note: '__context' is assumed to be a global or context-injected variable.<br/>@returns The current IntegrationMessage wrapper.

