---
title: Phoebe Edition
editLink: false

layout: home

hero:
  name: Phoebe Edition
  text: Data-centric Workflows
  tagline: The Phoebe Edition is your workflow orchestration tool that allows users to programmatically author, schedule, and monitor data-centric workflows.
  image:
      src: /images/products/phoebe.svg
---

<div class="product-tag"><a href="https://github.com/codbex/codbex-phoebe" target="_blank" class="product-link">Source Code</a></div>

The Phoebe Edition at its core, it is Apache Airflow which enables Directed Acyclic Graphs (DAGs) to define workflows, where tasks are represented as nodes, and dependencies between tasks form the edges of the graph. This structure ensures that workflows execute in the correct sequence while allowing for retries, logging, and monitoring. It is designed to help organizations manage complex data workflows and automate tasks in a scalable and reliable way.

### Who Is It For?

The Phoebe Edition is for data engineering, ETL (Extract, Transform, Load) pipelines, and workflow automation across various domains. Some common use cases include:

* Data Pipeline Orchestration: Automating and managing ETL/ELT workflows that move data between different systems (e.g., databases, data warehouses, and cloud storage).
* Machine Learning Pipelines: Scheduling and monitoring end-to-end ML workflows, from data preprocessing to model training and deployment.
* Infrastructure Automation: Managing cloud infrastructure provisioning, backup tasks, and system maintenance workflows.
* Report Generation: Automating scheduled reports and data aggregation jobs.
* IoT & Streaming Workflows: Orchestrating batch and real-time data processing workflows.

Phoebe provides rich scheduling options, dynamic task execution, logging, error handling, and integration with cloud services like AWS, GCP, Azure, and Snowflake, making it a powerful choice for workflow automation.


### Key Features:

<div class="content">
<section>
    <div class="container flex">
        <div class="text">
            <h2>Workbench</h2>
            <p>The Web IDE provides capabilities for Data Engineers to build, schedule, and monitor data pipelines in production. Data Scientists & Analysts can automate and orchestrate data workflows for analytics and machine learning. DevOps & IT Teams manage infrastructure automation, cloud provisioning, and system tasks. Organizations of all sizes can streamline data processes.</p>
        </div>
        <div class="image">
            <img src="/images/features/workbench-for-etl.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Apache Airflow Web UI</h2>
            <p>The embedded UI provides a user-friendly interface to visualize, monitor, and manage workflows (DAGs). Users can view DAGs, trigger runs, inspect task dependencies, and monitor execution statuses using the Graph, Tree, and Gantt views. It also allows debugging with logs, managing variables and connections, and controlling task execution (e.g., retrying or marking as successful/failed). Admins can configure system settings, manage users, and monitor Airflow's health. Overall, the Web UI simplifies workflow orchestration, troubleshooting, and optimization for data engineers and DevOps teams.</p>
        </div>
        <div class="image">
            <img src="/images/features/airflow-ui.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Git</h2>
            <p>The Git perspective allows you to fully control your code and manage repositories.
            It also provides Diff Tool for reviewing the changes.</p>
        </div>
        <div class="image">
            <img src="/images/features/git-perspective-for-etl.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Databases</h2>
            <p>It visualizes the database related views in a specialized perspective focused on the database 
            administrator tasks. It can be easily deployed on any hosting environment as a Docker container, 
            so that the database inspection and quick changes can be done in a more secure way than exposing 
            the database port itself.</p>
        </div>
        <div class="image">
            <img src="/images/features/database-perspective-for-etl.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>

<section>
    <div class="container flex">
        <div class="text">
            <h2>Terminal</h2>
            <p>The terminal perspective emulates console client connected to the environment 
            that can execute commands. The whole communication goes via HTTP(S) only and 
            does not require an SSH port to be opened.</p>
        </div>
        <div class="image">
            <img src="/images/features/terminal-for-etl.png" alt="Screenshot" class="screenshot editable" />
        </div>
    </div>
</section>
</div>

* User/role-based security model
* Modular architecture and allows to extend with own plugins
* Adapted to Kubernetes infrastructure
* Adapted to AWS Elastic Container Service
* Federated authentication (SAML, OpenId)

<br>

Phoebe Edition by <b>codbex</b> offers a seamless, all-in-one development and orchestration platform by combining a powerful Web IDE with Apache Airflow as its execution engine. This integration provides:

* End-to-End Development & Workflow Management – Code, manage project artefacts, version control (Git), and interact with databases within a single interface.
* Streamlined Data Pipeline Orchestration – Leverage Apache Airflow for scheduling and automating workflows without switching tools.
* Efficiency & Collaboration – A cloud-native, browser-based environment that accelerates development and deployment while enabling seamless collaboration.
* Flexibility & Extensibility – Supports various data engineering and automation use cases, reducing complexity in modern cloud-native environments.

With Phoebe Edition, teams can develop, deploy, and orchestrate workflows faster and more efficiently, making it a game-changer for data engineers, developers, and DevOps professionals. 

Support depends on the plan you selected from [pricing](/pricing/).

### References

* [Deploy codbex products on Snowflake](/technology/2024/09/11/deploy-codbex-products-on-snowflake)
