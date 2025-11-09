# API: client

> Source: `mongodb/client.ts`

Define a common type for input to functions that accept either a plain JavaScript object
(which will be implicitly converted to DBObject) or an existing DBObject wrapper instance.

## Usage
```javascript
import { client } from "sdk/mongodb";
import { response } from "sdk/http";

let mongoClient = client.getClient();

let collection = mongoClient.getDB("db").getCollection("people");

let person = client.createBasicDBObject()
    .append("_id", "jo")
    .append("name", "Jo Bloggs");
// or directly create an Object:
// const person = {"_id": "jo", "name": "Jo Bloggs"};
collection.insert(person);

let query = client.createBasicDBObject().append("_id", "jo");
let cursor = collection.find(query)
let result = cursor.one();

response.println("Result: " + result._id);
response.flush();
response.close();

```


## Classes

### DBObject

DBObject object represents a BSON document used for queries, insertions, and updates.<br/>It wraps the underlying native Java object.

#### Methods

<hr/>

#### append

- `append (key:string, value:any):DBObject`

  Appends a key-value pair to the DBObject.<br/>@param key The field name.<br/>@param value The value to append.<br/>@returns The current DBObject instance for chaining.

<hr/>

#### toJson

- `toJson ():any}`

  Converts the DBObject to a standard JavaScript object representation (JSON).<br/>@returns A plain JavaScript object.

<hr/>

#### markAsPartialObject

- `markAsPartialObject ():void`

  Marks the object as a partial object (used internally by MongoDB driver).

<hr/>

#### isPartialObject

- `isPartialObject ():boolean`

  Checks if the object is a partial object.<br/>@returns True if partial, false otherwise.

<hr/>

#### containsField

- `containsField (key:string):boolean`

  Checks if the DBObject contains a field with the specified key.<br/>@param key The field name.<br/>@returns True if the field exists, false otherwise.

<hr/>

#### get

- `get (key:string):any`

  Gets the value associated with the given key.<br/>@param key The field name.<br/>@returns The field value.

<hr/>

#### put

- `put (key:string, value:any):any`

  Puts a key-value pair into the DBObject.<br/>@param key The field name.<br/>@param value The value to put.<br/>@returns The previous value associated with the key, or null.

<hr/>

#### removeField

- `removeField (key:string):any`

  Removes a field from the DBObject.<br/>@param key The field name to remove.<br/>@returns The removed field value.

### Client

Client object wrapper for connecting to MongoDB.

#### Methods

<hr/>

#### getDB

- `getDB (name?:string):DB`

  Retrieves a database instance.<br/>@param name Optional name of the database. If not provided, the default database name is used.<br/>@returns A DB instance.

### DB

DB object wrapper for a MongoDB database.

#### Methods

<hr/>

#### getCollection

- `getCollection (name:string):DBCollection`

  Retrieves a collection instance from the database.<br/>@param name The name of the collection.<br/>@returns A DBCollection instance.

### DBCollection

DBCollection object wrapper for a MongoDB collection.

#### Methods

<hr/>

#### insert

- `insert (dbObject:DBInput):void`

  Inserts a document into the collection.<br/>@param dbObject The document to insert (can be a plain JS object or DBObject).

<hr/>

#### find

- `find (query?:DBInput, projection?:DBInput):DBCursor`

  Finds documents matching the query.<br/>@param query The query specification (can be a plain JS object or DBObject).<br/>@param projection The fields to include or exclude (can be a plain JS object or DBObject).<br/>@returns A DBCursor for iterating over results.

<hr/>

#### findOne

- `findOne (query:DBInput, projection:DBInput, sort:DBInput):DBObject`

  Finds a single document matching the query.<br/>@param query The query specification.<br/>@param projection The fields to include or exclude.<br/>@param sort The sorting specification.<br/>@returns The found document as a DBObject.

<hr/>

#### findOneById

- `findOneById (id:string, projection?:DBInput):DBObject`

  Finds a single document by its string ID.<br/>@param id The string ID of the document.<br/>@param projection The fields to include or exclude.<br/>@returns The found document as a DBObject.

<hr/>

#### count

- `count (query?:DBInput):number`

  Counts the number of documents in the collection, optionally filtered by a query.<br/>@param query Optional query to filter the count.<br/>@returns The number of documents.

<hr/>

#### getCount

- `getCount (query:DBInput):number`

  Gets the count of documents (alias for count).<br/>@param query Optional query to filter the count.<br/>@returns The number of documents.

<hr/>

#### createIndex

- `createIndex (keys:DBInput, options:DBInput):void`

  Creates an index on the collection.<br/>@param keys The index key specification.<br/>@param options Optional index options.

<hr/>

#### createIndexForField

- `createIndexForField (name:string):void`

  Creates an index on a single field by name.<br/>@param name The name of the field to index.

<hr/>

#### distinct

- `distinct (name:string, query:DBInput, keys:DBInput):void`

  Retrieves the distinct values for a specified field across a collection.<br/>NOTE: The signature in the original code seems slightly off compared to typical MongoDB drivers.<br/>This implementation follows the original structure using `keys.native` if `keys` is provided.<br/>@param name The field name.<br/>@param query Optional query to filter results.<br/>@param keys Optional keys to use for distinct (replaces 'name' if provided and query exists).

<hr/>

#### dropIndex

- `dropIndex (index:string|DBInput):void`

  Drops a specified index.<br/>@param index The name of the index or the DBObject representing the index keys.

<hr/>

#### dropIndexByName

- `dropIndexByName (name:string):void`

  Drops a specified index by name.<br/>@param name The name of the index.

<hr/>

#### dropIndexes

- `dropIndexes ():void`

  Drops all indexes on the collection.

<hr/>

#### remove

- `remove (query:DBInput):void`

  Removes documents from the collection matching the query.<br/>@param query The deletion query specification.

<hr/>

#### rename

- `rename (newName:string):void`

  Renames the collection.<br/>@param newName The new name for the collection.

<hr/>

#### save

- `save (dbObject:DBInput):void`

  Saves a document to the collection. If the document has an `_id`, it performs an update;<br/>otherwise, it performs an insert.<br/>@param dbObject The document to save.

<hr/>

#### update

- `update (query:DBInput, update:DBInput, upsert?:boolean, multi?:boolean):void`

  Updates documents in the collection matching the query.<br/>@param query The update query specification.<br/>@param update The update operation specification (e.g., {$set: {...}}).<br/>@param upsert If true, creates a new document if no documents match the query.<br/>@param multi If true, updates all documents matching the query; otherwise, only one.

<hr/>

#### updateMulti

- `updateMulti (query:DBInput, update:DBInput):void`

  Updates multiple documents in the collection matching the query.<br/>(Equivalent to calling `update` with `multi=true` and `upsert=true` implicitly).<br/>@param query The update query specification.<br/>@param update The update operation specification.

<hr/>

#### getNextId

- `getNextId ():number`

  Calculates the next sequential ID based on the largest existing `_id` in the collection.<br/>Assumes `_id` is a numeric field.<br/>@returns The next available sequential ID (starting at 1 if collection is empty).

<hr/>

#### generateUUID

- `generateUUID ():string`

  Generates a new random UUID (Universally Unique Identifier).<br/>@returns A string representing the UUID.

### DBCursor

DBCursor object wrapper for iterating over results of a MongoDB query.

#### Methods

<hr/>

#### one

- `one ():DBObject`

  Returns the single result from the cursor.<br/>@returns A DBObject representing the document.

<hr/>

#### batchSize

- `batchSize (numberOfElements:number):DBCursor`

  Sets the batch size for the cursor.<br/>@param numberOfElements The batch size.<br/>@returns The DBCursor instance for chaining.

<hr/>

#### getBatchSize

- `getBatchSize ():number`

  Gets the current batch size.<br/>@returns The batch size.

<hr/>

#### getCollection

- `getCollection ():DBCollection`

  Gets the collection associated with this cursor.<br/>@returns The DBCollection instance.

<hr/>

#### getCursorId

- `getCursorId ():string`

  Gets the cursor ID.<br/>@returns The cursor ID string.

<hr/>

#### getKeysWanted

- `getKeysWanted ():DBObject`

  Gets the projection object (fields wanted) used in the query.<br/>@returns The projection DBObject.

<hr/>

#### getLimit

- `getLimit ():number`

  Gets the limit set on the cursor.<br/>@returns The limit number.

<hr/>

#### close

- `close ():void`

  Closes the cursor.

<hr/>

#### hasNext

- `hasNext ():boolean`

  Checks if there is a next document in the cursor.<br/>@returns True if there is a next document, false otherwise.

<hr/>

#### next

- `next ():DBObject`

  Retrieves the next document in the cursor.<br/>@returns The next document as a DBObject.

<hr/>

#### getQuery

- `getQuery ():DBObject`

  Gets the query object used to create this cursor.<br/>@returns The query DBObject.

<hr/>

#### length

- `length ():number`

  Gets the number of documents matched by the query.<br/>@returns The total number of documents.

<hr/>

#### sort

- `sort (orderBy:DBInput):DBCursor`

  Specifies the order in which the query returns the results.<br/>@param orderBy The sorting specification (e.g., {field: 1} for ascending).<br/>@returns The DBCursor instance for chaining.

<hr/>

#### limit

- `limit (limit:number):DBCursor`

  Limits the number of results to be returned.<br/>@param limit The maximum number of documents to return.<br/>@returns The DBCursor instance for chaining.

<hr/>

#### min

- `min (min:number):DBCursor`

  Specifies the exclusive upper bound for a specific index.<br/>@param min The minimum value.<br/>@returns The DBCursor instance for chaining.

<hr/>

#### max

- `max (max:number):DBCursor`

  Specifies the exclusive upper bound for a specific index.<br/>@param max The maximum value.<br/>@returns The DBCursor instance for chaining.

<hr/>

#### maxTime

- `maxTime (maxTime:number):DBCursor`

  Sets a timeout for the server to execute the query.<br/>@param maxTime The maximum time in milliseconds.<br/>@returns The DBCursor instance for chaining.

<hr/>

#### size

- `size ():number`

  Gets the size of the result set.<br/>@returns The size number.

<hr/>

#### skip

- `skip (numberOfElements:number):DBCursor`

  Skips the specified number of documents.<br/>@param numberOfElements The number of documents to skip.<br/>@returns The DBCursor instance for chaining.

