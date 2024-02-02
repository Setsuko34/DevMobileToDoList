import React from "react";
import { StyleSheet, View } from "react-native";
import {
  useTheme,
  Avatar,
  Button,
  Card,
  Text,
  Portal,
  Modal,
} from "react-native-paper";
import { Platform } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const ToDoComponent = () => {
  const theme = useTheme();
  //for the modal body from the doc react-native-paper
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const RightContent = (props) => (
    <Button icon={MORE_ICON} mode="contained" onPress={showModal}>
      {" "}
    </Button>
  );

  return (
    <View>
      <Card style={{ margin: 15, padding: 15 }}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
          right={RightContent}
        />
        {/* <Card.Content>
        <Text>Card content</Text>
      </Card.Content>

      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions> */}
      </Card>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
          style={{ margin: 20 }}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  toDoElement: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { ToDoComponent };
