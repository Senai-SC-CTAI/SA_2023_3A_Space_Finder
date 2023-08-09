import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export function ScreenClassBooking() {

  const navigation = useNavigation();


  function ScreenProfileStudent() {
    navigation.navigate('ScreenProfileStudent')

}

  return (

    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>ClassesBooking ESTUDANTE</Text>


      </View>

      <View style={styles.container}>
        <Text style={styles.perfil}
          onPress={ScreenProfileStudent}
        >Perfil Aluno</Text>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33cc99',
    justifyContent: "center",
  },

  titulo: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '6%',
  },

  perfil: {
    textAlign: 'center',
    fontWeight: 'bold'
  },


})
