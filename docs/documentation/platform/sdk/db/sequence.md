# Sequence

## Overview

The provided TypeScript module `Sequence` provides methods for interacting with sequences in a database. Here's an explanation of the key components:

### Sequence Class:

The `Sequence`` class provides static methods for working with database sequences.

### Methods

#### nextval

```javascript
nextval(sequence: string, tableName?: string, datasourceName?: string): number
```

Retrieves the next value from the specified sequence.

**Parameters:**

* `sequence`: The name of the sequence.
* `tableName`: (Optional) The name of the table associated with the sequence.
* `datasourceName`: (Optional) The name of the data source.
* Return Value: The next value from the specified sequence.

#### create

```javascript
create(sequence: string, start?: number, datasourceName?: string): void
```

Creates a new sequence with the specified name and optional starting value.

**Parameters:**

* `sequence`: The name of the sequence to be created.
* `start`: (Optional) The starting value of the sequence. Defaults to 1 if not provided.
* `datasourceName`: (Optional) The name of the data source.
* Return Value: None.

#### drop

```javascript
drop(sequence: string, datasourceName?: string): void
```

Drops (deletes) the specified sequence.

**Parameters:**

* `sequence`: The name of the sequence to be dropped.
* `datasourceName`: (Optional) The name of the data source.
* Return Value: None.

## Example Usage:

```javascript
import { Sequence } from 'sdk/db/sequence';

// Example sequence name
const sequenceName = 'your_sequence';

// Retrieve the next value from the sequence
const nextValue = Sequence.nextval(sequenceName);
console.log('Next Value:', nextValue);

// Create a new sequence with the specified name and starting value
Sequence.create(sequenceName, 100, datasourceName);

// Drop (delete) the specified sequence
Sequence.drop(sequenceName, datasourceName);
```

Replace `your_sequence`, and other placeholders with your actual module path, sequence name, table name, data source, and sequence details.

### Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**nextval(name, databaseType?, datasourceName?)**   | Increment the sequence with the given *name* and returns the value. Creates the sequence implicitly if it deos not exist. | *integer*
**create(name, databaseType?, datasourceName?)**   | Creates the sequence by the given *name*. | -
**drop(name, databaseType?, datasourceName?)**   | Remove the sequence by the given *name*. | -