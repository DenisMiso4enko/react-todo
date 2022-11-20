import React, { useState } from "react";

export const Todo = ({ todo }) => {
  const { todoTitle, id, isCompleted, todoDescription, todoDate } = todo;
  return (
    <div className="todo" id={id}>
      <input
        type="text"
        value={todoTitle}
        style={{ textDecoration: isCompleted && "line-through" }}
      />
      <span>Дата окончания: {todoDate}</span>
      <textarea value={todoDescription}></textarea>
      <button className="btn-edit--desc">Edit desc</button>
      <div className="">
        <button className="btn-completed">Done</button>
        <button className="btn-edit">edit</button>
        <button className="btn-delete">delete</button>
      </div>
    </div>
  );
};
