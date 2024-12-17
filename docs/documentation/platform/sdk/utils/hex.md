# Hex

Hex object is used to encode/decode text/binary in hexadecimal format.

## Example Usage

```javascript
import { hex } from "sdk/utils";
import { response } from "sdk/http";

response.println(hex.encode("Hex Encoded"));
response.println(hex.decode("48657820456e636f646564"));
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**decode(input)**   | Decode an input string from HEX | *string*
**encode(input)**   | Encode an input string to HEX | *string*
