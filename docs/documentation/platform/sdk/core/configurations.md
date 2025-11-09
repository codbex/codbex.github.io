# API: configurations

> Source: `core/configurations.ts`

API Configurations
* Provides a static interface for accessing and manipulating configuration properties,
and checking the operating system type.

## Usage
```javascript
import { response } from "sdk/http";
import { configurations } from "sdk/core";

configurations.set("ENV_VAR_1", "ENV_VAR_1");
configurations.set("ENV_VAR_2", "ENV_VAR_2");

let credentials = {
    envVar1: configurations.get("ENV_VAR_1"),
    envVar2: configurations.get("ENV_VAR_2")
};

response.println(JSON.stringify(credentials));
```


## Classes

### Configurations

API Configurations<br/>* Provides a static interface for accessing and manipulating configuration properties,<br/>and checking the operating system type.

#### Methods

<hr/>

#### get

- `get (key:string, defaultValue?:string):string|undefined`

  Retrieves the configuration value associated with the given key.<br/>@param key The configuration key.<br/>@param defaultValue The optional default value to return if the key is not found.<br/>@returns The configuration value as a string, or `undefined` if the key is not found and no default is provided.

<hr/>

#### set

- `set (key:string, value:string):void`

  Sets the configuration value for the given key.<br/>If the key already exists, its value is overwritten.<br/>@param key The configuration key.<br/>@param value The configuration value to set.

<hr/>

#### remove

- `remove (key:string):void`

  Removes the configuration property associated with the given key.<br/>@param key The configuration key to remove.

<hr/>

#### getKeys

- `getKeys ():string[]`

  Retrieves a list of all current configuration keys.<br/>@returns An array of configuration keys (strings).

<hr/>

#### load

- `load (path:string):void`

  Loads configuration properties from a file at the specified path, overriding existing ones.<br/>@param path The file path to load configurations from.

<hr/>

#### update

- `update ():void`

  Reloads or updates the current configuration settings from their source (e.g., persistence layer).

<hr/>

#### getOS

- `getOS ():string`

  Retrieves the name of the current Operating System.<br/>@returns The OS name as a string (e.g., "Windows", "Linux", "Mac OS X").

<hr/>

#### isOSWindows

- `isOSWindows ():boolean`

  Checks if the current Operating System is Windows.<br/>@returns True if the OS is Windows, false otherwise.

<hr/>

#### isOSMac

- `isOSMac ():boolean`

  Checks if the current Operating System is Mac OS (or Mac OS X).<br/>@returns True if the OS is Mac, false otherwise.

<hr/>

#### isOSUNIX

- `isOSUNIX ():boolean`

  Checks if the current Operating System is a UNIX-like system (e.g., Linux, macOS, or others).<br/>@returns True if the OS is a UNIX variant, false otherwise.

<hr/>

#### isOSSolaris

- `isOSSolaris ():boolean`

  Checks if the current Operating System is Solaris.<br/>@returns True if the OS is Solaris, false otherwise.

