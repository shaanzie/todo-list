# Todo List Exercise

### Dependencies

```
Angular CLI: 16.2.3
Node: 18.17.1
Package Manager: npm 10.1.0
@angular/animations": "^16.2.0",
@angular/common": "^16.2.0",
@angular/compiler": "^16.2.0",
@angular/core": "^16.2.0",
@angular/forms": "^16.2.0",
"@angular/platform-browser": "^16.2.0",
"@angular/platform-browser-dynamic": "^16.2.0",
"@angular/router": "^16.2.0",
springBootVersion=3.1.3
mavenVersion=3.6.3
```

### Execution steps
1. Install the dependencies based on the versions given above. All files are on Linux file endings, so there might be some compatibility issues with Windows line endings.
2. Run `npm install` in workspace folder. There might be an issue with package installation due to an old or corrupted `package-lock.json` file. Please delete that before installing the required dependencies.
3. Run TodoApplication as a JAR on one terminal, wait for successful start message. There might be an error of 'Database TODO does not exist'. In this case, open `todo-list-backend/src/main/resources/import.sql` and un-comment the 'CREATE TABLE TODO' command. Subsequent runs of the server must comment out this command. (TODO: Replace this with CREATE IF TABLE DOESNT EXIST or a similar primitive).
4. On a new terminal, run `ng serve` and wait for successful compilation. Then, navigate to 'localhost:4200' to view the interface and interact as necessary. Errors are traditionally logged to console. If there is a CORS error blocking requests to the server, change line 30 in TodoApplication.java to have the secure connection be "https://" instead of "http://". This varies from browser to browser.

## Assignment Readme section
<hr>

This is a small gradle based multi-project to test your familiarity with Angular frontend in general and Spring boot backend.
The project consists of 2 modules `todo-list-frontend` and `todo-list-backend`.

## todo-list-frontend

This module was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files
and all `/api` request will be automatically redirected on the backend server with the help of `proxy.config.json`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## todo-list-backend

This module was generated with [Spring boot](https://spring.io/projects/spring-boot) version 2.3.0.RELEASE.

## Development server

Run `TodoApplication.java` for the backend server. All endpoints will be served under `http://localhost:8099/api`

**Please note that until you reach last part of the exercise and implement the backend you will be receiving an exception like:**

`org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "INSERT INTO todo (id, task, priority) VALUES (1, 'Implement loading - frontend only', 1)" via JDBC Statement`

# Exercise
Please implement the following as separate commits:

### Show the loading bar only while data as loading
Currently, TODOs are fetched through a mock service (todo.service.ts) with an artificial delay of 2s.
Hide the loading bar when data has finished loading.

### Implement search
Wire up the existing search field, so the TODO list is filtered when the input changes.

### Implement delete on click
Using the existing method `remove` on todo.service.ts, remove a TODO when it's clicked.
Note that the `remove` method is intentionally made, so it randomly sometimes fails. This error should be handled as you see fit.

### Replace the mock service by backend API calls

#### todo-list-backend
Provide the API call endpoints with the help of Spring (entity, repository, controller etc.) that will be used in from the front-end.

#### todo-list-frontend
Using the backend API, replace the method definitions at todo.service.ts with actual API calls
