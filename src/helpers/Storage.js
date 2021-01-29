import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
  storeData: async (key, data) => {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      console.error(error);
    }
  },
  retrieveData: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
      return null;
    } catch (error) {
      console.error(error);
    }
  },
  removeData: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  },
};
