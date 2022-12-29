import React, { useState } from "react";
import style from "./Newtodo.module.css";
const Newtodos = (props) => {
  const [todo, setTodos] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const handel = (e) => {
    const name = e.target.name;
    setTodos((previousTodo) => {
      return { ...previousTodo, [name]: e.target.value };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    setTodos({ title: "", desc: "" });
    props.child(todo);
  };
  return (
    <div className={style.body}>
      <form onSubmit={formSubmit}>
        <div className={style.divGroup}>
          <label htmlFor="title">Title:</label>
          <input
            className={style.inPut}
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handel}
          ></input>
        </div>

        <div className={style.divGroup}>
          <label htmlFor="desc">Description:</label>
          <textarea
            className={style.textA}
            type="text"
            name="desc"
            id="desc"
            value={desc}
            onChange={handel}
          ></textarea>
        </div>
        <button className={style.btn} type="submit">
          add todo
        </button>
      </form>
    </div>
  );
};

export default Newtodos;
