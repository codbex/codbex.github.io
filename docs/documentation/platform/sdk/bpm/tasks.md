# API: tasks

> Source: `bpm/tasks.ts`

API Tasks

## Classes

### Tasks

API Tasks

#### Methods

<hr/>

#### list

- `list ():TaskData[]`

<hr/>

#### getVariable

- `getVariable (taskId:string, variableName:string):any`

<hr/>

#### getVariables

- `getVariables (taskId:string):Map<string,any>`

  Returns all variables. This will include all variables of parent scopes too.

<hr/>

#### setVariable

- `setVariable (taskId:string, variableName:string, value:any):void`

  Returns all variables. This will include all variables of parent scopes too.

<hr/>

#### setVariables

- `setVariables (taskId:string, variables:Map<string, any>):void`

<hr/>

#### complete

- `complete (taskId:string, variables:{[key:string]:any}={}):void`

<hr/>

#### getTaskService

- `getTaskService ():TaskService`

### TaskService

Service which provides access to {@link Task} and form related operations.

#### Methods

<hr/>

#### newTask

- `newTask (taskId?:string):Task`

  Creates a new task that is not related to any process instance.<br/><br/>The returned task is transient and must be saved with {@link #saveTask(Task)} 'manually'.

<hr/>

#### createTaskBuilder

- `createTaskBuilder ():TaskBuilder`

  Create a builder for the task<br/><br/>@return task builder

<hr/>

#### saveTask

- `saveTask (task:Task):void`

  Saves the given task to the persistent data store. If the task is already present in the persistent store, it is updated. After a new task has been saved, the task instance passed into this<br/>method is updated with the id of the newly created task.<br/><br/>@param task<br/>the task, cannot be null.

<hr/>

#### bulkSaveTasks

- `bulkSaveTasks (taskList:Task[]):void`

  Saves the given tasks to the persistent data store. If the tasks are already present in the persistent store, it is updated. After a new task has been saved, the task instance passed into this<br/>method is updated with the id of the newly created task.<br/><br/>@param taskList the list of task instances, cannot be null.

<hr/>

#### deleteTask

- `deleteTask (taskId:string, cascade?:boolean):void`

  Deletes the given task, not deleting historic information that is related to this task.<br/><br/>@param taskId<br/>The id of the task that will be deleted, cannot be null. If no task exists with the given taskId, the operation is ignored.<br/>@param cascade<br/>If cascade is true, also the historic information related to this task is deleted.<br/>@throws FlowableObjectNotFoundException<br/>when the task with given id does not exist.<br/>@throws FlowableException<br/>when an error occurs while deleting the task or in case the task is part of a running process.

<hr/>

#### deleteTasks

- `deleteTasks (taskIds:string[], cascade?:boolean):void`

  Deletes all tasks of the given collection, not deleting historic information that is related to these tasks.<br/><br/>@param taskIds<br/>The id's of the tasks that will be deleted, cannot be null. All id's in the list that don't have an existing task will be ignored.<br/>@param cascade<br/>If cascade is true, also the historic information related to this task is deleted.<br/>@throws FlowableObjectNotFoundException<br/>when one of the task does not exist.<br/>@throws FlowableException<br/>when an error occurs while deleting the tasks or in case one of the tasks is part of a running process.

<hr/>

#### deleteTaskWithReason

- `deleteTaskWithReason (taskId:string, deleteReason:string):void`

  Deletes the given task, not deleting historic information that is related to this task..<br/><br/>@param taskId<br/>The id of the task that will be deleted, cannot be null. If no task exists with the given taskId, the operation is ignored.<br/>@param deleteReason<br/>reason the task is deleted. Is recorded in history, if enabled.<br/>@throws FlowableObjectNotFoundException<br/>when the task with given id does not exist.<br/>@throws FlowableException<br/>when an error occurs while deleting the task or in case the task is part of a running process

<hr/>

#### deleteTasksWithReason

- `deleteTasksWithReason (taskIds:string[], deleteReason:string):void`

  Deletes all tasks of the given collection, not deleting historic information that is related to these tasks.<br/><br/>@param taskIds<br/>The id's of the tasks that will be deleted, cannot be null. All id's in the list that don't have an existing task will be ignored.<br/>@param deleteReason<br/>reason the task is deleted. Is recorded in history, if enabled.<br/>@throws FlowableObjectNotFoundException<br/>when one of the tasks does not exist.<br/>@throws FlowableException<br/>when an error occurs while deleting the tasks or in case one of the tasks is part of a running process.

<hr/>

#### claim

- `claim (taskId:string, userId:string):void`

  Claim responsibility for a task: the given user is made assignee for the task. The difference with {@link #setAssignee(String, String)} is that here a check is done if the task already has a<br/>user assigned to it. No check is done whether the user is known by the identity component.<br/><br/>@param taskId<br/>task to claim, cannot be null.<br/>@param userId<br/>user that claims the task. When userId is null the task is unclaimed, assigned to no one.<br/>@throws FlowableObjectNotFoundException<br/>when the task doesn't exist.<br/>@throws org.flowable.common.engine.api.FlowableTaskAlreadyClaimedException<br/>when the task is already claimed by another user

<hr/>

#### unclaim

- `unclaim (taskId:string):void`

  A shortcut to {@link #claim} with null user in order to unclaim the task<br/><br/>@param taskId<br/>task to unclaim, cannot be null.<br/>@throws FlowableObjectNotFoundException<br/>when the task doesn't exist.

<hr/>

#### startProgress

- `startProgress (taskId:string, userId:string):void`

  Set the task state to in progress. No check is done whether the user is known by the identity component.<br/><br/>@param taskId<br/>task to change the state, cannot be null.<br/>@param userId<br/>user that puts the task in progress.<br/>@throws FlowableObjectNotFoundException<br/>when the task doesn't exist.

<hr/>

#### suspendTask

- `suspendTask (taskId:string, userId:string):void`

  Suspends the task. No check is done whether the user is known by the identity component.<br/><br/>@param taskId<br/>task to suspend, cannot be null.<br/>@param userId<br/>user that suspends the task.<br/>@throws FlowableObjectNotFoundException<br/>when the task doesn't exist.

<hr/>

#### activateTask

- `activateTask (taskId:string, userId:string):void`

  Activates the task. No check is done whether the user is known by the identity component.<br/><br/>@param taskId<br/>task to activate, cannot be null.<br/>@param userId<br/>user that activates the task.<br/>@throws FlowableObjectNotFoundException<br/>when the task doesn't exist.

<hr/>

#### delegateTask

- `delegateTask (taskId:string, userId:string):void`

  Delegates the task to another user. This means that the assignee is set and the delegation state is set to {@link DelegationState#PENDING}. If no owner is set on the task, the owner is set to<br/>the current assignee of the task.<br/><br/>@param taskId<br/>The id of the task that will be delegated.<br/>@param userId<br/>The id of the user that will be set as assignee.<br/>@throws FlowableObjectNotFoundException<br/>when no task exists with the given id.

<hr/>

#### resolveTask

- `resolveTask (taskId:string, variables?:Map<string, any>, transientVariables?:Map<string, any>):void`

  Marks that the assignee is done with this task and that it can be send back to the owner. Can only be called when this task is {@link DelegationState#PENDING} delegation. After this method<br/>returns, the {@link Task#getDelegationState() delegationState} is set to {@link DelegationState#RESOLVED}.<br/><br/>@param taskId<br/>the id of the task to resolve, cannot be null.<br/>@param variables<br/>@param transientVariables<br/>@throws FlowableObjectNotFoundException<br/>when no task exists with the given id.

<hr/>

#### complete

- `complete (taskId:string, userId?:string, variables?:Map<string, any>, transientVariables?:Map<string, any>, localScope?:boolean):void`

  Called when the task is successfully executed.<br/><br/>@param taskId<br/>the id of the task to complete, cannot be null.<br/>@param userId<br/>user that completes the task.<br/>@param variables<br/>task parameters. May be null or empty.<br/>@param transientVariables<br/>task parameters. May be null or empty.<br/>@param localScope<br/>If true, the provided variables will be stored task-local, instead of process instance wide (which is the default behaviour).<br/>@throws FlowableObjectNotFoundException<br/>when no task exists with the given id.<br/>@throws FlowableException<br/>when this task is {@link DelegationState#PENDING} delegation.

<hr/>

#### completeTaskWithForm

- `completeTaskWithForm (taskId:string, formDefinitionId:string, outcome:string, variables:Map<String, any>, userId?:string, transientVariables?:Map<String, any>, localScope?:boolean):void`

  Called when the task is successfully executed, and the task form has been submitted.<br/><br/>@param taskId<br/>the id of the task to complete, cannot be null.<br/>@param formDefinitionId<br/>the id of the form definition that is filled-in to complete the task, cannot be null.<br/>@param outcome<br/>the outcome of the completed form, can be null.<br/>@param variables<br/>values of the completed form. May be null or empty.<br/>@param userId<br/>user that completes the task.<br/>@param transientVariables<br/>additional transient values that need to added to the process instance transient variables. May be null or empty.<br/>@param localScope<br/>If true, the provided variables will be stored task-local, instead of process instance wide (which is the default for {@link #complete(String, Map)}).<br/>@throws FlowableObjectNotFoundException<br/>when no task exists with the given id.

<hr/>

#### getTaskFormModel

- `getTaskFormModel (taskId:string, ignoreVariables?:boolean):FormInfo`

  Gets a Form model instance of the task form of a specific task<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param ignoreVariables<br/>should the variables be ignored when fetching the form model?<br/>@throws FlowableObjectNotFoundException<br/>when the task or form definition doesn't exist.

<hr/>

#### setAssignee

- `setAssignee (taskId:string, userId:string):void`

  Changes the assignee of the given task to the given userId. No check is done whether the user is known by the identity component.<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param userId<br/>id of the user to use as assignee.<br/>@throws FlowableObjectNotFoundException<br/>when the task or user doesn't exist.

<hr/>

#### setOwner

- `setOwner (taskId:string, userId:string):void`

  Transfers ownership of this task to another user. No check is done whether the user is known by the identity component.<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param userId<br/>of the person that is receiving ownership.<br/>@throws FlowableObjectNotFoundException<br/>when the task or user doesn't exist.

<hr/>

#### getIdentityLinksForTask

- `getIdentityLinksForTask (taskId:string):IdentityLink[]`

  Retrieves the {@link IdentityLink}s associated with the given task. Such an {@link IdentityLink} informs how a certain identity (eg. group or user) is associated with a certain task (eg. as<br/>candidate, assignee, etc.)

<hr/>

#### addCandidateUser

- `addCandidateUser (taskId:string, userId:string):void`

  Convenience shorthand for {@link #addUserIdentityLink(String, String, String)}; with type {@link IdentityLinkType#CANDIDATE}<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param userId<br/>id of the user to use as candidate, cannot be null.<br/>@throws FlowableObjectNotFoundException<br/>when the task or user doesn't exist.

<hr/>

#### addCandidateGroup

- `addCandidateGroup (taskId:string, groupId:string):void`

  Convenience shorthand for {@link #addGroupIdentityLink(String, String, String)}; with type {@link IdentityLinkType#CANDIDATE}<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param groupId<br/>id of the group to use as candidate, cannot be null.<br/>@throws FlowableObjectNotFoundException<br/>when the task or group doesn't exist.

<hr/>

#### addUserIdentityLink

- `addUserIdentityLink (taskId:string, userId:string, identityLinkType:string):void`

  Involves a user with a task. The type of identity link is defined by the given identityLinkType.<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param userId<br/>id of the user involve, cannot be null.<br/>@param identityLinkType<br/>type of identityLink, cannot be null (@see {@link IdentityLinkType}).<br/>@throws FlowableObjectNotFoundException<br/>when the task or user doesn't exist.

<hr/>

#### addGroupIdentityLink

- `addGroupIdentityLink (taskId:string, groupId:string, identityLinkType:string):void`

  Involves a group with a task. The type of identityLink is defined by the given identityLink.<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param groupId<br/>id of the group to involve, cannot be null.<br/>@param identityLinkType<br/>type of identity, cannot be null (@see {@link IdentityLinkType}).<br/>@throws FlowableObjectNotFoundException<br/>when the task or group doesn't exist.

<hr/>

#### deleteCandidateUser

- `deleteCandidateUser (taskId:string, userId:string):void`

  Convenience shorthand for {@link #deleteUserIdentityLink(String, String, String)}; with type {@link IdentityLinkType#CANDIDATE}<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param userId<br/>id of the user to use as candidate, cannot be null.<br/>@throws FlowableObjectNotFoundException<br/>when the task or user doesn't exist.

<hr/>

#### deleteCandidateGroup

- `deleteCandidateGroup (taskId:string, groupId:string):void`

  Convenience shorthand for {@link #deleteGroupIdentityLink(String, String, String)}; with type {@link IdentityLinkType#CANDIDATE}<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param groupId<br/>id of the group to use as candidate, cannot be null.<br/>@throws FlowableObjectNotFoundException<br/>when the task or group doesn't exist.

<hr/>

#### deleteUserIdentityLink

- `deleteUserIdentityLink (taskId:string, userId:string, identityLinkType:string):void`

  Removes the association between a user and a task for the given identityLinkType.<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param userId<br/>id of the user involve, cannot be null.<br/>@param identityLinkType<br/>type of identityLink, cannot be null (@see {@link IdentityLinkType}).<br/>@throws FlowableObjectNotFoundException<br/>when the task or user doesn't exist.

<hr/>

#### deleteGroupIdentityLink

- `deleteGroupIdentityLink (taskId:string, groupId:string, identityLinkType:string):void`

  Removes the association between a group and a task for the given identityLinkType.<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param groupId<br/>id of the group to involve, cannot be null.<br/>@param identityLinkType<br/>type of identity, cannot be null (@see {@link IdentityLinkType}).<br/>@throws FlowableObjectNotFoundException<br/>when the task or group doesn't exist.

<hr/>

#### setPriority

- `setPriority (taskId:string, priority:number):void`

  Changes the priority of the task.<br/><br/>Authorization: actual owner / business admin<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param priority<br/>the new priority for the task.<br/>@throws FlowableObjectNotFoundException<br/>when the task doesn't exist.

<hr/>

#### setDueDate

- `setDueDate (taskId:string, dueDate:Date):void`

  Changes the due date of the task<br/><br/>@param taskId<br/>id of the task, cannot be null.<br/>@param dueDate<br/>the new due date for the task<br/>@throws FlowableException<br/>when the task doesn't exist.

<hr/>

#### setVariable

- `setVariable (taskId:string, variableName:string, value:any):void`

  set variable on a task. If the variable is not already existing, it will be created in the most outer scope. This means the process instance in case this task is related to an execution.

<hr/>

#### setVariables

- `setVariables (taskId:string, variables:Map<string, any>):void`

  set variables on a task. If the variable is not already existing, it will be created in the most outer scope. This means the process instance in case this task is related to an execution.

<hr/>

#### setVariableLocal

- `setVariableLocal (taskId:string, variableName:string, value:any):void`

  set variable on a task. If the variable is not already existing, it will be created in the task.

<hr/>

#### setVariablesLocal

- `setVariablesLocal (taskId:string, variables:Map<string, any>):void`

  set variables on a task. If the variable is not already existing, it will be created in the task.

<hr/>

#### getVariable

- `getVariable (taskId:string, variableName:string):any`

  get a variables and search in the task scope and if available also the execution scopes.

<hr/>

#### getVariableInstance

- `getVariableInstance (taskId:string, variableName:string):VariableInstance`

  The variable. Searching for the variable is done in all scopes that are visible to the given task (including parent scopes). Returns null when no variable value is found with the given name.<br/><br/>@param taskId<br/>id of task, cannot be null.<br/>@param variableName<br/>name of variable, cannot be null.<br/>@return the variable or null if the variable is undefined.<br/>@throws FlowableObjectNotFoundException<br/>when no execution is found for the given taskId.

<hr/>

#### hasVariable

- `hasVariable (taskId:string, variableName:string):boolean`

  checks whether or not the task has a variable defined with the given name, in the task scope and if available also the execution scopes.

<hr/>

#### getVariableLocal

- `getVariableLocal (taskId:string, variableName:string):any`

  checks whether or not the task has a variable defined with the given name.

<hr/>

#### getVariableInstanceLocal

- `getVariableInstanceLocal (taskId:string, variableName:string):VariableInstance`

  The variable for a task. Returns the variable when it is set for the task (and not searching parent scopes). Returns null when no variable is found with the given name.<br/><br/>@param taskId<br/>id of task, cannot be null.<br/>@param variableName<br/>name of variable, cannot be null.<br/>@return the variable or null if the variable is undefined.<br/>@throws FlowableObjectNotFoundException<br/>when no task is found for the given taskId.

<hr/>

#### hasVariableLocal

- `hasVariableLocal (taskId:string, variableName:string):boolean`

  checks whether or not the task has a variable defined with the given name, local task scope only.

<hr/>

#### getVariables

- `getVariables (taskId:string, variableNames?:string[]):Map<string,any>`

  get all variables and search in the task scope and if available also the execution scopes. If you have many variables and you only need a few, consider using<br/>{@link #getVariables(String, Collection)} for better performance.

<hr/>

#### getVariableInstances

- `getVariableInstances (taskId:string, variableNames?:string[]):Map<string,VariableInstance>`

  All variables visible from the given task scope (including parent scopes).<br/><br/>@param taskId<br/>id of task, cannot be null.<br/>@param variableNames<br/>the collection of variable names that should be retrieved.<br/>@return the variable instances or an empty map if no such variables are found.<br/>@throws FlowableObjectNotFoundException<br/>when no task is found for the given taskId.

<hr/>

#### getVariablesLocal

- `getVariablesLocal (taskId:string, variableNames?:string[]):Map<string,any>`

  get all variables and search only in the task scope. If you have many task local variables and you only need a few, consider using {@link #getVariablesLocal(String, Collection)} for better<br/>performance.

<hr/>

#### getVariableInstancesLocalByTaskIds

- `getVariableInstancesLocalByTaskIds (taskIds:Set<string>):VariableInstance[]`

  get all variables and search only in the task scope.

<hr/>

#### getVariableInstancesLocal

- `getVariableInstancesLocal (taskId:string, variableNames?:string[]):Map<string,VariableInstance>`

  All variable values that are defined in the task scope, without taking outer scopes into account. If you have many task local variables and you only need a few, consider using<br/>{@link #getVariableInstancesLocal(String, Collection)} for better performance.<br/><br/>@param taskId<br/>id of task, cannot be null.<br/>@return the variables or an empty map if no such variables are found.<br/>@throws FlowableObjectNotFoundException<br/>when no task is found for the given taskId.

<hr/>

#### removeVariable

- `removeVariable (taskId:string, variableName:string):void`

  Removes the variable from the task. When the variable does not exist, nothing happens.

<hr/>

#### removeVariableLocal

- `removeVariableLocal (taskId:string, variableName:string):void`

  Removes the variable from the task (not considering parent scopes). When the variable does not exist, nothing happens.

<hr/>

#### removeVariables

- `removeVariables (taskId:string, variableNames:string[]):void`

  Removes all variables in the given collection from the task. Non existing variable names are simply ignored.

<hr/>

#### removeVariablesLocal

- `removeVariablesLocal (taskId:string, variableNames:string[]):void`

  Removes all variables in the given collection from the task (not considering parent scopes). Non existing variable names are simply ignored.

<hr/>

#### getDataObjects

- `getDataObjects (taskId:string, dataObjectNames?:string[], locale?:string, withLocalizationFallback?:boolean):Map<string,DataObject>`

  All DataObjects visible from the given execution scope (including parent scopes).<br/><br/>@param taskId<br/>id of task, cannot be null.<br/>@param dataObjectNames<br/>the collection of DataObject names that should be retrieved.<br/>@param locale<br/>locale the DataObject name and description should be returned in (if available).<br/>@param withLocalizationFallback<br/>When true localization will fallback to more general locales if the specified locale is not found.<br/>@return the DataObjects or an empty map if no such variables are found.<br/>@throws FlowableObjectNotFoundException<br/>when no task is found for the given taskId.

<hr/>

#### getDataObject

- `getDataObject (taskId:string, dataObject:string, locale?:string, withLocalizationFallback?:boolean):DataObject`

  The DataObject. Searching for the DataObject is done in all scopes that are visible to the given task (including parent scopes). Returns null when no DataObject value is found with the given<br/>name.<br/><br/>@param taskId<br/>id of task, cannot be null.<br/>@param dataObject<br/>name of DataObject, cannot be null.<br/>@param locale<br/>locale the DataObject name and description should be returned in (if available).<br/>@param withLocalizationFallback<br/>When true localization will fallback to more general locales including the default locale of the JVM if the specified locale is not found.<br/>@return the DataObject or null if the variable is undefined.<br/>@throws FlowableObjectNotFoundException<br/>when no task is found for the given taskId.

<hr/>

#### addComment

- `addComment (taskId:string, processInstanceId:string, message:string, type?:string):Comment`

  Add a comment to a task and/or process instance.

<hr/>

#### saveComment

- `saveComment (comment:Comment):void`

  Update a comment to a task and/or process instance.

<hr/>

#### getComment

- `getComment (commentId:string):Comment`

  Returns an individual comment with the given id. Returns null if no comment exists with the given id.

<hr/>

#### deleteComments

- `deleteComments (taskId:string, processInstanceId:string):void`

  Removes all comments from the provided task and/or process instance

<hr/>

#### deleteComment

- `deleteComment (commentId:string):void`

  Removes an individual comment with the given id.<br/><br/>@throws FlowableObjectNotFoundException<br/>when no comment exists with the given id.

<hr/>

#### getTaskComments

- `getTaskComments (taskId:string, type?:string):Comment[]`

  The comments related to the given task.

<hr/>

#### getCommentsByType

- `getCommentsByType (type:string):Comment[]`

  All comments of a given type.

<hr/>

#### getTaskEvents

- `getTaskEvents (taskId:string):TaskEvent[]`

  The all events related to the given task.

<hr/>

#### getEvent

- `getEvent (eventId:string):TaskEvent`

  Returns an individual event with the given id. Returns null if no event exists with the given id.

<hr/>

#### getProcessInstanceComments

- `getProcessInstanceComments (processInstanceId:string, type?:string):Comment[]`

  The comments related to the given process instance.

<hr/>

#### createAttachment

- `createAttachment (attachmentType:string, taskId:string, processInstanceId:string, attachmentName:string, attachmentDescription:string, content?:any[], url?:string):Attachment`

  Add a new attachment to a task and/or a process instance and use an input stream to provide the content

<hr/>

#### saveAttachment

- `saveAttachment (attachment:Attachment):void`

  Update the name and description of an attachment

<hr/>

#### getAttachment

- `getAttachment (attachmentId:string):Attachment`

  Retrieve a particular attachment

<hr/>

#### getAttachmentContent

- `getAttachmentContent (attachmentId:string):any[]`

  Retrieve stream content of a particular attachment

<hr/>

#### getTaskAttachments

- `getTaskAttachments (taskId:string):Attachment[]`

  The list of attachments associated to a task

<hr/>

#### getProcessInstanceAttachments

- `getProcessInstanceAttachments (processInstanceId:string):Attachment[]`

  The list of attachments associated to a process instance

<hr/>

#### deleteAttachment

- `deleteAttachment (attachmentId:string):void`

  Delete an attachment

<hr/>

#### getSubTasks

- `getSubTasks (parentTaskId:string):Task[]`

  The list of subtasks for this parent task

<hr/>

#### isNotNull

- `isNotNull (property:any):boolean`

  The list of subtasks for this parent task

### TaskData

#### Methods

<hr/>

#### getId

- `getId ():string|undefined`

<hr/>

#### getRevision

- `getRevision ():number`

<hr/>

#### getOwner

- `getOwner ():string|undefined`

<hr/>

#### getAssigneeUpdatedCount

- `getAssigneeUpdatedCount ():number`

<hr/>

#### getOriginalAssignee

- `getOriginalAssignee ():string|undefined`

<hr/>

#### getAssignee

- `getAssignee ():string|undefined`

<hr/>

#### getDelegationState

- `getDelegationState ():string|undefined`

<hr/>

#### getParentTaskId

- `getParentTaskId ():string|undefined`

<hr/>

#### getName

- `getName ():string|undefined`

<hr/>

#### getLocalizedName

- `getLocalizedName ():string|undefined`

<hr/>

#### getDescription

- `getDescription ():string|undefined`

<hr/>

#### getLocalizedDescription

- `getLocalizedDescription ():string|undefined`

<hr/>

#### getPriority

- `getPriority ():number`

<hr/>

#### getCreateTime

- `getCreateTime ():Date|undefined`

<hr/>

#### getDueDate

- `getDueDate ():Date|undefined`

<hr/>

#### getSuspensionState

- `getSuspensionState ():number`

<hr/>

#### getCategory

- `getCategory ():string|undefined`

<hr/>

#### isIdentityLinksInitialized

- `isIdentityLinksInitialized ():boolean`

<hr/>

#### getExecutionId

- `getExecutionId ():string|undefined`

<hr/>

#### getProcessInstanceId

- `getProcessInstanceId ():string|undefined`

<hr/>

#### getProcessDefinitionId

- `getProcessDefinitionId ():string|undefined`

<hr/>

#### getScopeId

- `getScopeId ():string|undefined`

<hr/>

#### getSubScopeId

- `getSubScopeId ():string|undefined`

<hr/>

#### getScopeType

- `getScopeType ():string|undefined`

<hr/>

#### getScopeDefinitionId

- `getScopeDefinitionId ():string|undefined`

<hr/>

#### getTaskDefinitionKey

- `getTaskDefinitionKey ():string|undefined`

<hr/>

#### getFormKey

- `getFormKey ():string|undefined`

<hr/>

#### isDeleted

- `isDeleted ():boolean`

<hr/>

#### isCanceled

- `isCanceled ():boolean`

<hr/>

#### isCountEnabled

- `isCountEnabled ():boolean`

<hr/>

#### getVariableCount

- `getVariableCount ():number`

<hr/>

#### getIdentityLinkCount

- `getIdentityLinkCount ():number`

<hr/>

#### getClaimTime

- `getClaimTime ():Date|undefined`

<hr/>

#### getTenantId

- `getTenantId ():string`

<hr/>

#### getEventName

- `getEventName ():string|undefined`

<hr/>

#### getEventHandlerId

- `getEventHandlerId ():string|undefined`

<hr/>

#### isForcedUpdate

- `isForcedUpdate ():boolean`

