import React,{useEffect, useState}  from 'react';
import { View,Text,ScrollView,FlatList,Image,SafeAreaView } from 'react-native';
import LinearGradient  from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import axios  from 'axios';
import { Row, Table } from 'react-native-table-component';
const psssflogo =  require('../../images/psssf-icon.png');


const ContributionStatement = () => {
    
   const [contribution, setContribution] = useState([]);
 
  
 
    function getNewsFromApi  (){
     axios.get('http://192.168.14.193/web/contributions')
        .then(async function(response) {
         setContribution(response.data);
     
         console.log(response.data);
           
    
   })
   .catch(function (error) {
     // handle error
     alert(error);
     
   });
    
     }
 
     useEffect(()=> {
       getNewsFromApi()
     },[])
 
     if(!contribution) {
       return null
     }
   
 
        return(
          
          <View style = {{paddingTop:5,backgroundColor:'#87CEFA',height:'100%'}}>
               <Image  source={psssflogo} style={styles.imagecontainer}/> 
            <Text style={styles.inittxt}>Contribution Summary</Text>
            <Animatable.View animation="fadeInUpBig" style={styles.catstyle}>
                      
                <View style = {styles.head}>
              <Text style = {styles.row}>MONTH</Text>
              <Text style = {styles.row}>YEAR</Text>
              <Text style = {styles.row}>SALARY</Text>
              <Text style = {styles.row}>TOTAL</Text>
              </View>
         
         
            < FlatList 
             data={ contribution }
             renderItem={({ item }) => < Contsummary contribution = {item}/>}
             />
           
             </Animatable.View>
             </View>
        
        );
     
 
    }

const  Contsummary= (props) =>{

  const { contribution } = props;
  
   return(

      <SafeAreaView style = {styles.wrapper}>
        <ScrollView
    contentInsetAdjustmentBehavior="automatic">
            <Text style = {styles.row}>{contribution.SALMONTH}</Text>
            <Text style = {styles.row}>{contribution.SALYEAR}</Text>
            <Text style = {styles.row}>{contribution.SALARY}</Text>
            <Text style = {styles.row}>{contribution.TOTALCONTRIBUTION}</Text>
        </ScrollView>
                      </SafeAreaView>
                     
              
                      
                      

    
     
   );


}

export default  ContributionStatement;