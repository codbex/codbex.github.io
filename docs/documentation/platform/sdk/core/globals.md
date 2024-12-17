# Globals

## Overview

The `Globals` class provides an interface for interacting with global variables from the platform. This API allows you to retrieve specific global variable values, set global variables, and list all global variables.

## Methods

### get

```javascript
public static get(name: string): string | undefined
```

Retrieve the value associated with the specified global variable name.

**Example**

```javascript
const value = Globals.get("MY_GLOBAL_VARIABLE");
console.log(value); // Output: The value associated with "MY_GLOBAL_VARIABLE" or undefined if not found
```

### set

```javascript
public static set(name: string, value: string): void
```

Set the value for the specified global variable name.

**Example**

```javascript
Globals.set("MY_GLOBAL_VARIABLE", "globalValue");
```

### list

```javascript
public static list(): GlobalsValues
```

List all global variables as key-value pairs.

**Example**

```javascript
const globalVariables = Globals.list();
console.log(globalVariables); // Output: { "VAR1": "value1", "VAR2": "value2", ... }
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**get(key)**   | Returns the value per key from the environments variables | *string*
**list()**   | Returns the list of the environments variables in JSON formatted string | *string*