import React from 'react';

//importação de funções
import { Text, Image, Linking, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { css } from './css';


export default function Perfil() {
    return (
        //Tela Perfil
        <ScrollView style={css.scrollview}>
            <KeyboardAvoidingView style={css.screen}>

                <Image style={css.logo} source={require('../../assets/helpUs.png')} />

                <Text style={css.texto}>Ao criar uma conta, você concorda com nossos
                    <Text style={css.link} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>
                <Text style={css.txtCopy}>Copyright HelpUs 2021 ©</Text>

            </KeyboardAvoidingView>
        </ScrollView>
    );
};