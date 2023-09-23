// Class for Todo model
package com.todo.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Todo implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Integer id;
    private String task;
    private Integer priority;

    public Todo() {}

    public Todo(Integer id, String task, Integer priority) {
        this.id = id;
        this.task = task;
        this.priority = priority;
    }

    public Integer getId() {
        return this.id;
    }

    public String getTask() {
        return this.task;
    }

    public Integer getPriority() {
        return this.priority;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }

    @Override
    public String toString() {
        return "TodoItem{" +
                "id=" + id + '\'' +
                ", task=" + task + '\'' +
                ", priority=" + priority + '\'' +
                '}';
    }

}
