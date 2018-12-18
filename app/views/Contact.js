import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableHighlight
} from "react-native";
import Header from "../sections/Header";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      name: "",
      email: ""
    };
  }
  clearFields = () => this.setState({ message: "", name: "", email: "" });

  sendMessage = () => {
    Alert.alert(this.state.name, this.state.message);
    this.props.navigation.goBack();
  };

  static navigationOptions = {
    title: "some", // not shown if you are setting header to null
    header: null //setting header as null and actulaly header component
  };

  render() {
    let { name, email, message } = this.state;
    return (
      <View style={styles.container}>
        <Header message="Press to login" />
        <View style={{ flex: 8 }}>
          <Text style={styles.heading}>Contact Us</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={text => this.setState({ name: text })}
            value={name}
            placeholder="Enter your name"
          />
          <TextInput
            style={styles.inputs}
            onChangeText={text => this.setState({ email: text })}
            value={email}
            placeholder="Enter your email address"
          />
          <TextInput
            style={styles.mutilineinputs}
            onChangeText={text => this.setState({ message: text })}
            value={message}
            placeholder="Enter your message"
            multiline={true}
            numberOfLines={4}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.sendMessage}
            underlayColor="#31e981"
          >
            <Text>Send Message</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.clearFields}
            underlayColor="#31e981"
          >
            <Text>Reset Form</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Contact;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingBottom: "45%" },
  heading: { fontSize: 16, flex: 1 },
  inputs: { flex: 1, width: "80%", padding: 10 },
  mutilineinputs: { flex: 2, width: "90%", paddingTop: 20 },
  button: { marginTop: 15, fontSize: 16, borderColor: "cyan" }
});
