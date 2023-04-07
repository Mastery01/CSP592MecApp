/**
 * @format
 

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/

/**
 * @format
 */

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';
import { name as appName } from './app.json';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Calendar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);

