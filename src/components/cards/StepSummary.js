import React from "react";
import { BackAndroid, Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BaseCard from "../BaseCard";
import StepResult from "../StepResult";

export default class Step6 extends React.Component {
  render() {
    return (
      <BaseCard
        {...this.props}
        render={props => (
          <>
            <View style={styles.header}>
              <Text style={styles.titleText}>
                Pizza Summary {"\n"}
                <Text style={styles.titleHelpText}>
                  This is the summary of your order
                </Text>
              </Text>
            </View>

            <ScrollView style={styles.selectPanel}>
              <StepResult stepName={"Pizza Size"} result={props.values.step1} />
              <StepResult stepName={"Crust Type"} result={props.values.step2} />
              <StepResult
                stepName={"Sauce Choice"}
                result={props.values.step3}
              />
              <StepResult
                stepName={"Chese Selection"}
                result={props.values.step4}
              />
              <StepResult
                stepName={"Meat toppings"}
                result={props.values.step5}
              />
              <StepResult
                stepName={"Non-meat toppings"}
                result={props.values.step6}
              />
              {/* <StepCheck optionText={"Mushrooms"} />
              <StepCheck optionText={"Peppers"} />
              <StepCheck optionText={"Tomato"} />
              <StepCheck optionText={"Broccoli"} />
              <StepCheck optionText={"Pineapple"} /> */}
            </ScrollView>

            <Button
              title="Next"
              style={styles.nextButton}
              color="#859BFF"
              onPress={() => BackAndroid.exitApp()}
            >
              Pay
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
