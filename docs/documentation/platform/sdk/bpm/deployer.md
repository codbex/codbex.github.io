# API: deployer

> Source: `bpm/deployer.ts`

API Deployer
* Provides methods for managing the lifecycle of Business Process Model and Notation (BPMN) definitions,
including deployment, undeployment, and deletion.

## Classes

### Deployer

API Deployer<br/>* Provides methods for managing the lifecycle of Business Process Model and Notation (BPMN) definitions,<br/>including deployment, undeployment, and deletion.

#### Methods

<hr/>

#### deployProcess

- `deployProcess (location:string):string`

  Deploys a new process definition from a specified location (e.g., a file path).<br/><br/>@param location The path or location of the BPMN XML file to be deployed.<br/>@returns The deployment ID assigned to the new process definition.

<hr/>

#### undeployProcess

- `undeployProcess (location:string):void`

  Undeploys a process definition previously deployed from the specified location.<br/><br/>@param location The path or location associated with the deployed BPMN file.

<hr/>

#### deleteProcess

- `deleteProcess (id:string, reason:string):void`

  Deletes a deployed process definition by its ID.<br/><br/>> **Note:** This permanently removes the process definition and all its associated history and runtime data.<br/><br/>@param id The ID of the process definition to delete.<br/>@param reason The reason for deleting the process definition (e.g., "Obsolete").

