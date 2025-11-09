# API: searcher

> Source: `indexing/searcher.ts`

Provides a static façade (`Searcher` class) for performing
term-based and time-based queries against a native indexing service.

## Usage
```javascript
import { writer, searcher } from "sdk/indexing";

writer.add("index2", "file1", "apache lucene", new Date(123));
writer.add("index2", "file2", "lucene - the search engine", new Date(234), { "name2": "value2" });
writer.add("index2", "file3", "search engine", new Date(345), { "name2": "value2" });

let found = searcher.between("index2", new Date(124), new Date(344));

console.log(JSON.stringify(found))

```


## Classes

### Searcher

The Searcher class provides methods for querying a specific index<br/>using keywords or date ranges.

#### Methods

<hr/>

#### search

- `search (index:string, term:string):string}[]`

  Executes a keyword search against a specified index.<br/>@param index The name or identifier of the index to search (e.g., 'documents', 'products').<br/>@param term The keyword or search phrase to look for.<br/>@returns An array of result objects, parsed from the native JSON string output.

<hr/>

#### before

- `before (index:string, date:Date):string}[]`

  Finds all entries in the index that were indexed before the specified date.<br/>@param index The name or identifier of the index.<br/>@param date The Date object representing the upper bound (exclusive) of the time range.<br/>@returns An array of result objects, parsed from the native JSON string output.

<hr/>

#### after

- `after (index:string, date:Date):string}[]`

  Finds all entries in the index that were indexed after the specified date.<br/>@param index The name or identifier of the index.<br/>@param date The Date object representing the lower bound (exclusive) of the time range.<br/>@returns An array of result objects, parsed from the native JSON string output.

<hr/>

#### between

- `between (index:string, lower:Date, upper:Date):string}[]`

  Finds all entries in the index that were indexed within the specified date range.<br/>@param index The name or identifier of the index.<br/>@param lower The Date object for the lower bound (exclusive).<br/>@param upper The Date object for the upper bound (exclusive).<br/>@returns An array of result objects, parsed from the native JSON string output.

