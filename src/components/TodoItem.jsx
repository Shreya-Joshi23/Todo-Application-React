import React from 'react'
import '../App.css'

const TodoItem = ({id,title,completed,handledelete,toggletodo,handleedit}) => {
  return (
    <li key={id}>
        <label className={completed ? "comp" : "ncomp"}>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggletodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button  onClick={() => handleedit(id)}>Edit</button>
        <button onClick={() => handledelete(id)}>Delete</button>
      </li>
  )
}

export default TodoItem
