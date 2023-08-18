import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Image, ScrollView, Pressable, Alert } from 'react-native';

export function ScreenClassBooking() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    
    <ScrollView>
    <View style={styles.container}>

{/*---MODAL---*/}
    <Modal  
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        >
        <View style={styles.centeredView}>


          <View style={styles.modalView}>
          <View style={styles.modalHeader}>
          <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderOpacity}/>
          <Text style={styles.modalHeaderSala}>F25</Text>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderClose}/>
            </Pressable>
            </View>


          <View style={styles.cardModal}>
            <View style={styles.horaModal}>
              <View style={styles.horaAlignModal}>
            <Text style={styles.modalTextHora}>7:40</Text>
            <Text style={styles.modalTextHora}>10:10</Text>
              </View>
            </View>
            <View style={styles.infosModal}>
            <Text style={styles.modalTextCinza}>Professor(a)</Text>
            <Image source={require('../../../../assets/vazio.png')} style={styles.vazioModal}/>
            <View style={styles.barraModal}></View>
            <Text style={styles.modalTextCinza}>Matéria</Text>
            <Image source={require('../../../../assets/vazio.png')} style={styles.vazioModal}/>
            </View>
          </View>


          <View style={styles.cardModal}>
          <View style={styles.horaModal}>
              <View style={styles.horaAlignModal}>
            <Text style={styles.modalTextHora}>10:35</Text>
            <Text style={styles.modalTextHora}>13:00</Text>
              </View>
            </View>
            <View style={styles.infosModal}>
            <Text style={styles.modalTextCinza}>Professor(a)</Text>
            <Text style={styles.modalTextPreto}>Bruno</Text>
            <View style={styles.barraModal}></View>
            <Text style={styles.modalTextCinza}>Matéria</Text>
            <Text style={styles.modalTextPreto}>Desenvolvimento de Apps</Text>
            </View>
            </View>

           
          </View>
        </View>

      </Modal>

      {/*<Text>Você está na tela A</Text>
      <TouchableOpacity onPress={() => navigation.push('B')}>
        <Text style={styles.text}>Ir para tela B</Text>
      </TouchableOpacity>
      exemplo de código para quando eu quiser navegar entre telas*/}


        
        
        
        {/*---CÓDIGO---*/}

      <Text style={styles.turno}>Matutino</Text>

      <View style={styles.card}>

        <View style={styles.align}>
      <Text style={styles.sala}>G12</Text>
      </View>
      <View style={styles.barra}></View>
      <View>
      <Text style={styles.hor1}>07:40</Text>
      <Text style={styles.hor2}>10:10</Text>
      </View>
      <View style={styles.barra}></View>
      
      <View style={styles.align}>
      <Image source={require('../../../../assets/vazio.png')} style={styles.vazio}/>
      </View>

      <View style={styles.barra}></View>
      <View style={styles.align}>

      <Pressable onPress={() => setModalVisible(true)}>
      <Image source={require('../../../../assets/iconInfo.png')} style={styles.info}/>
      </Pressable>      
      </View>

      </View>


      <View style={styles.card}>

<View style={styles.align}>
<Text style={styles.sala}>F25</Text> 
</View>
<View style={styles.barra}></View>

<View style={styles.align}>
<Image source={require('../../../../assets/vazio.png')} style={styles.vazio}/>
</View>

<View style={styles.barra}></View>

<View>
<Text style={styles.hor1}>10:35</Text>
<Text style={styles.hor2}>13:00</Text>
</View>

<View style={styles.barra}></View>
<View style={styles.align}>

<Pressable onPress={() => setModalVisible(true)}>
<Image source={require('../../../../assets/iconInfo.png')} style={styles.info}/>
</Pressable>
</View>

</View>

<Text style={styles.turno}>Vespertino</Text>

<View style={styles.card}>

<View style={styles.align}>
<Text style={styles.sala}>F12</Text> 
</View>
<View style={styles.barra}></View>

<View style={styles.align}>
<Image source={require('../../../../assets/vazio.png')} style={styles.vazio}/>
</View>

<View style={styles.barra}></View>

<View>
<Text style={styles.hor1}>15:50</Text>
<Text style={styles.hor2}>17:20</Text>
</View>

<View style={styles.barra}></View>
<View style={styles.align}>
<Image source={require('../../../../assets/iconInfo.png')} style={styles.info}/>
</View>

</View>


<View style={styles.card}>

        <View style={styles.align}>
      <Text style={styles.sala}>Auditório</Text>
      </View>
      <View style={styles.barra}></View>
      <View>
      <Text style={styles.hor1}>14:00</Text>
      <Text style={styles.hor2}>15:30</Text>
      </View>
      <View style={styles.barra}></View>
      
      <View style={styles.align}>
      <Image source={require('../../../../assets/vazio.png')} style={styles.vazio}/>
      </View>

      <View style={styles.barra}></View>
      <View style={styles.align}>
      <Image source={require('../../../../assets/iconInfo.png')} style={styles.info}/>
      </View>

      </View>


      <View style={styles.card}>

        <View style={styles.align}>
      <Text style={styles.sala}>E12</Text>
      </View>
      <View style={styles.barra}></View>
      <View>
      <Text style={styles.hor1}>15:50</Text>
      <Text style={styles.hor2}>17:20</Text>
      </View>
      <View style={styles.barra}></View>
      
      <View style={styles.align}>
      <Image source={require('../../../../assets/vazio.png')} style={styles.vazio}/>
      </View>

      <View style={styles.barra}></View>
      <View style={styles.align}>
      <Image source={require('../../../../assets/iconInfo.png')} style={styles.info}/>
      </View>

      </View>


    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
      width:'84%'
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
    modalHeader:{
      flexDirection:'row',
      backgroundColor:'#003F72',
      gap:90,
      justifyContent:'flex-end',
      width:'128%',
      marginTop:-40,
      borderRadius: 20,
      borderBottomLeftRadius:0,
      borderBottomRightRadius:0,
      padding:8,
      alignItems:'center',
      marginBottom:25
    },
    modalHeaderOpacity:{
      opacity:0,
      width:40,
      height:40
    },
    modalHeaderSala:{
      color:'#fff',
      fontSize:25,
      textAlign:'center',
    },
    modalHeaderClose:{
      width:40,
      height:40,
      justifyContent:'flex-end',
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
      width:'106%',
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
})
