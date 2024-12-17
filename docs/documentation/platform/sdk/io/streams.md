# Streams

The Streams API offers a set of classes and utilities tailored for working with streams in scripting environments. Streams are essential for handling data flow, enabling efficient reading from and writing to various sources and destinations. With the Streams API, developers gain access to functionality for managing input and output streams, performing operations such as reading, writing, buffering, and transforming data. This API facilitates seamless integration of stream-based operations into scripting workflows, enhancing data processing capabilities and enabling flexible handling of data streams.

### Basic Usage

```javascript
import { streams } from "sdk/io";
import { response } from "sdk/http";

let outputStream = streams.createByteArrayOutputStream();

outputStream.writeText("Some text content");

let bytes = outputStream.getBytes();
response.println("[Stream Content as Bytes]: " + bytes);

let text = String.fromCharCode.apply(String, bytes);
response.println("[Stream Content as Text]: " + text);

let inputStream = streams.createByteArrayInputStream(bytes);
let outputStreamCopy = streams.createByteArrayOutputStream();
streams.copy(inputStream, outputStreamCopy);
let copiedBytes = outputStreamCopy.getBytes();
let copiedText = String.fromCharCode.apply(String, copiedBytes);
response.println("[Stream Copied Content as Text]: " + copiedText);

response.flush();
response.close();
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**copy(inputStream, outputStream)**   | Copies an InputStream to an OutputStream | -
**createByteArrayInputStream(bytes)**   | Creates an ByteArrayInputStream from the array of bytes | *ByteArrayInputStream*
**createByteArrayOutputStream()**   | Creates an ByteArrayOutputStream | *ByteArrayOutputStream*


## Objects

---

### InputStream

Function     | Description | Returns
------------ | ----------- | --------
**readByte()**   | Reads a single byte from this InputStream | *byte*
**readBytes()**   | Returns the array of bytes contained in this InputStream | *array of byte*
**readText()**   | Returns a string representation of the array of bytes contained in this InputStream | *string*
**close()**   | Closes this InputStream to release the resources | -


### OutputStream

Function     | Description | Returns
------------ | ----------- | --------
**writeByte(byte)**   | Writes a single byte to this OutputStream | -
**writeBytes(bytes)**   | Writes the array of bytes to this OutputStream | *array of byte*
**readText()**   | Returns a string representation of the array of bytes contained in this InputStream | *string*
**close()**   | Closes this OutputStream to release the resources | -


### ByteArrayInputStream

::: info
Inherited from InputStream
:::

### ByteArrayOutputStream

::: info
Inherited from OutputStream and
:::

Function     | Description | Returns
------------ | ----------- | --------
**getBytes()**   | Returns the array of bytes contained in this ByteArrayOutputStream | *array of byte*
**getText()**   | Returns a string representation of the array of bytes contained in this ByteArrayOutputStream | *string*