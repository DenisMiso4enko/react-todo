import React, { useEffect, useState } from "react";
import { Todo } from "../Todo/Todo";

const TodoList = () => {
  const [tasksList, setTasksList] = useState([]);

  async function fetchTodos() {
    let response = await fetch(
      "https://633962f7937ea77bfdca2ed8.mockapi.io/todo"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    const loadedTasks = [];

    for (const key in data) {
      loadedTasks.push({
        id: key,
        todoTitle: data[key].title,
        todoDescription: data[key].description,
        todoDate: data[key].date,
        isCompleted: data[key].isCompleted,
      });
    }

    setTasksList(loadedTasks);
  }

  useEffect(() => {
    fetchTodos();
  }, []);
  console.log(tasksList);
  return (
    <div className="todo-list">
      {tasksList.map((todo) => {
        <Todo todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
