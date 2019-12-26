import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

const RootStack = createStackNavigator({
    Login: {screen: HomeScreen},
    Chats: {screen: LinksScreen},
    Register: {screen: SettingsScreen},
});

export default createAppContainer(RootStack);