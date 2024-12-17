---
title: Kronos - Run easily ABAP code for free in 5 minutes
description: We decided to invest in a new functionality which will help our customers to run ABAP code easily and for free
date: 2024-06-25
author: iliyan
editLink: false
---

# Kronos - Run easily ABAP code for free in 5 minutes

We decided to invest in a new functionality which will help our customers to run ABAP code easily and for free.<br>

Let's see what ChatGPT thinks about this topic.<br>
<img src="/images/2024-06-25-run-abap-for-free/chatgpt-run-abap-for-free.png"><br>
<img src="/images/2024-06-25-run-abap-for-free/chatgpt-easily-run-abap.png"><br>
It looks like it is not aware of the latest features which were recently added to the [Kronos](https://www.codbex.com/products/kronos/) by __codbex__.<br>
Kronos gives you the possibility to run easily ABAP code in a few minutes. 
You can use any database which is supported, like H2, PostgreSQL, MySQL, Snowflake, HANA etc.<br>
Let's see how easy it is.

## Running a simple ABAP code using Kronos
Let's say we have the following ABAP class `zcl_employee_dao.clas.abap` and we want to run it.
```
CLASS zcl_employee_dao DEFINITION PUBLIC.
  PUBLIC SECTION.
    TYPES:
      BEGIN OF ty_employee,
        id         TYPE n LENGTH 10,
        first_name TYPE string,
        last_name  TYPE string,
      END OF ty_employee,
      ty_employees TYPE STANDARD TABLE OF ty_employee WITH DEFAULT KEY.

    CLASS-METHODS:
      delete_all_employees,
      select_all
        RETURNING VALUE(rv_result) TYPE string,
      insert_employee,
      update_employee_last_name.

ENDCLASS.

CLASS zcl_employee_dao IMPLEMENTATION.

  METHOD delete_all_employees.
    DATA: lv_rc TYPE i.

    DELETE FROM employees WHERE id > 0.

    lv_rc = sy-dbcnt.

    IF lv_rc > 0.
      WRITE: / 'All employees deleted successfully.'.
    ELSE.
      WRITE: / 'No employees found to delete.'.
    ENDIF.
  ENDMETHOD.

  METHOD select_all.
    DATA: lt_employees TYPE ty_employees,
          lv_json      TYPE string.

    SELECT id first_name last_name
      FROM employees
      INTO TABLE lt_employees.

    WRITE: / 'Employees selected.'.
  ENDMETHOD.

  METHOD insert_employee.
    DATA: wa_employee TYPE ty_employee.

    wa_employee-id = 1.
    wa_employee-first_name = 'Jane'.
    wa_employee-last_name = 'Doe'.

    INSERT INTO employees VALUES wa_employee.

    IF sy-subrc = 0.
      WRITE: / 'Employee inserted successfully.'.
    ELSE.
      WRITE: / 'Failed to insert employee.'.
    ENDIF.
  ENDMETHOD.

  METHOD update_employee_last_name.
    DATA: lv_rc TYPE i.

    UPDATE employees
      SET last_name = 'Smith'
      WHERE id = 1.

    lv_rc = sy-dbcnt.

    IF lv_rc > 0.
      WRITE: / 'Employee last name updated successfully.'.
    ELSE.
      WRITE: / 'Failed to update employee last name.'.
    ENDIF.
  ENDMETHOD.

ENDCLASS.
```
It is a simple DAO for employees management, which uses ABAP inline SQL with hardcoded data for simplicity.<br>
<br>
To run this ABAP code, follow the steps bellow or watch the recorded video.<br>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/dGk6he89yoA" frameborder="0" allowfullscreen></iframe>

1. Start a Kronos instance using Docker<br>
   Open your terminal and execute the following:
    ```
    docker run --name codbex-kronos  --rm -p 80:80 \
        -v ./dirigible:/target/dirigible \
        ghcr.io/codbex/codbex-kronos:1.1.1
   # use version 1.1.1 or later
    ```
1. Open Kronos and create a simple ABAP Starter project
   - Open Kronos at [http://localhost](http://localhost)
   - Login using the default user - username: `admin`, password: `admin`
   - At the `Welcome` view search for `ABAP` and select `ABAP Starter` template<br>
      <img src="/images/2024-06-25-run-abap-for-free/steps-select-template.png">
   - Type project and file name - for example `my-first-abap-project` and click on `Ok` button<br>
     <img src="/images/2024-06-25-run-abap-for-free/steps-template-data.png">
   - An ABAP starter project will be automatically generated<br>
     <img src="/images/2024-06-25-run-abap-for-free/steps-generated-abap-project.png">
   - Let's see the most important files in the generated project
       - `src/abap` folder is the place where your ABAP code must be placed.
       - `src/abap/zcl_abap_app.clas.abap` is a class which has method `run` which is the entry point of your application.<br>
         Similar to the main method in Java.<br>
         By default, there is a call to the Kronos ABAP API which prints the string `Hello world!` to the http response.<br>
         Here you can place the calls to your ABAP methods.
     - `src/run.mjs` is the JavaScript entry point which initializes the ABAP and calls the transpiled ABAP class `zcl_abap_app.clas.abap`.<br>
       Yes, that's right, the ABAP code is transpiled which makes it easy to use it from JavaScript or TypeScript.
     - `abap_transpile.json` and `abaplint.json` are configuration files which are used for the transpilation and automated code checking (linting) of the ABAP code.
   - Next, you have to publish the project by clicking the `Publish all` button. It is required when you make code changes to take effect.<br>
     <img src="/images/2024-06-25-run-abap-for-free/steps-publish-all-button.png" style="width: 15rem;">
   - Now, let's check whether the generated project works.
     - Refresh the workspace using the `Refresh` button<br>
       <img src="/images/2024-06-25-run-abap-for-free/steps-refresh-workspace-button.png" style="width: 15rem;">
     - Navigate to `dist/run.mjs` file and double-click on it
     - You should see `Hello world!` in the `Preview` tab.<br>
       <img src="/images/2024-06-25-run-abap-for-free/steps-hello-world.png"><br>
       If it is easier for you, you can open [http://localhost/services/js/my-first-abap-project/dist/run.mjs](http://localhost/services/js/my-first-abap-project/dist/run.mjs) in your browser.<br>
       The result will be the same.
1. Add DAO ABAP class `zcl_employee_dao.clas.abap`
   - Right-click on `src/abap` and select `New` -> `File`
   - Type `zcl_employee_dao.clas.abap`
   - Open the file by double-clicking on it and paste the file content
   - Save the file (`cmd + S` or `ctrl + S`)
1. Create `employees` table<br>
   To work this class, we are going to need a table for the employees.<br>
   We will use some codbex functionalities to simplify the things.<br>
   Once the project is published, the table will be automatically created in the configured Database (which by default is H2).<br>
   Create a file called `employee.table` in folder `src/db` with the following content:
   ```
   {
       "name": "employees",
       "type": "TABLE",
       "columns": [
           {
               "name": "id",
               "type": "INTEGER",
               "length": "0",
               "nullable": "false",
               "primaryKey": "true",
               "defaultValue": ""
           },
           {
               "name": "first_name",
               "type": "VARCHAR",
               "length": "50",
               "nullable": "false",
               "primaryKey": "false"
           },
           {
               "name": "last_name",
               "type": "VARCHAR",
               "length": "50",
               "nullable": "false",
               "primaryKey": "false"
           }
       ]
   }
   ```

1. Due to an issue in the ABAP transpiler (which will be fixed soon), we have to register the table in the ABAP context manually.<br>
   To do that, edit the `src/run.mjs` with the following
   ```
   import { DatabaseInitializer } from "sdk/abap/database";
   import { initializeABAP } from '../dist/abap/init.mjs';
   
   import { zcl_abap_app } from '../dist/abap/zcl_abap_app.clas.mjs';
   
   async function initialize() {
      DatabaseInitializer.initDefaultDataSource();
      await initializeABAP();
      
      // manually register the table
      abap.DDIC.EMPLOYEES = {
         "objectType": "TABL",
         "type": {
            "value": {
               "offset": {
                  "value": 0,
                  "qualifiedName": "I"
               },
               "length": {
                  "value": 0,
                  "qualifiedName": "I"
               }
            },
            "qualifiedName": "employees",
            "ddicName": "employees",
            "suffix": {},
            "asInclude": {}
         },
         "keyFields": ["id"]
      };
   }

   await initialize();

   await zcl_abap_app.run();
     ```
1. Next step is to use the DAO in the `run` method<br>
   Open `src/abap/zcl_abap_app.clas.abap` and replace the content with the following:
   ```
   CLASS zcl_abap_app DEFINITION PUBLIC FINAL CREATE PUBLIC.

     PUBLIC SECTION.
       CLASS-METHODS:
       run.

   ENDCLASS.

   CLASS zcl_abap_app IMPLEMENTATION.

     " this is the main method called by run.mjs
     METHOD run.
       zcl_employee_dao=>delete_all_employees( ).
       zcl_employee_dao=>insert_employee( ).
       zcl_employee_dao=>select_all( ).
       zcl_employee_dao=>update_employee_last_name( ).
     ENDMETHOD.

   ENDCLASS.
   ```
1. Now, we have to publish the project to create the defined table and transpile the ABAP code
1. Check the execution result
   - Once published, open [http://localhost/services/js/my-first-abap-project/dist/run.mjs](http://localhost/services/js/my-first-abap-project/dist/run.mjs).<br>
     You should receive status code `200` and console output like the following:<br>
     <img src="/images/2024-06-25-run-abap-for-free/steps-dao-console-output.png">
   - You can check the table content as well.
     - Go to `Database` perspective<br>
       <img src="/images/2024-06-25-run-abap-for-free/steps-db-perspective-button.png" style="width: 15rem;">
     - Expand `PUBLIC` schema for `DefaultDB`, right-click on `employees` table and click on `Show Contents`
     - You should see that the hardcoded employee was inserted and the last name was updated<br>
       <img src="/images/2024-06-25-run-abap-for-free/steps-table-content.png">
1. We can refactor the DAO a bit in order to use the Kronos ABAP API for printing lines to the http response instead of the console.
- Replace the content of `src/abap/zcl_employee_dao.clas.abap` with the following

```
CLASS zcl_employee_dao DEFINITION PUBLIC.

  PUBLIC SECTION.
    TYPES:
    BEGIN OF ty_employee,
        id         TYPE n LENGTH 10,
        first_name TYPE string,
        last_name  TYPE string,
    END OF ty_employee,
    ty_employees TYPE STANDARD TABLE OF ty_employee WITH DEFAULT KEY.

    CLASS-METHODS:
    delete_all_employees,
    select_all
        RETURNING VALUE(rv_result) TYPE string,
    insert_employee,
    update_employee_last_name.

ENDCLASS.

CLASS zcl_employee_dao IMPLEMENTATION.

  METHOD delete_all_employees.
    DATA: lv_rc TYPE i.

    DELETE FROM employees WHERE id > 0.

    lv_rc = sy-dbcnt.

    IF lv_rc > 0.
      zcl_codbex_http_response=>println(
        EXPORTING
        message_in = 'All employees deleted successfully.' ).
    ELSE.
      zcl_codbex_http_response=>println(
        EXPORTING
        message_in = 'No employees found to delete.' ).
    ENDIF.
  ENDMETHOD.

  METHOD select_all.
    DATA: lt_employees TYPE ty_employees,
        lv_json      TYPE string.

    SELECT id first_name last_name
    FROM employees
    INTO TABLE lt_employees.

    zcl_codbex_http_response=>println(
      EXPORTING
          message_in = 'Employees in DB:' ).
    zcl_codbex_http_response=>println(
      EXPORTING
          message_in = lt_employees ).
    WRITE: / 'Employees selected.'.
  ENDMETHOD.

  METHOD insert_employee.
    DATA: wa_employee TYPE ty_employee.

    wa_employee-id = 1.
    wa_employee-first_name = 'Jane'.
    wa_employee-last_name = 'Doe'.

    INSERT INTO employees VALUES wa_employee.

    IF sy-subrc = 0.
      zcl_codbex_http_response=>println(
        EXPORTING
        message_in = 'Employee inserted successfully.' ).
    ELSE.
      zcl_codbex_http_response=>println(
        EXPORTING
        message_in = 'Failed to insert employee.' ).
    ENDIF.
  ENDMETHOD.

  METHOD update_employee_last_name.
    DATA: lv_rc TYPE i.

    UPDATE employees
    SET last_name = 'Smith'
    WHERE id = 1.

    lv_rc = sy-dbcnt.

    IF lv_rc > 0.
      zcl_codbex_http_response=>println(
        EXPORTING
        message_in = 'Employee last name updated successfully.' ).
    ELSE.
      zcl_codbex_http_response=>println(
        EXPORTING
        message_in = 'Failed to update employee last name.' ).
    ENDIF.
  ENDMETHOD.

ENDCLASS.
```

- Publish the project and open [http://localhost/services/js/my-first-abap-project/dist/run.mjs](http://localhost/services/js/my-first-abap-project/dist/run.mjs).<br>
- Now, the logs of the execution will be returned in the http response<br>
     <img src="/images/2024-06-25-run-abap-for-free/steps-output-in-http-response.png">
   
This is how we ran our existing ABAP code using Kronos in a few quick steps.

## Summary
Let's summarize what you can do with Kronos
- you can easily run ABAP code in Kronos
- it costs you nothing since Kronos is open source project
- licenses are not required
- you can use any database which is supported, like H2, PostgreSQL, MySQL, Snowflake, HANA etc.<br>
- your ABAP code can run on any modern container platform
- the code can be executed locally as well
- if you have an ABAP application with thousands of lines of code but no ABAP developers, you can still use the existing ABAP code and call it from JavaScript or TypeScript.
- you can use the comprehensive [codbex SDK](https://www.codbex.com/documentation/platform/sdk) which uses different modern open source projects for messaging, jobs scheduling, REST, OData, mails etc.
- if you want to use the SDK directly in your ABAP code, there is a Kronos ABAP which will provide all the SDK functionalities 
- your application can benefit from the [codbex platform, tooling and modules](https://www.codbex.com/documentation/)
- you can integrate your ABAP code with the [Kronos](https://www.codbex.com/products/kronos/) SAP HANA XS compatibility functionalities
- to reduce the operational cost, you get multitenancy out of the box
- and much more

Note that this functionality is relatively new.
There may be some ABAP functionalities which will not work but the journey has just begun.<br>
We are willing to support you!

The project we implemented can be found in [this GitHub project](https://github.com/codbex/codbex-sample-abap-employees).

**Credits**<br>
Special thanks to the contributors who implemented [open-abap](https://github.com/open-abap) and [abaplint](https://github.com/abaplint).<br>
Without these projects, this [Kronos](https://www.codbex.com/products/kronos/) functionality wouldn't be possible.

I hope you enjoyed this blog. Stay tuned for more great functionality by __codbex__!<br>
If you have any questions, ideas or want to contribute, feel free [to contact us](https://www.codbex.com/contact/).
