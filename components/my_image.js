import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });
  
export default class MyImage extends React.Component{

    render(){
        return(
            <View>
                <Text style={styles.red}>My Image Component 2</Text>
                <Image
          style={{width: 150, height: 150}}
          source={{uri: this.props.uri}}
        />
            </View>
        )

        
    }

    
}