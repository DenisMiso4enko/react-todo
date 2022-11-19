import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTask/AddTask";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import Todo from "./components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    console.log(todos);
    return () => unsub();
  }, []);

  const handlerEditTodo = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const handlerEditDescription = async (todo, desc) => {
    await updateDoc(doc(db, "todos", todo.id), { description: desc });
  };
  const handlerCompletedTodo = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      isCompleted: !todo.isCompleted,
    });
  };
  const handlerDeletedTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="App">
      <AddTodo />
      <div className="todos-container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handlerCompletedTodo={handlerCompletedTodo}
            handlerDeletedTodo={handlerDeletedTodo}
            handlerEditTodo={handlerEditTodo}
            handlerEditDescription={handlerEditDescription}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
