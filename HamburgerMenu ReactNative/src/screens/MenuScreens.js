import React from 'react';
import Screen from './Screen';

export const ProfileScreen = ({ navigation }) => <Screen navigation={navigation} name="Profile" />;
export const MessageeScreen = ({ navigation }) => <Screen navigation={navigation} name="Message" />;
export const ListScreen = ({ navigation }) => <Screen navigation={navigation} name="List" />;
export const ActivityScreen = ({ navigation }) => <Screen navigation={navigation} name="Activity" />;
export const SignOutScreen = ({ navigation }) => navigation.navigate('Home');
