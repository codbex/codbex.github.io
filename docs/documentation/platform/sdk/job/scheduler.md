# API: scheduler

> Source: `job/scheduler.ts`

Provides the API for managing scheduled jobs and tasks within the platform,
allowing users to retrieve, enable, disable, and trigger jobs, as well as log output.

## Usage
```javascript
import { scheduler } from "sdk/job";

let job = scheduler.getJob("/sample-job/myjob.job");
let param = job.getParameter("myParam");

console.log('Param is: ' + param);

```


## Classes

### Scheduler

The Scheduler class provides static methods for interacting with the job scheduler,<br/>offering global control over the system's defined jobs.

#### Methods

<hr/>

#### getJobs

- `getJobs ():Job[]`

  Retrieves all job definitions currently configured in the system.<br/><br/>@returns An array of {@link Job} objects.

<hr/>

#### getJob

- `getJob (name:string):Job`

  Retrieves a specific job definition by its unique name.<br/><br/>@param name The name of the job.<br/>@returns A {@link Job} object corresponding to the provided name.

<hr/>

#### enable

- `enable (name:string):void`

  Enables a job, allowing it to be executed according to its schedule (cron expression).<br/><br/>@param name The name of the job to enable.

<hr/>

#### disable

- `disable (name:string):void`

  Disables a job, preventing it from executing on its schedule.<br/><br/>@param name The name of the job to disable.

<hr/>

#### trigger

- `trigger (name:string, parameters:{[key:string]:string}={}):void`

  Triggers the immediate execution of a job.<br/><br/>@param name The name of the job to trigger.<br/>@param parameters Optional key-value object of parameters to pass to the job execution.

<hr/>

#### log

- `log (name:string, message:string):void`

  Logs a message at the standard log level for a specific job instance.<br/>This is useful when the log context needs to be associated with a running job.<br/><br/>@param name The name of the job to associate the log with.<br/>@param message The log message content.

<hr/>

#### error

- `error (name:string, message:string):void`

  Logs an error message for a specific job instance.<br/><br/>@param name The name of the job.<br/>@param message The error message content.

<hr/>

#### warn

- `warn (name:string, message:string):void`

  Logs a warning message for a specific job instance.<br/><br/>@param name The name of the job.<br/>@param message The warning message content.

<hr/>

#### info

- `info (name:string, message:string):void`

  Logs an informational message for a specific job instance.<br/><br/>@param name The name of the job.<br/>@param message The information message content.

### Job

Represents a single scheduled job definition.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Gets the unique name of the job.<br/>@returns The job name.

<hr/>

#### getGroup

- `getGroup ():string`

  Gets the logical grouping for the job.<br/>@returns The job group name.

<hr/>

#### getClazz

- `getClazz ():string`

  Gets the Java class name (for Java-based jobs) or script file name (for script-based jobs).<br/>@returns The job implementation class/file name.

<hr/>

#### getDescription

- `getDescription ():string`

  Gets the description of the job's purpose.<br/>@returns The job description.

<hr/>

#### getExpression

- `getExpression ():string`

  Gets the cron expression defining the job's schedule.<br/>@returns The cron expression string.

<hr/>

#### getHandler

- `getHandler ():string`

  Gets the handler file path or resource name for script-based jobs.<br/>@returns The handler path.

<hr/>

#### getEngine

- `getEngine ():string`

  Gets the execution engine type (e.g., 'JavaScript', 'Java').<br/>@returns The engine type.

<hr/>

#### getSingleton

- `getSingleton ():boolean`

  Checks if the job is configured as a singleton (only one instance runs at a time).<br/>@returns True if the job is a singleton.

<hr/>

#### getEnabled

- `getEnabled ():boolean`

  Checks if the job is currently enabled for scheduled execution.<br/>@returns True if the job is enabled.

<hr/>

#### getCreatedBy

- `getCreatedBy ():string`

  Gets the user ID who created the job definition.<br/>@returns The creator's user ID.

<hr/>

#### getCreatedAt

- `getCreatedAt ():number`

  Gets the timestamp when the job definition was created.<br/>@returns The creation time as a numerical timestamp.

<hr/>

#### getParameters

- `getParameters ():JobParameters`

  Gets the parameters associated with this job definition.<br/>@returns A {@link JobParameters} object containing all parameters.

<hr/>

#### getParameter

- `getParameter (name:string):string`

  Retrieves the value for a specific parameter of this job.<br/>It checks for an overriding value in the global configurations first,<br/>and falls back to the defined default value if the configuration is not set.<br/><br/>@param name The name of the parameter to retrieve.<br/>@returns The parameter's configured or default value, or null if not found.

<hr/>

#### enable

- `enable ():void`

  Enables this specific job instance.

<hr/>

#### disable

- `disable ():void`

  Disables this specific job instance.

<hr/>

#### trigger

- `trigger (parameters:{[key:string]:string}={}):void`

  Triggers the immediate execution of this job instance.<br/><br/>@param parameters Optional key-value object of parameters to pass to the job execution.

<hr/>

#### log

- `log (message:string):void`

  Logs a message at the standard log level for this job instance.<br/><br/>@param message The log message content.

<hr/>

#### error

- `error (message:string):void`

  Logs an error message for this job instance.<br/><br/>@param message The error message content.

<hr/>

#### warn

- `warn (message:string):void`

  Logs a warning message for this job instance.<br/><br/>@param message The warning message content.

<hr/>

#### info

- `info (message:string):void`

  Logs an informational message for this job instance.<br/><br/>@param message The information message content.

### JobParameters

A container object representing the collection of parameters for a {@link Job}.

#### Methods

<hr/>

#### get

- `get (i:number):JobParameter`

  Retrieves a specific job parameter by its index.<br/><br/>@param i The index of the parameter in the array.<br/>@returns A {@link JobParameter} object.

<hr/>

#### count

- `count ():number`

  Gets the total number of parameters defined for the job.<br/>@returns The count of parameters.

### JobParameter

Represents a single parameter definition for a job.

#### Methods

<hr/>

#### getName

- `getName ():string`

  Gets the name of the parameter.<br/>@returns The parameter name.

<hr/>

#### getDescription

- `getDescription ():string`

  Gets the description of the parameter.<br/>@returns The parameter description.

<hr/>

#### getType

- `getType ():string`

  Gets the expected data type of the parameter (e.g., 'String', 'Integer', 'Boolean').<br/>@returns The parameter type.

<hr/>

#### getDefaultValue

- `getDefaultValue ():string`

  Gets the default value for the parameter.<br/>@returns The default value string.

<hr/>

#### getChoices

- `getChoices ():string[]`

  Gets a list of predefined choices for the parameter, if applicable.<br/>@returns An array of choice strings.

