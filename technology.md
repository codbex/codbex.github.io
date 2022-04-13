---
layout: default
title: Technology
---

{{ page.title }}
===

<br>

The technology stack by <b>codbex</b>, is modularized and provides many deployment options tailored for the specific scenario.
<br>

### Concepts
<br>

#### In-System Development

In-System Development known from microcontrollers to business software systems has the major benefit - 
working on a live system where all changes you make take effect immediately, 
hence the impact and side effects can be realized in the early stages of the development process.
It helps in achieving the shortest development turn-around time.
<br><br>

#### Model Driven Architecture

Model Driven Architecture (MDA) approach aims at producing code from abstract, human-elaborated modeling diagrams.
The theory mandated initially by OMG is that there should be different level of abstractions - 
the Computation-independent Model (CIM), the Platform-independent model (PIM), and the Platform-specific model (PSM).
This is also one of the main points of the criticism of the MDA approach as it makes the process and tooling support more complex and unpredictable.
To improve the drawbacks we decided to combine PIM and PSM in a more aspect oriented way, so that the tooling will give
first the abstraction layer of the designed entities and then iteratively yet optionally PSM extensions to it.
<br><br>

#### Content Management System

Content Management System (CMS) targets the creation and modification of digital content, 
such as electronic documents in Enterprise Content Management (ECM) or web site content used in Web Content Management (WCM).
We provide an user interface for managing documents in an hierarchical form of folders and subfolders as well as
underlying Content Management Interoperability Services (CMIS) API for connecting to the remote CMIS compliant storages.
<br><br>

#### Business Process Modeling

Business Process Modeling (BPM) offers the way of digitalization of business process of a company, 
so that they can be reviewed, analyzed, modified and automated. We provide the modeler which produces
Business Process Modeling Notation (BPMN) 2.0 compliant models. Underlying execution of the processes is transferred to 
the business process execution engine.
<br><br>

#### Mobile First Principle

User interfaces has to be responsive at first and the overall experience should be comparable no matter of the technology channel.
The UI Designer is the simplistic way to build forms connected to the REST layer and in the same way to offer reasonable flexibility.
<br><br>

#### Desired State Principle

Desired State Principle follows the declarative way of describing the final state of the environment, which has to be achieved by the platform.
The reconciliation is performed by a set of workers in our case called synchronizers. The default behavior is that they can run simultaneously, 
but also there is a way to make them ordered when necessary.
<br><br>

#### Contract First API Principle

The contract between the client and server side parties have to be well formed specification. 
Preferred and supported one in our stack is OpenAPI (a.k.a. Swagger), which gives a readable form of what is exposed as RESTful services
from a given instance.
<br><br>

#### Microservices

Microservice as defined and widely used term is highly maintainable and testable, loosely coupled, independently deployable, 
organized around business capabilities and owned by a small team. It is wrongly assumed often that deploying 
the user interface, REST layer, persistence layer, etc. is anyhow related to microservices architecture.
The real microservice is self contained and responsible for the whole stack from bottom to top.
Also we believe that it is a flexibility to have a deployment option to run several microservices in a single environment 
when applicable and necessary to minimize the operations cost.
<br><br>

#### Open-source

We believe in open source. This is the way companies and individuals can collaborate on great ideas and make them reality.
The default case for every single piece of software built by <b>codbex</b> is to be open source. 
The exceptions will follow a very strict selection process and will be continuously monitored.
<br><br>

### Modules
<br>

- Commons
  - Configuration
  - Health
  - Process
  - Test
  - Timeout
  - XML2JSON
- Core
  - Extensions
  - Publisher
  - Messaging
  - Scheduler
  - Security
  - Indexing
  - Git
  - Websockets
  - Registry
  - Migrations
  - Problems
  - Workspace
- Database
  - API
  - Data Models
  - Data Structures
  - SQL Builders
  - Persistence
  - Datasource Custom
  - Datasource Managed
  - Datasource Dynamic
  - Changlog
- Repository
  - API
  - Local
  - Database
  - Master
  - Search
  - Zip
  - Cache
- Engines
  - API
  - Javascript
  - Listener
  - Job
  - OData
  - Web
  - Wiki
  - Command
- Security
  - OAuth
- Services
  - Core
  - Extensions
  - OpenAPI
  - Operations
  - Registry
  - Repository
  - Security
  - Theme
  - Transport
  - Websockets
- Templating
  - Core
  - Velocity
  - Mustache
  - Javascript
- OData
  - API
  - Core
  - Tests
  - Sample
- Mail
  - Configuration
- CMS
  - API
  - Internal
  - Managed
  - Database
  - CSV Imports
- BPM
  - API
  - Flowable
- Web IDE
  - User Interfaces
    - About
    - BPM Modeler
    - Branding
    - Console
    - Core
    - CSV
    - CSVIM
    - Data Structures
    - Database
    - Debugger
    - Deploy Manager
    - Documents
    - Entity Modeler
    - Extensions
    - Form Builder
    - Git
    - Image
    - Jobs
    - Listeners
    - Logs
    - Monaco
    - Operations
    - Plugins
    - Preview
    - Problems
    - Registry
    - Repository
    - Schema Modeler
    - Security
    - Swagger
    - Terminal
    - Websockets
    - Workbench
    - Workspace
  - Services
    - Core
    - Console
    - BPM
    - Databases
    - Editor
    - Git
    - Publisher
    - Terminal
    - Workspaces
- API
  - Core
  - BPM
  - CMS
  - Database
  - Documents
  - Git
  - HTTP
  - HTTP Async
  - Indexing
  - I/O
  - Log
  - Mail
  - Messaging
  - Net
  - Platform
  - Security
  - Tests
  - Utils
- External
  - Cassandra
  - Elasticsearch
  - etcd
  - Kafka
  - MongoDB
  - RabbitMQ
  - Redis
  - Spark
- Templates
  - Database
  - AngularJS
  - OpenUI5
  - Samples
- Distibutions
  - Server
  - Desktop
  - Runtime
  - OpenShift
  - Cloud Foundry
  - Kyma (Kubernetes)
  - Spring Boot
  - Eclipse Vert.x
  - picocli
  - Buildpacks
  - CMS
  - Anonymous
  - Trial

<br><br><br>
