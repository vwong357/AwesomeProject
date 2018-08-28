import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Greeting from './components/greeting.js';
import MyImage from './components/my_image.js';

export default class App extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar 4' />
        <Greeting name='Jaina3' />
        <Greeting name='Valeera44444444' />
        <MyImage uri=""/>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);
