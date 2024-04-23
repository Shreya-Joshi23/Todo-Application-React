import React, { useState } from "react";
import "../App.css";

const AddTodo = ({ addtodo }) => {

  const [todo, settodo] = useState("");

  const handleonSubmit = (e) => {
    e.preventDefault();
    addtodo(todo);
    settodo("");
  };

  return (
    <div className="addcontainer">
      <form onSubmit={handleonSubmit}>
        <input
          type="text"
          value={todo}
          placeholder="Type todo"
          onChange={(e) => settodo(e.target.value)}
          id="item"
        ></input>
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
