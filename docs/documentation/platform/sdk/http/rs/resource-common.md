# API: resource-common

> Source: `http/rs/resource-common.ts`

Commmon function for initializng the callback functions in the ResourceMethod instances.

@param thiz The ResourceMethod instance to which the function is bound (or Resource instance in the case of redirect).
@param configuration The configuration object where the handler will be attached.
@param sHandlerFuncName The name of the function that will be attached to the resource mappings configuration (e.g., 'serve', 'redirect').
@param fHandler The handler function or value that will be attached to the resource mappings configuration.
@returns The instance passed in as 'thiz' for method chaining.
@private

