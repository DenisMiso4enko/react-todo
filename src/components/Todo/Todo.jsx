import React, { useState } from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";

const Todo = ({
  todo,
  handlerEditTodo,
  handlerCompletedTodo,
  handlerDeletedTodo,
  handlerEditDescription,
}) => {
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);

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
  const todoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "600px",
    margin: "0 auto",
    marginTop: "20px",
  };
  return (
    <div className="todo" style={todoStyle}>
      <input
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        style={{ textDecoration: todo.isCompleted && "line-through" }}
        onChange={handlerChangeTodo}
      />
      <textarea
        onChange={handlerChangeDescription}
        value={todo.description === "" ? newDescription : todo.description}
      ></textarea>
      <span>
        {<IoCalendarNumberOutline />} {todo.date}
      </span>
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
        <span>{todo.tag}</span>
      </div>
    </div>
  );
};

export default Todo;
