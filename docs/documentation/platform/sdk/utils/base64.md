# Base64

Base64 object is used to encode/decode in base64.

## Example Usage

```javascript
import { base64 } from "sdk/utils";
import { response } from "sdk/http";

response.println(base64.encode("admin:admin"));
response.println(base64.decode("YWRtaW46YWRtaW4="));
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**encode(input)**   | Encode an input string to Base64 | *string*
**decode(input)**   | Decode an input string from Base64 | *string*
