# API: orm

> Source: `db/orm.ts`

Supported ORM schema:
```
{
name: <string>,
table: <string>,
properties: [{
name: <string>,
column: <string>,
id: <boolean>,
required: <boolean>,
unique: <boolean>,
dbValue: <function>,
value: <function>,
allowedOps: <Array['insert','update']>
}],
associations: [{
name: <string>,
joinKey: <string>,
key: <string>,
type: <ORM.ASSOCIATION_TYPES>,
targetDao: <function|DAO>,
joinDao: <function|DAO>,
defaults: <Object>,
}]
}
```

