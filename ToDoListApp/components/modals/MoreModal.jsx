import React from "react";
import { Portal, Modal, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

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
        <View>
          <Text style={styles.title}>Titre de la tache </Text>
          <Text>{todo.title}</Text>
        </View>
        <View>
          <Text style={styles.title}>Description</Text>
          <Text>{todo.description}</Text>
        </View>
      </Modal>
    </Portal>
  );
};

export { MoreModal };

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
