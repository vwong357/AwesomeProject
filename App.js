import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Greeting from './components/greeting.js';
import MyImage from './components/my_image.js';
import Flex from './components/flex.js';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8'
});

const styles = EStyleSheet.create({
  primary1:{
    width:100,
    height:100,
    padding:10,
    backgroundColor: 'powderblue'
  },
  primary2:{
    width:50,
    height:50,
    backgroundColor: '#586F7C',
  },
  primary3:{
    
    width:50,
    height:50,
    backgroundColor: '#000000',

  }
}
)


export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection:'column', justifyContent:"space-between"}}>
        <Flex style={styles.primary1} />
        <Flex style={styles.primary2} />
        <Flex style={styles.primary3} />
        <Flex style={styles.primary1} />
    </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);
