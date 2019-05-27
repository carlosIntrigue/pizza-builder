import React from "react";
import { Button, Text, View } from "react-native";

export default class ScreenA extends React.Component {
  render() {
    return (
      <View>
        <Text>Welcome to screen A</Text>
        <Button
          title="Go to Profile B"
          onPress={() => this.props.navigation.navigate("B")}
        />
      </View>
    );
  }
}
