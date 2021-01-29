import {useLayoutEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

export const useGeolocation = () => {
  const [position, setPosition] = useState();
  useLayoutEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setPosition({
          latitude,
          longitude,
        });
      },

      (error) => {
        console.log('Error: ', error),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000};
      },
    );
  }, []);
  return {
    position,
  };
};
