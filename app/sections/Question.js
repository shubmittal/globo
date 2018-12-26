import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Alert
} from "react-native";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: true,
      selected: false
    };
  }

  chooseAnswer = ans => {
    if (ans === this.props.correctAnswer) {
      this.setState({
        correct: true,
        selected: true
      });
      this.props.deductScore(0);
    } else {
      this.setState({
        correct: false,
        selected: true
      });
      this.props.deductScore(this.props.worth);
    }
  };

  render() {
    let { selected, correct } = this.state;
    let { question, answer1, answer2, answer3, answer4 } = this.props;
    return (
      <View style={styles.container}>
        {!selected && (
          <View>
            <Text style={styles.question}>{question}</Text>
            <TouchableHighlight onPress={() => this.chooseAnswer("answer1")}>
              <Text style={styles.answers}>{answer1}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.chooseAnswer("answer2")}>
              <Text style={styles.answers}>{answer2}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.chooseAnswer("answer3")}>
              <Text style={styles.answers}>{answer3}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.chooseAnswer("answer3")}>
              <Text style={styles.answers}>{answer4}</Text>
            </TouchableHighlight>
          </View>
        )}

        {selected && correct && (
          <View style={styles.correctContainer}>
            <Text style={styles.question}>{question}</Text>
            <Text style={styles.answers}>{answer1}</Text>
            <Text style={styles.answers}>{answer2}</Text>
            <Text style={styles.answers}>{answer3}</Text>
            <Text style={styles.answers}>{answer4}</Text>
            <Text style={styles.answers}>CORRECT</Text>
          </View>
        )}

        {selected && !correct && (
          <View style={styles.inCorrectContainer}>
            <Text style={styles.question}>{question}</Text>
            <Text style={styles.answers}>{answer1}</Text>
            <Text style={styles.answers}>{answer2}</Text>
            <Text style={styles.answers}>{answer3}</Text>
            <Text style={styles.answers}>{answer4}</Text>
            <Text style={styles.answers}>INCORRECT</Text>
          </View>
        )}
      </View>
    );
  }
}

export default Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  question: {
    flex: 2,
    padding: 15,
    fontSize: 15
  },
  answers: {
    flex: 2,
    padding: 15,
    fontSize: 15,
    textAlign: "center"
  },
  correctContainer: { flex: 1, paddingTop: 20, backgroundColor: "green" },
  inCorrectContainer: { flex: 1, paddingTop: 20, backgroundColor: "red" }
});
