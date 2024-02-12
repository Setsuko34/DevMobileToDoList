import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text } from "react-native-paper";
import { Formadd } from "../forms/formadd";

const CreateToDoModal = ({ visible, hideModal }) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const [text, setText] = React.useState("");
  const [Description, setDescription] = React.useState("");

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
        style={{ margin: 20 }}
      >
        <Formadd hideModal={hideModal} />
      </Modal>
    </Portal>
  );
};

export { CreateToDoModal };
