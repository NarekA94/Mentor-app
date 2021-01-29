import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BasicInfo,
  Employment,
  HomePage,
  SignInScreen,
  AuthGroup,
} from '../../screens';
import {AuthContextProvider} from '../../context';

const Stack = createStackNavigator();

const user = {
  user: {},
  set userData(user) {
    this.user = {...this.user, ...user};
  },
};

export default () => {
  return (
    <AuthContextProvider value={user}>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          options={{headerShown: false}}
          component={HomePage}
        />
        <Stack.Screen
          name="BasicInfo"
          options={{
            headerTitle: 'Create an Account',
          }}
          component={BasicInfo}
        />
        <Stack.Screen name="Employment" component={Employment} />
        <Stack.Screen name="CreateGroup" component={AuthGroup} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </AuthContextProvider>
  );
};
