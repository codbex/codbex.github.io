# Web Engine

## Introduction

The Web Engine in the __codbex__ platform allows developers to expose static web content seamlessly using the underlying Apache Tomcat server embedded in the Spring Boot framework. This documentation explores key features of the Web Engine, including serving static content, configuring routes, and leveraging the embedded Tomcat server.

## Web Engine Features

### Exposing Static Web Content

The Web Engine enables developers to expose static web content, including HTML, CSS, JavaScript, and other assets. Static content can be organized within the projects and made accessible after publishing to the registry.

### Embedded Apache Tomcat Server in Spring Boot

The Web Engine in the platform is built on the Spring Boot framework, which includes an embedded Apache Tomcat server. This embedded server simplifies deployment and provides a scalable environment for serving web applications.

## Underlying Apache Tomcat Embedded in Spring Boot

The Web Engine utilizes the Apache Tomcat server embedded within the Spring Boot framework. This embedded server offers several advantages:

Key Features of Apache Tomcat Embedded in Spring Boot:

### Simplified Deployment

Spring Boot's embedded Tomcat server simplifies deployment by packaging the application as a self-contained JAR file. This eliminates the need for external server installations and configuration.

### Auto-Configuration

Spring Boot's auto-configuration features simplify the setup of the embedded Tomcat server. Developers can focus on application logic, and the embedded server adapts to project dependencies and settings.

### Scalability

The embedded Apache Tomcat server in Spring Boot provides scalability for serving web applications. It supports concurrent connections, load balancing, and efficient resource utilization.


## Web Configuration Example

The `project.json` definition provides the configuration for a project, specifying the web paths that should be exposed. The interpretation of the exposed modules may depend on the specific conventions and structure of the project.

Below is an example configuration setting up static web content:

```json
 {
   "guid":"my-project",
   "exposes":
     [
       "ui",
       "samples"
    ]
}
```

### `exposes`:

The exposes field is an array that specifies the different modules or parts of the project that should be exposed or made accessible. In this example, the project exposes two modules: "ui" and "samples."

#### `ui`: 

This suggests that the project includes a user interface component that can be accessed or interacted with. It could include static web content, UI components, or other assets related to the user interface of the project.

#### `samples`: 

This indicates that there is a module or section in the project that contains sample code, examples, or demo functionalities. It could be a set of code snippets, tutorial materials, or sample applications intended for demonstration purposes.

#### `hidden`

This is not defined in the `project.json` under `exposes` section, so that it will not be accessible.

## Conclusion

The Web Engine in the __codbex__ platform, powered by the embedded Apache Tomcat server in Spring Boot, provides a versatile platform for exposing static web content and building dynamic web applications. By configuring access and leveraging the embedded server features, developers can create scalable and efficient web solutions.

