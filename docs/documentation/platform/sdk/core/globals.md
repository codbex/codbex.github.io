# API: globals

> Source: `core/globals.ts`

API Globals
* Provides a static interface for accessing and manipulating global application variables, typically backed by a central configuration or registry.

## Usage
```javascript
import { globals } from "sdk/core";
import { response } from "sdk/http";


globals.set("attr1", "value1");
let attr = globals.get("attr1");

response.println("[Attribute]: " + attr);
response.flush();
response.close();
```


## Classes

### Globals

Interface representing a map of global variable names to their string values.

#### Methods

<hr/>

#### get

- `get (name:string):string|undefined`

  Retrieves the value of the global variable with the specified name.<br/>@param name The name of the global variable.<br/>@returns The variable's value as a string, or `undefined` if the variable is not set or its value is null.

<hr/>

#### set

- `set (name:string, value:string):void`

  Sets the value of a global variable.<br/>If the variable already exists, its value is overwritten.<br/>@param name The name of the global variable.<br/>@param value The value to set (must be a string).

<hr/>

#### list

- `list ():GlobalsValues`

  Retrieves a map of all global variables currently defined in the application.<br/>@returns A {@link GlobalsValues} object containing all global variables as key-value pairs.

