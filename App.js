import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import explore from './screens/expore';
import issuereturn from './screens/issuereturn';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>

        <AppContainer/>

      </View>
    )
  }
}

const navigator = createBottomTabNavigator({

  issuereturn : {screens:issuereturn},
  explore : {screens:explore}

})

const AppContainer = createAppContainer(navigator);


  
