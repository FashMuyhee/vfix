import React from 'react';
import {StatusBar} from 'react-native';
import { AuthContentProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/stack';

const App = () => {
  return (
    <AuthContentProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content" animated />
      <RootNavigator />
    </AuthContentProvider>
  );
};

export default App;
