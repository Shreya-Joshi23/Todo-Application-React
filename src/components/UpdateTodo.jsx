import React from "react";

const UpdateTodo = ({ updatetodo, updateip, setupdateip }) => {
  const handleeditformsubmit = (e) => {
    e.preventDefault();
    updatetodo(updateip);
    setupdateip("");
  };

  return (
    <div className="addcontainer">
      <form onSubmit={handleeditformsubmit}>
        <input
          type="text"
          value={updateip}
          placeholder="Type updated todo"
          onChange={(e) => setupdateip(e.target.value)}
          id="item"
        ></input>
        <button>Update Todo</button>
      </form>
    </div>
  );
};

export default UpdateTodo;
