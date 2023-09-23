package com.todo.service;

import com.todo.exception.TodoItemNotFoundException;
import com.todo.model.Todo;
import com.todo.repo.TodoRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


// Todo Service to handle API requests
@Service
public class TodoService {

    private final TodoRepo todoRepo;

    @Autowired
    public TodoService(TodoRepo todoItemRepo) {
        this.todoRepo = todoItemRepo;
    }

    public List<Todo> findAllTodoItems() {
        return todoRepo.findAll();
    }

    @Transactional
    public void deleteTodoItem(Integer id) {
        todoRepo.deleteTodoItemById(id);
    }

    public Todo findTodoItemById(Integer id) {
        return todoRepo.findTodoItemById(id)
                .orElseThrow(() -> new TodoItemNotFoundException("TodoItem: " + id + " not found!"));
    }

}
