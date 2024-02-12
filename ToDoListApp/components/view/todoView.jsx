import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { ToDoComponent } from "../toDo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

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
  const createdTodos = todos.filter((todo) => todo.status === "todo");
  return (
    <ScrollView>
      {createdTodos.length > 0 ? (
        createdTodos.map((todo, index) => (
          <ToDoComponent key={index} todo={todo} />
        ))
      ) : (
        <View style={styles.centered}>
          <MaterialIcons name="done-all" size={24} color="black" />
          <Text>Aucune tache n'est ajouté</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export { TodoView };
