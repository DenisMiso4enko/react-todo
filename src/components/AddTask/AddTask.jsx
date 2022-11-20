import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoDate, setTodoDate] = useState("");
  // const fileInput = React.createRef();
  const handlerChangeTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };
  const handlerChangeTodoDescription = (e) => {
    setTodoDescription(e.target.value);
  };
  const handlerChangeTodoData = (e) => {
    setTodoDate(e.target.value);
  };

  const handelFormSubmit = async (e) => {
    e.preventDefault();
    if (todoTitle !== "") {
      await addDoc(collection(db, "todos"), {
        id: Date.now(),
        title: todoTitle,
        description: todoDescription,
        date: todoDate,
        isCompleted: false,
      });

      setTodoTitle("");
      setTodoDescription("");
      setTodoDate("");
    }
  };

  return (
    <div className="add-card">
      <h2 className="add-card__title">Add ToDo..</h2>
      <form onSubmit={handelFormSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Title..."
          value={todoTitle}
          onChange={handlerChangeTodoTitle}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={todoDescription}
          onChange={handlerChangeTodoDescription}
        ></textarea>
        <div className="">
          <input
            name="date"
            type="date"
            value={todoDate}
            onChange={handlerChangeTodoData}
          />
          <input type="file" name="file" />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
