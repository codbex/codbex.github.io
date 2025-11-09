# API: converter

> Source: `utils/converter.ts`

Utility class for converting and normalizing common data types (Date, Boolean)
within an object structure, typically for persistence or API consumption.

## Classes

### Converter

Utility class for converting and normalizing common data types (Date, Boolean)<br/>within an object structure, typically for persistence or API consumption.

#### Methods

<hr/>

#### setDate

- `setDate (obj:any, property:string):void`

  Converts a date property value within an object into a Unix timestamp (milliseconds since epoch).<br/><br/>@param obj The object containing the property to be converted.<br/>@param property The string name of the date property (e.g., 'dateCreated').<br/>@example<br/>// Before: { date: "2024-01-01T10:00:00Z" }<br/>Converter.setDate(obj, 'date');<br/>// After: { date: 1704096000000 }

<hr/>

#### setLocalDate

- `setLocalDate (obj:any, property:string):void`

  Converts a date property value into an ISO 8601 string, adjusted to represent<br/>the start of that day (local midnight) to handle timezone offsets consistently.<br/>This is typically used for fields that should represent a date *only*, without time of day ambiguity.<br/><br/>@param obj The object containing the property to be converted.<br/>@param property The string name of the date property (e.g., 'birthday').<br/>@example<br/>// If local timezone is EST (UTC-5):<br/>// Before: { date: "2024-01-01" }<br/>Converter.setLocalDate(obj, 'date');<br/>// After: { date: "2024-01-01T05:00:00.000Z" } (start of day UTC)

<hr/>

#### setBoolean

- `setBoolean (obj:any, property:string):void`

  Explicitly coerces a property value to a strict boolean type (`true` or `false`).<br/>This handles truthy/falsy values like `1`, `0`, `null`, and empty strings.<br/><br/>@param obj The object containing the property to be converted.<br/>@param property The string name of the boolean property (e.g., 'isActive').<br/>@example<br/>// Before: { flag: 1, other: null }<br/>Converter.setBoolean(obj, 'flag');<br/>Converter.setBoolean(obj, 'other');<br/>// After: { flag: true, other: false }

