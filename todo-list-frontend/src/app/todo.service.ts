import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from "rxjs";
import { Todo } from './todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // This gives us the apiBaseUrl to connect to from the env directly
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // Provides a list of all Todos available in the database
  public getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiServerUrl}/api/all`);
  }

  // Removes a Todo from the database given the ID of the Todo
  public remove(todo: Todo): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/delete/${todo.id}`)
  }


}
