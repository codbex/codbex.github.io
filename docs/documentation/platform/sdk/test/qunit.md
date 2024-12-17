# QUnit API

The QUnit API is used for writing and running unit tests in JavaScript. It provides a simple and effective way to test code, ensuring its correctness and reliability.

## Basic Usage

```javascript
import { qunit, runner } from "sdk/qunit";

qunit.module('Module 1:');

qunit.test("Test 1", function (assert) {
    assert.ok(true, 'Passing assertion');
    assert.ok(false, 'Failing assertion');
});

runner.run();
```

In the provided example, a test module named "Module 1" is defined, and within it, a test named "Test 1" is defined. The test function contains two assertions, one passing and one failing. Finally, the `runner.run()` function is called to execute the tests.

This will output the test results, indicating which tests passed and which ones failed.

## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**module(name)**   | Register a module by `name` | *string*
**test(title, group)**   | Register a group of tests | *string*