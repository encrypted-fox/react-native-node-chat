import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

const AppStack = createStackNavigator({ Home: LinksScreen, Other: SettingsScreen });
const AuthStack = createStackNavigator({ HomeScreen: HomeScreen });

export default createAppContainer(
  createSwitchNavigator(
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
{
    Home: HomeScreen,
    Chats: LinksScreen,
},
{
    initialRouteName: 'Home',
  }))
