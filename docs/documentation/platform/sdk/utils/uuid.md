# UUID

UUID object is used to generate random universally unique identifiers.

## Basic Usage

```javascript
import { uuid } from "sdk/utils";
import { response } from "sdk/http";

response.println(uuid.random());
response.println(JSON.stringify(uuid.validate("14a3ddce-f86d-4f51-a2e0-6e497b94bbe5")));

response.flush();
response.close();
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**random()**   | Returns a random UUID string | *string*
**validate(input)**   | Validates whether the provided input is a valid UUID string | *boolean*
