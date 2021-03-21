import React, { useState } from 'react';
import {
  Text, View, TouchableOpacity, Linking,
} from 'react-native';
import axios from 'axios';
import styles from '../styles/AstroidStyles';

const Astroiddetails = ({ navigation }) => {
  const AstroidId = navigation.getParam('astroid', 'no-astroid');
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
      alert('Given asteroid id is invalid, provide valid id or click on random asteroid button..');
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

export default Astroiddetails;
