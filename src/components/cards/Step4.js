import StepOption from "@/components/StepOption";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BaseCard from "../BaseCard";

export default class Step4 extends React.Component {
  render() {
    return (
      <BaseCard
        {...this.props}
        render={props => (
          <>
            <View style={styles.header}>
              <Text style={styles.titleText}>
                Select your cheese {"\n"}
                <Text style={styles.titleHelpText}>
                  Just like sauce, cheese is one of the foundational components
                  of a memorable pizza.
                </Text>
              </Text>
            </View>

            <ScrollView style={styles.selectPanel}>
              <StepOption
                optionText={"Mozarella"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step4"}
              />
              <StepOption
                optionText={"Gouda"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step4"}
              />
              <StepOption
                optionText={"Havarti"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step4"}
              />
              <StepOption
                optionText={"Brie"}
                values={props.values}
                setFieldValue={props.setFieldValue}
                groupName={"step4"}
              />
            </ScrollView>

            <Button
              title="Next"
              style={styles.nextButton}
              color="#859BFF"
              onPress={() => props.navigation.navigate("Step5")}
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
