import StepOption from "@/components/StepOption";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BaseCard from "../BaseCard";
// import console = require("console");

export default class Step1 extends React.Component {
  state = {
    selected: ""
  };
  render() {
    // console.log("STEP1", this.props);
    return (
      <BaseCard
        {...this.props}
        render={props => (
          <>
            <View style={styles.header}>
              <Text style={styles.titleText}>
                Pizza size {"\n"}
                <Text style={styles.titleHelpText}>
                  Select your the size of your pizza
                </Text>
              </Text>
            </View>

            <ScrollView style={styles.selectPanel}>
              <StepOption
                optionText={"Small"}
                optionHelpText={"6 Slices: Feeds 2-3 people"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step1"}
              />
              <StepOption
                optionText={"Medium"}
                optionHelpText={"8 Slices: Feeds 3-4 people"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step1"}
              />
              <StepOption
                optionText={"Large"}
                optionHelpText={"10 Slices: Feeds 4-5 people"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step1"}
              />
            </ScrollView>
            <Button
              title="Next"
              style={styles.nextButton}
              color="#859BFF"
              onPress={() => props.navigation.navigate("Step2")}
            >
              Next
            </Button>
          </>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    height: "30%"
  },
  titleText: {
    // fontFamily: "SF Pro Text",
    fontSize: 28
  },
  titleHelpText: {
    fontSize: 15,
    color: "#B3B3B3"
  },
  selectPanel: {
    height: "70%"
    // paddingTop: 30
    // backgroundColor: "red"
  },
  nextButton: {
    borderRadius: 23,
    color: "#859BFF"
  }
});
