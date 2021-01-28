import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BasicInfo, Employment, CreateGroup, HomePage} from '../../screens';
import {AuthContextProvider} from '../../context';

const Stack = createStackNavigator();

export default () => (
  <AuthContextProvider
    value={{
      user: {},
      set userData(user) {
        this.user = {...this.user, ...user};
      },
    }}>
    <Stack.Navigator initialRouteName="HomePage">
    <Stack.Screen name="HomePage" options={{headerShown: false}} component={HomePage} />
      <Stack.Screen
        name="BasicInfo"
        options={{
          headerTitle: 'Create an Account',
        }}
        component={BasicInfo}
      />
      <Stack.Screen name="Employment" component={Employment} />
      <Stack.Screen name="CreateGroup" component={CreateGroup} />
    </Stack.Navigator>
  </AuthContextProvider>
);
