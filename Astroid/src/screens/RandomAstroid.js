import React, { useState } from 'react';
import {
  Text, View, TouchableOpacity, Linking,
} from 'react-native';
import axios from 'axios';
import styles from '../styles/AstroidStyles';

const RandomAstroid = ({ navigation }) => {
  const astroids = ['2000433', '2000719', '2000887', '2001036', '2001221', '2001566', '2001580', '2001620', '2001627', '2001685', '2001863', '2001865'];
  const AstroidId = astroids[Math.floor(Math.random() * astroids.length)];
  const [astroidName, setAstroidName] = useState('');
  const [url, setUrl] = useState('');
  const [magnitude, setMagnitude] = useState('');
  const astroiddata = async () => {
    try {
      const response = await axios.get(
        `http://www.neowsapp.com/rest/v1/neo/${AstroidId}?page=1&size=20&api_key=vdcg53nChDSElLSA1Mtbs9RRYYGvZgSA8uShOyaC `,
      );
      const res = response.data;
      setAstroidName(res.name);
      setUrl(res.nasa_jpl_url);
      setMagnitude(res.absolute_magnitude_h);
    } catch (error) {
      navigation.navigate('Home');
      alert('you have entered a invalid astroid.. Enter a valid astroid');
    }
  };
  return (
    <View style={styles.astroiddcontainer} onLayout={astroiddata}>
      <View style={{
        width: 410, height: 500, marginTop: 150, padding: 10, backgroundColor: 'lightyellow', borderRadius: 5, left: 6,
      }}
      >
        <Text style={styles.astroiddtextHeader}>
          {astroidName}
          {' '}
        </Text>
        <Text />
        <TouchableOpacity style={{ top: 100 }} onPress={() => { Linking.openURL(`${url}`); }}>
          <Text style={styles.astroiddtextUrl}>
            <Text>&#128391;</Text>
            {url}
            <Text>&#128391;</Text>
          </Text>
        </TouchableOpacity>
        <Text />
        <Text style={styles.astroiddtextMagnitude}>
          Magnitude:
          {magnitude}
        </Text>
      </View>
      <TouchableOpacity style={styles.randomastroidBack} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.randomastroidsubmitButtonText}> &#9754; </Text>
      </TouchableOpacity>
    </View>
  );
};
export default RandomAstroid;
