import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  AsyncStorage,
  Alert,
  StyleSheet
} from "react-native";
import { login, isLoggedIn } from "../services/loginService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  login = async () => {
    let onLogin = this.props.navigation.getParam("onLogin");
    let { username, password } = this.state;

    if (!username || !password) {
      return Alert.alert("Please enter username and password");
    }
    let isAlreadyLoggedin = await isLoggedIn();

    if (isAlreadyLoggedin) {
      Alert.alert("You are already logged in");
      return this.props.navigation.navigate("HomeRT");
    }

    let result = await login(username, password);
    if (result === "Invalid username/password") Alert.alert(result);
    else {
      Alert.alert("You have now successfully logged in");

      onLogin(true, username);
      this.props.navigation.navigate("HomeRT");
    }
  };
  cancelLogin = () => {
    Alert.alert("Login cancelled");
    this.props.navigation.navigate("HomeRT");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={this.login}>
            <Text style={styles.buttons}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.cancelLogin}>
            <Text style={styles.buttons}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    paddingBottom: "45%",
    paddingTop: "10%"
  },
  heading: {
    flex: 5,
    fontSize: 16
  },
  inputs: {
    flex: 2,
    width: "80%",
    alignSelf: "center"
  },
  buttons: {
    fontSize: 16
  },
  touchableHighlight: {
    backgroundColor: "#DDDDDD",
    paddingBottom: 5,
    margin: 5,
    padding: 5
  },
  labels: {
    paddingBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
