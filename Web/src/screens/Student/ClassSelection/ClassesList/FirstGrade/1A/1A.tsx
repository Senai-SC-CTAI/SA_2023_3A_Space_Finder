import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Image, ScrollView, Pressable, Alert } from 'react-native';
import {ScreenProfileStudent} from '../../../../Profile/index'

export function ScreenClassBooking1A() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  function ScreenProfileStudent() {
    navigation.navigate('ScreenProfileStudent')
  }

  return (
    <ScrollView>
      <View style={styles.perfil}>
        <Text
          style={styles.nome}
          onPress={() => ScreenProfileStudent()}
        >Fulano Beltrano</Text>

        <Pressable onPress={() => ScreenProfileStudent()}>
          <Image source={require('../../../../../../../assets/user.png')} style={styles.user} />
        </Pressable>

      </View>
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
          <Image source={require('../../../../../../../assets/iconClose.png')} style={styles.modalHeaderOpacity}/>
          <Text style={styles.modalHeaderSala}>F25</Text>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Image source={require('../../../../../../../assets/iconClose.png')} style={styles.modalHeaderClose}/>
            </Pressable>
            </View>


          <View style={styles.cardModalAlign}>
            <View style={styles.horaModal}>
              <View style={styles.horaAlignModal}>
            <Text style={styles.modalTextHora}>07:40</Text>
            <Text style={styles.modalTextHora}>10:10</Text>
              </View>
              </View>

          <View style={styles.cardModal}>
            <View style={styles.infosModal}>
            <Text style={styles.modalTextCinza}>Professor(a)</Text>
            <Text style={styles.modalTextPreto}>Jackson</Text>
            <View style={styles.barraModal}></View>
            <Text style={styles.modalTextCinza}>Matéria</Text>
            <Text style={styles.modalTextPreto}>Técnico</Text>
            </View>
          </View>
          </View>


        <View style={styles.cardModalAlign}>
          <View style={styles.horaModal}>
              <View style={styles.horaAlignModal}>
            <Text style={styles.modalTextHora}>10:35</Text>
            <Text style={styles.modalTextHora}>13:00</Text>
              </View>
            </View>

          <View style={styles.cardModal}>
            <View style={styles.infosModal}>
            <Text style={styles.modalTextCinza}>Professor(a)</Text>
            <Text style={styles.modalTextPreto}>Bruno</Text>
            <View style={styles.barraModal}></View>
            <Text style={styles.modalTextCinza}>Matéria</Text>
            <Text style={styles.modalTextPreto}>Técnico</Text>
            </View>
            </View>
            </View>

           
          </View>
        </View>

      </Modal>

      {/*<Text>Você está na tela A</Text>
      <TouchableOpacity onPress={() => navigation.push('B')}>
        <Text style={styles.text}>Ir para tela B</Text>
      </TouchableOpacity>*/}


        
        
        
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
      <Image source={require('../../../../../../../assets/vazio.png')} style={styles.vazio}/>
      </View>

      <View style={styles.barra}></View>
      <View style={styles.align}>

      <Pressable onPress={() => setModalVisible(true)}>
      <Image source={require('../../../../../../../assets/iconInfo.png')} style={styles.info}/>
      </Pressable>      
      </View>

      </View>


      <View style={styles.card}>

<View style={styles.align}>
<Text style={styles.sala}>F25</Text> 
</View>
<View style={styles.barra}></View>

<View style={styles.align}>
<Image source={require('../../../../../../../assets/vazio.png')} style={styles.vazio}/>
</View>

<View style={styles.barra}></View>

<View>
<Text style={styles.hor1}>10:35</Text>
<Text style={styles.hor2}>13:00</Text>
</View>

<View style={styles.barra}></View>
<View style={styles.align}>

<Pressable onPress={() => setModalVisible(true)}>
<Image source={require('../../../../../../../assets/iconInfo.png')} style={styles.info}/>
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
<Image source={require('../../../../../../../assets/vazio.png')} style={styles.vazio}/>
</View>

<View style={styles.barra}></View>

<View>
<Text style={styles.hor1}>15:50</Text>
<Text style={styles.hor2}>17:20</Text>
</View>

<View style={styles.barra}></View>
<View style={styles.align}>
<Image source={require('../../../../../../../assets/iconInfo.png')} style={styles.info}/>
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
      <Image source={require('../../../../../../../assets/vazio.png')} style={styles.vazio}/>
      </View>

      <View style={styles.barra}></View>
      <View style={styles.align}>
      <Image source={require('../../../../../../../assets/iconInfo.png')} style={styles.info}/>
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
      <Image source={require('../../../../../../../assets/vazio.png')} style={styles.vazio}/>
      </View>

      <View style={styles.barra}></View>
      <View style={styles.align}>
      <Image source={require('../../../../../../../assets/iconInfo.png')} style={styles.info}/>
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
  perfil: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#003F72',
    gap: 7,
    padding: 10
  },
  nome: {
    fontSize: 22,
    alignSelf: 'center',
    color: '#fff'
  },
  user: {
    width: 50,
    height: 50,
    margin: 3
  },
  card: {
    backgroundColor: '#E7E7E7',
    flexDirection: 'row',
    padding: 30,
    marginBottom: 25,
    justifyContent: 'center',
    borderRadius: 14,
    width: '40%'
  },
  sala: {
    fontSize: 25,
    marginRight: 8,
    marginLeft: -12,
    textAlign: 'center'
  },
  align: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  vazio: {
    marginLeft: 50,
    marginRight: 50,
    width: 30,
    height: 40
  },
  hor1: {
    fontSize: 25,
    marginLeft: 25,
    marginRight: 25
  },
  hor2: {
    fontSize: 25,
    marginLeft: 25,
    marginRight: 25
  },
  hor3: {
    fontSize: 25,
    marginLeft: 30,
    marginRight: 30
  },
  hor4: {
    fontSize: 25,
    marginLeft: 30,
    marginRight: 30
  },
  info: {
    width: 50,
    height: 50,
    marginLeft: 20
  },
  barra: {
    borderWidth: 1,
    borderColor: '#6B6B6B',
  },
  turno: {
    fontSize: 25,
    margin: 22
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
    padding: 60,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  modalHeader: {
    flexDirection: 'row',
    backgroundColor: '#003F72',
    gap: 80,
    justifyContent: 'flex-end',
    width: '130%',
    marginTop: -70,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 14,
    alignItems: 'center',
    marginBottom: 25
  },
  modalHeaderOpacity: {
    opacity: 0,
    width: 40,
    height: 40
  },
  modalHeaderSala: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    marginRight:90
  },
  modalHeaderClose: {
    width: 45,
    height: 45,
    justifyContent: 'flex-end',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTextCinza: {
    color: '#6b6b6b',
    marginTop: 15,
    fontSize:16
  },
  modalTextPreto: {
    color: 'black',
    fontSize: 18,
    marginTop: 8,
    marginBottom: 20,
    width: '70%',
    textAlign: 'center',
  },
  modalTextHora: {
    fontSize: 28,
  },
  vazioModal: {
    width: 10,
    height: 40,
    margin: 10,
    marginBottom: 13,
    marginHorizontal: '33%'
  },
  cardModal: {
    backgroundColor: '#E7E7E7',
    flexDirection: 'row',
    marginBottom: 25,
    justifyContent: 'center',
    borderRadius: 14,
    borderBottomLeftRadius:0,
    borderTopLeftRadius:0,
    gap: 3,
    width: '100%',
    height:'100%'
  },
  cardModalAlign:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    margin:10
  },
  horaModal: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a4a4a4',
    padding: 20,
    borderRadius: 14,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  horaAlignModal: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  infosModal: {
    alignItems: 'center',
  },
  barraModal: {
    borderWidth: 1,
    borderColor: '#cdcdcd',
    width: 90,
    marginBottom: 5,
  }
})
