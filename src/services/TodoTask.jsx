class TodoTask {
  defaultTodos = [
    { id: 1, title: "Cure Covid", completed: false },
    { id: 2, title: "Complete Homework", completed: true },
    { id: 3, title: "Clean Room", completed: false },
  ];

  key = "todosKey";

  getAll() {
    const todos = JSON.parse(window.localStorage.getItem(this.key));

    if (todos == null) {
      console.log("DEFAULT TODOS");
      return this.defaultTodos;
    } else {
      console.log("FROM DB");
      return todos;
    }
  }

  saveTodos(todos) {
    window.localStorage.setItem(this.key, JSON.stringify(todos));
  }
}

export default TodoTask;
