import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import uuid from "react-native-uuid";
import TodoContext from "../context/Context";
import { styles } from "../../styles/styles";

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
        style={styles.inputDesc}
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
        style={{ inputIOS: styles.inputIOS, inputAndroid: styles.inputAndroid }}
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
        labelStyle={styles.formlabelButton}
        style={styles.formButton}
      ></Button>
    </View>
  );
};

export { Formupdate };
