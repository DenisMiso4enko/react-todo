import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTask/AddTask";
// import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./components/Todo/Todo";

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchTodos() {
    setIsLoading(true);
    let response = await fetch(
      "https://633962f7937ea77bfdca2ed8.mockapi.io/todo"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    setIsLoading(false);
    setTasksList(data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <AddTodo tasksList={tasksList} setTasksList={setTasksList} />
      <div className="todos-container">
        {isLoading && <p>Идет загрузка данных</p>}
        {tasksList.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
