---
date: 2024-07-12
title: Hyperion - Implement a simple BPM application for leave requests
categories:
  - technology
author: iliyan
---

Using __codbex__ [Hyperion](https://www.codbex.com/products/hyperion/) you can easily implement a BPM (Business process management) application in a minutes.

In this tutorial, I'm going to show you how you can implement an application for leave requests.

## A simple leave request application
Let's have the following use cases:
- employees who report to employee managers 
- employees want to submit leave requests for a particular period using a usable UI form
- employee managers must be the only one who can approve or decline these requests
- employee managers want to receive emails when a new request is submitted
- employees want to receive an email when their requests are processed

## Implementation steps

1. Start a [Hyperion](https://www.codbex.com/products/hyperion/) instance using [Docker](https://www.docker.com/)<br>
Open your terminal and execute the following:
    ```
    # mount a volume to preserve your changes during the image restarts
    HYPERION_WORKSPACE_DIR='/tmp/hyperion'
    
    IMAGE_VERSION='1.0.5' # use version 1.0.5 or later
    
    docker run --name codbex-hyperion --rm -p 80:80 \
        -v "$HYPERION_WORKSPACE_DIR:/target/dirigible" \
        ghcr.io/codbex/codbex-hyperion:$IMAGE_VERSION

    ```
1. Open Hyperion and create a simple BPM project starter
- Open Hyperion at [http://localhost](http://localhost)
- Login using the default user - username: `admin`, password: `admin`
- At the `Welcome` view search for `BPM` and select `BPM Project Starter` template<br>
  <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-select-template.png">
- Type project, file name (process name) and process identifier - for example `leave-request`, `leave-request-process` and `leave-request-id`
  <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-template-data.png">
- Click on `Ok` button<br>
- An BPM project starter will be automatically generated<br>
  <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-generated-bpm-project.png">
1. Let's see what was generated
   - `leave-request-process.bpmn` is a simple BPM process with a single service tasks
      - to have a JavaScript service task in Hyperion, you have to
        - set `Delegate Expression` to `${JSTask}`
           <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-js-task.png">
        - specify the path of your JS task using class field called `handler`. For example `leave-request/tasks/my-service-task.ts`
         <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-field-task.png"><br>
   - `tasks/my-service-task.ts` is the code which will be executed when task `MyServiceTask` is executed
   - `api/ProcessService.ts` is REST API which is has only one method for triggering a new process instance
   - `trigger-new-process.form` is modeler for a form which will trigger an instance of the generated process
     - in the `Code` tab, you can find the controller code and the method which is executed when the `Trigger` button is clicked.<br>It basically sends the form data to the generated REST API for process triggering
       <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-form-code-tab.png">
1. Next, you have to generate a usable UI from the form
  - Open the form `trigger-new-process.form`
  - Click on `Regenerate` button<br>
    <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-regenerate-form-button.png">
1. Now, let's check whether the generated project works.
- Navigate to generated `gen/trigger-new-process/forms/trigger-new-process/index.html` file and double-click on it
- You should see the form in the `Preview` tab.<br>
  <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-generated-form-preview.png"><br>
  If it is easier for you, you can open the form in a separate browser tab [http://localhost/services/web/leave-request/gen/trigger-new-process/forms/trigger-new-process/index.html](http://localhost/services/web/leave-request/gen/trigger-new-process/forms/trigger-new-process/index.html).<br>
  The result will be the same.
- Add values for the input fields `Parameter 1` and `Parameter 2`
- Click on `Trigger` button
- You should see a message which confirms that a process instance is triggered asynchronously
  <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-triggered-process.png"><br>
- Also, a log from the executed task `tasks/my-service-task.ts` should be available in the console once the task is executed
    <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-task-logged-message.png"><br>
1. BPM process<br>
We want to implement a process which has:
- a service tasks which sends a notification email to all employee managers when a new leave request is submitted (a new process instance is creaetd)
- a user task which waits for an employee manger to process (approve/decline) the leave request
- an exclusive gateway which routes the flow to different service task depending on a variable called `requestApproved`
- a task which notifies the requester that the request is approved
- a task which notifies the requester that the request is declined<br><br>
   In the end it will look like this:
   <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-process.png"><br>
1. Model the BPM process<br>
   Let's open the process `leave-request-process.bpmn` and modify it
    1. Employee managers notification task
    - Select task `MyServiceTask`
    - Set `Id` to `notify-approvers`
   - Set `Name` to `Notify approvers`
   - Edit `Class fields` and change `String value` from `leave-request/tasks/my-service-task.ts` to `leave-request/tasks/notify-approvers-task.ts`
   - Save the process file using the `Save the model` button
   - Rename file `my-service-task.ts` to `notify-approvers-task.ts`
   - Create a mail util file `mail-util.ts` in folder `tasks` with [this](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/b0cb728f37ec985e5ea34a9267f06e4d38fc557f/leave-request/tasks/mail-util.ts) content for sending emails or logging (if the mail configurations are not present)<br>
   - Delete the content of `notify-approvers-task.ts` and put [this](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/b0cb728f37ec985e5ea34a9267f06e4d38fc557f/leave-request/tasks/notify-approvers-task.ts) content
    1. Process request task
    - Drag and drop `User task` from `Activities`
    - Set `Id` to `process-request`
   - Set `Name` to `Process request`
   - Connect service task `Notify approvers` to `Process request`
    1. Add exclusive gateway
    - Drag and drop `Exclusive gateway` from `Gateways`
    - Connect user task `Process request` to the gateway
    1. Approved request notification task
    - Drag and drop `Service task` from `Activities`
    - Set `Id` to `send-approved-notification`
    - Set `Name` to `Send approved notification`
    - Set `${JSTask}` for `Delegate Expression`
    - Add class field with name `handler` and string value `leave-request/tasks/send-approved-notification.ts`
    - Create a file called `send-approved-notification.ts` in folder `leave-request/tasks` with [this](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/b0cb728f37ec985e5ea34a9267f06e4d38fc557f/leave-request/tasks/send-approved-notification.ts) content
    - Connect the gateway with `Send approved notification` task
    - Select the flow arrow and set
        - `Id` to `approved-flow`
        - `${requestApproved}` for `Flow condition`. This flow will be executed only when there is a process variable `requestApproved` with value `true`
          <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-approved-flow.png"><br>
    - Connect task `Send approved notification` to the end event
    - Save the process
    1. Declined request notification task
    - Drag and drop `Service task` from `Activities`
    - Set `Id` to `send-declined-notification`
    - Set `Name` to `Send declined notification`
    - Set `${JSTask}` for `Delegate Expression`
    - Add class field with name `handler` and string value `leave-request/tasks/send-declined-notification.ts`
    - Create a file called `send-declined-notification.ts` in folder `leave-request/tasks` with [this](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/b0cb728f37ec985e5ea34a9267f06e4d38fc557f/leave-request/tasks/send-declined-notification.ts) content
    - Connect the gateway with `Send declined notification` task
    - Select the flow arrow and set
        - `Id` to `declined-flow`
        - Select `Default flow` checkbox
    - Connect task `Send declined notification` to the end event
    - Save the process<br>
Here is the final version of the process:
<img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-modeled-process.png"><br>
If you have any issues with the modeling, you can right-click on process file `leave-request-process.bpmn` -> `Open With` -> `Code Editor` and put the file content from [this link](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/b0cb728f37ec985e5ea34a9267f06e4d38fc557f/leave-request/leave-request-process.bpmn).

1. Implement REST API<br>
   Open `leave-request/api/ProcessService.ts` and replace the content with [this](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/df625883f3243b988ab9142ad78233693cb834f5/leave-request/api/ProcessService.ts) one.<br>
   It uses the [BPM](https://www.codbex.com/documentation/platform/sdk/bpm/) and [security](https://www.codbex.com/documentation/platform/sdk/security/user/) APIs to trigger a new leave request process, approve/decline a request and to get details about a request.<br><br>
   Here are the implemented APIs:
- Create a new leave request<br>
  Example:
```shell
curl --header 'Authorization: Basic YWRtaW46YWRtaW4=' \
    --location 'http://localhost/services/ts/leave-request/api/ProcessService.ts/requests' \
    --header 'Content-Type: application/json' \
    --data '{
        "toDate": "aaa",
        "fromDate": "aaa"
    }'
```
- Approve a leave request<br>
  Example:
```shell
curl --header 'Authorization: Basic YWRtaW46YWRtaW4=' \
    --location --request PUT 'http://localhost/services/ts/leave-request/api/ProcessService.ts/requests/111/approve'
```
- Decline a leave request<br>
  Example:
```shell
curl --header 'Authorization: Basic YWRtaW46YWRtaW4=' \
    --location --request PUT 'http://localhost/services/ts/leave-request/api/ProcessService.ts/requests/111/decline'
```
- Get leave request details<br>
  Example:
```shell
curl --header 'Authorization: Basic YWRtaW46YWRtaW4=' \
    --location 'http://localhost/services/ts/leave-request/api/ProcessService.ts/requests/111/details'
```
1. Implement user interface for submitting new leave request<br>
You can create easily user interfaces using the codbex forms functionality.<br><br>
Let's create our first form.
   - remove the generated form `trigger-new-process.form` and corresponding `trigger-new-process.gen` file, since we will create a form from scratch
   - right-click on project `leave-request` -> `New` -> `Form Definition`
   - type `submit-leave-request.form` for name
   - click on `Create` button
   - open the created file `submit-leave-request.form`
   - now, we see the form editor with empty content
     <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-empty-form.png"><br>
   - drag and drop header, two date fields for from and to dates and a `Submit` button
     <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-submit-form.png"><br>
   - update the labels
   - set `fromDate` for from date `Model`
   - set `toDate` for to date `Model`
   - set `onSubmitClicked()` for submit button `Callback function` configuration
   - the `Code` tab is the place where the controller logic resides
     - set initial date for `fromDate` and `toDate`
     - implement the function `onSubmitClicked` which will send the model data to the implemented REST API
     - here is the code which you need
     ```
          $scope.model.fromDate = new Date();
          $scope.model.toDate = new Date();
        
          $scope.onSubmitClicked = function () {
              const data = JSON.stringify($scope.model);
              $http.post("/services/ts/leave-request/api/ProcessService.ts/requests", data)
                  .then(function (response) {
                      if (response.status != 202) {
                          alert(`Unable to create new leave request: '${response.message}'`);
                          return;
                      }
                      alert("Leave request has been created.\nResponse: " + JSON.stringify(response.data));
                  });
          }
     ``` 
  
   - save the form using `Save` button
   - generate the UI
     - right-click on `submit-leave-request.form` -> `Generate`
     - choose template `AngularJS Generator from Form Model`
       <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-generate-from-template.png"><br>
     - click on `OK` button
     - close file `submit-leave-request.form` if it is opened
     - open `submit-leave-request.form`
     - click on `Regenerate` button under `Designer` tab
       <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-regenerate-button.png"><br>
     - the generated UI should be located in folder `leave-request/gen/submit-leave-request/forms/submit-leave-request`<br>

1. Implement user interface for leave request processing
- create new form with name `process-leave-request.form`
- drag and drop
- header for the form title
- text field for the requester
- two date fields for from and to dates
- `Approve` and `Decline` buttons
  <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-process-leave-request-form.png"><br>
- update the labels
- set `requester` for requester `Model` config
- set `fromDate` for from date `Model`
- set `toDate` for to date `Model`
- set `onApproveClicked()` for approve button `Callback function` configuration
- set `onDeclineClicked()` for approve button `Callback function` configuration
- under the `Code` tab we will put the controller logic
- here is the code
    ```
        const url = new URL(window.location);
        const params = new URLSearchParams(url.search);
        const taskId = params.get("taskId");
        
        $scope.onApproveClicked = function () {
            const url = `/services/ts/leave-request/api/ProcessService.ts/requests/${taskId}/approve`;
            $http.put(url)
                .then(function (response) {
                if (response.status != 200) {
                    alert(`Unable to approve request: '${response.message}'`);
                    return;
                }
                $scope.entity = {};
                alert("Request Approved");
            });
        };
        
        $scope.onDeclineClicked = function () {
            const url = `/services/ts/leave-request/api/ProcessService.ts/requests/${taskId}/decline`;
            $http.put(url)
                .then(function (response) {
                if (response.status != 200) {
                    alert(`Unable to decline request: '${response.message}'`);
                    return;
                }
                $scope.entity = {};
                alert("Request Declined");
            });
        
        };
        
        const detailsUrl = `/services/ts/leave-request/api/ProcessService.ts/requests/${taskId}/details`;
        $http.get(detailsUrl)
            .then(function (response) {
                if (response.status != 200) {
                    alert(`Unable to get details for the request: '${response.message}'`);
                    return;
                }
                const details = response.data;
        
                // fill details
                $scope.model.requester = details.requester;
                $scope.model.fromDate = new Date(details.fromDate);
                $scope.model.toDate = new Date(details.toDate);
            });
    ``` 

- save the form using `Save` button
- generate the UI
  - right-click on `process-leave-request.form` -> `Generate`
  - choose template `AngularJS Generator from Form Model`
  - click on `OK` button
  - close file `process-leave-request.form` if it is opened
  - open `process-leave-request.form`
  - click on `Regenerate` button under `Designer` tab
  - the generated UI should be located in folder `leave-request/gen/process-leave-request/forms/process-leave-request`
- now, we have to register the form in the BPM process
    - open the generated UI page `leave-request/gen/process-leave-request/forms/process-leave-request/index.html`
    - copy the path `/services/web/leave-request/gen/process-leave-request/forms/process-leave-request/index.html` from the `Preview` tab
      <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-process-leave-request-preview.png"><br>
    - open `leave-request-process.bpmn`
    - select task `Process request`
    - set the copied path `/services/web/leave-request/gen/process-leave-request/forms/process-leave-request/index.html` for `Form key`
      <img src="{{ site.baseurl }}/images/2024-07-12-leave-request-bpm-app/steps-process-form-key.png"><br>

## Summary
Let's summarize what you can do with Hyperion
- aaa
- bbb
- ccc

  The project we implemented can be found in [this GitHub project](https://github.com/codbex/codbex-sample-bpm-leave-request).

I hope you enjoyed this blog. Stay tuned for more great functionality by __codbex__!<br>
If you have any questions, ideas or want to contribute, feel free [to contact us](https://www.codbex.com/contact/).