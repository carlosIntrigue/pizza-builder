import StepOption from "@/components/StepOption";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BaseCard from "../BaseCard";

export default class Step2 extends React.Component {
  render() {
    return (
      <BaseCard
        {...this.props}
        render={props => (
          <>
            <View style={styles.header}>
              <Text style={styles.titleText}>
                Crust type {"\n"}
                <Text style={styles.titleHelpText}>
                  The crust is the base of your pizza
                </Text>
              </Text>
            </View>

            <ScrollView style={styles.selectPanel}>
              <StepOption
                optionText={"Thin crust"}
                optionHelpText={"A thin crust emphasizes the toppings"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step2"}
              />
              <StepOption
                optionText={"Regular crust"}
                optionHelpText={
                  "Regular crust is perfect if you want a classic pizza"
                }
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step2"}
              />
              <StepOption
                optionText={"Pan fried crust"}
                optionHelpText={"A pan fried crust like dominos"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step2"}
              />
            </ScrollView>

            <Button
              title="Next"
              style={styles.nextButton}
              color="#859BFF"
              onPress={() => props.navigation.navigate("Step3")}
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
