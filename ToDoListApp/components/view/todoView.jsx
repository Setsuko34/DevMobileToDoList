import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { ToDoComponent } from "../toDo";
import { BottomSheetUpdate } from "../forms/bottomSheetUpdate";

const TodoView = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const showBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const hideBottomSheet = useCallback(() => {
    setIsBottomSheetOpen(false);
  }, []);
  return (
    <View style={styles.container}>
      <ToDoComponent />
      <BottomSheetUpdate isOpen={isBottomSheetOpen} onClose={hideBottomSheet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
export { TodoView };
