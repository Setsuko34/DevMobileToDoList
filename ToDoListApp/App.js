import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
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
  );
}
