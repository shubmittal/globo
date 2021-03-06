import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./app/views/Home";
import Contact from "./app/views/Contact";
import Video from "./app/views/Video";
import VideoDetail from "./app/views/VideoDetail";
import Register from "./app/views/Register";
import Login from "./app/views/Login";
import Quiz from "./app/views/Quiz";
import FinishQuiz from "./app/views/FinishQuiz";
import Blogs from "./app/views/Blogs";
import About from "./app/views/About";

const AppNavigation = createStackNavigator(
  {
    HomeRT: { screen: Home },
    ContactRT: { screen: Contact },
    LessonRT: { screen: Video },
    VideoDetailRT: { screen: VideoDetail },
    RegisterRT: { screen: Register },
    LoginRT: { screen: Login },
    QuizRT: { screen: Quiz },
    FinishRT: { screen: FinishQuiz },
    BlogsRT: { screen: Blogs },
    AboutRT: { screen: About }
  },
  { initialRouteName: "HomeRT" }
);

const App = createAppContainer(AppNavigation);

export default App;
