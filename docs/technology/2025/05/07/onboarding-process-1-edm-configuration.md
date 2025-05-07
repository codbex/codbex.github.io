---
title:  Onboarding Process Tutorial 1 EDM Configuration
description: Designing a solid data structure is one of the first and most important steps in building any application. In this blog post, we'll walk through
date: 2025-05-07
author: nikol
editLink: false
---

# Onboarding Process Tutorial 1: EDM Configuration

## Introduction

Designing a solid data structure is one of the first and most important steps in building any application. In this blog post, we'll walk through how to create an Entity Data Model (EDM) using **codbex Rhea** with a simple, real-world sample project called **Sample Employee Onboarding Process**. Whether you're new to data modeling or just looking to brush up your skills, this guide will help you understand how entities, relationships, and data types come together to form the foundation of your application's data layer. By the end, you'll have a working example you can build on and adapt to your own projects.

### Create a New Project
- Create a new project and name it **`employee-onboarding`**.

![create project](../../../../images/2025-05-07-onboarding-process/createProject.gif)

- Right-click on **Project → New → Entity Data Model** and name it **`employee-onboarding.edm`**.

![create edm](../../../../images/2025-05-07-onboarding-process/createEDM.gif)

### Navigations
- Add **`Employees`** and **`Tasks`** navigations

![create navigation](../../../../images/2025-05-07-onboarding-process/createNavigation.gif)

### Entities

#### 1. Department Entity

- Create an entity
- Right-click on the entity and open **`Properties`**
- In the **General** section:
        - Set **Name** to **`Department`**
        - Set **Type** to **`Setting Entity`**

![create entity](../../../../images/2025-05-07-onboarding-process/createEntity.gif)

- Add text field for **`Name`**, make it **required** and set its length to be 100 characters

![adding name field](../../../../images/2025-05-07-onboarding-process/addNameField.gif)

#### 2. Onboarding Status Entity

- Create an entity and set its name to **`Onboarding Status`**
- Right-click on the entity and open **`Properties`**
- In the **General** section:
        - Set **Type** to **`Setting Entity`**

- Add text field for **`Name`**, make it **required** and set its length to be 30 characters

#### 3. Employee Entity

- Add Perspective for **`Employee`** this way

![add perspective](../../../../images/2025-05-07-onboarding-process/createPerspective.gif)

- Create an entity and set its name to **`Employee`**

- Right-click on the entity and open **`Properties`**
- In the **User Interface** section:
        - Set **Layout type** to **`Manage Master Entity`**
        - Choose the already defined perspective - **`Employee`**

![entityMenu](../../../../images/2025-05-07-onboarding-process/setPerspective.gif)

- Add text field for **`Name`**, make it **required** and set its length to be 100 characters

- Add field for **`Email`** and set its length to be 150 characters
- Right-click on the entity and open field **`Properties`**
- In the **User Interface** section:
    - Choose **Widget type** to be **`e-mail`**

![adding emal](../../../../images/2025-05-07-onboarding-process/addEmailField.gif)

- Add field for **`StartDate`** 
- Right-click on the entity and open field **`Properties`**
- In the **Data** section:
    - Choose **Data type** to be **`DATE`**
- In the **User Interface** section:
    - Choose **Widget type** to be **`Date picker`**
    
![adding date](../../../../images/2025-05-07-onboarding-process/addDateField.gif)

- Add relationship to **`Department`**

Configuration for **`Department`** field

 - From **User Interface** view, choose:
   - **`Dropdown`** for widget type
   - **`Id`** for dropdown key
   - **`Name`** for dropdown value

   ![plain relationship](../../../../images/2025-05-07-onboarding-process/addRelationship.gif)

- Add relationship to **`Onboarding Status`**

Configuration for **`Onboarding Status`** field

 - From **User Interface** view, choose:
   - **`Dropdown`** for widget type
   - **`Id`** for dropdown key
   - **`Name`** for dropdown value


#### 4. Onboarding Task Entity

- Add Perspective for **`Onboarding Task`** this way

- Create an entity and set its name to **`Onboarding Task`**

- Right-click on the entity and open **`Properties`**
- In the **User Interface** section:
        - Set **Layout type** to **`Manage Master Entity`**
        - Choose the already defined perspective - **`Onboarding Task`**

- Add relationship to **`Employee`**

Configuration for **`Employee`** field

 - From **User Interface** view, choose:
   - **`Dropdown`** for widget type
   - **`Id`** for dropdown key
   - **`Name`** for dropdown value

- Add relationship to **`Employee`** and set field name to be **`Asignee`**

Configuration for **`Asignee`** field

 - From **User Interface** view, choose:
   - **`Dropdown`** for widget type
   - **`Id`** for dropdown key
   - **`Name`** for dropdown value

- Add relationship to **`Onboarding Status`** and set field name to be **`Status`**

Configuration for **`Status`** field

 - From **User Interface** view, choose:
   - **`Dropdown`** for widget type
   - **`Id`** for dropdown key
   - **`Name`** for dropdown value

- Add field for **`CompletedAt`** 
- Right-click on the entity and open field **`Properties`**
- In the **Data** section:
    - Choose **Data type** to be **`DATE`**
- In the **User Interface** section:
    - Choose **Widget type** to be **`Date picker`**

## **Final EDM**

![final-EDM](../../../../images/2025-05-07-onboarding-process/finalEDM.png)

1. Right-click on **EDM file → Generate** and choose **Entity Data to JSON Transformer Model**.

![generate project -1](../../../../images/2025-05-07-onboarding-process/generateProject-1.png)

2. **Right-click on `.model` file**, choose **Application - Full stack**, fill fields in the next window with your details, and click **Generate**.

![generate project -2](../../../../images/2025-05-07-onboarding-process/generateProject-2.png)

### Addind Data
- Right-click on **Project → New → Folder** and name it **`data`**.
- Right-click on **data → New → CSVFile** and name it **`onboarding-task-status.csv`**.
- Open it and paste the following code:

```
ONBOARDINGSTATUS_ID,ONBOARDINGSTATUS_NAME
1,Pending
2,In Progress
3,Completed
```

- Right-click on **= → New → CSV Import Model** and name it **`employee-onboarding.csvim`**.
- Open it and paste the following code
```
{
  "files": [
    {
      "table": "CODBEX_ONBOARDINGSTATUS",
      "schema": "PUBLIC",
      "file": "/employee-onboarding/data/onboarding-task-status.csv",
      "header": true,
      "useHeaderNames": true,
      "delimField": ",",
      "delimEnclosing": "'",
      "distinguishEmptyFromNull": true,
      "version": ""
    }
  ]
}
```

### Publishing

- Publish the project
- Open [Dashboard](http://localhost:80/services/web/dashboard/index.html) and now u can see the application

## Conclusion

Ready to build your own? [Click here](LINK) to learn more or access the Employee Onboarding Sample App.
By following this guide, you've taken the first steps in building a well-structured Entity Data Model using **`codbex Rhea`**. Through the **`Sample Employee Onboarding Process`**, we've demonstrated how to define entities, set up relationships, and create a model that accurately represents your data. Whether you're scaling this up for a larger system or just experimenting to learn, this foundation will serve you well in any project. Keep exploring, keep modeling—and don’t forget, a well-designed data model is the backbone of a successful application.
