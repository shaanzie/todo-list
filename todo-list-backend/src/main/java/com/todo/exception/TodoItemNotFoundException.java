package com.todo.exception;

// Handles Todo Not Found in Database checking
public class TodoItemNotFoundException extends RuntimeException {
    public TodoItemNotFoundException(String message) {

        super(message);

    }
}
