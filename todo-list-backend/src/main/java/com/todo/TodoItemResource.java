package com.todo;

import com.todo.model.Todo;
import com.todo.service.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


// Controller to handle API requests from front end
@RestController
//@RequestMapping("/api")
public class TodoItemResource {
    private final TodoService todoService;

    public TodoItemResource(TodoService todoService) {
        this.todoService = todoService;
    }

    // Mapping getAll to /all endpoint
    @GetMapping("/all")
    public ResponseEntity<List<Todo>> getAllTodoItems() {
        List<Todo> todoItems = todoService.findAllTodoItems();
        System.out.println(todoItems);
        return new ResponseEntity<>(todoItems, HttpStatus.OK);
    }

    // Mapping remove to /delete/{id} endpoint
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTodoItem(@PathVariable("id") Integer id) {
        todoService.deleteTodoItem(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
