# API: bytes

> Source: `io/bytes.ts`

Provides utilities for converting and manipulating byte arrays,
facilitating conversions between JavaScript arrays, Java arrays, text, and integers.

## Usage
```javascript
import { bytes } from "sdk/io"

console.log(bytes.textToByteArray("Hello World"));
console.log(bytes.byteArrayToText([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]));

```


## Classes

### Bytes

The Bytes class provides static methods for byte array operations, primarily<br/>used to bridge data types between the JavaScript environment and native Java components.

#### Methods

<hr/>

#### toJavaBytes

- `toJavaBytes (bytes:any[]):any[]`

  Converts a native JavaScript byte array (an array of numbers) to a Java byte array.<br/>This is used internally by the API layer to pass data to Java methods.<br/><br/>@param bytes The JavaScript array of bytes (e.g., [104, 101, 108, 108, 111]).<br/>@returns A native Java byte array (internal representation).

<hr/>

#### toJavaScriptBytes

- `toJavaScriptBytes (internalBytes:any[]):any[]`

  Converts a native Java byte array back to a JavaScript array of numbers.<br/>This is used internally by the API layer to retrieve data from Java methods.<br/><br/>@param internalBytes The native Java byte array.<br/>@returns A JavaScript array containing the byte values (numbers).

<hr/>

#### textToByteArray

- `textToByteArray (text:string):any[]`

  Converts a standard text string into a byte array using the default platform encoding.<br/><br/>@param text The input text string.<br/>@returns A JavaScript array representing the bytes of the text.

<hr/>

#### byteArrayToText

- `byteArrayToText (data:any[]):string`

  Converts a byte array back into a text string.<br/><br/>@param data The JavaScript array of bytes.<br/>@returns The reconstructed text string.

<hr/>

#### intToByteArray

- `intToByteArray (value:number, byteOrder:"BIG_ENDIAN"|"LITTLE_ENDIAN"):any[]`

  Converts a 32-bit integer value into a byte array, respecting the specified byte order.<br/><br/>@param value The integer value to convert.<br/>@param byteOrder Specifies the byte ordering: "BIG_ENDIAN" (most significant byte first) or "LITTLE_ENDIAN" (least significant byte first).<br/>@returns A JavaScript array representing the 4-byte integer.

<hr/>

#### byteArrayToInt

- `byteArrayToInt (data:any[], byteOrder:"BIG_ENDIAN"|"LITTLE_ENDIAN"):number`

  Converts a 4-byte array back into a 32-bit integer value, respecting the specified byte order.<br/><br/>@param data The 4-byte array (JavaScript array of numbers).<br/>@param byteOrder Specifies the byte ordering used during conversion.<br/>@returns The reconstructed integer value.

