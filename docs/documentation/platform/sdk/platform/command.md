# API: command

> Source: `platform/command.ts`

Provides a wrapper for executing system commands via the platform's CommandEngine.

## Usage
```javascript
import { command } from "sdk/platform";
import { response } from "sdk/http";

let result = command.execute("echo 'hello dirigible!'");

response.println("[Result]: " + result);
response.flush();
response.close();

```


## Classes

### Command

@class Command<br/>@description Static utility class for executing system commands.

#### Methods

<hr/>

#### execute

- `execute (command:string, options?:CommandOptions, add?:EnvironmentVariables, remove?:string[]):CommandOutput`

  Executes a system command with specified configuration, environment variables, and exclusions.<br/><br/>@param {string} command The command string to execute (e.g., "ls -l").<br/>@param {CommandOptions} [options] Optional configuration for the execution environment.<br/>@param {EnvironmentVariables} [add] Optional environment variables to add to the process.<br/>@param {string[]} [remove] Optional list of environment variable keys to remove from the process.<br/>@returns {CommandOutput} A structured object containing the exit code and output streams.

