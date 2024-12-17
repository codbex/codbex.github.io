# Digest

Digest object is used to encript binary/text with algorithms like md5, sha256 and sha512.

## Example Usage

```javascript
import { digest } from "sdk/utils";
import { response } from "sdk/http";

response.println("" + digest.sha256("admin:admin"));
response.println("" + digest.sha512("YWRtaW46YWRtaW4="));
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**md5(input)**   | Calculates the MD5 digest and returns the value as a 16 element byte array | *array of byte*
**md5Hex(input)**   | Calculates the MD5 digest and returns the value as a 32 character hex string | *string*
**sha1(input)**   | Returns an SHA-1 digest | *array of byte*
**sha256(input)**   | Returns an SHA-256 digest | *array of byte*
**sha384(input)**   | Returns an SHA-384 digest | *array of byte*
**sha512(input)**   | Returns an SHA-512 digest | *array of byte*
**sha1Hex(input)**   | Calculates the SHA-1 digest and returns the value as a hex string | *string*
