import React from "react";
import { Button, Text, View } from "react-native";

export default class ScreenA extends React.Component {
  render() {
    return (
      <View>
        <Text>Welcome to screen B</Text>
        <Button
          title="Go to Profile A"
          onPress={() => this.props.navigation.navigate("A")}
        />
      </View>
    );
  }
}
