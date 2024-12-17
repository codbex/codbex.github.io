# Assert

The Assert API provides utility functions for writing unit tests. These functions are used to make assertions about the behavior of the code under test.

## Functions

### assertTrue(condition, message)

Asserts that the given condition is true.

- `condition`: The condition to be checked.
- `message`: An optional message to be displayed if the assertion fails.

### assertFalse(condition, message)

Asserts that the given condition is false.

- `condition`: The condition to be checked.
- `message`: An optional message to be displayed if the assertion fails.

### assertNull(object, message)

Asserts that the given object is null.

- `object`: The object to be checked.
- `message`: An optional message to be displayed if the assertion fails.

### assertNotNull(object, message)

Asserts that the given object is not null.

- `object`: The object to be checked.
- `message`: An optional message to be displayed if the assertion fails.

### assertEquals(actual, expected, message)

Asserts that the actual object is equal to the expected object.

- `actual`: The actual object.
- `expected`: The expected object.
- `message`: An optional message to be displayed if the assertion fails.

## Example

```javascript
import { assert } from "sdk/assert";

// Example usage of assert functions
assert.assertTrue(true, "This assertion should pass");
assert.assertFalse(false, "This assertion should pass");
assert.assertNull(null, "This assertion should pass");
assert.assertNotNull({}, "This assertion should pass");
assert.assertEquals(42, 42, "This assertion should pass");
```

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**assertTrue(condition, message)**   | Assert as `true` | *-*
**assertFalse(condition, message)**   | Assert as `false` | *-*
**assertNull(object, message)**   | Assert if object is `null` | *-*
**assertNotNull(object, message)**   | Assert if object is `not null` | *-*
**assertEquals(actual, expected, message)**   | Assert if `actual` object is the same as the `expected` one | *-*
