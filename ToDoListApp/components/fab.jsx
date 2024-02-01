import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme, FAB } from "react-native-paper";

const FabButton = () => {
  const theme = useTheme();

  return (
    <FAB style={styles.fab} icon="plus" onPress={() => alert("Pressed")} />
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
