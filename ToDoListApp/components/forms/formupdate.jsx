import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import uuid from "react-native-uuid";
import TodoContext from "../context/Context";

const Formupdate = ({ hideModal, todo }) => {
  const todoGet = todo.todo;
  const { title, description, status } = todoGet;

  const [Title, setTitle] = React.useState(title);
  const [Description, setDescription] = React.useState(description);
  const [Status, setStatus] = React.useState(status);
  const { updateTodo } = React.useContext(TodoContext);
  console.log("want to update: ", todo);
  React.useEffect(() => {
    setTitle(title);
    setDescription(description);
    setStatus(status);
  }, [todo]);

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
        placeholder={{ label: "Choisir le status de la tâche", value: null }}
        value={Status}
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
            id: todoGet.id,
            title: Title,
            description: Description,
            status: Status,
          };
          console.log("updated version: ", task);

          updateTodo(todoGet.id, task);
          hideModal();
        }}
        labelStyle={{ fontSize: 40 }}
        style={{ marginTop: 10 }}
      ></Button>
    </View>
  );
};

export { Formupdate };
