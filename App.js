import React from 'react';
import { Platform, StatusBar, StyleSheet, View ,Text} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';


import Routes from './src/Routes';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return(
      <View style = {styles.container}>
        <StatusBar
            backgroundColor = "#008000"
            barStyle = "light-content"
            />
            <Routes/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    padding:20
  },
});
