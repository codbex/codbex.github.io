# API: env

> Source: `core/env.ts`

API Env
* Provides a static interface for accessing and listing environment variables exposed to the runtime.

## Usage
```javascript
import { env } from "sdk/core";
import { response } from "sdk/http";

let os = env.get("os.name");
response.println("[OS]: " + os);

response.flush();
response.close();
```


## Classes

### Env

Interface representing a map of environment variable names to their string values.

#### Methods

<hr/>

#### get

- `get (name:string):string|undefined`

  Retrieves the value of the environment variable with the specified name.<br/>@param name The name of the environment variable.<br/>@returns The variable's value as a string, or `undefined` if the variable is not set.

<hr/>

#### list

- `list ():EnvValues`

  Retrieves a map of all environment variables currently exposed to the application.<br/>@returns An {@link EnvValues} object containing all environment variables as key-value pairs.

