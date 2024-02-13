import { StyleSheet, View, SafeAreaView } from "react-native";
import * as React from "react";
import { useTheme } from "react-native-paper";
import { AppbarComponent } from "../appBar.jsx";
import { ToDoComponent } from "../toDo.jsx";
import { FabButton } from "../fab.jsx";
import { BottomNavBar } from "../bottomNavBar.jsx";
import { styles } from "../../styles/styles.jsx";
export default function Index() {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppbarComponent />

      <View style={styles.fab}>
        <FabButton />
      </View>
      <BottomNavBar />
    </View>
  );
}
