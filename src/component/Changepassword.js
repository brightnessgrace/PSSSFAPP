import React from 'react';
import { View, Image, Text, TextInput,StyleSheet,TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import LinearGradient  from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const psssflogo =  require('../images/psssf-icon.png');


const Changepassword = () => {

const [text, onChangeText] = React.useState("Useless Text");
const [number, onChangeNumber] = React.useState(null);


return(
  <View  style={styles.container}>  
       <Image  source={psssflogo} style={styles.imagecontainer}/> 
      <LinearGradient colors={['#F5F5F5', '#87CEFA']}  style={styles.subcontainer}>
       <Animatable.View  animation="fadeInUpBig" >
          <View style={styles.formstyle}> 
              <View style={styles.action}>
                  <FontAwesome name="user-o" style={styles.iconstyle}  size={20} />
                     <TextInput
                    placeholder="Enter Your Email Address / Ingiza Barua Pepe"
                    placeholderTextColor="#05375a"
                    style={styles.textinput}
                    autoCapitalize="none"
                   />

              </View>

              <View  style={styles.buttonviewstyle}>
                    <TouchableOpacity>
                    <LinearGradient colors={[ '#87CEFA','#ffffff']} style={styles.buttonstyle}>
                        <Text>
                           Send
                            </Text>
                      </LinearGradient>
                     </TouchableOpacity>
                    
                   
                </View> 
             </View>    
       </Animatable.View>  
      </LinearGradient>       
    
</View>
);


}

export default Changepassword;
