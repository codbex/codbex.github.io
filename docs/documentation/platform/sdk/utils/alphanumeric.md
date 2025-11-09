# API: alphanumeric

> Source: `utils/alphanumeric.ts`

Transforms a string to an alphanumeric sequence, stripping non-conformant characters for it.
@param string {String} the string to transform

## Usage
```javascript
import { alphanumeric } from "sdk/utils";
import { response } from "sdk/http";

response.println(alphanumeric.toAlphanumeric("@mystring123!#="));

response.flush();
response.close();

```


## Classes

### Alphanumeric

Transforms a string to an alphanumeric sequence, stripping non-conformant characters for it.<br/>@param string {String} the string to transform

#### Methods

<hr/>

#### toAlphanumeric

- `toAlphanumeric (string:string):string`

  Transforms a string to an alphanumeric sequence, stripping non-conformant characters for it.<br/>@param string {String} the string to transform

<hr/>

#### randomString

- `randomString (length:number, charset:string):string`

  Generates a random alphanumeric sequence with the specified length<br/>@param length {Integer} Defaults to 4

<hr/>

#### alphanumeric

- `alphanumeric (length:number, lowercase:boolean):string`

  Generates a random alphanumeric sequence with the specified length<br/>@param length {Integer} Defaults to 4<br/>@param lowercase {Boolean} Defaults to true

<hr/>

#### alpha

- `alpha (length:number, lowercase:boolean):string`

  Generates a random ASCII sequence with the specified length<br/>@param length {Integer} Defaults to 4<br/>@param lowercase {Boolean} Defaults to true

<hr/>

#### numeric

- `numeric (length:number):string`

  Generates a random numeric value<br/>@param length {Integer} Defaults to 4

<hr/>

#### isNumeric

- `isNumeric (str:string):boolean`

  Tests is the provided `str` argument is a valid numeric sequence.<br/>@param str {String} the string to test

<hr/>

#### isAlphanumeric

- `isAlphanumeric (str:string):boolean`

  Tests is the provided `str` argument is a valid alphanumeric sequence.<br/>@param str {String} the string to test

