import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <li>{props.text}</li>
      <button
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoList;
