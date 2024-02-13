import React from "react";
import { Portal, Modal, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { styles } from "../../styles/styles";

const MoreModal = ({ visible, hideModal, todo }) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
        style={styles.containerStyleMargin}
      >
        <View style={styles.infoView}>
          <Text style={styles.title}>Titre de la tache </Text>
          <Text>{todo.title}</Text>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.title}>Description</Text>
          <Text>{todo.description}</Text>
        </View>
      </Modal>
    </Portal>
  );
};

export { MoreModal };
