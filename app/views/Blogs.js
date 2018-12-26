import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight
} from "react-native";
import BlogItem from "../sections/BlogItem";

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }
  async componentDidMount() {
    let response = await fetch(
      "https://public-api.wordpress.com/rest/v1.1/sites/testblogger622420689.wordpress.com/posts"
    );
    let body = await response.json();
    let allBlogs = body.posts;
    this.setState({
      allBlogs,
      isLoaded: true
    });
  }
  _keyExtractor = item => item.ID.toString();

  _renderItem = ({ item }) => (
    <BlogItem
      imageSrc={item.featured_image}
      excerpt={item.excerpt}
      title={item.title}
      url={item.URL}
      defaultImageURL={item.author.avatar_URL}
      content={item.content}
    />
  );

  render() {
    let { isLoaded, allBlogs } = this.state;
    let { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {!isLoaded && <Text> Loading </Text>}
        {isLoaded && (
          <FlatList
            data={allBlogs}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        )}
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigate("HomeRT")}
        >
          <Text>Home</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Blogs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    margin: 10,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  button: { height: "10%", paddingBottom: "30%" }
});
