import React from 'react';
import {StatusBar} from 'react-native';
import { AuthContentProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/stack';

const App = () => {
  return (
    <AuthContentProvider>
      <StatusBar backgroundColor="#0A0A26" barStyle="light-content" animated />
      <RootNavigator />
    </AuthContentProvider>
  );
};

export default App;
