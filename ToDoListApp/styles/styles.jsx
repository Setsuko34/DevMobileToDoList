import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  toDoElement: {
    margin: 15,
    padding: 15,
  },

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

  inputDesc: {
    marginVertical: 10,
    height: 75,
  },

  formButton: {
    margin: 10,
  },

  formlabelButton: {
    fontSize: 40,
  },

  containerStyle: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
  },
  containerStyleMargin: {
    margin: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoView: {
    marginVertical: 10,
  },
  alignButton: {
    flexDirection: "collumn",
    justifyContent: "space-between",
  },

  buttonMargin: {
    margin: 15,
  },

  fab: {
    position: "absolute",
    zIndex: 1,
    margin: 16,
    right: 0,
    bottom: 100,
  },

  fabIntern: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export { styles };
