import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, } from 'react-native';


export function ScreenSignInStudent() {

  const navigation = useNavigation();

  
  function ScreenClassSelection() {
    navigation.navigate('ScreenClassSelection')
}


  return (
    <ScrollView>
    <View style={styles.container}>

      <TextInput
      style={styles.input}
      placeholder="Nome"
      />
      <TextInput
      style={styles.input}
      placeholder="Sobrenome"
      />
      <TextInput
      style={styles.input}
      placeholder="Email"
      />
      <TextInput
      style={styles.input}
      placeholder="Senha"
      secureTextEntry={true}
      />
      <TextInput
      style={styles.input}
      placeholder="Confirmar senha"
      secureTextEntry={true}
      />

      <TouchableOpacity 
      style={styles.botao}
      onPress={ScreenClassSelection}
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
    marginTop: '15%',
    padding: '4%',
    width: 350,
    backgroundColor: '#ebebeb',
    color: '#7d7d7d',
    fontSize: 16,
    borderRadius: 10, 
  },
  botao: {
    marginTop: 50,
    marginBottom: 200,
    width: 210,
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
});
