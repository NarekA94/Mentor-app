import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Auth from './auth/auth';

export default () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  </SafeAreaProvider>
);
