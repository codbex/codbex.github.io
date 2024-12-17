# Configurations

## Overview

The `Configurations` class provides a set of methods to interact with the configuration settings using the platform. This API allows you to retrieve, modify, and manage configuration parameters for your application.

## Methods

### get

```javascript
public static get(key: string, defaultValue?: string): string | undefined
```

Retrieve the value associated with the specified configuration key. If the key is not found, it returns the specified default value, or undefined if not provided.

**Example**

```javascript
const value = Configurations.get("myConfigKey", "defaultValue");
console.log(value); // Output: "configuredValue" or "defaultValue" if not found
```

### set

```javascript
public static set(key: string, value: string): void
```

Set the value for the specified configuration key.

**Example**

```javascript
Configurations.set("myConfigKey", "configuredValue");
```

### remove

```javascript
public static remove(key: string): void
```

Remove the configuration entry associated with the specified key.

**Example**

```javascript
Configurations.remove("myConfigKey");
```

### getKeys

```javascript
public static getKeys(): string[]
```

Retrieve an array of all configuration keys.

**Example**

```javascript
const keys = Configurations.getKeys();
console.log(keys); // Output: ["key1", "key2", ...]
```

### load

```javascript
public static load(path: string): void
```

Load configuration settings from the specified path.

**Example**

```javascript
Configurations.load("/path/to/config/file.properties");
```

### update

```javascript
public static update(): void
```

Update the configuration settings.

**Example**

```javascript
Configurations.update();
```

### getOS

```javascript
public static getOS(): string
```

Retrieve the operating system name.

**Example**

```javascript
const osName = Configurations.getOS();
console.log(osName); // Output: "Windows", "Mac OS X", "Linux", "Solaris", etc.
```

### isOSWindows

```javascript
public static isOSWindows(): boolean
```

Check if the operating system is Windows.

**Example**

```javascript
const isWindows = Configurations.isOSWindows();
console.log(isWindows); // Output: true or false
```

### isOSMac

```javascript
public static isOSMac(): boolean
```

Check if the operating system is Mac OS.

**Example**

```javascript
const isMac = Configurations.isOSMac();
console.log(isMac); // Output: true or false
```

### isOSUNIX

```javascript
public static isOSUNIX(): boolean
```

Check if the operating system is UNIX-based.

**Example**

```javascript
const isUNIX = Configurations.isOSUNIX();
console.log(isUNIX); // Output: true or false
```

### isOSSolaris

```javascript
public static isOSSolaris(): boolean
```

Check if the operating system is Solaris.

**Example**

```javascript
const isSolaris = Configurations.isOSSolaris();
console.log(isSolaris); // Output: true or false
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**get(key, defaultValue)()** | Returns the value for the specified key, or the default value | *string*
**set(key, value)** | Sets a value, for the specified key | *-*
**getKeys()** | Returns an arrays of keys | *array of string*
**load(path)** | Loads a configuration from a properties file at *path* | *-* 
**update()** | Updates the loaded configurations | *-*