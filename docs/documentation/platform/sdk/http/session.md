# HTTP Session

The HTTP Session object provided by the scripting services implementation serves as a mechanism for maintaining session state and storing session attributes across multiple client requests within the same session context. Sessions enable web applications to associate data with a specific client's interaction with the server over a period of time, facilitating stateful communication and personalized user experiences.

Key features of the HTTP Session object include:

* `Stateful Communication`: The HTTP Session object allows web applications to maintain stateful communication with clients by associating session attributes with unique session identifiers. This enables the server to recognize and track clients across multiple requests, providing continuity and context throughout the client's interaction with the application.

* `Attribute Storage`: Session attributes, represented as key-value pairs, can be stored within the HTTP Session object to preserve data relevant to the current session. These attributes can include user preferences, authentication tokens, shopping cart contents, and other session-specific information that needs to persist across multiple requests.

* `Scalability`: The HTTP Session object supports scalable session management, allowing web applications to handle large numbers of concurrent sessions efficiently. Session data can be stored either in-memory, in external data stores (e.g., databases, caches), or using distributed session management techniques to ensure optimal performance and resource utilization.

* `Session Lifecycle`: Sessions have a well-defined lifecycle consisting of creation, access, and termination phases. Session creation occurs when a client initiates a new session by interacting with the application for the first time. Subsequent requests from the same client are associated with the existing session, allowing access to previously stored session attributes. Sessions can be terminated either explicitly by the client or automatically after a period of inactivity, releasing associated resources and freeing up server memory.

* `Session Management`: The HTTP Session object provides methods for managing session attributes, including retrieval, addition, modification, and removal of attributes. This allows developers to manipulate session data dynamically based on the requirements of the application and the actions performed by the client.

* `Security`: Sessions support various security measures to prevent unauthorized access and tampering of session data. These include session ID generation strategies, encryption of session attributes, and integration with authentication and access control mechanisms to ensure the confidentiality and integrity of session information.

By offering a robust set of features for stateful communication, attribute storage, scalability, lifecycle management, session management, and security, the HTTP Session object facilitates the development of dynamic and interactive web applications that require session-based interactions with clients. It provides a flexible and reliable mechanism for preserving session state and delivering personalized user experiences in web-based environments.

### Example Usage

```javascript
import { session, response } from "sdk/http";

session.setAttribute("attr1", "value1");
let attr = session.getAttribute("attr1");

response.println("[Attribute]: " + attr);
response.flush();
response.close();
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**isValid()**   | Returns true if the current execution context is in a HTTP call | *boolean*
**getAttribute(name)**   | Returns the HTTP session attribute by name | *string*
**getAttributeNames()**   | Returns all the HTTP session attributes names | *array of string*
**getCreationTime()**   | Returns the time when the HTTP session has been initialized | *Date*
**getId()**   | Returns the HTTP session ID | *string*
**getLastAccessedTime()**   | Returns the time when the HTTP session has been last accessed | *Date*
**getMaxInactiveInterval()**   | Returns the maximum inactive interval of this HTTP session | *int*
**invalidate()**   | Invalidates this HTTP session | -
**isNew()**   | Returns true, if the HTTP session is created during this HTTP call and false otherwise | *boolean*
**setAttribute(name, value)**   | Sets the HTTP session attribute by name and value | *string*
**removeAttribute(name)**   | Removes the HTTP session attribute by name | *string*
**setMaxInactiveInterval(interval)**   | Sets the maximum inactive interval of this HTTP session | -