# Job

## Overview:

The `*.job` files in the __codbex__ platform are used to define and schedule jobs, allowing you to automate and execute recurring tasks within the platform.

Here's an explanation of the example `myjob.job` file and its properties:

```json
{
  "expression": "0/10 * * * * ?",
  "group": "defined",
  "handler": "my-project/jobs/my-handler.js",
  "description": "My Job with Parameters",
  "parameters": [
    {
      "type": "string",
      "name": "stringParam",
      "defaultValue": "My Value",
      "choices": "",
      "description": "My String Param"
    },
    {
      "type": "number",
      "name": "numberParam",
      "defaultValue": "1",
      "description": "My Number Param"
    },
    {
      "type": "boolean",
      "name": "boolParam",
      "defaultValue": "true",
      "description": "My Bool Value"
    },
    {
      "type": "choice",
      "name": "choiceParam",
      "defaultValue": "a",
      "choices": "a,b,c",
      "description": "My Choice Param"
    }
  ]
}
```

::: tip
File extension: `*.job`
:::

**Properties:**

* `expression` (String): Specifies the cron expression that defines the schedule for the job. In this example, the expression is set to "0/10 * * * * ?" to run the job every 10 seconds.
* `group` (String): Indicates the group to which the job belongs. This helps organize and categorize jobs. In this example, the group is `defined`, while built-in jobs are marked as `internal`.
* `handler` (String): Specifies the location or path of the script or module that serves as the job handler. The handler contains the logic to be executed when the job runs. In this example, it is `my-project/jobs/my-handler.js`.
* `description` (String): Provides a description of the job, explaining its purpose or functionality. In this example, the description is "My Job with Parameters".
* `parameters` (Array of Objects): Defines an array of parameters that can be passed to the job handler. Each parameter object contains properties such as type, name, defaultValue, choices, and description.
* Parameter Object Properties:
    * `type` (String): Specifies the data type of the parameter, such as `string`, `number`, `boolean`, or `choice`.
    * `name` (String): Represents the name of the parameter.
    * `defaultValue` (String): Specifies the default value for the parameter.
    * `choices` (String): For choice-type parameters, specifies the available choices separated by commas.
    * `description` (String): Provides a description of the parameter.

## Example Usage:

The example `myjob.job` file defines a job that runs every 10 seconds, belongs to the `defined` group, and executes the logic in the script located at `my-project/jobs/my-handler.js`. The job accepts four parameters with different data types and default values.

## Getting Started:

### Create a Job File:

Create a new `*.job` file or modify an existing one based on your specific job requirements.

### Configure Job Properties:

Adjust the properties within the file to match the details of your job. Update the expression, group, handler, description, and parameters accordingly.

### Implement Job Handler Logic:

Create the associated module or script (e.g., `my-project/jobs/my-handler.js`) to provide the implementation logic for the job. This script should contain the functionality you want to execute when the job runs.

### Schedule and Run the Job:

The job will automatically run based on the specified cron expression. Monitor the logs or results to ensure the job is executing as expected.

## Best Practices:

### Clear Naming Conventions:

Follow clear and consistent naming conventions for jobs and their associated handlers.

### Parameter Validation:

Ensure that the parameters are appropriately validated within the job handler to handle different data types and values.

## Conclusion:
The `*.job` files in the platform provide a powerful mechanism for automating recurring tasks within the platform. Customize jobs based on your specific requirements, and leverage parameters to make them versatile and configurable.
