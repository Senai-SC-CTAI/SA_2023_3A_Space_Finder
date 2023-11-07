import { SetStateAction, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, ScrollView, Pressable, Alert, TextInput, TouchableOpacityBase, } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import { useNavigation } from '@react-navigation/native';
import React from 'react';



export function ScreenClassBookingTeacher() {
  const navigation = useNavigation();


  const [modalVisible, setModalVisible] = useState(false); //modal das infos
  const [openTurno, setOpenTurno] = useState(false);//modal turnos
  const [modalReserva, setModalReserva] = useState(false); //modal da reserva de salas
  const [setModalReservaMateria] = useState(''); //modal da reserva de salas
  const [setModalReservaProf] = useState('');

  const [openCancelar, setOpenCancelar] = useState(false); //modal de cancelar a sala



  const today = new Date(); //mod                                                                                                                                                                                          al calendar

  today.setDate(today.getDate() + 1)

  const [openDate, setOpenDate] = useState(false); //modal calendar

  const [date, setDate] = useState('12/12/2023'); //modal calendar

  function handleOnPressCancelar() {
    setOpenCancelar(!openCancelar)
  }


  function handleOnPressDate() { //modal calendar
    setOpenDate(!openDate);
  }

  function handleChange(propDate: SetStateAction<string>) { //modal calendar
    console.log(propDate);
    setDate(propDate);
  }

  function handleOnPressTurno() {//modal turnos
    setOpenTurno(!openTurno);
  }


  function ScreenProfileTeacher() {
    navigation.navigate('ScreenProfileTeacher')
  }


  return (

    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden={true} />


        {/*---INFORMAÇÕES/DETALHES---*/}


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


        {/* MODAL CANCELAR RESERVA */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={openCancelar}
        >

          <View style={styles.centeredViewCancelar}>


            <View style={styles.modalViewCancelar}>


              <View style={styles.modalHeaderCancelar}>
              <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderOpacityCancelar} />
                <Text style={styles.modalHeaderSalaCancelar}>Atenção</Text>
                <Pressable onPress={() => setOpenCancelar(!openCancelar)}>
                  <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderCloseCancelar} />
                </Pressable>
              </View>


              <View style={styles.cardModalCancelar}>

                <View style={styles.modalTextoCancelar}>
                  <Text style={styles.modalTextPretoCancelar}>Deseja remover a reserva?</Text>
                </View>
              </View>


              <TouchableOpacity style={styles.botaoCancelar} onPress={handleOnPressCancelar}>
                <Text style={styles.botaoTextoCancelar}>Confirmar</Text>
              </TouchableOpacity>


            </View>
          </View>

        </Modal>


        {/*--- MODAL RESERVAR SALA  ---*/}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalReserva}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalReserva);
          }}
        >
          <View style={styles.centeredViewReservar}>


            <View style={styles.modalViewReservar}>
              <View style={styles.modalHeaderReservar}>
                <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderOpacityReservar} />
                <Text style={styles.modalHeaderSalaReservar}>G12</Text>
                <Pressable onPress={() => setModalReserva(!modalReserva)}>
                  <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderCloseReservar} />
                </Pressable>
              </View>


            <View style={styles.cardModalAlignReservar}>
            <View style={styles.horaModalReservar}>
            <View style={styles.horaAlignModalReservar}>     
                    <Text style={styles.modalTextHoraReservar}>10:35</Text>
                    <Text style={styles.modalTextHoraReservar}>13:00</Text>
                </View>
                </View>

              <View style={styles.cardModalReservar}>
                <View style={styles.infosModalReservar}>
                  <Text style={styles.modalTextCinzaReservar}>Professor(a)</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={setModalReservaProf}
                    placeholder="|"
                  />
                  <View style={styles.barraModalReservar}></View>
                  <Text style={styles.modalTextCinzaReservar}>Matéria</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={setModalReservaMateria}
                    placeholder="|"
                  />

                </View>
              </View>
              </View>

              <TouchableOpacity style={styles.botaoReservar} onPress={() => setModalReserva(!setModalReserva)}>
                <Text style={styles.botaoTextoReservar}>Confirmar</Text>
              </TouchableOpacity>

            </View>
          </View>

        </Modal>
        {/*Atenção FIM*/}


        {/*------ CÓDIGO ------*/}

        <View style={styles.perfil}>
          <Text
            style={styles.nome}
            onPress={ScreenProfileTeacher}
          >Fulano Beltrano</Text>

          <Pressable onPress={() => ScreenProfileTeacher()}>
            <Image source={require('../../../../assets/user.png')} style={styles.user} />
          </Pressable>

        </View>

        <Text style={styles.salas}>Salas</Text>

        <View style={styles.alignTurnoCalendar}>
          <TouchableOpacity onPress={handleOnPressTurno} style={styles.turnoPicker}>
            <Text style={styles.calendarText}>Turno</Text>
            <Image source={require('../../../../assets/iconTurnos.png')} style={styles.turnoIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleOnPressDate} style={styles.calendarPicker}>
            <Text style={styles.calendarText}>Calendário</Text>
            <Image source={require('../../../../assets/iconCalendar.png')} style={styles.calendarIcon} />
          </TouchableOpacity>
        </View>


        {/*------ CALENDÁRIO ------*/}

        <Modal
          animationType='slide'
          transparent={true}
          visible={openDate}
        >

          <View style={styles.centeredViewCalendar}>
            <View style={styles.modalViewCalendar}>
              <DatePicker
                mode='calendar'
                selected={date}
                onDateChange={handleChange}
              />

              <TouchableOpacity onPress={handleOnPressDate}>
                <Text style={styles.calendarCloser}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>

        </Modal>



        {/*------ TURNOS (MATUTINO/VESPERTINO) ------*/}

        <Modal
          animationType='slide'
          transparent={true}
          visible={openTurno}
        >

          <View style={styles.centeredViewTurno}>
            <View style={styles.modalViewTurno}>

              <TouchableOpacity onPress={handleOnPressTurno} style={styles.borderText}>
                <Text style={styles.turnoText}>Matutino</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleOnPressTurno} style={styles.borderText}>
                <Text style={styles.turnoText}>Vespertino</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleOnPressTurno}>
                <Text style={styles.turnoCloser}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>

        </Modal>

        {/*------ CÓDIGO ------*/}


        <View style={styles.card}>

          <View style={styles.align}>
            <Text style={styles.sala}>G12</Text>
          </View>
          <View style={styles.barra}></View>

          <View>
            <Text style={styles.hor1}>07:40</Text>
            <Text style={styles.hor2}>10:10</Text>
          </View>

          <TouchableOpacity onPress={handleOnPressCancelar}>
            <Image source={require('../../../../assets/iconMinus.png')} style={styles.minus} />
          </TouchableOpacity>

          <View style={styles.barra}></View>

          <View style={styles.align}>

            <Pressable onPress={() => setModalReserva(true)}>
              <Image source={require('../../../../assets/iconPlus.png')} style={styles.plus} />
            </Pressable>


          </View>

          <View style={styles.barra}></View>
          <View style={styles.align}>

            <Pressable onPress={() => setModalVisible(true)}>
              <Image source={require('../../../../assets/iconInfo.png')} style={styles.info} />
            </Pressable>
          </View>

        </View>


        <View style={styles.card}>

          <View style={styles.align}>
            <Text style={styles.sala}>F25</Text>
          </View>
          <View style={styles.barra}></View>

          <View style={styles.align}>
            <Image source={require('../../../../assets/iconPlus.png')} style={styles.plus} />
          </View>

          <View style={styles.barra}></View>

          <View>
            <Text style={styles.hor1}>10:35</Text>
            <Text style={styles.hor2}>13:00</Text>
          </View>

          <TouchableOpacity onPress={handleOnPressCancelar}>
            <Image source={require('../../../../assets/iconMinus.png')} style={styles.minus} />
          </TouchableOpacity>

          <View style={styles.barra}></View>
          <View style={styles.align}>

            <Pressable onPress={() => setModalVisible(true)}>
              <Image source={require('../../../../assets/iconInfo.png')} style={styles.info} />
            </Pressable>
          </View>

        </View>


        <View style={styles.card}>

          <View style={styles.align}>
            <Text style={styles.sala}>F12</Text>
          </View>
          <View style={styles.barra}></View>

          <View style={styles.align}>
            <Image source={require('../../../../assets/iconPlus.png')} style={styles.plus} />
          </View>

          <View style={styles.barra}></View>

          <View>
            <Text style={styles.hor1}>15:50</Text>
            <Text style={styles.hor2}>17:20</Text>
          </View>

          <TouchableOpacity onPress={handleOnPressCancelar}>
            <Image source={require('../../../../assets/iconMinus.png')} style={styles.minus} />
          </TouchableOpacity>

          <View style={styles.barra}></View>
          <View style={styles.align}>
            <Image source={require('../../../../assets/iconInfo.png')} style={styles.info} />
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

          <TouchableOpacity onPress={handleOnPressCancelar}>
            <Image source={require('../../../../assets/iconMinus.png')} style={styles.minus} />
          </TouchableOpacity>

          <View style={styles.barra}></View>

          <View style={styles.align}>
            <Image source={require('../../../../assets/iconPlus.png')} style={styles.plus} />
          </View>

          <View style={styles.barra}></View>
          <View style={styles.align}>
            <Image source={require('../../../../assets/iconInfo.png')} style={styles.info} />
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

          <TouchableOpacity onPress={handleOnPressCancelar}>
            <Image source={require('../../../../assets/iconMinus.png')} style={styles.minus} />
          </TouchableOpacity>

          <View style={styles.barra}></View>

          <View style={styles.align}>
            <Image source={require('../../../../assets/iconPlus.png')} style={styles.plus} />
          </View>

          <View style={styles.barra}></View>
          <View style={styles.align}>
            <Image source={require('../../../../assets/iconInfo.png')} style={styles.info} />
          </View>

        </View>


      </View>
    </ScrollView>
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
  salas: {
    fontSize: 26,
    backgroundColor: '#00589F',
    color: '#fff',
    display: 'flex',
    padding: 24,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent:'center'
  },
  alignTurnoCalendar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 6,
    marginRight: 16
  },


  //------ MODAL CALENDAR ------
  calendarPicker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#e7e7e7',
    borderRadius: 10,
    alignItems: 'center',
    gap: 4,
    width: '10%',
    alignSelf: 'flex-end',
    padding: 8,
    marginBottom: 8,
    margin: 4
  },
  calendarIcon: {
    width: 40,
    height: 40,
  },
  calendarText: {
    fontSize: 22
  },
  calendarCloser:{
    fontSize:18
  },
  centeredViewCalendar: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 22,
  },
  modalViewCalendar: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '30%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  //------ CARDS COM AS SALAS ------
  card: {
    backgroundColor: '#E7E7E7',
    flexDirection: 'row',
    padding: 30,
    marginBottom: 25,
    justifyContent: 'center',
    borderRadius: 14,
    width: '40%',
    alignSelf: 'center'
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
  plus: {
    width: 40,
    height: 40,
  },
  minus: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '22%',
    marginRight: 10,
    width: 40,
    height: 40,
  },
  hor1: {
    fontSize: 25,
    marginLeft: 25,
    marginRight: 10
  },
  hor2: {
    fontSize: 25,
    marginLeft: 25,
    marginRight: 10
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

  modalTextPretoCancel: {
    color: 'black',
    fontWeight: 'bold',
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
    gap:3,
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
    width: 130,
    marginBottom: 5,
    marginRight: '12%'
  },


  // ------ TURNOS ------
  centeredViewTurno:{
    display: 'flex',
    alignItems: 'center',
    marginTop: 22,
  },
  modalViewTurno:{
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '20%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  turnoPicker: {
    backgroundColor: '#e7e7e7',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    gap: 4,
    alignSelf: 'flex-end',
    padding: 13,
    margin: 10
  },
  turnoIcon: {
    width: 30,
    height: 30,
  },
  borderText: {
    borderRadius: 10,
    backgroundColor: '#e7e7e7',
    margin: 6,
  },
  turnoText: {
    fontSize: 22,
    margin: 6,
    backgroundColor: '#e7e7e7',
    borderRadius: 10,
    padding: 10,
  },
  turnoCloser: {
    marginTop: 18,
    fontSize: 18
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
  input: {
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    padding: '4%',
    width: 105,
    backgroundColor: '#E7E7E7',
    color: '#7d7d7d',
    fontSize: 16,
    borderRadius: 10,
  },

    // ------ CANCELAR RESERVAS ------

    centeredViewCancelar:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:22
    },
    modalViewCancelar:{
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        margin:20,
        padding:60,
      },
    modalHeaderCancelar:{
      flexDirection: 'row',
      backgroundColor: '#003F72',
      gap: 90,
      justifyContent: 'flex-end',
      width: '124%',
      marginTop: -70,
      borderRadius: 20,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      padding: 10,
      alignItems: 'center',
      marginBottom: 25,
    },
    modalHeaderSalaCancelar:{
      color: '#fff',
      fontSize: 25,
      textAlign: 'center',
      marginRight:130
    },
    modalHeaderCloseCancelar:{
      width: 40,
      height: 40,
    },
    modalHeaderOpacityCancelar: {
      opacity: 0,
      width: 40,
      height: 40
    },
    cardModalCancelar:{
      backgroundColor: '#E7E7E7',
      flexDirection: 'row',
      marginBottom: 25,
      justifyContent: 'center',
      borderRadius: 14,
      width:'90%',
    },
    modalTextoCancelar:{
      marginBottom: 15,
     textAlign: 'center',
    },
    modalTextPretoCancelar:{
      color: 'black',
     fontSize: 18,
     marginTop: 15,
     marginBottom: 15,
     textAlign: 'center',
    },
    botaoCancelar:{
     borderRadius: 20,
     padding: 10,
     elevation: 2,
     backgroundColor: '#003F72',
     width:200
    },
    botaoTextoCancelar:{
      color:'white',
      fontSize:16,
      textAlign:'center'
    },

   // ------ RESERVAR SALAS ------
    centeredViewReservar:{
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    },
    modalViewReservar:{
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
    buttonModalReservar:{
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    modalHeaderReservar:{
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
    modalHeaderOpacityReservar: {
      opacity: 0,
      width: 40,
      height: 40
    },
    modalHeaderSalaReservar: {
      color: '#fff',
      fontSize: 28,
      textAlign: 'center',
      marginRight:90
    },
    modalHeaderCloseReservar: {
      width: 45,
      height: 45,
      justifyContent: 'flex-end',
    },
    modalTextReservar: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalTextCinzaReservar: {
      color: '#6b6b6b',
      marginTop: 15,
      fontSize:16
    },
    modalTextPretoReservar: {
      color: 'black',
      fontSize: 18,
      marginTop: 8,
      marginBottom: 20,
      width: '100%',
      textAlign: 'center',
    },
    modalTextHoraReservar: {
      fontSize: 28,
    },
    cardModalReservar: {
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
    cardModalAlignReservar:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      margin:10
    },
    horaModalReservar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#a4a4a4',
      padding: 20,
      borderRadius: 14,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    horaAlignModalReservar: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    barraModalReservar: {
      borderWidth: 1,
      borderColor: '#cdcdcd',
      width: 90,
      marginBottom: 5,
    },
    botaoReservar:{
      width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00589F',
    borderRadius: 150,
    marginTop:20,
    marginBottom:-10
    },
    botaoTextoReservar:{
      color:'white',
      fontSize:16,
      textAlign:'center'
    }

});
