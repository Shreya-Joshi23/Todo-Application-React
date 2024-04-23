import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handledelete, toggletodo, handleedit }) => {
  const [active, setisactive] = useState(false);
  const [complete, setiscomplete] = useState(false);

  return (
    <ul>
      <button className='status' onClick={()=>{setisactive(false);setiscomplete(false)}}>All</button>
      <button
      className='status'
        onClick={() => {
          setisactive(true);
          setiscomplete(false);
        }}
      >
        Active
      </button>
      <button
      className='status'
        onClick={() => {
          setiscomplete(true);
          setisactive(false);
        }}
      >
        Completed
      </button>
      {todos.map((todo) => {
        if (
          (active === true && todo.completed === false) ||
          (complete === true && todo.completed === true) ||
          (active === false && complete === false)
        ) {
          return (
            <TodoItem
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              handledelete={handledelete}
              toggletodo={toggletodo}
              handleedit={handleedit}
            />
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

export default TodoList;
