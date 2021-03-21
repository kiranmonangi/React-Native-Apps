/* eslint-disable react/jsx-props-no-spreading */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import Login from './src/Login/login';
import {
  ProfileScreen,
  ActivityScreen,
  MessageeScreen,
  ListScreen,
  SignOutScreen,
} from './src/screens/MenuScreens';
import SideBar from './Components/SideBar';

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      drawerIcon: ({ tintcolor }) => <Feather name="user" size={16} color={tintcolor} />,
    },
  },
  MessageeScreen: {
    screen: MessageeScreen,
    navigationOptions: {
      title: 'Message',
      drawerIcon: ({ tintcolor }) => <Feather name="message-square" size={16} color={tintcolor} />,
    },
  },
  ListScreen: {
    screen: ListScreen,
    navigationOptions: {
      title: 'List',
      drawerIcon: ({ tintcolor }) => <Feather name="list" size={16} color={tintcolor} />,
    },
  },
  ActivityScreen: {
    screen: ActivityScreen,
    navigationOptions: {
      title: 'Activity',
      drawerIcon: ({ tintcolor }) => <Feather name="activity" size={16} color={tintcolor} />,
    },
  },
  SignOutScreen: {
    screen: SignOutScreen,
    navigationOptions: {
      title: 'Sign Out',
      drawerIcon: ({ tintcolor }) => <Feather name="log-out" size={16} color={tintcolor} />,
    },
  },
},
{
  contentComponent: (props) => <SideBar {...props} />,
});

const navigator = createStackNavigator(
  {
    Home: Login,
    nextPage: DrawerNavigator,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: '',
    },
  },
);

export default createAppContainer(navigator);
