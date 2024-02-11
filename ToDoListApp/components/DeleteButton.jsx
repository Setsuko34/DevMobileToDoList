import React from "react";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { View } from "react-native";

const DeleteTask = (id) => {
  const updatedTask = ToDoComponent.filter((task) => task.id !== id);
};

const Deletebutton = ({}) => {
  return (
    <View>
      <Button
        icon="delete"
        mode="contained-tonal"
        onPress={() => console.log("Pressed")}
        style={{ margin: 5 }}
      >
        {"Supprimer la tâche"}
      </Button>
    </View>
  );
};

export { Deletebutton };
