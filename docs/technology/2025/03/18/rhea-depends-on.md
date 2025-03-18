---
title:  How "Depends On" feature in Rhea Simplifies App Development
description: In today’s fast-paced business world, low-code platforms are revolutionizing app development, enabling users to create powerful applications with minimal
date: 2025-03-18
author: nikol
editLink: false
---
# How "Depends On" feature in Rhea Simplifies App Development

## Introduction

In today’s fast-paced business world, low-code platforms are revolutionizing app development, enabling users to create powerful applications with minimal coding. Rhea Edition simplifies application modeling by offering a robust environment for designing domain models and custom forms. One standout feature of Rhea is **"Depends On"**, which enables that data coming from different entities is seamlessly interconnected. This unique feature automatically adjusts related elements, making it easier to manage complex app relationships and build scalable solutions faster in the No-Code manner.

## Case I - Country-City Dependency

### Entities

#### Create a New Project
- Create a new project and name it **`sales-orders-app`**.
- Right-click on **Project → New → Entity Data Model** and name it **`sales-order-app.edm`**.

#### Country Entity

- Add Perspective for **`Country`**

![addPerspective](../../../../images/2025-03-18-rhea-depends-on/addPerspective.png)

- Create an entity and set its name to **`Country`**

![dropEntity](../../../../images/2025-03-18-rhea-depends-on/dropEntity.gif)

- Right-click on the entity and open **`Properties`**
- In the **User Interface** section:
    - Set **Layout type** to **`Manage Master Entities`**
    - Choose the already defined **perspective**: **`Country`**

![entityMenu](../../../../images/2025-03-18-rhea-depends-on/entityMenu.png)

- Add text field for **`Name`**

#### City Entity

- Create entity and set its name to **`City`**
- Right-click on the entity
    - From the **General** tab, set **Entity Type** to **`Dependent`**
    - Open **Properties**
    - In the **User Interface** section:
        - Set **Layout type** to **`Manage Details Entity`**
        - Choose the already defined perspective - **`Country`**
- Add text field for **`Name`**
- Add relationship to **`Country`** and set its properties

![relatioship](../../../../images/2025-03-18-rhea-depends-on/relationship.gif)

Configuration for **`Country`** field

 - From **User Interface** view, choose:
   - **`Dropdown`** for widget type
   - **`Id`** for dropdown key
   - **`Name`** for dropdown value

#### Customer Entity
- Add perspective for **`Customer`**
- Create entity **`Customer`**
- Open **Properties**
- In the **User Interface** section:
    - Set **Layout type** to **`Manage Master Entity`**
    - Choose the already defined perspective - **`Customer`**
- Add text field for **`Name`**
- Add relationship to **`Country`**

Configuration for **`Country`** field

 - From **User Interface** view, choose:
    - **`Dropdown`** for widget type
    - **`Id`** for dropdown key
    - **`Name`** for dropdown value

- Add relationship to **`City`**

Configuration for **`City`** field

  - From **User Interface** view, choose:
    - **`Dropdown`** for widget type
    - **`Id`** for dropdown key
    - **`Name`** for dropdown value
- Add text field for **`Address`**

### Configuration:

In the **`Country`** field set:

- Depends on Property: **`Country`**
- Depends on Entity: **`Country`**
- Value From: **`Id`**
- Filter By: **`Country`**

![country-city-depends-on](../../../../images/2025-03-18-rhea-depends-on/country-city-depends-on.png)

### Case I - Country-City Dependency - Showcase

![country-city-depends-on-demo](../../../../images/2025-03-18-rhea-depends-on/countryCityDependsDemo.gif)

> **Note:** This is the so-called **“Country-City Dependency”**, which represents the relation via the **Id** of the referred entity. This configuration selects a **Country**, and the **City dropdown** will then display only the cities that belong to the chosen **Country**.

## Case II - Product-UoM

### Entities

#### Customer Payment Entity
- Create entity **`CustomerPayment`**
- Right-click on the entity. From **General** tab, set **Entity Type** to *Dependent*.
- Open **Properties**
- In the **User Interface** section:
    - Set **Layout type** to **`Manage Details Entity`**
    - Choose the already defined perspective - **`Customer`**
- Add text field for **`Name`**
- Add relationship to **`Customer`** and set its properties:

<img src="../../../../images/2025-03-18-rhea-depends-on/customerPaymentRelationship.png" width="200" height="200">

Configuration for **`Customer`** field

- From **User Interface** view, choose:
    - **`Dropdown`** for widget type
    - **`Id`** for dropdown key
    - **`Name`** for dropdown value
  
- Add number field for **`Amount`**

#### Unit Of Measurement Entity
- Add perspective for **`UoM`**
- Create entity **`UoM`** (Unit of Measurement)
- Open **Properties**
- In the **User Interface** section:
    - Set **Layout type** to **`Manage Master Entity`**
    - Choose the already defined perspective - **`UoM`**
- Add text field for **`Name`**

#### Product Entity
- Add perspective for **`Product`**
- Create entity **`Product`**
- Open **Properties**
- In the **User Interface** section:
    - Set **Layout type** to **`Manage Master Entity`**
    - Choose the already defined perspective - **`Product`**
- Add text field for **`Name`**
- Add relationship to **`UoM`**

Configuration for **`UoM`** field

  - From **User Interface** view, choose:
    - **`Dropdown`** for widget type
    - **`Id`** for dropdown key
    - **`Name`** for dropdown value
    
- Add decimal field for **`Price`**

#### Sales Order Entity
- Add perspective for **`SalesOrder`**
- Create entity **`SalesOrder`**
- Open **Properties**
- In the **User Interface** section:
    - Set **Layout type** to **`Manage Master Entity`**
    - Choose the already defined perspective - **`Product`**
- Add relationship to **`SalesOrder`**

Configuration for **`SalesOrder`** field

  - From **User Interface** view, choose:
    - **`Dropdown`** for widget type
    - **`Id`** for dropdown key
    - **`Name`** for dropdown value
    
- Add date field for **`Date`**

#### Sales Order Item Entity
- Create entity **`SalesOrderItem`**
- Right-click on the entity. From **General tab**, set **Entity Type** to **`Dependent`**.
- Open **Properties**
- In the **User Interface** section:
    - Set **Layout type** to **`Manage Details Entity`**
    - Choose the already defined perspective - **`SalesOrder`**
- Add relationship to **`SalesOrder`** and set its properties.
- Add relationship to **`Product`**

Configuration for **`Product`** field
     
  - From **User Interface** view, choose:
     - **`Dropdown`** for widget type
     - **`Id`** for dropdown key
     - **`Name`** for dropdown value
    
- Add relationship to **`UoM`**

Configuration for **`UoM`** field

  - From **User Interface** view, choose:
    - **`Dropdown`** for widget type
    - **`Id`** for dropdown key
    - **`Name`** for dropdown value

### Configuration

In the **`UoM`** field set: 

- Depends on Property: **`Product`**
- Depends on Entity: **`Product`**
- Value From: **`UoM`**
- Filter By: **`Id`**

### Case II - Product-UoM - Showcase

![products-uom](../../../../images/2025-03-18-rhea-depends-on/productsUoM.gif)

> **Note:** This configuration selects the chosen **Product**, retrieves its **UoM**, and automatically sets it for the **Sales Order Item**.

## Case III - Product-Price

### Entities

In this case we will reuse the entities from the previous section, just will add one more configuration for the user interface:

### Configuration
- Add decimal field for **`Price`**

In the **`Price`** field set:

- Depends on Property: **`Product`**
- Depends on Entity: **`Product`**
- Value From: **`Price`**


### Case III - Product-Price - Showcase

![products-uom](../../../../images/2025-03-18-rhea-depends-on/productsUoM.gif)

> **Note:** This configuration selects the chosen **Product**, retrieves its **Price**, and automatically sets it for the **Sales Order Item**.

## Case IV - Order-Customer

### Entities

#### Sales Order Payment Entity
- Create entity **`SalesOrderPayment`**
- Right-click on the entity. From **General tab**, set **Entity Type** to **`Dependent`**.
- Open **Properties**
- In the **User Interface** section:
    - Set **Layout type** to **`Manage Details Entity`**
    - Choose the already defined perspective - **`SalesOrder`**
- Add relationship to **`SalesOrder`** and set its properties.
- Add relationship to **`Customer`**

Configuration for **`Customer`** field

  - From **User Interface** view, choose:
    - **`Dropdown`** for widget type
    - **`Id`** for dropdown key
    - **`Name`** for dropdown value

### Configuration:

In the **`Customer`** field set:

- Depends on Property: **`SalesOrder`**
- Depends on Entity: **`SalesOrder`**
- Value From: **`Customer`**
- Filter By: **`Id`**


### Case IV - Order-Customer - Showcase

![customer](../../../../images/2025-03-18-rhea-depends-on/customer.gif)

> **Note:** This configuration selects **Sales Order**, and the **Customer dropdown** will then display only the **Customers** that belong to the chosen **Sales Order**.

## Case V - Customer-CustomerPayment

### Entities

In this case we will reuse the entities from the previous section, just will add one more configuration for the user interface:

- Add relationship to **`CustomerPayment`**

Configuration for **`CustomerPayment`** field

  - From **User Interface** view, choose:
    - **`Dropdown`** for widget type
    - **`Id`** for dropdown key
    - **`Title`** for dropdown value

### Configuration:

In the **`Customer`** field set:

- Depends on Property: **`Customer`**
- Depends on Entity: **`CustomerPayment`**
- Value From: **`Id`**
- Filter By: **`Customer`**

### Case V - Customer-CustomerPayment - Showcase

![customer-payment-1](../../../../images/2025-03-18-rhea-depends-on/customerPayment1.gif)

> **Note:** This configuration retrieves the **Customer**, and the **CustomerPayment dropdown** will then display only the **CustomerPayments** that belong to the chosen **Customer**.

![customer-payment-2](../../../../images/2025-03-18-rhea-depends-on/customerPayment2.gif)

## Case VI - CustomerPayment-Amount

- Add decimal field for **`Amount`**

### Configuration:

In the **`Amount`** field set:

- Depends on Property: **`CustomerPayment`**
- Depends on Entity: **`CustomerPayment`**
- Value From: **`Amount`**

### Case VI - CustomerPayment-Amount - Showcase

![payment-amount](../../../../images/2025-03-18-rhea-depends-on/paymentAmount.gif)

> **Note:** This configuration retrieves the **CustomerPayment** and automatically sets the **Payment Amount**.

With the last three configurations ensure that:
1. We retrieve only the **Customer** from the **Sales Orders**.
2. We include their respective **Payments**.
3. We automatically set the **Payment Amounts**.

## **Final EDM**

![final-EDM](../../../../images/2025-03-18-rhea-depends-on/finalEDMFile.png)

1. Right-click on **EDM file → Generate** and choose **Entity Data to JSON Transformer Model**.

<img src="../../../../images/2025-03-18-rhea-depends-on/generateModel.png" width="200" height="200">

2. **Right-click on `.model` file**, choose **Application - Full stack**, fill fields in the next window with your details, and click **Generate**.

<img src="../../../../images/2025-03-18-rhea-depends-on/generateApp.png" width="200" height="400">

## Conclusion
In this guide, we’ve shown how [Rhea](https://www.codbex.com/products/rhea) by codbex simplifies building a Sales Order App. With features like the "Depends On" functionality, businesses can easily create dynamic apps with minimal coding.
- [**`Case I`**](#case-i-country-city-dependency) - Country-City Dependency -  represents the relation via the “Id” of the referred entity.

- [**`Case II`**](#case-ii-product-uom) - Product-UoM - This case retrieves the field from another entity and automatically populates it in our entity.

- [**`Case III`**](#case-iii-product-price) - Multi-step process that combines multiple uses of **`"Depends On"`** to achieve a final result.

- [**`Case IV`**](#case-iv-order-customer) - Entity Configuration: Managing Master and Dependent Entities

Ready to build your own? [Click here](https://github.com/codbex/codbex-sample-model-depends-on) to learn more or access the Sales Order App code.
Rhea by codbex helps organizations turn complex visions into fully-functional apps quickly, without heavy technical expertise. The **`"Depends On"`** feature ensures seamless data flow between related entities, keeping your app consistent and efficient. For businesses looking to stay ahead, Rhea by codbex offers a flexible, cost-effective solution to build tailored applications and manage data with ease.

