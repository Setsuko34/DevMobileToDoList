import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { ToDoComponent } from "../toDo";

const DoneView = () => {
  return (
    <View style={styles.container}>
      <Text>Done</Text>
      <ToDoComponent />
      <ToDoComponent />
      <ToDoComponent />
    </View>
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

export { DoneView };
