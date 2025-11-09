# API: uuid

> Source: `utils/uuid.ts`

Utility class for generating and validating Universally Unique Identifiers (UUIDs).
It typically provides access to Type 4 (randomly generated) UUIDs.

## Usage
```javascript
import { uuid } from "sdk/utils";
import { response } from "sdk/http";

response.println(uuid.random());
response.println(JSON.stringify(uuid.validate("14a3ddce-f86d-4f51-a2e0-6e497b94bbe5")));

response.flush();
response.close();

```


## Classes

### UUID

Utility class for generating and validating Universally Unique Identifiers (UUIDs).<br/>It typically provides access to Type 4 (randomly generated) UUIDs.

#### Methods

<hr/>

#### random

- `random ():string`

  Generates a new random UUID (Type 4).<br/>The generated string is typically in the format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx.<br/><br/>@returns A string representing the newly generated UUID.

<hr/>

#### validate

- `validate (input:string):boolean`

  Validates if the provided string conforms to the standard UUID format<br/>(e.g., a valid 36-character string including hyphens).<br/><br/>@param input The string to validate.<br/>@returns true if the input string is a valid UUID, false otherwise.

