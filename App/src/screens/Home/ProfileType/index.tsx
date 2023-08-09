import React from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenProfileType() {
    const navigation = useNavigation();

    function ScreenSingInTeacher() {
        navigation.navigate('ScreenSingInTeacher')
    }

    function ScreenSignInAdm() {
        navigation.navigate('ScreenSignInAdm')
    }


    function openScreenB() {
        navigation.navigate('ScreenLogin')

    }

    function openScreenStudent() {
        navigation.navigate('ScreenSingInStudent')
    }

    return (
        <>
            <View style={styles.container}>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={openScreenStudent}
                >
                    <Text style={styles.textBotao}>ALUNO</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.botao}
                    onPress={ScreenSingInTeacher}
                >
                    <Text style={styles.textBotao}>PROFESSOR</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={ScreenSignInAdm}
                >
                    <Text style={styles.textBotao}>ADMINISTRAÇÃO</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.container}>
                <Text style={styles.titulo}>Ja possui Cadastro?</Text>
                <Text style={styles.titulo}
                    onPress={openScreenB}
                >Entre aqui!</Text>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center"
    },

    titulo: {
        textAlign: 'center',
        fontWeight: 'bold'
    },

    botao: {
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
    textBotao: {
        color: 'white',
        fontWeight: 'bold'
    },

})

export default ScreenProfileType;
