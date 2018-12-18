import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./app/views/Home";
import Contact from "./app/views/Contact";

const AppNavigation = createStackNavigator(
  {
    HomeRT: { screen: Home },
    ContactRT: { screen: Contact }
  },
  { initialRouteName: "HomeRT" }
);

const App = createAppContainer(AppNavigation);

export default App;
