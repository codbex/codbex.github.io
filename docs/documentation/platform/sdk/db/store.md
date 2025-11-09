# API: store

> Source: `db/store.ts`

Defines the available comparison operators for query conditions.

## Usage
```javascript
// ---------
// Entity.ts
// ---------

@Entity("Customer")
@Table("CUSTOMER")
export class Customer {

    @Id()
    @Generated("sequence")
    @Column({ name: "CUSTOMER_ID", type: "long" })
    public id: number;

    @Column({ name: "CUSTOMER_NAME", type: "string" })
    public name: string;

    @Column({ name: "CUSTOMER_ADDRESS", type: "string" })
    public address: string;
}

// ---------
// Service.ts
// ---------

import { store } from "sdk/db";
import { response } from "sdk/http";

// Basic

let entry = { 'name': 'John', 'address': 'Sofia, Bulgaria' };

store.save('Customer', entry);

let list = store.list('Customer');

response.println(JSON.stringify(list));

// Advanced

let entry1 = { 'name': 'John', 'address': 'Sofia, Bulgaria' };
let entry2 = { 'name': 'Jane', 'address': 'Varna, Bulgaria' };
let entry3 = { 'name': 'Matthias', 'address': 'Berlin, Germany' };

store.save('Customer', entry1);
store.save('Customer', entry2);
store.save('Customer', entry3);

let list = store.list('Customer');
response.println("List all customers:");
response.println(JSON.stringify(list, null, 2));

response.println("");
response.println("Select customers with first name John:");
let select = store.query("from Customer c where c.name = 'John'");
response.println(JSON.stringify(select, null, 2));

response.println("");
response.println("Select native customers with first name John:");
let selectNative = store.queryNative("select * from Customer c where c.name = 'John'");
response.println(JSON.stringify(selectNative, null, 2));

response.println("");
response.println("Find customers by Example:");
let findByExample = store.find('Customer', {"name":"John"});
response.println(JSON.stringify(findByExample, null, 2));

response.println("");
response.println("List customers with filter options:");
let listWithOptions = store.list('Customer', {"conditions":[{"propertyName":"name","operator":"LIKE","value":"J%"}],"sorts":[{"propertyName":"name","direction":"ASC"}],"limit":"100"});
response.println(JSON.stringify(listWithOptions, null, 2));

response.flush();
response.close();

```


## Classes

### Store

Facade class for interacting with the underlying Dirigible Data Store.<br/>All methods serialize/deserialize JavaScript objects to/from JSON strings<br/>before interacting with the native Java facade.

#### Methods

<hr/>

#### save

- `save (name:string, entry:any):string|number`

  Saves a new entry to the data store.<br/>@param name The entity/table name.<br/>@param entry The JavaScript object to save.<br/>@returns The ID of the newly created entry (string or number).

<hr/>

#### upsert

- `upsert (name:string, entry:any):void`

  Inserts a new entry or updates an existing one if the ID is present.<br/>@param name The entity/table name.<br/>@param entry The JavaScript object to insert/update.

<hr/>

#### update

- `update (name:string, entry:any):void`

  Updates an existing entry.<br/>@param name The entity/table name.<br/>@param entry The JavaScript object with the ID and updated data.

<hr/>

#### list

- `list (name:string, options?:Options):any[]`

  Lists entries based on optional filtering, sorting, and pagination options.<br/>@param name The entity/table name.<br/>@param options Optional {@link Options} for query execution.<br/>@returns An array of JavaScript objects.

<hr/>

#### count

- `count (name:string, options?:Options):number`

  Counts the number of entries based on optional filtering options.<br/>@param name The entity/table name.<br/>@param options Optional {@link Options} for query execution.<br/>@returns The count of matching entries.

<hr/>

#### get

- `get (name:string, id:any):any|undefined`

  Retrieves a single entry by its ID.<br/>@param name The entity/table name.<br/>@param id The ID of the entry.<br/>@returns The entry object, or undefined if not found.

<hr/>

#### remove

- `remove (name:string, id:any):void`

  Deletes an entry by its ID.<br/>@param name The entity/table name.<br/>@param id The ID of the entry to remove.

<hr/>

#### find

- `find (name:string, example:any, limit:number=100, offset:number=0):any[]`

  Finds entries matching an example object (query-by-example).<br/>@param name The entity/table name.<br/>@param example An object containing properties to match.<br/>@param limit Maximum number of results to return.<br/>@param offset Number of results to skip.<br/>@returns An array of matching JavaScript objects.

<hr/>

#### query

- `query (name:string, limit:number=100, offset:number=0):any[]`

  Queries all entries for a given entity name with pagination.<br/>@param name The entity/table name.<br/>@param limit Maximum number of results to return.<br/>@param offset Number of results to skip.<br/>@returns An array of JavaScript objects.

<hr/>

#### queryNative

- `queryNative (name:string):any[]`

  Queries all entries for a given entity name without pagination.<br/>@param name The entity/table name.<br/>@returns An array of all JavaScript objects.

<hr/>

#### getEntityName

- `getEntityName (name:string):string`

  Gets the name of the entity associated with the store name.

<hr/>

#### getTableName

- `getTableName (name:string):string`

  Gets the underlying database table name for the entity.

<hr/>

#### getIdName

- `getIdName (name:string):string`

  Gets the property name used as the ID field in the entity object.

<hr/>

#### getIdColumn

- `getIdColumn (name:string):string`

  Gets the underlying database column name used for the ID field.

