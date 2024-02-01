import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme, Avatar, Button, Card, Text } from "react-native-paper";
import { Platform } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const ToDoComponent = () => {
  const theme = useTheme();
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const RightContent = (props) => <Avatar.Icon {...props} icon={MORE_ICON} />;

  return (
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
