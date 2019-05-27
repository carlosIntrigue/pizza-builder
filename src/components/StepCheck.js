import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
// import console = require("console");

export default class StepOption extends React.Component {
  render() {
    const {
      optionText,
      optionHelpText,
      setFieldValue,
      groupName,
      values
    } = this.props;
    // console.log(this.props);
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
        <Checkbox
          status={
            values[groupName].indexOf(optionText) >= 0 ? "checked" : "unchecked"
          }
          onPress={e => {
            let temp = values[groupName];
            let res;
            if (temp.indexOf(optionText) >= 0) {
              res = temp.filter(item => item !== optionText);
            } else {
              res = [...temp, optionText];
            }
            setFieldValue(groupName, res);
          }}
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
