# API: digest

> Source: `utils/digest.ts`

Calculate MD5 digest from input (text or byte array) and return result as byte array

## Usage
```javascript
import { digest } from "sdk/utils";
import { response } from "sdk/http";

response.println("" + digest.sha256("admin:admin"));
response.println("" + digest.sha512("YWRtaW46YWRtaW4="));

response.flush();
response.close();

```


## Classes

### Digest

#### Methods

<hr/>

#### md5

- `md5 (input:string|any[]):any[]`

  Calculate MD5 digest from input (text or byte array) and return result as byte array

<hr/>

#### md5AsNativeBytes

- `md5AsNativeBytes (input:string|any[]):any[]`

  Calculate MD5 digest from input (text or byte array) and return result as 16 elements java native byte array

<hr/>

#### md5Hex

- `md5Hex (input:string|any[]):string`

  Calculate MD5 digest from input (text or byte array) and return result as 32 character hex string

<hr/>

#### sha1

- `sha1 (input:string|any[]):any[]`

  Calculate SHA1 digest from input (text or byte array) and return result as 20 elements byte array

<hr/>

#### sha1AsNativeBytes

- `sha1AsNativeBytes (input:string|any[]):any[]`

  Calculate SHA1 digest from input (text or byte array) and return result as 20 elements java native byte array

<hr/>

#### sha256

- `sha256 (input:string|any[]):any[]`

  Calculate SHA256 digest from input (text or byte array) and return result as 32 elements byte array

<hr/>

#### sha256AsNativeBytes

- `sha256AsNativeBytes (input:string|any[]):any[]`

  Calculate SHA256 digest from input (text or byte array) and return result as 32 elements java native byte array

<hr/>

#### sha384

- `sha384 (input:string|any[]):any[]`

  Calculate SHA384 digest from input (text or byte array) and return result as 48 elements byte array

<hr/>

#### sha384AsNativeBytes

- `sha384AsNativeBytes (input:string|any[]):any[]`

  Calculate SHA384 digest from input (text or byte array) and return result as 48 elements java native byte array

<hr/>

#### sha512

- `sha512 (input:string|any[]):any[]`

  Calculate SHA512 digest from input (text or byte array) and return result as 64 elements byte array

<hr/>

#### sha512AsNativeBytes

- `sha512AsNativeBytes (input:string|any[]):string|any[])`

  Calculate SHA512 digest from input (text or byte array) and return result as 64 elements java native byte array

<hr/>

#### sha1Hex

- `sha1Hex (input:string|any[]):string`

  Calculate SHA1 digest from input (text or byte array) and return result as 40 character hex string

