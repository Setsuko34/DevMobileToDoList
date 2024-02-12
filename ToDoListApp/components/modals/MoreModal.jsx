import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { TextInput } from "react-native-paper";

const MoreModal = ({ visible, hideModal, todo }) => {
  //for the modal body from the doc react-native-paper
  //const [visible, setVisible] = React.useState(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
        style={{ margin: 5 }}
      >
        <Text>Titre de la tache </Text>
        <Text>{todo.title}</Text>
        <Text>Description</Text>
        <Text>{todo.description}</Text>
      </Modal>
    </Portal>
  );
};

export { MoreModal };
