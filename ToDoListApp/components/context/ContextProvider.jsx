import React, { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoContext from "./Context";

const TodoProvider = ({ children }) => {
  const [Todo, setTodo] = useState([]);

  const getTodos = async () => {
    try {
      const todos = await AsyncStorage.getItem("todoLists");
      if (!todos) return [];
      const parsedTodos = JSON.parse(todos);
      return Array.isArray(parsedTodos) ? parsedTodos : [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const storeTodo = async (task) => {
    try {
      const jsonValue = JSON.stringify(task);
      await AsyncStorage.setItem("todoLists", jsonValue);
      setTodo((prev) => [...prev, task]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (idToDelete) => {
    await AsyncStorage.setItem(
      "todoLists",
      JSON.stringify(Todo.filter((task) => task.id !== idToDelete))
    );
    setTodo((prev) => prev.filter((task) => task.id !== idToDelete));
  };

  useEffect(() => {
    getTodos().then((res) => {
      setTodo(res);
    });
  }, []);

  return (
    <TodoContext.Provider
      value={{ Todo: Todo, storeTodo: storeTodo, deleteTodo: deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
