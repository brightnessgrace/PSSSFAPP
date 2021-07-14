import { StyleSheet,useColorScheme } from 'react-native';


const styles = StyleSheet.create ({
container:{
    backgroundColor:'#87CEFA', 
    flex:1,
},
subcontainer:{
 
    borderRadius:25,
    width:'100%',
    flex: 2,   
    paddingVertical: 50,
   
},linkcontainer:{
    justifyContent: 'flex-end',
    paddingTop:20,
     
},
link:{
    padding:10,
    marginTop:10,
    textAlign:'justify',
    alignItems: 'flex-end',
   
},textmenu:{
    padding:5,
     fontSize:20,
     fontFamily:'OpenSans',
     fontWeight:'bold',
     color:'#00BFFF',
    
},textcontainer:{
    width:'60%',
    alignItems: 'flex-start',
   
},
textstyle:{
    color:'#141414',
    fontSize:20,
    fontWeight:'500',
    alignSelf: 'flex-end',
    textAlign: 'left'
},textinstyle:{
    color:'#00BFFF',
    fontWeight:'bold',
    fontSize:18,
},
signinstyle:{
    color:'#141414',
    fontWeight:'800',
    paddingTop:10,
    marginLeft:20,
    alignSelf: 'flex-start',
},button:{
    alignItems: 'flex-end',
    marginTop: 30,
},getstartedstyle: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
},
lngstyle:{
    width: 100,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
},gtstxtstyle:{
    color:'#141414',
   
},formstyle:{
    padding:30,
    marginRight:10,
},
imagecontainer:{
    backgroundColor:'#87CEFA',
    paddingTop:10,
    alignSelf: "flex-end",
},
imgstyle:{
  width:160,
  height:50,
  alignSelf: "flex-end",
  paddingTop:10,
  marginLeft:10,
},


});

export default styles;