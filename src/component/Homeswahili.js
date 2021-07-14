import React,{ useState } from 'react';
import { View, Text, Image,Pressable,Button } from 'react-native'; 
import styles from '../screens/styles';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import * as  Animatable from  'react-native-animatable';
import Icons from 'react-native-vector-icons/FontAwesome';
import Loginswahili from './Loginswahili';
import Register from './Registration/Initialregswahili';
import Changepassword  from './Changepassword';
const psssflogo =  require('../images/psssf-icon.png');

function  InitialScreen ({ navigation }){
    

   return (

  
      <View style={styles.container}>
          <Image  source={psssflogo} style={styles.imagecontainer}/> 
        <LinearGradient colors={['#F5F5F5', '#87CEFA']}  style={styles.subcontainer}>
           <Animatable.View  animation="fadeInUpBig">
                 
              <View style={styles.textcontainer}>     
                <Pressable onPress={() => navigation.navigate('Login')} style={styles.signinstyle}>
                   <Text style={styles.textinstyle}>Ingia Kwenye Akaunti</Text></Pressable>
              </View>

                <View style={styles.imgicon}>
                 <Pressable onPress={() => navigation.navigate('Registration')}>
                   <View style ={styles.button}>
                       <LinearGradient
                         colors={['#F5F5F5', '#87CEFA']}
                          style={styles.getstartedstyle}
                          >
                          <Text style={styles.gtstxtstyle}>Anza</Text>
                          <Icons
                           name = "chevron-right"
                           color = "black" 
                           size = {18}/>
                       </LinearGradient>        
                     </View>

                  </Pressable>
                 </View> 

                  <View style={styles.linkcontainer}>       
                    <Pressable  onPress={() => navigation.navigate('ForgotPassword')} style={styles.link}>      
                       <Text style={styles.textmenu}>Umesahau Nyiwila?</Text>
                    </Pressable>
                  </View>

                      <View>
                          <Pressable  onPress={() => navigation.goBack()} style={styles.signinstyle}>
                            <LinearGradient
                               colors={['#F5F5F5', '#87CEFA']}
                                 style={styles.lngstyle}
                                    >
                                 <Text> English</Text>
                             </LinearGradient>
                           </Pressable>
                        </View>

            </Animatable.View>
        </LinearGradient>  
    </View>
 


  );
 }

 
   const Tab = createStackNavigator();

    function Rootnavigation  () {
   
    return(

   
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={InitialScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Login" component={Loginswahili} options={{ headerShown: false }} />
          <Tab.Screen name="Registration" component={Register} options={{ headerShown: false }} />
          <Tab.Screen name="ForgotPassword" component={Changepassword} options={{ headerShown: false }} />
        </Tab.Navigator>
     

      
    );
}




export default function Homeswahili () {
  return(
  <Rootnavigation /> 
  )
};


