import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { Platform } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const AppbarComponent = () => {
  const theme = useTheme();
  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      {/* <Appbar.BackAction
          onPress={() => {}}
          style={{ color: theme.colors.onBackground }}
        /> */}
      <Appbar.Content title="ToDo List" color={theme.colors.onPrimary} />
      <Appbar.Action
        icon="magnify"
        onPress={() => {}}
        color={theme.colors.onPrimary}
      />
      <Appbar.Action
        icon={MORE_ICON}
        onPress={() => {}}
        color={theme.colors.onPrimary}
      />
    </Appbar.Header>
  );
};

export { AppbarComponent };
