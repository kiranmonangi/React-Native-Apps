/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

const SideBar = (props) => (
  <ScrollView>
    <ImageBackground
      source={require('../assets/BackgroundImage.jpeg')}
      style={{ width: undefined, padding: 16, paddingTop: 48 }}
    >
      <Image source={require('../assets/Profile.jpeg')} style={styles.profile} />
      <Text style={styles.name}>Kiran Monangi</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.followers}>900 Followers</Text>
        <Ionicons name="md-people" size={16} color="rgba(255,255,255,0.8)" />
      </View>
    </ImageBackground>

    <View style={styles.container}>
      <DrawerNavigatorItems {...props} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 8,
  },
  followers: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    marginRight: 4,
  },
});

export default SideBar;
