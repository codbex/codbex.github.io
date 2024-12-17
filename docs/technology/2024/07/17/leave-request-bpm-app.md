---
title: Hyperion - Implement a BPM application for leave requests
description: Using Hyperion you can easily implement BPM (Business process management) applications in a few minutes
date: 2024-07-17
author: iliyan
editLink: false
---

# Hyperion - Implement a BPM application for leave requests

Using __codbex__ [Hyperion](https://www.codbex.com/products/hyperion/) you can easily implement BPM (Business process management) applications in a few minutes.

In this tutorial, I'm going to show you how you can implement an application for leave requests.

## A simple leave request application
Let's have the following use cases:
- employees who report to employee managers 
- employees want to submit leave requests for a particular period using a modern user interface
- employee managers must be the only one who can approve or decline these requests
- employee managers want to receive emails when a new request is submitted
- employees want to receive an email when their requests are processed (approved or declined)

---
## Implementation steps
Follow the steps below or watch the recorded video.<br>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/ZIN2QdD6zYk" frameborder="0" allowfullscreen></iframe>

1. Start a [Hyperion](https://www.codbex.com/products/hyperion/) instance using [Docker](https://www.docker.com/)<br>
Open your terminal and execute the following:
    ```shell
    # mount a volume to preserve your changes during the image restarts
    HYPERION_WORKSPACE_DIR='/tmp/hyperion'
    IMAGE_VERSION='1.0.7' # use version 1.0.7 or later
    
    docker run --name codbex-hyperion --rm -p 80:80 \
        -v "$HYPERION_WORKSPACE_DIR:/target/dirigible" \
        ghcr.io/codbex/codbex-hyperion:$IMAGE_VERSION

    ```
1. Open Hyperion and create a simple BPM project starter
- open Hyperion at [http://localhost](http://localhost)
- login using the default user - username: `admin`, password: `admin`
- At the `Welcome` view search for `BPM` and select `BPM Project Starter` template. If the view is missing - `Window` -> `Show View` -> `Welcome`<br>
  <a href="/images/2024-07-17-leave-request-bpm-app/steps-select-template.png" target="_blank">
  <img src="/images/2024-07-17-leave-request-bpm-app/steps-select-template.png" alt="steps-select-template.png">
  </a>
- type project, file name (process name) and process identifier - for example `leave-request`, `leave-request-process` and `leave-request-id`
  <a href="/images/2024-07-17-leave-request-bpm-app/steps-template-data.png" target="_blank">
  <img src="/images/2024-07-17-leave-request-bpm-app/steps-template-data.png" alt="steps-template-data.png">
  </a>
- click on `Ok` button<br>
- a BPM project starter will be automatically generated for you<br>
  <a href="/images/2024-07-17-leave-request-bpm-app/steps-generated-bpm-project.png" target="_blank">
  <img src="/images/2024-07-17-leave-request-bpm-app/steps-generated-bpm-project.png" alt="steps-generated-bpm-project.png">
  </a>
1. Let's see what was generated
   - `leave-request-process.bpmn` is a simple BPM process with a single JavaScript service tasks
      - to have a JavaScript service task in Hyperion, you have to
        - set `Delegate Expression` to `${JSTask}`
          <a href="/images/2024-07-17-leave-request-bpm-app/steps-js-task.png" target="_blank">
          <img src="/images/2024-07-17-leave-request-bpm-app/steps-js-task.png" alt="steps-js-task.png">
          </a>
        - specify the path of your JS task using class field called `handler`. For example `leave-request/tasks/my-service-task.ts`
          <a href="/images/2024-07-17-leave-request-bpm-app/steps-field-task.png" target="_blank">
          <img src="/images/2024-07-17-leave-request-bpm-app/steps-field-task.png" alt="steps-field-task.png">
          </a>
   - `tasks/my-service-task.ts` is the task code which will be executed when task `MyServiceTask` is executed
   - `api/ProcessService.ts` is REST API which has only one method for triggering a new process instance
   - `trigger-new-process.form` is modeler for a form which will trigger an instance of the generated process
     <a href="/images/2024-07-17-leave-request-bpm-app/trigger-process-form.png" target="_blank">
     <img src="/images/2024-07-17-leave-request-bpm-app/trigger-process-form.png" alt="trigger-process-form.png">
     </a>
     - In the `Code` tab, you can find the controller code and the method which is executed when the `Trigger` button is clicked.<br>It basically sends the form data to the generated REST API for process triggering
       <a href="/images/2024-07-17-leave-request-bpm-app/steps-form-code-tab.png" target="_blank">
       <img src="/images/2024-07-17-leave-request-bpm-app/steps-form-code-tab.png" alt="steps-form-code-tab.png">
       </a>  
1. Next, you have to generate a usable UI from the form
  - open the form `trigger-new-process.form`
  - click on `Regenerate` button<br>
    <a href="/images/2024-07-17-leave-request-bpm-app/steps-regenerate-form-button.png" target="_blank">
    <img src="/images/2024-07-17-leave-request-bpm-app/steps-regenerate-form-button.png" alt="steps-regenerate-form-button.png">
    </a>  
1. Now, let's check whether the generated project works.
- navigate to generated `gen/trigger-new-process/forms/trigger-new-process/index.html` file and double-click on it
- you should see the form in the `Preview` tab<br>
  <a href="/images/2024-07-17-leave-request-bpm-app/steps-generated-form-preview.png" target="_blank">
  <img src="/images/2024-07-17-leave-request-bpm-app/steps-generated-form-preview.png" alt="steps-generated-form-preview.png">
  </a>  
  If it is easier for you, you can open the form in a separate browser tab [http://localhost/services/web/leave-request/gen/trigger-new-process/forms/trigger-new-process/index.html](http://localhost/services/web/leave-request/gen/trigger-new-process/forms/trigger-new-process/index.html).<br>
  The result will be the same.
- add values for the input fields `Parameter 1` and `Parameter 2`
- click on `Trigger` button
- you should see a message which confirms that a process instance is triggered asynchronously
  <a href="/images/2024-07-17-leave-request-bpm-app/steps-triggered-process.png" target="_blank">
  <img src="/images/2024-07-17-leave-request-bpm-app/steps-triggered-process.png" alt="steps-triggered-process.png">
  </a>  
  - Also, a log from the executed task `tasks/my-service-task.ts` should be available in the console once the task is executed
    <a href="/images/2024-07-17-leave-request-bpm-app/steps-task-logged-message.png" target="_blank">
    <img src="/images/2024-07-17-leave-request-bpm-app/steps-task-logged-message.png" alt="steps-task-logged-message.png">
    </a>  
1. BPM process<br><br>
We want to implement a process which has:
   - a service tasks which sends a notification email to all employee managers when a new leave request is submitted (a new process instance is created)
   - a user task which waits for an employee manger to process (approve/decline) the leave request
   - an exclusive gateway which routes the flow to different service task depending on a variable called `requestApproved`
   - a task which notifies the requester that the request is approved
   - a task which notifies the requester that the request is declined<br><br>
      In the end it will look like this:
      <a href="/images/2024-07-17-leave-request-bpm-app/steps-process.png" target="_blank">
      <img src="/images/2024-07-17-leave-request-bpm-app/steps-process.png" alt="steps-process.png">
      </a>  
1. Model the BPM process<br>
   Let's open the process `leave-request-process.bpmn` and modify it
     1. Employee managers notification task
     - select task `MyServiceTask`
      - set `Id` to `notify-approvers`
   - set `Name` to `Notify approvers`
   - edit `Class fields` and change `String value` from `leave-request/tasks/my-service-task.ts` to `leave-request/tasks/notify-approvers-task.ts`
   - save the process file using the `Save the model` button
   - rename file `tasks/my-service-task.ts` to `tasks/notify-approvers-task.ts`
   - create a mail util file `mail-util.ts` in folder `tasks` with [this](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/b0cb728f37ec985e5ea34a9267f06e4d38fc557f/leave-request/tasks/mail-util.ts) content for sending emails or logging (if the mail configurations are not present)<br>
   - delete the content of `tasks/notify-approvers-task.ts` and put [this](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/e9bee0415495aa6428bd4bce7ee2c1322619b604/leave-request/tasks/notify-approvers-task.ts) content
     1. Process request task
    - drag and drop a `User task` from `Activities`
    - set `Id` to `process-request`
    - set `Name` to `Process request`
    - We need to specify who can process this user task. For now, let's set `Assignments` to candidate group called `ADMINISTRATOR`. Later on, we will create a dedicated group for employee managers.
      <a href="/images/2024-07-17-leave-request-bpm-app/steps-user-task-assignments.png" target="_blank">
      <img src="/images/2024-07-17-leave-request-bpm-app/steps-user-task-assignments.png" alt="steps-user-task-assignments.png">
      </a>  
    - connect service task `Notify approvers` to `Process request`
    1. Add exclusive gateway
    - drag and drop a `Exclusive gateway` from `Gateways`
    - connect user task `Process request` to the gateway
    1. Approved request notification task
    - drag and drop a `Service task` from `Activities`
    - set `Id` to `send-approved-notification`
    - set `Name` to `Send approved notification`
    - set `${JSTask}` for `Delegate Expression`
    - add class field with name `handler` and string value `leave-request/tasks/send-approved-notification.ts`
      <a href="/images/2024-07-17-leave-request-bpm-app/set-handler.png" target="_blank">
      <img src="/images/2024-07-17-leave-request-bpm-app/set-handler.png" alt="set-handler.png">
      </a>
    - create a file called `send-approved-notification.ts` in folder `tasks` with [this](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/b0cb728f37ec985e5ea34a9267f06e4d38fc557f/leave-request/tasks/send-approved-notification.ts) content
    - connect the gateway with `Send approved notification` task
    - select the flow arrow and set
        - `Id` to `approved-flow`
        - `${requestApproved}` for `Flow condition`. This flow will be executed only when there is a process variable `requestApproved` with value `true`
          <a href="/images/2024-07-17-leave-request-bpm-app/steps-approved-flow.png" target="_blank">
          <img src="/images/2024-07-17-leave-request-bpm-app/steps-approved-flow.png" alt="steps-approved-flow.png">
          </a>  
    - connect task `Send approved notification` to the end event<br>
    - save the process
    1. Declined request notification task
    - drag and drop a `Service task` from `Activities`
    - set `Id` to `send-declined-notification`
    - set `Name` to `Send declined notification`
    - set `${JSTask}` for `Delegate Expression`
    - add class field with name `handler` and string value `leave-request/tasks/send-declined-notification.ts`
    - create a file called `send-declined-notification.ts` in folder `tasks` with [this](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/b0cb728f37ec985e5ea34a9267f06e4d38fc557f/leave-request/tasks/send-declined-notification.ts) content
    - connect the gateway with `Send declined notification` task
    - select the flow arrow
      - set `Id` to `declined-flow`
      - select `Default flow` checkbox
    - connect task `Send declined notification` to the end event
    - save the process<br>
Here is the final version of the process:
<a href="/images/2024-07-17-leave-request-bpm-app/steps-modeled-process.png" target="_blank">
<img src="/images/2024-07-17-leave-request-bpm-app/steps-modeled-process.png" alt="steps-modeled-process.png">
</a>  
If you have any issues with the modeling, you can right-click on process file `leave-request-process.bpmn` -> `Open With` -> `Code Editor` and put the file content from [this link](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/5cab08ef7713b8c54fd4206ae163de201e9d15b7/leave-request/leave-request-process.bpmn).

1. Implement REST API<br>
   Open `api/ProcessService.ts` and replace the content with [this](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/c00bf2e4f882e3022394ec7640a399e5329041bb/leave-request/api/ProcessService.ts) one.<br>
   It uses the [BPM](https://www.codbex.com/documentation/platform/sdk/bpm/) and [security](https://www.codbex.com/documentation/platform/sdk/security/user/) APIs to trigger a new leave request process, approve/decline a request and to get details about a request.<br><br>
   Here are the implemented APIs:
- create a new leave request<br>
  Example:
```shell
curl --header 'Authorization: Basic YWRtaW46YWRtaW4=' \
    --header 'Content-Type: application/json' \
    --location 'http://localhost/services/ts/leave-request/api/ProcessService.ts/requests' \
    --data '{
        "fromDate": "2024-07-18T09:39:43.638Z",
        "toDate": "2024-07-19T09:39:43.638Z"
    }'
```
- approve a leave request<br>
  Example:
```shell
curl --header 'Authorization: Basic YWRtaW46YWRtaW4=' \
  --location --request PUT 'http://localhost/services/ts/leave-request/api/ProcessService.ts/requests/46/approve'
```
- decline a leave request<br>
  Example:
```shell
curl --header 'Authorization: Basic YWRtaW46YWRtaW4=' \
  --location --request PUT 'http://localhost/services/ts/leave-request/api/ProcessService.ts/requests/46/decline'
```
- get leave request details<br>
  Example:
```shell
curl --header 'Authorization: Basic YWRtaW46YWRtaW4=' \
    --location 'http://localhost/services/ts/leave-request/api/ProcessService.ts/requests/46/details'
```
1. Implement user interface for submitting new leave request<br>
You can create easily user interfaces using the codbex forms functionality.<br><br>
Let's create our first form.
   - remove the generated form `trigger-new-process.form` and corresponding `trigger-new-process.gen` file, since we will create a new from scratch
   - right-click on project `leave-request` -> `New` -> `Form Definition`
   - type `submit-leave-request.form` for name
   - click on `Create` button
   - open the created file `submit-leave-request.form`
   - now, we see the form editor with empty content
     <a href="/images/2024-07-17-leave-request-bpm-app/steps-empty-form.png" target="_blank">
     <img src="/images/2024-07-17-leave-request-bpm-app/steps-empty-form.png" alt="steps-empty-form.png">
     </a>  
   - drag and drop header, two date fields for from and to dates and a `Submit` button
     <a href="/images/2024-07-17-leave-request-bpm-app/steps-submit-form.png" target="_blank">
     <img src="/images/2024-07-17-leave-request-bpm-app/steps-submit-form.png" alt="steps-submit-form.png">
     </a>  
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
       <a href="/images/2024-07-17-leave-request-bpm-app/steps-generate-from-template.png" target="_blank">
       <img src="/images/2024-07-17-leave-request-bpm-app/steps-generate-from-template.png" alt="steps-generate-from-template.png">
       </a>  
     - click on `OK` button
     - close file `submit-leave-request.form` if it is opened
     - open `submit-leave-request.form`
     - click on `Regenerate` button under `Designer` tab
       <a href="/images/2024-07-17-leave-request-bpm-app/steps-regenerate-button.png" target="_blank">
       <img src="/images/2024-07-17-leave-request-bpm-app/steps-regenerate-button.png" alt="steps-regenerate-button.png">
       </a>
     - the generated UI should be located in folder `gen/submit-leave-request/forms/submit-leave-request`<br>
     - if you have issues with the form modeling, you can get the from code from [here](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/b0cb728f37ec985e5ea34a9267f06e4d38fc557f/leave-request/submit-leave-request.form)

1. Implement user interface for leave request processing
   - create new form with name `process-leave-request.form`
   - drag and drop
     - header for the form title
     - text field for the requester
     - two date fields for from and to dates
     - `Approve` and `Decline` buttons
       <a href="/images/2024-07-17-leave-request-bpm-app/steps-process-leave-request-form.png" target="_blank">
       <img src="/images/2024-07-17-leave-request-bpm-app/steps-process-leave-request-form.png" alt="steps-process-leave-request-form.png">
       </a>  
   - update the labels
   - set `requester` for requester `Model` configuration
   - set `fromDate` for `From date` `Model` configuration
   - set `toDate` for `To date` `Model` configuration
   - set `onApproveClicked()` for approve button `Callback function` configuration
   - set `onDeclineClicked()` for decline button `Callback function` configuration
   - under the `Code` tab, put the following logic
        <pre>
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
        </pre>
    - save the form using `Save` button
    - generate the UI
      - right-click on `process-leave-request.form` -> `Generate`
      - choose template `AngularJS Generator from Form Model`
      - click on `OK` button
      - close file `process-leave-request.form` if it is opened
      - open `process-leave-request.form`
      - click on `Regenerate` button under `Designer` tab
      - the generated UI should be located in folder `leave-request/gen/process-leave-request/forms/process-leave-request`
      - if you have issues with the form modeling, you can get the from code from [here](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/b0cb728f37ec985e5ea34a9267f06e4d38fc557f/leave-request/process-leave-request.form)
    - now, we have to register the form in the BPM process
        - open the generated UI page `gen/process-leave-request/forms/process-leave-request/index.html`
        - copy the path `/services/web/leave-request/gen/process-leave-request/forms/process-leave-request/index.html` from the `Preview` tab
            <a href="/images/2024-07-17-leave-request-bpm-app/steps-process-leave-request-preview.png" target="_blank">
            <img src="/images/2024-07-17-leave-request-bpm-app/steps-process-leave-request-preview.png" alt="steps-process-leave-request-preview.png">
            </a>  
        - open `leave-request-process.bpmn`
        - select task `Process request`
        - set the copied path `/services/web/leave-request/gen/process-leave-request/forms/process-leave-request/index.html` to `Form key` configuration
          <a href="/images/2024-07-17-leave-request-bpm-app/steps-process-form-key.png" target="_blank">
          <img src="/images/2024-07-17-leave-request-bpm-app/steps-process-form-key.png" alt="steps-process-form-key.png">
          </a>

1. Mail configurations<br>
  We will need some mail configurations if we want to send real emails. Otherwise, mails will be logged in the console.<br>
  You can easily get a email testing account from [mailtrap.io](https://mailtrap.io/)<br>
  Under `Integration`-> `SMTP`, you can find the needed credentials.
  <a href="/images/2024-07-17-leave-request-bpm-app/mailtrap-configurations.png" target="_blank">
    <img src="/images/2024-07-17-leave-request-bpm-app/mailtrap-configurations.png" alt="mailtrap-configurations.png">
  </a>
  - for SMTP you need the following variables:
    
    | Variable Name                      | Description                                      | Example value             | 
    |------------------------------------|--------------------------------------------------|---------------------------|
    | DIRIGIBLE_MAIL_USERNAME            | username                                         | `my_username`             |
    | DIRIGIBLE_MAIL_PASSWORD            | password                                         | `my_password_123`         |
    | DIRIGIBLE_MAIL_TRANSPORT_PROTOCOL  | transport protocol                               | `smtp`                    |
    | DIRIGIBLE_MAIL_SMTP_HOST           | SMTP host                                        | `sandbox.smtp.mailtrap.io` |
    | DIRIGIBLE_MAIL_SMTP_PORT           | SMTP port                                        | `2525`                    |
    | DIRIGIBLE_MAIL_SMTP_AUTH           | whether authentication is required `true`/`false` | `true`                    |

    - for SMTPS you need the following variables:
    
   | Variable Name                      | Description                                       | Example value              | 
   |------------------------------------|---------------------------------------------------|----------------------------|
   | DIRIGIBLE_MAIL_USERNAME            | username                                          | `my_username`              |
   | DIRIGIBLE_MAIL_PASSWORD            | password                                          | `my_password_123`          |
   | DIRIGIBLE_MAIL_TRANSPORT_PROTOCOL  | transport protocol                                | `smtps`                     |
   | DIRIGIBLE_MAIL_SMTPS_HOST           | SMTPS host                                        | `sandbox.smtp.mailtrap.io` |
   | DIRIGIBLE_MAIL_SMTPS_PORT           | SMTPS port                                        | `2525`                     |
   | DIRIGIBLE_MAIL_SMTPS_AUTH           | whether authentication is required `true`/`false` | `true`                     |

    - to start the Hyperion image with the needed mail configurations use the following command
        ```shell
        HYPERION_WORKSPACE_DIR='/tmp/hyperion'
        IMAGE_VERSION='1.0.7' # use version 1.0.7 or later
        
        docker run --name codbex-hyperion --rm -p 80:80 \
            -v "$HYPERION_WORKSPACE_DIR:/target/dirigible" \
            -e DIRIGIBLE_MAIL_USERNAME=<username> \
            -e DIRIGIBLE_MAIL_PASSWORD=<pass> \
            -e DIRIGIBLE_MAIL_TRANSPORT_PROTOCOL=smtp \
            -e DIRIGIBLE_MAIL_SMTP_HOST=sandbox.smtp.mailtrap.io \
            -e DIRIGIBLE_MAIL_SMTP_PORT=<port> \
            -e DIRIGIBLE_MAIL_SMTP_AUTH=true \
            ghcr.io/codbex/codbex-hyperion:$IMAGE_VERSION
        ```
1. Now, we can test our application
   1. Create new leave request
      - make sure that all files are saved
      - publish the project using `Publish all` button<br>
        <a href="/images/2024-07-17-leave-request-bpm-app/steps-publish-all-button.png" target="_blank">
            <img src="/images/2024-07-17-leave-request-bpm-app/steps-publish-all-button.png" alt="steps-publish-all-button.png" style="width: 15rem;">
        </a>
      - wait until the project is published successfully<br>
        <a href="/images/2024-07-17-leave-request-bpm-app/steps-published-projects.png" target="_blank">
            <img src="/images/2024-07-17-leave-request-bpm-app/steps-published-projects.png" alt="steps-published-projects.png" style="width: 15rem;">
        </a>
      - open the submit form at [http://localhost/services/web/leave-request/gen/submit-leave-request/forms/submit-leave-request/index.html](http://localhost/services/web/leave-request/gen/submit-leave-request/forms/submit-leave-request/index.html)
      - select dates for `From` and `To`
      - click on `Submit` button
      - you should see a confirmation alert<br>
        <a href="/images/2024-07-17-leave-request-bpm-app/steps-submitted-form.png" target="_blank">
            <img src="/images/2024-07-17-leave-request-bpm-app/steps-submitted-form.png" alt="steps-submitted-form.png">
        </a>
      - a new email should be received in your mailbox
        <a href="/images/2024-07-17-leave-request-bpm-app/new-leave-request-email.png" target="_blank">
        <img src="/images/2024-07-17-leave-request-bpm-app/new-leave-request-email.png" alt="new-leave-request-email.png">
        </a>
      - you can open the BPM perspective using the [Processes Workspace](http://localhost/services/web/ide-bpm-workspace/bpm-perspective.html) button and check the created process<br>
        <a href="/images/2024-07-17-leave-request-bpm-app/processes-workspace.png" target="_blank">
            <img src="/images/2024-07-17-leave-request-bpm-app/processes-workspace.png" alt="processes-workspace.png" style="width: 15rem;">
        </a>
      - Here you can select our process instance (in my case the instance with id `5`) and see that the process is stopped at user task `Process request`. It will wait there until the leave request is processed.<br>
        <a href="/images/2024-07-17-leave-request-bpm-app/process-instance.png" target="_blank">
            <img src="/images/2024-07-17-leave-request-bpm-app/process-instance.png" alt="process-instance.png">
        </a>
      - In `Process Context` tab you can check the process variables. In our case, there are values for the leave request.
      - the UI has a lot of useful views and actions which can help you to manage your BPM processes
   1. Process the submitted leave request
       - open the inbox UI at [http://localhost/services/web/inbox/](http://localhost/services/web/inbox/) or use the link from the email.
        Inbox UI is the place where you can find all tasks (BPM user tasks in our case) which are applicable for the current user.
        <a href="/images/2024-07-17-leave-request-bpm-app/steps-process-inbox.png" target="_blank">
            <img src="/images/2024-07-17-leave-request-bpm-app/steps-process-inbox.png" alt="steps-process-inbox.png">
        </a>
      - select the created task and claim it using the `Claim` button
      - now, you can open the registered form for processing using the `Open Form` button
        <a href="/images/2024-07-17-leave-request-bpm-app/open-form-button.png" target="_blank">
            <img src="/images/2024-07-17-leave-request-bpm-app/open-form-button.png" alt="open-form-button.png">
        </a>
      - when you click it, you will see the processing form which we implemented with details for the current request
        <a href="/images/2024-07-17-leave-request-bpm-app/process-leave-request-form.png" target="_blank">
            <img src="/images/2024-07-17-leave-request-bpm-app/process-leave-request-form.png" alt="process-leave-request-form.png">
        </a>
      - let's approve the request by clicking on `Approve` button
      - an alert for confirmation should be displayed
        <a href="/images/2024-07-17-leave-request-bpm-app/approved-request.png" target="_blank">
        <img src="/images/2024-07-17-leave-request-bpm-app/approved-request.png" alt="approved-request.png">
        </a>
      - an email for the approved leave request should be received in your inbox
        <a href="/images/2024-07-17-leave-request-bpm-app/approved-leave-request-email.png" target="_blank">
        <img src="/images/2024-07-17-leave-request-bpm-app/approved-leave-request-email.png" alt="approved-leave-request-email.png">
        </a>

1. Authentication and authorization<br>
To make our application ready for production, we have to add authentication and authorization.<br>
With [Hyperion](https://www.codbex.com/products/hyperion/) it is an easy task.<br>
- Let's define two roles `employee` and `employee-manager`
  - create a folder called `security`
  - right click on folder `security` -> `New` -> `Roles Definitions`
  - set name `roles.roles`
  - click `Create` button
  - open file `roles.roles`
  - edit the predefined entries to match our use case
      <a href="/images/2024-07-17-leave-request-bpm-app/roles-file.png" target="_blank">
       <img src="/images/2024-07-17-leave-request-bpm-app/roles-file.png" alt="roles-file.png">
      </a>
  - save using the `Save` button
- Now, we have to protect the created forms and exposed REST APIs.<br>
  Here are the requirements:
        - users with `employee` role should have access to
            - submit form
            - REST API for creating new leave request (process instance)
        - users with `employee-manager` role should have access to
            - leave request processing form
            - REST API for approve/decline leave request
        - leave requests must be processable only by users with role `employee-manager`<br> 
To implement these requirements
  - right click on folder `security` -> `New` -> `Access Constraints`
  - type `access.access` for name
  - open file `access.access`
  - edit the predefined constraints to match our use case
    <a href="/images/2024-07-17-leave-request-bpm-app/access-constraints.png" target="_blank">
      <img src="/images/2024-07-17-leave-request-bpm-app/access-constraints.png" alt="access-constraints.png">
    </a>
    You can replace the content of the file with [this one](https://github.com/codbex/codbex-sample-bpm-leave-request/blob/b0cb728f37ec985e5ea34a9267f06e4d38fc557f/leave-request/security/access.access) if it is easier for you.<br>
  Now, let's open the forms - [submit form](http://localhost/services/web/leave-request/gen/submit-leave-request/forms/submit-leave-request/index.html) and [process form](http://localhost/services/web/leave-request/gen/process-leave-request/forms/process-leave-request/index.html?taskId=103)
    <a href="/images/2024-07-17-leave-request-bpm-app/submit-from-forbidden.png" target="_blank">
    <img src="/images/2024-07-17-leave-request-bpm-app/submit-from-forbidden.png" alt="submit-from-forbidden.png">
    </a>
    <a href="/images/2024-07-17-leave-request-bpm-app/process-from-forbidden.png" target="_blank">
    <img src="/images/2024-07-17-leave-request-bpm-app/process-from-forbidden.png" alt="process-from-forbidden.png">
    </a>
  Both forms must be protected.
  - open the process `leave-request-process.bpmn`
  - select user task `Process request`
  - click on `Assignments`
    <a href="/images/2024-07-17-leave-request-bpm-app/task-assignments.png" target="_blank">
    <img src="/images/2024-07-17-leave-request-bpm-app/task-assignments.png" alt="task-assignments.png">
    </a>
  - change `Candidate groups` from `ADMINISTRATOR` to `employee-manager`
    <a href="/images/2024-07-17-leave-request-bpm-app/changed-assignments.png" target="_blank">
    <img src="/images/2024-07-17-leave-request-bpm-app/changed-assignments.png" alt="changed-assignments.png">
    </a>
  - click `Save`
  - save the process file
  - publish the project

1. Create users for testing<br>
- Now, to test our scenario we need two users
  - employee user `john.doe.employee@example.com` with role `employee`
  - employee manager user `emily.stone.mngr@example.com` with role `employee-manager`
- To create these users follow the steps:
  - open [the security perspective](http://localhost/services/web/ide-security/index.html) using the `Security` button<br>
    <a href="/images/2024-07-17-leave-request-bpm-app/security-perspective-button.png" target="_blank">
    <img src="/images/2024-07-17-leave-request-bpm-app/security-perspective-button.png" alt="security-perspective-button.png" style="width: 15rem;">
    </a>
  - create user `john.doe.employee@example.com` with role `employee` in the default tenant
    <a href="/images/2024-07-17-leave-request-bpm-app/employee-user.png" target="_blank">
    <img src="/images/2024-07-17-leave-request-bpm-app/employee-user.png" alt="employee-user.png">
    </a>
  - create user `emily.stone.mngr@example.com` with role `employee-manager` in the default tenant
    <a href="/images/2024-07-17-leave-request-bpm-app/employee-manager-user.png" target="_blank">
    <img src="/images/2024-07-17-leave-request-bpm-app/employee-manager-user.png" alt="employee-manager-user.png">
    </a>
1. Finally, test the whole scenario again with the created users
- open the [submit form](http://localhost/services/web/leave-request/gen/submit-leave-request/forms/submit-leave-request/index.html) (you may need to logout first or open an incognito window) and login with the employee user `john.doe.employee@example.com`
- submit a new leave request
  <a href="/images/2024-07-17-leave-request-bpm-app/employee-new-leave-request.png" target="_blank">
  <img src="/images/2024-07-17-leave-request-bpm-app/employee-new-leave-request.png" alt="employee-new-leave-request.png">
  </a>
- check your mailbox
  <a href="/images/2024-07-17-leave-request-bpm-app/employee-leave-request-email.png" target="_blank">
  <img src="/images/2024-07-17-leave-request-bpm-app/employee-leave-request-email.png" alt="employee-leave-request-email.png">
  </a>
- open the inbox UI at [http://localhost/services/web/inbox/](http://localhost/services/web/inbox/) or use the link from the email (you may need to logout first or open an incognito window)
- login with the employee manager user `emily.stone.mngr@example.com`
- claim the task and open the form using the `Open Form` button
  <a href="/images/2024-07-17-leave-request-bpm-app/employee-manager-open-form.png" target="_blank">
  <img src="/images/2024-07-17-leave-request-bpm-app/employee-manager-open-form.png" alt="employee-manager-open-form.png">
  </a>
- this time, let's decline the request
  <a href="/images/2024-07-17-leave-request-bpm-app/employee-manager-decline-task.png" target="_blank">
  <img src="/images/2024-07-17-leave-request-bpm-app/employee-manager-decline-task.png" alt="employee-manager-decline-task.png">
  </a>
- check the mailbox
  <a href="/images/2024-07-17-leave-request-bpm-app/employee-manager-declined-email.png" target="_blank">
  <img src="/images/2024-07-17-leave-request-bpm-app/employee-manager-declined-email.png" alt="employee-manager-declined-email.png">
  </a>

Congratulations, your application is ready! 

---
## Summary
Using [Hyperion](https://www.codbex.com/products/hyperion/) you can
  - implement simple and complicated BPM processes using [Flowable](https://www.flowable.com/)
  - model modern user interfaces using forms (UI builder)
  - write code in TypeScript
  - use the comprehensive [codbex SDK](https://www.codbex.com/documentation/platform/sdk) which uses different modern open source projects for messaging, jobs scheduling, REST, OData, mails etc.
  - benefit from the [codbex platform, tooling and modules](https://www.codbex.com/documentation/)
  - add authentication and authorization to your application

The project we implemented can be found in [this GitHub repository](https://github.com/codbex/codbex-sample-bpm-leave-request).

I hope you enjoyed this blog. Stay tuned for more great functionality by __codbex__!<br>
If you have any questions, ideas or want to contribute, feel free [to contact us](https://www.codbex.com/contact/).
