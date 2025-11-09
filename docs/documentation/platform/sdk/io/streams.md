# API: streams

> Source: `io/streams.ts`

Provides core functionality for input/output stream management,
including stream creation, data transfer, and byte array handling.

## Classes

### Streams

The Streams class provides static utility methods for stream creation,<br/>manipulation, and data copying.

#### Methods

<hr/>

#### copy

- `copy (input:InputStream, output:OutputStream):void`

  Copies all bytes from the input stream to the output stream.<br/>This method is generally used for smaller streams.<br/><br/>@param input The source {@link InputStream}.<br/>@param output The destination {@link OutputStream}.

<hr/>

#### copyLarge

- `copyLarge (input:InputStream, output:OutputStream):void`

  Copies all bytes from the input stream to the output stream using a large buffer,<br/>suitable for large file transfers.<br/><br/>@param input The source {@link InputStream}.<br/>@param output The destination {@link OutputStream}.

<hr/>

#### getResourceAsByteArrayInputStream

- `getResourceAsByteArrayInputStream (path:string):InputStream`

  Creates a new {@link InputStream} from a resource accessible via the class loader.<br/>This is typically used to read bundled resources within the application runtime.<br/><br/>@param path The path to the resource.<br/>@returns A new {@link InputStream} instance for the resource.

<hr/>

#### createByteArrayInputStream

- `createByteArrayInputStream (data:any[]):InputStream`

  Creates a new {@link InputStream} from a JavaScript byte array (`any[]`).<br/><br/>@param data The JavaScript array of byte values (`number[]`).<br/>@returns A new {@link InputStream} instance initialized with the byte data.

<hr/>

#### createByteArrayOutputStream

- `createByteArrayOutputStream ():OutputStream`

  Creates a new {@link OutputStream} that writes data into an in-memory byte array.<br/>This is typically used as a buffer to capture output before processing it.<br/><br/>@returns A new {@link OutputStream} instance backed by a byte array.

<hr/>

#### createInputStream

- `createInputStream (native:any):InputStream`

  Wraps a native (Java) InputStream object into a new JavaScript {@link InputStream} instance.<br/><br/>@param native The underlying native InputStream object.<br/>@returns A new {@link InputStream} wrapper.

<hr/>

#### createOutputStream

- `createOutputStream (native:any):OutputStream`

  Wraps a native (Java) OutputStream object into a new JavaScript {@link OutputStream} instance.<br/><br/>Note: This method is not static in the original definition, but is placed here for completeness<br/>and consistency with other factory methods.<br/><br/>@param native The underlying native OutputStream object.<br/>@returns A new {@link OutputStream} wrapper.

### InputStream

Represents an input stream for reading bytes.<br/>This class wraps a native stream object and provides methods for reading data.

#### Methods

<hr/>

#### read

- `read ():number`

  Reads the next byte of data from this input stream.<br/>@returns The next byte of data, or -1 if the end of the stream is reached.

<hr/>

#### readBytes

- `readBytes ():any[]`

  Reads all remaining bytes from the stream and returns them as a JavaScript array.<br/><br/>@returns A JavaScript array (`number[]`) of the byte values.

<hr/>

#### readBytesNative

- `readBytesNative ():any[]`

  Reads all remaining bytes from the stream and returns the native Java byte array.<br/><br/>@returns The native Java byte array object.

<hr/>

#### readText

- `readText ():string`

  Reads all remaining bytes from the stream and converts them to a string<br/>using the platform's default character encoding.<br/><br/>@returns The content of the stream as a string.

<hr/>

#### close

- `close ():void`

  Closes this input stream and releases any system resources associated with it.

<hr/>

#### isValid

- `isValid ():boolean`

  Checks if the underlying native stream object is defined and non-null.<br/>@returns True if the stream is valid, false otherwise.

### OutputStream

Represents an output stream for writing bytes.<br/>This class wraps a native stream object and provides methods for writing data.

#### Methods

<hr/>

#### write

- `write (byte:number):void`

  Writes the specified byte to this output stream.<br/>@param byte The byte (as a number 0-255) to write.

<hr/>

#### writeBytes

- `writeBytes (data:any[]):void`

  Writes the entire content of a JavaScript byte array to this output stream.<br/><br/>@param data The JavaScript array (`number[]`) of byte values to write.

<hr/>

#### writeBytesNative

- `writeBytesNative (data:any[]):void`

  Writes the entire content of a native Java byte array to this output stream.<br/><br/>@param data The native Java byte array object to write.

<hr/>

#### writeText

- `writeText (text:string):void`

  Converts the string to bytes using the platform's default character encoding<br/>and writes them to this output stream.<br/><br/>@param text The string content to write.

<hr/>

#### close

- `close ():void`

  Closes this output stream and releases any system resources associated with it.

<hr/>

#### getBytes

- `getBytes ():any[]`

  Retrieves the content written to this stream as a JavaScript byte array.<br/>This is typically used with a ByteArrayOutputStream.<br/><br/>@returns A JavaScript array (`number[]`) of the byte values written to the stream.

<hr/>

#### getBytesNative

- `getBytesNative ():any[]`

  Retrieves the content written to this stream as the native Java byte array.<br/>This is typically used with a ByteArrayOutputStream.<br/><br/>@returns The native Java byte array object.

<hr/>

#### getText

- `getText ():string`

  Retrieves the content written to this stream as a string using the platform's<br/>default character encoding. This is typically used with a ByteArrayOutputStream.<br/><br/>@returns The content of the stream as a string.

<hr/>

#### isValid

- `isValid ():boolean`

  Checks if the underlying native stream object is defined and non-null.<br/>@returns True if the stream is valid, false otherwise.

