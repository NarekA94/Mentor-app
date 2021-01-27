import React from 'react';
import Navigation from './src/navigation';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <Navigation />
    </StoreProvider>
  );
}
