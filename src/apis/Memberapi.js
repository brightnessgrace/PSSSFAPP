import React, {useEffect, useState} from 'react';
import { Alert, View,Text,Button,FlatList } from 'react-native';
import axios  from 'axios';
import Memberprofile from '../component/Profiles/Memberprofile';

const Memberapi = () => {
    
  const [member, setMember] = useState([]);

 

   function getNewsFromApi  (){
    axios.get('http://192.168.14.183/web/member')
       .then(async function(response) {
          //setMember(response.data);
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
          renderItem ={({item}) =>{
            return <Memberprofile item = {item}/>
          }}
          />
         
            

         </View>
       );
    

   }




export default  Memberapi;
