# FeatureTracker App

## Overview

This application, built on the Frappe Framework, is tailored specifically manage the new features requests

## Installing App

1. Install the App to the bench from the Repository:

```
bench get-app --branch [branch-name] featuretracker git@github.com:mahmoudhaney/FeatureTracker.git
```

2. Install the App to the site:

```
bench --site [site-name] install-app featuretracker
```

3. Migrate the changes:

```
bench --site [site-name] migrate
```

4. Build the App:

```
bench --site [site-name] build
```

## Updating the App


1. Update the featuretracker App

```
bench update --reset --apps featuretracker
```

2. Migrate the changes:

```
bench --site [site-name] migrate
```

3. Build the App:

```
bench --site [site-name] build
```

## Requirements
1. Backend
    - [x] Create a new Frappe application locally and name it "FeatureTracker".
    - [x] Dene a new doctype called "Feature Request" with the following fields:
      - [x] Title: Text eld to store the title of the feature request.
      - [x] Description: Long text eld to provide a detailed description of the feature request.
      - [x] Priority: Select eld with options for setting the priority of the feature request (e.g., High, Medium, Low).
      - [x] Status: Select eld with options for the status of the feature request (e.g., Open, In Progress, Closed).
      - [x] Date: Date eld to record the date of the feature request.
    - [x] Implement the necessary backend logic to create, read, update, and delete feature requests.
    - [x] Ensure the code follows good code standards and practices, including proper variable naming, indentation, and separation of concerns.
2. Front End
    - [x] Create a Frappe page that displays a list of feature requests.
    - [x] The page should resemble the design provided in the attachment (attach the reference page for the candidate to follow).
    - [x] When a feature request is clicked, show a detailed view of the feature request, including all the fields mentioned above.
    - [x] Style the page to make it visually appealing, using appropriate CSS and design principles
3. Extra
   - [x] Apply a workflow on `Feature Request` DocType.
   - [x] Using `Fixtures` for saving the workflow.
   - [x] Creating some Number Cards
   - [x] Creating a Workspace for Feature Requests
   - [x] APIs:
     - [x] Get all Feature Requests
     - [x] Get a specific Feature Request
     - [x] Create a new Feature Request
     - [x] Update an existing Feature Request
     - [x] Delete an existing Feature Request
   - [x] Postman Collection for the APIs
   - [x] An extra custom Page for Detailed Feature Request
  
## Demo
[Screencast from 20 فبر, 2025 EET 11:26:30 ص.webm](https://github.com/user-attachments/assets/69f5af86-3eac-4ff3-8c31-78c0018fa3c8)

## Workspace
![image](https://github.com/user-attachments/assets/a82d663d-6648-4cbf-a2f7-c982d9441c1e)

