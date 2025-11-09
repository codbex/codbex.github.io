# API: hex

> Source: `utils/hex.ts`

Utility class for performing **Hexadecimal encoding and decoding** of data.
It handles conversion between JavaScript strings, JavaScript byte arrays (any[]),
and the native Java byte arrays required by the underlying HexFacade.

## Usage
```javascript
import { hex } from "sdk/utils";
import { response } from "sdk/http";

response.println(hex.encode("Hex Encoded"));
response.println(hex.decode("48657820456e636f646564"));

response.flush();
response.close();

```


## Classes

### Hex

Utility class for performing **Hexadecimal encoding and decoding** of data.<br/>It handles conversion between JavaScript strings, JavaScript byte arrays (any[]),<br/>and the native Java byte arrays required by the underlying HexFacade.

#### Methods

<hr/>

#### encode

- `encode (input:string|any[]):string`

  Hexadecimal encoding: Converts the input data (text or byte array) into a<br/>standard **hexadecimal string representation**.<br/><br/>@param input The data to encode, either as a string or a JavaScript byte array (any[]).<br/>@returns The resulting hexadecimal string.

<hr/>

#### encodeAsBytes

- `encodeAsBytes (input:string|any[]):any[]`

  Hexadecimal encoding: Converts the input data (text or byte array) into a<br/>**JavaScript byte array (any[])** containing the hexadecimal representation.<br/><br/>@param input The data to encode, either as a string or a JavaScript byte array (any[]).<br/>@returns The resulting byte array containing the hexadecimal data.

<hr/>

#### encodeAsNativeBytes

- `encodeAsNativeBytes (input:string|any[]):any[]`

  Hexadecimal encoding: Converts the input data (text or byte array) into a<br/>**native Java byte array** containing the hexadecimal representation.<br/>This method is generally for internal use.<br/><br/>@param input The data to encode, either as a string or a JavaScript byte array (any[]).<br/>@returns The resulting native Java byte array.

<hr/>

#### decode

- `decode (input:string|any[]):any[]`

  Hexadecimal decoding: Converts a hexadecimal input (text or byte array) back into<br/>the original **raw byte array (JavaScript any[])**.<br/><br/>@param input The hexadecimal data to decode, either as a string or a JavaScript byte array (any[]).<br/>@returns The decoded raw byte array (any[]). Returns null if decoding fails or input is null.

<hr/>

#### decodeAsNativeBytes

- `decodeAsNativeBytes (input:string|any[]):string|any[])`

  Hexadecimal decoding: Converts a hexadecimal input (text or byte array) back into<br/>the original **native Java raw byte array**. This method is generally for internal use.<br/><br/>@param input The hexadecimal data to decode, either as a string or a JavaScript byte array (any[]).<br/>@returns The decoded native Java byte array.

