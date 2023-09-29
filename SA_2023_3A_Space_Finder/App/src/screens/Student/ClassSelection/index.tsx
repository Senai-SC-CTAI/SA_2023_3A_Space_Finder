import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenClassBooking1C } from './ClassesList/FirstGrade/1C/1C';
import { ScreenClassBooking1D } from './ClassesList/FirstGrade/1D/1D';


export function ScreenClassSelection() {

  const navigation = useNavigation();
  //First Grade
  function ScreenClassBooking1A() {
    navigation.navigate('ScreenClassBooking1A')
  }
  function ScreenClassBooking1B() {
    navigation.navigate('ScreenClassBooking1B')
  }
  function ScreenClassBooking1C() {
    navigation.navigate('ScreenClassBooking1C')
  }
  function ScreenClassBooking1D() {
    navigation.navigate('ScreenClassBooking1D')
  }

  //Second Grade
  function ScreenClassBooking2A() {
    navigation.navigate('ScreenClassBooking2A')
  }
  function ScreenClassBooking2B() {
    navigation.navigate('ScreenClassBooking2B')
  }
  function ScreenClassBooking2C() {
    navigation.navigate('ScreenClassBooking2C')
  }
  function ScreenClassBooking2D() {
    navigation.navigate('ScreenClassBooking2D')
  }

  //Third Grade
  function ScreenClassBooking3A() {
    navigation.navigate('ScreenClassBooking3A')
  }
  function ScreenClassBooking3B() {
    navigation.navigate('ScreenClassBooking3B')
  }
  function ScreenClassBooking3C() {
    navigation.navigate('ScreenClassBooking3C')
  }
  function ScreenClassBooking3D() {
    navigation.navigate('ScreenClassBooking3D')
  }




  return (
    <View style={styles.container}>

      <View style={styles.firstGrade}>
        <Text style={styles.gradeTitleOne}>
          Primeiros anos
        </Text>
        <View style={styles.firstRow}>
          <TouchableOpacity style={styles.botao} onPress={ScreenClassBooking1A}>
            <Text style={styles.textBotao}>1A</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={ScreenClassBooking1B}>
            <Text style={styles.textBotao}>1B</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.secondRow}>
          <TouchableOpacity
            style={styles.botao}
            onPress={ScreenClassBooking1C}
          >
            <Text style={styles.textBotao}>1C</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={ScreenClassBooking1D}
          >
            <Text style={styles.textBotao}>1D</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.secondGrade}>
        <Text style={styles.gradeTitleTwo}>
          Segundos anos
        </Text>
        <View style={styles.firstRow}>
          <TouchableOpacity
            style={styles.botao}
            onPress={ScreenClassBooking2A}
          >
            <Text style={styles.textBotao}>2A</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={ScreenClassBooking2B}
          >
            <Text style={styles.textBotao}>2B</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.secondRow}>
          <TouchableOpacity
            style={styles.botao}
            onPress={ScreenClassBooking2C}
          >
            <Text style={styles.textBotao}>2C</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={ScreenClassBooking2D}
          >
            <Text style={styles.textBotao}>2D</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.thirdGrade}>
        <Text style={styles.gradeTitleThree}>
          Terceiros anos
        </Text>
        <View style={styles.firstRow}>
          <TouchableOpacity
            style={styles.botao}
            onPress={ScreenClassBooking3A}
          >
            <Text style={styles.textBotao}>3A</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={ScreenClassBooking3B}
          >
            <Text style={styles.textBotao}>3B</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.secondRow}>
          <TouchableOpacity
            style={styles.botao}
            onPress={ScreenClassBooking3C}
          >
            <Text style={styles.textBotao}>3C</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={ScreenClassBooking3D}
          >
            <Text style={styles.textBotao}>3D</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  botao: {
    width: '80%',
    height: 80,
    margin: '1%',
    backgroundColor: '#00589F',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textBotao: {
    color: 'white',
    fontWeight: 'bold'
  },

  gradeTitleOne: {
    alignSelf: 'center',
    fontSize: 15,
    marginBottom: '6%',
    marginTop: '8%'
  },

  gradeTitleTwo: {
    alignSelf: 'center',
    fontSize: 15,
    marginBottom: '6%',
    marginTop: '8%'
  },

  gradeTitleThree: {
    alignSelf: 'center',
    fontSize: 15,
    marginBottom: '6%',
    marginTop: '8%'
  },

  firstGrade: {
    width: '60%',
    alignSelf: 'center',
  },

  secondGrade: {
    width: '60%',
    alignSelf: 'center',
  },

  thirdGrade: {
    width: '60%',
    alignSelf: 'center'
  },

  firstRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  secondRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    //marginTop: -50
  }
})
