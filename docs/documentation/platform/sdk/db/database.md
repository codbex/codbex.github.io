# Database

## Introduction

The Database API provides a set of functions to interact with databases in the __codbex__ platform environment. This guide will walk you through the available methods and how to use them effectively.

## Methods

### getDataSources()

Retrieves the available data sources.

```javascript
// Example
const datasources = getDataSources();
console.log(datasources); // Outputs an array of available data sources
```

### getMetadata(datasourceName?)

Retrieves metadata for a specified data source. If no data source is provided, it retrieves metadata for all data sources.

```javascript
// Example
const metadata = getMetadata("exampleDS");
console.log(metadata); // Outputs metadata for the specified data source
```

### getProductName(datasourceName?)

Retrieves the product name for a specified data source. If no data source is provided, it retrieves the product name for all data sources.

```javascript
// Example
const productName = getProductName("exampleDS");
console.log(productName); // Outputs the product name for the specified data source
```

### getConnection(datasourceName?)

Establishes a connection to the specified data source. If no data source is provided, it establishes a connection to the default data source.

```javascript
// Example
const connection = getConnection("exampleDS");
// Use the connection object for further database operations
```

### isHanaDatabase(connection)

Checks if the provided database connection is of type SAP HANA database.

```javascript
// Example
const connection = ...; // obtain a database connection
const isHana = isHanaDatabase(connection);
```

### readBlobValue(value)

Reads a Blob value and returns it as a byte array.

```javascript
// Example
const blobValue = ...; // obtain a Blob value
const byteArray = readBlobValue(blobValue);
```

### createBlobValue(native, value)

Creates a new Blob value based on the provided byte array. The creation process depends on the database type.

```javascript
// Example
const nativeConnection = ...; // obtain the native connection
const byteValue = ...; // byte array data
const blob = createBlobValue(nativeConnection, byteValue);
```

### readClobValue(value)

Reads a Clob value and returns it as a string.

```javascript
// Example
const clobValue = ...; // obtain a Clob value
const stringValue = readClobValue(clobValue);
```

### createClobValue(native, value)

Creates a new Clob value based on the provided string. The creation process depends on the database type.

```javascript
// Example
const nativeConnection = ...; // obtain the native connection
const stringValue = ...; // string data
const clob = createClobValue(nativeConnection, stringValue);
```

### readNClobValue(value)

Reads an NClob value and returns it as a string.

```javascript
// Example
const nclobValue = ...; // obtain an NClob value
const stringValue = readNClobValue(nclobValue);
```

### createNClobValue(native, value)

Creates a new NClob value based on the provided string. The creation process depends on the database type.

```javascript
// Example
const nativeConnection = ...; // obtain the native connection
const stringValue = ...; // string data
const nclob = createNClobValue(nativeConnection, stringValue);
```

### getDateValue(value)

Converts the input value to a JavaScript Date object. If the input is a string, it is parsed into a Date.

```javascript
// Example
const dateString = "2024-02-25";
const dateObject = getDateValue(dateString);
```

### SQLTypes Constants

The `SQLTypes` constants represent various SQL data types. Each constant is associated with a specific integer value that corresponds to a particular SQL data type. Below is a description of each constant:

- `BOOLEAN` (16): Represents the SQL `BOOLEAN` data type.
- `DATE` (91): Represents the SQL `DATE` data type.
- `TIME` (92): Represents the SQL `TIME` data type.
- `TIMESTAMP` (93): Represents the SQL `TIMESTAMP` data type.
- `DOUBLE` (8): Represents the SQL `DOUBLE` data type.
- `FLOAT` (6): Represents the SQL `FLOAT` data type.
- `REAL` (7): Represents the SQL `REAL` data type.
- `TINYINT` (-6): Represents the SQL `TINYINT` data type.
- `SMALLINT` (5): Represents the SQL `SMALLINT` data type.
- `INTEGER` (4): Represents the SQL `INTEGER` data type.
- `BIGINT` (-5): Represents the SQL `BIGINT` data type.
- `VARCHAR` (12): Represents the SQL `VARCHAR` data type.
- `CHAR` (1): Represents the SQL `CHAR` data type.
- `CLOB` (2005): Represents the SQL `CLOB` data type.
- `BLOB` (2004): Represents the SQL `BLOB` data type.
- `VARBINARY` (-3): Represents the SQL `VARBINARY` data type.
- `DECIMAL` (3): Represents the SQL `DECIMAL` data type.
- `ARRAY` (2003): Represents the SQL `ARRAY` data type.
- `NVARCHAR` (-9): Represents the SQL `NVARCHAR` data type.
- `NCLOB` (2011): Represents the SQL `NCLOB` data type.
- `BIT` (-7): Represents the SQL `BIT` data type.


### Connection Object Methods

The `Connection` object provides methods for various operations on the database connection.

#### prepareStatement(sql)

Creates a `PreparedStatement` object for the given SQL query.

```javascript
// Example
const preparedStatement = connection.prepareStatement("SELECT * FROM example_table");
```

#### prepareCall(sql)

Creates a `CallableStatement` object for the given SQL query.

```javascript
// Example
const callableStatement = connection.prepareCall("call example_procedure()");
```

#### close()

Closes the database connection.

```javascript
// Example
connection.close();
```

#### commit()

Commits the current transaction.

```javascript
// Example
connection.commit();
```

#### getAutoCommit()

Retrieves the current auto-commit mode.

```javascript
// Example
const autoCommitMode = connection.getAutoCommit();
console.log(autoCommitMode); // Outputs true or false
```

#### getCatalog()

Retrieves the current catalog name.

```javascript
// Example
const catalogName = connection.getCatalog();
console.log(catalogName); // Outputs the catalog name
```

#### getSchema()

Retrieves the current schema name.

```javascript
// Example
const schemaName = connection.getSchema();
console.log(schemaName); // Outputs the schema name
```

#### getTransactionIsolation()

Retrieves the current transaction isolation level.

```javascript
// Example
const isolationLevel = connection.getTransactionIsolation();
console.log(isolationLevel); // Outputs the transaction isolation level
```

#### isClosed()

Checks whether the connection is closed.

```javascript
// Example
const isClosed = connection.isClosed();
console.log(isClosed); // Outputs true or false
```

#### isReadOnly()

Checks whether the connection is in read-only mode.

```javascript
// Example
const isReadOnly = connection.isReadOnly();
console.log(isReadOnly); // Outputs true or false
```

#### isValid()

Checks whether the connection is valid.

```javascript
// Example
const isValid = connection.isValid();
console.log(isValid); // Outputs true or false
```

#### rollback()

Rolls back the current transaction.

```javascript
// Example
connection.rollback();
```

#### setAutoCommit(autoCommit)

Sets the auto-commit mode for the connection.

```javascript
// Example
connection.setAutoCommit(true); // or connection.setAutoCommit(false);
```

#### setCatalog(catalog)

Sets the current catalog name for the connection.

```javascript
// Example
connection.setCatalog("new_catalog");
```

#### setReadOnly(readOnly)

Sets the read-only mode for the connection.

```javascript
// Example
connection.setReadOnly(true); // or connection.setReadOnly(false);
```

#### setSchema(schema)

Sets the current schema name for the connection.

```javascript
// Example
connection.setSchema("new_schema");
```

#### setTransactionIsolation(transactionIsolation)

Sets the transaction isolation level for the connection.

```javascript
// Example
connection.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
```

These methods provide essential functionalities for managing and interacting with the database connection in the platform. Depending on your use case, you may need to utilize these methods to control transactions, handle connection properties, and more.

### PreparedStatement Object Methods

The `PreparedStatement` object provides methods for managing and executing precompiled SQL statements.

#### close()

Closes the prepared statement.

```javascript
// Example
preparedStatement.close();
```

#### getResultSet()

Retrieves the result set of the prepared statement.

```javascript
// Example
const resultSet = preparedStatement.getResultSet();
```

#### execute()

Executes the SQL query.

```javascript
// Example
const result = preparedStatement.execute();
```

#### executeQuery()

Executes a `SELECT` SQL query and returns a `ResultSet` object.

```javascript
// Example
const result = preparedStatement.execute();
```

#### executeUpdate()

Executes an SQL `INSERT`, `UPDATE`, or `DELETE` query.

```javascript
// Example
const rowCount = preparedStatement.executeUpdate();
```

#### setNull(index, sqlType)

Sets a parameter to `NULL`.

```javascript
// Example
preparedStatement.setNull(1, SQLTypes.INTEGER);
```

#### setBinaryStream(parameter, inputStream, length)

Sets a binary stream as a parameter.

```javascript
// Example
preparedStatement.setBinaryStream(1, inputStream, length);
```

#### setBoolean(index, value)

Sets a Boolean parameter.

```javascript
// Example
preparedStatement.setBoolean(1, true);
```

#### setByte(index, value)

Sets a Byte parameter.

```javascript
// Example
preparedStatement.setByte(1, 42);
```

#### setBlob(index, value)

Sets a Blob parameter.

```javascript
// Example
preparedStatement.setBlob(1, blobValue);
```

#### setClob(index, value)

Sets a Clob parameter.

```javascript
// Example
preparedStatement.setClob(1, clobValue);
```

#### setNClob(index, value)

Sets an NClob parameter.

```javascript
// Example
preparedStatement.setNClob(1, nclobValue);
```

#### setBytesNative(index, value)

Sets a native byte parameter.

```javascript
// Example
preparedStatement.setBytesNative(1, byteArray);
```

#### setBytes(index, value)

Sets a byte array as a parameter.

```javascript
// Example
preparedStatement.setBytes(1, byteArray);
```

#### setDate(index, value)

Sets a Date parameter.

```javascript
// Example
preparedStatement.setDate(1, new Date());
```

#### setDouble(index, value)

Sets a Double parameter.

```javascript
// Example
preparedStatement.setDouble(1, 3.14);
```

#### setFloat(index, value)

Sets a Float parameter.

```javascript
// Example
preparedStatement.setFloat(1, 2.718);
```

#### setInt(index, value)

Sets an Integer parameter.

```javascript
// Example
preparedStatement.setInt(1, 42);
```

#### setLong(index, value)

Sets a Long parameter.

```javascript
// Example
preparedStatement.setLong(1, 123456789);
```

#### setShort(index, value)

Sets a Short parameter.

```javascript
// Example
preparedStatement.setShort(1, 7);
```

#### setString(index, value)

Sets a String parameter.

```javascript
// Example
preparedStatement.setString(1, "example");
```

#### setTime(index, value)

Sets a Time parameter.

```javascript
// Example
preparedStatement.setTime(1, new Date());
```

#### setTimestamp(index, value)

Sets a Timestamp parameter.

```javascript
// Example
preparedStatement.setTimestamp(1, new Date());
```

#### setBigDecimal(index, value)

Sets a BigDecimal parameter.

```javascript
// Example
preparedStatement.setBigDecimal(1, bigDecimalValue);
```

#### setNString(index, value)

Sets an NString parameter.

```javascript
// Example
preparedStatement.setNString(1, "example");
```

#### addBatch()

Adds the current set of parameters to the batch for later execution.

```javascript
// Example
preparedStatement.addBatch();
```

#### executeBatch()

Executes the batch of commands.

```javascript
// Example
const results = preparedStatement.executeBatch();
```
#### getMetaData()

Retrieves the metadata for the prepared statement.

```javascript
// Example
const metaData = preparedStatement.getMetaData();
```

#### getMoreResults()

Moves to the next result set, if available.

```javascript
// Example
const hasMoreResults = preparedStatement.getMoreResults();
```

#### getParameterMetaData()

Retrieves the parameter metadata for the prepared statement.

```javascript
// Example
const parameterMetaData = preparedStatement.getParameterMetaData();
```

#### getSQLWarning()

Retrieves the first warning reported by calls on this statement.

```javascript
// Example
const sqlWarning = preparedStatement.getSQLWarning();
```

#### isClosed()

Checks if the prepared statement is closed.

```javascript
// Example
const isClosed = preparedStatement.isClosed();
```

These methods provide a comprehensive set of functionalities for handling prepared statements, setting parameters, executing queries, and managing result sets. Depending on your use case, you can leverage these methods to interact with your database effectively.

### CallableStatement Object Methods

The `CallableStatement` object provides methods for executing SQL stored procedures.

#### getResultSet()

Retrieves the result set of the callable statement.

```javascript
// Example
const resultSet = callableStatement.getResultSet();
```

#### executeQuery()

Executes a stored procedure that returns a result set.

```javascript
// Example
const resultSet = callableStatement.executeQuery();
```

#### executeUpdate()

Executes a stored procedure that performs an update.

```javascript
// Example
const rowCount = callableStatement.executeUpdate();
```

#### registerOutParameter(parameterIndex, sqlType)

Registers the output parameter with the given SQL type.

```javascript
// Example
callableStatement.registerOutParameter(1, SQLTypes.INTEGER);
```

#### registerOutParameterByScale(parameterIndex, sqlType, scale)

Registers the output parameter with the given SQL type and scale.

```javascript
// Example
callableStatement.registerOutParameterByScale(1, SQLTypes.DECIMAL, 2);
```

#### registerOutParameterByTypeName(parameterIndex, sqlType, typeName)

Registers the output parameter with the given SQL type and type name.

```javascript
// Example
callableStatement.registerOutParameterByTypeName(1, SQLTypes.VARCHAR, "VARCHAR");
```

#### wasNull()

Determines if the last column read was NULL.

```javascript
// Example
const isNull = callableStatement.wasNull();
```

#### getString(parameter)

Retrieves the value of the specified parameter as a String.

```javascript
// Example
const value = callableStatement.getString(1);
```

#### getBoolean(parameter)
Retrieves the value of the specified parameter as a Boolean.

```javascript
// Example
const value = callableStatement.getBoolean(1);
```

#### getByte(parameter)
Retrieves the value of the specified parameter as a Byte.

```javascript
// Example
const value = callableStatement.getByte(1);
```

#### getShort(parameter)

Retrieves the value of the specified parameter as a Short.

```javascript
// Example
const value = callableStatement.getShort(1);
```

#### getInt(parameter)

Retrieves the value of the specified parameter as an Integer.

```javascript
// Example
const value = callableStatement.getInt(1);
```

#### getLong(parameter)

Retrieves the value of the specified parameter as a Long.

```javascript
// Example
const value = callableStatement.getLong(1);
```

#### getFloat(parameter)

Retrieves the value of the specified parameter as a Float.

```javascript
// Example
const value = callableStatement.getFloat(1);
```

#### getDouble(parameter)

Retrieves the value of the specified parameter as a Double.

```javascript
// Example
const value = callableStatement.getDouble(1);
```

#### getDate(parameter)

Retrieves the value of the specified parameter as a Date.

```javascript
// Example
const value = callableStatement.getDate(1);
```

#### getTime(parameter)

Retrieves the value of the specified parameter as a Time.

```javascript
// Example
const value = callableStatement.getTime(1);
```

#### getTimestamp(parameter)

Retrieves the value of the specified parameter as a Timestamp.

```javascript
// Example
const value = callableStatement.getTimestamp(1);
```

#### getObject(parameter)

Retrieves the value of the specified parameter as an Object.

```javascript
// Example
const value = callableStatement.getObject(1);
```

#### getBigDecimal(parameter)

Retrieves the value of the specified parameter as a BigDecimal.

```javascript
// Example
const value = callableStatement.getBigDecimal(1);
```

#### getRef(parameter)

Retrieves the value of the specified parameter as a Ref.

```javascript
// Example
const value = callableStatement.getRef(1);
```

#### getBytes(parameter)

Retrieves the value of the specified parameter as a byte array.

```javascript
// Example
const value = callableStatement.getBytes(1);
```

#### getBytesNative(parameter)

Retrieves the value of the specified parameter as a byte array in native format.

```javascript
// Example
const value = callableStatement.getBytesNative(1);
```

#### getBlob(parameter)

Retrieves the value of the specified parameter as a Blob.

```javascript
// Example
const value = callableStatement.getBlob(1);
```

#### getBlobNative(parameter)

Retrieves the value of the specified parameter as a Blob in native format.

```javascript
// Example
const value = callableStatement.getBlobNative(1);
```

#### getClob(parameter)

Retrieves the value of the specified parameter as a Clob.

```javascript
// Example
const value = callableStatement.getClob(1);
```

#### getNClob(parameter)

Retrieves the value of the specified parameter as an NClob.

```javascript
// Example
const value = callableStatement.getNClob(1);
```

#### getNString(parameter)

Retrieves the value of the specified parameter as an NString.

```javascript
// Example
const value = callableStatement.getNString(1);
```

#### getArray(parameter)

Retrieves the value of the specified parameter as an Array.

```javascript
// Example
const value = callableStatement.getArray(1);
```

#### getURL(parameter)

Retrieves the value of the specified parameter as a URL.

```javascript
// Example
const value = callableStatement.getURL(1);
```

#### getRowId(parameter)

Retrieves the value of the specified parameter as a RowId.

```javascript
// Example
const value = callableStatement.getRowId(1);
```

#### getSQLXML(parameter)

Retrieves the value of the specified parameter as an SQLXML.

```javascript
// Example
const value = callableStatement.getSQLXML(1);
```

#### setURL(parameter, value)

Sets the value of the specified parameter as a URL.

```javascript
// Example
callableStatement.setURL(1, "https://example.com");
```

#### setNull(parameter, sqlTypeStr, typeName)

Sets the value of the specified parameter to NULL.

```javascript
// Example
callableStatement.setNull(1, SQLTypes.INTEGER);
```

#### setBoolean(parameter, value)

Sets the value of the specified parameter as a Boolean.

```javascript
// Example
callableStatement.setBoolean(1, true);
```

#### setByte(parameter, value)

Sets the value of the specified parameter as a Byte.

```javascript
// Example
callableStatement.setByte(1, 42);
```

#### setShort(parameter, value)

Sets the value of the specified parameter as a Short.

```javascript
// Example
callableStatement.setShort(1, 7);
```

#### setInt(parameter, value)

Sets the value of the specified parameter as an Integer.

```javascript
// Example
callableStatement.setInt(1, 42);
```

#### setLong(parameter, value)

Sets the value of the specified parameter as a Long.

```javascript
// Example
callableStatement.setLong(1, 123456789);
```

#### setFloat(parameter, value)

Sets the value of the specified parameter as a Float.

```javascript
// Example
callableStatement.setFloat(1, 2.718);
```

#### setDouble(parameter, value)

Sets the value of the specified parameter as a Double.

```javascript
// Example
callableStatement.setDouble(1, 3.14);
```

#### setBigDecimal(parameter, value)

Sets the value of the specified parameter as a BigDecimal.

```javascript
// Example
callableStatement.setBigDecimal(1, bigDecimalValue);
```

#### setString(parameter, value)

Sets the value of the specified parameter as a String.

```javascript
// Example
callableStatement.setString(1, "example");
```

#### setBytes(parameter, value)

Sets the value of the specified parameter as a byte array.

```javascript
// Example
callableStatement.setBytes(1, byteArray);
```

#### setDate(parameter, value)

Sets the value of the specified parameter as a Date.

```javascript
// Example
callableStatement.setDate(1, new Date());
```

#### setTime(parameter, value)

Sets the value of the specified parameter as a Time.

```javascript
// Example
callableStatement.setTime(1, new Date());
```

#### setTimestamp(parameter, value)

Sets the value of the specified parameter as a Timestamp.

```javascript
// Example
callableStatement.setTimestamp(1, new Date());
```

#### setAsciiStream(parameter, inputStream, length)

Sets the value of the specified parameter as an ASCII stream.

```javascript
// Example
callableStatement.setAsciiStream(1, inputStream, length);
```

#### setBinaryStream(parameter, inputStream, length)

Sets the value of the specified parameter as a binary stream.

```javascript
// Example
callableStatement.setBinaryStream(1, inputStream, length);
```

#### setObject(parameter, value, targetSqlType, scale)

Sets the value of the specified parameter as an Object.

```javascript
// Example
callableStatement.setObject(1, value, SQLTypes.INTEGER, 2);
```

#### setRowId(parameter, value)

Sets the value of the specified parameter as a RowId.

```javascript
// Example
callableStatement.setRowId(1, rowIdValue);
```

#### setNString(parameter, value)

Sets the value of the specified parameter as an NString.

```javascript
// Example
callableStatement.setNString(1, "example");
```

#### setSQLXML(parameter, value)

Sets the value of the specified parameter as an SQLXML.

```javascript
// Example
callableStatement.setSQLXML(1, sqlxmlValue);
```

#### setBlob(parameter, value)

Sets the value of the specified parameter as a Blob.

```javascript
// Example
callableStatement.setBlob(1, blobValue);
```

#### setClob(parameter, value)

Sets the value of the specified parameter as a Clob.

```javascript
// Example
callableStatement.setClob(1, clobValue);
```

#### setNClob(parameter, value)

Sets the value of the specified parameter as an NClob.

```javascript
// Example
callableStatement.setNClob(1, nclobValue);
```

#### execute()

Executes the callable statement.

```javascript
// Example
const result = callableStatement.execute();
```

#### getMoreResults()

Moves to the next result set, if available.

```javascript
// Example
const hasMoreResults = callableStatement.getMoreResults();
```

#### getParameterMetaData()

Retrieves the parameter metadata for the callable statement.

```javascript
// Example
const parameterMetaData = callableStatement.getParameterMetaData();
```

#### isClosed()

Checks if the callable statement is closed.

```javascript
// Example
const isClosed = callableStatement.isClosed();
```

#### close()
Closes the callable statement.

```javascript
// Example
callableStatement.close();
```

These methods provide a comprehensive set of functionalities for handling callable statements, registering parameters, executing queries, and managing result sets. Depending on your use case, you can leverage these methods to interact with your database effectively.

### ResultSet Object Methods

The `ResultSet` object provides methods for retrieving and processing query results.

#### toJson(limited?)

Converts the result set to JSON format. If `limited`` is true, only a limited number of rows are included.

```javascript
// Example
const jsonResult = resultSet.toJson(true);
console.log(jsonResult); // Outputs JSON representation of the result set
```

#### close()

Closes the result set.

```javascript
// Example
resultSet.close();
```

#### getBigDecimal(identifier)

Retrieves the value of the specified column as a BigDecimal.

```javascript
// Example
const value = resultSet.getBigDecimal(1);
```

#### getBoolean(identifier)

Retrieves the value of the specified column as a Boolean.

```javascript
// Example
const value = resultSet.getBoolean(1);
```

#### getByte(identifier)

Retrieves the value of the specified column as a Byte.

```javascript
// Example
const value = resultSet.getByte(1);
```

#### getBytes(identifier)

Retrieves the value of the specified column as a byte array.

```javascript
// Example
const value = resultSet.getBytes(1);
```

#### getBytesNative(identifier)

Retrieves the value of the specified column as a byte array in native format.

```javascript
// Example
const value = resultSet.getBytesNative(1);
```

#### getBlob(identifier)

Retrieves the value of the specified column as a Blob.

```javascript
// Example
const value = resultSet.getBlob(1);
```

#### getBlobNative(identifier)

Retrieves the value of the specified column as a Blob in native format.

```javascript
// Example
const value = resultSet.getBlobNative(1);
```

#### getClob(identifier)

Retrieves the value of the specified column as a Clob.

```javascript
// Example
const value = resultSet.getClob(1);
```

#### getNClob(columnIndex)

Retrieves the value of the specified column as an NClob.

```javascript
// Example
const value = resultSet.getNClob(1);
```

#### getDate(identifier)

Retrieves the value of the specified column as a Date.

```javascript
// Example
const value = resultSet.getDate(1);
```

#### getDouble(identifier)

Retrieves the value of the specified column as a Double.

```javascript
// Example
const value = resultSet.getDouble(1);
```

#### getFloat(identifier)

Retrieves the value of the specified column as a Float.

```javascript
// Example
const value = resultSet.getFloat(1);
```

#### getInt(identifier)

Retrieves the value of the specified column as an Integer.

```javascript
// Example
const value = resultSet.getInt(1);
```

#### getLong(identifier)

Retrieves the value of the specified column as a Long.

```javascript
// Example
const value = resultSet.getLong(1);
```

#### getShort(identifier)

Retrieves the value of the specified column as a Short.

```javascript
// Example
const value = resultSet.getShort(1);
```

#### getString(identifier)

Retrieves the value of the specified column as a String.

```javascript
// Example
const value = resultSet.getString(1);
```

#### getTime(identifier)

Retrieves the value of the specified column as a Time.

```javascript
// Example
const value = resultSet.getTime(1);
```

#### getTimestamp(identifier)

Retrieves the value of the specified column as a Timestamp.

```javascript
// Example
const value = resultSet.getTimestamp(1);
```

#### isAfterLast()

Checks if the result set cursor is positioned after the last row.

```javascript
// Example
const isAfterLast = resultSet.isAfterLast();
```

#### isBeforeFirst()

Checks if the result set cursor is positioned before the first row.

```javascript
// Example
const isBeforeFirst = resultSet.isBeforeFirst();
```

#### isClosed()

Checks if the result set is closed.

```javascript
// Example
const isClosed = resultSet.isClosed();
```

#### isFirst()

Checks if the result set cursor is positioned on the first row.

```javascript
// Example
const isFirst = resultSet.isFirst();
```

#### isLast()

Checks if the result set cursor is positioned on the last row.

```javascript
// Example
const isLast = resultSet.isLast();
```

#### next()

Moves the result set cursor to the next row.

```javascript
// Example
const hasNextRow = resultSet.next();
```

#### getMetaData()

Retrieves the metadata for the result set.

```javascript
// Example
const metaData = resultSet.getMetaData();
```

#### getNString(columnIndex)

Retrieves the value of the specified column as an NString.

```javascript
// Example
const value = resultSet.getNString(1);
```

These methods offer various functionalities for accessing and manipulating data within a result set. Use them according to your requirements to interact with the retrieved data effectively.

### Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**getDatabaseTypes()**   | `deprecated` as all the datasources now are in a single list | *list of string*
**getDataSources()**    | Returns the list of the available data-sources in this instance. The data-sources of the default database type are listed  | *list of string*
**createDataSource(name, driver, url, username, password, properties)**   | Creates a named dynamic datasource based on the provided parameters | *-*
**getMetadata(datasourceName)**   | Returns the metadata of the selected *datasourceName*. In case the *datasourceName* parameter is omitted, then the default data-source for the selected database is taken. | *metadata object*
**getConnection(datasourceName)**   | Establishes a connection to the selected data-source. Both parameters are optional | *Connection* 


### Objects

---

#### Connection

Function     | Description | Returns
------------ | ----------- | --------
**prepareStatement(sql)**   | Creates a prepared statement by the given SQL script | *PreparedStatement*
**prepareCall(sql)** | Creates a callable statement by the given SQL script | *CallableStatement*
**close()**   | Closes the Connection and returns it to the pool | -
**commit()**   | Commits the current transaction | -
**getAutoCommit()**   | Returns the value of the auto commit setting | *boolean*
**getCatalog()**   | Returns the Catalog name, which the Connection is related to | *string*
**getSchema()**   | Returns the Schema name, which the Connection is related to | *string*
**getTransactionIsolation()**   | Returns the value of the transaction isolation setting | *int*
**isClosed()**   | Returns true if the Connection is already closed and false otherwise | *boolean*
**isReadOnly()**   | Returns true if the Connection is opened in a read only state and false otherwise | *boolean*
**isValid()**   | Returns true if the Connection is still valid and false otherwise | *boolean*
**rollback()**   | Rolls the current transaction back | -
**setAutoCommit(autoCommit)**   | Sets the value of the auto commit setting | -
**setCatalog(catalog)**   | Sets the Catalog name, which the Connection is related to | -
**setSchema(schema)**   | Sets the Schema name, which the Connection is related to | -
**setReadOnly(readOnly)**   | Sets the value of the read only state | -
**setTransactionIsolation(transactionIsolation)**   | Sets the value of the transaction isolation setting | -


#### PreparedStatement

Function     | Description | Returns
------------ | ----------- | --------
**close()**   | Closes the Statement | -
**execute()**   | Executes an SQL query, script, procedure, etc. | *boolean*
**executeQuery()**   | Executes a query and returns a ResultSet | *ResultSet*
**executeUpdate()**   | Executes an update SQL statement | -
**setNull(index, value)**   | Sets a parameter as null | -
**setBoolean(index, value)**   | Sets a parameter of type boolean | -
**setDate(index, value)**   | Sets a parameter of type date | -
**setClob(index, value)**   | Sets a parameter of type clob | -
**setBlob(index, value)**   | Sets a parameter of type blob | -
**setBytes(index, value)**   | Sets a parameter of type bytes | -
**setBinaryStream(index, inputStreamValue, length?)**   | Sets a parameter of type binary stream | -
**setDouble(index, value)**   | Sets a parameter of type double | -
**setFloat(index, value)**   | Sets a parameter of type float | -
**setInt(index, value)**   | Sets a parameter of type integer | -
**setLong(index, value)**   | Sets a parameter of type long | -
**setShort(index, value)**   | Sets a parameter of type short | -
**setString(index, value)**   | Sets a parameter of type string | -
**setTime(index, value)**   | Sets a parameter of type time | -
**setTimestamp(index, value)**   | Sets a parameter of type timestamp | -
**addBatch()** | Adds a set of parameters to this *PreparedStatement* batch of commands | -
**executeBatch()** | Submits a batch of commands to the database for execution and if all commands execute successfully, returns an array of update counts. | *integer array*
**getMetaData()**   | Retrieves a metadata object that contains information about the columns of the object that will be returned when this PreparedStatement is executed | *object*
**getMoreResults()** | Returns true, if there are more *ResultSet* objects to be retrieved. | *boolean*
**getParameterMetaData()** | Retrieves the number, types and properties of this *PreparedStatement* parameters | *object*
**getSQLWarning()** | Retrieves the first warning reported | *object*
**isClosed()** | Returns true, if closed | *boolean*


#### CallableStatement

Function     | Description | Returns
------------ | ----------- | --------
**close()**   | Closes the Statement | -
**execute()**   | Executes an SQL query, script, procedure, etc. | *boolean*
**executeQuery()**   | Executes a query and returns a ResultSet | *ResultSet*
**executeUpdate()**   | Executes an update SQL statement | -
**setNull(index, value)**   | Sets a parameter as null | -
**setBoolean(index, value)**   | Sets a parameter of type boolean | -
**setDate(index, value)**   | Sets a parameter of type date | -
**setClob(index, value)**   | Sets a parameter of type clob | -
**setBlob(index, value)**   | Sets a parameter of type blob | -
**setBytes(index, value)**   | Sets a parameter of type bytes | -
**setDouble(index, value)**   | Sets a parameter of type double | -
**setFloat(index, value)**   | Sets a parameter of type float | -
**setInt(index, value)**   | Sets a parameter of type integer | -
**setLong(index, value)**   | Sets a parameter of type long | -
**setShort(index, value)**   | Sets a parameter of type short | -
**setString(index, value)**   | Sets a parameter of type string | -
**setTime(index, value)**   | Sets a parameter of type time | -
**setTimestamp(index, value)**   | Sets a parameter of type timestamp | -
**addBatch()** | Adds a set of parameters to this *PreparedStatement* batch of commands | -
**executeBatch()** | Submits a batch of commands to the database for execution and if all commands execute successfully, returns an array of update counts. | *integer array*
**getMetaData()**   | Retrieves a metadata object that contains information about the columns of the object that will be returned when this PreparedStatement is executed | *object*
**getMoreResults()** | Returns true, if there are more *ResultSet* objects to be retrieved. | *boolean*
**getParameterMetaData()** | Retrieves the number, types and properties of this *PreparedStatement* parameters | *object*
**getSQLWarning()** | Retrieves the first warning reported | *object*
**isClosed()** | Returns true, if closed | *boolean*

#### ResultSet

Function     | Description | Returns
------------ | ----------- | --------
**toJson(limited)** | Returns the result set as stringfied JSON, `limited = true` will return only the first 100 records | *string*
**close()**   | Closes the ResultSet | -
**getBoolean(identifier)**   | Returns a value of type boolean | *boolean*
**getDate(identifier)**   | Returns a value of type date | *Date*
**getDouble(identifier)**   | Returns a value of type double | *double*
**getFloat(identifier)**   | Returns a value of type float | *float*
**getInt(identifier)**   | Returns a value of type integer | *int*
**getLong(identifier)**   | Returns a value of type long | *long*
**getShort(identifier)**   | Returns a value of type short | *short*
**getString(identifier)**   | Returns a value of type string | *string*
**getTime(identifier)**   | Returns a value of type time | *Date*
**getTimestamp(identifier)**   | Returns a value of type timestamp | *Date*
**isAfterLast()**   | Returns true if the ResultSet is iterated at the end and false otherwise | *boolean*
**isBeforeFirst()**   | Returns true if the ResultSet is iterated at the beginning and false otherwise | *boolean*
**isFirst()**   | Returns true if the ResultSet is iterated at the first row and false otherwise | *boolean*
**isLast()**   | Returns true if the ResultSet is iterated at the last row and false otherwise | *boolean*
**isClosed()**   | Returns true if the ResultSet is already closed and false otherwise | *boolean*
**next()**   | Iterates the ResultSet to the next row and returns true if it is successful. Returns false if no more rows remain. | *boolean*