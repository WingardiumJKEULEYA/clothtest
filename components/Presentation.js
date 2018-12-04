import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class Presentation extends React.Component {
  render() {
    return (
      <View style={styles.presentation_style}>
        <Text style={styles.titles}>Jeans by Levis</Text>
        <Text style={styles.subtitles}>20% elasthanne 80% coton</Text>
        <Image
          style={styles.image_notation}
          source={require('../assets/a.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentation_style: {
    resizeMode: 'contain',
    paddingTop: 60,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_notation: {
    marginTop: 20,
    height: 250,
    resizeMode: 'contain',
  },
  titles: {
    textAlign: 'center',
    fontSize: 40,
    color: '#828282'
  },
  subtitles: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 15,
    color: '#828282',
    fontWeight: "700"
  }
});
