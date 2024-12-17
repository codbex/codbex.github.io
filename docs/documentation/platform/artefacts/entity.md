# Entity

## Overnvew

Hibernate Mapping Files (`*.hbm.xml`) are XML-based configuration files used by the Hibernate ORM framework to define the mapping between domain objects (entities) and database tables. These files provide a declarative way to specify how entities are persisted, loaded, and managed by Hibernate.

::: tip
File extension: `*.hbm.xml`
:::

## Purpose

Hibernate Mapping Files serve several purposes:

1. **Entity Mapping**: The primary purpose of Hibernate Mapping Files is to map domain objects (entities) to corresponding database tables. Developers specify the entity name, table name, primary key, properties, and associations with other entities using XML elements.

2. **ORM Configuration**: Hibernate Mapping Files are used to configure Object-Relational Mapping (ORM) settings for Hibernate. Developers can specify the mapping between entity properties and database columns, as well as define inheritance hierarchies, associations, and fetching strategies.

3. **Database Interaction**: By defining entity mappings in Hibernate Mapping Files, developers can interact with the database using Hibernate's ORM capabilities. This includes persisting entities, loading them from the database, executing queries, and performing CRUD operations.

## Syntax

The syntax of Hibernate Mapping Files is XML-based, consisting of elements representing entity mappings and their attributes. Here's a simplified example of a Hibernate Mapping File:

```xml
<!DOCTYPE hibernate-mapping PUBLIC
    "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
    "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">

<hibernate-mapping>
    <class name="com.example.Product" table="products">
        <id name="id" type="long">
            <generator class="native" />
        </id>
        <property name="name" column="product_name" type="string" />
        <property name="price" column="product_price" type="double" />
        <set name="categories" table="product_category" inverse="true" cascade="all">
            <key column="product_id" />
            <many-to-many column="category_id" class="com.example.Category" />
        </set>
    </class>
</hibernate-mapping>
```

## Usage

Hibernate Mapping Files are typically used in the following scenarios:

* **ORM Configuration**: Developers use Hibernate Mapping Files to configure entity mappings and ORM settings for Hibernate. This includes specifying table names, primary keys, column mappings, associations, and inheritance strategies.

* **Database Interaction**: Hibernate Mapping Files facilitate database interaction using Hibernate's ORM capabilities. Developers can persist, load, update, and delete entities using Hibernate sessions and transactions, based on the defined entity mappings.

* **Code Generation**: Hibernate Mapping Files can be consumed by code generation tools or frameworks to automatically generate entity classes, database schema scripts, and other artifacts. This helps streamline the development process and ensures consistency between the data model and application code.

## Conclusion

Hibernate Mapping Files (`*.hbm.xml`) provide a powerful mechanism for defining entity mappings and configuring ORM settings in Hibernate. By specifying entity-to-table mappings and other metadata in XML format, developers can seamlessly integrate their applications with relational databases and leverage Hibernate's ORM capabilities.


