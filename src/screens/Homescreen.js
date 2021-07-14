import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import styles from './styles';
import Loadingscreen from './Loadingscreen';
import Homeenglish from '../component/Homeenglish'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

console.log('imefika');
const screens = {
  
    Home: {
       screen: Loadingscreen,
       navigationOptions: {
        headerShown: false,
       },
    },

    Profile:{

        screen: Homeenglish,
        navigationOptions: {     
        headerShown: false,
             
          },
    }
}

const Homescreen = createStackNavigator(screens);

export default createAppContainer(Homescreen);
