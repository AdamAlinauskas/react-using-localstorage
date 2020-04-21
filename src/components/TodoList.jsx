import React, { Component } from "react";
import TodoTask from "../services/TodoTask";

class TodoList extends Component {
  state = { todos: [], newTodo: "" };
  todoTask = new TodoTask();

  componentDidMount() {
    const todos = this.todoTask.getAll();
    console.log(todos);
    console.log(todos.length);
    this.setState({ todos: todos });
  }

  handleOnChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    const todos = [...this.state.todos];
    todos.push({
      id: todos.length + 1,
      title: this.state.newTodo,
      completed: false,
    });
    this.setState({ todos, newTodo: "" });
    this.todoTask.saveTodos(todos);
  };

  render() {
    return (
      <div>
        <input value={this.state.newTodo} onChange={this.handleOnChange} />
        <button onClick={this.handleAddTodo}>Add</button>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
