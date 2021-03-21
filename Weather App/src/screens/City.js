/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import styles from '../styles/Citystyles';

const City = (props) => {
  const [country, setCountry] = useState('');
  const submit = 'submit';

  return (

    <View style={styles.citycontainer}>
      <View style={styles.cityheader}>
        <Text style={styles.cityheaderText}>  Country ? </Text>
      </View>
      <TextInput
        style={styles.citytextInput}
        onChangeText={(country) => setCountry(country)}
        value={country}
        placeholder="Enter country.."
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity style={country !== '' && styles.citysubmit} onPress={() => country !== '' && props.navigation.navigate('Citydetailss', { country })}>
        <Text style={country !== '' && styles.citysubmitButtonText}>
          {' '}
          {country !== '' && submit}
          {' '}
        </Text>
      </TouchableOpacity>
    </View>

  );
};

export default City;
