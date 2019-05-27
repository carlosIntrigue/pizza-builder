import StepOption from "@/components/StepOption";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BaseCard from "../BaseCard";

export default class Step3 extends React.Component {
  render() {
    return (
      <BaseCard
        {...this.props}
        render={props => (
          <>
            <View style={styles.header}>
              <Text style={styles.titleText}>
                Choose Sauce {"\n"}
                <Text style={styles.titleHelpText}>
                  The sauce is the main ingredient.
                </Text>
              </Text>
            </View>

            <ScrollView style={styles.selectPanel}>
              <StepOption
                optionText={"Tomato Sauce"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step3"}
              />
              <StepOption
                optionText={"BBQ Sauce"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step3"}
              />
              <StepOption
                optionText={"Ranch Sauce"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step3"}
              />
              <StepOption
                optionText={"No Sauce"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step3"}
              />
            </ScrollView>

            <Button
              title="Next"
              style={styles.nextButton}
              color="#859BFF"
              onPress={() => props.navigation.navigate("Step4")}
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
