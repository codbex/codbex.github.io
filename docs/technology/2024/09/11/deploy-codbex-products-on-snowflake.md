---
title: Deploy codbex products on Snowflake
description: Enhance your Snowflake environment with codbex's low-code solutions, effortlessly deployed as Docker images for maximum efficiency.
date: 2024-09-11
author: iliyan
editLink: false
---

# Deploy codbex products on Snowflake

Enhance your [Snowflake](https://www.snowflake.com/) environment with [codbex's low-code solutions](https://www.codbex.com/products/), effortlessly deployed as Docker images for maximum efficiency.

In this tutorial, I'm going to show you how you can easily deploy [codbex](https://www.codbex.com/) products on Snowflake.
I will describe the steps needed to deploy __codbex__ [Kronos](https://www.codbex.com/products/kronos/). By following the steps, you can deploy any other codbex product in the same way.

Follow the steps below or watch the recorded video.<br>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/HTuvLz5Xpr0" frameborder="0" allowfullscreen></iframe>

## Snowflake setup

1. Create a non-trial Snowflake account

1. In a [worksheet](https://docs.snowflake.com/en/user-guide/ui-snowsight-worksheets-gs) execute the following commands:
   - create a new role with privileges, warehouse and DB

     ```sql
     // Create an CONTAINER_USER_ROLE with required privileges
     USE ROLE ACCOUNTADMIN;
     CREATE OR REPLACE ROLE CONTAINER_USER_ROLE;
     GRANT CREATE DATABASE ON ACCOUNT TO ROLE CONTAINER_USER_ROLE;
     GRANT CREATE WAREHOUSE ON ACCOUNT TO ROLE CONTAINER_USER_ROLE;
     GRANT CREATE COMPUTE POOL ON ACCOUNT TO ROLE CONTAINER_USER_ROLE;
     GRANT CREATE INTEGRATION ON ACCOUNT TO ROLE CONTAINER_USER_ROLE;
     GRANT MONITOR USAGE ON ACCOUNT TO  ROLE  CONTAINER_USER_ROLE;
     GRANT BIND SERVICE ENDPOINT ON ACCOUNT TO ROLE CONTAINER_USER_ROLE;
     GRANT IMPORTED PRIVILEGES ON DATABASE snowflake TO ROLE CONTAINER_USER_ROLE;

     // Grant CONTAINER_USER_ROLE to ACCOUNTADMIN
     grant role CONTAINER_USER_ROLE to role ACCOUNTADMIN;

     // Create Database, Warehouse, and Image spec stage
     USE ROLE CONTAINER_USER_ROLE;
     CREATE OR REPLACE DATABASE CONTAINER_HOL_DB;

     CREATE OR REPLACE WAREHOUSE CONTAINER_HOL_WH
     WAREHOUSE_SIZE = XSMALL
     AUTO_SUSPEND = 120
     AUTO_RESUME = TRUE;
    
     CREATE STAGE IF NOT EXISTS specs
     ENCRYPTION = (TYPE='SNOWFLAKE_SSE');

     CREATE STAGE IF NOT EXISTS volumes
     ENCRYPTION = (TYPE='SNOWFLAKE_SSE')
     DIRECTORY = (ENABLE = TRUE);
     ```
      Adjust the warehouse size if needed. Details about supported sizes [here](https://docs.snowflake.com/en/sql-reference/sql/create-warehouse).

   - create compute pool and image repository

     ```sql
     USE ROLE CONTAINER_USER_ROLE;
     CREATE COMPUTE POOL IF NOT EXISTS CONTAINER_HOL_POOL
       MIN_NODES = 1
       MAX_NODES = 1
       INSTANCE_FAMILY = CPU_X64_XS;

     CREATE IMAGE REPOSITORY IF NOT EXISTS CONTAINER_HOL_DB.PUBLIC.IMAGE_REPO;
   
     // get details about the created image repository
     SHOW IMAGE REPOSITORIES like 'IMAGE_REPO' IN SCHEMA CONTAINER_HOL_DB.PUBLIC;
     ```
     Adjust the size of the provisioned machines if needed. More details about the different sizes [here](https://docs.snowflake.com/en/sql-reference/sql/create-compute-pool).

   - create network rule which allows egress communication to all hosts on ports `443` and `80`<br>
     ```sql
     USE ROLE ACCOUNTADMIN;

     DROP NETWORK RULE IF EXISTS allow_all_rule;
     DROP EXTERNAL ACCESS INTEGRATION IF EXISTS allow_all_rule_integration;

     CREATE OR REPLACE NETWORK RULE allow_all_rule
       MODE= 'EGRESS'
       TYPE = 'HOST_PORT'
       VALUE_LIST = ('0.0.0.0:443','0.0.0.0:80');

     CREATE OR REPLACE EXTERNAL ACCESS INTEGRATION allow_all_rule_integration
       ALLOWED_NETWORK_RULES = (allow_all_rule)
       ENABLED = true;

     GRANT USAGE ON INTEGRATION allow_all_rule_integration TO ROLE CONTAINER_USER_ROLE;
     ```
     This will allow codbex products to communicate with the outside world.

## Docker image preparation

1. Pull latest codbex-kronos image

   ```bash
   IMAGE_NAME='codbex-kronos'
   IMAGE_VERSION='latest'
   docker pull ghcr.io/codbex/$IMAGE_NAME:$IMAGE_VERSION --platform linux/amd64
   ```
   Adjust the `IMAGE_NAME` with the needed codbex product.
   For example, you can use `codbex-helios`, `codbex-iapetus`, `codbex-hyperion` and any other [codbex product](https://www.codbex.com/products/).

1. Login in your Snowflake image repository

   ```bash
   # replace <org> and <account> with values for your snowflake account
   SNOWFLAKE_REGISTRY_HOSTNAME='<org>-<account>.registry.snowflakecomputing.com'
   # example value: jiixfdf-qd67203.registry.snowflakecomputing.com
   
   docker login "$SNOWFLAKE_REGISTRY_HOSTNAME" -u <your_username>
   ```

1. Retag the pulled image and push it to the Snowflake repository
- get your repository URL from `repository_url` of the following sql:
```sql
SHOW IMAGE REPOSITORIES like 'IMAGE_REPO' IN SCHEMA CONTAINER_HOL_DB.PUBLIC;
```
<a href="/images/2024-09-11-deploy-codbex-products-on-snowflake/repo-url.png" target="_blank">
<img src="/images/2024-09-11-deploy-codbex-products-on-snowflake/repo-url.png" alt="repo-url.png">
</a>

- retag the image
     ```bash
     # replace `<your-repo-url>` with your value, example:
     # REPO_URL="jiixfdf-qd67203.registry.snowflakecomputing.com/container_hol_db/public/image_repo"
     REPO_URL="<your-repo-url>"
     SNOWFLAKE_IMAGE="$REPO_URL/$IMAGE_NAME:$IMAGE_VERSION"
    
     docker tag ghcr.io/codbex/$IMAGE_NAME:$IMAGE_VERSION "$SNOWFLAKE_IMAGE"
    
     echo "Pushing image $SNOWFLAKE_IMAGE"
     docker push "$SNOWFLAKE_IMAGE"
     ```
     
## Deploy the application
1. Create spec file `codbex-kronos-snowpark.yaml` for service deployment with the following content

   ```yaml
   spec:
     containers:
       - name: codbex-application
         image: <snowflake-image>
         # volumeMounts:
         #   - name: app-volume
         #     mountPath: /target
         env:
           DIRIGIBLE_DATABASE_CUSTOM_DATASOURCES: SNOWFLAKE
           DIRIGIBLE_DATABASE_DATASOURCE_NAME_DEFAULT: SNOWFLAKE
           SNOWFLAKE_DRIVER: net.snowflake.client.jdbc.SnowflakeDriver
           SNOWFLAKE_WAREHOUSE: CONTAINER_HOL_WH
           SNOWFLAKE_DATABASE: CONTAINER_HOL_DB
           SNOWFLAKE_ROLE: CONTAINER_USER_ROLE
           SNOWFLAKE_SCHEMA: PUBLIC
           SNOWFLAKE_URL: jdbc:snowflake://not-used-in-snowpark-scenario
           SNOWFLAKE_USERNAME: not-used-in-snowpark-scenario
           SNOWFLAKE_PASSWORD: not-used-in-snowpark-scenario
     endpoints:
       - name: app-endpoint
         port: 80
         public: true
     # volumes:
     #   - name: app-volume
     #     source: "@CONTAINER_HOL_DB.PUBLIC.VOLUMES"
     #     uid: 0
     #     gid: 0
   ```
   Uncomment `volumes` and `volumeMounts` sections if you need persistent repository and SystemDB.<br>
   Details about the Snowpark Container Services specification YAML could be found [here](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/specification-reference).

1. Replace the following placeholders in the above yaml

   | Placeholder            | Description                                    | Example                                                                                                  | 
   |------------------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------| 
   | `<snowflake-image>`    | snowflake image - the value of SNOWFLAKE_IMAGE | `jiixfdf-qd67203.registry.snowflakecomputing.com/container_hol_db/public/image_repo/codbex-kronos:latest` |

1. Upload the spec file

   - Upload the file to the created stage `specs` using the UI ([Snowsight](https://docs.snowflake.com/en/user-guide/ui-snowsight))
     - go to Snowsight UI
     - open `Data` -> `Add Data`
     - select `Load files into a Stage`
       <a href="/images/2024-09-11-deploy-codbex-products-on-snowflake/add-file-to-stage.png" target="_blank">
       <img src="/images/2024-09-11-deploy-codbex-products-on-snowflake/add-file-to-stage.png" alt="add-file-to-stage.png">
       </a>
     - select database `CONTAINER_HOL_DB` and schema `PUBLIC`
     - select stage `specs`
     - click on `Upload` button
       <a href="/images/2024-09-11-deploy-codbex-products-on-snowflake/upload-file.png" target="_blank">
       <img src="/images/2024-09-11-deploy-codbex-products-on-snowflake/upload-file.png" alt="upload-file.png">
       </a>
     - [Here](https://docs.snowflake.com/en/user-guide/data-load-local-file-system-stage-ui#uploading-files-onto-a-stage) you ca find more details about the user interface if you have any troubles.
     
   - Alternatively, you can use the [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli-v2/index)
      - install Snowflake CLI by following the instructions [here](https://docs.snowflake.com/en/developer-guide/snowflake-cli-v2/installation/installation)
      - create a new connection with name `blog` and set `role=CONTAINER_USER_ROLE`, `warehouse=CONTAINER_HOL_WH`, `database=CONTAINER_HOL_DB`, `schema=PUBLIC`
        ```bash
        snow connection add --default
        ```

      - test created connection
        ```bash
        snow connection test --connection "blog"
        ```
        
      - upload the created spec YAML file
        ```bash
        snow stage copy codbex-kronos-snowpark.yaml @specs \
          --overwrite --connection blog \
          --database CONTAINER_HOL_DB --schema PUBLIC --role CONTAINER_USER_ROLE
        ```

1. Create (deploy) the application service
   - in a Snowflake worksheet execute the following command:
     ```sql
     USE ROLE CONTAINER_USER_ROLE;
     USE DATABASE CONTAINER_HOL_DB;
   
     DROP SERVICE IF EXISTS codbex_kronos;
   
     CREATE SERVICE codbex_kronos
       in compute pool CONTAINER_HOL_POOL
       from @specs
       EXTERNAL_ACCESS_INTEGRATIONS = (allow_all_rule_integration)
     spec = 'codbex-kronos-snowpark.yaml';
     ```

   - check your service status:
     ```sql
     CALL SYSTEM$GET_SERVICE_STATUS('codbex_kronos');
     ```
   - at first, it will be in status `PENDING`
     <a href="/images/2024-09-11-deploy-codbex-products-on-snowflake/service-status-pending.png" target="_blank">
     <img src="/images/2024-09-11-deploy-codbex-products-on-snowflake/service-status-pending.png" alt="service-status-pending.png">
     </a>
   - wait until it become `READY`
     <a href="/images/2024-09-11-deploy-codbex-products-on-snowflake/service-status-ready.png" target="_blank">
     <img src="/images/2024-09-11-deploy-codbex-products-on-snowflake/service-status-ready.png" alt="service-status-ready.png">
     </a>


## Using your newly deployed application

1. Get application URL

   ```sql
   SHOW ENDPOINTS IN SERVICE codbex_kronos;
   ```

1. Open the value of `ingress_url` in your browser
   <a href="/images/2024-09-11-deploy-codbex-products-on-snowflake/endpoints.png" target="_blank">
      <img src="/images/2024-09-11-deploy-codbex-products-on-snowflake/endpoints.png" alt="endpoints.png">
   </a>
   
1. Login with your Snowflake credentials
   <a href="/images/2024-09-11-deploy-codbex-products-on-snowflake/snowflake-login.png" target="_blank">
      <img src="/images/2024-09-11-deploy-codbex-products-on-snowflake/snowflake-login.png" alt="snowflake-login.png">
   </a>

1. Login in the application using the default credentials user `admin` and password `admin`.<br>
   You should see the application's welcome page
   <a href="/images/2024-09-11-deploy-codbex-products-on-snowflake/kronos-welcome-page.png" target="_blank">
      <img src="/images/2024-09-11-deploy-codbex-products-on-snowflake/kronos-welcome-page.png" alt="kronos-welcome-page.png">
   </a>

1. Next, you can validate the connection to the Snowflake database

   - go to `Database` perspective by clicking on the corresponding button
     <a href="/images/2024-09-11-deploy-codbex-products-on-snowflake/db-perspective.png" target="_blank">
        <img src="/images/2024-09-11-deploy-codbex-products-on-snowflake/db-perspective.png" alt="db-perspective.png">
     </a>
   - select `SNOWFLAKE` datasource
     <a href="/images/2024-09-11-deploy-codbex-products-on-snowflake/snowflake-ds.png" target="_blank">
        <img src="/images/2024-09-11-deploy-codbex-products-on-snowflake/snowflake-ds.png" alt="snowflake-ds.png">
     </a>
   - create a test table, insert data into it and select all entries
     ```sql
     DROP TABLE IF EXISTS STUDENTS;

     CREATE TABLE STUDENTS (
         ID INTEGER AUTOINCREMENT,
         FIRST_NAME STRING,
         LAST_NAME STRING
     );
   
     INSERT INTO STUDENTS (FIRST_NAME, LAST_NAME)
     VALUES
          ('John', 'Doe'),
          ('Jane', 'Smith'),
          ('Emily', 'Johnson');
    
     SELECT * FROM STUDENTS;
     ```
     <a href="/images/2024-09-11-deploy-codbex-products-on-snowflake/test-snowflake-connection.png" target="_blank">
       <img src="/images/2024-09-11-deploy-codbex-products-on-snowflake/test-snowflake-connection.png" alt="test-snowflake-connection.png">
     </a>
1. To check the application logs, you can call [SYSTEM$GET_SERVICE_LOGS](https://docs.snowflake.com/en/sql-reference/functions/system_get_service_logs) function
```sql
CALL SYSTEM$GET_SERVICE_LOGS('codbex_kronos', '0',  'codbex-application');
```

---
Congratulations, you have deployed your _codbex_ application! 

---
I hope you enjoyed this blog. Stay tuned for more great functionality by __codbex__!<br>
If you have any questions, ideas or want to contribute, feel free [to contact us](https://www.codbex.com/contact/).
