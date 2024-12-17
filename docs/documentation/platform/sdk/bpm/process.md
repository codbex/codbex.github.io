# Process

## Basic Usage

The BPM API allows you to interact with business process models, start processes, and manage execution contexts.

### Starting a Process

To start a process, you can use the `start` function provided by the BPM API.

```javascript
import { process } from "sdk/bpm"

process.start("hello", {
    variable1: "value1"
});
```

## Creating a Business Process Model

To create a new business process model, follow these steps:

* Create a new BPMN file.
* Open the BPMN file with a code editor.
* Paste the process definition XML into the file.

```xml
<?xml version='1.0' encoding='UTF-8'?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef">
  <process id="hello" name="hello" isExecutable="true">
    <startEvent id="sid-3334E861-7999-4B89-B8B0-11724BA17A3E"/>
    <serviceTask id="sayHello" name="SayHello" flowable:class="org.eclipse.dirigible.components.engine.bpm.flowable.delegate.DirigibleCallDelegate">
      <extensionElements>
        <flowable:field name="handler">
          <flowable:string><![CDATA[bpmFlows/hello.js]]></flowable:string>
        </flowable:field>
      </extensionElements>
    </serviceTask>
    <sequenceFlow id="sid-797626AE-B2F6-4C00-ABEE-FB30ADC177E4" sourceRef="sid-3334E861-7999-4B89-B8B0-11724BA17A3E" targetRef="sayHello"/>
    <endEvent id="sid-70B488C1-384A-4E19-8091-1B12D1AEC7FD"/>
    <sequenceFlow id="sid-645847E8-C959-48BD-816B-2E9CC4A2F08A" sourceRef="sayHello" targetRef="sid-70B488C1-384A-4E19-8091-1B12D1AEC7FD"/>
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_hello">
    <bpmndi:BPMNPlane bpmnElement="hello" id="BPMNPlane_hello">
      <bpmndi:BPMNShape bpmnElement="sid-3334E861-7999-4B89-B8B0-11724BA17A3E" id="BPMNShape_sid-3334E861-7999-4B89-B8B0-11724BA17A3E">
        <omgdc:Bounds height="30.0" width="30.0" x="103.0" y="78.0"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sayHello" id="BPMNShape_sayHello">
        <omgdc:Bounds height="80.0" width="100.0" x="300.0" y="105.0"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-70B488C1-384A-4E19-8091-1B12D1AEC7FD" id="BPMNShape_sid-70B488C1-384A-4E19-8091-1B12D1AEC7FD">
        <omgdc:Bounds height="28.0" width="28.0" x="562.0" y="78.0"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge bpmnElement="sid-797626AE-B2F6-4C00-ABEE-FB30ADC177E4" id="BPMNEdge_sid-797626AE-B2F6-4C00-ABEE-FB30ADC177E4">
        <omgdi:waypoint x="133.0" y="93.0"/>
        <omgdi:waypoint x="201.0" y="93.0"/>
        <omgdi:waypoint x="201.0" y="145.0"/>
        <omgdi:waypoint x="300.0" y="145.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-645847E8-C959-48BD-816B-2E9CC4A2F08A" id="BPMNEdge_sid-645847E8-C959-48BD-816B-2E9CC4A2F08A">
        <omgdi:waypoint x="400.0" y="145.0"/>
        <omgdi:waypoint x="466.0" y="145.0"/>
        <omgdi:waypoint x="466.0" y="92.0"/>
        <omgdi:waypoint x="562.0" y="92.0"/>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
```

## Creating a Delegate

In a new project called bpmFlows, add a delegate file named hello.js or hello.mjs with the following content:

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

## Delegate Parameters

* Type: ServiceType
* Class: org.eclipse.dirigible.bpm.flowable.DirigibleCallDelegate
* Field for Service Callback: handler (e.g., 'bpmFlows/hello.js')
* Field for Service Engine Type: type (e.g., 'javascript')


## Functions

---

Function     | Description | Returns
------------ | ----------- | --------
**start(key, parameters)**   | Starts a process by its key and initial parameters and returns the process instance id | *string*
**getExecutionContext()**   | Returns the execution context object | *ExecutionContext*


## Objects

---

#### ExecutionContext

Function     | Description | Returns
------------ | ----------- | --------
**getId()**   | Returns the id from the execution context | *string*
**isActive()**   | Returns the isActive flag from the execution context | *string*
**isScope()**   | Returns the isScope flag from the execution context | *string*
**isConcurrent()**   | Returns the isConcurrent flag from the execution context | *string*
**isEnded()**   | Returns the isEnded flag from the execution context | *string*
**isEventScope()**   | Returns the isEventScope flag from the execution context | *string*
**isMultiInstanceRoot()**   | Returns the isMultiInstanceRoot flag from the execution context | *string*
**isCountEnabled()**   | Returns the isCountEnabled flag from the execution context | *string*
**suspensionState()**   | Returns the suspensionState flag from the execution context | *string*
**startTime()**   | Returns the start time from the execution context | *string*
**eventSubscriptionCount()**   | Returns the event subscription count from the execution context | *string*
**taskCount()**   | Returns the task count from the execution context | *string*
**jobCount()**   | Returns the job count from the execution context | *string*
**timerJobCount()**   | Returns the timer job count from the execution context | *string*
**suspendedJobCount()**   | Returns the suspended job count from the execution context | *string*
**deadLetterJobCount()**   | Returns the dead letter job count from the execution context | *string*
**variableCount()**   | Returns the variable count from the execution context | *string*
**identityLinkCount()**   | Returns the identity link count from the execution context | *string*
**processDefinitionId()**   | Returns the process definition id from the execution context | *string*
**processDefinitionKey()**   | Returns the process definition key from the execution context | *string*
**activityId()**   | Returns the activity id from the execution context | *string*
**processInstanceId()**   | Returns the process instance id from the execution context | *string*
**parentId()**   | Returns the parent process id from the execution context | *string*
**rootProcessInstanceId()**   | Returns the root process instance id from the execution context | *string*
**forcedUpdate()**   | Returns the forcedUpdate flag from the execution context | *string*
**revision()**   | Returns the revision from the execution context | *string*
**tenantId()**   | Returns the tenant id from the execution context | *string*