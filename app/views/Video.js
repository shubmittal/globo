import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import TubeItem from "./TubeItem";

class Video extends Component {
  static navigationOptions = {
    title: "All Videos"
  };
  constructor(props) {
    super(props);
    this.state = { listloaded: false };
  }

  async componentDidMount() {
    let apikey = "AIzaSyAhPVOJ0ycmHQfF0mC7wVkxq7EthPjMaXE";
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&key=${apikey}`;

    try {
      const result = await fetch(url);
      let response = await result.json();
      let videos = Array.from(response.items);

      this.setState({ listloaded: true, videos });
    } catch (error) {
      console.error(error);
    }
  }
  _keyExtractor = item => item.id.videoId || item.channelId;
  _renderItem = ({ item }) => (
    <TubeItem
      id={item.id.videoId || item.id.channelId}
      title={item.snippet.title}
      imageSrc={item.snippet.thumbnails.high.url}
      navigate={this.props.navigation.navigate}
    />
  );

  render() {
    return (
      <View>
        {this.state.listloaded && (
          <View style={{ paddingTop: 30 }}>
            <FlatList
              data={this.state.videos}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
        )}

        {!this.state.listloaded && (
          <View style={{ paddingTop: 30 }}>
            <Text>LOADING</Text>
          </View>
        )}
      </View>
    );
  }
}

export default Video;
