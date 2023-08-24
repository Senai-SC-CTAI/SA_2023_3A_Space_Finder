import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';

export function ScreenSignInTeacher() {

  const navigation = useNavigation();
  const [Nome, setNome] = useState('');
  const [Sobrenome, setSobrenome] = useState('');
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [ConfirmarSenha, setConfirmarSenha] = useState('');
  

  function alunoHorarios() {
    navigation.navigate('alunoHorarios')
}


function inputs(){
  if(Nome === ''|| Sobrenome === ''|| Email === ''|| Senha === ''|| ConfirmarSenha === ''){
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
        alunoHorarios();
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
