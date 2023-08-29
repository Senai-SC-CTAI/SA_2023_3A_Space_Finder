import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, ScrollView, Pressable, Alert, TextInput, TouchableOpacityBase, } from 'react-native';
import { ScreenClassBookingAdm } from '../Classrooms';
import { useNavigation } from '@react-navigation/native';

export function ScreenTeachersInfoAdm() {

  //modal das infos
  const [modalVisible, setModalVisible] = useState(false);

  //voltar para tela das salas
  const navigation = useNavigation();

  //tela salas
  function ScreenClassBookingAdm() {
    navigation.navigate('ScreenClassBookingAdm')
  }

  return (



    <View style={styles.container}>
      <StatusBar hidden={true} />

      <ScrollView>


        {/*---INFOS PROFESSORES---*/}
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
                <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderOpacity} />
                <Text style={styles.modalHeaderSala}>Professor</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderClose} />
                </Pressable>
              </View>


              <View style={styles.cardModal}>

                <View style={styles.infosModal}>
                  <Text style={styles.modalTextCinza}>Nome:</Text>
                  <Text style={styles.modalTextPreto}>Anônimo Pereira</Text>
                  <View style={styles.barraModal}></View>
                  <Text style={styles.modalTextCinza}>Usuário:</Text>
                  <Text style={styles.modalTextPreto}>Professor</Text>
                  <View style={styles.barraModal}></View>
                  <Text style={styles.modalTextCinza}>Email:</Text>
                  <Text style={styles.modalTextPreto}>Anônimo_Pereira@professor.sesisenai.org.br</Text>
                </View>
              </View>


              <TouchableOpacity style={styles.botao} onPress={() => setModalVisible(!setModalVisible)}>
                <Text style={styles.botaoTexto}>Voltar</Text>
              </TouchableOpacity>


            </View>
          </View>

        </Modal>

        {/*<Text>Você está na tela A</Text>
      <TouchableOpacity onPress={() => navigation.push('B')}>
        <Text style={styles.text}>Ir para tela B</Text>
      </TouchableOpacity>*/}





        {/*------ CÓDIGO ------*/}

        <View style={styles.perfil}>
          <Text style={styles.nome}>Fulano Beltrano</Text>
          <Image source={require('../../../../assets/user.png')} style={styles.user} />
        </View>

        <View style={styles.salasProfs}>
          <TouchableOpacity style={styles.botaoSalas} onPress={ScreenClassBookingAdm}>
            <Text style={styles.textSalasProfs}>Salas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoProfs}>
            <Text style={styles.textSalasProfs}>Professores</Text>
          </TouchableOpacity>
        </View>



        {/*------ CÓDIGO CARDS SALAS------*/}


        <Pressable onPress={() => setModalVisible(true)}>
          <View style={styles.card}>
            <Image source={require('../../../../assets/user.png')} style={styles.userProfilePic} />
            <Text style={styles.nomeProf}>
              Anônimo Pereira
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setModalVisible(true)}>
          <View style={styles.card}>
            <Image source={require('../../../../assets/user.png')} style={styles.userProfilePic} />
            <Text style={styles.nomeProf}>
              Neymar Jr.
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setModalVisible(true)}>
          <View style={styles.card}>
            <Image source={require('../../../../assets/user.png')} style={styles.userProfilePic} />
            <Text style={styles.nomeProf}>
              MC Lan
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setModalVisible(true)}>
          <View style={styles.card}>
            <Image source={require('../../../../assets/user.png')} style={styles.userProfilePic} />
            <Text style={styles.nomeProf}>
              Fulano Agosto Muralha
            </Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  perfil: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#003F72',
    gap: 7,
    padding: 18,
  },
  nome: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#fff'
  },
  user: {
    width: 45,
    height: 45,
    margin: 3
  },
  salasProfs: {
    backgroundColor: '#00589F',
    display: 'flex',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 20
  },
  botaoSalas: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    borderRadius: 18,
    width: '48%',
    height: 68,
    textAlignVertical: 'center',
    marginBottom: -20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  botaoProfs: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 18,
    width: '48%',
    height: 68,
    textAlignVertical: 'center',
    marginBottom: -20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  textSalasProfs: {
    fontSize: 20,
    textAlign: 'center',
  },




  //------ CARDS COM OS PROFS ------


  card: {
    backgroundColor: '#E7E7E7',
    flexDirection: 'row',
    padding: '5%',
    marginTop: 25,
    justifyContent: 'flex-start',
    borderRadius: 14,
    width: '95%',
    alignSelf: 'center'
  },
  userProfilePic: {
    height: 60,
    width: 60,
  },
  nomeProf: {
    fontSize: 23,
    marginRight: 8,
    marginLeft: '6%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center'
  },

  //------ INFORMAÇÕES/DETALHES ------
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
    width: '84%'
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
    gap: 90,
    justifyContent: 'flex-end',
    width: '128%',
    marginTop: -40,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 8,
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
    fontSize: 25,
    textAlign: 'center',
  },
  modalHeaderClose: {
    width: 40,
    height: 40,
    justifyContent: 'flex-end',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTextCinza: {
    color: '#6b6b6b',
    marginTop: 15,
  },
  modalTextPreto: {
    color: 'black',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 20,
    width: '70%',
    textAlign: 'center',
  },
  modalTextHora: {
    fontSize: 27,
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
    /*padding:20,*/
    marginBottom: 25,
    justifyContent: 'center',
    borderRadius: 14,
    gap: 3,
    width: '106%',
  },
  horaModal: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a4a4a4',
    padding: 12,
    borderRadius: 14,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
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
    width: 130,
    marginBottom: 5,
  },
  botao: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00589F',
    borderRadius: 150,
  },
  botaoTexto: {
    fontSize: 15,
    color: '#ffff',
  },
})
