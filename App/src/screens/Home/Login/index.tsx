import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

export function ScreenLogin() {

  const navigation = useNavigation();

  function openScreenPrincipal() {
    navigation.navigate('ScreenClassBooking')

  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>


      <TextInput
        style={styles.input_email}
        placeholder="   Email.."
      />

      <TextInput
        style={styles.input_senha}
        placeholder="   Senha.."
      />


      <TouchableOpacity
        style={styles.botao}
        onPress={openScreenPrincipal}
      >
        <Text style={styles.textBotao}>ENTRAR</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3399ff",
    justifyContent: "center",

  },

  titulo: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '10%'
  },

  input_email: {
    width: '80%',
    height: '5%',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    marginBottom: '4%',
    borderRadius: 5,
    alignSelf: 'center',
    borderWidth: 1
  },

  input_senha: {
    width: '80%',
    height: '5%',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    marginBottom: '4%',
    borderRadius: 5,
    alignSelf: 'center',
    borderWidth: 1

  },

  botao: {
    width: '70%',
    height: '6%',
    backgroundColor: '#2ab76b',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
    alignSelf: 'center',
    borderWidth: 1

  },
  textBotao: {
    color: 'white',
    fontWeight: 'bold'
  },
})
