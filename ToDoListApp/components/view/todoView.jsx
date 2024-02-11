import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { ToDoComponent } from "../toDo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getTodos = async () => {
  try {
    const todos = await AsyncStorage.getItem("todoLists");
    if (todos != null) {
      const parsedTodos = JSON.parse(todos);
      console.log("todos", parsedTodos);
      return Array.isArray(parsedTodos) ? parsedTodos : [];
    } else {
      return [];
    }
    //return todos != null ? JSON.parse(todos) : [];
  } catch (err) {
    console.log(err);
  }
};

const TodoView = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {todos
          .filter((todo) => todo.status === "todo")
          .map((todo, index) => (
            <ToDoComponent
              key={index}
              title={todo.title}
              description={todo.description}
            />
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
export { TodoView };
