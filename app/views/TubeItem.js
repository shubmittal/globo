import React, { Component } from "react";
import { TouchableWithoutFeedback, View, Image, Text } from "react-native";

class TubeItem extends Component {
  onPress = () => {
    this.props.navigate("VideoDetailRT", { videoId: this.props.id });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{ paddingTop: 30, alignItems: "center" }}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={{
              uri: this.props.imageSrc
            }}
          />
          <Text>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default TubeItem;
