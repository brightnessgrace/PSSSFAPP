import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Memberprofile from '../component/Profiles/Memberprofile';
import ContributionStatement from '../component/Profiles/ContributionStatement';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontiso from 'react-native-vector-icons/Fontisto';





const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Memberprofile} options={{ headerShown: false , tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),}} />
        <Tab.Screen name="Statement" component={ContributionStatement} options={{ headerShown: false,
             tabBarIcon: ({ color, size }) => ( <Fontiso name="money-symbol" color={color} size={size}/> ),}} />
      </Tab.Navigator>
    );
  }

  export default function BottomNavigator() {
    return (

        <Navigation />
    
    );
  }