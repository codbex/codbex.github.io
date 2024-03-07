---
date: 2024-03-07
title: Building Apps with Atlas and connecting to Snowflake
categories:
  - marketing
author: nedelchojr
---

Introducing <a href="{{ site.baseurl }}/products/atlas/">Atlas Edition</a> - the all-in-one platform – comprehensive solution designed to empower developers in building and operating cloud applications with unparalleled efficiency and agility. Atlas Edition brings together a rich set of features and tools tailored to streamline the end-to-end development process, from model driven application, processes and integration flows.

<img src="{{ site.baseurl }}/images/2024-01-23-oceanus-dive-into-innovation.md/oceanus-greek-titan.png" width="800em">

## Unveiling Atlas

In today's fast-paced digital landscape, the demand for rapid application development in the cloud is greater than ever. As businesses strive to stay ahead of the competition and meet the evolving needs of their customers, they require robust tools and platforms that enable seamless development, deployment, and management of cloud-native applications. In this blog post we will look into some of the features of Atlas and focus mainly on the newly added functionality - connecting to a Snowflake database.

For more key features you can visit the <a href="{{ site.baseurl }}/products/atlas/">Atlas Edition</a> page.

## Model Driven Applications

One of the key features that defines Atlas is the ability, with minimal effort, to model and build whole full-stack applications ready to be used. This is possible with Atlas' `Entity Data Modeling`, a powerful custom editor for entities, properties and many more, some of the features are:
- Addition of entities
- Definition of properties
- Addition of custom logic to each entity/property via calculation fields and extension points
- Generating and previewing the pages/code and the ability to change your logic on the go

<div class="image">
    <img src="{{ site.baseurl }}/images/2024-03-07-application-development-with-atlas/atlas-edm-editor.png" alt="Screenshot" class="screenshot editable" />
</div>


## Process centric


## Integration flows


## Deploying Atlas on Snowpark and utilizing Snowflake

As mentioned in the intro, recently we have added the ability to connect to Snowflake database using the Atlas' `Database` perspective. This gives us the ability to write full-stack applications and use all the features of Atlas directly into Snowflake, an invaluable tool paired with Snowflake's real-time data processing and analytics. 

  In this section we will dive into how to deploy Atlas on Snowpark and connect to Snowflake automatically.

#### Snowflake setup

1. Create a non-trial Snowflake account

2. In a worksheet execute the following commands:

       1. New role, privileges, warehouse and DB:
    
    ```sql
    // Create an CONTAINER_USER_ROLE with required privileges
    USE ROLE ACCOUNTADMIN;
    CREATE ROLE CONTAINER_USER_ROLE;
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
       2. Compute pool and image repository:

    ```sql
    USE ROLE ACCOUNTADMIN;
    CREATE SECURITY INTEGRATION IF NOT EXISTS snowservices_ingress_oauth
    TYPE=oauth
    OAUTH_CLIENT=snowservices_ingress
    ENABLED=true;

    USE ROLE CONTAINER_USER_ROLE;
    CREATE COMPUTE POOL IF NOT EXISTS CONTAINER_HOL_POOL
    MIN_NODES = 1
    MAX_NODES = 1
    INSTANCE_FAMILY = CPU_X64_XS;

    CREATE IMAGE REPOSITORY CONTAINER_HOL_DB.PUBLIC.IMAGE_REPO;

    SHOW IMAGE REPOSITORIES IN SCHEMA CONTAINER_HOL_DB.PUBLIC;
    ```
#### Setup local environment

    1. Download and install the miniconda installer from https://conda.io/miniconda.html.
    2. Create a file `conda_env.yaml`
        ```yaml
        name: snowpark-container-services-hol
        channels:
            - https://repo.anaconda.com/pkgs/snowflake
        dependencies:
            - python=3.10
            - snowflake-snowpark-python[pandas]
            - ipykernel
        ```
    3. Create the conda environment.
        ```
        conda env create -f conda_env.yml
        ```
    4. Activate the conda environment.
        ```
        conda activate snowpark-container-services-hol
        ```
    5. Install hatch so we can build the SnowCLI:
        ```
        pip install hatch
        ```
    6. Install SnowCLI:
        ```bash
        # naviage to where you want to download the snowcli GitHub repo, e.g. ~/Downloads
        cd /your/preferred/path
        # clone the git repo
        git clone https://github.com/Snowflake-Labs/snowcli
        # cd into the snowcli repo
        cd snowcli
        # install
        hatch build && pip install .
        # during install you may observe some dependency errors, which should be okay for the time being 
        ```
    7. Configure your Snowflake CLI connection by following the steps
        ```bash
        snow connection add
        ```

        test the connection
        ```bash
        # test the connection:
        snow connection test --connection "CONTAINER_hol"
        ```

#### Docker image preperation

  1. Pull latest codbex-atlas image
      ```bash
      docker pull ghcr.io/codbex/codbex-atlas:latest
      ```

      !!! If you are on ARM architecture:
      
      `export DOCKER_DEFAULT_PLATFORM=linux/amd64`

  3. Login in your Snowflake image repository
      ```bash
      # snowflake_registry_hostname = org-account.registry.snowflakecomputing.com
      docker login <snowflake_registry_hostname> -u <user_name>
      ```
  4. Tag and push
      ```bash
      # repository_url = org-account.registry.snowflakecomputing.com/CONTAINER_hol_db/public/image_repo
      docker tag codbex-atlas:latest <repository_url>/codbex-atlas:dev
      docker push <repository_url>/codbex-atlas:dev

#### Creating the Atlas service

  1. Create spec file for service deployment

      codbex-atlas-snowpark.yaml
      ```yaml
      spec:
      containers:
          - name: codbex-atlas-snowpark
          image: <repository_hostname>/container_hol_db/public/image_repo/codbex-atlas:dev
          volumeMounts:
              - name: codbex-atlas-home
              mountPath: /home/codbex-atlas
      endpoints:
          - name: codbex-atlas-snowpark
          port: 80
          public: true
      volumes:
          - name: codbex-atlas-home
          source: "CONTAINER_HOL_DB.PUBLIC.VOLUMES"
          uid: 1000
          gid: 1000
      networkPolicyConfig:
          allowInternetEgress: true
      ```
  2. Deploy the spec file:
      ```bash
      snow object stage copy ./src/codbex-atlas-snowpark/codbex-atlas.yaml  @specs --overwrite --connection CONTAINER_hol
      ```
  3. In the Snowflake worksheet execute the following command:
      ```sql
      CREATE SERVICE codbex_atlas
      in compute pool CONTAINER_HOL_POOL
      from @specs
      spec = 'codbex-atlas-snowpark.yaml';
      ```
  4. Check your service:
      ```sql
      CALL SYSTEM$GET_SERVICE_STATUS('CONTAINER_HOL_DB.PUBLIC.CODBEX_ATLAS');
      CALL SYSTEM$GET_SERVICE_LOGS('CONTAINER_HOL_DB.PUBLIC.CODBEX_ATLAS', '0', 'codbex-atlas', 10);
      CALL SYSTEM$REGISTRY_LIST_IMAGES('/CONTAINER_HOL_DB/PUBLIC/IMAGE_REPO');

      SHOW SERVICES like 'codbex_atlas';
      ```

<img src="{{ site.baseurl }}/images/2024-03-07-application-development-with-atlas/atlas-snowflake-sheet.png" />

  5. Get service endpoint
      ```sql
      SHOW ENDPOINTS IN SERVICE codbex_atlas;
      ```

#### Using your newly deployed Atlas

Congratulations !!! 

Now you can use Atlas to develop your first application and utilize Snowflake's database.

<img src="{{ site.baseurl }}/images/2024-03-07-application-development-with-atlas/atlas-final-application.png" />

You can query your data from Atlas and from Snowflake:

<img src="{{ site.baseurl }}/images/2024-03-07-application-development-with-atlas/snowflake-sheet-select.png" />

You can find the full tutorial and references [here](https://github.com/codbex/codbex-hades-snowflake/blob/main/README.md).

## Conclusion

In conclusion, Atlas Edition stands as the ultimate solution for rapid application development of cloud applications, offering a comprehensive suite of features and devops tools to streamline the entire development lifecycle. With its extensive capabilities spanning database modeling, RESTful services authoring, dynamic language support, user interface generation, role-based security, external services integration, testing, debugging, operations, and monitoring, Atlas Edition provides developers with everything they need to bring their ideas to life quickly and efficiently.

For more details about the <a href="https://www.codbex.com/products/">products</a> and <a href="https://www.codbex.com/pricing/">pricing</a> we are available through any of the channels in <a href="https://www.codbex.com/contact/">contacts</a>.
