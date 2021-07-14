import { StyleSheet,useColorScheme } from 'react-native';


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#87CEFA', 
        flex:1,
    },
    subcontainer:{
        backgroundColor:'#303030',  
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        borderTopEndRadius:25,
        width:'100%',
        flex: 3,   
        paddingVertical: 50,
       
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'skyblue',
        paddingBottom: 10,
        borderRadius:10,
        paddingHorizontal:30,
        paddingStart:10,
        
    },
    stylelabel:{
     paddingHorizontal:50,
     color:'skyblue',
     fontWeight:'bold',
     fontSize:18,
     alignItems:'center',
     paddingTop:5,
    },
    iconstyle:{
      color:'#05375a',
      paddingTop:10,
      alignItems: 'flex-end',
    },
    iconsidestyle:{
        color:'#05375a',
        alignItems: 'flex-end',
        
    },
    viewaction:{
      
       flexDirection:'row',
      
        
    },
    buttonviewstyle:{
        paddingTop:20,
        alignSelf:'center',
    },
    buttonstyle:{
     
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        paddingVertical:10,      
      
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#F5F5F5',
    },
    imagecontainer:{
        backgroundColor:'#87CEFA',
        paddingTop:10,
        alignSelf: "flex-end",
    },
    linkcontainer:{
        
        justifyContent: 'flex-end',
        paddingTop:20,
         
    },
    textmenu:{
      color:'#00BFFF',
      fontSize:18,
      fontWeight:'bold',
    }
  });

export default styles;