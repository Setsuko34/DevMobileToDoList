import React from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

const Formadd = ({}) => {
  const [text, setText] = React.useState("");
  const [Description, setDescription] = React.useState("");

  const getData = async () => {
  try {
  const task = await AsyncStorageLib.getItem(['task']);
  if (!!task) {
    setText(task);
    setDescription(task);
  }    

} catch (err) {
  console.log(err);
}
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <View>

         <TextInput
      label="nom de la tâche"
      value={text}
      onChangeText={text => setText(text)}
      mode="flat"
    />
        <TextInput
      label="Description de la tâche"
      value={Description}
      onChangeText={Description => setDescription(Description)}
      mode="outlined"
      style={{marginTop:10,height:75}}

    />
    <Button icon="check" mode="outlined" onPress={async () => await AsyncStorageLib.setItem("task",task)}>
    </Button>
    
    </View>
  );
};

export { Formadd };