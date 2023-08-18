import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export function ScreenSignInStudent() {

  const navigation = useNavigation();
  
  function ScreenClassSelection() {
    navigation.navigate('ScreenClassSelection')
}

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TouchableOpacity 
      style={styles.botao}
      onPress={ScreenClassSelection}
      >
        <Text style={styles.textBotao}>ENTRAR</Text>
      </TouchableOpacity>

      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#33cc99',
        justifyContent: "center",
    },

    titulo:{
        alignSelf: "center",
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: '6%',
    },

    botao:{
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
  textBotao:{
      color: 'white',
      fontWeight: 'bold'
    },

   
})