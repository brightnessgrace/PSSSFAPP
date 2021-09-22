import { StyleSheet } from 'react-native';


const styles = StyleSheet.create ({
container:{  
    flex:1,
    backgroundColor:'#87CEFA',
 
},imagecontainer:{
    backgroundColor:'#87CEFA',
    paddingTop:10,
    alignSelf: "flex-end",
},
subcontainer:{
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    width:'100%', 
    paddingVertical: 70,

}, inittxt:{
  color:'#fff',
  fontSize:24,
  fontWeight:'bold',
  marginLeft:15,
  marginBottom:5,
  fontFamily:'sans-serif-medium',

}  ,
 catstyle:{
    flexDirection:'column',
    justifyContent:'center',


  },tablestyle:{
    flexDirection: 'row',
  },
  catstextstyle:{
    color:'#141414',
    fontWeight:'800',
    fontSize:18,
    borderBottomColor:'#87CEFA',
    borderBottomWidth:2,
    paddingHorizontal:20,
    paddingTop:20,
    

  }, tablecontainer:{
    flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'
  },
  head: { 
   
    justifyContent:'space-around',
    flexDirection:'row',
    paddingTop:30,
    paddingVertical:10,
    borderColor:'#87CEFA',
    borderWidth:2,
    backgroundColor:'#87CEFA',
    width:'100%',
   },
  text: {
     margin: 6 
    },
    row: { 
       height: 35 , 
       fontSize:16,
       width:'22%',
       textAlign:'center',
       borderColor:'#87CEFA',
       borderWidth:2,
       backgroundColor:'#fff',
       flexDirection: 'row',
       color:'black', 
       marginLeft:12,
       paddingTop:2,
    },
       wrapper:
        { 
          flexDirection:'row', 
          alignItems:'center',
          backgroundColor:'#87CEFA',
          
         },

});

export default styles;