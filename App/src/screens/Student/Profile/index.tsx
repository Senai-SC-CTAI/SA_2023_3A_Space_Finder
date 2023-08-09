import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export function ScreenProfileStudent() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Profile Aluno</Text>
    
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

   
})
