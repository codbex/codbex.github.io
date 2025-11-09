# API: dao

> Source: `mongodb/dao.ts`

Reads a single entity by id, parsed into JSON object.
If requested as expanded the returned entity will comprise associated (dependent) entities too. Expand can be a string tha tis a valid association name defined in this dao orm or
an array of such names.

## Usage
```javascript
import { dao } from "sdk/mongodb";
import { response } from "sdk/http";

//create a DAO from configuration
let customers = dao.create({
    table: "CUSTOMERS",
    properties: [{
        name: "id",
        column: "ID",
        type: "BIGINT",
        id: true
    }, {
        name: "orgName",
        column: "ORG_NAME",
        type: "VARCHAR",
        required: true
    }, {
        name: "employeesNumber",
        column: "ORG_EMP_NUM",
        type: "INTEGER",
        required: true
    }, {
        name: "orgDescription",
        column: "ORG_DESCR",
        type: "VARCHAR",
        required: false
    }]
});

//Create a new customer entity
let customerId = customers.insert({
    orgName: "ACME",
    employeesNumber: 1000
});

response.println("Id: " + customerId);

//List all customer entities
let customersList = customers.list();

//Get a particular customer entity by its id
let customer = customers.find(customerId);

//Update a customer entity property
customer.orgDescription = "ACME is a company";
customers.update(customer);

//Delete a customer entity
customers.remove(customerId);

```


## Classes

### DAO

#### Methods

<hr/>

#### notify

- `notify (event, ...a):void`

<hr/>

#### createNoSQLEntity

- `createNoSQLEntity (entity):any`

<hr/>

#### validateEntity

- `validateEntity (entity, skip):void`

<hr/>

#### insert

- `insert (_entity)void`

<hr/>

#### update

- `update (entity)void`

<hr/>

#### remove

- `remove (id)void`

<hr/>

#### expand

- `expand (expansionPath, context)void`

<hr/>

#### find

- `find (id, expand, select)void`

  Reads a single entity by id, parsed into JSON object.<br/>If requested as expanded the returned entity will comprise associated (dependent) entities too. Expand can be a string tha tis a valid association name defined in this dao orm or<br/>an array of such names.

<hr/>

#### count

- `count ():number`

<hr/>

#### list

- `list (settings)void`

  list parameters:<br/>- $expand<br/>- $filter<br/>- $select<br/>- $sort<br/>- $order<br/>- $limit<br/>- $offset

<hr/>

#### existsTable

- `existsTable ():boolean`

<hr/>

#### createTable

- `createTable ():void`

<hr/>

#### dropTable

- `dropTable ():DAO`

