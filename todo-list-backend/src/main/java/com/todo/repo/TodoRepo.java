package com.todo.repo;

import com.todo.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// JPA Repository to handle TODO database calls
public interface TodoRepo extends JpaRepository<Todo, Integer> {


    void deleteTodoItemById(Integer id);

    Optional<Todo> findTodoItemById(Integer id);
}
