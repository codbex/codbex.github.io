---
title: Implement Snowflake UDF for leave request days calculation
description: Discover how to implement a UDF (User-defined function) in Snowflake with Kronos by codbex, calculating leave request days and factoring in holidays from OpenHolidays API
date: 2024-09-18
author: iliyan
editLink: false
---

# Implement Snowflake UDF for leave request days calculation

Discover how to implement a [UDF (User-defined function)](https://docs.snowflake.com/en/developer-guide/udf/udf-overview) in Snowflake with [Kronos](https://www.codbex.com/products/kronos/) by __codbex__, calculating leave request days and factoring in holidays from [OpenHolidays API](https://www.openholidaysapi.org/en/).

## Prerequisites
To implement the UDF logic you will need to deploy a Kronos instance on Snowflake.<br>
[Here](/technology/2024/09/11/deploy-codbex-products-on-snowflake) you can find a blog which will help you with this task.

## Implementation steps

Follow the steps below or watch the recorded video.<br>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/m8_8QSiJrns" frameborder="0" allowfullscreen></iframe>

1. Create a Snowflake UDF project
- open Kronos and login
- at the `Welcome` view search for `Snowflake` and select `Snowflake Function API` template. If the view is missing - `Window` -> `Show View` -> `Welcome`<br>
  <a href="/images/2024-09-18-snowflake-udf-leave-days/snow-template.png" target="_blank">
  <img src="/images/2024-09-18-snowflake-udf-leave-days/snow-template.png" alt="snow-template.png">
  </a>
- type project and file name (service name) - for example `leave-request-days` and `leave-request-days-service`
  <a href="/images/2024-09-18-snowflake-udf-leave-days/snow-template-data.png" target="_blank">
  <img src="/images/2024-09-18-snowflake-udf-leave-days/snow-template-data.png" alt="snow-template-data.png">
  </a>
- click on `Ok` button<br>
- a simple Snowflake Function project will be automatically generated for you<br>
  <a href="/images/2024-09-18-snowflake-udf-leave-days/generated-project.png" target="_blank">
  <img src="/images/2024-09-18-snowflake-udf-leave-days/generated-project.png" alt="generated-project.png">
  </a>
1. Let's see what was generated
   - `api/leave-request-days-service.ts` is a simple REST service which complies with the Snowflake UDF specification. This service will be called when the UDF is used.
   - `api/function-data-dto.ts` describes the REST service parameter and result types
   - `security/api-constraints.access` allows calling the generated service without authentication from Kronos side
1. Define a table in our application which will hold the leave requests
   - create folder named `db`
   - create file `leave-requests.table` in folder `db`
   - right-click on the file and select `Open With` -> `Code Editor`
   - paste [this](https://github.com/codbex/codbex-sample-snowflake-udf-leave-request-days/blob/1a3def927276ff32ab015f0755757723716ca506/leave-request-days/db/leave-requests.table) content
   - save the file
1. Add sample data to the `LEAVE_REQUESTS` table
   - Define data
     - create file `LEAVE_REQUESTS.csv` in folder `db`
     - right-click on the file and select `Open With` -> `Code Editor`
     - paste [this](https://github.com/codbex/codbex-sample-snowflake-udf-leave-request-days/blob/1a3def927276ff32ab015f0755757723716ca506/leave-request-days/db/LEAVE_REQUESTS.csv) content
     - save the file
   - Configure the CSV import
     - create file `sample-data.csvim` in folder `db`
     - right-click on the file and select `Open With` -> `Code Editor`
     - paste [this](https://github.com/codbex/codbex-sample-snowflake-udf-leave-request-days/blob/1a3def927276ff32ab015f0755757723716ca506/leave-request-days/db/sample-data.csvim) content
     - save the file
   - Publish the project by clicking on `Publish All` button
     <a href="/images/2024-09-18-snowflake-udf-leave-days/publish-all-btn.png" target="_blank">
     <img src="/images/2024-09-18-snowflake-udf-leave-days/publish-all-btn.png" alt="publish-all-btn.png">
     </a>
   - After a few seconds, open the `Database` perspective and check whether the table and its data have been created in the `SNOWFLAKE` data source<br>
     <a href="/images/2024-09-18-snowflake-udf-leave-days/database-perspective.png" target="_blank">
     <img src="/images/2024-09-18-snowflake-udf-leave-days/database-perspective.png" alt="database-perspective.png" style="width: 15rem;">
     </a>
     ```sql
     SELECT * FROM LEAVE_REQUESTS;
     ```
     <a href="/images/2024-09-18-snowflake-udf-leave-days/leave-requests-table-data.png" target="_blank">
     <img src="/images/2024-09-18-snowflake-udf-leave-days/leave-requests-table-data.png" alt="leave-requests-table-data.png">
     </a>
     <br>You may need to click on the `Refresh` button to see the newly created table.
1. Implement the logic for leave request days calculation. In folder `api`:
   - create data util file `date-util.ts` with [this](https://github.com/codbex/codbex-sample-snowflake-udf-leave-request-days/blob/1a3def927276ff32ab015f0755757723716ca506/leave-request-days/api/date-util.ts) content
   - add [OpenHolidays API](https://www.openholidaysapi.org/en/) client in file `open-holidays-api-client.ts` which returns all holidays for a given period. [Here](https://github.com/codbex/codbex-sample-snowflake-udf-leave-request-days/blob/1a3def927276ff32ab015f0755757723716ca506/leave-request-days/api/open-holidays-api-client.ts) is the content of the file.
   - let’s use the API client in the UDF logic located in the `leave-request-days-service.ts` file by replacing its content with [this](https://github.com/codbex/codbex-sample-snowflake-udf-leave-request-days/blob/1a3def927276ff32ab015f0755757723716ca506/leave-request-days/api/leave-request-days-service.ts)
   - save all files and publish the changes
1. Define Snowflake UDF
   - go to `Database` perspective (alternatively, you can use a [Snowflake worksheet](https://docs.snowflake.com/en/user-guide/ui-snowsight-worksheets-gs))
   - select `SNOWFLAKE` data source
   - create function `calculate_leave_request_days` using the following sql
     ```
     USE ROLE CONTAINER_USER_ROLE;
     USE DATABASE CONTAINER_HOL_DB;

     CREATE OR REPLACE FUNCTION calculate_leave_request_days (countryIsoCode string, fromDate date, toDate date)
       RETURNS integer
       SERVICE=codbex_kronos
       ENDPOINT='app-endpoint'
       AS '/public/ts/leave-request-days/api/leave-request-days-service.ts';
     ```
     It is important that `SERVICE` and `ENDPOINT` match the configurations of your Kronos instance.
     Also, make sure that the REST path in `AS` matches your implementation.<br>
     `CREATE FUNCTION` reference [here](https://docs.snowflake.com/en/sql-reference/sql/create-function).

## Test implemented Snowflake UDF

We have the following sample data in table `LEAVE_REQUESTS`.
<a href="/images/2024-09-18-snowflake-udf-leave-days/leave-requests-before.png" target="_blank">
<img src="/images/2024-09-18-snowflake-udf-leave-days/leave-requests-before.png" alt="leave-requests-before.png">
</a>

Let's use the created function to calculate the number of leave request days for our entries.
Execute the following sql to calculate column `REQUESTED_DAYS`
```sql
UPDATE LEAVE_REQUESTS
SET REQUESTED_DAYS = calculate_leave_request_days(COUNTRY_ISO_CODE, FROM_DATE, TO_DATE);
```
Now, let's see whether the days were calculated correctly.
```sql
SELECT * FROM LEAVE_REQUESTS;
```
<a href="/images/2024-09-18-snowflake-udf-leave-days/leave-requests-after.png" target="_blank">
<img src="/images/2024-09-18-snowflake-udf-leave-days/leave-requests-after.png" alt="leave-requests-after.png">
</a>
According to the German public holidays calendar for December 2024, it seems that the implemented UDF is working.<br>
<a href="/images/2024-09-18-snowflake-udf-leave-days/german-public-holidays-dec-24.png" target="_blank">
   <img src="/images/2024-09-18-snowflake-udf-leave-days/german-public-holidays-dec-24.png" alt="german-public-holidays-dec-24.png" style="width: 15rem;">
</a>
<br>
Congratulations, you have implemented Snowflake UDF using Kronos!

---
## Summary
Using [Kronos](https://www.codbex.com/products/kronos/) you can
- easily implement simple and complex [Snowflake UDFs](https://docs.snowflake.com/en/developer-guide/udf/udf-overview)
- use languages like TypeScript, JavaScript or ABAP in your implementation 
- use the comprehensive [codbex SDK](https://www.codbex.com/documentation/platform/sdk) which uses different modern open source projects for messaging, jobs scheduling, REST, OData, mails etc.
- benefit from the [codbex platform, tooling and modules](https://www.codbex.com/documentation/)

The project we implemented can be found in [this GitHub repository](https://github.com/codbex/codbex-sample-snowflake-udf-leave-request-days).

---
I hope you enjoyed this blog. Stay tuned for more great functionality by __codbex__!<br>
If you have any questions, ideas or want to contribute, feel free [to contact us](https://www.codbex.com/contact/).
