import React from "react";
import { StyleSheet, View } from "react-native";

class BaseCard extends React.Component {
  render() {
    const { render, ...rest } = this.props;
    // console.log("HERE", rest);
    return <View style={styles.root}>{render(rest)}</View>;
  }
}

export default BaseCard;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF",
    borderRadius: 23,
    height: "100%"
    // padding: 20
  }
});
