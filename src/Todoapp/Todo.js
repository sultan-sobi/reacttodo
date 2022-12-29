import React from "react";
import style from "./Todo.module.css";
const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;

  const handelClick = (id) => {
    props.onRemove(id);
  };
  return (
    <article key={id} className={style.body}>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div
        className={style.btn}
        onClick={() => {
          handelClick(id);
        }}
      >
        <i className="fa fa-trash fa-2x"></i>
      </div>
    </article>
  );
};

export default Todo;
