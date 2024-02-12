import React from "react";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { View } from "react-native";
import TodoContext from "./context/Context";

const Deletebutton = (props) => {
  const { deleteTodo } = React.useContext(TodoContext);
  return (
    <View>
      <Button
        icon="delete"
        mode="contained-tonal"
        onPress={() => {
          deleteTodo(props.id);
          props.hideModal();
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
