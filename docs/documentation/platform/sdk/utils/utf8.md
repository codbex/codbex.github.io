# UTF8

UTF8 object is used to encode/decode strings in UTF8.

## Basic Usage

```javascript
import { utf8 } from "sdk/utils";
import { response } from "sdk/http";

response.println(JSON.stringify(utf8.encode("mystring")));

response.flush();
response.close();
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**encode(input, charset)**   | Encode an input string to UTF8 | *string*
**decode(input)**   | Decode an input string as UTF8 | *string*
**bytesToString(bytes, offset, length)**   | Translate bytes to string in UTF8 | *string*
