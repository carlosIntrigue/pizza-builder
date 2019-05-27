import StepCheck from "@/components/StepCheck";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BaseCard from "../BaseCard";

export default class Step5 extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <BaseCard
        {...this.props}
        render={props => (
          <>
            <View style={styles.header}>
              <Text style={styles.titleText}>
                Choose Meat-toppings {"\n"}
                <Text style={styles.titleHelpText}>
                  These are our meat toppings, press next for non-meat options.
                </Text>
              </Text>
            </View>

            <ScrollView style={styles.selectPanel}>
              <StepCheck
                optionText={"Pepperoni"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step5"}
              />
              <StepCheck
                optionText={"Ham"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step5"}
              />
              <StepCheck
                optionText={"Beef"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step5"}
              />
              <StepCheck
                optionText={"Chicken"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step5"}
              />
              <StepCheck
                optionText={"Bacon"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step5"}
              />
            </ScrollView>

            <Button
              title="Next"
              style={styles.nextButton}
              color="#859BFF"
              onPress={() => props.navigation.navigate("Step6")}
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
