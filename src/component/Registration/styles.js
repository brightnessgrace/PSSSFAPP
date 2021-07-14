import { StyleSheet,useColorScheme } from 'react-native';


const styles = StyleSheet.create({
    container:{
        
        flex:1,
        backgroundColor:'#87CEFA',
    },
    imagecontainer:{
        backgroundColor:'#87CEFA',
        paddingTop:10,
        alignSelf: "flex-end",
    },
    subcontainer:{
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        width:'100%',
        flex: 2,   
        paddingVertical: 50,

    },action:{
        borderBottomWidth: 2,
        borderBottomColor: 'skyblue',
        paddingBottom: 5,
        paddingHorizontal:30,
        paddingStart:10,
        borderRadius:10,
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
    buttoncontainer:{
        paddingTop:20,
        alignSelf:'center',
    },
    signinstyle:{
        color:'#141414',
        fontWeight:'800',
        paddingTop:10,
        marginLeft:20,
        alignSelf: 'flex-start',
    },
    textinstyle:{
        color:'#00BFFF',
        fontWeight:'bold',
        fontSize:18,
    },
    stylelabel:{
     paddingHorizontal:50,
     color:'#00BFFF',
     fontWeight:'bold',
     fontSize:18,
     alignItems:'center',
     paddingTop:10,
    },
    catstyle:{
      flexDirection:'column',
      paddingHorizontal:50,

    },
    cattextstyle:{
        color:'#00BFFF',
        fontWeight:'bold',
        fontSize:18,
        paddingHorizontal:100,
        paddingTop:20,

      },
      catstextstyle:{
        color:'#00BFFF',
        fontWeight:'bold',
        fontSize:18,
        paddingHorizontal:80,
        paddingTop:20,

      }
});

export default styles;