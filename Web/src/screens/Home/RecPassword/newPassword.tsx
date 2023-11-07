import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export function ScreenNewPassword() {

    const navigation = useNavigation();

    const [Email, setEmail] = useState('');
    const [ConfirmarSenha, setConfirmarSenha] = useState('');
    const [Senha, setSenha] = useState('');

    function ScreenLogin() {
        navigation.navigate('ScreenLogin')
    }


    return (

        <>
            <View style={styles.container}>
                <Text style={styles.mensagem}>Coloque a sua nova senha!</Text>


                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setConfirmarSenha}
                    placeholder="Confirmar senha"
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.botao}
                    onPress={ScreenLogin}
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
        marginTop: '3%',
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
