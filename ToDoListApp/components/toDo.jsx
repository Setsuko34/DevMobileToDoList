import React, { useRef, useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme, Avatar, Button, Card } from "react-native-paper";
import { Platform } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const ToDoComponent = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const showBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const hideBottomSheet = useCallback(() => {
    setIsBottomSheetOpen(false);
  }, []);

  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const RightContent = (props) => (
    <View>
      <Button icon={MORE_ICON} mode="contained" onPress={showBottomSheet}>
        {"Action"}
      </Button>
    </View>
  );

  return (
    <View>
      <Card style={styles.toDoElement}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
          right={RightContent}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  toDoElement: {
    margin: 15,
    padding: 15,
  },
});

export { ToDoComponent };
