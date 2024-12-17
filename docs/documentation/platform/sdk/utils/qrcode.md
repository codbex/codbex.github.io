# QRCode

QRCode object is used to generate a JavaScript byte array based on an input string.

## Example Usage

```javascript
import { qrcode } from "sdk/utils";
import { response } from "sdk/http";

let qrCodeBytes = qrcode.generateQRCode("https://www.codbex.com");

console.log("QR Code Bytes: " + qrCodeBytes);

response.write(qrCodeBytes);
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**generateQRCode(input)**   | Generate a byte array from the input string | *byte array*
