import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, Group} from '../../screens';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
      name="HomeScreen"
      options={{headerShown: false}}
      component={HomeScreen}
    />
    <Stack.Screen name="Group" component={Group} />
  </Stack.Navigator>
);
