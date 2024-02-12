import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Deletebutton } from "../DeleteButton.jsx";
import { Modifybutton } from "../ModifyButton.jsx";

const ActionModal = ({ visible, hideModal, todo }) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
        style={{ margin: 5 }}
      >
        <Deletebutton id={todo.id} hideModal={hideModal} />
        <Modifybutton todo={todo} />
      </Modal>
    </Portal>
  );
};

export { ActionModal };
