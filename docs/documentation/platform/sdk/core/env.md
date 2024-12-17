# Env

## Overview

The `Env` class provides an interface for interacting with environment variables from the platform. This API allows you to retrieve specific environment variable values and list all environment variables.

## Methods

### get

```javascript
public static get(name: string): string | undefined
```

Retrieve the value associated with the specified environment variable name.

**Example**

```javascript
const value = Env.get("MY_ENV_VARIABLE");
console.log(value); // Output: The value associated with "MY_ENV_VARIABLE" or undefined if not found
```

### list

```javascript
public static list(): EnvValues
```

List all environment variables as key-value pairs.

**Example**

```javascript
const envVariables = Env.list();
console.log(envVariables); // Output: { "VAR1": "value1", "VAR2": "value2", ... }
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**get(key)**   | Returns the value per key from the environments variables | *string*
**list()**   | Returns the list of the environments variables in JSON formatted string | *string*