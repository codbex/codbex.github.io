# API: utf8

> Source: `utils/utf8.ts`

Utility class for performing UTF-8 encoding and decoding operations.
It provides methods to handle conversions between standard JavaScript strings and
raw UTF-8 byte representations.

## Usage
```javascript
import { utf8 } from "sdk/utils";
import { response } from "sdk/http";

response.println(JSON.stringify(utf8.encode("mystring")));

response.flush();
response.close();

```


## Classes

### UTF8

Utility class for performing UTF-8 encoding and decoding operations.<br/>It provides methods to handle conversions between standard JavaScript strings and<br/>raw UTF-8 byte representations.

#### Methods

<hr/>

#### encode

- `encode (input:string|any[]):string`

  Encodes the input (either a standard JavaScript string or a raw byte array)<br/>into a UTF-8 encoded string representation.<br/><br/>@param input The text string to be encoded, or a byte array to convert to its string representation.<br/>@returns The resulting UTF-8 encoded string.

<hr/>

#### decode

- `decode (input:string|any[]):string`

  Decodes the input (either a UTF-8 encoded string or a raw byte array)<br/>back into a standard JavaScript string.<br/><br/>@param input The UTF-8 encoded string or byte array to be decoded.<br/>@returns The resulting standard decoded string.

<hr/>

#### bytesToString

- `bytesToString (bytes:any[], offset:number, length:number):string`

  Decodes a specific segment of a raw byte array into a standard string<br/>using UTF-8 encoding.<br/><br/>@param bytes The raw byte array containing the UTF-8 data.<br/>@param offset The starting index (inclusive) from which to begin decoding.<br/>@param length The number of bytes to decode starting from the offset.<br/>@returns The decoded string segment.

