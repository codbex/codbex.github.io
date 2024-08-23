---
date: 2024-08-19
title: Iapetus - Implement orders ETL
categories:
  - technology
author: iliyan
---

[Iapetus](https://www.codbex.com/products/iapetus/), powered by [Apache Camel](https://camel.apache.org/),  simplifies the implementation of various [ETL](https://en.wikipedia.org/wiki/Extract,_transform,_load) (Extract, Transform, Load) scenarios.


In this tutorial, I'm going to show you how you can implement orders ETL from an instance of the free open source e-commerce [OpenCart](https://www.opencart.com/) to your database.

## Orders ETL scenario
Let's have the following use cases:
- we have an online store (instance of OpenCart) which sells goods
- we want to regularly replicate all orders from the store to our database for analytic purposes
- OpenCart order amounts are stored in USD
- we want to convert the total amounts from USD to EUR
- only order details like total amount and date added are needed

---
## Implementation steps
Follow the steps below to implement the scenario.<br>

1. Start an OpenCart instance using [Docker](https://www.docker.com/)<br>
   - create `docker-compose.yml` file with [MariaDB](https://mariadb.org/) and OpenCart images in a directory with [this](https://github.com/codbex/codbex-sample-camel-opencart-etl/blob/68ae27e337afee064da4f1132685dd2d2b10fbdc/opencart/docker-compose.yml) content.
   - start images
    
   ```shell
   # adjust the path to the docker-compose.yml file path
   export DOCKER_COMPOSE_PATH='./docker-compose.yml' 
   export OPENCART_USERNAME='myuser'
   export OPENCART_PASSWORD='myuser'
   export OPENCART_DATABASE_PORT_NUMBER='3306'
   export OPENCART_DATABASE_USER='bn_opencart'
   export OPENCART_DATABASE_PASSWORD='bitnami'
   export OPENCART_DATABASE_NAME='bitnami_opencart'
   docker-compose -f "$DOCKER_COMPOSE_PATH" up -d 
   ```
   
   - open created OpenCart instance at [http://localhost:80/](http://localhost:80/)
   <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/oc-homepage.png" target="_blank">
     <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/oc-homepage.png" alt="oc-homepage.png">
   </a>
   - register a new store user from [http://localhost:80/index.php?route=account/register](http://localhost:80/index.php?route=account/register)
   - create a few orders with different products and amounts
   - you can check all store orders in the OpenCart [admin UI](http://localhost:80/admin/index.php?route=sale/order).<br>
     Use user `myuser` and password `myuser` to login.
     <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/oc-orders.png" target="_blank">
       <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/oc-orders.png" alt="oc-orders.png">
     </a>
1. Start an [Iapetus](https://www.codbex.com/products/iapetus/) instance and connect it to the OpenCart's network<br>
   ```shell
   WORKSPACE_DIR='/tmp/iapetus'
   IMAGE_VERSION='1.0.1' # use version 1.0.1 or later
   
   docker run --name codbex-iapetus --rm -p 8080:80 \
     --network opencart_network \
     -v "$WORKSPACE_DIR:/target/dirigible" \
     ghcr.io/codbex/codbex-iapetus:$IMAGE_VERSION
   ```
1. Open Iapetus and create a project named `orders-etl`
- open Iapetus at [http://localhost:8080](http://localhost:8080)
- login using the default user - username: `admin`, password: `admin`
- right-click on workbench and click on `New Project`
  <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/new-project.png" target="_blank">
  <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/new-project.png" alt="new-project.png">
  </a>
- type `orders-etl` for project name
  <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/set-project-name.png" target="_blank">
  <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/set-project-name.png" alt="set-project-name.png">
  </a>
- click on `Create` button<br>
- a blank project will be created<br>
  <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/blank-project.png" target="_blank">
  <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/blank-project.png" alt="blank-project.png">
  </a>
1. Create datasource to the OpenCart database which will be used to extract data 
  - create folder `datasources`
  - create file `OpenCartDB.datasource` in the created folder
  - and add [this](https://github.com/codbex/codbex-sample-camel-opencart-etl/blob/68ae27e337afee064da4f1132685dd2d2b10fbdc/orders-etl/datasources/OpenCartDB.datasource) content 
1. Verify that the created data source works
  - navigate to the `Database` perspective by clicking on the `Database` button
    <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/db-perspective-button.png" target="_blank">
    <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/db-perspective-button.png" alt="db-perspective-button.png">
    </a>
  - select `OpenCartDB` data source
    <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/oc-ds-btn.png" target="_blank">
    <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/oc-ds-btn.png" alt="oc-ds-btn.png">
    </a>
  - expand schema `bitnami_opencart` 
  - expand `Tables` 
  - you should be able to see all OpenCart tables
  - here you can find the table `oc_order` which contains all orders
  - verify that you are able to query its content
    ```sql
    select order_id, total, date_added from oc_order;
    ```
    <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/oc_order_content.png" target="_blank">
      <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/oc_order_content.png" alt="oc_order_content.png">
    </a>
1. Define a table in our application which will hold the replicated orders
   - create file `orders.table` in folder `db`
   - right-click on the file and select `Open With` -> `Code Editor`
   - paste [this](https://github.com/codbex/codbex-sample-camel-opencart-etl/blob/f55ecd99b2ac37e6ada535a556da54248b9701ad/orders-etl/db/orders.table) content
   - save the file
   - publish the project by clicking on `Publish All` button
     <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/publish-all-button.png" target="_blank">
       <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/publish-all-button.png" alt="publish-all-button.png">
     </a>
   - after a few seconds, open the `Database` perspective and check whether the table is created in the `DefaultDB` data source<br>
     <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/orders-table.png" target="_blank">
       <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/orders-table.png" alt="orders-table.png" style="width: 15rem;">
     </a>
     <br>You may need to click on the `Refresh` button to see the newly created table.
1. Implement ETL using JDBC 
   1. create folder named `sync`
   1. create file named `sync-orders-jdbc.camel` in the created folder
   1. open the file 
   1. add cron to trigger the execution regularly
     - click on `Create route` button
      <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/create-route-btn.png" target="_blank">
        <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/create-route-btn.png" alt="create-route-btn.png">
      </a>
     - search for `cron` in the `Components` tab and select it
      <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/cron-component.png" target="_blank">
        <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/cron-component.png" alt="cron-component.png">
      </a>
     - set `Trigger Orders Replication` for description
     - under component properties set `TriggerOrdersReplication` for name and add schedule `0 * * ? * *` (every minute at 0 seconds)
      <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/cron-config.png" target="_blank">
        <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/cron-config.png" alt="cron-config.png">
      </a>
     - save the file with (cmd + s)
   1. select the route and update the description to `Sync orders from OpenCart`
      <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/route-config.png" target="_blank">
        <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/route-config.png" alt="route-config.png">
      </a>
   1. add step which logs that the synchronization has started
      - add `Log` step after the cron using the arrow button
         <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/add-step-after-cron.png" target="_blank">
           <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/add-step-after-cron.png" alt="add-step-after-cron.png">
         </a>
         <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/log-step.png" target="_blank">
           <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/log-step.png" alt="log-step.png">
         </a>
      - set `Log starting` for description
      - set `Replicating orders from OpenCart using JDBC...` for message
      - log level to `INFO`
      - set `OpenCartOrdersReplication` for `Log Name`
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/log-starting-config.png" target="_blank">
          <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/log-starting-config.png" alt="log-starting-config.png">
        </a>
      - save the file
   1. set property for the USD to EUR exchange rate
      - add `Set Property` step after the log step
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/set-property-step.png" target="_blank">
          <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/set-property-step.png" alt="set-property-step.png">
        </a>
      - set expression `0.92`
      - set `Set USD to EUR exchange rate property` for description
      - set `currencyExchangeRate` for name
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/exchange-property-config.png" target="_blank">
          <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/exchange-property-config.png" alt="exchange-property-config.png">
        </a>
      - save the file
   1. next, we have to select all orders from the OpenCart data source
      - build the select query
        - add step `Set Body`
          <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/set-body-step.png" target="_blank">
            <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/set-body-step.png" alt="set-body-step.png">
          </a>
        - set expression `SELECT * FROM oc_order`
        - set description `Create orders SELECT statement`
          <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/select-orders-body-step-config.png" target="_blank">
            <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/select-orders-body-step-config.png" alt="select-orders-body-step-config.png">
          </a>
        - save the file
      - execute the select query
        - add `Spring JDBC` step
          <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/spring-jdbc-step.png" target="_blank">
            <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/spring-jdbc-step.png" alt="spring-jdbc-step.png">
          </a>
        - set description `Get all orders`
        - set `OpenCartDB` for data source name
          <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/spring-jdbc-execute-config.png" target="_blank">
            <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/spring-jdbc-execute-config.png" alt="spring-jdbc-execute-config.png">
          </a>
        - save the file
   1. now, the camel body will contain all orders
   1. split the body into single orders
      - add `Split` step
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/split-step.png" target="_blank">
          <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/split-step.png" alt="split-step.png">
        </a>
      - set expression to `${body}`
      - set `Split to single order` for description
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/split-step-config.png" target="_blank">
          <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/split-step-config.png" alt="split-step-config.png">
        </a>
   1. build merge statement for each order<br>
        We are using the extracted data from the OpenCart database to create the statement. Total is converted from USD to EUR using the defined exchange rate property.
      - add `Set Body` step
      - set the following value for expression
        ```sql
        MERGE INTO ORDERS
          (ID, TOTAL, DATEADDED)
        KEY(ID)
        VALUES
        (
          ${body['order_id']},
          ${body['total']} * ${exchangeProperty.currencyExchangeRate},
          '${body['date_added']}'
        );
        ```
       
      - set `Create MERGE statement` for description
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/merge-statement-config.png" target="_blank">
          <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/merge-statement-config.png" alt="merge-statement-config.png">
        </a>
   
   1. execute the merge statement
      - add `Spring JDBC` step
      - set description `Merge order`
      - set `DefaultDB` for data source name
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/execute-merge-config.png" target="_blank">
          <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/execute-merge-config.png" alt="execute-merge-config.png">
        </a>
   1. add log step for completed
      - add log step after the split
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/step-after-split.png" target="_blank">
          <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/step-after-split.png" alt="step-after-split.png">
        </a>
      - set `Log completed` for description
      - set `Successfully replicated orders from OpenCart using JDBC` for message
      - set logging level to `INFO`
      - set `OpenCartOrdersReplication` for log name
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/log-completed-config.png" target="_blank">
          <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/log-completed-config.png" alt="log-completed-config.png">
        </a>
      - save the file
   1. now the JDBC implementation is done
   1. publish the project from the `Publish All` button
   1. verify that the synchronization works
      - check the console for output from the log steps which we added  
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/jdbc-sync-console-logs.png" target="_blank">
          <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/jdbc-sync-console-logs.png" alt="jdbc-sync-console-logs.png">
        </a>
      - go to `Database` perspective and check the content of table `ORDERS` in `DefaultDB` data source - it should contain the replicated orders with converted total in EUR
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/jdbc-orders-table.png" target="_blank">
          <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/jdbc-orders-table.png" alt="jdbc-orders-table.png">
        </a>
        __Note:__ if you had problems to model the `sync-orders-jdbc.camel`, you can get a working content of the file from [here](https://github.com/codbex/codbex-sample-camel-opencart-etl/blob/2b3980156f44fce22d7ee282c00edf54e64774a9/orders-etl/sync/sync-orders-jdbc.camel)
1. Implement ETL using TypeScript
   1. create file `sync-orders-typescript.camel` in directory `sync`
   1. open the created file
   1. add cron to trigger the execution regularly
      - click on `Create route` button
      - search for `Cron` component and select it
      - set `Trigger Orders Replication` for description
      - under component properties set `TriggerOrdersReplication` for name and add schedule `30 * * ? * *` (every minute at 30 seconds)
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/cron-ts-config.png" target="_blank">
        <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/cron-ts-config.png" alt="cron-ts-config.png">
        </a>
      - save the file
   1. select the route and update the description to `Sync orders from OpenCart`
      <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-route-config.png" target="_blank">
        <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-route-config.png" alt="ts-route-config.png">
      </a>
   1. add step which logs that the synchronization has started
      - add `Log` step after the cron
      - set `Log starting` for description
      - set `Replicating orders from OpenCart using TypeScript...` for message
      - log level to `INFO`
      - set `OpenCartOrdersReplication` for log name
         <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-log-starting-config.png" target="_blank">
            <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-log-starting-config.png" alt="ts-log-starting-config.png">
         </a>
      - save the file
   1. get all orders from OpenCart and current exchange rate from the [frankfurter API](https://www.frankfurter.app/) using TypeScript
      - create a folder named `dao`
      - create file `oc_orderRepository.ts` in the created folder
      - open the file
      - set [this](https://github.com/codbex/codbex-sample-camel-opencart-etl/blob/ecdf03edcef6006691266bc7559a2e093bbff5e9/orders-etl/dao/oc_orderRepository.ts) content<br>
      __Note:__ the code of this dao is automatically generated using another awesome codbex functionality, but I will give you more details about this in another blog post.
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-oc-dao-file.png" target="_blank">
        <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-oc-dao-file.png" alt="ts-oc-dao-file.png">
        </a>
      - create file `get-all-orders.ts` in `sync` folder using [this](https://github.com/codbex/codbex-sample-camel-opencart-etl/blob/2b3980156f44fce22d7ee282c00edf54e64774a9/orders-etl/sync/get-all-orders.ts) content
      - in `sync-orders-typescript.camel` add `Set Property` step
         - set expression `orders-etl/sync/get-all-orders.ts`
         - set description `Set get-all-orders.ts file`
         - set name `resource`
           <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-set-get-all-orders.png" target="_blank">
           <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-set-get-all-orders.png" alt="ts-set-get-all-orders.png">
           </a>
      - add step `Class`
        <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/class-step.png" target="_blank">
        <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/class-step.png" alt="class-step.png">
        </a>
         - set description `Get all OpenCart orders`
         - set bean name `org.eclipse.dirigible.components.engine.camel.invoke.Invoker`
           <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-get-all-stores-execution.png" target="_blank">
           <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-get-all-stores-execution.png" alt="ts-get-all-stores-execution.png">
           </a>
   1. now, the camel body will contain all orders
   1. split the body into single orders
       - add `Split` step
       - set expression to `${body}`
       - set `Split to single order` for description
         <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-split-step-config.png" target="_blank">
         <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-split-step-config.png" alt="ts-split-step-config.png">
         </a>
   1. merge order using TypeScript
      - create file `merger-order.ts` in folder `sync`
      - set [this](https://github.com/codbex/codbex-sample-camel-opencart-etl/blob/97b08184e0558474f6c8d331ec4668981256e33e/orders-etl/sync/merger-order.ts) file content
      - in `sync-orders-typescript.camel` add `Set Property` step
          - set expression `orders-etl/sync/merger-order.ts`
          - set description `Set merger-order.ts file`
          - set name `resource`
            <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-set-merge-ts-config.png" target="_blank">
            <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-set-merge-ts-config.png" alt="ts-set-merge-ts-config.png">
            </a>
      - add step `Class`
          - set description `Merge order`
          - set bean name `org.eclipse.dirigible.components.engine.camel.invoke.Invoker`
            <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-merge-order-execution.png" target="_blank">
            <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-merge-order-execution.png" alt="ts-merge-order-execution.png">
            </a>
   1. add log step for completed
       - add `Log` step after the split
       - set `Log completed` for description
       - set `Successfully replicated orders from OpenCart using TypeScript` for message
       - set logging level to `INFO`
       - set `OpenCartOrdersReplication` for log name
         <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-log-completed-config.png" target="_blank">
         <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-log-completed-config.png" alt="ts-log-completed-config.png">
         </a>
   1. now the TypeScript implementation is done
   1. publish the project from the `Publish All` button
   1. verify that the synchronization works
       - check the console for output from the log steps which we added  
         <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-sync-console-logs.png" target="_blank">
         <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-sync-console-logs.png" alt="ts-sync-console-logs.png">
         </a>
       - go to `Database` perspective and check the content of table `ORDERS` in `DefaultDB` data source - it should contain the replicated orders with converted total in EUR
         <a href="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-orders-table.png" target="_blank">
         <img src="{{ site.baseurl }}/images/2024-08-19-orders-etl/ts-orders-table.png" alt="ts-orders-table.png">
         </a>
         __Note:__ if you had problems to model the `sync-orders-typescript.camel`, you can get a working content of the file from [here](https://github.com/codbex/codbex-sample-camel-opencart-etl/blob/872292cf858eac462dd6d31c36681841b9d49130/orders-etl/sync/sync-orders-typescript.camel)

<br>Congratulations, you have implemented the ETL scenario in two different ways! 

---
## Summary
Using [Iapetus](https://www.codbex.com/products/iapetus/) you can
   - easily implement [ETL](https://en.wikipedia.org/wiki/Extract,_transform,_load) scenarios
   - use all available [Apache Camel](https://camel.apache.org/) functionalities 
   - benefit from the [codbex platform, tooling and modules](https://www.codbex.com/documentation/)
   - use the comprehensive [codbex SDK](https://www.codbex.com/documentation/platform/sdk) which uses different modern open source projects for messaging, jobs scheduling, REST, OData, mails etc.

The project we implemented can be found in [this GitHub repository](https://github.com/codbex/codbex-sample-camel-opencart-etl).

I hope you enjoyed this blog. Stay tuned for more great functionality by __codbex__!<br>
If you have any questions, ideas or want to contribute, feel free [to contact us](https://www.codbex.com/contact/).
