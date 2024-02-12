import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import uuid from "react-native-uuid";
import TodoContext from "../context/Context";

const Formadd = ({ hideModal }) => {
  const [Title, setTitle] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState("todo");
  const { storeTodo } = React.useContext(TodoContext);

  return (
    <View>
      <TextInput
        label="nom de la tâche"
        value={Title}
        onChangeText={(Title) => setTitle(Title)}
        mode="outlined"
      />
      <TextInput
        label="Description de la tâche"
        value={Description}
        onChangeText={(Description) => setDescription(Description)}
        mode="outlined"
        style={{ marginVertical: 10, height: 75 }}
      />
      <RNPickerSelect
        onValueChange={(value) => setStatus(value)}
        items={[
          { label: "ToDo", value: "todo" },
          { label: "OnGoing", value: "ongoing" },
          { label: "Done", value: "done" },
        ]}
        style={{
          inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 4,
            color: "black",
            paddingRight: 30, // to ensure the text is not cut off
          },
          inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderColor: "purple",
            borderRadius: 8,
            color: "black",
            paddingRight: 30, // to ensure the text is not cut off
          },
        }}
      />

      <Button
        icon="check"
        mode="elevated"
        onPress={() => {
          const task = {
            id: uuid.v4(),
            title: Title,
            description: Description,
            status: status,
          };
          storeTodo(task);
          hideModal();
        }}
        labelStyle={{ fontSize: 40 }}
        style={{ marginTop: 10 }}
      ></Button>
    </View>
  );
};

export { Formadd };
