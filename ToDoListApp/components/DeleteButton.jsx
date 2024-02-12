import React from "react";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const deleteTask = async (idToDelete) => {
  const tasksArray = await AsyncStorage.getItem("todoLists");
  let tasks = tasksArray != null ? JSON.parse(tasksArray) : [];
  const deletedTask = tasks.filter((task) => task.id !== idToDelete);
  await AsyncStorage.setItem("todoLists", JSON.stringify(deletedTask));
};

// const DeleteTask = (id) => {
//   const updatedTask = ToDoComponent.filter((task) => task.id !== id);
// };

const Deletebutton = (props) => {
  return (
    <View>
      <Button
        icon="delete"
        mode="contained-tonal"
        onPress={() => {
          deleteTask(props.id);
          console.log("tache supprimée : ", props.id);
        }}
        style={{ margin: 5 }}
      >
        {"Supprimer la tâche"}
      </Button>
    </View>
  );
};

export { Deletebutton };
