import React,{ Component } from 'react';
import { View, TouchableOpacity,Text,TextInput,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from '../../Navigation/BottomNavigator'
import styles from './styles';
const psssflogo =  require('../../images/psssf-icon.png');



 const Register = ({ navigation }) => {


      return (
       
        <View style={styles.container}>
           <Image  source={psssflogo} style={styles.imagecontainer}/> 
          <LinearGradient  colors={[ '#F5F5F5','#87CEFA']}  style={styles.subcontainer}>
                <Animatable.View animation="fadeInUpBig"> 
                      <View style={styles.action}>
                  
                        <TextInput
                          placeholder="CheckNumber"
                          placeholderTextColor="#05375a"
                          style={styles.textinput}
                          autoCapitalize="none">

                        </TextInput>
                     </View>
                     <View style={styles.action}>
                        <TextInput
                          placeholder="National_id"
                          placeholderTextColor="#05375a"
                          style={styles.textinput}
                          autoCapitalize="none">

                        </TextInput>
                     </View>
                      <View style={styles.action}>
                       <TextInput
                        placeholder="Email Address"
                        placeholderTextColor="#05375a"
                        style={styles.textinput}
                        autoCapitalize="none">

                        </TextInput>
                      </View>
                      <View style={styles.action}>
                       <TextInput
                        placeholder="Date Of Birth"
                        placeholderTextColor="#05375a"
                        style={styles.textinput}
                        autoCapitalize="none">

                        </TextInput>
                      </View>
                      <View style={styles.action}>
                       <TextInput
                        placeholder="Password"
                        placeholderTextColor="#05375a"
                        style={styles.textinput}
                        autoCapitalize="none">

                        </TextInput>
                      </View>

                      <View style={styles.action}>
                       <TextInput
                        placeholder="ConfirmPassword"
                        placeholderTextColor="#05375a"
                        style={styles.textinput}
                        autoCapitalize="none">

                        </TextInput>
                      </View>
                <View  style={styles.buttoncontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('MemberProfile')}>
                    <LinearGradient colors={[ '#f5f5f5','#87CEFA']} style={styles.buttonstyle}>
                        <Text>
                           Sign Up
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
        <Stack.Screen name ="MemberProfile" component={BottomNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}


export default function Registerenglish () {
  return(
  <Navtabs /> 
  )
};