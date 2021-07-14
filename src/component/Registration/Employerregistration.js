import React,{ useState } from 'react';
import { View, Text, Image,Pressable,Button,TextInput,TouchableOpacity } from 'react-native'; 
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import BottomNavigator from '../../Navigation/BottomNavigator'
import {createStackNavigator} from '@react-navigation/stack';
const psssflogo =  require('../../images/psssf-icon.png');

 function Register ({ navigation }) {

    return(

        <View style={styles.container}>
        <Image  source={psssflogo} style={styles.imagecontainer}/> 
       <LinearGradient  colors={[ '#F5F5F5','#87CEFA']}  style={styles.subcontainer}>
             <Animatable.View animation="fadeInUpBig"> 
                   <View style={styles.action}>
               
                     <TextInput
                       placeholder="Employer Number/vote Number"
                       placeholderTextColor="#05375a"
                       style={styles.textinput}
                       autoCapitalize="none">

                     </TextInput>
                  </View>
                  <View style={styles.action}>
                     <TextInput
                       placeholder="Job Tittle"
                       placeholderTextColor="#05375a"
                       style={styles.textinput}
                       autoCapitalize="none">

                     </TextInput>
                  </View>
                   <View style={styles.action}>
                    <TextInput
                     placeholder="Official Email Address"
                     placeholderTextColor="#05375a"
                     style={styles.textinput}
                     autoCapitalize="none">

                     </TextInput>
                   </View>
              
                   <View style={styles.action}>
                    <TextInput
                     placeholder="Nyiwila"
                     placeholderTextColor="#05375a"
                     style={styles.textinput}
                     autoCapitalize="none">

                     </TextInput>
                   </View>

                   <View style={styles.action}>
                    <TextInput
                     placeholder="Hakiki Nyiwila"
                     placeholderTextColor="#05375a"
                     style={styles.textinput}
                     autoCapitalize="none">

                     </TextInput>
                   </View>
             <View  style={styles.buttoncontainer}>
                 <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}>
                 <LinearGradient colors={[ '#f5f5f5','#87CEFA']} style={styles.buttonstyle}>
                     <Text>
                        Jiandikishe
                         </Text>
                   </LinearGradient>
                  </TouchableOpacity>
                 
                
             </View>     
             </Animatable.View>   
      </LinearGradient>
     </View> 
      );
  
    
}

const Stack = createStackNavigator();



const Navtabs =()=>{
  return (
    <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen name ="Home" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name ="BottomNavigator" component={BottomNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}


export default function Employerregistration () {
  return(
  <Navtabs /> 
  )
};