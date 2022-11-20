import React, { useState } from "react";

export const Todo = ({ todo, handlerUpdateTodo }) => {
  const { todoTitle, id, isCompleted, todoDescription, todoDate } = todo;
  const [newTitle, setNewTitle] = useState(todoTitle);
  const [newDescription, setNewDescription] = useState(todoDescription);
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    console.log("editinf");
    setEditing(!editing);
  };
  const handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };
  // const handlerUpdate = (updatedTitle, id) => {
  //   console.log(updatedTitle, id);
  // };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  return (
    <div className="todo" id={id}>
      {/* <input
        type="text"
        value={newTitle}
        style={{ textDecoration: isCompleted && "line-through" }}
        onChange={() => handlerUpdateTodo(newTitle, id)}
      /> */}
      <div onDoubleClick={handleEditing} style={viewMode}>
        {newTitle}
      </div>
      <input
        type="text"
        style={editMode}
        className="edit-input"
        value={todoTitle}
        onChange={(e) => handlerUpdateTodo(e.target.value, id)}
        onKeyDown={(e) => handleUpdatedDone(e)}
      />
      <span>Дата окончания: {todoDate}</span>
      <textarea
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      ></textarea>
      <button className="btn-edit--desc">Edit desc</button>
      <div className="">
        <button className="btn-completed">Done</button>
        <button className="btn-edit">edit</button>
        <button className="btn-delete">delete</button>
      </div>
    </div>
  );
};
