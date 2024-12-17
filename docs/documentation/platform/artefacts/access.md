# Access Constraints

## Overview:

The __codbex__ platform uses access control through access files (`.access`) to define access constraints for different artifacts. These files are processed by the Security Engine to enforce security policies. Below is a general description of the access constraints in a JSON `.access` file:

::: tip
File extension: `*.access`
:::

### Access Constraints JSON Structure:

The access constraints file typically has a JSON structure with specific properties for defining access rules for different roles or users.

Example:

```json
{
   "constraints":[
      {
         "scope":"HTTP",
         "path":"/myproject/myfolder/myartifact1.txt",
         "method":"*",
         "roles":[
            "myrole1",
            "myrole2"
         ]
      },
      {
         "scope":"HTTP",
         "path":"/myproject/myfolder/myartifact2.txt",
         "method":"GET",
         "roles":[
            "myrole3",
            "myrole4"
         ]
      }
   ]
}
```

Explanation of Properties:

* constraints (Array): An array containing individual access rules.

* scope (String): The scope of the access rule. Common values include "HTTP" or "WS." It specifies where the resource is located.

* roles (Array): The roles for which the access rule is defined. It can be a specific user role or a built-in role such as `Everyone` or `Developer`.

* methods (String): HTTP method for which the access rule is applied (e.g., "GET", "POST", "PUT", "DELETE").

* path (String): The path to the resource or endpoint to which the access rule applies. It can include wildcards for broader matching.

::: info
* The access constraints are evaluated based on the order in which they appear in the file. The first and/or longest matching rule is applied.
* Users who do not match any defined access rule may have default access, which is often read-only or no access at all.
* Access constraints contribute to the overall security model of the platform, helping to control who can perform specific actions on resources within the platform.
:::

## Notes

Always refer to the latest documentation or release notes for __codbex__ platform, as details and features may evolve over time.

The Access Constraints are processed by the [Security Engine](../engines/security.md).