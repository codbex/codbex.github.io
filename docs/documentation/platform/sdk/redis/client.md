# API: client

> Source: `redis/client.ts`

Redis Client

This class serves as a facade for common Redis operations, providing a convenient
JavaScript interface that wraps the underlying Java Redis client implementation.

## Usage
```javascript
import { client } from "sdk/redis";
import { response } from "sdk/http";

const redisClient = client.getClient();

redisClient.set("foo", "bar");

const data = redisClient.get("foo");

response.println(data);

```


## Classes

### Client

Redis Client<br/><br/>This class serves as a facade for common Redis operations, providing a convenient<br/>JavaScript interface that wraps the underlying Java Redis client implementation.

#### Methods

<hr/>

#### append

- `append (key:string, value:string):number`

  Appends a value to the value of a key. If the key does not exist,<br/>it is created and set to the initial value.<br/><br/>@param key The key to append to.<br/>@param value The value string to append.<br/>@returns The length of the string after the append operation.

<hr/>

#### bitcount

- `bitcount (key:string):number`

  Counts the number of set bits (1s) in the string value of a key.<br/><br/>@param key The key to perform the bitcount on.<br/>@returns The number of set bits.

<hr/>

#### decr

- `decr (key:string):number`

  Decrements the number stored at key by one.<br/><br/>@param key The key holding the numeric value.<br/>@returns The value of key after the decrement.

<hr/>

#### del

- `del (key:string):number`

  Deletes the specified key.<br/><br/>@param key The key to delete.<br/>@returns The number of keys that were removed (1 if successful, 0 otherwise).

<hr/>

#### exists

- `exists (key:string):boolean`

  Checks if the specified key exists.<br/><br/>@param key The key to check.<br/>@returns True if the key exists, false otherwise.

<hr/>

#### get

- `get (key:string):string`

  Gets the value of the specified key.<br/><br/>@param key The key to retrieve the value for.<br/>@returns The value of the key, or null if the key does not exist.

<hr/>

#### incr

- `incr (key:string):number`

  Increments the number stored at key by one.<br/><br/>@param key The key holding the numeric value.<br/>@returns The value of key after the increment.

<hr/>

#### keys

- `keys (pattern:string):string[]`

  Finds all keys matching the given pattern.<br/><br/>@param pattern The pattern to match keys against (e.g., "user:*").<br/>@returns An array of matching keys.

<hr/>

#### set

- `set (key:string, value:string):string`

  Sets the string value of a key.<br/><br/>@param key The key to set.<br/>@param value The string value to assign to the key.<br/>@returns 'OK' on success.

<hr/>

#### lindex

- `lindex (key:string, index:number):string`

  Gets an element from a list by its zero-based index.<br/><br/>@param key The key of the list.<br/>@param index The zero-based index (0 is the first element, -1 is the last).<br/>@returns The element at the specified index, or null if the index is out of range.

<hr/>

#### llen

- `llen (key:string):number`

  Gets the length of the list stored at the key.<br/><br/>@param key The key of the list.<br/>@returns The length of the list.

<hr/>

#### lpop

- `lpop (key:string):string`

  Removes and returns the first element of the list stored at the key (Left POP).<br/><br/>@param key The key of the list.<br/>@returns The first element of the list, or null when the list is empty.

<hr/>

#### lpush

- `lpush (key:string, ...value:string[]):string[])`

  Inserts all specified values at the head of the list stored at the key (Left PUSH).<br/><br/>@param key The key of the list.<br/>@param value One or more values to prepend to the list.<br/>@returns The new length of the list.

<hr/>

#### lrange

- `lrange (key:string, start:number, stop:number):string[]`

  Returns the specified elements of the list stored at the key.<br/><br/>@param key The key of the list.<br/>@param start The starting zero-based offset.<br/>@param stop The stopping zero-based offset.<br/>@returns An array of elements in the specified range.

<hr/>

#### rpop

- `rpop (key:string):string`

  Removes and returns the last element of the list stored at the key (Right POP).<br/><br/>@param key The key of the list.<br/>@returns The last element of the list, or null when the list is empty.

<hr/>

#### rpush

- `rpush (key:string, ...value:string[]):number`

  Inserts all specified values at the tail of the list stored at the key (Right PUSH).<br/><br/>@param key The key of the list.<br/>@param value One or more values to append to the list.<br/>@returns The new length of the list.

