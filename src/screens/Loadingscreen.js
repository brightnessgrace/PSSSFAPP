import React, {Component} from 'react';
import {View, Text, Image}from 'react-native';
import styles from './styles';
import AnimatedSplash from 'react-native-animated-splash-screen';
import LinearGradient from 'react-native-linear-gradient';
const psssficon  =  require('../images/psssf-icon.png');

export default class Loadingscreen extends Component {
    
    componentDidMount(){

        setInterval(() => {
            this.props.navigation.navigate('Profile')
        }, 3000);
     }
    render () {
    return(
    
        <AnimatedSplash
         translucent={true}
         logoImage={require("../images/psssf-icon.png")}
         backgroundColor={'#87CEFA'}
         logoHeight={150}
         logoWidth={150}
      >

   </AnimatedSplash>
       
 
       

    );

    }
};