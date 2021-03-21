import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import styles from '../styles/AstroidStyles';

const HomeScreen = (props) => {
  const [astroid, setAstroid] = useState('');
  const submit = 'submit';
  return (
    <View style={styles.astroidcontainer}>
      <View style={styles.astroidheader}>
        <Text style={styles.astroidheaderText}> Asteroid 🪐 </Text>
      </View>
      <TextInput
        style={styles.astroidtextInput}
        onChangeText={(astroid) => setAstroid(astroid)}
        value={astroid}
        placeholder="Enter asteroid Id"
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
        keyboardType="number-pad"
      />
      <TouchableOpacity style={astroid !== '' && styles.astroidsubmit} onPress={() => props.navigation.navigate('Astroiddetails', { astroid })}>
        <Text style={astroid !== '' && styles.astroidsubmitButtonText}>
          {' '}
          {astroid !== '' && submit}
          {' '}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.randomastroidsubmit} onPress={() => props.navigation.navigate('Random')}>
        <Text style={styles.randomastroidsubmitButtonText}> Random Asteroid </Text>
      </TouchableOpacity>

    </View>
  );
};
export default HomeScreen;
