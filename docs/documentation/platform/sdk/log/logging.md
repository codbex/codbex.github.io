# API: logging

> Source: `log/logging.ts`

Provides a wrapper for the underlying logging facility, allowing
for categorized and leveled logging messages with support for variable arguments,
including error objects.

## Usage
```javascript
import { logging } from "sdk/log";

let logger = logging.getLogger("org.eclipse.dirigible.mylogger");

logger.debug("Hello from {}!", "MyLogger");
logger.error("Oops", new Error("Something wrong happened"));
logger.error("Oops! Param 1: {}, param 2: {}", "param1Value", "param2Value", new Error("Something wrong happened"));

```


## Classes

### Logging

The main entry point for the logging API. Use this class to obtain a named<br/>logger instance.

#### Methods

<hr/>

#### getLogger

- `getLogger (loggerName:string):Logger`

  Retrieves or creates a Logger instance associated with a specific name.<br/>The logger name is typically used to categorize log messages (e.g., 'com.app.service').<br/><br/>@param loggerName The name of the logger.<br/>@returns A {@link Logger} instance.

### Logger

Represents a named logger instance used for emitting log messages at various levels.

#### Methods

<hr/>

#### setLevel

- `setLevel (level:string):Logger`

  Sets the logging level for this specific logger instance.<br/>Messages below this threshold will be ignored.<br/><br/>@param level The desired logging level (e.g., 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR').<br/>@returns The Logger instance for method chaining.

<hr/>

#### isDebugEnabled

- `isDebugEnabled ():boolean`

  Checks if the DEBUG level is currently enabled for this logger.<br/>@returns True if DEBUG logging is enabled, false otherwise.

<hr/>

#### isErrorEnabled

- `isErrorEnabled ():boolean`

  Checks if the ERROR level is currently enabled for this logger.<br/>@returns True if ERROR logging is enabled, false otherwise.

<hr/>

#### isWarnEnabled

- `isWarnEnabled ():boolean`

  Checks if the WARN level is currently enabled for this logger.<br/>@returns True if WARN logging is enabled, false otherwise.

<hr/>

#### isInfoEnabled

- `isInfoEnabled ():boolean`

  Checks if the INFO level is currently enabled for this logger.<br/>@returns True if INFO logging is enabled, false otherwise.

<hr/>

#### isTraceEnabled

- `isTraceEnabled ():boolean`

  Checks if the TRACE level is currently enabled for this logger.<br/>@returns True if TRACE logging is enabled, false otherwise.

<hr/>

#### log

- `log (msg:string, level:string):void`

  The core logging method. Logs a message at the specified level, optionally<br/>supporting parameters for message formatting and a final Error object for stack trace logging.<br/><br/>@param msg The log message template (e.g., "User {0} failed to connect: {1}").<br/>@param level The logging level (e.g., 'DEBUG', 'ERROR').<br/>@param [args] Optional arguments for message formatting. The last argument can be an Error object.

<hr/>

#### debug

- `debug (msg:string, ..._:any[]):void`

  Logs a message at the DEBUG level.<br/><br/>@param msg The log message template.<br/>@param [args] Optional arguments for message formatting. The last argument can be an Error object.

<hr/>

#### info

- `info (msg:string, ..._:any[]):void`

  Logs a message at the INFO level.<br/><br/>@param msg The log message template.<br/>@param [args] Optional arguments for message formatting. The last argument can be an Error object.

<hr/>

#### trace

- `trace (msg:string, ..._:any[]):void`

  Logs a message at the TRACE level.<br/><br/>@param msg The log message template.<br/>@param [args] Optional arguments for message formatting. The last argument can be an Error object.

<hr/>

#### warn

- `warn (msg:string, ..._:any[]):void`

  Logs a message at the WARN level.<br/><br/>@param msg The log message template.<br/>@param [args] Optional arguments for message formatting. The last argument can be an Error object.

<hr/>

#### error

- `error (msg:string, ..._:any[]):void`

  Logs a message at the ERROR level.<br/><br/>@param msg The log message template.<br/>@param [args] Optional arguments for message formatting. The last argument can be an Error object.

