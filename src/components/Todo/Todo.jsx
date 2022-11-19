import React, { useState } from "react";

const Todo = ({
  todo,
  handlerEditTodo,
  handlerCompletedTodo,
  handlerDeletedTodo,
  handlerEditDescription,
}) => {
  const handlerChangeTodo = (e) => {
    e.preventDefault();
    if (todo.isCompleted === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  const handlerChangeDescription = (e) => {
    e.preventDefault();
    if (todo.isCompleted === true) {
      setNewDescription(todo.description);
    } else {
      todo.description = "";
      setNewDescription(e.target.value);
    }
  };
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);
  return (
    <div className="todo">
      <input
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        style={{ textDecoration: todo.isCompleted && "line-through" }}
        onChange={handlerChangeTodo}
      />
      <span>Дата окончания: {todo.date}</span>
      <textarea
        onChange={handlerChangeDescription}
        value={todo.description === "" ? newDescription : todo.description}
      ></textarea>
      <button
        className="btn-edit--desc"
        onClick={() => handlerEditDescription(todo, newDescription)}
      >
        Edit desc
      </button>
      <div className="">
        <button
          className="btn-completed"
          onClick={() => handlerCompletedTodo(todo)}
        >
          Done
        </button>
        <button
          className="btn-edit"
          onClick={() => handlerEditTodo(todo, newTitle)}
        >
          edit
        </button>
        <button
          className="btn-delete"
          onClick={() => handlerDeletedTodo(todo.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
