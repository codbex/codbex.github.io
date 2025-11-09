# API: problems

> Source: `platform/problems.ts`

Provides a wrapper for the platform's ProblemsFacade to manage system issues,
including saving new problems, fetching existing ones, and updating their status.

## Usage
```javascript
import { Problems } from "sdk/platform";
import { response } from "sdk/http";

problems.save("/my-project/my-file", Problems.ACTIVE, "line: 4", "row: 10", "", "Some problem / at line 4", "Expected end of line ;", "ProblemsModule", "my-file.mjs", "my-file.mjs");

const myProblems = Problems.fetchAllProblems();

response.println(JSON.stringify(myProblems));

Problems.clearAllProblems();

```


## Classes

### Problems

@class Problems<br/>@description Static utility class for managing system problems via the ProblemsFacade.

#### Methods

<hr/>

#### save

- `save (location:string, type:string, line:string, column:string, cause:string, expected:string, category:string, module:string, source:string, program:string):void`

  Saves a new problem entry to the system's problem log.<br/><br/>@param {string} location The resource path or file location.<br/>@param {string} type The severity or nature of the problem.<br/>@param {string} line The line number.<br/>@param {string} column The column number.<br/>@param {string} cause The cause description.<br/>@param {string} expected The expected state/value description.<br/>@param {string} category The problem category.<br/>@param {string} module The module/component name.<br/>@param {string} source The original source content.<br/>@param {string} program The program or file name.

<hr/>

#### findProblem

- `findProblem (id:number):Problem`

  Finds a specific problem by its unique ID.<br/>Note: The underlying facade returns a JSON string which is parsed here.<br/><br/>@param {number} id The unique problem ID.<br/>@returns {Problem} The found Problem object.

<hr/>

#### fetchAllProblems

- `fetchAllProblems ():Problem[]`

  Fetches all recorded problems in the system.<br/>Note: The underlying facade returns a JSON string which is parsed here.<br/><br/>@returns {Problem[]} An array of all Problem objects.

<hr/>

#### fetchProblemsBatch

- `fetchProblemsBatch (condition:string, limit:number):Problem[]`

  Fetches a batch of problems based on a custom condition and limit.<br/><br/>@param {string} condition A SQL-like condition string (e.g., "CATEGORY='Syntax'").<br/>@param {number} limit The maximum number of problems to retrieve.<br/>@returns {Problem[]} An array of Problem objects matching the condition.

<hr/>

#### deleteProblem

- `deleteProblem (id:number):void`

  Deletes a problem record by its unique ID.<br/><br/>@param {number} id The unique problem ID to delete.

<hr/>

#### deleteAllByStatus

- `deleteAllByStatus (status:string):void`

  Deletes all problem records that currently have the specified status.<br/><br/>@param {string} status The status (e.g., Problems.SOLVED or Problems.IGNORED).

<hr/>

#### clearAllProblems

- `clearAllProblems ():void`

  Clears (deletes) all problem records in the system, regardless of status.

<hr/>

#### updateStatus

- `updateStatus (id:number, status:string):void`

  Updates the status of a single problem by its ID.<br/><br/>@param {number} id The unique problem ID.<br/>@param {string} status The new status (e.g., Problems.SOLVED).

<hr/>

#### updateStatusMultiple

- `updateStatusMultiple (ids:number[], status:string):void`

  Updates the status of multiple problems identified by an array of IDs.<br/><br/>@param {number[]} ids An array of unique problem IDs.<br/>@param {string} status The new status to apply to all problems.

