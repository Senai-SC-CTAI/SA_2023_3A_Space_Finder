import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export function ScreenClassSelection() {

  const navigation = useNavigation();

  function openScreenPrincipal() {
    navigation.navigate('ScreenClassBooking')

  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ClassSelection</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={openScreenPrincipal}
      >
        <Text style={styles.textBotao}>3A</Text>
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
