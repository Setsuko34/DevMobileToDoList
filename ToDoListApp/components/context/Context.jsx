import React from "react";

const defaultContext = {
  todos: [],
  storeTodo: () => {
    console.log("storeTodo not implemented");
  },
  deleteTodo: () => {
    console.log("deleteTodo not implemented");
  },
  //modifyTodo: () => {},
  getTodo: () => {
    console.log("getTodo not implemented");
  },
};

const TodoContext = React.createContext(defaultContext);

export default TodoContext;
