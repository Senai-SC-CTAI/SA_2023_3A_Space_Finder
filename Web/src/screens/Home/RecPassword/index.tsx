import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export function ScreenRecPassword() {

    const navigation = useNavigation();

    const [Email, setEmail] = useState('');

    function ScreenCodPassword() {
        navigation.navigate('ScreenCodPassword')
    }

    function ScreenLogin() {
        navigation.navigate('ScreenLogin')
    }


    return (

        <>
            <View style={styles.container}>
                <Text style={styles.mensagem}>Para redefinir sua senha, informe o e-mail cadastrado{'\n'}da sua conta e lhe enviaremos um  código para verificação. </Text>


                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    placeholder="Email"
                />

                <TouchableOpacity
                    style={styles.botao}
                    onPress={ScreenCodPassword}
                >
                    <Text style={styles.textBotao}>Próximo</Text>
                </TouchableOpacity>

                <Text
                    style={styles.cancel}
                    onPress={ScreenLogin}
                >Cancelar</Text>
            </View>

        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    perfil: {
        textAlign: 'center',
        fontWeight: 'bold'
    },

    mensagem: {
        fontSize: 20,
        color: '#939e97',
        marginTop: '5%',
        textAlign: 'center'
    },

    input: {
        marginTop: '4%',
        padding: '1%',
        width: '25%',
        backgroundColor: '#ebebeb',
        color: '#7d7d7d',
        fontSize: 16,
        borderRadius: 10,
    },

    botao: {
        marginTop: '2%',
        marginBottom: '3%',
        width: '10%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00589F',
        borderRadius: 150,
    },

    textBotao: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },

    cancel: {
        fontSize: 17,
        color: '#00589F',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

})
