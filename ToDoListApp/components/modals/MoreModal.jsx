import React from "react";
import { Portal, Modal, Text } from "react-native-paper";

const MoreModal = ({ visible, hideModal, todo }) => {
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
