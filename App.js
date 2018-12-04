import React from 'react';
import Presentation from './components/Presentation';
import Encart from './components/Encart';
import { StyleSheet, Text, View } from 'react-native';

import customData from './clothing_database.json';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Presentation />
        <Text style={styles.categories}>Environnement</Text>
        <Encart
          textValue={customData['products'][2]['environment-criteria'][0]['criteria']}
          criteriaColor={customData['products'][2]['environment-criteria'][0]['color']}
        />
        <Encart
          textValue={customData['products'][2]['environment-criteria'][1]['criteria']}
          criteriaColor={customData['products'][2]['environment-criteria'][1]['color']}
        />
        <Text style={styles.categories}>Hommes</Text>
        <Encart
          textValue={customData['products'][2]['social-criteria'][0]['criteria']}
          criteriaColor={customData['products'][2]['social-criteria'][0]['color']}
        />
        <Encart
          textValue={customData['products'][2]['social-criteria'][1]['criteria']}
          criteriaColor={customData['products'][2]['social-criteria'][1]['color']}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%"
  },
  categories: {
    fontSize: 40,
    color: '#828282',
    alignSelf: 'flex-start',
  }
});
