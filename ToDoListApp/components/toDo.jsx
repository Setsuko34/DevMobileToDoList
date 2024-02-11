import React, { useRef, useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme, Avatar, Button, Card,Text } from "react-native-paper";
import { Platform } from "react-native";
import { ActionModal } from "./view/actionModal";
import { MoreModal } from "./view/MoreModal";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const ToDoComponent = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const [visible, setVisible] = React.useState(false);

  const [visible2, setVisible2] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const showModal2 = () => setVisible2(true);
  const hideModal2 = () => setVisible2(false);

  const showBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const hideBottomSheet = useCallback(() => {
    setIsBottomSheetOpen(false);
  }, []);

  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder"/>;
  const RightContent = (props) => (
    
    <View>

      <Button icon={MORE_ICON} mode="contained" onPress={showModal}>
        {"Action"}
        <ActionModal visible={visible} hideModal={hideModal} />
      </Button>


      <Text icon='more' mode="contained" style ={{margin: 5}}  onPress={showModal2} >
        {"En Savoir plus"}
        <MoreModal visible={visible2} hideModal={hideModal2} />
      </Text>

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
