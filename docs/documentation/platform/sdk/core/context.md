# Context

## Overview

The `Context` class provides a simple interface to interact with the context in your application. This API allows you to retrieve and set values within the application context.

## Methods

### get

```javascript
public static get(name: string): any | undefined
```

Retrieve the value associated with the specified context name.

**Example**

```javascript
const value = Context.get("myContextName");
console.log(value); // Output: The value associated with "myContextName" or undefined if not found
```

### set

```javascript
public static set(name: string, value: any): void
```

Set the value for the specified context name.

**Example**

```javascript
Context.set("myContextName", "contextValue");
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**get(key)**   | Returns the value per key from the context parameters | *string*
**set(key, value)**   | Sets the value per key to the context parameters | -
