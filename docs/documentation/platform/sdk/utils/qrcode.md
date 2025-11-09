# API: qrcode

> Source: `utils/qrcode.ts`

Utility class for generating QR codes.
It uses the underlying native Java QRCodeFacade to convert text into
a QR code image represented as a raw byte array.

## Usage
```javascript
import { qrcode } from "sdk/utils";
import { response } from "sdk/http";

let qrCodeBytes = qrcode.generateQRCode("https://www.dirigible.io");

console.log("QR Code Bytes: " + qrCodeBytes);

response.setContentType('image/png')
response.write(qrCodeBytes);
response.flush();
response.close();

```


## Classes

### QRCode

Utility class for generating QR codes.<br/>It uses the underlying native Java QRCodeFacade to convert text into<br/>a QR code image represented as a raw byte array.

#### Methods

<hr/>

#### generateQRCode

- `generateQRCode (text:string):any[]`

  Generates a QR code image byte array from the given text.<br/>The returned byte array represents the image data (e.g., PNG or JPEG format,<br/>depending on the native implementation's default output).<br/><br/>@param text The string content to be encoded in the QR code.<br/>@returns A **JavaScript byte array (any[])** containing the raw QR code image data.

