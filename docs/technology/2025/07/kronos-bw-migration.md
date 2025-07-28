---
title: 'Migrating SAP BW to Kronos: A Hands-On Guide'
description: In this blog post, we present a practical overview of migrating SAP BW scenarios using Kronos
date: 2025-07-25
author: iliyan
editLink: false
---

# Migrating SAP BW to Kronos: A Hands-On Guide

## Overview

In this blog post, we present a practical overview of migrating SAP BW scenarios using [Kronos](/products/kronos) — codbex's modern data integration platform — onto modern platforms like Snowflake, SAP HANA, and even lightweight setups like H2 for local testing. For a broader, business-oriented view of this migration journey, check out our companion blog post: [Migrating SAP BW with Kronos - From Legacy to Flexibility](/marketing/2025/06/10/kronos-bw-migration)

## Migration Summary
SAP BW systems, while historically robust, are built on tightly-coupled ABAP logic and rigid data models. Migrating to Kronos allows you to retain your BW logic while adopting modern, flexible, and cloud-native data platforms. Using Kronos, you can:

- Export and reimplement BW transformation logic.
- Replicate BW data models (InfoObjects, DataSources, DSOs, InfoCubes, MultiProviders).
- Rebuild data model flows logic with BPM orchestration.
- Visualize the result using modern tools.
- Run on Snowflake, HANA, PostgreSQL or even H2 for local testing.

The Kronos allows this entire process to be modular, reusable, and executable on any supported platform.

## Lift-and-Shift Migration Approach
The "lift and shift" strategy provides a straightforward and transparent method to migrate your SAP BW logic with minimal redesign. The following steps outline the process using Kronos:

### 1. Replicate BW Objects to Target Platform

   All BW objects (InfoObjects, DataSources, DSOs, InfoCubes, etc.) are copied over to the destination platform. This can be done using any data migration tools.

   <a href="/images/2025-07-21-kronos-bw-migration/data-structures.gif" target="_blank">
   <img src="/images/2025-07-21-kronos-bw-migration/data-structures.gif" alt="data-structures.gif">
   </a>

### 2. Migrate Data

   Once the data structures are in place, all associated data must also be migrated to ensure full alignment with the original BW system. This step guarantees a one-to-one semantic correspondence between the source and target environments.

### 3. Export BW Transformation Logic
   
   Each ABAP transformation is completely exported from the BW system using a dedicated export tool.
   
   The exported artifacts must be pushed to a Kronos project stored in a git repository.
   <a href="/images/2025-07-21-kronos-bw-migration/abap-transformations-export.png" target="_blank">
   <img src="/images/2025-07-21-kronos-bw-migration/abap-transformations-export.png" alt="abap-transformations-export.png">
   </a>

### 4. ABAP Transformation code to JavaScript code
   
   On build time, the ABAP transformation code is automatically transpiled to JavaScript. This allows Kronos to execute it during the transformation.

   <a href="/images/2025-07-21-kronos-bw-migration/transpilation.png" target="_blank">
   <img src="/images/2025-07-21-kronos-bw-migration/transpilation.png" alt="transpilation.png">
   </a>
   
### 5. Rebuild Transformations as ETL Camel Routes

   Using Kronos ETL modules based on [Apache Camel](https://camel.apache.org/), each transformation is re-implemented as a [Camel route](/documentation/platform/artefacts/camel).

   <a href="/images/2025-07-21-kronos-bw-migration/camel-routes.png" target="_blank">
   <img src="/images/2025-07-21-kronos-bw-migration/camel-routes.png" alt="camel-routes.png">
   </a>

### 6. BW Data Model Flows as BPM Processes
   
   Each data model flow is implemented as Kronos [BPM process](/documentation/platform/artefacts/bpmn):
   - Each BPM task calls an ETL Camel route
   - Aggregated results are stored
   - Fully orchestrated execution flow mirrors BW's data model flow behavior

   <a href="/images/2025-07-21-kronos-bw-migration/bpm-process.png" target="_blank">
   <img src="/images/2025-07-21-kronos-bw-migration/bpm-process.png" alt="bpm-process.png" style="width: 70%;">
   </a>

### 7. Visualization

   Once all BPM processes have been executed and the underlying ETL transformations have run successfully, the data is ready for visualization. At this stage, you can:
   - Connect to modern BI tools like Tableau, Power BI, or Apache Superset
   - Recreate classic BEx Queries using Kronos or redesign reports with a modern UX
   - Enable self-service analytics and dynamic dashboards powered by the transformed, consolidated data

   <a href="/images/2025-07-21-kronos-bw-migration/visualize.png" target="_blank">
   <img src="/images/2025-07-21-kronos-bw-migration/visualize.png" alt="visualize.png">
   </a>

### 8. Decommission the BW System

   Once all data structures, transformations, and reporting flows have been successfully migrated and validated within Kronos, the legacy SAP BW system can be safely decommissioned. This marks the completion of the migration, allowing you to reduce infrastructure costs and eliminate technical debt associated with maintaining the older BW environment.

## Demo: Bike Sales Data Flow Migration

To demonstrate the Kronos-based SAP BW migration approach, we've prepared a complete demo scenario showcasing the migration of a BW data flow related to Bike Sales. This scenario illustrates how a typical end-to-end pipeline — from raw DataSources to final processed data — can be rebuilt using Kronos components.

### Scenario Overview

This scenario outlines the data flow architecture for reporting bike sales through two distinct sales channels: Internet Sales and Reseller Sales. The architecture is designed in SAP BW using standard InfoProviders and transformation logic to support unified and channel-specific reporting.

Sales Channels:
- Internet Sales
- Reseller Sales

Each channel has its own independent data acquisition and processing pipeline, yet they are ultimately consolidated for unified analysis.

   <a href="/images/2025-07-21-kronos-bw-migration/data-model-flow.png" target="_blank">
   <img src="/images/2025-07-21-kronos-bw-migration/data-model-flow.png" alt="data-model-flow.png" style="width: 90%;">
   </a>

Data Flow Description:
1. Data Sources:
- DS for Internet Sales Transactional Data (DS_IS_TD): Captures transactional data related to online (internet-based) sales.
- DS for Reseller Sales Transactional Data (DS_RS_TD): Gathers transactional sales data from reseller partners.

These data sources serve as the initial entry point of raw sales data into the SAP BW system.

2. Data Targets (ODS Layer / DataStore Objects):
- Internet Sales Fact (TD_IS)
- Reseller Sales Fact (TD_RS)

Transactional data is loaded 1:1 into these DataStore Objects. These represent the consolidation layer where data is cleansed and harmonized before being pushed into analytical InfoCubes.

3. InfoCubes (Analytical Layer):
- Internet Sales InfoCube (TD_IS_C)
- Reseller Sales InfoCube (TD_RS_C)

Data is transferred from the facts layer into the InfoCubes using direct assignments (1:1), formulas and abap routines, allowing for the enrichment of key figures and characteristics needed for reporting. These cubes store aggregated sales data for each channel, optimized for performance and analysis.

4. Consolidation for Reporting - Sales Multiprovider (SLS_MP)

The InfoCubes for both Internet and Reseller Sales are combined into a Multiprovider, enabling a unified view of total sales. This allows users to:
- Analyze sales by channel, region, time, product, and customer.
- Compare performance between Internet and Reseller sales.
- Generate comprehensive reports for management insights.

You can find more details about the scenario [in the description file here.](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/docs/scenario/Description.docx.pdf)

### Sample Project Implementation

This section outlines how the Bike Sales data flow scenario is implemented in [the sample Git repository](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration). 
While the scenario can run on any supported target platform — including Snowflake, PostgreSQL, and SAP HANA—it is described using the H2 Database for simplicity and ease of local execution. 

Each step demonstrates how core components—such as table structures, transformation logic, and orchestration flows—are realized using Kronos, following the principles of the lift-and-shift migration approach.

#### Start Kronos instance locally
Start a Kronos container locally using the following command:
```shell
docker run --name codbex-kronos \
  -p 80:80 -p 8081:8081 \
  ghcr.io/codbex/codbex-kronos:2.90.0 # or newer
```
By default, Kronos uses the H2 database as the target platform, making it easy to run the demo locally without additional setup. No configuration changes are required to get started.

#### Run the Sample Project
Once the Kronos instance is up and running, you can open and run the sample project using the following steps:
- Open Kronos in your browser at [http://localhost/](http://localhost/)
- Login using the default credentials, user `admin` and password `admin`
  <a href="/images/2025-07-21-kronos-bw-migration/welcome-kronos.png" target="_blank">
  <img src="/images/2025-07-21-kronos-bw-migration/welcome-kronos.png" alt="welcome-kronos.png">
  </a>
- Go to the `Git` perspective
  <a href="/images/2025-07-21-kronos-bw-migration/git-perspective.png" target="_blank">
  <img src="/images/2025-07-21-kronos-bw-migration/git-perspective.png" alt="git-perspective.png" style="width: 40%;">
  </a>
- Click on the `Clone` button
  <a href="/images/2025-07-21-kronos-bw-migration/clone-btn.png" target="_blank">
  <img src="/images/2025-07-21-kronos-bw-migration/clone-btn.png" alt="clone-btn.png" style="width: 40%;">
  </a>
- Set `https://github.com/codbex/codbex-sample-kronos-bw-sales-migration.git` for repository URL and click on the `Clone` button
  <a href="/images/2025-07-21-kronos-bw-migration/clone-project.png" target="_blank">
  <img src="/images/2025-07-21-kronos-bw-migration/clone-project.png" alt="clone-project.png" style="width: 40%;">
  </a>
- Go back to the `Workbench` perspective
  <a href="/images/2025-07-21-kronos-bw-migration/workbench-btn.png" target="_blank">
  <img src="/images/2025-07-21-kronos-bw-migration/workbench-btn.png" alt="workbench-btn.png" style="width: 40%;">
  </a>
- Click on the `Publish all` button
  <a href="/images/2025-07-21-kronos-bw-migration/publish-btn.png" target="_blank">
  <img src="/images/2025-07-21-kronos-bw-migration/publish-btn.png" alt="publish-btn.png" style="width: 40%;">
  </a>

  Publishing the project activates it in the Kronos runtime. This step automatically sets up all required components, including database structures, sample data, transformation logic, BPM processes, etc.—so everything is ready to run without additional configuration.

   Since this is an asynchronous process, it may take a few seconds for all components to be fully initialized.

#### Define BW Objects in the Target Platform
To simplify the setup and avoid using external data migration tools, all BW structures used in the scenario—such as tables for DataSources, DSOs, and Cubes—are predefined in the Kronos [Database Schema Model (DSM)](/documentation/platform/artefacts/dsm) file: [sales/db/db-schema.dsm](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/db/db-schema.dsm):
<a href="/images/2025-07-21-kronos-bw-migration/dsm.png" target="_blank">
<img src="/images/2025-07-21-kronos-bw-migration/dsm.png" alt="dsm.png">
</a>

This schema is automatically applied when the project is published, creating all required tables in the target platform with no manual setup needed.

#### Import Sample Data
Following the same approach, sample data for the scenario is provided as CSV files located in dir: [sales/db/](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/db)

These CSV files are automatically imported into the target platform during project publishing. This makes it possible to initialize the environment without relying on any external data migration tools.

All CSV files which are used are configured in [CSVIM](/documentation/platform/artefacts/csvim) file [sales/db/data.csvim](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/db/data.csvim)

✅ This simplified setup works out of the box across supported platforms, including H2, Snowflake, PostgreSQL, and HANA.

#### Export BW Transformation Logic
The ABAP transformation logic originally defined in SAP BW is exported using a dedicated export tool.
In the sample project, the exported transformations are stored as `.abap` files in the following directory: [sales/src/](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/src)

#### Transpile ABAP to JavaScript
When the project is published in Kronos, the exported ABAP transformation logic from dir `sales/src/` is **automatically transpiled to JavaScript**. This makes it executable within Kronos during ETL processing.

The transpilation is triggered by the build scripts defined in the project's configuration file
[sales/project.json](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/project.json) when the project is published.

The generated JavaScript files are stored in the `sales/dist/` folder of the project.
<a href="/images/2025-07-21-kronos-bw-migration/dist-folder.png" target="_blank">
<img src="/images/2025-07-21-kronos-bw-migration/dist-folder.png" alt="dist-folder.png"  style="width: 45%;">
</a>

#### Rebuild Transformations as ETL Camel Routes
Each transformation in the sample scenario is implemented as a reusable ETL [Camel route](/documentation/platform/artefacts/camel) located at [sales/etl/etl-route.camel](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/etl/etl-route.camel). The route perform a simplified [Extract → Transform → Load](https://en.wikipedia.org/wiki/Extract,_transform,_load) flow:
- The **extract step** reads all data from the source table (full load used for simplicity) - [sales/etl/data-extractor.ts](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/etl/data-extractor.ts)
- The **transform step** invokes the corresponding transpiled ABAP transformation logic (in JavaScript) [sales/etl/transform-entries.ts](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/etl/transform-entries.ts)
- The **load step** writes the transformed results into the defined target table [sales/etl/data-loader.ts](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/etl/data-loader.ts)

Each step uses helper functions implemented in [sales/etl/etl.ts](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/etl/etl.ts).
These functions leverage the [codbex Database API](/documentation/platform/sdk/db/) to access and manipulate data.

The route itself is parameterized — it accepts the source table, target table, and transformation ID as exchange properties, allowing it to be reused across different flows.

Here’s what the assembled route looks like:
<a href="/images/2025-07-21-kronos-bw-migration/etl-route.png" target="_blank">
<img src="/images/2025-07-21-kronos-bw-migration/etl-route.png" alt="etl-route.png">
</a>

💡 Want to implement your own route?
Check out our [Tips & Tricks for the Integration Modeler](/documentation/tooling/integrations/#tips-tricks).

#### Model BW Data Flows as BPM Processes
In SAP BW, data flows are often tightly orchestrated—from DataSources through DSOs to Cubes or MultiProviders—in a specific execution sequence. To replicate this orchestration in Kronos, these flows are reimplemented as BPM processes that preserve the original order of execution.

In the demo project, this flow is modeled in the BPM file [sales/bpmn/sls_mp.bpmn](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/bpmn/sls_mp.bpmn).
<a href="/images/2025-07-21-kronos-bw-migration/bpmn.png" target="_blank">
<img src="/images/2025-07-21-kronos-bw-migration/bpmn.png" alt="bpmn.png"  style="width: 70%;">
</a>

Each BPM task:
- Triggers the defined in the previous step ETL Camel route
- Passes different parameters for source/target table names and the transformation ID depending on the current step

The BPM tasks themselves are stored in the [sales/bpmn](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/bpmn) folder. Each task uses the codbex Integrations API to programmatically trigger the route execution.

This approach ensures a 1:1 match with the original BW process chains, while offering clean modularity in Kronos.
<a href="/images/2025-07-21-kronos-bw-migration/1-to-1.png" target="_blank">
<img src="/images/2025-07-21-kronos-bw-migration/1-to-1.png" alt="1-to-1.png">
</a>

Using BPM in Kronos comes with additional benefits:
- Visual monitoring of running process instances
- Status tracking, including step-level success/failure
- Easy error inspection
- Ability to retrigger failed processes

All of this is available in [the Processes perspective](/documentation/tooling/processes/), providing clear operational insight and control over data flows.

💡 Want to build your own BPM flow?
Check out our [BPM Modeler Tips & Tricks](/documentation/tooling/processes/modeler#tips-tricks) to get started.

#### Run the Data Flow via BPM Process
Once everything is published, the full data pipeline—modeled as a BPM process—can be executed through a dedicated UI form:
- A simple [user-facing form](/documentation/tooling/modeling/form) is modeled in the file: [sales/sls_mp-process.form](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/sls_mp-process.form)
  <a href="/images/2025-07-21-kronos-bw-migration/form-modeler.png" target="_blank">
  <img src="/images/2025-07-21-kronos-bw-migration/form-modeler.png" alt="form-modeler.png">
  </a>
- When you open the form and click the `Regenerate` button, the corresponding UI is generated in the [sales/gen](https://github.com/codbex/codbex-sample-kronos-bw-sales-migration/blob/c7d9e1720b4996da1dfb764636ba320bcb181e06/sales/gen) directory
- To access the form, open this URL in your browser: [http://localhost/services/web/sales/gen/sls_mp-process/forms/sls_mp-process/index.html](http://localhost/services/web/sales/gen/sls_mp-process/forms/sls_mp-process/index.html)
  <a href="/images/2025-07-21-kronos-bw-migration/process-form.png" target="_blank">
  <img src="/images/2025-07-21-kronos-bw-migration/process-form.png" alt="process-form.png">
  </a>
- Click the `Trigger execution` button in the form UI to start the process
  <a href="/images/2025-07-21-kronos-bw-migration/process-form-triggered-exec.png" target="_blank">
  <img src="/images/2025-07-21-kronos-bw-migration/process-form-triggered-exec.png" alt="process-form-triggered-exec.png">
  </a>
- You can monitor the progress and status of the execution in the [Processes perspective](/documentation/tooling/processes/) within Kronos
  <a href="/images/2025-07-21-kronos-bw-migration/processes-perspective.png" target="_blank">
  <img src="/images/2025-07-21-kronos-bw-migration/processes-perspective.png" alt="processes-perspective.png">
  </a>

✅ Once the process completes successfully:
- The cube tables `TD_RS_C` and `TD_IS_C` will contain the final output data
- You can explore the results using SQL in the [Database perspective](/documentation/tooling/databases/):
  ```sql
  SELECT * FROM TD_IS_C LIMIT 50;
  SELECT * FROM TD_RS_C LIMIT 50; 
  ```
  <a href="/images/2025-07-21-kronos-bw-migration/explore-cubes.png" target="_blank">
  <img src="/images/2025-07-21-kronos-bw-migration/explore-cubes.png" alt="explore-cubes.png">
  </a>

This form-based interface offers a simple way to trigger the full BW data flow.
Alternatively, the same process can be triggered programmatically using the [codbex SDK](/documentation/platform/sdk/bpm/), enabling automation scenarios such as scheduled execution via cron jobs, integration from other BPM processes, external API calls, etc. This provides flexibility for both manual and automated orchestration, while still preserving full visibility and control over the execution lifecycle.

#### Data Visualization (Coming Soon)
Once all data structures are defined, transformations executed, and data flows orchestrated—your data is fully prepared for visualization.

While visualization is not covered in this post, it's an essential final step of any BI landscape. Whether you aim to replicate classic BEx Queries, build interactive dashboards, or plug into modern BI tools like Power BI, Tableau, or Apache Superset — the processed data is ready for it.

📌 Stay tuned — we’ll cover this topic in an upcoming blog post focused entirely on building visual dashboards and reports using Kronos. A reference will be added here once the blog is live.

## Wrapping Up — From BW to Kronos, Made Simple
This guide walked through how Kronos can power a structured, modular, and executable migration of SAP BW data models — covering everything from ABAP transformation logic to ETL pipelines and BPM process orchestration.

By following a lift-and-shift approach, clients can migrate their existing BW logic and data structures onto modern platforms like Snowflake, SAP HANA, PostgreSQL, or even H2 for local testing — often in a remarkably short time frame. The approach emphasizes preserving business logic while gaining the flexibility and scalability of cloud-native tools.

With Kronos, organizations can:
- Start small and scale gradually
- Run projects locally or deploy directly to the cloud
- Preserve original BW logic with minimal rework
- Automate, monitor, and control the entire data pipeline visually

🚀 Want to try it yourself?<br>
Getting started with Kronos is easy—whether locally or in the cloud. For example, it’s available in the [Snowflake Marketplace](/marketing/2025/01/10/kronos-snowflake-marketplace) with a free trial, making installation and onboarding a matter of minutes.

💬 Questions or business inquiries?<br>
We'd love to hear from you. Reach out via our [contact page](/contact).
