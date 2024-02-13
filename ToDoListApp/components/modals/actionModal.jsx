import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Deletebutton } from "../DeleteButton.jsx";
import { Modifybutton } from "../ModifyButton.jsx";
import { styles } from "../../styles/styles";

const ActionModal = ({ visible, hideModal, todo }) => {
  // const containerStyle = { };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
        style={styles.containerStyleMargin}
      >
        <View style={styles.alignButton}>
          <Deletebutton id={todo.id} hideModal={hideModal} />
          <Modifybutton todo={todo} />
        </View>
      </Modal>
    </Portal>
  );
};

export { ActionModal };
