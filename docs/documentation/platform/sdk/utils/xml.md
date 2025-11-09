# API: xml

> Source: `utils/xml.ts`

Utility class for converting data between XML and JSON formats.
It automatically handles input serialization if an object is passed instead of a string.

## Usage
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


## Classes

### XML

Utility class for converting data between XML and JSON formats.<br/>It automatically handles input serialization if an object is passed instead of a string.

#### Methods

<hr/>

#### fromJson

- `fromJson (input:string|any):string`

  Converts a JSON input (either a JSON string or a raw JavaScript object) into an XML string.<br/><br/>Note: If a JavaScript object is passed, it is first stringified using JSON.stringify().<br/><br/>@param input The JSON string or object to be converted to XML.<br/>@returns The resulting XML content as a string.

<hr/>

#### toJson

- `toJson (input:string|any):string`

  Converts an XML input (expected as an XML string) into a JSON formatted string.<br/><br/>@param input The XML string to be converted to JSON.<br/>@returns The resulting JSON content as a string.

