import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import B from './telaB';



export default function alunoHorarios({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      {/*<Text>Você está na tela A</Text>
      <TouchableOpacity onPress={() => navigation.push('B')}>
        <Text style={styles.text}>Ir para tela B</Text>
      </TouchableOpacity>*/}
      
      <View style={styles.card}>
      <Text style={styles.sala}>G12</Text>
      <View style={styles.barra}></View>
      <View>
      <Text style={styles.hor1}>07:40</Text>
      <Text style={styles.hor2}>10:10</Text>
      </View>
      <View style={styles.barra}></View>
      <Text style={styles.vazio}>-</Text>
      <View style={styles.barra}></View>
      <Image source={require('../assets/iconInfo.png')} style={styles.info}/>
      </View>

      <View style={styles.card}>
      <Text style={styles.sala}>F25</Text>
      <View style={styles.barra}></View>
      <Text style={styles.vazio}>-</Text>
      <View style={styles.barra}></View>
      <View>
      <Text style={styles.hor3}>10:35</Text>
      <Text style={styles.hor4}>13:00</Text> 
      </View>
      <View style={styles.barra}></View>
      <Image source={require('../assets/iconInfo.png')} style={styles.info}/>
      </View>

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
  card:{
    backgroundColor:'#E7E7E7',
    flexDirection:'row',
    padding:20,
    marginTop:30,
    justifyContent:'center',
    borderRadius:14,
  },
  sala:{
    fontSize:23,
    marginRight:12,
    flexDirection:'column',
    justifyContent:'center'
  },
  vazio:{
    fontSize:26,
    marginLeft:40,
    marginRight:40
  },
  hor1:{
    fontSize:23,
    marginLeft:30,
    marginRight:30
  },
  hor2:{
    fontSize:23,
    marginLeft:30,
    marginRight:30
  },
  hor3:{
    fontSize:23,
    marginLeft:30,
    marginRight:30
  },
  hor4:{
    fontSize:23,
    marginLeft:30,
    marginRight:30
  },
  info:{
    width:40,
    height:40,
  },
  barra:{
    borderWidth:1,
    borderColor:'#6B6B6B'
  }
});