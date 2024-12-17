# Languages

## Introduction

The __codbex__ platform supports multiple programming languages for building applications. This documentation provides an overview of the languages supported with a focus on JavaScript (ES6 syntax), TypeScript, Python, and ABAP.

## Supported Languages

### JavaScript (ES6 Syntax)

The platform fully supports JavaScript, including the ES6 syntax. Developers can leverage modern JavaScript features to build scalable and maintainable applications. The platform also provides a rich set of APIs and tools for JavaScript development.

**Example**

```javascript
// ES6 Arrow Function
const addNumbers = (a, b) => a + b;

// Destructuring Assignment
const { firstName, lastName } = person;
```

### TypeScript

TypeScript, a superset of JavaScript, is also supported in the platform. Developers can use TypeScript to write strongly-typed code, enhancing code quality and maintainability. The TypeScript compiler is integrated into the platform, allowing seamless development.

**Example**

```typescript
// TypeScript Interface
interface Person {
  firstName: string;
  lastName: string;
}

// Strongly-typed Function
function greet(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}!`;
}
```

### Python

The platform extends its support to Python, enabling developers to write Python applications and scripts. The platform includes a Python runtime, and developers can utilize the standard Python libraries for various functionalities.

**Example**

```python
# Python Function
def add_numbers(a, b):
    return a + b

# List Comprehension
squares = [x**2 for x in range(10)]
```

### ABAP

ABAP (Advanced Business Application Programming) support is provided through [open-abap](https://github.com/open-abap) and [abaplint transpiler](https://github.com/abaplint/transpiler). Developers can write ABAP code and transpile it to JavaScript for execution on the __codbex__ platform.

**Example**

```abap
" ABAP Example
DATA(lv_text) = 'Hello World from ABAP!'.
WRITE: / lv_text.
```

The transpilation process converts ABAP code to JavaScript, allowing seamless integration into the platform.

### SAP HANA XS Classic (a.k.a XSK project)

The __codbex__ supports SAP HANA XS Classic development using and furter developing the XSK project. Developers can utilize XSK to manage database artifacts, define data models, develop server side XSJS services, and perform data provisioning within the SAP HANA XS Classic environment.

For more information on SAP HANA XS Classic development with the __codbex__ platform, refer to the [XSK project documentation](https://xsk.io).

**Example**

```javascript
$.response.contentType="application/json";
$.response.setBody("Hello World from XSJS");
$.response.status = $.net.http.OK;
```
