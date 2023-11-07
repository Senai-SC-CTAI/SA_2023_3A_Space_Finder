import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';


export function ScreenSignInAdm() {

  const navigation = useNavigation();
  const [Nome, setNome] = useState('');
  const [Sobrenome, setSobrenome] = useState('');
  const [CPF, setCPF] = useState('');
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [ConfirmarSenha, setConfirmarSenha] = useState('');


  function ScreenClassBookingAdm() {
    navigation.navigate('ScreenClassBookingAdm')
  }


  function inputs() {
    if (Nome === '' || Sobrenome === '' || CPF === '' || Email === '' || Senha === '' || ConfirmarSenha === '') {
      alert("Preecha todos os campos!")
      return;
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          onChangeText={setNome}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          onChangeText={setSobrenome}
          placeholder="Sobrenome"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCPF}
          placeholder="CPF"
        />
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
        <TextInput
          style={styles.input}
          onChangeText={setConfirmarSenha}
          placeholder="Confirmar senha"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            ScreenClassBookingAdm();
          }}
          onPressIn={() => {
            inputs();
          }}
        >
          <Text style={styles.botaoTexto}>Enviar</Text>
        </TouchableOpacity>

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
  input: {
    marginTop: '3%',
    padding: '1%',
    width: '30%',
    backgroundColor: '#ebebeb',
    color: '#7d7d7d',
    fontSize: 16,
    borderRadius: 10,
  },
  botao: {
    marginTop: '4%',
    marginBottom: '3%',
    width: '13%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00589F',
    borderRadius: 150,
  },
  botaoTexto: {
    fontSize: 15,
    color: '#ffff',
  },
});
