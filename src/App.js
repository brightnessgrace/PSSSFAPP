/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import { Alert, View,Text,Button,FlatList } from 'react-native';
import axios  from 'axios';
import HomeScreen from './src/screens/Homescreen';


/*export default function App() {

  return (

   
    <HomeScreen />

   

  );
  };
*/

const App = () => {
    
  const [member, setMember] = useState([]);

 

   function getNewsFromApi  (){
    axios.get('http://192.168.14.183/web/member')
       .then(async function(response) {
          setMember(response.data);
            // console.log(response.data);
          
   
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
          
          <Text>MY FIRST SUCCESS</Text>

          <Button
             title="Go"
              onPress={getNewsFromApi} />

         <FlatList    
          data = {member}
          KeyExtractor ={(item,index) => 'key' + index}
          renderItem ={({item}) =>{
            return <Memberlist item={item}/>
          }}
          />
         
            

         </View>
       );
    

   }

   const Memberlist = ({ item }) =>{
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{item.STATUS}</Text>
      </View>
    );
  }


export default  App;