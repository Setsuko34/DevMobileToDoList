import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text } from "react-native-paper";
import { Formupdate } from "../forms/formupdate";
import { styles } from "../../styles/styles";

const UpdateToDoModal = ({ visible, hideModal, todo }) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
        style={styles.containerStyleMargin}
      >
        <Formupdate hideModal={hideModal} todo={todo} />
      </Modal>
    </Portal>
  );
};

export { UpdateToDoModal };
