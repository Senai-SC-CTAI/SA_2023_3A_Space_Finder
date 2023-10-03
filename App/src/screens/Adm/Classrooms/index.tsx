import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, ScrollView, Pressable, Alert, TextInput, TouchableOpacityBase, } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import { ScreenTeachersInfoAdm } from '../TeachersInfo';
import { useNavigation } from '@react-navigation/native';

export function ScreenClassBookingAdm() {

  //modal das infos
  const [modalVisible, setModalVisible] = useState(false);

  //modal calendar
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState('12/12/2023');

  //modal turnos
  const [openTurno, setOpenTurno] = useState(false);

  //modal Nova Sala
  const [openNovaSala, setOpenNovaSala] = useState(false);
  const [modalSalaNome, setModalSalaNome] = useState('');
  const [modalSalaEspecificacao, setModalSalaEspecificacao] = useState('');

  const [openCancelar, setOpenCancelar] = useState(false); //modal de cancelar a sala

  //modal das reservas
  const [modalReserva, setModalReserva] = useState(false);
  const [setModalReservaProf] = useState('');
  const [setModalReservaMateria] = useState('');


  //ir para tela dos profs
  const navigation = useNavigation();


  //modal calendar
  function handleOnPressDate() { //modal calendar
    setOpenDate(!openDate);
  }

  //modal turnos
  function handleOnPressTurno() {
    setOpenTurno(!openTurno);
  }

  //modal cancelar reservas
  function handleOnPressCancelar() {
    setOpenCancelar(!openCancelar)
  }

  //modal novaSala
  function handleOnPressNovaSala() {
    setOpenNovaSala(!openNovaSala);
  }

  //tela info prof
  function ScreenTeachersInfoAdm() {
    navigation.navigate('ScreenTeachersInfoAdm')
  }

  function ScreenProfileAdm() {
    navigation.navigate('ScreenProfileAdm')
  }

  return (



    <View style={styles.container}>
      <StatusBar hidden={true} />

      <TouchableOpacity onPress={handleOnPressNovaSala} style={styles.botaoAddClass}>
        <Image source={require('../../../../assets/iconAddClass.png')} style={styles.iconAddClass} />
      </TouchableOpacity>


      <ScrollView>

        


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
                <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderOpacity} />
                <Text style={styles.modalHeaderSala}>F25</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderClose} />
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
                  <Image source={require('../../../../assets/vazio.png')} style={styles.vazioModal} />
                  <View style={styles.barraModal}></View>
                  <Text style={styles.modalTextCinza}>Matéria</Text>
                  <Image source={require('../../../../assets/vazio.png')} style={styles.vazioModal} />
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
                  <Text style={styles.modalTextPreto}>Técnico</Text>
                </View>
              </View>


            </View>
          </View>

        </Modal>


{/*---RESERVA DE SALAS---*/}

          <Modal
                animationType="slide"
                transparent={true}
                visible={modalReserva}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalReserva(!modalReserva);
                }}
              >
                <View style={styles.centeredView}>


                  <View style={styles.modalView}>
                    <View style={styles.modalHeader}>
                      <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderOpacity} />
                      <Text style={styles.modalHeaderSala}>G12</Text>
                      <Pressable onPress={() => setModalReserva(!modalReserva)}>
                        <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderClose} />
                      </Pressable>
                    </View>


              <View style={styles.cardModal}>
                <View style={styles.horaModal}>
                  <View style={styles.horaAlignModal}>
                    <Text style={styles.modalTextHora}>07:45</Text>
                    <Text style={styles.modalTextHora}>10:10</Text>
                  </View>
                </View>
                <View style={styles.infosModal}>
                  <Text style={styles.modalTextCinza}>Professor(a)</Text>
                  <TextInput
                    style={styles.input1}
                    onChangeText={setModalReservaProf}
                    placeholder="|"
                  />
                  <View style={styles.barraModal}></View>
                  <Text style={styles.modalTextCinza}>Matéria</Text>
                  <TextInput
                    style={styles.input2}
                    onChangeText={setModalReservaMateria}
                    placeholder="|"
                  />
                </View>
              </View>

              <TouchableOpacity style={styles.botao} onPress={setModalReserva}>
                <Text style={styles.botaoTexto}>Confirmar</Text>
              </TouchableOpacity>

            </View>
          </View>

        </Modal>




        {/*------ CÓDIGO ------*/}

        <View style={styles.perfil}>
          <Text style={styles.nome}
            onPress={ScreenProfileAdm}
          >Fulano Beltrano</Text>

          <Pressable onPress={() => ScreenProfileAdm()}>

            <Image source={require('../../../../assets/user.png')} style={styles.user} />
          </Pressable>

        </View>

        <View style={styles.salasProfs}>
          <TouchableOpacity style={styles.botaoSalas}>
            <Text style={styles.textSalasProfs}>Salas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoProfs} onPress={ScreenTeachersInfoAdm}>
            <Text style={styles.textSalasProfs}>Professores</Text>
          </TouchableOpacity>
        </View>

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
              />

              <TouchableOpacity onPress={handleOnPressDate}>
                <Text>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>

        </Modal>


        {/* Novo modal cancelar */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={openCancelar}
        >

          <View style={styles.centeredView}>


            <View style={styles.modalView}>


              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderSala}>Atenção</Text>
                <Pressable onPress={() => setOpenCancelar(!openCancelar)}>
                  <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderClose} />
                </Pressable>
              </View>


              <View style={styles.cardModal}>

                <View style={styles.infosModal}>
                  <Text style={styles.modalTextPretoCancel}>Deseja remover a reserva?</Text>
                </View>
              </View>


              <TouchableOpacity style={styles.botao} onPress={handleOnPressCancelar}>
                <Text style={styles.botaoTexto}>Confirmar</Text>
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

          <View style={styles.centeredViewCalendar}>
            <View style={styles.modalViewCalendar}>

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

        {/*---NOVAS SALAS---*/}
        <Modal
          animationType="slide"
          transparent={true}
          visible={openNovaSala}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setOpenNovaSala(!openNovaSala);
          }}
        >
          <View style={styles.centeredView}>




            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderOpacity} />
                <Text style={styles.modalHeaderSala}>Adicionar sala</Text>
                <Pressable onPress={() => setOpenNovaSala(!openNovaSala)}>
                  <Image source={require('../../../../assets/iconClose.png')} style={styles.modalHeaderClose} />
                </Pressable>
              </View>




              <View style={styles.cardModal}>
                <View style={styles.infosModal}>
                  <Text style={styles.modalTextCinza}>Nome</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={setModalSalaNome}
                    placeholder=" "
                  />
                  <View style={styles.barraModal}></View>
                  <Text style={styles.modalTextCinza}>Especificação</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={setModalSalaEspecificacao}
                    placeholder=" "
                  />


                </View>
              </View>


              <TouchableOpacity style={styles.botao} onPress={() => setOpenNovaSala(!setOpenNovaSala)}>
                <Text style={styles.botaoTexto}>Confirmar</Text>
              </TouchableOpacity>


            </View>
          </View>


        </Modal>
       




        {/*------ CÓDIGO CARDS SALAS------*/}



        <View style={styles.card}>

          <View style={styles.align}>
            <Text style={styles.sala}>G12</Text>
          </View>
          <View style={styles.barra}></View>
          <View style={styles.alignMinus}>
            <View>
              <Text style={styles.hor1}>07:40</Text>
              <Text style={styles.hor2}>10:10</Text>
            </View>

            <TouchableOpacity onPress={handleOnPressCancelar}>
              <Image source={require('../../../../assets/iconMinus.png')} style={styles.minus} />
            </TouchableOpacity>

          </View>

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

          <View style={styles.alignMinus}>
            <View>
              <Text style={styles.hor1}>10:35</Text>
              <Text style={styles.hor2}>13:00</Text>
            </View>
            <TouchableOpacity onPress={handleOnPressCancelar}>
              <Image source={require('../../../../assets/iconMinus.png')} style={styles.minus} />
            </TouchableOpacity>
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
            <Text style={styles.sala}>F12</Text>
          </View>
          <View style={styles.barra}></View>

          <View style={styles.align}>
            <Image source={require('../../../../assets/iconPlus.png')} style={styles.plus} />
          </View>

          <View style={styles.barra}></View>

          <View style={styles.alignMinus}>
            <View>
              <Text style={styles.hor1}>15:50</Text>
              <Text style={styles.hor2}>17:20</Text>
            </View>
            <TouchableOpacity onPress={handleOnPressCancelar}>
              <Image source={require('../../../../assets/iconMinus.png')} style={styles.minus} />
            </TouchableOpacity>
          </View>


          <View style={styles.barra}></View>
          <View style={styles.align}>
            <Image source={require('../../../../assets/iconInfo.png')} style={styles.info} />
          </View>

        </View>


        <View style={styles.card}>

          <View style={styles.align}>
            <Text style={styles.sala}>D21</Text>
          </View>
          <View style={styles.barra}></View>

          <View style={styles.alignMinus}>
            <View>
              <Text style={styles.hor1}>14:00</Text>
              <Text style={styles.hor2}>15:30</Text>
            </View>
            <TouchableOpacity onPress={handleOnPressCancelar}>
              <Image source={require('../../../../assets/iconMinus.png')} style={styles.minus} />
            </TouchableOpacity>
          </View>

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

          <View style={styles.alignMinus}>
            <View>
              <Text style={styles.hor1}>15:50</Text>
              <Text style={styles.hor2}>17:20</Text>
            </View>
            <TouchableOpacity onPress={handleOnPressCancelar}>
              <Image source={require('../../../../assets/iconMinus.png')} style={styles.minus} />
            </TouchableOpacity>
          </View>

          <View style={styles.barra}></View>

          <View style={styles.align}>
            <Image source={require('../../../../assets/iconPlus.png')} style={styles.plus} />
          </View>

          <View style={styles.barra}></View>
          <View style={styles.align}>
            <Image source={require('../../../../assets/iconInfo.png')} style={styles.info} />
          </View>

        </View>
        <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>

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
  botaoProfs: {
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
  textSalasProfs: {
    fontSize: 20,
    textAlign: 'center',
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
    width: '38%',
    alignSelf: 'flex-end',
    padding: 4,
    marginBottom: -8,
    margin: 4
  },
  calendarIcon: {
    width: 36,
    height: 36,
  },
  calendarText: {
    fontSize: 18
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
    width: '90%',
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
  iconAddClass: {
    backgroundColor: '#fff',
    borderRadius: 100 / 2,
    width: 100,
    height: 100,
  },
  botaoAddClass: {
    zIndex: 3,
    position: 'absolute',
    left: '71%',
    bottom: '2%'
  },
  card: {
    backgroundColor: '#E7E7E7',
    flexDirection: 'row',
    padding: 20,
    marginTop: 25,
    justifyContent: 'center',
    borderRadius: 14,
    width: '95%',
    alignSelf: 'center'
  },
  sala: {
    fontSize: 23,
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
    width: 38,
    height: 38,
  },
  minus: {
    width: 38,
    height: 38,
    alignSelf: 'center',
    marginTop: '40%',
  },
  alignMinus: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 18,
    gap: 14
  },
  hor1: {
    fontSize: 23,
  },
  hor2: {
    fontSize: 23,
  },
  hor3: {
    fontSize: 23,
  },
  hor4: {
    fontSize: 23,
  },
  info: {
    width: 40,
    height: 40,
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
    marginBottom: 25,
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
    width: '80%',
    textAlign: 'center',
  },
  modalTextHora: {
    fontSize: 27,
    marginRight: 10,
  },

  vazioModal: {
    width: 10,
    height: 30,
    margin: 10,
    marginBottom: 13,
    marginHorizontal: '30%'
  },
  cardModal: {
    backgroundColor: '#E7E7E7',
    flexDirection: 'row',
    marginBottom: 25,
    justifyContent: 'center',
    borderRadius: 14,
    width: '95%',
  },

  horaModal: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a4a4a4',
    padding: 12,
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
    width: 150,
    marginBottom: 5,
    marginRight: '5%',
    textAlign: 'center',
  },

  // ------ TURNOS ------
  turnoPicker: {
    backgroundColor: '#e7e7e7',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -8,
    gap: 4,
    alignSelf: 'flex-end',
    padding: 10,
    margin: 10
  },
  turnoIcon: {
    width: 24,
    height: 24,
  },
  turnoText: {
    fontSize: 18,
    padding: 10,
  },
  borderText: {
    borderRadius: 10,
    backgroundColor: '#e7e7e7',
    margin: 6,
  },
  turnoCloser: {
    marginTop: 18,
    fontSize: 16
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
    backgroundColor: '#E7E7E7',
    color: '#7d7d7d',
    fontSize: 16,
    borderRadius: 10,
    width: 170,
    height: 40,

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
  input1: {
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    padding: '4%',
    width: 100,
    backgroundColor: '#E7E7E7',
    color: '#7d7d7d',
    fontSize: 16,
    borderRadius: 10,
  },

  input2: {
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    padding: '4%',
    width: 100,
    backgroundColor: '#E7E7E7',
    color: '#7d7d7d',
    fontSize: 16,
    borderRadius: 10,
  },

  minus: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '30%',
    marginRight: 10,
    width: 38,
    height: 38,
  },

})
