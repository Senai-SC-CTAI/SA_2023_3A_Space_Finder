import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';




export function alunoHorarios({ navigation }: { navigation: any }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/*<Text>Você está na tela A</Text>
      <TouchableOpacity onPress={() => navigation.push('B')}>
        <Text style={styles.text}>Ir para tela B</Text>
      </TouchableOpacity>*/}

        <Text style={styles.turno}>Matutino</Text>

        <View style={styles.card}>

          <View style={styles.align}>
            <Text style={styles.sala}>G12</Text>
          </View>
          <View style={styles.barra}></View>
          <View>
            <Text style={styles.hor1}>07:40</Text>
            <Text style={styles.hor2}>10:10</Text>
          </View>
          <View style={styles.barra}></View>

          <View style={styles.align}>
            <Image source={require('../../../../assets/vazio.png')} style={styles.vazio} />
          </View>

          <View style={styles.barra}></View>
          <View style={styles.align}>
          <Image source={require('../../../../assets/iconInfo.png')} style={styles.info}/>
          </View>

        </View>


        <View style={styles.card}>

          <View style={styles.align}>
            <Text style={styles.sala}>F25</Text>
          </View>
          <View style={styles.barra}></View>

          <View style={styles.align}>
            <Image source={require('../../../../assets/vazio.png')} style={styles.vazio} />
          </View>

          <View style={styles.barra}></View>

          <View>
            <Text style={styles.hor1}>10:35</Text>
            <Text style={styles.hor2}>13:00</Text>
          </View>

          <View style={styles.barra}></View>
          <View style={styles.align}>
          <Image source={require('../../../../assets/iconInfo.png')} style={styles.info}/>
          </View>

        </View>

        <Text style={styles.turno}>Vespertino</Text>

        <View style={styles.card}>

          <View style={styles.align}>
            <Text style={styles.sala}>F12</Text>
          </View>
          <View style={styles.barra}></View>

          <View style={styles.align}>
            <Image source={require('../../../../assets/vazio.png')} style={styles.vazio} />
          </View>

          <View style={styles.barra}></View>

          <View>
            <Text style={styles.hor1}>15:50</Text>
            <Text style={styles.hor2}>17:20</Text>
          </View>

          <View style={styles.barra}></View>
          <View style={styles.align}>
          <Image source={require('../../../../assets/iconInfo.png')} style={styles.info}/>
          </View>

        </View>


        <View style={styles.card}>

          <View style={styles.align}>
            <Text style={styles.sala}>Auditório</Text>
          </View>
          <View style={styles.barra}></View>
          <View>
            <Text style={styles.hor1}>14:00</Text>
            <Text style={styles.hor2}>15:30</Text>
          </View>
          <View style={styles.barra}></View>

          <View style={styles.align}>
            <Image source={require('../../../../assets/vazio.png')} style={styles.vazio} />
          </View>

          <View style={styles.barra}></View>
          <View style={styles.align}>
          <Image source={require('../../../../assets/iconInfo.png')} style={styles.info}/>
          </View>

        </View>


        <View style={styles.card}>

          <View style={styles.align}>
            <Text style={styles.sala}>E12</Text>
          </View>
          <View style={styles.barra}></View>
          <View>
            <Text style={styles.hor1}>15:50</Text>
            <Text style={styles.hor2}>17:20</Text>
          </View>
          <View style={styles.barra}></View>

          <View style={styles.align}>
          <Image source={require('../../../../assets/vazio.png')} style={styles.vazio}/>
          </View>

          <View style={styles.barra}></View>
          <View style={styles.align}>
          <Image source={require('../../../../assets/iconInfo.png')} style={styles.info}/>
          </View>

        </View>


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
  card: {
    backgroundColor: '#E7E7E7',
    flexDirection: 'row',
    padding: 20,
    marginBottom: 25,
    justifyContent: 'center',
    borderRadius: 14,
    width: '95%'
  },
  sala: {
    fontSize: 23,
    marginRight: 8,
    marginLeft: -12,
    textAlign: 'center'
  },
  align: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  vazio: {
    marginLeft: 50,
    marginRight: 50,
    width: 20,
    height: 40
  },
  hor1: {
    fontSize: 23,
    marginLeft: 25,
    marginRight: 25
  },
  hor2: {
    fontSize: 23,
    marginLeft: 25,
    marginRight: 25
  },
  hor3: {
    fontSize: 23,
    marginLeft: 30,
    marginRight: 30
  },
  hor4: {
    fontSize: 23,
    marginLeft: 30,
    marginRight: 30
  },
  info: {
    width: 40,
    height: 40,
    marginLeft: 20
  },
  barra: {
    borderWidth: 1,
    borderColor: '#6B6B6B',
  },
  turno: {
    fontSize: 20,
    margin: 22
  }
});
