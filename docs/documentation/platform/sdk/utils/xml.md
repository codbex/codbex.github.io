# XML

XML object is used to transfrom from JSON to XML and vice versa.

## Example Usage

```javascript
import { xml } from "sdk/utils";
import { response } from "sdk/http";

const jsonInput = {
    firstName: "John",
    lastName: "Doe",
    bio: {
        age: 24,
        sex: "male"
    }
};

const xmlInput =
    "<person>" +
    "<firstName>John</firstName>" +
    "<lastName>Doe</lastName>" +
    "<bio>" +
    "<age>24</age>" +
    "<sex>male</sex>" +
    "</bio>" +
    "</person>";

response.println(xml.fromJson(JSON.stringify(jsonInput)));
response.println(xml.toJson(xmlInput));

response.flush();
response.close();
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**fromJson(json)**   | Converts a JSON to a XML string | *string*
**toJson(xml)**   | Converts a XML to JSON string | *string*
