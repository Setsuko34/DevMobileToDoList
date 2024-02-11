import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from "react-native-picker-select";

const Formadd = ({}) => {
  const [Title, setTitle] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [Status, setStatus] = React.useState("todo");

  const task = {
    id: Math.random().toString(),
    title: Title,
    description: Description,
    status: Status,
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

  //TODO : faire le delete d'une tache, l'update  et enfin le context afin de mettre a jour dynamiquement les taches et les listes affichée de celles ci, pensez aussi a faire fermer les modales au moment de la creation, de l'update ou de l'appui d'un boutton.

  const storeData = async (task) => {
    try {
      const existingTasks = await AsyncStorage.getItem("todoLists");
      const tasksArray = existingTasks ? JSON.parse(existingTasks) : [];
      tasksArray.push(task);
      const jsonValue = JSON.stringify(tasksArray);
      await AsyncStorage.setItem("todoLists", jsonValue);
      // let tasks = [];
      // if (existingTasks) {
      //   tasks = JSON.parse(existingTasks);
      // }
      // const jsonValue = JSON.stringify(task);
      // await AsyncStorage.setItem("task", jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getData().then((tasks) => {
      console.log(tasks);
      // setTitle(tasks.title);
      // setDescription(tasks.description);
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
        onPress={() => storeData(task)}
        labelStyle={{ fontSize: 40 }}
        style={{ marginTop: 10 }}
      ></Button>
    </View>
  );
};

export { Formadd };
