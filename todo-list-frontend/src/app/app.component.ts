import { Component, OnInit } from '@angular/core';
import { Todo } from './todo'
import { TodoService } from './todo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div class="title">
      <h1>
        A list of TODOs
      </h1>
    </div>
    <div class="list">
      <label for="search">Search...</label>
      <input id="search" type="text" [(ngModel)]="filterText">
      <app-progress-bar *ngIf="!dataLoaded"></app-progress-bar>
      <app-todo-item *ngFor="let todo of filteredTodos" [item]="todo" (click)="removeTodo(todo)"></app-todo-item>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit  {

  // Not choosing to use todos as a readonly observable as updates can be held in an array that 
  // UI takes updates from everytime an action occurs (to remove race conditions when concurrent actions occur)
  // readonly todos$: Observable<Todo[]>;

  // Todos set to public to access them in different components
  public todos: Todo[] = [];
  // Variable set to flag whether data has been loaded or not
  public dataLoaded = false;
  // FilterText holds the data to filter the list from
  public filterText = '';

  // Moving constructor logic to an init function for ng startup
  constructor(private todoService: TodoService) {}

  // Runs when the NG server is initialized and starts prefetching Todos
  ngOnInit(): void {
    this.getTodos();
}

  // Function to retrieve todos from service
  public getTodos(): void {
    // Subscribe allows to asynchronously get the object
    this.todoService.getAll().subscribe(
      (response: Todo[]) => {
        // Set the todos to be the todo return from the service
        this.todos = response;
        // Update the Todos we have from the response
        this.updateTodos(response);
        // Flag to tell search bar to disappear
        this.dataLoaded = true;
      },
      (error: HttpErrorResponse) => {
        // Basic error checking
        alert(error.message);
      }
    )
  }

  // Getter to process the filtered TODOs without case sensitive checking
  get filteredTodos(): Todo[] {
    // If there is nothing in the filter text, it should display all the todos available
    if (!this.filterText) {
      return this.todos;
    } else {
      // Filter based on searchText entered
      const searchText = this.filterText.toLowerCase();
      return this.todos.filter((todo) =>
        todo.task.toLowerCase().includes(searchText)
      );
    }
  }

  // Update the todos list when the data is loaded
   private updateTodos(todos: Todo[]): void {
      this.todos = todos;
   }

  // Remove function
  removeTodo(todo: Todo): void {
    // We show the progress bar again as the data is reloaded
    this.dataLoaded = false;
    // Removes Todo based on the Todo clicked
    this.todoService.remove(todo).subscribe(
      () => {
        // Refetch from the service, to ensure freshness and make sure race conditions are handled
        this.getTodos();
      },
      (error) => {
        // Can be shown to the console, but is an alert to make sure the user sees it
        alert('Error removing todo: ' + error);
        console.error('Error removing todo: ', error);
      }
    );
  }

}
