import React from "react";
import { Button, View } from "react-native";

export default class ScreenA extends React.Component {
  render() {
    return (
      <View>
        {/* <Text>Welcome to screen A</Text> */}
        <Button
          title="Begin Pizza builder"
          onPress={() => this.props.navigation.navigate("PizzaBuilder")}
        />
      </View>
    );
  }
}
