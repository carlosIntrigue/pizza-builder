import React from "react";
import { StyleSheet } from "react-native";
import { MainRouter } from "./router";
// import PizzaBuilder from "./components/screens/PizzaBuilder";

export default class Main extends React.Component {
  render() {
    return (
      // <SafeAreaView style={{ flex: 1 }}>
      // <PizzaBuilder />
      <MainRouter />
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
