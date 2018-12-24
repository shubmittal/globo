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

import { logout } from "../services/loginService";
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
  handlelogout = async () => {
    await logout();
    Alert.alert("You have been logged out");
    this.props.handleLoginLogout(false, "");
  };
  render() {
    let { userName, isLoggedIn, handleLoginLogout } = this.props;

    return (
      <View style={styles.headStyle}>
        <Image
          style={styles.logoStyle}
          source={require("./img/SampleLogo.png")}
        />
        {isLoggedIn && <Text style={styles.headText}>{userName}</Text>}
        {!isLoggedIn && (
          <TouchableHighlight
            onPress={() =>
              this.props.navigate("LoginRT", {
                onLogin: handleLoginLogout
              })
            }
          >
            <Text>Login</Text>
          </TouchableHighlight>
        )}
        {isLoggedIn && (
          <TouchableHighlight onPress={() => this.handlelogout()}>
            <Text>Logout</Text>
          </TouchableHighlight>
        )}
      </View>
    );
  }
}

export default Header;
