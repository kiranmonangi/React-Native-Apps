/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              alignItems: 'flex-end', margin: 16, top: 20, opacity: 0.6,
            }}
            onPress={this.props.navigation.openDrawer}
          >
            <FontAwesome5 name="bars" size={45} color="#ff6b81" />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>
              {this.props.name}
              Screen
            </Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#161924',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#ff6b81',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.5,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#ff7979',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
});
