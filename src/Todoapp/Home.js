import React, { useState } from "react";
import Todos from "./Todos";
import style from "./Home.module.css";
import Newtodos from "./Newtodos";
import { v4 as uuidv4 } from "uuid";
// const dummyTodos = [
//   { id: 1, title: "i am todo1", desc: "here is narratinn desccription one" },
//   { id: 2, title: "i am todo2", desc: "here is narratinn desccription two" },
// ];
const Home = () => {
  const [todos, setTodos] = useState([]);
  const ChildTodo = (todo) => {
    setTodos((previous) => {
      return [...previous, { id: uuidv4(), todo }];
    });
    console.log(todos);
  };
  const handelRemove = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };
  return (
    <div className={style.body}>
      <h1 style={{ color: "white" }}>Add Your Todo</h1>
      <Newtodos child={ChildTodo} />

      <Todos todos={todos} onRemove={handelRemove} />
    </div>
  );
};

export default Home;
