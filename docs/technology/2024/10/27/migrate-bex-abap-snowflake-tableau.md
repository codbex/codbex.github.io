---
title:  Migrate BW Query (BEx) with ABAP to Snowflake with Tableau
description: It is common to create BEx Variables which are processed within a Customer Exit with the help of ABAP coding
date: 2024-10-27
author: pavel
editLink: false
---

#  Migrate BW Query (BEx) with ABAP to Snowflake with Tableau

It is common to create BEx Variables which are processed within a Customer Exit with the help of ABAP coding.

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/global-settings.png" alt="global-settings.png">

Coding can be implemented within BADI or User-Exit but to avoid locking and versioning issues (a well known ABAP problem where 2 people cannot work on the same piece of coding and transport locking) many customers are implementing a wrapper class, which dynamically calls the respective class for each variable.

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/wrapper-class.png" alt="wrapper-class.png">

Some Info how normally these is done:

*  Execute variable exit class
*  For each customer exit variable, a dedicated class needs to be created based on Specific logic, normally these classes are inheriting the name of the Variable.

Knowing this story, in this demo,  we want to achieve the following:

* Translate BW Query Graphical View into SQL

We are going to use the Flight demo data provided by IDES. The query we will use is: `CP_Z1SFLIGHT_26`

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/BEx-SQL-ABAP.png" alt="BEx-SQL-ABAP.png">

We will look at and use the customer exit Variable:  `C_V_CONNID01`

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/exit-variable.png" alt="exit-variable.png">

Our Input Variable  is for the flight date – `I_V_FLDATE`

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/input-variable.png" alt="input-variable.png">

- This is an example of how to Process BW Customer Exit Variables within Snowflake

Class ZCL_BADI_VAR_PROCCESING – Main Class for Customer exit Processing

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/main-class.png" alt="main-class.png">

Class ZCL_VAR_PROCESSING – Abstract Class which is used for the Processing of the Specific variables

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/abstract-class.png" alt="abstract-class.png">

Class ZCL_VAR_C_V_CONNID01 – Inheriting from ZCL_VAR_PROCESSING

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/inherit-class.png" alt="inherit-class.png">

Logic implemented within the Class is to get the connection IDs for a specific date, where User Input is the date.

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/logic.png" alt="logic.png">

* Create Simple Report within Tableau with Input Variable (Input will be processed within the Customer Exit Variable)

# Process information

The description above shows the general idea and the story behind the process.

## SAP BW Implementation

The first BW and ABAP code can be seen using Eclipse IDE.

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/process.png" alt="process.png">

The `CP_Z1SFLIGHT_26` query used allows the user to provide a date for the filter and the result is based on the filter provided. The date used for the example is 26.08.2020

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/query.png" alt="query.png">

As previously described the ABAP code behind the `CP_Z1SFLIGHT_26` query can be reviewed in the Eclipse environment.

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/result.png" alt="result.png">

## Moving the data to Snowflake

Flights data can be transferred to Snowflake by using any of the compatible for both SAP and Snowflake ETL tools such as Informatica, Talend or [Iapetus](https://www.codbex.com/products/iapetus/) by codbex.

## BEX Booster tool

The purpose of the BEX booster tool is to transfer the SAP BW query to SQL.

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/bex-booster.png" alt="bex-booster.png">

The version of the tool used in the demo is built in Streamlit as a Snowflake native app. The screenshot below shows the generated query:

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/gen-query.png" alt="gen-query.png">

There are cases that could not be covered by the queries generated. The discussed approach is used to address these issues.

# Process architecture

The codbex [Kronos](https://www.codbex.com/products/kronos/) tool  is used for the execution of the ABAP code. The tool is converting the ABAP code to JavaScript by [Open-ABAP](https://open-abap.org/). The ABAP code is queried using Snowflake UDF and a result is returned. The UDF is incorporated in the query defined by the BEX Booster tool.

## Setting up Snowflake container environment for codbex

The Kronos tool is installed on Snowpark container services. It follows the description in [Implement Snowflake UDF for leave request days calculatio](https://www.codbex.com/technology/2024/09/18/snowflake-udf-leave-days/)

The current installation is done using the following steps:

* Setting up the required roles, warehouses and rights in the Snowflake environment

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/set-env.png" alt="set-env.png">

* Setting up the required infrastructure 

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/set-infra.png" alt="set-infra.png">

* Running the Kronos container

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/run-kronos.png" alt="run-kronos.png">

## ABAP Code in Kronos

The Kronos IDE is used for the ABAP code implementation and interface between Kronos and Snowflake.

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/kronos-ide.png" alt="kronos-ide.png">

::: tip
The ABAP code was implemented as-is, requiring only minor or no adjustments.
:::

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/kronos-abap.png" alt="kronos-abap.png">

It follows the same code pattern and architecture as in the SAP BW (described in the first section above).

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/kronos-bw.png" alt="kronos-bw.png">

The ABAP process accepts 4 parameters from Snowflake and is returning a string value. In general the approach allows the process to accept a different number of parameters.

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/kronos-params.png" alt="kronos-params.png">

## Setting up SNOWFLAKE UDF

The Kronos image is deployed on Snowpark Container services, and it follows the Snowflake best practices. This simplifies the definition of the snowflake UDF.

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/udf.png" alt="udf.png">

The adapted query using the defined UDF can be seen in the screenshot below. The results match the result from the first ABAP query.

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/udf-result.png" alt="udf-result.png">

## Tableau Frontend Implementation

Tableau is a front-end reporting tool which is used for the execution of the query defined in the points defined in the points defined above.

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/tableau.png" alt="tableau.png">

The same filters are used for evaluating the query:

<img src="/images/2024-10-27-migrate-bex-abap-snowflake-tableau/tableau-result.png" alt="tableau-result.png">

# Conclusion

The documented approach outlines a systematic process for integrating existing ABAP code with Snowflake environments. When implemented alongside the BEX Migration Booster this solution provides a comprehensive framework for organizations transitioning from SAP BW queries to Snowflake. This integrated approach offers several advantages:

* Streamlines the migration of complex SAP BW queries.
* Preserves existing business logic in ABAP code.
* Reduces transformation time and technical debt.
* Ensures consistency between source and target systems.
* Minimizes the need for extensive code rewrites.
