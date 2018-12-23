import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./app/views/Home";
import Contact from "./app/views/Contact";
import Video from "./app/views/Video";
import VideoDetail from "./app/views/VideoDetail";
import Register from "./app/views/Register";

const AppNavigation = createStackNavigator(
  {
    HomeRT: { screen: Home },
    ContactRT: { screen: Contact },
    LessonRT: { screen: Video },
    VideoDetailRT: { screen: VideoDetail },
    RegisterRT: { screen: Register }
  },
  { initialRouteName: "HomeRT" }
);

const App = createAppContainer(AppNavigation);

export default App;
