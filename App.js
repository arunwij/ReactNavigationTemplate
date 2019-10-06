/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/core/navigator';

const AppContainer = createAppContainer(AppNavigator);


const App = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
