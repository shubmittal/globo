import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Menu from "../sections/Menu";
import { isLoggedIn } from "../services/loginService";

class Home extends Component {
  state = {};
  async componentDidMount() {
    let isUserLoggedin = await isLoggedIn();
    this.setState({ isLoggedIn: isUserLoggedin });
  }
  setUser = (isLoggedIn, userName) => {
    this.setState({ isLoggedIn, userName });
  };
  render() {
    let { navigate } = this.props.navigation;
    let { isLoggedIn, userName } = this.state;
    return (
      <View style={styles.container}>
        <Header
          message="Press to login"
          navigate={navigate}
          isLoggedIn={isLoggedIn}
          userName={userName}
          handleLoginLogout={this.setUser}
        />
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
