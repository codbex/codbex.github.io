# Alphanumeric

Alphanumeric object is used to check whether a given string is alpha-numeric and to generate random strings.

## Example Usage

```javascript
import { alphanumeric } from "sdk/utils";
import { response } from "sdk/http";

response.println(alphanumeric.toAlphanumeric("@mystring123!#="));
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**toAlphanumeric(input)**   | Remove non-alpha-numeric letters | *string*
**randomString(length, charset)**   | Generates alpha-numeric string in a given charset and with given length | *string*
**alphanumeric(length, lowercase)**   | Generates alpha-numeric string | *string*
**alpha(length, lowercase)**   | Generates alpha string | *string*
**numeric(length)**   | Generates alpha-numeric string | *string*
**isNumeric(input)**   | Checks is the input is a numeric string | *string*
**isAlphanumeric(input)**   | Checks is the input is a alpha-numeric string | *string*

