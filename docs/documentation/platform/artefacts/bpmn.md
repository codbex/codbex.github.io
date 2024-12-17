# Business Process Model and Notation

## Overview:

The __codbex__ platform provides support for BPMN (Business Process Model and Notation) v2.0 files, allowing users to model, design, and execute business processes within the runtime container. Below is an overview of the BPMN support in the platform:

::: tip
File extension: `*.bpmn`
:::

### BPMN v2.0 Support:

#### Modeling Environment:

The __codbex__ platform includes a visual modeling environment for BPMN 2.0. Users can create and edit BPMN diagrams through a web-based graphical editor, allowing for the design of business processes using BPMN notation.

#### Graphical Editor:

The graphical editor within the platform enables users to draw BPMN diagrams by dragging and dropping elements onto the canvas. It provides an intuitive interface for defining the structure and flow of business processes.

#### BPMN Elements:

The __codbex__ platform supports a variety of BPMN 2.0 elements, including tasks, gateways, events, and connectors. Users can model complex processes by combining these elements in a visual representation.

#### Process Validation:

The BPMN editor in __codbex__ platform often includes validation features to ensure that the modeled processes adhere to BPMN 2.0 standards. This helps in identifying and correcting errors in the design phase.

#### Integration with Other Artifacts:

BPMN diagrams can be integrated with other artifacts in the platform. For example, BPMN processes may interact with scripting services, database tables, or web services within the same __codbex__ environment.

#### Execution of BPMN Processes:

The platform supports the execution of BPMN processes. Once a BPMN diagram is created and saved, it can be deployed and executed within the runtime environment. This enables the automation of business processes defined in BPMN.

#### Collaboration and Version Control:

The __codbex__ platform offer collaboration features, allowing multiple users to work on BPMN diagrams simultaneously. Additionally, version control capabilities help in managing different versions of BPMN processes.

#### Monitoring and Analytics:

Depending on the features available in the specific version of the __codbex__ platform, there are variety monitoring and analytics tools to track the execution of BPMN processes. These tools provide insights into process performance and bottlenecks.

### How to Use BPMN:

#### Access BPMN Editor:

* Log in to your __codbex__ platform instance and navigate to the BPMN modeling environment.

#### Create a New BPMN Diagram:

* Start a new BPMN diagram, either from scratch or by importing an existing BPMN 2.0 file.

#### Model the Business Process:

* Use the graphical editor to model the business process by adding BPMN elements, connecting them, and defining the flow.

#### Validate and Save:

* Validate the BPMN diagram to ensure it follows BPMN 2.0 standards. Save the diagram in the environment.

#### Deploy and Execute:

* Deploy the BPMN process to the runtime environment. Once deployed, it can be triggered and executed as needed.

### Collaborate and Monitor (Optional):

* Collaborate with other users if needed and monitor the execution of BPMN processes using available tools.

## Notes

Please note that the specific features and user interface details may vary based on the version of __codbex__ platform you are using. Always refer to the official documentation or release notes for the most up-to-date information on BPMN support in platform.

The BPMN artefacts are processed by the [BPM Engine](../engines/bpm.md).
