import React, { useState } from "react";
import {
  ListItem,
  List,
  ListItemAvatar,
  ListItemText,
  Button,
  Modal,
  makeStyles,
} from "@material-ui/core";
import { db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";

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
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(todo.title);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  const updateTodo = async (todo, title) => {
    // update to do with the new input text

    await updateDoc(doc(db, "todos", todo.id), { title: title });

    setOpen(false);
  };
  return (
    <div className="todo">
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className="modal">
          <h1>I am a model</h1>
          <input
            placeholder={todo.title}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={() => updateTodo(todo, input)}>Update Todo</Button>
        </div>
      </Modal>
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
          // onClick={(e) => setOpen(true)}
        >
          edit
        </button>
        <button
          className="btn-delete"
          onClick={() => handlerDeletedTodo(todo.id)}
        >
          delete
        </button>
        <Button onClick={(e) => setOpen(true)}>Edit</Button>
      </div>
    </div>
  );
};

export default Todo;
