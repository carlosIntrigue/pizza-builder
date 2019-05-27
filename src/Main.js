import { Router } from "@/router";
import React from "react";
import { StyleSheet } from "react-native";

export default class Main extends React.Component {
  render() {
    return (
      // <SafeAreaView style={{ flex: 1 }}>
      <Router />
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
