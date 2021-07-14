import React from 'react';
import { View, Pressable,Text,TextInput,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { createStackNavigator } from '@react-navigation/stack';
import Registerswahili from './Registerswahili';
import Employerregistration from './Employerregistration';
import Pensionerregistration from './Pensionerregistration';
import styles from './styles';
const psssflogo =  require('../../images/psssf-icon.png');



 const Register = ({ navigation }) => {


      return (
       
        <View style={styles.container}>
           <Image  source={psssflogo} style={styles.imagecontainer}/> 
          <LinearGradient  colors={[ '#F5F5F5','#87CEFA']}  style={styles.subcontainer}>
                <Animatable.View animation="fadeInUpBig" style={styles.catstyle}> 
                     <Text style={styles.stylelabel}> Chagua Jamii Yako</Text>
                   <Pressable onPress={() => navigation.navigate('Employerregistration')} style={styles.signinstyle}>
                        <Text style={styles.catstextstyle}>Mwajiri</Text>
                   </Pressable >
                   <Pressable onPress={() => navigation.navigate('Registerenglish')} style={styles.signinstyle}>
                        <Text style={styles.catstextstyle}>Mwanachama</Text>
                   </Pressable>
                   <Pressable onPress={() => navigation.navigate('Pensionerregistration')} style={styles.signinstyle}>
                        <Text style={styles.catstextstyle}>Mstaafu</Text>
                   </Pressable>        

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
           <Stack.Screen name ="Pensionerregistration" component={Pensionerregistration} options={{ headerShown: false }}/>
           <Stack.Screen name ="Employerregistration" component={Employerregistration} options={{ headerShown: false }}/>
           <Stack.Screen name ="Registerenglish" component={Registerswahili} options={{ headerShown: false }}/>
       </Stack.Navigator>
     )
   }
   
   
   export default function Initialregswahili () {
     return(
     <Navtabs /> 
     )
   };