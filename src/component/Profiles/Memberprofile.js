import React, {useEffect, useState} from 'react';
import { View,Text,ScrollView,FlatList,Image } from 'react-native';
import LinearGradient  from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import axios  from 'axios';
const psssflogo =  require('../../images/psssf-icon.png');

const Memberprofile = () => {
    
    const [member, setMember] = useState([]);
  
   
  
     function getNewsFromApi  (){
      axios.get('http://192.168.14.193/web/member/')
         .then(async function(response) {
            setMember(response.data);
      
          //console.log(response.data);
            
     
    })
    .catch(function (error) {
      // handle error
      alert(error);
      
    });
     
      }
  
      useEffect(()=> {
        getNewsFromApi()
      },[])
  
      if(!member) {
        return null
      }
    
  
         return(
           <View>
          
           <FlatList    
            data = {member}
            KeyExtractor ={(item,index) => 'key' + index}
            renderItem ={({ item }) => {
              return <Memberlist item = {item}/>
            }}
            />
           
              
  
           </View>
         );
      
  
     }

const Memberlist = ({ item })=> {

        return (
            <View style={styles.container}>
                
                  <Image  source={psssflogo} style={styles.imagecontainer}/> 
                  <Text style={styles.inittxt}>Member Profile</Text>
                    <LinearGradient  colors={[ '#F5F5F5','#87CEFA']}  style={styles.subcontainer}>
                      <Animatable.View animation="fadeInUpBig" style={styles.catstyle}>
                      <ScrollView vertical showsVerticalScrollIndicator = {false}>
                      <Text style={styles.catstextstyle}>Member Number:  {item.CHECKNO}</Text>
                      <Text style={styles.catstextstyle}>National Id:  {item.NATIONAL_ID}</Text>
                      <Text style={styles.catstextstyle}>Member Name:  {item.FIRST_NAME} {item.MIDDLE_NAME} {item.LAST_NAME}</Text>
                      <Text style={styles.catstextstyle}>Date Of Birth: {item.DATE_OF_BIRTH}</Text>
                      <Text style={styles.catstextstyle}>Date Of Birth: {item.DATE_OF_JOINING}</Text>
                      <Text style={styles.catstextstyle}>Current Salary: {item.CURENT_SALARY}</Text>
                      <Text style={styles.catstextstyle}>Last Reconciliation: 01 / {item.LAST_RECON_MONTH} / {item.LAST_RECON_YEAR}</Text>
                      <Text style={styles.catstextstyle}>Member Status: {item.STATUS}</Text>
                      </ScrollView>
                      </Animatable.View>
            </LinearGradient>
             
                
              
     
          </View>
           );
       
    
     

}

export default Memberprofile;



