# API: base64

> Source: `utils/base64.ts`

Utility class for performing **Base64 encoding and decoding** of data.
It handles conversion between JavaScript strings, JavaScript byte arrays (any[]),
and the native Java byte arrays required by the underlying Base64Facade.

## Usage
```javascript
import { base64 } from "sdk/utils";
import { response } from "sdk/http";

response.println(base64.encode("admin:admin"));
response.println(base64.decode("YWRtaW46YWRtaW4="));

response.flush();
response.close();

```


## Classes

### Base64

Utility class for performing **Base64 encoding and decoding** of data.<br/>It handles conversion between JavaScript strings, JavaScript byte arrays (any[]),<br/>and the native Java byte arrays required by the underlying Base64Facade.

#### Methods

<hr/>

#### encode

- `encode (input:string|any[]):string`

  Base64 encoding: Converts the input data (text or byte array) into a<br/>standard **Base64 encoded string representation**.<br/><br/>@param input The data to encode, either as a string or a JavaScript byte array (any[]).<br/>@returns The resulting Base64 encoded string.

<hr/>

#### encodeAsBytes

- `encodeAsBytes (input:string|any[]):any[]`

  Base64 encoding: Converts the input data (text or byte array) into a<br/>**JavaScript byte array (any[])** containing the Base64 encoded representation.<br/><br/>@param input The data to encode, either as a string or a JavaScript byte array (any[]).<br/>@returns The resulting byte array containing the Base64 encoded data.

<hr/>

#### encodeAsNativeBytes

- `encodeAsNativeBytes (input:string|any[]):any[]`

  Base64 encoding: Converts the input data (text or byte array) into a<br/>**native Java byte array** containing the Base64 encoded representation.<br/>This method is generally for internal use.<br/><br/>@param input The data to encode, either as a string or a JavaScript byte array (any[]).<br/>@returns The resulting native Java byte array containing the Base64 data.

<hr/>

#### decode

- `decode (input:string|any[]):any[]`

  Base64 decoding: Converts a Base64 input (text or byte array) back into<br/>the original **raw byte array (JavaScript any[])**.<br/><br/>@param input The Base64 data to decode, either as a string or a JavaScript byte array (any[]).<br/>@returns The decoded raw byte array (any[]). Returns null if decoding fails or input is null.

<hr/>

#### decodeAsNativeBytes

- `decodeAsNativeBytes (input:string|any[]):any[]`

  Base64 decoding: Converts a Base64 input (text or byte array) back into<br/>the original **native Java raw byte array**. This method is generally for internal use.<br/><br/>@param input The Base64 data to decode, either as a string or a JavaScript byte array (any[]).<br/>@returns The decoded native Java byte array.

