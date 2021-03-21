/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import {
  Text, View, TouchableOpacity, Image,
} from 'react-native';
import axios from 'axios';
import styles from '../styles/Citystyles';

const Cityweather = ({ navigation }) => {
  const [localtime, setlocaltime] = useState('"loading !!"');
  const [windSpeed, setWindSpeed] = useState('');
  const [humidity, setHumidity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [icon, setIcon] = useState('');
  const CapitalName = navigation.getParam('capital', 'no-capital');
  const capitalWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=706e3263c01edd28fd6a5959daf70f09&query=${CapitalName}`,
      );
      const result = response.data;
      setlocaltime(result.location.localtime);
      setWindSpeed(result.current.wind_speed);
      setHumidity(result.current.humidity);
      setTemperature(result.current.temperature);
      setIcon(result.current.weather_icons);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.citywcontainer} onLayout={capitalWeather}>

      <View style={styles.citywheader}>
        <Text style={styles.citywheaderText}>
          {' '}
          {CapitalName}
          {' '}
        </Text>
      </View>
      <View>
        <Image
          style={styles.weather_icon}
          source={{
            uri: `${icon}`,
          }}
        />
        <Text style={styles.citywtextcitydetailsWeather}>
          Localtime:
          {localtime}
        </Text>
        <Text style={styles.citywtextcitydetailsWeather}>
          Wind speed:
          {windSpeed}
        </Text>
        <Text style={styles.citywtextcitydetailsWeather}>
          Humidity:
          {humidity}
        </Text>
        <Text style={styles.citywtextcitydetailsWeather}>
          Temperature:
          {temperature}
        </Text>
      </View>
      <TouchableOpacity style={styles.citydweather} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.citydweatherReporttext}> Visit Again </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Cityweather;
