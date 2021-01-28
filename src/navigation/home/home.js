import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens/home';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
      name="HomeScreen"
      options={{headerShown: false}}
      component={HomeScreen}
    />
  </Stack.Navigator>
);
