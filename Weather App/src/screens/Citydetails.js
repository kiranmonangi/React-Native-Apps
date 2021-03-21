/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';

import {
  Text, View, TouchableOpacity, Image,
} from 'react-native';
import axios from 'axios';
import styles from '../styles/Citystyles';

const Citydetails = ({ navigation }) => {
  const [capital, setCapital] = useState('');
  const [population, setPopulation] = useState('');
  const [latlng, setlatlng] = useState('');
  const [callingCodes, setCallingCodes] = useState('');
  const [pic, setPic] = useState('');
  const CountryName = navigation.getParam('country', 'no-country');

  const countrydata = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.eu/rest/v2/name/${CountryName}`,
      );
      const res = response.data;
      setCapital(res[0].capital);
      setPopulation(res[0].population);
      setlatlng(res[0].latlng);
      setCallingCodes(res[0].callingCodes);
      setPic(res[0].flag);
    } catch (error) {
      navigation.navigate('Home');
      alert('you have entered a invalid country.. Enter a valid country');
    }
  };

  return (
    <View style={styles.citydcontainer} onLayout={countrydata}>

      <View style={styles.citydheader}>
        <Text style={styles.citydheaderText}>
          {' '}
          {CountryName}
          {' '}
        </Text>
      </View>
      <View>
        <Image
          style={styles.flagPic}
          source={{
            uri: `${pic}`,
          }}
        />
        <Text style={styles.citydtextcitydetails}>
          Population:
          {population}
        </Text>
        <Text style={styles.citydtextcitydetails}>
          Capital:
          {capital}
        </Text>
        <Text style={styles.citydtextcitydetails}>
          Latlng:
          {latlng}
        </Text>
        <Text style={styles.citydtextcitydetails}>
          callingCodes:
          {callingCodes}
        </Text>
      </View>
      <TouchableOpacity style={styles.citydweather} onPress={() => capital !== '' && navigation.navigate('Cityweatherr', { capital })}>
        <Text style={styles.citydweatherReporttext}> Capital Weather </Text>
      </TouchableOpacity>

    </View>
  );
};

export default Citydetails;
