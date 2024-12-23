---
title: Building Apps with Atlas on Snowflake
description: Introducing Atlas Edition - the all-in-one platform – comprehensive solution designed to empower developers in building and operating cloud applications with unparalleled efficiency and agility. Atlas Edition brings together a rich set of features and tools tailored to streamline the end-to-end development process, from model driven application, processes and integration flows
date: 2024-12-23
author: nedelchojr
editLink: false
---

# Building Apps with Atlas on Snowflake

Introducing [Atlas Edition](/products/atlas) - the all-in-one platform – comprehensive solution designed to empower developers in building and operating cloud applications with unparalleled efficiency and agility. Atlas Edition brings together a rich set of features and tools tailored to streamline the end-to-end development process, from model driven application, processes and integration flows.

<img src="/images/2024-03-07-application-development-with-atlas/architecture-monument-statue-landmark-atlas-austria.jpg" width="800em">

## Unveiling Atlas

In today's fast-paced digital landscape, the demand for rapid application development in the cloud is greater than ever. As businesses strive to stay ahead of the competition and meet the evolving needs of their customers, they require robust tools and platforms that enable seamless development, deployment, and management of cloud-native applications. In this blog post we will look into some of the features of Atlas and focus mainly on the newly added functionality - connecting to a Snowflake database.

For more key features you can visit the [Atlas Edition](/products/atlas) page.

## Model Driven Applications

One of the key features that defines Atlas is the ability, with minimal effort, to model and build whole full-stack applications ready to be used. This is possible with Atlas' `Entity Data Modeling`, a powerful custom editor for entities, properties and many more, some of the features are:
- Addition of entities
- Definition of properties
- Addition of custom logic to each entity/property via calculation fields and extension points
- Generating and previewing the pages/code and the ability to change your logic on the go

<img src="/images/2024-03-07-application-development-with-atlas/atlas-edm-editor.png" />


## Process-Driven Workflows

Atlas excels in enabling process-driven application development, allowing users to visually define workflows, decision points, and conditions. Leveraging a robust BPMN 2.0-compliant engine powered by [Flowable](https://www.flowable.com/), developers can build standardized and scalable business processes with ease. These process steps can be implemented in JavaScript or TypeScript, empowering developers with a powerful and dynamic In-System Development experience directly within Atlas.

<img src="/images/features/bpm-perspective.png" />

::: info Workflow Scenarios
- Automated employee onboarding.
- Order processing with conditional approvals.
- Inventory management with restocking triggers.
- Expense claim approvals with multiple decision points.
- User task workflows where a person must review and approve a document before the process continues.
- Customer support ticket escalation based on SLA breaches.
- Scheduling and notifications for appointment reminders. 
:::

## Seamless System Integrations

Atlas provides powerful tools to handle complex integration scenarios with a wide range of out-of-the-box connectors, leveraging the robust capabilities of the [Apache Camel](https://camel.apache.org/) engine. By utilizing Atlas, developers can seamlessly integrate services, systems, and applications to create unified solutions. Integration handlers can be implemented directly in JavaScript or TypeScript, offering developers the flexibility to create tailored solutions efficiently. This dynamic capability unlocks an unparalleled in-system development experience, enabling rapid iteration and customization.

<img src="/documentation/images/camel-sample-flow.png" />

::: info Integration Scenarios
- Syncing data between ERP and CRM systems.
- Real-time processing of IoT sensor data into analytics platforms.
- Automating order fulfillment with third-party logistics providers.
- Enabling single sign-on (SSO) across multiple applications.
- Connecting payment gateways to e-commerce platforms.
:::

## Deploying Atlas on Snowpark

As mentioned in the intro, recently we have added the ability to connect to Snowflake database using the Atlas' `Database` perspective. This gives us the ability to write full-stack applications and use all the features of Atlas directly into Snowflake, an invaluable tool paired with Snowflake's real-time data processing and analytics. 

::: info
Check the [Deploy codbex products on Snowflake](/technology/2024/09/11/deploy-codbex-products-on-snowflake) guide for detailed steps of how to deploy codbex products to Snowflake.

_Make sure that you are using the `ghcr.io/codbex/codbex-atlas:latest` image when following the steps in the guide in order to deploy Atlas._
:::

## Conclusion

In conclusion, Atlas Edition stands as the ultimate solution for rapid application development of cloud applications, offering a comprehensive suite of features and devops tools to streamline the entire development lifecycle. With its extensive capabilities spanning database modeling, RESTful services authoring, dynamic language support, user interface generation, role-based security, external services integration, testing, debugging, operations, and monitoring, Atlas Edition provides developers with everything they need to bring their ideas to life quickly and efficiently.

For more details about the [products](/products/) and [pricing](/pricing/) we are available through any of the channels in [contacts](/contact).
