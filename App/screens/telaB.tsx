import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import A from './alunoHorarios';

export default function telaB({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>Você está na tela B</Text>
      <TouchableOpacity onPress={() => navigation.push('A')}>
        <Text style={styles.text}>Ir para tela A</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight:'bold',
    color:'#df2c14'
  }
});