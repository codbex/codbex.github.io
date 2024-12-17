# Job Scheduler

The Job Scheduler API provides developers with a set of utility functions to manage and interact with scheduled jobs within the system. This API is particularly useful for automating repetitive tasks, scheduling background processes, and triggering job executions based on predefined conditions or events.

## Key Features

* `Job Management`: Developers can list all registered user jobs, retrieve specific job details by name, enable or disable job execution, and trigger job executions with custom parameters.

* `Logging`: The API includes functionality to log messages with normal severity, allowing developers to track job executions, monitor system behavior, and debug issues effectively.

* `Flexibility`: Jobs can be configured and managed dynamically, providing flexibility in scheduling, execution, and parameterization to suit various application requirements.

## Usage Scenarios

* `Scheduled Tasks`: Developers can schedule recurring tasks, such as data backups, report generation, or system maintenance activities, using the Job Scheduler API.

* `Background Processing`: Long-running or resource-intensive tasks, such as data processing, file uploads, or batch operations, can be offloaded to background jobs managed by the API, ensuring optimal system performance and responsiveness.

* `Event-Driven Automation`: Jobs can be triggered based on predefined events, such as user actions, system events, or external triggers, enabling event-driven automation and orchestration of business processes.

## Compatibility

The Job Scheduler API is designed to seamlessly integrate with existing scripting services and applications within the system. It is platform-agnostic and can be used across various environments and deployment scenarios.

## Extensibility

Developers can extend the functionality of the Job Scheduler API by implementing custom jobs, event listeners, or scheduling strategies tailored to specific use cases or business requirements.

## Security Considerations

When using the Job Scheduler API, developers should ensure proper authentication, authorization, and access controls to prevent unauthorized access to sensitive job configurations or execution capabilities. Additionally, logging sensitive information should be handled securely to protect against data breaches or privacy violations.

## Best Practices

* `Job Naming`: Use descriptive and meaningful names for jobs to facilitate easy identification and management.

* `Error Handling`: Implement robust error handling and recovery mechanisms to handle job failures gracefully and minimize system downtime.

* `Parameterization`: Parameterize job configurations and execution parameters to make jobs more flexible, reusable, and adaptable to different scenarios.

* `Monitoring and Logging`: Monitor job execution metrics, track job status changes, and log relevant information to facilitate troubleshooting, auditing, and performance optimization.

### Example Usage

```javascript
import { scheduler } from "sdk/job";

let job = scheduler.getJob("/sample-job/myjob.job");
let param = job.getParameter("myParam");

console.log('Param is: ' + param);
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**getJobs()**   | Returns the list of all the registered user jobs | *Job array*
**getJob(name)**   | Gets a Job object by its name | *Job*
**enable(name)**   | Enables the Job regular execution | *-*
**disable(name)**   | Disables the Job regular execution | *-*
**trigger(name, parameters)**   | Triggers the Job regular execution with parameters | *-*
**log(name, message)**   | Logs a message with normal severity | *-*
**error(name, message)**   | Logs a message with error severity | *-*
**warn(name, message)**   | Logs a message with warn severity | *-*
**info(name, message)**   | Logs a message with info severity | *-*

## Objects

---

### Job

Function     | Description | Returns
------------ | ----------- | --------
**getName()** | Returns the name of the Job | *string*
**getGroup()** | Returns the group of the Job | *string*
**getClazz()** | Returns the clazz of the Job | *string*
**getDescription()** | Returns the description of the Job | *string*
**getExpression()** | Returns the expression of the Job | *string*
**getHandler()** | Returns the handler of the Job | *string*
**getEngine()** | Returns the engine of the Job | *string*
**getSingleton()** | Returns the singleton flag of the Job | *string*
**getEnabled()** | Returns the enabled state of the Job | *string*
**getCreatedBy()** | Returns the created by user of the Job | *string*
**getCreatedAt()** | Returns the created at timestamp of the Job | *string*
**getParameters()** | Returns the parameters object of the Job | *JobParameters*
**getParameter(name)** | Returns the value of the parameter of the Job | *string*
**enable()** | Enables the Job | *-*
**disable()** | Disables the Job | *-*
**trigger()** | Triggers the Job | *-*
**log(message)**   | Logs a message with normal severity | *-*
**error(message)**   | Logs a message with error severity | *-*
**warn(message)**   | Logs a message with warn severity | *-*
**info(message)**   | Logs a message with info severity | *-*


### JobParameters

Function     | Description | Returns
------------ | ----------- | --------
**get(i)** | Returns the parameter by the index | *JobParameter*
**count()** | Returns the number of the parameters | *number*

### JobParameter

Function     | Description | Returns
------------ | ----------- | --------
**getName()** | Returns the name of the Parameter | *string*
**getDescription()** | Returns the description of the Parameter | *string*
**getType()** | Returns the type of the Parameter | *string*
**getDefaultValue()** | Returns the default value of the Parameter | *string*
**getChoices()** | Returns the choices of the Parameter | *string*