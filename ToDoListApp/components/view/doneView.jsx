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

const DoneView = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const doneTodos = todos.filter((todo) => todo.status === "done");
  return (
    <ScrollView>
      {doneTodos.length > 0 ? (
        doneTodos.map((todo, index) => (
          <View style={styles.container}>
            <ToDoComponent
              key={index}
              title={todo.title}
              description={todo.description}
            />
          </View>
        ))
      ) : (
        <View style={styles.centered}>
          <MaterialIcons name="done-all" size={24} color="black" />
          <Text>Aucune tache n'est terminée</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { DoneView };
