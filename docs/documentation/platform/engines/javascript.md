# JavaScript Engine

## Introduction

The JavaScript Engine in the __codbex__ platform empowers developers to write server-side scripts, APIs, and business logic using the JavaScript language. This documentation provides an in-depth overview of the JavaScript Engine's capabilities and its underlying framework, GraalJS.

## JavaScript Engine Features

### Server-Side Scripting

The JavaScript Engine allows developers to execute server-side scripts, enabling the creation of dynamic and scalable applications. Scripts can be embedded within the projects to handle various backend functionalities.

Example:

```javascript
// Simple JavaScript Function
function greet(name) {
    return "Hello, " + name + "!";
}
```

### API Development

Developers can use the JavaScript Engine to build RESTful services and APIs. The platform provides a set of APIs and tools to handle HTTP requests, database interactions, and other server-side operations.

Example:

```javascript
// RESTful API Endpoint
import { rs } from "sdk/http";

rs.service()
    .resource("")
    .get(function (_context, _request, response) {
        response.println("Hello there!");
    })
    .execute();
```

### ES6 Syntax Support

The JavaScript Engine fully supports ECMAScript 6 (ES6) syntax, allowing developers to use modern JavaScript features for cleaner and more efficient code.

Example:

```javascript
// ES6 Arrow Function
const addNumbers = (a, b) => a + b;

// Destructuring Assignment
const { firstName, lastName } = person;
```

### Underlying Framework: GraalJS

The JavaScript Engine in the __codbex__ platform is built on the GraalVM (GraalJS) framework. GraalVM is a high-performance runtime that provides support for multiple languages, including JavaScript.

Key features of GraalJS:

#### Just-In-Time Compilation (JIT)

GraalJS employs JIT compilation to dynamically translate JavaScript code into machine code for improved execution speed. This compilation strategy enhances performance and responsiveness.

#### Polyglot Integration

GraalVM allows polyglot programming, enabling the seamless integration of multiple languages within the same application. Developers can leverage JavaScript alongside other languages supported by GraalVM.

#### Ahead-of-Time Compilation (AOT)

GraalVM supports Ahead-of-Time compilation, enabling the pre-compilation of JavaScript code into native machine code. This feature enhances startup performance and reduces memory footprint.

#### Native Image Generation

GraalVM's native image generation capabilities enable the creation of lightweight and standalone executable binaries. This is particularly useful for optimizing the deployment and distribution of applications.


