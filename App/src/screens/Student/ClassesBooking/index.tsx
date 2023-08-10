import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Pressable, Alert, Modal } from 'react-native';
import {styles} from '../theme/AlunoHorariosStyle';

export function ScreenClassBooking() {

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);


  function ScreenProfileStudent() {
    navigation.navigate('ScreenProfileStudent')

}

  return (

    <>
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
        }}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>


          <View style={styles.cardModal}>
            <View style={styles.horaModal}>
              <View style={styles.horaAlignModal}>
            <Text style={styles.modalTextHora}>7:40</Text>
            <Text style={styles.modalTextHora}>10:10</Text>
              </View>
            </View>
            <View style={styles.infosModal}>
            <Text style={styles.modalTextCinza}>Professor(a)</Text>
            <Image source={require('../../assets/vazio.png')} style={styles.vazioModal}/>
            <View style={styles.barraModal}></View>
            <Text style={styles.modalTextCinza}>Matéria</Text>
            <Image source={require('../../assets/vazio.png')} style={styles.vazioModal}/>
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

          

          


            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
           
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
      <Image source={require('../../assets/vazio.png')} style={styles.vazio}/>
      </View>

      <View style={styles.barra}></View>
      <View style={styles.align}>
      <Pressable onPress={() => setModalVisible(true)}>
      <Image source={require('../../assets/iconInfo.png')} style={styles.info}/>
      </Pressable>
      </View>

      </View>


      <View style={styles.card}>

<View style={styles.align}>
<Text style={styles.sala}>F25</Text> 
</View>
<View style={styles.barra}></View>

<View style={styles.align}>
<Image source={require('../../assets/vazio.png')} style={styles.vazio}/>
</View>

<View style={styles.barra}></View>

<View>
<Text style={styles.hor1}>10:35</Text>
<Text style={styles.hor2}>13:00</Text>
</View>

<View style={styles.barra}></View>
<View style={styles.align}>
<Image source={require('../../assets/iconInfo.png')} style={styles.info}/>
</View>

</View>

<Text style={styles.turno}>Vespertino</Text>

<View style={styles.card}>

<View style={styles.align}>
<Text style={styles.sala}>F12</Text> 
</View>
<View style={styles.barra}></View>

<View style={styles.align}>
<Image source={require('../../assets/vazio.png')} style={styles.vazio}/>
</View>

<View style={styles.barra}></View>

<View>
<Text style={styles.hor1}>15:50</Text>
<Text style={styles.hor2}>17:20</Text>
</View>

<View style={styles.barra}></View>
<View style={styles.align}>
<Image source={require('../../assets/iconInfo.png')} style={styles.info}/>
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
      <Image source={require('../../assets/vazio.png')} style={styles.vazio}/>
      </View>

      <View style={styles.barra}></View>
      <View style={styles.align}>
      <Image source={require('../../assets/iconInfo.png')} style={styles.info}/>
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
      <Image source={require('../../assets/vazio.png')} style={styles.vazio}/>
      </View>

      <View style={styles.barra}></View>
      <View style={styles.align}>
      <Image source={require('../../assets/iconInfo.png')} style={styles.info}/>
      </View>

      </View>


    </View>
    </ScrollView>

      <View style={styles.container}>
        <Text style={styles.perfil}
          onPress={ScreenProfileStudent}
        >Perfil Aluno</Text>
      </View>
    </>

  );
}
