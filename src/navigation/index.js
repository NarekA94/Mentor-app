import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Auth from './auth/auth';
import Home from './home/home';

export default () => {
  const [user] = useState(false);
  return (
    <SafeAreaProvider>
      <NavigationContainer>{user ? <Home /> : <Auth />}</NavigationContainer>
    </SafeAreaProvider>
  );
};
