# OpenAPI

## Overview

In the __codbex__ platform, the OpenAPI artifact (`*.openapi`) is used to define an OpenAPI-compliant specification for a given RESTful service. This specification contributes to the global Swagger descriptor for the server instance, providing a standardized way to document and describe the RESTful APIs exposed by the __codbex__ application.

Here's an overview of its usage:

::: tip
File extension: `*.openapi`
:::

### OpenAPI Specification:

The OpenAPI Specification (OAS), formerly known as Swagger Specification, is a standardized format to describe and document RESTful APIs. The `*.openapi` artifact in the platform allows developers to provide an OpenAPI-compliant specification for a specific RESTful service.

### Global Swagger Descriptor:

The OpenAPI specification contributed by the `*.openapi` artifact becomes part of the global Swagger descriptor for the server instance. The global Swagger descriptor aggregates the OpenAPI specifications of all RESTful services, providing a centralized and comprehensive API documentation.

Example:

```json
// products.openapi
{
    "openapi": "3.0.0",
    "info": {
        "version": "1.0.0",
        "title": "Products API",
        "description": "RESTful API for managing products"
    },
    "paths": {
        "/products": {
            "get": {
                "summary": "Get the list of products",
                "operationId": "getProducts",
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "example": {
                                    "productId": 1,
                                    "productName": "Example Product",
                                    "price": 19.99
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

**Properties:**

* `openapi` (String): Specifies the version of the OpenAPI Specification. In this example, it is set to `3.0.0`.
* `info` (Object): Contains metadata information about the API.
    * `version` (String): Specifies the version of the API.
    * `title` (String): Provides a title for the API.
    * `description` (String): Offers a description of the API.
* `paths` (Object): Defines the available paths and operations within the API.
* Path Definition:
    * Operation (e.g., get): Specifies the HTTP method for the operation, and the associated details, such as summary, operationId, and responses.
* `operationId` (String): Represents a unique identifier for the operation. It is commonly used to generate client SDKs.
* `responses` (Object): Describes the possible responses for the operation.
    * `200` (Object): Represents a successful response with the associated description and content.
    * `content` (Object): Defines the content type and an example of the response payload.

## Benefits:

### Standardized Documentation:

OpenAPI specifications provide a standardized way to document RESTful APIs, making it easier for developers and consumers to understand and interact with the APIs.

### Centralized Swagger Descriptor:

The OpenAPI specifications contributed by various *.openapi artifacts are centralized in the global Swagger descriptor, providing a comprehensive view of all APIs exposed by the server instance.

### API Versioning and Metadata:

OpenAPI specifications include metadata such as API version, title, and description, helping in versioning and providing essential information about the API.

## Getting Started:

### Create an `*.openapi` File:

Create a new *.openapi file or modify an existing one based on your specific RESTful service.

### Define OpenAPI Specification:

Use the OpenAPI Specification (OAS) to define details such as the API version, title, description, paths, and operations.

### Reference in RESTful Service Configuration:

Reference the `*.openapi` file in the configuration of the corresponding RESTful service (e.g., *.js file).

### Deploy and Access Swagger UI:

Deploy your __codbex__ application and access the Swagger UI endpoint (`/api-docs`) to view the centralized Swagger documentation, including your API.

## Conclusion:

The `*.openapi` artifact in the __codbex__ platform allows developers to provide OpenAPI-compliant specifications for their RESTful services, contributing to the global Swagger descriptor. This standardized documentation enhances API discoverability and fosters a consistent and well-documented API development process.

