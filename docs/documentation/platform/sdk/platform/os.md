# API: os

> Source: `platform/os.ts`

Utility class for retrieving operating system information and checking OS types.
It leverages the platform's access to Java's SystemUtils for system properties.

## Usage
```javascript
import { OS } from "sdk/platform";

if (OS.isWindows()) {
    // Windows logic here
}

if (OS.isUnix()) {
    // Unix logic here
}

const osName = OS.OS_NAME;
console.log("OS is: " + osName);

```


## Classes

### OS

@class OS<br/>@description Provides static methods and constants related to the operating system<br/>the underlying Java platform is running on.

#### Methods

<hr/>

#### isWindows

- `isWindows ():boolean`

  Checks if the operating system is a variant of Windows.<br/>@returns {boolean} True if the OS is Windows, false otherwise.

<hr/>

#### isUnix

- `isUnix ():boolean`

  Checks if the operating system is a variant of Unix (including Linux, macOS, and BSD).<br/>@returns {boolean} True if the OS is Unix-like, false otherwise.

