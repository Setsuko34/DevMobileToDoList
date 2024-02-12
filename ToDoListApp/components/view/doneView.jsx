import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { ToDoComponent } from "../toDo";
import { MaterialIcons } from "@expo/vector-icons";
import TodoContext from "../context/Context";

const DoneView = () => {
  const { Todo } = React.useContext(TodoContext);
  const doneTodos = Todo.filter((todo) => todo.status === "done");
  return (
    <ScrollView>
      {doneTodos.length > 0 ? (
        doneTodos.map((todo, index) => (
          <ToDoComponent key={index} todo={todo} />
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
