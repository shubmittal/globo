import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Menu from "../sections/Menu";

class Home extends Component {
  state = {};
  render() {
    let { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header message="Press to login" />
        <Hero />
        <Menu navigate={navigate} />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
