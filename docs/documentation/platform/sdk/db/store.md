# Store

## Overview

The `Store` API provides simple methods to interact with a data store. It allows you to save, retrieve, list, and remove entries from the data store.

## Methods

### save

```javascript
save(name: string, entry: any): void
```

Saves the provided entry to the data store.

**Parameters:**

* `name` (string): The name of the data store.
* `entry` (any): The entry to be saved. Should be a JavaScript object.

Example:

```javascript
Store.save("myDataStore", { id: 1, name: "John Doe", age: 30 });
```

### list

```javascript
list(name: string): any[]
```

Retrieves a list of entries from the data store.

**Parameters:**

* `name` (string): The name of the data store.
* Returns: An array containing the entries from the data store.

Example:

```javascript
const entries = Store.list("myDataStore");
console.log(entries);
```

### get

```javascript
get(name: string, id: string): any | undefined
```

Retrieves a specific entry from the data store based on its ID.

**Parameters:**

* `name` (string): The name of the data store.
* `id` (string): The ID of the entry to retrieve.
* Returns: The retrieved entry as a JavaScript object. If the entry is not found, undefined is returned.

Example:

```javascript
const entry = Store.get("myDataStore", "1");
console.log(entry);
```

### remove

```javascript
remove(name: string, id: string): void
```

Removes an entry from the data store based on its ID.

**Parameters:**

* `name` (string): The name of the data store.
* `id` (string): The ID of the entry to remove.

Example:

```javascript
Store.remove("myDataStore", "1");
```

### Example Usage

```javascript
import { Store } from "sdk/db";
import { Response } from "sdk/http";

let entry = { 'name': 'Peter', 'address': 'Sofia, Bulgaria' };

Store.save('Customer', entry);

let list = Store.list('Customer');

Response.println(JSON.stringify(list));
Response.flush();
Response.close();
```

The `Entity` description in the Hibernate `xml` format (e.g. Customer.hbm.xml as XML)


```xml
<hibernate-mapping>

    <class entity-name="Customer">

        <id name="id" type="long" column="ID">
            <generator class="sequence" />
        </id>

        <property name="name" column="NAME" type="string" />

        <property name="address" column="ADDRESS" type="string" />

    </class>

</hibernate-mapping>
```

    



### Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**save(name, entry)**   | Save the `entry` in the collection with `name` | *-*
**list(name)**   | List all the entris in the collection with `name` | *Array of Objects*
**get(name, id)**   | Get the entry from the collection with `name` by its `id` | *Object*
**deleteEntry(name, id)**   | Delete the entry from the collection with `name` by its `id` | *-*
