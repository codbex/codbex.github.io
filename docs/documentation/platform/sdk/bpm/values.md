# API: values

> Source: `bpm/values.ts`

Values
* Utility class for serializing (stringify) and deserializing (parse) complex variable values (like objects and arrays)
to and from JSON strings for storage or transfer across the API boundary.

## Classes

### Values

Values<br/>* Utility class for serializing (stringify) and deserializing (parse) complex variable values (like objects and arrays)<br/>to and from JSON strings for storage or transfer across the API boundary.

#### Methods

<hr/>

#### parseValue

- `parseValue (value:any):any`

  Attempts to parse a value as a JSON string.<br/>If the value is a valid JSON string (representing an object or array), it is parsed and returned as an object.<br/>If parsing fails (e.g., the value is a primitive or an invalid JSON string), the original value is returned.<br/>@param value The value to parse, typically a string read from the API.<br/>@returns The parsed object, or the original value if parsing fails.

<hr/>

#### parseValuesMap

- `parseValuesMap (variables:Map<string, any>):Map<string,any>`

  Iterates over the values of a Map and applies {@link #parseValue(any)} to each value.<br/>This is typically used to deserialize all variables returned from an API call.<br/>@param variables The Map of variable names to their values (which may be JSON strings).<br/>@returns The Map with all values deserialized where possible.

<hr/>

#### stringifyValue

- `stringifyValue (value:any):any`

  Serializes a value for persistence or API transfer.<br/>Arrays and objects are converted into their respective JSON string representations.<br/>Note: Arrays are additionally converted into a `java.util.List` of stringified elements for Java API compatibility.<br/>Primitive types are returned as is.<br/>@param value The value to serialize.<br/>@returns The JSON string representation, a Java List (for arrays), or the original primitive value.

<hr/>

#### stringifyValuesMap

- `stringifyValuesMap (variables:Map<string, any>):Map<string,any>`

  Iterates over the values of a Map and applies {@link #stringifyValue(any)} to each value.<br/>This is typically used to serialize a map of variables before sending them to an API call.<br/>@param variables The Map of variable names to their values.<br/>@returns The Map with all values serialized.

