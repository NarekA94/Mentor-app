import React from 'react';
import Navigation from './src/navigation';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './src/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </StoreProvider>
  );
}
