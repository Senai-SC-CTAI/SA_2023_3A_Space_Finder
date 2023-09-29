import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export function ScreenProfileType() {
  const navigation = useNavigation();

  function ScreenSignInTeacher() {
    navigation.navigate('ScreenSignInTeacher')
  }

  function ScreenSignInAdm() {
    navigation.navigate('ScreenSignInAdm')
  }

  function ScreenLogin() {
    navigation.navigate('ScreenLogin')

  }

  function ScreenSignInStudent() {
    navigation.navigate('ScreenSignInStudent')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mensagem}>Com qual finalidade você{'\n'}está utilizando nosso App?</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={ScreenSignInAdm}>
        <Text style={styles.botaoTexto}> Secretaria </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={ScreenSignInTeacher}>
        <Text style={styles.botaoTexto}> Professor </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={ScreenSignInStudent}>
        <Text style={styles.botaoTexto}> Aluno </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footer}
        onPress={ScreenLogin}>
        <Text style={styles.footerbotao}>Já possui cadastro?</Text>

        <Text
          style={styles.footerbotao}
          onPress={ScreenLogin}
        > Entre aqui </Text>
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

  mensagem: {
    fontSize: 18,
    color: '#939e97',
    marginTop: '20%',
  },
  botao: {
    marginTop: '18%',
    width: '80%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00589F',
    borderRadius: 10,
    borderStyle: 'solid',
  },
  botaoTexto: {
    fontSize: 22,
    color: '#ffff',
  },
  footer: {
    marginTop: '30%',
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
});

export default ScreenProfileType;
