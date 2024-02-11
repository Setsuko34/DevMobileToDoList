import React from "react";
import { StyleSheet, View, useState } from "react-native";
import { useTheme, FAB, Portal, Modal, Text } from "react-native-paper";
import { CreateToDoModal } from "./modals/createToDoModal";
import Animated from "react-native-reanimated";

const FabButton = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  // cosnt showBottomSheet = () => setVisible(true);
  return (
    <View>
      <FAB style={styles.fab} icon="plus" onPress={showModal} />
      <CreateToDoModal visible={visible} hideModal={hideModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export { FabButton };
