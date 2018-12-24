import React, { Component } from "react";
import {
  View,
  Text,
  Alert,
  AsyncStorage,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { register, isLoggedIn } from "../services/loginService";

class Register extends Component {
  static navigationOptions = {
    title: "Register"
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
    };
  }

  validateInputs = () => {
    let isValid = true;
    if (!this.state.username) {
      Alert.alert("Please enter a username");
      isValid = false;
    }

    if (!this.state.password) {
      Alert.alert("Please enter a password");
      isValid = false;
    }
    if (!this.state.confirmPassword) {
      Alert.alert("Please confirm Password");
      isValid = false;
    }

    if (this.state.password !== this.state.confirmPassword) {
      Alert.alert(this.state.password, this.state.confirmPassword);
      Alert.alert("Confirm password must match password");
      isValid = false;
    }

    return isValid;
  };

  cancelRegister = () => {
    Alert.alert("Action cancelled");
    this.props.navigation.navigate("HomeRT");
  };
  register = async () => {
    if (!this.validateInputs()) return;
    let { username, password } = this.state;

    let isUserLoggedIn = await isLoggedIn();
    if (isUserLoggedIn) {
      Alert.alert(
        "You are already logged in. Please logout and then try to login"
      );
    } else {
      let result = register(username, password);
      Alert.alert(
        `Account with username ${
          this.state.username
        } create sucessfully. You can now login into the account.`
      );
      this.props.navigation.navigate("HomeRT");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> Register User </Text>
        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />
        <Text style={styles.labels}>Username</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Text style={styles.labels}>Password</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ confirmPassword: text })}
          value={this.state.confirmPassword}
          secureTextEntry={true}
        />
        <Text style={styles.labels}>Confirm Password</Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.touchableHighlight}
            onPress={this.register}
          >
            <Text style={styles.buttons}>Register</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.touchableHighlight}
            onPress={this.cancelRegister}
          >
            <Text style={styles.buttons}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Register;

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
