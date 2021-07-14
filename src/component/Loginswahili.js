import React from 'react';
import { View, Text, TextInput,StyleSheet,Image, TouchableOpacity } from 'react-native';
import * as  Animatable from  'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient  from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import ChangePassword from './Changepassword';
import BottomNavigator from '../Navigation/BottomNavigator';
const psssflogo =  require('../images/psssf-icon.png');


const Creditials = ( {navigation} ) => {

const [text, onChangeText] = React.useState("Useless Text");
const [number, onChangeNumber] = React.useState(null);


return(
  <View  style={styles.container}>  
    <Image  source={psssflogo} style={styles.imagecontainer}/> 
    <LinearGradient colors={['#F5F5F5', '#87CEFA']}  style={styles.subcontainer}>
     <Animatable.View  animation="fadeInUpBig">
          
      <View style={styles.formstyle}>
                <Text style={styles.stylelabel}>Ingiza Hati Tambulishi</Text>
                   <View style={styles.action}>
                     <FontAwesome name="user-o" style={styles.iconstyle}  size={20} />
                     <TextInput
                      placeholder="jina la mtumiaji au Barua Pepe"
                      placeholderTextColor="#05375a"
                      style={styles.textinput}
                      autoCapitalize="none">

                     </TextInput>

                     <Animatable.View animation="bounceIn" style={styles.viewaction} >
                        <Feather 
                        name="check-circle" style={styles.iconstyle}
                        color="grey"
                        size={20}
                        />
                      </Animatable.View>
                    </View>
                   
                 <View style={styles.action}>
                     <FontAwesome name="lock"  style={styles.iconstyle} size={20} />
                       <TextInput
                         placeholder="Nyiwila Yako"
                         placeholderTextColor="#05375a"
                         style={styles.textinput}
                         autoCapitalize="none">

                        </TextInput>

                       <Animatable.View  animation="bounceIn"  style={styles.viewaction}>
                         <Feather name="eye-off" style={styles.iconstyle}
                           color="grey" size={20}
                         />
                        </Animatable.View>
                  </View>  
              

                <View  style={styles.buttonviewstyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('MemberProfile')}>
                    <LinearGradient colors={[ '#87CEFA','#ffffff']} style={styles.buttonstyle}>
                        <Text>
                           Ingia
                            </Text>
                      </LinearGradient>
                     </TouchableOpacity>
                    
                   
                </View>  

          </View>

        <View style={styles.linkcontainer}>       
             <TouchableOpacity  onPress={() => navigation.navigate('Changepassword')} style={styles.link}>      
            
                 <Text style={styles.textmenu}>Je ! Umesahau Nywila?</Text>
                
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
        <Stack.Screen name ="Home" component={Creditials} options={{ headerShown: false }}/>
        <Stack.Screen name ="Changepassword" component={ChangePassword} options={{ headerShown: false }}/>
        <Stack.Screen name ="MemberProfile" component={BottomNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}


export default function Loginswahili () {
  return(
  <Navtabs /> 
  )
};