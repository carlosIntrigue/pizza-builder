import StepCheck from "@/components/StepCheck";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BaseCard from "../BaseCard";

export default class Step6 extends React.Component {
  render() {
    return (
      <BaseCard
        {...this.props}
        render={props => (
          <>
            <View style={styles.header}>
              <Text style={styles.titleText}>
                Choose Non-Meat toppings {"\n"}
                <Text style={styles.titleHelpText}>
                  These are our non-meat topppings
                </Text>
              </Text>
            </View>

            <ScrollView style={styles.selectPanel}>
              <StepCheck
                optionText={"Mushrooms"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step6"}
              />
              <StepCheck
                optionText={"Peppers"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step6"}
              />
              <StepCheck
                optionText={"Tomato"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step6"}
              />
              <StepCheck
                optionText={"Broccoli"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step6"}
              />
              <StepCheck
                optionText={"Pineapple"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step6"}
              />
            </ScrollView>

            <Button
              title="Next"
              style={styles.nextButton}
              color="#859BFF"
              onPress={() => props.navigation.navigate("StepSummary")}
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
    padding: 20
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
    height: 140
    // paddingTop: 30
    // backgroundColor: "red"
  },
  nextButton: {
    borderRadius: 23,
    color: "#859BFF"
  }
});
