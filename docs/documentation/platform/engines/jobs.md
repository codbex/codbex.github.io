# Jobs Engine

## Introduction

The Jobs Engine in the __codbex__ platform allows developers to schedule and manage background jobs within the stack. This documentation provides an overview of the Jobs Engine's features, including the use of CRON expressions, parameters, and JavaScript handlers when a job is triggered.

## Jobs Engine Features

### Background Job Scheduling

The Jobs Engine enables developers to schedule recurring background jobs to automate various tasks. Jobs can be scheduled to run at specific intervals using CRON expressions.

Example:

```json
{
   "expression":"0/10 * * * * ?",
   "group":"codbex",
   "handler":"my-project/jobs/my-handler.js",
   "description":"My Job",
   "parameters":[
   ]
}
```

### CRON Expressions

Developers can use CRON expressions to specify when a job should run. CRON expressions define the schedule by specifying minute, hour, day of the month, month, and day of the week.

Example CRON Expression: `"0 2 * * *"` (Every day at 2:00 AM)

### Job Parameters

Jobs can accept parameters, allowing developers to customize job behavior dynamically. Parameters provide flexibility in configuring and adapting job execution based on specific requirements.

Example:

```json
{
   "expression":"0/10 * * * * ?",
   "group":"codbex",
   "handler":"my-project/jobs/my-handler.js",
   "description":"My Job with Parameters",
   "parameters":[
      {
         "type":"string",
         "name":"stringParam",
         "defaultValue":"My Value",
         "choices":"",
         "description":"My String Param"
      },
      {
         "type":"number",
         "name":"numberParam",
         "defaultValue":"1",
         "description":"My Number Param"
      },
      {
         "type":"boolean",
         "name":"boolParam",
         "defaultValue":"true",
         "description":"My Bool Value"
      },
      {
         "type":"choice",
         "name":"choiceParam",
         "defaultValue":"a",
         "choices":"a,b,c",
         "description":"My Choice Param"
      }
   ]
}
```

### JavaScript Handlers

When a job is triggered, developers can define JavaScript handlers to execute specific logic. Handlers can access job parameters, perform actions, and interact with other platform services.

Example Handler:

```javascript
console.log("Hello from My Job");
```

## Underlying Quartz Framework

The Jobs Engine in the __codbex__ platform is built on the Quartz framework, a widely-used open-source job scheduling library for Java. Quartz provides a rich set of features for job scheduling, such as CRON expressions, job persistence, and clustering.

Key Features of Quartz:

### CRON Expressions

Quartz supports CRON expressions for defining job schedules precisely. Developers can leverage the flexibility of CRON expressions to create complex and customizable schedules.

### Job Persistence

Quartz allows job configurations and state information to be persisted, ensuring that scheduled jobs are not lost in the event of system restarts or failures.

### Job Clustering

Quartz supports job clustering, allowing multiple instances of the scheduler to work together. This ensures high availability and load balancing for scheduled jobs.

## Conclusion

The Jobs Engine in the __codbex__ platform, built on the Quartz framework, provides a powerful mechanism for scheduling and managing background jobs. By utilizing CRON expressions, parameters, and JavaScript handlers, developers can automate tasks, customize job behavior, and execute specific logic based on predefined schedules.
