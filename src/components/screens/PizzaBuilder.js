import GraphicsVisualizer from "@/components/GraphicsVisualizer";
import { LinearGradient } from "expo";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Router } from "../../router";
const pizza = {
  crust: {
    size: "L",
    type: "Thin"
  },
  base: {
    sauce: {
      hasSauce: true,
      type: "Tomato",
      amount: "1"
    },
    cheese: {
      hasCheese: true,
      type: "Mozarella",
      amount: "Extra"
    }
  },
  toppings: []
};
class PizzaBuilder extends React.Component {
  render() {
    return (
      <LinearGradient colors={["#70FFD7", "#9198e5"]} style={styles.root}>
        {/* <View style={styles.container}> */}
        <View style={{ height: "40%" }}>
          <GraphicsVisualizer />
        </View>
        <View style={{ height: "60%" }}>
          <Router />
        </View>

        {/* </View> */}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PizzaBuilder;
