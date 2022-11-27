import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handlerChangeTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };
  const handlerChangeTodoDescription = (e) => {
    setTodoDescription(e.target.value);
  };
  const handlerChangeTodoData = (e) => {
    setTodoDate(e.target.value);
  };
  // const addTag = () => {
  //   return todoTitle.match(/#\S+/g);
  // };

  const handelFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (todoTitle !== "") {
        setIsLoading(true);
        await addDoc(collection(db, "todos"), {
          id: Date.now(),
          title: todoTitle.replace(/#\S+/g, ""),
          description: todoDescription,
          date: todoDate,
          isCompleted: false,
          tag: todoTitle.match(/#\S+/g),
        });
        setIsLoading(false);
        setTodoTitle("");
        setTodoDescription("");
        setTodoDate("");
      }
    } catch (error) {
      alert(error);
    }
  };
  const formStyle = {
    display: "flex",
    alightItems: "center",
    flexDirection: "column",
    maxWidth: "600px",
    margin: "0 auto",
  };

  return (
    <div className="add-card">
      <h2 className="add-card__title">Add ToDo..</h2>
      <form onSubmit={handelFormSubmit} style={formStyle}>
        <input
          required
          name="title"
          type="text"
          placeholder="Title..."
          value={todoTitle}
          onChange={handlerChangeTodoTitle}
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          value={todoDescription}
          onChange={handlerChangeTodoDescription}
        ></textarea>
        <div className="">
          <input
            required
            name="date"
            type="date"
            value={todoDate}
            onChange={handlerChangeTodoData}
          />
          <input type="file" name="file" />
        </div>
        <button type="submit">{isLoading ? "Adding..." : "Add Todo"}</button>
      </form>
    </div>
  );
};

export default AddTodo;
