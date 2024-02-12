import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text } from "react-native-paper";
import { Formupdate } from "../forms/formupdate";

const UpdateToDoModal = ({ visible, hideModal, todo }) => {
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
        <Formupdate hideModal={hideModal} todo={todo} />
      </Modal>
    </Portal>
  );
};

export { UpdateToDoModal };
