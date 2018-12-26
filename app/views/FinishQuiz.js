import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

class FinishQuiz extends Component {
  render() {
    let totalScore = this.props.navigation.getParam("totalScore");
    let incorrect = this.props.navigation.getParam("incorrect");
    let numQuestions = this.props.navigation.getParam("numQuestions");
    let percentIncorrect = (incorrect * 100) / numQuestions;
    let threshold = 50;
    let result = percentIncorrect <= threshold ? "passed" : "failed";
    let { navigate } = this.props.navigation;
    return (
      <View style={[styles.container, styles[result]]}>
        <Text> {`Your score is ${totalScore}`} </Text>
        <Text>
          {`You have ${incorrect} incorrect out of ${numQuestions} questions`}
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigate("HomeRT")}
        >
          <Text>Exit Quiz</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default FinishQuiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16
  },
  passed: { backgroundColor: "green" },
  failed: { backgroundColor: "red" },
  button: {
    margin: 10,
    borderColor: "black"
  }
});
