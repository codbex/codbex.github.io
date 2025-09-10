---
title: 'Visualizing Kronos Data on Snowflake with Power BI: A Hands-On Guide'
description: 'This blog demonstrates how to build real-time BI dashboards in Microsoft Power BI by connecting directly to Snowflake, using data migrated with Kronos'
date: 2025-09-10
author: iliyan
editLink: false
---

# Visualizing Kronos Data on Snowflake with Power BI: A Hands-On Guide

## Introduction
In our earlier blog, [Migrating SAP BW to Kronos: A Hands-On Guide](/technology/2025/08/kronos-bw-migration/), we demonstrated how SAP BW logic and data flows can be migrated using [Kronos](/products/kronos), codbex's modern data integration platform. That post showcased the migration of a sample Bike Sales scenario using Kronos, highlighting how BW objects, ABAP transformations, and process chains can be re-implemented in a modular way.

While the example was implemented on H2 for local testing, Kronos is designed to run seamlessly on modern platforms like Snowflake, SAP HANA, and PostgreSQL. For this follow-up, it is a **prerequisite** that you execute the migration scenario on **Kronos running on Snowflake**. This ensures the data we will visualize is already available in Snowflake.

With that foundation in place, building the **BI layer is remarkably straightforward**. Using [Microsoft Power BI](https://www.microsoft.com/en-us/power-platform/products/power-bi) with DirectQuery, you can connect directly to Snowflake and query the data in real time. This allows you to model semantic relationships, build dashboards, and deliver live insights without additional ETL or data duplication.

This blog shows how to:

- Connect Power BI directly to your Snowflake account
- Build a semantic model on top of the migrated Kronos data
- Define relationships between fact and dimension tables
- Create interactive reports powered by live Snowflake data

We'll also include a short demo video that brings the setup to life.

## Step-by-Step: Connecting Power BI to Snowflake and Modeling the Data
1. Open Power BI and on the Home ribbon, click `Get Data` -> `More…`
   <img src="/images/2025-09-10-bw-migration-bi/get-data-more.png" alt="get-data-more.png"  style="width: 30%;">
2. Find the Snowflake connector and click Connect
   <img src="/images/2025-09-10-bw-migration-bi/get-data-snowflake.png" alt="get-data-snowflake.png" style="width: 80%;">

3. A new window will appear asking for your Snowflake details:
    - Server: enter your Snowflake account URL
    - Warehouse: enter the name of the compute warehouse you will use to run queries

We take the account URL and the warehouse from Account Details section in Snowflake, enter them in the Power BI window and click OK.
<img src="/images/2025-09-10-bw-migration-bi/snow-cr-details.png" alt="snow-cr-details.png">

4. In the Navigator window, choose the destination of the tables in Snowflake - database and schema (BW_BI and PUBLIC in our case).
    Then select the necessary tables you will use to build the semantic model in your report and click `Load` (if any transformations are necessary before that, you should click on Transform Data button and implement them in the Power Query Editor)

    For this demonstration, we will build a simplified version of the final semantic model, requiring the following:
    - `TD_IS_C` (Internet Sales - fact table)
    - a left outer join between `/BIC/PMD_CUS` and `/BIC/TMD_CUS` (Customers – dimension table)
    <img src="/images/2025-09-10-bw-migration-bi/navigator.png" alt="navigator.png">
    
    After selecting these tables, we will click the `Transform Data` button to implement the joining process.

    We choose `DirectQuery` in the `Connection settings` window, so that the data will not be physically stored in Power BI, instead live queries will be sent to Snowflake every time a user interacts with the report. This is the best option for very large datasets or when you need real-time data.
   <img src="/images/2025-09-10-bw-migration-bi/connection-settings.png" alt="connection-settings.png" style="width: 80%;">

    We are redirected to Power Query Editor, where the join between `/BIC/PMD_CUS` and `/BIC/TMD_CUS` can be implemented, following the steps in the images below:
   <img src="/images/2025-09-10-bw-migration-bi/power-query-editor-01.png" alt="power-query-editor-01.png">
   <img src="/images/2025-09-10-bw-migration-bi/power-query-editor-02.png" alt="power-query-editor-02.png">

    After that, we expand and select the `TXTLG` column in our new renamed table `Customers` and we are done
   <img src="/images/2025-09-10-bw-migration-bi/txtlg.png" alt="txtlg.png">

    Before proceeding to build the semantic model, we need to deselect the `Enable Load` option for the tables `/BIC/PMD_CUS` and `/BIC/TMD_CUS`, because we will not use them anymore:
   <img src="/images/2025-09-10-bw-migration-bi/deselect-enable-load.png" alt="deselect-enable-load.png" style="width: 40%;">
   Apply the changes:
   <img src="/images/2025-09-10-bw-migration-bi/apply-changes.png" alt="apply-changes.png" style="width: 50%;">

5. In the model view we can now see the two tables on which we will build our semantic model
   <img src="/images/2025-09-10-bw-migration-bi/model-view.png" alt="model-view.png">

   The last step is to make a one-to-many relationship between `Customers` and `TD_IS_C` (Internet Sales)
   <img src="/images/2025-09-10-bw-migration-bi/new-relationship.png" alt="new-relationship.png">

   And finally our demo semantic model is done, the data in both tables is in DirectQuery mode, which means it is live and it is not physically stored anywhere in Power BI – it read directly from Snowflake.

   **Demo Semantic Model**
   <img src="/images/2025-09-10-bw-migration-bi/demo-semantic-model.png" alt="demo-semantic-model.png">

   **Demo Report with Visualizations in Power BI**
   <img src="/images/2025-09-10-bw-migration-bi/demo-report-with-visualization.png" alt="demo-report-with-visualization.png">

   By following this process we can select more tables from Snowflake, implement transformations (if necessary), build more complex semantic model (for example star schema) and create a report with visualizations and slicers, querying the data from Snowflake in real time. 
   
   Here is an example of a star schema Semantic Model, combining the Internet Sales and Reseller Sales into one fact table and creating relationships with multiple dimension tables such as Products, Resellers, Sales Territory, Currency, Customers, Employees and Date.

   **Semantic model – star schema**
   <img src="/images/2025-09-10-bw-migration-bi/semantic-model-star-schema.png" alt="semantic-model-star-schema.png">
   **Detailed Sales Transaction Report**
   <img src="/images/2025-09-10-bw-migration-bi/detailed-sales-transaction-report.png" alt="detailed-sales-transaction-report.png">


🎥 Watch the video below to see the Customer Analysis Report in Power BI in action, highlighting how users can interact with the data in real time.

**TO BE ADDED**

[//]: # (<iframe width="100%" height="450" src="https://www.youtube.com/embed/TgcbTj4hGOA" frameborder="0" allowfullscreen></iframe>)

## Summary

By combining [Kronos](/products/kronos) on [Snowflake](https://www.snowflake.com/) with [Microsoft Power BI](https://www.microsoft.com/en-us/power-platform/products/power-bi), you get a powerful yet simple BI stack:

- Direct connectivity to Snowflake ensures live, real-time insights.
- Semantic modeling in Power BI allows for flexible and scalable analytics.
- Reports can be extended into complex star schemas to cover multiple business areas.

With just a few steps, you can transform migrated SAP BW data into interactive dashboards and actionable insights — without the need for heavy ETL pipelines.

👉 If you have any questions, suggestions, or feedback, don’t hesitate to [contact us](/contact) — we’d love to hear from you.
