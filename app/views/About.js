import React, { Component } from "react";
import { View, Text, Linking, StyleSheet } from "react-native";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {" "}
          This code was based on a pluarlsight traning by Reggie Dawson . It has
          some modifications over the original content delivered by instructor.
        </Text>
        <Text> View my work on </Text>
        <Text
          style={styles.linkStyle}
          onPress={() => Linking.openURL("https://github.com/shubmittal")}
        >
          GitHub
        </Text>
      </View>
    );
  }
}

export default About;

const styles = StyleSheet.create({
  container: { paddingTop: 20, alignItems: "center", justifyContent: "center" },
  linkStyle: { textDecorationLine: "underline", color: "#E91E63" }
});
