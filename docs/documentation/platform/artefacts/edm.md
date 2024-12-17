# Entity Data Model

## Overview

The Entity Data Model (EDM) artefact in the __codbex__ platform is an XML file used by the Entity Data Modeler to define the domain model of applications. It provides a structured representation of entities, relationships, and properties, allowing developers to design and manage data models for their applications.

::: tip
File extension: `*.edm`
:::

## Purpose

The EDM artefact serves several purposes:

1. **Data Modeling**: Developers can use the EDM file to model the domain-specific entities and their relationships within an application. This includes defining entities, attributes, associations, and inheritance hierarchies.

2. **Code Generation**: The EDM file acts as a source for code generation (via [*.model](model.md)), enabling the automatic creation of data access code, such as entity classes, repositories, and database schema scripts. This accelerates the development process and ensures consistency between the data model and application code.

## Syntax

The syntax of an EDM file is XML-based, following the Entity Data Model schema. It consists of elements representing entities, properties, associations, and other metadata related to the domain model.

## Usage

EDM files are typically used in the following scenarios:

* **Application Development**: Developers use EDM files to define the data model of their applications, including entities, properties, and associations. This serves as a blueprint for implementing database schemas, entity classes, and data access logic.

* **Code Generation**: EDM files are consumed by code generation tools or frameworks to automatically generate code artifacts based on the defined data model. This includes generating entity classes, data access layers, and database scripts tailored to the application's requirements.

## Conclusion

The Entity Data Model (EDM) artefact in __codbex__ provides a standardized approach to define and manage the domain model of applications. By representing entities, properties, and relationships in a structured XML format, EDM files enable developers to design, generate, and integrate data models seamlessly within their development workflows.