import React from 'react';
import Presentation from './components/Presentation';
import Encart from './components/Encart';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Presentation />
        <Text style={styles.categories}>Environnement</Text>
        <Encart textValue="Impact Carbone" />
        <Encart textValue="Pollution de l'eau" />
        <Text style={styles.categories}>Hommes</Text>
        <Encart textValue="Conditions salariales" />
        <Encart textValue="Transparence de la marque" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categories: {
    fontSize: 40,
    color: '#828282',
    alignSelf: 'flex-start',
  }
});
