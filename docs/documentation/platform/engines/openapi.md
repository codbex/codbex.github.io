# OpenAPI Engine

## Introduction

The OpenAPI Engine in the __codbex__ platform streamlines the management and integration of REST services by collecting *.openapi files with Swagger descriptors. This documentation explores key features of the OpenAPI Engine, emphasizing its capability to aggregate multiple OpenAPI specifications into a consolidated REST services API set for the instance.

## OpenAPI Engine Features

### Aggregation of `*.openapi` Files

OpenAPI Engine is designed to collect and integrate multiple *.openapi files, each containing a Swagger/OpenAPI specification. This aggregation allows developers to organize and manage various REST service definitions within a single instance.

Example *.openapi Configuration:

```json
{
  "location": "/api/customers.openapi",
  "title": "Customers API",
  "version": "1.0.0",
  "basePath": "/v1/customers",
  "swagger": "2.0",
  "info": {
    "title": "Customers API",
    "version": "1.0.0"
  },
  "paths": {
    "/": {
      "get": {
        "summary": "Get all customers",
        "responses": {
          "200": {
            "description": "Successful operation"
          }
        }
      },
      "post": {
        "summary": "Create a new customer",
        "responses": {
          "201": {
            "description": "Customer created"
          }
        }
      }
    }
    // Additional path definitions...
  }
}
```

### Consolidated REST Services API Set

The OpenAPI Engine integrates the collected specifications into a consolidated REST services API set for the instance. This unified API set serves as a comprehensive reference for all available REST services, providing a centralized point for developers to explore and interact with various endpoints.

Example Aggregated API Set URL: [http://example.com/services/openapi](http://example.com/services/openapi)

### Automatic Documentation Generation

The aggregated OpenAPI specifications not only define the structure of REST services but also facilitate automatic documentation generation. Developers can access interactive documentation, explore endpoints, and understand request/response formats through the Swagger UI or other compatible tools.

Example Swagger UI URL: [http://example.com/services/web/ide-swagger/ui/](http://example.com/services/web/ide-swagger/ui/)

### Platform Services API Documentation

The OpenAPI specifications for the built-in RESTful services provided by the platform can be accessed at: [http://example.com/api-docs](http://example.com/api-docs).

The corresponding Swagger UI can be accessed at: [http://example.com/swagger-ui/index.html](http://example.com/swagger-ui/index.html)

## Conclusion

The OpenAPI Engine in the __codbex__ platform simplifies the management of REST services by aggregating multiple `*.openapi`` files into a consolidated API set. This approach enhances organization, documentation, and accessibility for developers working on RESTful applications.