# API: context

> Source: `core/context.ts`

API Context
* Provides a static interface for accessing and manipulating key-value pairs in a global, application-wide context.

## Usage
```javascript
import { context } from "sdk/core";
import { response } from "sdk/http";

context.set("attr1", "value1");
let attr = context.get("attr1");

response.println("[Attribute]: " + attr);
response.flush();
response.close();
```


## Classes

### Context

API Context<br/>* Provides a static interface for accessing and manipulating key-value pairs in a global, application-wide context.

#### Methods

<hr/>

#### get

- `get (name:string):any|undefined`

  Retrieves the value associated with the specified name from the global context.<br/>@param name The name of the context variable.<br/>@returns The context value, or `undefined` if the name is not found or the value is null.

<hr/>

#### set

- `set (name:string, value:any):void`

  Stores a value in the global context under the specified name.<br/>If the name already exists, its value is overwritten.<br/>@param name The name of the context variable.<br/>@param value The value to store.

