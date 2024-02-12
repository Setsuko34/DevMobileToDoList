import React from "react";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { View } from "react-native";
import { UpdateToDoModal } from "./modals/updateToDoModal";

const Modifybutton = ({ todo }) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View>
      <Button
        icon="pencil"
        mode="contained-tonal"
        onPress={() => {
          showModal();
        }}
        style={{ margin: 15 }}
      >
        {"Modifier la tâche"}
      </Button>
      <UpdateToDoModal visible={visible} hideModal={hideModal} todo={todo} />
    </View>
  );
};

export { Modifybutton };
