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
      const updatedTodos = [...Todo, task];
      const jsonValue = JSON.stringify(updatedTodos);
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

  const updateTodo = async (idToUpdate, updatedTask) => {
    try {
      setTodo((prev) => {
        const updatedTodos = prev.map((task) =>
          task.id === idToUpdate ? updatedTask : task
        );
        const jsonValue = JSON.stringify(updatedTodos);
        AsyncStorage.setItem("todoLists", jsonValue);
        return updatedTodos;
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos().then((res) => {
      setTodo(res);
    });
  }, []);

  return (
    <TodoContext.Provider
      value={{
        Todo: Todo,
        storeTodo: storeTodo,
        deleteTodo: deleteTodo,
        updateTodo: updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
