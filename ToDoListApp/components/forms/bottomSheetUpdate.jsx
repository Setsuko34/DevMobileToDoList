import React, { useCallback, useRef, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated from "react-native-reanimated";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

const BottomSheetUpdate = ({ isOpen, onClose }) => {
  const sheetRef = useRef(null);
  //const [isOpen, setIsOpen] = useState(false);
  const snapPoints = ["50%"];

  useEffect(() => {
    if (isOpen) {
      sheetRef.current.expand();
    } else {
      sheetRef.current.close();
    }
  }, [isOpen]);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      borderRadius={10}
      enablePanDownToClose={true}
      onCloseEnd={onClose}
      style={styles.bottomView}
    >
      <BottomSheetView>
        <View
          style={{
            backgroundColor: "white",
            padding: 16,
            height: 450,
          }}
        >
          <Text>Swipe down to close</Text>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};
const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: "#EE5407",
    borderColor: "#EE5407",
  },
});

export { BottomSheetUpdate };
