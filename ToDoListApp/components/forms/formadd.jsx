import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from "react-native-picker-select";

const Formadd = ({}) => {
  const [Title, setTitle] = React.useState("");
  const [Description, setDescription] = React.useState("");

  const task = {
    id: Math.random().toString(),
    title: Title,
    description: Description,
    status: "todo",
  };

  const getData = async () => {
    try {
      const tasks = await AsyncStorage.getItem("task");
      return tasks != null ? JSON.parse(tasks) : null;
      // if (!!task) {
      //   setTitle(task.text);
      //   setDescription(task.description);
      // }
    } catch (err) {
      console.log(err);
    }
  };

  const storeData = async (task) => {
    try {
      const jsonValue = JSON.stringify(task);
      await AsyncStorage.setItem("task", jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getData().then((tasks) => {
      console.log(tasks);
      setTitle(tasks.title);
      setDescription(tasks.description);
    });
  }, []);

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
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "ToDo", value: "ToDo" },
          { label: "OnGoing", value: "OnGoing" },
          { label: "Done", value: "Done" },
        ]}
      />

      <Button
        icon="check"
        mode="elevated"
        onPress={() => storeData(task)}
        labelStyle={{ fontSize: 40 }}
        style={{ marginTop: 10 }}
      ></Button>
    </View>
  );
};

export { Formadd };
