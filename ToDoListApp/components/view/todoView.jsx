import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { ToDoComponent } from "../toDo";
import { MaterialIcons } from "@expo/vector-icons";
import TodoContext from "../context/Context";

const TodoView = () => {
  const { Todo } = React.useContext(TodoContext);

  // useEffect(() => {
  //   console.log("TodoView: ", Todo);
  // }, [Todo]);

  const createdTodos = Todo.filter((todo) => todo.status === "todo");
  console.log("createdTodos: ", createdTodos);
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
