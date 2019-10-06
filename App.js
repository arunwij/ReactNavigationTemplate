/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/core/navigator';

const AppContainer = createAppContainer(AppNavigator);

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}


const App: () => React$Node = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
