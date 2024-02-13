import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { Platform } from "react-native";

const AppbarComponent = () => {
  const theme = useTheme();
  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      <Appbar.Content title="ToDo List" color={theme.colors.onPrimary} />
    </Appbar.Header>
  );
};

export { AppbarComponent };
