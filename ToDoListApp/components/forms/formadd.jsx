import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import uuid from "react-native-uuid";
import TodoContext from "../context/Context";
import { styles } from "../../styles/styles";

const Formadd = ({ hideModal }) => {
  const [Title, setTitle] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [Status, setStatus] = React.useState("");
  const { storeTodo } = React.useContext(TodoContext);

  return (
    <View>
      <TextInput
        placeholder="Nom de la tâche"
        //label="nom de la tâche"
        value={Title}
        onChangeText={(Title) => setTitle(Title)}
        mode="outlined"
      />
      <TextInput
        placeholder="Description de la tâche"
        //label="Description de la tâche"
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
        style={{ inputIOS: styles.inputIOS, inputAndroid: styles.inputAndroid }}
      />

      <Button
        icon="check"
        mode="elevated"
        onPress={() => {
          const task = {
            id: uuid.v4(),
            title: Title,
            description: Description,
            status: Status,
          };
          storeTodo(task);
          hideModal();
        }}
        labelStyle={styles.formlabelButton}
        style={styles.formButton}
      ></Button>
    </View>
  );
};

export { Formadd };
