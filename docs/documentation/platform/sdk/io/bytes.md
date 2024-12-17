# Bytes

The Bytes module provides utility functions for working with bytes, offering seamless conversion between text and byte arrays.

## Overview

### textToByteArray(text)

Converts a text string into a byte array.

- **Parameters:**
  - `text`: The text string to be converted.
  
- **Returns:** An array of bytes representing the text.

### byteArrayToText(bytes)

Converts a byte array into a text string.

- **Parameters:**
  - `bytes`: The byte array to be converted.
  
- **Returns:** A string representing the byte array as text.

### toJavaBytes(bytes)

Converts a native JavaScript byte array to a Java byte array, suitable for internal use by the API layer.

- **Parameters:**
  - `bytes`: The native JavaScript byte array to be converted.
  
- **Returns:** An array of Java bytes.

### toJavaScriptBytes(bytes)

Converts a Java byte array to a native JavaScript byte array, suitable for internal use by the API layer.

- **Parameters:**
  - `bytes`: The Java byte array to be converted.
  
- **Returns:** An array of JavaScript bytes.

### Example Usage

```javascript
import { bytes } from "sdk/io"

console.log(bytes.textToByteArray("Hello World"));
console.log(bytes.byteArrayToText([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]));
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**textToByteArray(text)**   | Converts a text to a byte array | *array of bytes*
**byteArrayToText(bytes)**   | Converts a byte array to text | *string*
**toJavaBytes(bytes)**   | Convert the native JavaScript byte array to Java one, to be used internally by the API layer | *array of Java bytes*
**toJavaScriptBytes(bytes)**   | Convert the Java byte array to a native JavaScript one, to be used internally by the API layer | *array of JavaScript bytes*