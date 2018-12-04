import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Encart extends React.Component {
  render() {
    return (
      <View style={styles.encart_style}>
       <Text>{this.props.textValue}</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  encart_style: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: "90%",
    marginBottom: 5
  }
});
