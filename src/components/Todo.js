import React, { useState, useEffect } from "react";
import randomImage from "../utils/generate-random-url";
import local_storage from "../utils/local-storage";
import "./TodoList.css";

const Todo = () => {
  useEffect(() => {
    console.log("run 111");
  }, []);

  const [todo, setTodo] = useState("");
  // const [todoList, setTodoList] = useState(local_storage().get("todo"));
  const [todoList, setTodoList] = useState(randomImage(9));

  console.log("todoList =", todoList);
  const todoButton = () => {
    console.log("todo = ", todo);
    setTodoList([...todoList, todo]);
    // local_storage().set("todo", todo);
    setTodo("");
  };

  // useEffect(() => {
  //   const keyboardEvent = (e) => {
  //     if (e.key === "Enter") {
  //       todoButton();
  //     }
  //   };
  //   window.addEventListener("keydown", keyboardEvent);
  //   return () => window.removeEventListener("keydown", keyboardEvent);
  // }, [todoButton]);

  return (
    <>
      <div className="container">
        <div className="input_container">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={todoButton}>Add Image</button>
        </div>
        <div className="imageContainer">
          {todoList.map((value, i) => (
            <div className="image" key={i}>
              <img src={value} alt={value} />
              <button
                onClick={() => {
                  // const updatedVal = todoList.splice(
                  //   todoList.indexOf(value),
                  //   1
                  // );
                  setTodoList(todoList.filter((e) => e !== value));
                  // local_storage().delete("todo", updatedVal);
                }}
                className="deleteBtn"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
