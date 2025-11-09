# API: engines

> Source: `platform/engines.ts`

Interface defining the execution parameters expected by the Engine class.

## Usage
```javascript
import { Engine } from "sdk/platform";
import { response } from "sdk/http";

let result = new Engine("javascript").execute("project1", "hello.js", "", {});

response.println(JSON.stringify(result));
response.flush();
response.close();

```


## Classes

### Engine

@class Engine<br/>@description Represents a specific execution engine type (e.g., JavaScript, Groovy)<br/>and provides methods to interact with the platform's execution facade.

#### Methods

<hr/>

#### getTypes

- `getTypes ():string[]`

  Retrieves the list of available engine types from the platform.<br/>@returns {string[]} An array of supported engine type names.

<hr/>

#### execute

- `execute (projectName:string, projectFilePath:string, projectFilePathParam:string, parameters:ExecutionParameters, debug:boolean=false):any`

  Executes a project script or process using the configured engine type.<br/><br/>@param {string} projectName The name of the project.<br/>@param {string} projectFilePath The relative path to the main file to execute within the project (e.g., "lib/script.js").<br/>@param {string} projectFilePathParam A secondary file path parameter (often unused or context-specific).<br/>@param {ExecutionParameters} parameters An object containing key/value parameters to pass to the script context.<br/>@param {boolean} [debug=false] Whether to execute in debug mode.<br/>@returns {any} The result returned by the executed script.

