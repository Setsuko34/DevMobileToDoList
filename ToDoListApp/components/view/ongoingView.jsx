import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { ToDoComponent } from "../toDo";
import { MaterialIcons } from "@expo/vector-icons";
import TodoContext from "../context/Context";
import { styles } from "../../styles/styles";

const OngoingView = () => {
  const { Todo } = React.useContext(TodoContext);
  const onGoingTodos = Todo.filter((todo) => todo.status === "ongoing");

  return (
    <ScrollView>
      {onGoingTodos.length > 0 ? (
        onGoingTodos.map((todo, index) => (
          <ToDoComponent key={index} todo={todo} />
        ))
      ) : (
        <View style={styles.centered}>
          <MaterialIcons name="done-all" size={24} color="black" />
          <Text>Aucune tache n'est en cours</Text>
        </View>
      )}
    </ScrollView>
  );
};

export { OngoingView };
