import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BaseCard from "../BaseCard";

export default class Step1 extends React.Component {
  render() {
    return (
      <BaseCard
        render={props => (
          <>
            <Text style={styles.titleText}>
              Pizza size {"\n"}
              <Text style={styles.titleHelpText}>
                Select your the size of your pizza
              </Text>
            </Text>
            <ScrollView style={styles.selectPanel}>
              <Text>hello</Text>
            </ScrollView>
            <Button title="h">Next</Button>
          </>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    // fontFamily: "SF Pro Text",
    fontSize: 20
  },
  titleHelpText: {
    fontSize: 15,
    color: "#B3B3B3"
  },
  selectPanel: {
    height: 140,
    backgroundColor: "red"
  }
});
