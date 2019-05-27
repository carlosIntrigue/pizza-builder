import React from "react";
import { StyleSheet, View } from "react-native";

class BaseCard extends React.Component {
  render() {
    return <View style={styles.root}>{this.props.render(this.state)}</View>;
  }
}

export default BaseCard;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF",
    borderRadius: 23,
    height: "60%",
    padding: 20
  }
});
