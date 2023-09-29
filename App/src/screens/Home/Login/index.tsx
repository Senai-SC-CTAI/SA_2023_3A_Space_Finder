import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

export function ScreenLogin() {

  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');

  function ScreenClassBookingTeacher() {
    navigation.navigate('ScreenClassBookingTeacher')

  }

  function ScreenRecPassword() {
    navigation.navigate('ScreenRecPassword')
  }
  return (
    <View style={styles.container}>

      <Text style={styles.mensagem}>Seja bem-vindo de volta!</Text>


      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        placeholder="Senha"
        secureTextEntry={true}
      />


      <TouchableOpacity
        style={styles.botao}
        onPress={ScreenClassBookingTeacher}
      >
        <Text style={styles.textBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footer}
        onPress={ScreenRecPassword}
      >


        <Text
          style={styles.footerbotao}
          onPress={ScreenRecPassword}
        > Esqueci minha senha </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  input: {
    marginTop: '15%',
    padding: '4%',
    width: 350,
    backgroundColor: '#ededed',
    color: '#7d7d7d',
    fontSize: 16,
    borderRadius: 10,
  },

  botao: {
    marginTop: 50,
    marginBottom: 175,
    width: 210,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00589F',
    borderRadius: 150,
  },

  textBotao: {
    fontSize: 15,
    color: 'white',
  },

  mensagem: {
    fontSize: 18,
    color: '#939e97',
    marginTop: '20%',
  },

  footer: {
    marginTop: '1%',
    width: '100%',
    textAlign: 'center',
    height: '17%',
    backgroundColor: '#ededed',
    alignItems: 'center',
  },

  footerbotao: {
    marginTop: '3%',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },

})
