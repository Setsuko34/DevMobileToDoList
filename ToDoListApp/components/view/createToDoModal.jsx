import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text } from "react-native-paper";
import { Formadd } from "../formadd";
const CreateToDoModal = ({ visible, hideModal }) => {
  //for the modal body from the doc react-native-paper
  //const [visible, setVisible] = React.useState(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
        style={{ margin: 20 }}
      >
        <Formadd />
      </Modal>
    </Portal>
  );
};

export { CreateToDoModal };
