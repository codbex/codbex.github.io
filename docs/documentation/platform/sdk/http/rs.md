# HTTP RESTful Services Framework

The HTTP RESTful Services Framework provides a robust and flexible platform for developing RESTful APIs within the scripting environment. Leveraging standard HTTP methods and principles of Representational State Transfer (REST), this framework empowers developers to create web services that are scalable, interoperable, and easily consumable by clients.

Key features of the HTTP RESTful Services Framework include:

* `Resource-Oriented Design`: The framework adopts a resource-oriented design approach, where each endpoint represents a unique resource with its own URI. By adhering to REST principles, developers can create well-defined and self-descriptive APIs that promote simplicity, clarity, and discoverability.

* `HTTP Method Mapping`: The framework maps HTTP methods (e.g., GET, POST, PUT, DELETE) to operations on resources, enabling developers to define the behavior of each endpoint based on the corresponding HTTP method. This allows for the implementation of CRUD (Create, Read, Update, Delete) operations and other custom actions on resources.

* `Request Routing`: Incoming HTTP requests are routed to the appropriate endpoint handler based on the request URI and method. The framework provides mechanisms for defining routes and associating them with handler functions, allowing for the seamless dispatching of requests to the correct endpoint for processing.

* `Content Negotiation`: The framework supports content negotiation, allowing clients to specify their preferred representation format (e.g., JSON, XML) using standard HTTP headers such as Accept and Content-Type. This enables the creation of APIs that can serve multiple content types based on client preferences.

* `Middleware Support`: Middleware components can be integrated into the request-response cycle to provide cross-cutting concerns such as authentication, authorization, logging, and error handling. The framework offers middleware hooks for intercepting and modifying requests and responses at various stages of processing.

* `Data Validation and Serialization`: The framework includes built-in support for data validation and serialization, ensuring that incoming request data is validated against predefined schemas and serialized/deserialized correctly. This helps maintain data integrity and consistency within the API.

* `Error Handling`: Comprehensive error handling mechanisms are provided to handle exceptions and errors gracefully within the framework. Developers can define error handlers to capture and process errors, returning appropriate HTTP status codes and error messages to clients for effective error communication.

By offering a rich set of features for resource-oriented design, HTTP method mapping, request routing, content negotiation, middleware support, data validation, serialization, and error handling, the HTTP RESTful Services Framework simplifies the development of RESTful APIs within the scripting environment. It enables developers to create scalable, maintainable, and interoperable web services that adhere to REST principles and best practices.

### Example Usage

```javascript
import { rs } from "sdk/http";

rs.service()
    .resource("")
    .get(function (_ctx, _request, response) {
        response.println("Hello there!");
    })
    .execute();
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**service(mappings?)**   | Creates an HttpController instance, optionally initialized with a JS configuration or ResourceMappings object| *HttpController*


## Objects

---



### HttpController


Property     | Description | Returns
------------ | ----------- | --------
**execute(request?, response?)**   | processes HTTP requests, to match path, method and constraints to resource mappings and invoke callback handler functions accordingly and generate response.  | *---*
**mappings()**   | Returns the mappings configured for this controller instance.  | *ResourceMapppngs*




### ResourceMappings


Property     | Description | Returns
------------ | ----------- | --------
**resource(configuration?)**   | Returns the *resource* configuration object optionally initialized with oConfiguration | *Resource*
**configuration()**   | Returns the configuration for this *ResourceMappings* object | *Object*
**readonly()**   | Disables all but GET requests to this API | *ResourceMappings*
**disable(sPath, verb, arrConsumes, arrProduces)**   | Disables the handling of requests sent to path path with HTTP method verb and with consumes media type arrConsumes and produces media type arrProduces media type constraints | *ResourceMappings*
**find(path, verb, arrConsumes, arrProduces)**   | Finds a request handler for requests sent to path path with HTTP method verb and with consumes media type arrConsumes and produces media type arrProduces media type constraints | *ResourceMethod*
**execute(request?, response?)**  | Executes the service | *----*


### Resource


Property     | Description | Returns
------------ | ----------- | --------
**get(serveCallback?)**   | Returns the *get* method configuration object, optionally configured with serveCallback for serving requests | *ResourceMethod*
**post(serveCallback?)**   | Returns the *post* method configuration object, optionally configured with serveCallback for serving requests | *ResourceMethod*
**put(serveCallback?)**   | Returns the *put* method configuration object, optionally configured with serveCallback for serving requests | *ResourceMethod*
**delete(serveCallback?)**   | Returns the *delete* method configuration object, optionally configured with serveCallback for serving requests | *ResourceMethod*
**remove(serveCallback?)**   | Same as delete() | *ResourceMethod*
**method(httpVerb, configuration?)**   | Returns the a method configuration object for the sHttpVerb HTTP method name and optionally initialized with configuration object  | *ResourceMethod*
**configuration()**   | Returns the configuration for this *Resource* object | *Object*
**readonly()**   | Disables all but GET requests to this resource | *ResourceMappings*
**disable(verb, arrConsumes, arrProduces)**   | Disables the handling of requests sent to this resource path with HTTP method sVerb and with consumes media type arrConsumes and produces media type arrProduces media type constraints | *ResourceMappings*
**find(verb, arrConsumes, arrProduces)**   | Finds a request handler for requests sent to this resource path with HTTP method sVerb and with consumes media type arrConsumes and produces media type arrProduces media type constraints | *ResourceMethod*
**execute(request?, response?)**  | Executes the service | *----*

### ResourceMethod


Property     | Description | Returns
------------ | ----------- | --------
**configuration()**   | Returns the configuration for this *ResourceMethod* object | *Object*
**consumes(arrMediaTypeStrings)**   | Assigns a consumes constraint for this verb handler configuration. | *ResourceMethod*
**produces(arrMediaTypeStrings)**   | Assigns a produces constraint for this verb handler configuration. | *ResourceMethod*
**before(function)**   | Assign a before callback function for this verb handler configuration | *ResourceMethod*
**serve(function)**   | Assign a verb handler function for this verb handler configuration | *ResourceMethod*
**catch(function)**   | Assign a catch on error callback function for this verb handler configuration | *ResourceMethod*
**finally(function)**   | Assign a finally callback function for this verb handler configuration | *ResourceMethod*
**execute(request?, response?)**  | Executes the service | *----*