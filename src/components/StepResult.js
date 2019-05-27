import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import console = require("console");

export default class StepResult extends React.Component {
  render() {
    const { stepName, result, setFieldValue, groupName, values } = this.props;
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

        <Text style={styles.optionText}>
          {stepName}
          {"\n"}
          <Text style={styles.optionHelpText}>
            {Array.isArray(result)
              ? result
                  .toString()
                  .split(",")
                  .join(", ")
              : result}
          </Text>
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
