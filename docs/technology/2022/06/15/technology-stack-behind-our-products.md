---
title: The Technology Stack behind Our Products
description: The technology stack by codbex, is powerful, highly modularized and provides many deployment options tailored for specific scenarios. The ultimate goal s to increase developer's productivity, hence decrease time to market of the quality software.
date: 2022-06-15
author: nedelcho
editLink: false
---

# The Technology Stack behind Our Products

The technology stack by codbex, is powerful, highly modularized and provides many deployment options tailored for specific scenarios. The ultimate goal is to increase developer's productivity, hence decrease time to market of the quality software.

The concepts which we follow when designing our technology stack:

### In-System Development

In-System Development known from microcontrollers to business software systems has the major benefit - 
working on a live system where all changes you make take effect immediately, 
hence the impact and side effects can be realized in the early stages of the development process.
It helps in achieving the shortest development turn-around time.

### Model Driven Architecture

Model Driven Architecture (MDA) approach aims at producing code from abstract, human-elaborated modeling diagrams.
The theory mandated initially by OMG is that there should be different level of abstractions - 
the Computation-independent Model (CIM), the Platform-independent model (PIM), and the Platform-specific model (PSM).
This is also one of the main points of the criticism of the MDA approach as it makes the process and tooling support more complex and unpredictable.
To improve the drawbacks we decided to combine PIM and PSM in a more aspect oriented way, so that the tooling will give
first the abstraction layer of the designed entities and then iteratively yet optionally PSM extensions to it.

### Content Management System

Content Management System (CMS) targets the creation and modification of digital content, 
such as electronic documents in Enterprise Content Management (ECM) or web site content used in Web Content Management (WCM).
We provide an user interface for managing documents in an hierarchical form of folders and subfolders as well as
underlying Content Management Interoperability Services (CMIS) API for connecting to the remote CMIS compliant storages.

### Business Process Modeling

Business Process Modeling (BPM) offers the way of digitalization of business process of a company, 
so that they can be reviewed, analyzed, modified and automated. We provide the modeler which produces
Business Process Modeling Notation (BPMN) 2.0 compliant models. Underlying execution of the processes is transferred to 
the business process execution engine.

### Mobile First Principle

User interfaces has to be responsive at first and the overall experience should be comparable no matter of the technology channel.
The UI Designer is the simplistic way to build forms connected to the REST layer and in the same way to offer reasonable flexibility.

### Desired State Principle

Desired State Principle follows the declarative way of describing the final state of the environment, which has to be achieved by the platform.
The reconciliation is performed by a set of workers in our case called synchronizers. The default behavior is that they can run simultaneously, 
but also there is a way to make them ordered when necessary.

### Contract First API Principle

The contract between the client and server side parties have to be well formed specification. 
Preferred and supported one in our stack is OpenAPI (a.k.a. Swagger), which gives a readable form of what is exposed as RESTful services
from a given instance.

### Microservices

Microservice as defined and widely used term is highly maintainable and testable, loosely coupled, independently deployable, 
organized around business capabilities and owned by a small team. It is wrongly assumed often that deploying 
the user interface, REST layer, persistence layer, etc. is anyhow related to microservices architecture.
The real microservice is self contained and responsible for the whole stack from bottom to top.
Also we believe that it is a flexibility to have a deployment option to run several microservices in a single environment 
when applicable and necessary to minimize the operations cost.

### Extensibility

Extensibility is the major feature required by the applicaiton runtimes nowadays. 
To have a minimalistic core and de-facto all the functionality to be implemented as plugins enhancing this core is quite successful
architectural approach. In our case there are different type of exetensibility for the different layers of the stack. 
The driving principle is that the extension point definitions are as simple as possible and the contract with 
the extension is bilateral.

### Dependency Management

Due to the fact that runtime stack containing also the applications themselves 
has to be built and deployed as a single immutable bundle for production,
we decided to go for a bit more relaxed dependency management rules. It follows the "global installs" principle with 
a single version per module - just like it is in standard Java. There are many other ways to manage dependencies 
e.g. npm, OSGi, etc. with their benefits and drawbacks, but we decided to have it simple and streigth forward.

### Open-source

We believe in open source. This is the way companies and individuals can collaborate on great ideas and make them reality.
The default case for every single piece of software built by codbex is to be open source. 
The exceptions will follow a very strict selection process and will be continuously monitored.

Architecture, deployment models and components:

## Application Development Stack

Application development stack compbines two layers - design time and runtime. Both layers comes with a predefined combination of modules - engines, APIs, databases, tools, templates, etc.

<img src="/images/application-stack.png" width="800em">

## Application Modules

Main components delivered built-in with codbex platforms are:

- Databases - various supported database products such as PostgreSQL, MySQL, SAP HANA, H2 and others
- Documents - CMIS based repository for storing binary files in the cloud
- Code - custom business logic of the application currently in JavaScript only (ECMA2020)
- OData - a generic RESTful layer on top of the database
- HTML5 - user interface which can be written in an arbitrary framework
- Permissions - security constraints
- Jobs - scheduled jobs which can be executed regularily
- Processes - BPMN v2.0 compliant business processes

<img src="/images/application-modules.png" width="800em">
