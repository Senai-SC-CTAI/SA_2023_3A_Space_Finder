import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    card:{
      backgroundColor:'#E7E7E7',
      flexDirection:'row',
      padding:20,
      marginBottom:25,
      justifyContent:'center',
      borderRadius:14,
      width:'95%'
    },
    sala:{
      fontSize:23,
      marginRight:8,
      marginLeft:-12,
      textAlign:'center'
    },
    align:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },
    vazio:{
      marginLeft:50,
      marginRight:50,
      width:20,
      height:40
    },
    hor1:{
      fontSize:23,
      marginLeft:25,
      marginRight:25
    },
    hor2:{
      fontSize:23,
      marginLeft:25,
      marginRight:25
    },
    hor3:{
      fontSize:23,
      marginLeft:30,
      marginRight:30
    },
    hor4:{
      fontSize:23,
      marginLeft:30,
      marginRight:30
    },
    info:{
      width:40,
      height:40,
      marginLeft:20
    },
    barra:{
      borderWidth:1,
      borderColor:'#6B6B6B',
    },
    turno:{
      fontSize:20,
      margin:22
    },
    
  
    /*------MODAL------*/
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:'83%'
    },
    buttonModal: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalTextCinza:{
      color:'#6b6b6b',
      marginTop:15,
    },
    modalTextPreto:{
      color:'black',
      fontSize:16,
      marginTop:8,
      marginBottom:20,
      width:'70%',
      textAlign:'center',
    },
    modalTextHora:{
      fontSize:27,
    },
    vazioModal:{
      width:10,
      height:40,
      margin:10,
      marginBottom:13,
      marginHorizontal:'33%'
    },
    cardModal:{
      backgroundColor:'#E7E7E7',
      flexDirection:'row',
      /*padding:20,*/
      marginBottom:25,
      justifyContent:'center',
      borderRadius:14,
      gap:3,
      width:'107%',
    },
    horaModal:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'#a4a4a4',
      padding:12,
      borderRadius:14,
      borderTopRightRadius:0,
      borderBottomRightRadius:0
    },
    horaAlignModal:{
      flexDirection:'column',
      alignItems:'center'
    },
    infosModal:{
      alignItems:'center',
    },
    barraModal:{
      borderWidth:1,
      borderColor:'#cdcdcd',
      width:130,
      marginBottom:5,
    }
  });
