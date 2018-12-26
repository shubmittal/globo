import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Alert
} from "react-native";
import Question from "../sections/Question";
import { QuizData } from "../data/QuizQuestions";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsLoaded: false,
      totalScore: 100,
      completedQuiz: false
    };
  }
  componentDidMount() {
    let numQuestions = QuizData.questions.length;
    this.setState({
      questionsList: Array.from(QuizData.questions),
      questionsLoaded: true,
      numQuestions,
      incorrect: 0,
      questionsAnswered: 0
    });
  }
  scoreManager = penalty => {
    let {
      incorrect,
      numQuestions,
      questionsAnswered,
      totalScore,
      completedQuiz
    } = this.state;
    totalScore -= penalty;
    incorrect = penalty > 0 ? incorrect + 1 : incorrect;
    questionsAnswered += 1;
    completedQuiz = questionsAnswered === numQuestions;
    this.setState({
      incorrect,
      numQuestions,
      questionsAnswered,
      totalScore,
      completedQuiz
    });
  };

  finishQuiz = () => {
    let { totalScore, incorrect, numQuestions } = this.state;
    this.props.navigation.navigate("FinishRT", {
      totalScore,
      incorrect,
      numQuestions
    });
  };
  _keyExtractor = item => item.key;

  _renderItem = ({ item }) => (
    <Question
      question={item.question}
      answer1={item.answer1}
      answer2={item.answer2}
      answer3={item.answer3}
      answer4={item.answer4}
      worth={25}
      correctAnswer={item.correctAnswer}
      deductScore={this.scoreManager}
    />
  );

  render() {
    let { questionsList, completedQuiz, questionsLoaded } = this.state;
    return (
      <View style={styles.container}>
        {questionsLoaded && (
          <FlatList
            data={questionsList}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        )}
        {completedQuiz && (
          <TouchableHighlight
            onPress={this.finishQuiz}
            style={[styles.buttons, styles.enabled]}
          >
            <Text>Done</Text>
          </TouchableHighlight>
        )}
      </View>
    );
  }
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  disabled: {
    backgroundColor: "grey"
  },
  enabled: {
    backgroundColor: "green"
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    height: "5%",
    margin: 10
  }
});
