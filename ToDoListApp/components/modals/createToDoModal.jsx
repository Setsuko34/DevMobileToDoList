import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text } from "react-native-paper";
import { Formadd } from "../forms/formadd";
import { styles } from "../../styles/styles";

const CreateToDoModal = ({ visible, hideModal }) => {
  const [text, setText] = React.useState("");
  const [Description, setDescription] = React.useState("");

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
        style={styles.containerStyleMargin}
      >
        <Formadd hideModal={hideModal} />
      </Modal>
    </Portal>
  );
};

export { CreateToDoModal };
