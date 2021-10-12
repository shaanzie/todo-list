# Todo List Exercise

This is a small project to test your familiarity with Angular and frontend in general.
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
Using the backend API, replace the method definitions at todo.service.ts with actual API calls

# Other information:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
