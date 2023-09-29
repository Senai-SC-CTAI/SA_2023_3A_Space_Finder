import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export function ScreenProfileTeacher() {
  return (
    <View style={styles.container}>
      <ScrollView>

        <Image source={require('../../../../assets/user.png')} style={styles.user} />
        <View style={styles.bluePencilCircle}>
          <Image source={require('../../../../assets/whitePencil.png')} style={styles.bluePencil} />
        </View>


        <View style={styles.alignName}>
          <View>
            <Text style={styles.textPrimary}>Nome:</Text>
            <Text style={styles.textSecondary}>Fulano Beltrano da Silva</Text>
          </View>
          <Image source={require('../../../../assets/greyPencil.png')} style={styles.greyPencil} />
        </View>

        <Text style={styles.textPrimary}>Usuário:</Text>
        <Text style={styles.textSecondary}>Professor</Text>

        <Text style={styles.textPrimary}>E-mail:</Text>
        <Text style={styles.textSecondary}>fulano_beltrano@edu.sesis.org.br</Text>


        <View style={styles.alignButton}>
          <Text style={styles.buttonDelete}>Excluir Conta</Text>
        </View>


      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 15
  },
  textPrimary: {
    fontSize: 21,
    color: '#6B6B6B'
  },
  textSecondary: {
    fontSize: 18,
    color: '#939393',
    marginBottom: 20,
    marginTop: 3
  },
  user: {
    width: 140,
    height: 140,
    marginTop: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  bluePencil: {
    width: 32,
    height: 32,
  },
  bluePencilCircle: {
    backgroundColor: '#003F72',
    borderRadius: 64 / 2,
    borderWidth: 22,
    borderColor: '#003f72',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: '-13%',
    marginBottom: 65,
    marginRight: '28%'
  },
  greyPencil: {
    width: 35,
    height: 35,
  },
  buttonDelete: {
    backgroundColor: '#FF6C6C',
    color: '#fff',
    width: 180,
    textAlign: 'center',
    padding: 12,
    borderRadius: 18,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 36
  },
  alignButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 18
  },
  alignName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
