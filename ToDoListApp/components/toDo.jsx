import React, { useRef, useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme, Avatar, Button, Card, Text } from "react-native-paper";
import { Platform } from "react-native";
import { ActionModal } from "./modals/actionModal";
import { MoreModal } from "./modals/MoreModal";
import { styles } from "../styles/styles";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const ToDoComponent = (props) => {
  const todo = props.todo;
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const showModal2 = () => setVisible2(true);
  const hideModal2 = () => setVisible2(false);

  const LeftContent = (props) => (
    <Avatar.Icon
      {...props}
      icon={
        todo.status === "todo"
          ? "clipboard-file"
          : todo.status === "done"
          ? "bookmark-check"
          : "newspaper-minus"
      }
    />
  );
  const RightContent = (props) => (
    <View>
      <Button icon={MORE_ICON} mode="contained" onPress={showModal}>
        {"Action"}
        <ActionModal visible={visible} hideModal={hideModal} todo={props} />
      </Button>
    </View>
  );

  const MoreContent = (props) => (
    <Text
      icon="more"
      mode="contained"
      style={{ margin: 5 }}
      onPress={showModal2}
    >
      {"En savoir plus"}
      <MoreModal visible={visible2} hideModal={hideModal2} todo={todo} />
    </Text>
  );
  return (
    <View>
      <Card style={styles.toDoElement}>
        <Card.Title
          title={todo.title}
          subtitle={<MoreContent todo={todo} />}
          left={LeftContent}
          right={() => <RightContent todo={todo} />}
        />
      </Card>
    </View>
  );
};

export { ToDoComponent };
