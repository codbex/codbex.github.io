# API: resource-mappings

> Source: `http/rs/resource-mappings.ts`

The ResourceMappings class abstracts the mappings between resource URL path templates
and their corresponding resource handler specifications. It acts as the configuration
store for the HttpController.

## Classes

### ResourceMappings

The ResourceMappings class abstracts the mappings between resource URL path templates<br/>and their corresponding resource handler specifications. It acts as the configuration<br/>store for the HttpController.

#### Methods

<hr/>

#### path

- `path (sPath:string, oConfiguration?:any):Resource`

  Creates or retrieves a Resource object corresponding to the given path.<br/>The second, optional argument can be used to initialize the resource.<br/><br/>@param sPath The URL path template for the resource (e.g., "users/{id}").<br/>@param oConfiguration Optional configuration object for initial resource setup.<br/>@returns The created or existing Resource instance.

<hr/>

#### resourcePath

- `resourcePath (sPath:string, oConfiguration?:any):Resource`

  Alias for path().

<hr/>

#### resource

- `resource (sPath:string, oConfiguration?:any):Resource`

  Alias for path().

<hr/>

#### configuration

- `configuration ():any}`

  Returns the compiled configuration object for all resources managed by this ResourceMappings.<br/>The configuration is structured to be consumed by the HttpController's routing logic.

<hr/>

#### readonly

- `readonly ():this`

  Removes all but GET resource handlers from all managed resources, making them read-only.<br/><br/>@returns The ResourceMappings instance for method chaining.

<hr/>

#### disable

- `disable (sPath:string, sVerb:string, arrConsumes:string[], arrProduces:string[]):this`

  Disables resource handling specifications matching the arguments, effectively removing them from this API.<br/><br/>@param sPath The path of the resource.<br/>@param sVerb The HTTP verb (e.g., 'get', 'post').<br/>@param arrConsumes Array of consumed media types.<br/>@param arrProduces Array of produced media types.<br/>@returns The ResourceMappings instance for method chaining.

<hr/>

#### find

- `find (sPath:string, sVerb:string, arrConsumes:string[], arrProduces:string[]):any|undefined`

  Provides a reference to a handler specification matching the supplied arguments.<br/><br/>@param sPath The path of the resource.<br/>@param sVerb The HTTP verb (e.g., 'get', 'post').<br/>@param arrConsumes Array of consumed media types.<br/>@param arrProduces Array of produced media types.<br/>@returns The matching Resource handler specification or undefined.

