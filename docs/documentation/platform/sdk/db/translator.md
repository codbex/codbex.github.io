# API: translator

> Source: `db/translator.ts`

Provides static methods for translating entity properties based on a dedicated language table.
Translation is achieved by querying a separate table (e.g., 'BASE_TABLE_LANG') and merging
the translated fields back into the original data.

## Classes

### Translator

Provides static methods for translating entity properties based on a dedicated language table.<br/>Translation is achieved by querying a separate table (e.g., 'BASE_TABLE_LANG') and merging<br/>the translated fields back into the original data.

#### Methods

<hr/>

#### translateList

- `translateList (list:any[], language:string|undefined, basetTable:string):any[]`

  Translates properties for a list of entities by querying the corresponding language table.<br/><br/>@param list The array of entities to be translated.<br/>@param language The target language code (e.g., 'en', 'de'). If undefined, no translation occurs.<br/>@param basetTable The name of the base entity table (used to derive the language table name).<br/>@returns The translated array of entities.

<hr/>

#### translateEntity

- `translateEntity (entity:any, id:string|number, language:string|undefined, basetTable:string):any`

  Translates properties for a single entity by querying the corresponding language table.<br/><br/>@param entity The entity object to be translated.<br/>@param id The ID of the entity.<br/>@param language The target language code (e.g., 'en', 'de'). If undefined, no translation occurs.<br/>@param basetTable The name of the base entity table.<br/>@returns The translated entity object.

