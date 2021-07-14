import React,{ useState } from 'react';
import { View, Text, Image,Pressable,Button } from 'react-native'; 
import styles from '../screens/styles';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import * as  Animatable from  'react-native-animatable';
import Icons from 'react-native-vector-icons/FontAwesome';
import Changepassword from './Changepassword';
import Homeswahili  from './Homeswahili';
import Login from './Login';
import Register from './Registration/Initialregistration';
const psssflogo =  require('../images/psssf-icon.png');

 function  InitialScreen ({ navigation } ) {

  

      
  return (

  
  <View style={styles.container}>
         <Image  source={psssflogo} style={styles.imagecontainer}/> 
        
          <LinearGradient colors={['#F5F5F5', '#87CEFA']}  style={styles.subcontainer}>
            <Animatable.View animation="fadeInUpBig"> 
               <View style={styles.textcontainer}>     
                 
                    <Pressable onPress={() => navigation.navigate('Login')} style={styles.signinstyle}>
                  <Text style={styles.textinstyle}>Sign Into Account</Text></Pressable>
                </View>

              <View style={styles.imgicon}>
                 <Pressable onPress={() => navigation.navigate('Registration')}>
                   <View style ={styles.button}>
                    <LinearGradient
                       colors={['#F5F5F5', '#87CEFA']}
                       style={styles.getstartedstyle}
                        >
                        <Text style={styles.gtstxtstyle}>Get Started</Text>
                         <Icons
                          name = "chevron-right"
                          color = "#141414" 
                          size = {18}/>
                    </LinearGradient>        
              </View>

                 </Pressable>
           </View>

         <View style={styles.linkcontainer}>       
          <Pressable  onPress={() => navigation.navigate('ForgotPassword')} style={styles.link}>      
          <Text style={styles.textmenu}>Forgot Password?</Text>
          </Pressable>
         </View>

           <View>
           <Pressable  onPress={ () => navigation.push('ChangeLanguage')} style={styles.signinstyle}>
              <LinearGradient
                    colors={['#F5F5F5', '#87CEFA']}
                    style={styles.lngstyle}
                >
               <Text> Swahili </Text>
              </LinearGradient>
            </Pressable>
         </View>
      </Animatable.View> 
    </LinearGradient>
 
 
   </View>
 


  );
 }





const Stack = createStackNavigator();

function Homeenglish  () {
   
    return(

        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={InitialScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Registration" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={Changepassword} options={{ headerShown: false }} />
          <Stack.Screen name="ChangeLanguage" component={Homeswahili} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

      
    );
}

export default Homeenglish;