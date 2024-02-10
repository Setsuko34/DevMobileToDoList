import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as React from "react";
import { PaperProvider } from "react-native-paper";
import Index from "./components/view/index.jsx";

export default function App() {
  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Index />
      </GestureHandlerRootView>
    </PaperProvider>
    // <View style={styles.container}>
    //   <Text>YOUHOU on fait une app de todo list</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
