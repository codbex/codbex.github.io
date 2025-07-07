---
title: Migrating SAP BW with Kronos - From Legacy to Flexibility
description: Revolutionizing the way you integrate SAP ABAP and HANA XS development into your Snowflake ecosystem, Kronos brings unparalleled ease and efficiency to your workflow. And the best part? It takes only a few minutes to install and start using this productivity-ready platform
date: 2025-06-10
author: nedelcho
editLink: false
---

# Migrating SAP BW with Kronos - From Legacy to Flexibility

<div style="text-align: center;">
   <img src="/images/2025-06-10-kronos-bw-migration/bw-datacenter.jpg" style="height: 20rem; !important; float: left !important; padding: 2em; padding-right: 4em;"/>
</div>

The end of SAP BW support is pushing many enterprises to look for reliable, scalable alternatives. At __codbex__, we’ve built Kronos to address exactly that challenge, by enabling the migration of SAP BW artifacts to modern platforms like Snowflake, PostgreSQL, HANA, and Oracle, without losing control or reengineering everything from scratch.

## Why Kronos?

Kronos is an open-source data transformation and integration platform built with cloud-native Java and JavaScript/TypeScript technologies. It’s designed for hybrid modernization, supporting both **lift-and-shift** of ABAP-based logic and rebuild of data pipelines using **modern tools**.

With Kronos, your SAP BW investment is not lost. Instead, it becomes portable, extensible, and future-proof.

## Four Flexible Migration Options with Kronos

### ABAP Engine for Lift-and-Shift Mappings

For teams who prefer to preserve existing SAP BW logic, Kronos provides a **built-in ABAP engine** for reusing InfoProvider transformations and mapping logic. This is ideal for:

- **Fast onboarding** of legacy BW logic
- Migrate your InfoProviders and mappings as they are
- **Incremental migration** planning

Start your migration journey using the built-in ABAP engine in Kronos where:

- ABAP code is transpiled and executed within Kronos
- **SAP BASIS APIs are re-implemented** natively to support BW logic
- Minimal refactoring required for preserving existing behavior


<img src="/images/2025-06-10-kronos-bw-migration/kronos-bw-migration-abap.png" width="800em">

> The core ABAP APIs from SAP BW are re-implemented in Kronos by our partner [**Heliconia Labs**](https://heliconialabs.com/), enabling seamless execution of transpiled mapping logic without an actual SAP runtime.

More information about the **legal aspects** of this option can be found [here](/documentation/migrations/abap-migration.md).

### Visual Mapping with Mapping Modeller

Want a low-code, visual way to rebuild your transformations? Kronos includes a Mapping Modeller that allows you to:

- Visually define source → target field mappings
- Add **constant values**
- Apply **functions and filters**
- Define **custom handlers** in **JavaScript** or **TypeScript**

<img src="/images/2025-06-10-kronos-bw-migration/mapping-tool.png" width="600em">

This **no-code/low-code** experience helps data engineers and business users alike design powerful transformations without writing ABAP code. It’s also ideal for functional consultants or business-focused teams who want transparency and control, without diving into code.


### Direct JavaScript/TypeScript Handlers in Apache Camel

Kronos leverages **Apache Camel** as the backbone of its **ETL/ELT pipeline engine**. You can create Camel routes and enrich them with **custom JavaScript/TypeScript handlers**, allowing maximum flexibility and integration with external systems, APIs, or business logic.

<img src="/images/2025-06-10-kronos-bw-migration/camel-backbone.png" width="600em">

You can directly define custom handlers to implement complex logic using:

- JavaScript / TypeScript
- Reusable and testable processing components
- Flexible integration with REST, JDBC, files, and more

This path gives you full programmatic control over your pipelines—ideal for custom transformations and real-time integrations.

### Target-Side Stored Procedures

In environments where logic is best executed close to the data, Kronos supports invoking stored procedures directly within your target databases, including:

- PostgreSQL
- MySQL/MariaDB
- Snowflake
- SAP HANA

This method reduces data movement and takes advantage of database-native performance optimizations.

## Choose Your Path - Or Combine Them!

<div style="text-align: center;">
   <img src="/images/2025-06-10-kronos-bw-migration/bw-cloud.jpg" style="height: 20rem; !important; float: right !important; padding: 2em; padding-right: 4em;"/>
</div>

The beauty of Kronos lies in its modularity. These four options aren’t mutually exclusive—you can mix and match them based on:

- Your current BW landscape
- Team skillsets (ABAP, JS, SQL)
- Performance and maintenance considerations
- Future-proofing and extensibility

Whether you want a quick migration, a flexible transformation, or a cloud-native redesign, Kronos is your reliable engine to move SAP BW to modern data platforms like Snowflake, PostgreSQL, or SAP BTP.


## Ready to Get Started?

Explore Kronos in action, and let’s start your BW modernization journey today.

[Learn more about Kronos](https://www.codbex.com/products/kronos)


