import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import UpdateTodo from "./components/UpdateTodo";
import TodoList from "./components/TodoList";
import toast,{Toaster} from 'react-hot-toast';

const App = () => {
  const [todos, settodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  
  const [editid, seteditid] = useState(null);
  const [updateip, setupdateip] = useState("");


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const addtodo = (todo) => {
    if (todo === "") {
      toast.error("Please enter todo");
      return;
    }
    settodos((currenttodos) => {
      return [
        ...currenttodos,
        { id: crypto.randomUUID(), title: todo, completed: false },
      ];
    });
    toast.success('Todo added!!!');
    console.log(todos);
  };

  const updatetodo = (updateip) => {
    if (updateip === "") {
      alert("Please enter updated todo");
      return;
    }
    settodos((currenttodos) =>
      currenttodos.map((todo) => {
        if (todo.id === editid) {
          return { ...todo, title: updateip };
        }
        return todo;
      })
    );
    toast.success(`Todo updated to ${updateip}`);
    seteditid(null);
  };

  const toggletodo = (id, completed) => {
    settodos((currenttodos) => {
      return currenttodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
    console.log(todos);
  };

  const handledelete = (id) => {
    settodos((currenttodos) => {
      return currenttodos.filter((todo) => todo.id !== id);
    });
    toast.success("Todo deleted");
    console.log(todos);
  };

  const handleedit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setupdateip(todoToEdit.title);
      seteditid(id);
    }
  };

  return (
    <div className="container">
      <Toaster/>
      <h1>Manage your Todos</h1>
      {editid != null ? (
        <UpdateTodo
          updatetodo={updatetodo}
          updateip={updateip}
          setupdateip={setupdateip}
        />
      ) : (
        <AddTodo addtodo={addtodo} />
      )}

      

      <TodoList
        todos={todos}
        handledelete={handledelete}
        toggletodo={toggletodo}
        handleedit={handleedit}
      />
    </div>
  );
};

export default App;
