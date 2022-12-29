import React from "react";
import Todo from "./Todo";
import style from "./Todos.module.css";
const Todos = (props) => {
  return (
    <section className={style.body}>
      {props.todos.map((todo) => (
        <Todo
          todo={todo.todo}
          key={todo.id}
          id={todo.id}
          onRemove={props.onRemove}
        />
      ))}
    </section>
  );
};

export default Todos;
