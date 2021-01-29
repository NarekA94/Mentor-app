import React from 'react';
import {useSelector, dispatch, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Auth from './auth/auth';
import Home from './home/home';
import {Storage} from '../helpers';
import {InitHeaders} from '../httpClient';
import {fetchUser} from '../store/actions/auth';

export default () => {
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function fetchData() {
      const token = await Storage.retrieveData('token');
      console.log(token)
      if (!!token) {
        InitHeaders(token);
        dispatch(await fetchUser());
      }
    }
    fetchData();
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>{user ? <Home /> : <Auth />}</NavigationContainer>
    </SafeAreaProvider>
  );
};
