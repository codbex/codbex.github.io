---
title:  Building a Simple ETL Workflow with Phoebe and Apache Airflow
description: In this blog post, we’ll explore how to use Phoebe to implement a simple ETL scenario, transforming employee data from a source table to a target table by applying a basic transformation
date: 2025-06-12
author: iliyan
editLink: false
---

# Building a Simple ETL Workflow with Phoebe and Apache Airflow

## Overview

Modern data engineering requires not only powerful tools for orchestration but also intuitive development environments. This is where [Phoebe](https://www.codbex.com/products/phoebe) comes in—a modern Web IDE tailored for designing and managing [Apache Airflow](https://airflow.apache.org/) v3 workflows with ease.

In this blog post, we’ll explore how to use Phoebe to implement a simple [ETL](https://en.wikipedia.org/wiki/Extract,_transform,_load) scenario, transforming employee data from a source table to a target table by applying a basic transformation: converting names to uppercase. Along the way, we’ll take advantage of Phoebe’s rich development perspectives, which streamline every aspect of the workflow design process.

## Overview of Phoebe
[Phoebe](https://www.codbex.com/products/phoebe) is a web-based IDE purpose-built for developing and managing workflows in [Apache Airflow](https://airflow.apache.org/) v3. It provides a seamless, integrated development experience with several powerful perspectives:

- Workbench: Central area for writing and editing your DAGs and other files.
- Embedded Airflow v3 Instance: A pre-integrated, fully functional Airflow v3 setup with direct access to the Airflow UI.
- Git Perspective: Easily manage your source code, commit changes, and work with repositories from within the IDE.
- Database Management: Interact with your databases visually—view tables, run queries, and manage schemas without leaving the browser.
- Integrated Terminal: Full access to a shell terminal for advanced CLI-based operations or debugging.

This IDE is designed for data engineers, developers, and workflow designers who want to rapidly build and deploy pipelines without constantly switching between tools.

## Scenario Overview: Simple ETL with Airflow
To demonstrate Phoebe in action, we'll implement a classic Extract-Transform-Load (ETL) pipeline. The goal of this example is to:

- Extract data from a source database table named `source_employees`.
- Transform the data by converting the `first_name` and `last_name` fields to uppercase.
- Load the transformed data into a target table named `target_employees`.

This simple transformation highlights how Airflow can orchestrate database operations while giving us a chance to showcase the power of Phoebe's development environment.

## Next Steps
In the next section of this blog, we’ll walk step-by-step through the implementation:

1. Setting up the project and Airflow DAG in Phoebe.
1. Creating source and target tables. Adding sample data to the source table.
1. Writing the transformation logic in Python using Airflow’s PythonOperator.
1. Testing and deploying the DAG via the embedded Airflow instance.
1. Verifying the result in the target table.

## Step-by-Step: Implementing the ETL in Phoebe

### Start Phoebe instance locally
- To start a Phoebe instance locally we need a PostgreSQL instance. To simplify the setup, let's define a `docker-compose.yaml` file using the following content:
```yaml
services:
  postgres:
    image: postgres:13
    container_name: postgres
    hostname: postgres
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=postgres
    healthcheck:
      test: [ "CMD", "pg_isready", "-U", "postgres" ]
      interval: 10s
      retries: 5
      start_period: 5s
    restart: always
    networks:
      - phoebe_net

  codbex-phoebe:
    image: ghcr.io/codbex/codbex-phoebe:3.0.0 # you can use latest tag as well
    container_name: phoebe
    environment:
      - PHOEBE_AIRFLOW_POSTGRES_USER=postgres
      - PHOEBE_AIRFLOW_POSTGRES_PASS=postgres
      - PHOEBE_AIRFLOW_POSTGRES_HOSTpostgres
      - PHOEBE_AIRFLOW_POSTGRES_DB=postgres
    ports:
      - "80:80"
    depends_on:
      - postgres
    networks:
      - phoebe_net

networks:
  phoebe_net:
    driver: bridge

volumes:
  postgresql_data:
    driver: local
```

- Start the instances using the following command
```shell
docker compose up
```

- Once the created instance is started, access the Phoebe instance at [http://localhost:80](http://localhost:80)
- Login using the default credentials (user: `admin`, password `admin`)

### Create a project using the starter template
- Open the Workbench perspective in Phoebe.
- At `Welcome` view, select `Apache Airflow Starter` template
  <a href="/images/2025-06-12-phoebe-airflow-etl/airflow-starter-template.png" target="_blank">
  <img src="/images/2025-06-12-phoebe-airflow-etl/airflow-starter-template.png" alt="airflow-starter-template.png">
  </a>
- Set `employees-etl` for `Project`
- Set `etl_employees_dag` for `File name`
- Set `etl_employees_dag` for `The id of the generated DAG`
  <a href="/images/2025-06-12-phoebe-airflow-etl/template-data.png" target="_blank">
  <img src="/images/2025-06-12-phoebe-airflow-etl/template-data.png" alt="template-data.png">
  </a>
- Click on the `Create` button
- A starter project will be automatically generated for you
  <a href="/images/2025-06-12-phoebe-airflow-etl/generated-project.png" target="_blank">
  <img src="/images/2025-06-12-phoebe-airflow-etl/generated-project.png" alt="generated-project.png">
  </a>


### Register data source to the PostgreSQL instance
To allow the Phoebe instance to connect to the PostgreSQL instance, we need to define a data source file.
This will allow us to inspect the PostgreSQL in the database perspective.
- Create a new folder with name `db` in the created project
- Create a file `demo-postgre.datasource` in folder `db`
- Add the content from [this link](https://github.com/codbex/codbex-sample-phoebe-employees-etl/blob/0770ad48cce39d818f19469de062c89a832ac38f/employees-etl/db/demo-postgre.datasource)

### Define DB schema and add sample data
To define the structure of the tables and to fill the source table with a sample data, we need to create a several special files.

- Add new file called `demo.schema` (for the schema definition) to folder `db` with the content from [this link](https://github.com/codbex/codbex-sample-phoebe-employees-etl/blob/0770ad48cce39d818f19469de062c89a832ac38f/employees-etl/db/demo.schema)
  <a href="/images/2025-06-12-phoebe-airflow-etl/schema-file.png" target="_blank">
  <img src="/images/2025-06-12-phoebe-airflow-etl/schema-file.png" alt="schema-file.png">
  </a>
- Next, add a sample data file `source_employees.csv` with the content from [this link](https://github.com/codbex/codbex-sample-phoebe-employees-etl/blob/0770ad48cce39d818f19469de062c89a832ac38f/employees-etl/db/source_employees.csv)
- Create a file `demo-data.csvim` with [this content](https://github.com/codbex/codbex-sample-phoebe-employees-etl/blob/0770ad48cce39d818f19469de062c89a832ac38f/employees-etl/db/demo-data.csvim)

### Verify tables structure and data are created
- Save all files and click on `Publish all` button. After a few seconds these files will be registered and tables will be created. The source table should be filled with a sample data.
  <a href="/images/2025-06-12-phoebe-airflow-etl/publish-all-btn.png" target="_blank">
  <img src="/images/2025-06-12-phoebe-airflow-etl/publish-all-btn.png" alt="publish-all-btn.png">
  </a>
- Go to the `Database` perspective
  <a href="/images/2025-06-12-phoebe-airflow-etl/db-perspective.png" target="_blank">
  <img src="/images/2025-06-12-phoebe-airflow-etl/db-perspective.png" alt="db-perspective.png">
  </a>
- From the data sources drop down, choose the create data source `demo-postgre`
  <a href="/images/2025-06-12-phoebe-airflow-etl/datasources-dropdown.png" target="_blank">
  <img src="/images/2025-06-12-phoebe-airflow-etl/datasources-dropdown.png" alt="datasources-dropdown.png">
  </a>
- Expand the `public` schema and inspect the tables
  <a href="/images/2025-06-12-phoebe-airflow-etl/tables-structure.png" target="_blank">
  <img src="/images/2025-06-12-phoebe-airflow-etl/tables-structure.png" alt="tables-structure.png">
  </a>
- Execute the following SQL statements to ensure that table `source_employees` has `1000` entries and that the target table is empty
  ```sql
  -- source_employees table
  SELECT * FROM source_employees;
  
  SELECT COUNT(*) FROM source_employees;
  
  -- target_employees table
  SELECT * FROM target_employees;
  
  SELECT COUNT(*) FROM target_employees;
  ```
  <a href="/images/2025-06-12-phoebe-airflow-etl/source-table-data.png" target="_blank">
   <img src="/images/2025-06-12-phoebe-airflow-etl/source-table-data.png" alt="source-table-data.png">
  </a>

### Implement the ETL using DAG
- Go to the `Workbench`
- Open the [DAG](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html) file `etl_employees_dag.py` and replace its content with [this one](https://github.com/codbex/codbex-sample-phoebe-employees-etl/blob/0770ad48cce39d818f19469de062c89a832ac38f/employees-etl/dags/etl_employees_dag.py)
- Create folder `tasks` in `dags` folder
- Add the extract task logic
  - Create file `extract_task.py`
  - Add [this content](https://github.com/codbex/codbex-sample-phoebe-employees-etl/blob/0770ad48cce39d818f19469de062c89a832ac38f/employees-etl/dags/tasks/extract_task.py)
- Add the transform logic
  - Create file `transform_task.py`
  - Add the content from [this link](https://github.com/codbex/codbex-sample-phoebe-employees-etl/blob/0770ad48cce39d818f19469de062c89a832ac38f/employees-etl/dags/tasks/transform_task.py)
- Add the load task
  - Create file `load_task.py`
  - Add [this content](https://github.com/codbex/codbex-sample-phoebe-employees-etl/blob/0770ad48cce39d818f19469de062c89a832ac38f/employees-etl/dags/tasks/load_task.py)
- The structure should look like this
  <a href="/images/2025-06-12-phoebe-airflow-etl/dag-impl-structure.png" target="_blank">
   <img src="/images/2025-06-12-phoebe-airflow-etl/dag-impl-structure.png" alt="dag-impl-structure.png">
  </a>
- Publish the project using `Publish all` button to apply these changes
- After a few seconds the changes will be applied

### Trigger the DAG execution
- Go to the `Airflow` perspective
  <a href="/images/2025-06-12-phoebe-airflow-etl/airflow-perspective-btn.png" target="_blank">
   <img src="/images/2025-06-12-phoebe-airflow-etl/airflow-perspective-btn.png" alt="airflow-perspective-btn.png">
  </a>
- Select `Dags`
- You should see the created DAG
  <a href="/images/2025-06-12-phoebe-airflow-etl/created-dags.png" target="_blank">
  <img src="/images/2025-06-12-phoebe-airflow-etl/created-dags.png" alt="created-dags.png">
  </a>
- Click on the `etl_employees_dag` DAG
- Trigger a new execution using the `Trigger` button
  <a href="/images/2025-06-12-phoebe-airflow-etl/trigger-dag-btn.png" target="_blank">
  <img src="/images/2025-06-12-phoebe-airflow-etl/trigger-dag-btn.png" alt="trigger-dag-btn.png">
  </a>
- You should see a successful execution
  <a href="/images/2025-06-12-phoebe-airflow-etl/successful-dag-execution.png" target="_blank">
  <img src="/images/2025-06-12-phoebe-airflow-etl/successful-dag-execution.png" alt="successful-dag-execution.png">
  </a>
- Verify ETL execution
  Now, let's verify that the target table contains entries with upper case for first name and last name
  - Go to `Database` perspective
  - Execute the following SQL statements
    ```sql
    SELECT COUNT(*) FROM target_employees;
    
    SELECT * FROM target_employees;
    ```
  - Table `target_employees` should have `1000` entries
    <a href="/images/2025-06-12-phoebe-airflow-etl/target-entries-count.png" target="_blank">
    <img src="/images/2025-06-12-phoebe-airflow-etl/target-entries-count.png" alt="target-entries-count.png">
    </a>
  - All entries must be in uppercase
    <a href="/images/2025-06-12-phoebe-airflow-etl/target-entries.png" target="_blank">
    <img src="/images/2025-06-12-phoebe-airflow-etl/target-entries.png" alt="target-entries.png">
    </a>

**Congratulations, you have successfully implemented the ETL scenario!**

## GitHub repository for the project
The project we implemented can be found in [this GitHub repository](https://github.com/codbex/codbex-sample-phoebe-employees-etl).<br>
If you don't want to go through the blog steps, you can clone the repository using the `Git` perspective of Phoebe.<br>
Once the project is cloned, you have to publish it.<br>
Next you can explore and play with the content of the project.


## Final Thoughts

This ETL pipeline, while simple, illustrates a foundational use case that many real-world workflows build upon.<br>
Using Phoebe, we can:
- Rapidly prototype and test data workflows.
- Stay within a single, unified development environment.
- Easily manage code, data, and execution—all from the browser.

Whether you're just starting with Airflow or looking to streamline your pipeline development, Phoebe offers a productive and modern approach to orchestrating data workflows.


