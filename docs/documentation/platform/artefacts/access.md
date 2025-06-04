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
         "path":"/services/web/myproject/myfolder/myartifact1.txt",
         "method":"*",
         "roles":[
            "myrole1",
            "myrole2"
         ]
      },
      {
         "scope":"HTTP",
         "path":"/services/web/myproject/myfolder/myartifact2.txt",
         "method":"GET",
         "roles":[
            "myrole3",
            "myrole4"
         ]
      },
      {
         "scope":"HTTP",
         "path":"/public/web/myproject/myfolder/publicartifact.txt",
         "method":"GET",
         "roles":[
            "PUBLIC"
         ]
      },
      {
         "scope":"HTTP",
         "path":"/services/ts/myproject/**",
         "method":"POST",
         "roles":[
            "DEVELOPER"
         ]
      }
   ]
}
```

Explanation of Properties:

* __constraints__ _(Array)_: An array containing individual access rules.

* __scope__ _(String)_: The scope of the access rule. Accepted values are `HTTP` or `CMS`, specifing the type of the accessed resource.

* __path__ _(String)_: The path to the resource or endpoint to which the access rule applies. It can include wildcards for broader matching.

  * Must start with the appropriate service prefix, such as `/services/web/`, `/services/js/`, `/services/ts/`, etc.
  * For publicly accessible resources (unauthorized access), use the `/public/` prefix (e.g., `/public/web/…`).
  * Supports wildcards (e.g., `/services/web/**`, `/services/ts/*/endpoint`) using the pattern matching provided by [org.springframework.util.AntPathMatcher](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/util/AntPathMatcher.html).

* __method__ _(String)_: The HTTP method for which the access rule is applied (e.g., `GET`, `POST`, `PUT`, `DELETE`). Use `*` to match all methods.

* __roles__ _(Array)_: The roles for which the access rule is defined. It can be a specific user role or a built-in role such as `DEVELOPER`, `OPERATOR`, `ADMINISTRATOR` or `PUBLIC`.

::: info
* The access constraints are evaluated based on the order in which they appear in the file. The first and/or longest matching rule is applied.
* Users who do not match any defined access rule may have default access, which is often read-only or no access at all.
* Access constraints contribute to the overall security model of the platform, helping to control who can perform specific actions on resources within the platform.
:::

## Notes

* Always use the correct path prefix matching your artifact’s deployed location: `/services/web/`, `/services/js/`, `/services/ts/`, etc.
* Public access (unauthorized) should be defined using the `/public/` prefix and the special `PUBLIC` role.
* Wildcards are supported in the `path` property, allowing flexible pattern matching for groups of resources. This is powered by the `org.springframework.util.AntPathMatcher` utility from Spring Framework.
* Always refer to the latest documentation or release notes for __codbex__ platform, as details and features may evolve over time.

The Access Constraints are processed by the [Security Engine](../engines/security.md).