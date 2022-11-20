import React, { useState } from "react";
// import { db } from "../../firebase";
// import { collection, addDoc } from "firebase/firestore";

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const isCompleted = false;
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

  const handelFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (todoTitle.trim().length === 0 || todoDate.trim().length === 0) {
      return;
    }

    const task = {
      id: Math.random().toString(),
      todoTitle,
      todoDescription,
      todoDate,
      isCompleted,
    };

    let response = await fetch(
      "https://633962f7937ea77bfdca2ed8.mockapi.io/todo",
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    console.log(data);

    setIsLoading(false);
    setTodoTitle("");
    setTodoDescription("");
  };

  return (
    <div className="add-card">
      <h2 className="add-card__title">Add ToDo..</h2>
      <form onSubmit={handelFormSubmit}>
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
        <button type="submit">{isLoading ? "Adding..." : "Add todo"}</button>
      </form>
    </div>
  );
};

export default AddTodo;
