import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import VideoScreen from './screens/VideoScreen';
import contact from './screens/contact';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Game: {screen: GameScreen},
  Video: {screen: VideoScreen},
  Contact: {screen: contact}
},

{
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#0A79DF"
    },
    headerTitleStyle: {
      color: "#fff"
    }
  }
}
);

const App = createAppContainer(MainNavigator);

export default App;