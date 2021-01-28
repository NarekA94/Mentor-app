import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BasicInfo, Employment} from '../../screens';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Employment">
    <Stack.Screen
      name="BasicInfo"
      options={{
        headerTitle: 'Create an Account',
      }}
      component={BasicInfo}
    />
    <Stack.Screen name="Employment" component={Employment} />
  </Stack.Navigator>
);
