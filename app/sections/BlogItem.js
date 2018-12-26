import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert
} from "react-native";
import HTML from "react-native-render-html";

class BlogItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }
  _toggleDetails = () => {
    let { showDetails } = this.state;
    showDetails = !showDetails;
    this.setState({ showDetails });
  };

  render() {
    let {
      title,
      imageSrc,
      excerpt,
      url,
      defaultImageURL,
      content
    } = this.props;
    let { showDetails } = this.state;
    let image = imageSrc || defaultImageURL;
    let htmlContent = `
    <a href = ${url} style = "textAlign: center, textDecorationLine: none">
    <h1>${title}</h1>
    <img src = ${image}/>
    ${excerpt}
    </a>
    `;
    return (
      <View style={styles.container}>
        <HTML html={htmlContent} />

        <TouchableHighlight onPress={this._toggleDetails}>
          <Text>Click to {showDetails ? "hide" : "show"} details</Text>
        </TouchableHighlight>
        {showDetails && <HTML html={content} />}
      </View>
    );
  }
}

export default BlogItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomColor: "grey",
    borderWidth: 1,
    margin: 1
  },
  blogItem: { textAlign: "center", textDecorationLine: "none" }
});
