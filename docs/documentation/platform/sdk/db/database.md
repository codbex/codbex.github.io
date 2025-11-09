# API: database

> Source: `db/database.ts`

API Database

## Usage
```javascript
import { database } from "sdk/db";
import { response } from "sdk/http";

let connection = database.getConnection("SystemDB");
try {
    let statement = connection.prepareStatement("select * from DIRIGIBLE_EXTENSIONS");
    let resultSet = statement.executeQuery();
    while (resultSet.next()) {
        response.println("[path]: " + resultSet.getString("ARTEFACT_LOCATION"));
    }
    resultSet.close();
    statement.close();
} catch (e) {
    if (e instanceof Error) {
        console.error(e);
        response.println(e.message);
    } else {
        console.error("Something went wrong", e);
    }
} finally {
    connection.close();
}

response.flush();
response.close();

```


## Classes

### PreparedStatement

Statement object

#### Methods

<hr/>

#### close

- `close ():void`

  Statement object

<hr/>

#### getResultSet

- `getResultSet ():ResultSet`

<hr/>

#### execute

- `execute ():boolean`

<hr/>

#### executeQuery

- `executeQuery ():ResultSet`

<hr/>

#### executeUpdate

- `executeUpdate ():number`

<hr/>

#### setNull

- `setNull (index:number, sqlType:number):void`

<hr/>

#### setBinaryStream

- `setBinaryStream (parameterIndex:number, inputStream:InputStream, length?:number):void`

<hr/>

#### setBoolean

- `setBoolean (index:number, value?:boolean):void`

<hr/>

#### setByte

- `setByte (index:number, value?:any):void`

<hr/>

#### setBlob

- `setBlob (index:number, value?:any):void`

<hr/>

#### setClob

- `setClob (index:number, value?:any):void`

<hr/>

#### setNClob

- `setNClob (index:number, value?:any):void`

<hr/>

#### setBytesNative

- `setBytesNative (index:number, value?:any[]):void`

<hr/>

#### setBytes

- `setBytes (index:number, value?:any[]):void`

<hr/>

#### setDate

- `setDate (index:number, value?:string|Date):void`

<hr/>

#### setDouble

- `setDouble (index:number, value?:number):void`

<hr/>

#### setFloat

- `setFloat (index:number, value?:number):void`

<hr/>

#### setInt

- `setInt (index:number, value?:number):void`

<hr/>

#### setLong

- `setLong (index:number, value?:number):void`

<hr/>

#### setShort

- `setShort (index:number, value?:number):void`

<hr/>

#### setString

- `setString (index:number, value?:string):void`

<hr/>

#### setTime

- `setTime (index:number, value?:string|Date):void`

<hr/>

#### setTimestamp

- `setTimestamp (index:number, value?:string|Date):void`

<hr/>

#### setBigDecimal

- `setBigDecimal (index:number, value?:number):void`

<hr/>

#### setNString

- `setNString (index:number, value?:string):void`

<hr/>

#### addBatch

- `addBatch ():void`

<hr/>

#### executeBatch

- `executeBatch ():number[]`

<hr/>

#### getMetaData

- `getMetaData ():any`

<hr/>

#### getMoreResults

- `getMoreResults ():boolean`

<hr/>

#### getParameterMetaData

- `getParameterMetaData ():any`

<hr/>

#### getSQLWarning

- `getSQLWarning ():any`

<hr/>

#### isClosed

- `isClosed ():boolean`

### CallableStatement

#### Methods

<hr/>

#### getResultSet

- `getResultSet ():ResultSet`

<hr/>

#### executeQuery

- `executeQuery ():ResultSet`

<hr/>

#### executeUpdate

- `executeUpdate ():number`

<hr/>

#### registerOutParameter

- `registerOutParameter (parameterIndex:number, sqlType:keyoftypeofSQLTypes|number):void`

<hr/>

#### registerOutParameterByScale

- `registerOutParameterByScale (parameterIndex:number, sqlType:keyoftypeofSQLTypes|number, scale:number):void`

<hr/>

#### registerOutParameterByTypeName

- `registerOutParameterByTypeName (parameterIndex:number, sqlType:keyoftypeofSQLTypes|number, typeName:string):void`

<hr/>

#### wasNull

- `wasNull ():boolean`

<hr/>

#### getString

- `getString (parameterIndex:number):string`

<hr/>

#### getBoolean

- `getBoolean (parameterIndex:number):boolean`

<hr/>

#### getByte

- `getByte (parameterIndex:number):any`

<hr/>

#### getShort

- `getShort (parameterIndex:number):number`

  : byte

<hr/>

#### getInt

- `getInt (parameterIndex:number):number`

<hr/>

#### getLong

- `getLong (parameterIndex:number):number`

<hr/>

#### getFloat

- `getFloat (parameterIndex:number):number`

<hr/>

#### getDouble

- `getDouble (parameterIndex:number):number`

<hr/>

#### getDate

- `getDate (parameterIndex:number):Date`

<hr/>

#### getTime

- `getTime (parameterIndex:number):Date`

<hr/>

#### getTimestamp

- `getTimestamp (parameterIndex:number):Date`

<hr/>

#### getObject

- `getObject (parameterIndex:number):any`

<hr/>

#### getBigDecimal

- `getBigDecimal (parameterIndex:number):number`

<hr/>

#### getRef

- `getRef (parameterIndex:number):any`

  : sql.BigDecimal

<hr/>

#### getBytes

- `getBytes (parameterIndex:number):any[]`

  : sql.Ref

<hr/>

#### getBytesNative

- `getBytesNative (parameterIndex:number):any[]`

  : byte[]

<hr/>

#### getBlob

- `getBlob (parameterIndex:number):any`

  : byte[]

<hr/>

#### getBlobNative

- `getBlobNative (parameterIndex:number):any`

  : sql.Blob

<hr/>

#### getClob

- `getClob (parameterIndex:number):any`

  : sql.Blob

<hr/>

#### getNClob

- `getNClob (parameterIndex:string|number):any`

  : sql.Clob

<hr/>

#### getNString

- `getNString (parameterIndex:string|number):string`

  : sql.NClob

<hr/>

#### getArray

- `getArray (parameterIndex:string|number):any[]`

<hr/>

#### getURL

- `getURL (parameterIndex:string|number):any`

  : sql.Array

<hr/>

#### getRowId

- `getRowId (parameterIndex:string|number):any`

<hr/>

#### getSQLXML

- `getSQLXML (parameterIndex:string|number):any`

  : sql.RowId

<hr/>

#### setURL

- `setURL (parameterIndex:number, value:any):void`

  : sql.SQLXML

<hr/>

#### setNull

- `setNull (parameterIndex:number, sqlTypeStr:keyoftypeofSQLTypes|number, typeName?:string):void`

<hr/>

#### setBoolean

- `setBoolean (parameterIndex:number, value?:boolean):void`

<hr/>

#### setByte

- `setByte (parameterIndex:number, value?:any):void`

<hr/>

#### setShort

- `setShort (parameterIndex:number, value?:number):void`

<hr/>

#### setInt

- `setInt (parameterIndex:number, value?:number):void`

<hr/>

#### setLong

- `setLong (parameterIndex:number, value?:number):void`

<hr/>

#### setFloat

- `setFloat (parameterIndex:number, value?:number):void`

<hr/>

#### setDouble

- `setDouble (parameterIndex:number, value?:number):void`

<hr/>

#### setBigDecimal

- `setBigDecimal (parameterIndex:number, value?:number):void`

<hr/>

#### setString

- `setString (parameterIndex:number, value?:string):void`

<hr/>

#### setBytes

- `setBytes (parameterIndex:number, value?:any[]):void`

<hr/>

#### setDate

- `setDate (parameterIndex:number, value?:string|Date):void`

<hr/>

#### setTime

- `setTime (parameterIndex:number, value?:string|Date):void`

<hr/>

#### setTimestamp

- `setTimestamp (parameterIndex:number, value?:string|Date):void`

<hr/>

#### setAsciiStream

- `setAsciiStream (parameterIndex:number, inputStream:InputStream, length?:number):void`

<hr/>

#### setBinaryStream

- `setBinaryStream (parameterIndex:number, inputStream:InputStream, length?:number):void`

<hr/>

#### setObject

- `setObject (parameterIndex:number, value:any, targetSqlType?:number, scale?:number):void`

<hr/>

#### setRowId

- `setRowId (parameterIndex:number, value:number):void`

<hr/>

#### setNString

- `setNString (parameterIndex:number, value:string):void`

  : RowId

<hr/>

#### setSQLXML

- `setSQLXML (parameterIndex:number, value:any):void`

<hr/>

#### setBlob

- `setBlob (parameterIndex:number, value:any):void`

<hr/>

#### setClob

- `setClob (parameterIndex:number, value:any):void`

<hr/>

#### setNClob

- `setNClob (parameterIndex:number, value:any):void`

<hr/>

#### execute

- `execute ():boolean`

<hr/>

#### getMoreResults

- `getMoreResults ():boolean`

<hr/>

#### getParameterMetaData

- `getParameterMetaData ():any`

<hr/>

#### isClosed

- `isClosed ():boolean`

  : ParameterMetaData

<hr/>

#### close

- `close ():void`

  : ParameterMetaData

### ResultSet

ResultSet object

#### Methods

<hr/>

#### toJson

- `toJson (limited=false, stringify=false):any[]`

  Converts the ResultSet into a JSON array of objects.<br/>@param limited Whether to use limited JSON conversion (optimized).<br/>@param stringify Whether to return the JSON as a string or a parsed array.<br/>@returns A JavaScript array of objects representing the result set, or a string if stringify is true.

<hr/>

#### close

- `close ():void`

<hr/>

#### getBigDecimal

- `getBigDecimal (identifier:number|string):any`

<hr/>

#### getBoolean

- `getBoolean (identifier:number|string):boolean`

  : BigDecimal

<hr/>

#### getByte

- `getByte (identifier:number|string):any`

<hr/>

#### getBytes

- `getBytes (identifier:number|string):any[]`

  : byte

<hr/>

#### getBytesNative

- `getBytesNative (identifier:number|string):any[]`

  : byte[]

<hr/>

#### getBlob

- `getBlob (identifier:number|string):any`

  : byte[]

<hr/>

#### getBlobNative

- `getBlobNative (identifier:number|string):any`

  : sql.Blob

<hr/>

#### getClob

- `getClob (identifier:number|string):any`

  : sql.Blob

<hr/>

#### getNClob

- `getNClob (identifier:number|string):any`

  : sql.Clob

<hr/>

#### getDate

- `getDate (identifier:number|string):Date|undefined`

  : sql.NClob

<hr/>

#### getDouble

- `getDouble (identifier:number|string):number`

<hr/>

#### getFloat

- `getFloat (identifier:number|string):number`

<hr/>

#### getInt

- `getInt (identifier:number|string):number`

<hr/>

#### getLong

- `getLong (identifier:number|string):number`

<hr/>

#### getShort

- `getShort (identifier:number|string):number`

<hr/>

#### getString

- `getString (identifier:number|string):string`

<hr/>

#### getTime

- `getTime (identifier:number|string):Date|undefined`

<hr/>

#### getTimestamp

- `getTimestamp (identifier:number|string):Date|undefined`

<hr/>

#### isAfterLast

- `isAfterLast ():boolean`

<hr/>

#### isBeforeFirst

- `isBeforeFirst ():boolean`

<hr/>

#### isClosed

- `isClosed ():boolean`

<hr/>

#### isFirst

- `isFirst ():boolean`

<hr/>

#### isLast

- `isLast ():boolean`

<hr/>

#### next

- `next ():boolean`

<hr/>

#### getMetaData

- `getMetaData ():any`

<hr/>

#### getNString

- `getNString (columnIndex:number):string`

  : ResultSetMetaData

### Connection

Connection object wrapper around a native Java `Connection`.

#### Methods

<hr/>

#### isOfType

- `isOfType (databaseSystem:DatabaseSystem):boolean`

  Checks if the connection is for a specific database system.

<hr/>

#### getDatabaseSystem

- `getDatabaseSystem ():DatabaseSystem`

  Returns the type of the underlying database system as a {@link DatabaseSystem} enum.

<hr/>

#### prepareStatement

- `prepareStatement (sql:string):PreparedStatement`

  Creates a new {@link PreparedStatement} object for sending parameterized SQL statements to the database.

<hr/>

#### prepareCall

- `prepareCall (sql:string):CallableStatement`

  Creates a {@link CallableStatement} object for calling database stored procedures or functions.

<hr/>

#### close

- `close ():void`

  Creates a {@link CallableStatement} object for calling database stored procedures or functions.

<hr/>

#### commit

- `commit ():void`

<hr/>

#### getAutoCommit

- `getAutoCommit ():boolean`

<hr/>

#### getCatalog

- `getCatalog ():string`

<hr/>

#### getSchema

- `getSchema ():string`

<hr/>

#### getTransactionIsolation

- `getTransactionIsolation ():number`

<hr/>

#### isClosed

- `isClosed ():boolean`

<hr/>

#### isReadOnly

- `isReadOnly ():boolean`

<hr/>

#### isValid

- `isValid ():boolean`

<hr/>

#### rollback

- `rollback ():void`

<hr/>

#### setAutoCommit

- `setAutoCommit (autoCommit:boolean):void`

<hr/>

#### setCatalog

- `setCatalog (catalog:string):void`

<hr/>

#### setReadOnly

- `setReadOnly (readOnly:boolean):void`

<hr/>

#### setSchema

- `setSchema (schema:string):void`

<hr/>

#### setTransactionIsolation

- `setTransactionIsolation (transactionIsolation:number):void`

<hr/>

#### getMetaData

- `getMetaData ():any`

### Database

: DatabaseMetaData

#### Methods

<hr/>

#### getDataSources

- `getDataSources ():string[]`

  Returns a list of available data source names.

<hr/>

#### getMetadata

- `getMetadata (datasourceName?:string):DatabaseMetadata|undefined`

  Returns database metadata for the specified data source.

<hr/>

#### getProductName

- `getProductName (datasourceName?:string):string`

  Returns the product name of the underlying database system.

<hr/>

#### getConnection

- `getConnection (datasourceName?:string):Connection`

  Gets a new database connection object.

