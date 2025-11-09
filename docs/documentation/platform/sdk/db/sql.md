# API: sql

> Source: `db/sql.ts`

Union type representing all supported SQL data types.

## Usage
```javascript
import { sql } from "sdk/db";
import { response } from "sdk/http";

let script = sql.getDialect().select().column("FIRST_NAME").column("LAST_NAME").from("CUSTOMERS").build();

response.println(script);

response.flush();
response.close();

```


## Classes

### SQLBuilder

Main entry point for the SQL Builder. Acts as a factory for specific builders.

#### Methods

<hr/>

#### getDialect

- `getDialect (connection?:Connection):SQLBuilder`

  Factory method to get a dialect-specific SQLBuilder instance.

<hr/>

#### select

- `select ():SelectBuilder`

  Factory method to get a dialect-specific SQLBuilder instance.

<hr/>

#### insert

- `insert ():InsertBuilder`

<hr/>

#### update

- `update ():UpdateBuilder`

<hr/>

#### delete

- `delete ():DeleteBuilder`

<hr/>

#### nextval

- `nextval (name:string):NextvalBuilder`

<hr/>

#### create

- `create ():CreateBuilder`

<hr/>

#### drop

- `drop ():DropBuilder`

### SelectBuilder

Builder for SELECT statements.

#### Methods

<hr/>

#### prepareBuilder

- `prepareBuilder (builder:any):any`

  Builder for SELECT statements.

<hr/>

#### distinct

- `distinct ():SelectBuilder`

  Builder for SELECT statements.

<hr/>

#### forUpdate

- `forUpdate ():SelectBuilder`

<hr/>

#### column

- `column (column:string):SelectBuilder`

<hr/>

#### from

- `from (table:string, alias?:string):SelectBuilder`

<hr/>

#### join

- `join (table:string, on:string, alias?:string, parameters?:any|any[]):SelectBuilder`

<hr/>

#### innerJoin

- `innerJoin (table:string, on:string, alias?:string, parameters?:any|any[]):SelectBuilder`

<hr/>

#### outerJoin

- `outerJoin (table:string, on:string, alias?:string, parameters?:any|any[]):SelectBuilder`

<hr/>

#### leftJoin

- `leftJoin (table:string, on:string, alias?:string, parameters?:any|any[]):SelectBuilder`

<hr/>

#### rightJoin

- `rightJoin (table:string, on:string, alias?:string, parameters?:any|any[]):SelectBuilder`

<hr/>

#### fullJoin

- `fullJoin (table:string, on:string, alias?:string, parameters?:any|any[]):SelectBuilder`

<hr/>

#### where

- `where (condition:string, parameters?:any|any[]):SelectBuilder`

  Sets the WHERE condition.<br/>@param condition The SQL condition string (e.g., "column1 = ?").<br/>@param parameters Optional parameters to replace '?' in the condition.

<hr/>

#### order

- `order (column:string, asc:boolean=true):SelectBuilder`

<hr/>

#### group

- `group (column:string):SelectBuilder`

<hr/>

#### limit

- `limit (limit:number):SelectBuilder`

<hr/>

#### offset

- `offset (offset:number):SelectBuilder`

<hr/>

#### having

- `having (having:string):SelectBuilder`

<hr/>

#### union

- `union (select:string):SelectBuilder`

### InsertBuilder

Builder for INSERT statements.

#### Methods

<hr/>

#### prepareBuilder

- `prepareBuilder (builder:any):any`

  Builder for INSERT statements.

<hr/>

#### into

- `into (table:string):InsertBuilder`

  Builder for INSERT statements.

<hr/>

#### column

- `column (column:string):InsertBuilder`

<hr/>

#### value

- `value (value:string, parameters?:any|any[]):InsertBuilder`

  Sets the value for the last column specified.<br/>@param value The value placeholder (e.g., "?") or literal.<br/>@param parameters Optional parameters if a placeholder was used.

<hr/>

#### select

- `select (select:string):InsertBuilder`

### UpdateBuilder

Builder for UPDATE statements.

#### Methods

<hr/>

#### prepareBuilder

- `prepareBuilder (builder:any):any`

  Builder for UPDATE statements.

<hr/>

#### table

- `table (table:string):UpdateBuilder`

  Builder for UPDATE statements.

<hr/>

#### set

- `set (column:string, value:string, parameters?:any|any[]):UpdateBuilder`

  Sets a column to a value.<br/>@param column The column name.<br/>@param value The value placeholder (e.g., "?") or literal.<br/>@param parameters Optional parameters if a placeholder was used.

<hr/>

#### where

- `where (condition:string, parameters?:any|any[]):UpdateBuilder`

  Sets the WHERE condition for the update.<br/>@param condition The SQL condition string (e.g., "column1 = ?").<br/>@param parameters Optional parameters to replace '?' in the condition.

### DeleteBuilder

Builder for DELETE statements.

#### Methods

<hr/>

#### prepareBuilder

- `prepareBuilder (builder:any):any`

  Builder for DELETE statements.

<hr/>

#### from

- `from (table:string):DeleteBuilder`

  Builder for DELETE statements.

<hr/>

#### where

- `where (condition:string, parameters?:any|any[]):DeleteBuilder`

  Sets the WHERE condition for the deletion.<br/>@param condition The SQL condition string (e.g., "column1 = ?").<br/>@param parameters Optional parameters to replace '?' in the condition.

### NextvalBuilder

Builder for selecting the next value from a sequence.

#### Methods

<hr/>

#### prepareBuilder

- `prepareBuilder (builder:any):any`

### CreateBuilder

Builder for CREATE statements (Table, View, Sequence).

#### Methods

<hr/>

#### table

- `table (table:string):CreateTableBuilder`

  Builder for CREATE statements (Table, View, Sequence).

<hr/>

#### view

- `view (view:string):CreateViewBuilder`

<hr/>

#### sequence

- `sequence (sequence:string):CreateSequenceBuilder`

### CreateTableBuilder

Builder for CREATE TABLE statements.

#### Methods

<hr/>

#### column

- `column (name:string, type:DataType, isPrimaryKey=false, isNullable=true, isUnique=false, isIdentity=false, isFuzzyIndexEnabled=false, ...args:string[]):CreateTableBuilder`

  Adds a generic column definition.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnVarchar

- `columnVarchar (name:string, length:number, isPrimaryKey=false, isNullable=true, isUnique=false, isIdentity=false, ...args:string[]):CreateTableBuilder`

  Adds a VARCHAR column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnNvarchar

- `columnNvarchar (name:string, length:number, isPrimaryKey=false, isNullable=true, isUnique=false, isIdentity=false, ...args:string[]):CreateTableBuilder`

  Adds an NVARCHAR column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnChar

- `columnChar (name:string, length:number, isPrimaryKey=false, isNullable=true, isUnique=false, isIdentity=false, ...args:string[]):CreateTableBuilder`

  Adds a CHAR column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnDate

- `columnDate (name:string, isPrimaryKey=false, isNullable=true, isUnique=false, ...args:string[]):CreateTableBuilder`

  Adds a DATE column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnTime

- `columnTime (name:string, isPrimaryKey=false, isNullable=true, isUnique=false, ...args:string[]):CreateTableBuilder`

  Adds a TIME column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnTimestamp

- `columnTimestamp (name:string, isPrimaryKey=false, isNullable=true, isUnique=false, ...args:string[]):CreateTableBuilder`

  Adds a TIMESTAMP column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnInteger

- `columnInteger (name:string, isPrimaryKey=false, isNullable=true, isUnique=false, isIdentity=false, ...args:string[]):CreateTableBuilder`

  Adds an INTEGER column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnTinyint

- `columnTinyint (name:string, isPrimaryKey=false, isNullable=true, isUnique=false, ...args:string[]):CreateTableBuilder`

  Adds a TINYINT column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnBigint

- `columnBigint (name:string, isPrimaryKey=false, isNullable=true, isUnique=false, isIdentity=false, ...args:string[]):CreateTableBuilder`

  Adds a BIGINT column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnSmallint

- `columnSmallint (name:string, isPrimaryKey=false, isNullable=true, isUnique=false, ...args:string[]):CreateTableBuilder`

  Adds a SMALLINT column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnReal

- `columnReal (name:string, isPrimaryKey=false, isNullable=true, isUnique=false, ...args:string[]):CreateTableBuilder`

  Adds a REAL column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnDouble

- `columnDouble (name:string, isPrimaryKey=false, isNullable=true, isUnique=false, ...args:string[]):CreateTableBuilder`

  Adds a DOUBLE column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnBoolean

- `columnBoolean (name:string, isPrimaryKey=false, isNullable=true, isUnique=false, ...args:string[]):CreateTableBuilder`

  Adds a BOOLEAN column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnBlob

- `columnBlob (name:string, isNullable=true, ...args:string[]):CreateTableBuilder`

  Adds a BLOB column.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### columnDecimal

- `columnDecimal (name:string, precision:number, scale:number, isPrimaryKey=false, isNullable=true, isUnique=false, isIdentity=false, ...args:string[]):CreateTableBuilder`

  Adds a DECIMAL column with precision and scale.<br/>@param args Additional dialect-specific arguments passed as an array to native.

<hr/>

#### primaryKey

- `primaryKey (columns:string[], name?:string):CreateTableBuilder`

<hr/>

#### foreignKey

- `foreignKey (name:string, columns:string[], referencedTable:string, referencedColumns:string[], referencedTableSchema?:string):CreateTableBuilder`

<hr/>

#### unique

- `unique (name:string, columns:string[]):CreateTableBuilder`

<hr/>

#### check

- `check (name:string, expression:string):CreateTableBuilder`

### CreateViewBuilder

Builder for CREATE VIEW statements.

#### Methods

<hr/>

#### column

- `column (column:string):CreateViewBuilder`

<hr/>

#### asSelect

- `asSelect (select:string):CreateViewBuilder`

### CreateSequenceBuilder

Builder for CREATE SEQUENCE statements.

### DropBuilder

Builder for DROP statements (Table, View, Sequence).

#### Methods

<hr/>

#### table

- `table (table:string):DropTableBuilder`

  Builder for DROP statements (Table, View, Sequence).

<hr/>

#### view

- `view (view:string):DropViewBuilder`

<hr/>

#### sequence

- `sequence (sequence:string):DropSequenceBuilder`

### DropTableBuilder

Builder for DROP TABLE statements.

### DropViewBuilder

Builder for DROP VIEW statements.

### DropSequenceBuilder

Builder for DROP SEQUENCE statements.

