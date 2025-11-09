# API: process

> Source: `bpm/process.ts`

API Process
* Provides methods for interacting with process instances,
including starting, updating metadata, and managing variables.

## Usage
```javascript
// manipulating process variables throughout the execution context
import { process } from "sdk/bpm";

// Hello from the Enterprise Javascript delegate
console.info("Hello from the Javascript Engine!");

let execution = process.getExecutionContext();

process.setVariable(execution.getId(), "variable2", "value2");
try {
    console.info("variable1: " + process.getVariable(execution.getId(), "variable1"));
    console.info("variable2: " + process.getVariable(execution.getId(), "variable2"));
} catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    } else {
        console.error("Something went wrong", e)
    }

}

```


## Classes

### Process

API Process<br/>* Provides methods for interacting with process instances,<br/>including starting, updating metadata, and managing variables.

#### Methods

<hr/>

#### start

- `start (key:string, businessKey:string='', parameters:{[key:string]:any}={}):string`

  Starts a new process instance for a given process definition key.<br/><br/>@param key The process definition key (ID) of the process to start.<br/>@param businessKey An optional business key to associate with the process instance. Defaults to an empty string.<br/>@param parameters An optional map of process variables to pass to the process instance upon starting. Defaults to an empty object.<br/>@returns The unique ID of the newly started process instance.

<hr/>

#### setProcessInstanceName

- `setProcessInstanceName (processInstanceId:string, name:string):void`

  Sets a human-readable name for an existing process instance.<br/><br/>@param processInstanceId The ID of the process instance to update.<br/>@param name The new name for the process instance.

<hr/>

#### updateBusinessKey

- `updateBusinessKey (processInstanceId:string, businessKey:string):void`

  Updates the business key of an existing process instance.<br/><br/>@param processInstanceId The ID of the process instance to update.<br/>@param businessKey The new business key.

<hr/>

#### updateBusinessStatus

- `updateBusinessStatus (processInstanceId:string, businessStatus:string):void`

  Updates the business status of an existing process instance.<br/><br/>@param processInstanceId The ID of the process instance to update.<br/>@param businessStatus The new business status.

<hr/>

#### getVariable

- `getVariable (processInstanceId:string, variableName:string):any`

  Retrieves the value of a specific variable from a process instance.<br/><br/>@param processInstanceId The ID of the process instance.<br/>@param variableName The name of the variable to retrieve.<br/>@returns The value of the variable, or `null` if the variable does not exist. The type is `any` as it depends on the stored value.

<hr/>

#### getVariables

- `getVariables (processInstanceId:string):any`

  Retrieves all variables associated with a process instance.<br/><br/>@param processInstanceId The ID of the process instance.<br/>@returns An object containing all variables for the process instance, where keys are variable names and values are the variable values.

<hr/>

#### setVariable

- `setVariable (processInstanceId:string, variableName:string, value:any):void`

  Sets or updates the value of a variable in a process instance.<br/><br/>@param processInstanceId The ID of the process instance.<br/>@param variableName The name of the variable to set.<br/>@param value The new value for the variable. The type is `any` to accommodate different data types.

<hr/>

#### removeVariable

- `removeVariable (processInstanceId:string, variableName:string):void`

  Removes a variable from a process instance.<br/><br/>@param processInstanceId The ID of the process instance.<br/>@param variableName The name of the variable to remove.

<hr/>

#### correlateMessageEvent

- `correlateMessageEvent (processInstanceId:string, messageName:string, variables:Map<string, any>):void`

  Correlates a message event with a running process instance.<br/><br/>@param processInstanceId The ID of the process instance to correlate the message to.<br/>@param messageName The name of the message event defined in the BPMN process.<br/>@param variables A map of variables (`Map<string, any>`) to pass along with the message event.

<hr/>

#### getExecutionContext

- `getExecutionContext ()void`

  Retrieves the current execution context object, typically used within an execution listener or service task.<br/><br/>@returns A new instance of the `ExecutionContext` containing details about the current process execution path.

### ExecutionContext

ExecutionContext object<br/>* Provides detailed information and control over the current process execution path.

#### Methods

<hr/>

#### getId

- `getId ():string`

  Unique id of this path of execution that can be used as a handle to provide external signals back into the engine after wait states.<br/><br/>@returns The unique ID of the current execution.

<hr/>

#### getProcessInstanceId

- `getProcessInstanceId ():string`

  Reference to the overall process instance.<br/>@returns The ID of the process instance.

<hr/>

#### getRootProcessInstanceId

- `getRootProcessInstanceId ():string`

  The 'root' process instance. When using call activity for example, the processInstance set will not always be the root. This method returns the topmost process instance.<br/><br/>@returns The ID of the root process instance.

<hr/>

#### getEventName

- `getEventName ():string`

  Will contain the event name in case this execution is passed in for an {@link ExecutionListener}.<br/>@returns The current event name, or `null`/empty string if not executing an event listener.

<hr/>

#### setEventName

- `setEventName (eventName:string):void`

  Sets the current event (typically when execution an {@link ExecutionListener}).<br/><br/>@param eventName The name of the event.

<hr/>

#### getProcessInstanceBusinessKey

- `getProcessInstanceBusinessKey ():string`

  The business key for the process instance this execution is associated with.<br/>@returns The business key.

<hr/>

#### getProcessInstanceBusinessStatus

- `getProcessInstanceBusinessStatus ():string`

  The business status for the process instance this execution is associated with.<br/>@returns The business status.

<hr/>

#### getProcessDefinitionId

- `getProcessDefinitionId ():string`

  The process definition key for the process instance this execution is associated with.<br/>@returns The process definition ID.

<hr/>

#### getPropagatedStageInstanceId

- `getPropagatedStageInstanceId ():string`

  If this execution runs in the context of a case and stage, this method returns it's closest parent stage instance id (the stage plan item instance id to be<br/>precise).<br/><br/>@returns The stage instance id this execution belongs to or `null`, if this execution is not part of a case at all or is not a child element of a stage.

<hr/>

#### getParentId

- `getParentId ():string`

  Gets the id of the parent of this execution. If null, the execution represents a process-instance.<br/>@returns The parent execution ID, or `null`.

<hr/>

#### getSuperExecutionId

- `getSuperExecutionId ():string`

  Gets the id of the calling execution. If not null, the execution is part of a subprocess.<br/>@returns The super execution ID, or `null`.

<hr/>

#### getCurrentActivityId

- `getCurrentActivityId ():string`

  Gets the id of the current activity.<br/>@returns The current activity ID.

<hr/>

#### getTenantId

- `getTenantId ():string`

  Returns the tenant id, if any is set before on the process definition or process instance.<br/>@returns The tenant ID, or `null`/empty string.

<hr/>

#### getCurrentFlowElement

- `getCurrentFlowElement ():any`

  The BPMN element where the execution currently is at.<br/>@returns The current flow element object (type is Java object).

<hr/>

#### setCurrentFlowElement

- `setCurrentFlowElement (flowElement:any):void`

  Change the current BPMN element the execution is at.<br/>@param flowElement The new flow element object (Java type).

<hr/>

#### getCurrentFlowableListener

- `getCurrentFlowableListener ():any`

  Returns the {@link FlowableListener} instance matching an {@link ExecutionListener} if currently an execution listener is being execution. Returns null otherwise.<br/>@returns The current Flowable Listener object (Java type), or `null`.

<hr/>

#### setCurrentFlowableListener

- `setCurrentFlowableListener (currentListener:any):void`

  Called when an {@link ExecutionListener} is being executed.<br/>@param currentListener The current listener object (Java type).

<hr/>

#### snapshotReadOnly

- `snapshotReadOnly ():any`

  Create a snapshot read only delegate execution of this delegate execution.<br/><br/>@returns A {@link ReadOnlyDelegateExecution} object (Java type).

<hr/>

#### getParent

- `getParent ():any`

  returns the parent of this execution, or null if there no parent.<br/>@returns The parent execution object (Java type), or `null`.

<hr/>

#### getExecutions

- `getExecutions ():any[]`

  returns the list of execution of which this execution the parent of.<br/>@returns An array of child execution objects (Java type).

<hr/>

#### setActive

- `setActive (isActive:boolean):void`

  makes this execution active or inactive.<br/>@param isActive A boolean indicating whether the execution should be active.

<hr/>

#### isActive

- `isActive ():boolean`

  returns whether this execution is currently active.<br/>@returns `true` if active, `false` otherwise.

<hr/>

#### isEnded

- `isEnded ():boolean`

  returns whether this execution has ended or not.<br/>@returns `true` if ended, `false` otherwise.

<hr/>

#### setConcurrent

- `setConcurrent (isConcurrent:boolean):void`

  changes the concurrent indicator on this execution.<br/>@param isConcurrent A boolean indicating whether the execution should be concurrent.

<hr/>

#### isConcurrent

- `isConcurrent ():boolean`

  returns whether this execution is concurrent or not.<br/>@returns `true` if concurrent, `false` otherwise.

<hr/>

#### isProcessInstanceType

- `isProcessInstanceType ():boolean`

  returns whether this execution is a process instance or not.<br/>@returns `true` if it's a process instance, `false` otherwise.

<hr/>

#### inactivate

- `inactivate ():void`

  Inactivates this execution. This is useful for example in a join: the execution still exists, but it is not longer active.

<hr/>

#### isScope

- `isScope ():boolean`

  Returns whether this execution is a scope.<br/>@returns `true` if it is a scope, `false` otherwise.

<hr/>

#### setScope

- `setScope (isScope:boolean):void`

  Changes whether this execution is a scope or not.<br/>@param isScope A boolean indicating whether the execution should be a scope.

<hr/>

#### isMultiInstanceRoot

- `isMultiInstanceRoot ():boolean`

  Returns whether this execution is the root of a multi instance execution.<br/>@returns `true` if it's a multi instance root, `false` otherwise.

<hr/>

#### setMultiInstanceRoot

- `setMultiInstanceRoot (isMultiInstanceRoot:boolean):void`

  Changes whether this execution is a multi instance root or not.<br/>@param isMultiInstanceRoot A boolean indicating whether the execution is the root of a multi-instance execution.

<hr/>

#### getVariables

- `getVariables ():Map<string,any>`

  Returns all variables. This will include all variables of parent scopes too.<br/>@returns A Map of variable names (`string`) to variable values (`any`).

<hr/>

#### getVariableInstances

- `getVariableInstances ():Map<string,any>`

  Returns all variables, as instances of the {@link VariableInstance} interface, which gives more information than only the value (type, execution id, etc.)<br/>@returns A Map of variable names (`string`) to {@link VariableInstance} objects (Java type).

<hr/>

#### getVariablesLocal

- `getVariablesLocal ():Map<string,any>`

  Returns the variable local to this scope only. So, in contrary to {@link #getVariables()}, the variables from the parent scope won't be returned.<br/>@returns A Map of variable names (`string`) to local variable values (`any`).

<hr/>

#### getVariableInstancesLocal

- `getVariableInstancesLocal ():Map<string,any>`

  Returns the variables local to this scope as instances of the {@link VariableInstance} interface, which provided additional information about the variable.<br/>@returns A Map of variable names (`string`) to local {@link VariableInstance} objects (Java type).

<hr/>

#### getVariable

- `getVariable (variableName:string):any`

  Returns the variable value for one specific variable. Will look in parent scopes when the variable does not exist on this particular scope.<br/>@param variableName The name of the variable to retrieve.<br/>@returns The value of the variable (`any`), or `null` if not found.

<hr/>

#### getVariableInstance

- `getVariableInstance (variableName:string):any`

  Similar to {@link #getVariable(String)}, but returns a {@link VariableInstance} instance, which contains more information than just the value.<br/>@param variableName The name of the variable to retrieve.<br/>@returns The {@link VariableInstance} object (Java type), or `null`.

<hr/>

#### getVariableLocal

- `getVariableLocal (variableName:string):any`

  Returns the value for the specific variable and only checks this scope and not any parent scope.<br/>@param variableName The name of the local variable to retrieve.<br/>@returns The value of the local variable (`any`), or `null` if not found locally.

<hr/>

#### getVariableInstanceLocal

- `getVariableInstanceLocal (variableName:string):any`

  Similar to {@link #getVariableLocal(String)}, but returns an instance of {@link VariableInstance}, which has some additional information beyond the value.<br/>@param variableName The name of the local variable to retrieve.<br/>@returns The local {@link VariableInstance} object (Java type), or `null`.

<hr/>

#### getVariableNames

- `getVariableNames ():Set<string>`

  Returns all the names of the variables for this scope and all parent scopes.<br/>@returns A Set of all variable names (`string`).

<hr/>

#### getVariableNamesLocal

- `getVariableNamesLocal ():Set<string>`

  Returns all the names of the variables for this scope (no parent scopes).<br/>@returns A Set of local variable names (`string`).

<hr/>

#### setVariable

- `setVariable (variableName:string, value:any):void`

  Sets the variable with the provided name to the provided value. It checks parent scopes for an existing variable before setting on the current scope.<br/>@param variableName The name of the variable to be set.<br/>@param value The value of the variable to be set (`any`).

<hr/>

#### setVariableLocal

- `setVariableLocal (variableName:string, value:any):any`

  Similar to {@link #setVariable(String, Object)}, but the variable is set to this scope specifically (local variable).<br/>@param variableName The name of the variable to be set locally.<br/>@param value The value of the variable to be set (`any`).<br/>@returns The old value of the local variable (Java type), or `null`.

<hr/>

#### setVariables

- `setVariables (variables:Map<string, any>):void`

  Sets the provided variables to the variable scope, using the default scoping algorithm.<br/>@param variables A map of keys (`string`) and values (`any`) for the variables to be set.

<hr/>

#### setVariablesLocal

- `setVariablesLocal (variables:Map<string, any>):void`

  Similar to {@link #setVariables(Map)}, but the variables are set on this scope specifically (local variables).<br/>@param variables A map of keys (`string`) and values (`any`) for the local variables to be set.

<hr/>

#### hasVariables

- `hasVariables ():boolean`

  Returns whether this scope or any parent scope has variables.<br/>@returns `true` if variables exist in scope hierarchy, `false` otherwise.

<hr/>

#### hasVariablesLocal

- `hasVariablesLocal ():boolean`

  Returns whether this scope has variables.<br/>@returns `true` if local variables exist, `false` otherwise.

<hr/>

#### hasVariable

- `hasVariable (variableName:string):boolean`

  Returns whether this scope or any parent scope has a specific variable.<br/>@param variableName The name of the variable to check.<br/>@returns `true` if the variable is found in the scope hierarchy, `false` otherwise.

<hr/>

#### hasVariableLocal

- `hasVariableLocal (variableName:string):boolean`

  Returns whether this scope has a specific variable.<br/>@param variableName The name of the local variable to check.<br/>@returns `true` if the variable is found locally, `false` otherwise.

<hr/>

#### removeVariable

- `removeVariable (variableName:string):void`

  Removes the variable from the process instance and creates a new HistoricVariableUpdate. Searches up the scope hierarchy.<br/>@param variableName The name of the variable to remove.

<hr/>

#### removeVariableLocal

- `removeVariableLocal (variableName:string):void`

  Removes the local variable and creates a new HistoricVariableUpdate.<br/>@param variableName The name of the local variable to remove.

<hr/>

#### removeVariables

- `removeVariables (variableNames:string[]):void`

  Removes the variables and creates a new HistoricVariableUpdate for each of them. Searches up the scope hierarchy.<br/>@param variableNames An array of variable names (`string[]`) to remove.

<hr/>

#### removeVariablesLocal

- `removeVariablesLocal (variableNames:string[]):void`

  Removes the local variables and creates a new HistoricVariableUpdate for each of them.<br/>@param variableNames An array of local variable names (`string[]`) to remove.

<hr/>

#### setTransientVariable

- `setTransientVariable (variableName:string, variableValue:any):void`

  Sets a transient variable using the default scoping mechanism (up the hierarchy). Transient variables have no history and are cleared at wait states.<br/>@param variableName The name of the transient variable.<br/>@param variableValue The value of the transient variable (`any`).

<hr/>

#### setTransientVariableLocal

- `setTransientVariableLocal (variableName:string, variableValue:any):void`

  Sets a local transient variable. Transient variables have no history and are cleared at wait states.<br/>@param variableName The name of the local transient variable.<br/>@param variableValue The value of the local transient variable (`any`).

<hr/>

#### setTransientVariables

- `setTransientVariables (transientVariables:Map<string, any>):void`

  Sets multiple transient variables using the default scoping mechanism (up the hierarchy).<br/>@param transientVariables A map of keys (`string`) and values (`any`) for the transient variables to be set.

<hr/>

#### getTransientVariable

- `getTransientVariable (variableName:string):any`

  Retrieves the value of a transient variable, searching up the parent scopes.<br/>@param variableName The name of the transient variable to retrieve.<br/>@returns The value of the transient variable (`any`), or `null` if not found.

<hr/>

#### getTransientVariables

- `getTransientVariables ():Map<string,any>`

  Retrieves all transient variables in the current scope hierarchy.<br/>@returns A Map of transient variable names (`string`) to values (`any`).

<hr/>

#### setTransientVariablesLocal

- `setTransientVariablesLocal (transientVariables:Map<string, any>):void`

  Sets multiple local transient variables.<br/>@param transientVariables A map of keys (`string`) and values (`any`) for the local transient variables to be set.

<hr/>

#### getTransientVariableLocal

- `getTransientVariableLocal (variableName:string):any`

  Retrieves the value of a local transient variable.<br/>@param variableName The name of the local transient variable to retrieve.<br/>@returns The value of the local transient variable (`any`), or `null` if not found.

<hr/>

#### getTransientVariablesLocal

- `getTransientVariablesLocal ():Map<string,any>`

  Retrieves all local transient variables.<br/>@returns A Map of local transient variable names (`string`) to values (`any`).

<hr/>

#### removeTransientVariableLocal

- `removeTransientVariableLocal (variableName:string):void`

  Removes a specific local transient variable.<br/>@param variableName The name of the local transient variable to remove.

<hr/>

#### removeTransientVariable

- `removeTransientVariable (variableName:string):void`

  Removes a specific transient variable, searching up the scope hierarchy.<br/>@param variableName The name of the transient variable to remove.

<hr/>

#### removeTransientVariables

- `removeTransientVariables ():void`

  Remove all transient variables of this scope and its parent scopes.

<hr/>

#### removeTransientVariablesLocal

- `removeTransientVariablesLocal ():void`

  Removes all local transient variables.

