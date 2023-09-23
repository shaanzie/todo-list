import {Component, OnInit} from '@angular/core';
import {Todo, TodoService} from "./todo.service";
import {Observable} from "rxjs";

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
      <app-todo-item *ngFor="let todo of filteredTodos" [item]="todo"></app-todo-item>
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
        // Flag to tell search bar to disappear
        this.dataLoaded = true;
      },
      (error) => {
        // Basic error checking
        alert(error);
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

}
