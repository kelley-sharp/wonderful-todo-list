# Wonderful Todo List

## Challenge

This coding challenge I created for myself revolves around building a task list. Tasks belong to groups and can have
dependencies on one another (i.e. if task X depends on task Y, task X cannot be completed until
task Y is completed). The challenge includes 3 components:

* Build React-based UI
* Design database schema
* Document API

### React-based UI

The UI consists of 2 screens:

* **Overview**: Displays a list of all the groups along with their completion status. Clicking on 
  a group should render the detail screen.

* **Detail**: Displays a list of all the tasks in the selected group and allows the user to toggle 
  the completion status of unlocked tasks.

Notes:

* Locked tasks cannot have their completion status toggled
* Tasks remain locked until all of their dependencies have been completed
* Your implementation should resemble the above design
* Please don't introduce any new dependencies, you should have everything you need to complete
  the challenge
* We value well structured code that follows best practices

### Database Schema Design 

The Schema is designed in SQL to store the task list data. SQL code needed to create
the schema is added to _schema.sql_. The schema should define all tables, columns, and constraints needed
to store the task list data.

### API Documentation

In order to have a useful task list UX, the React app needs to be able to sync changes to a backend.
I've documented what I think a well designed task list API would look like by listing the endpoints
it'd be composed of and detailing the following for each endpoint:

* HTTP method
* URL
* Request parameters
* Response format

I did not implement any backend functionality.
I used _api.md_ to describe my design.

## Getting Started

To get started, clone this repo to your local machine. Next you'll want to install the dependencies
and fire up the app:

```
npm install
npm start
```
