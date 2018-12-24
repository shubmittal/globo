import React, { Component } from "react";
import { WebView, Text } from "react-native";
//import { WebView } from "react-native-webview";

class VideoDetail extends Component {
  static navigationOptions = {
    title: "Video Details"
  };
  render() {
    let videoId = this.props.navigation.getParam("videoId", "No Video");
    let url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <WebView
        javaScriptEnabled={true}
        source={{ uri: url }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default VideoDetail;
