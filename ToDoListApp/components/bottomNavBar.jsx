import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

const todoRoute = () => <Text>todo</Text>;

const ongoingRoute = () => <Text>ongoing</Text>;

const doneRoute = () => <Text>done</Text>;

const BottomNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "todo",
      title: "To Do",
      focusedIcon: "plus-box-multiple",
      unfocusedIcon: "plus-box-multiple-outline",
    },
    {
      key: "ongoing",
      title: "On Going",
      focusedIcon: "application-edit",
      unfocusedIcon: "application-edit-outline",
    },
    {
      key: "done",
      title: "Done",
      focusedIcon: "check-circle",
      unfocusedIcon: "check-circle-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    todo: todoRoute,
    ongoing: ongoingRoute,
    done: doneRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export { BottomNavBar };
