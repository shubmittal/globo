import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  TouchableHighlight,
  Alert
} from "react-native";
const styles = StyleSheet.create({
  headText: {
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20,
    flex: 1
  },
  logoStyle: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  headStyle: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingRight: 10,
    backgroundColor: Platform.OS === "android" ? "#31e981" : "#35605a",
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#000000"
  }
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }
  async componentDidMount() {
    let isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      let username = await AsyncStorage.getItem("whoIsLoggedIn");

      this.setState({ isLoggedIn: true, username });
    }
  }

  toggleUser = () =>
    this.setState(previousState => ({ isLoggedIn: !previousState.isLoggedIn }));
  logout = async () => {
    await AsyncStorage.removeItem("whoIsLoggedIn");
    await AsyncStorage.removeItem("isLoggedIn");
    Alert.alert("You have been logged out");
    this.setState({ isLoggedIn: false, username: "" });
  };
  state = {};
  render() {
    return (
      <View style={styles.headStyle}>
        <Image
          style={styles.logoStyle}
          source={require("./img/SampleLogo.png")}
        />
        {this.state.isLoggedIn && (
          <Text style={styles.headText}>{this.state.username}</Text>
        )}
        {!this.state.isLoggedIn && (
          <TouchableHighlight onPress={() => this.props.navigate("LoginRT")}>
            <Text>Login</Text>
          </TouchableHighlight>
        )}
        {this.state.isLoggedIn && (
          <TouchableHighlight onPress={this.logout}>
            <Text>Logout</Text>
          </TouchableHighlight>
        )}
      </View>
    );
  }
}

export default Header;
