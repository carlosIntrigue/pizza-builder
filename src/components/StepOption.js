import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

export default class StepOption extends React.Component {
  render() {
    const {
      optionText,
      optionHelpText,
      setFieldValue,
      groupName,
      values
    } = this.props;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          height: 80,
          // paddingTop: 10,
          paddingLeft: 15,
          paddingRight: 15,
          alignItems: "center",
          borderTopColor: "#DBDBDB",
          borderTopWidth: 1
        }}
      >
        {/* <View style={{}}> */}
        <RadioButton
          status={values[groupName] === optionText ? "checked" : "unchecked"}
          onPress={e => setFieldValue(groupName, optionText)}
        />

        <Text style={styles.optionText}>
          {optionText}
          {optionHelpText ? (
            <>
              {"\n"}
              <Text style={styles.optionHelpText}>{optionHelpText}</Text>
            </>
          ) : (
            ""
          )}
        </Text>
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionText: {
    fontSize: 20
  },
  optionHelpText: {
    fontSize: 14,
    color: "#B3B3B3"
  }
});
