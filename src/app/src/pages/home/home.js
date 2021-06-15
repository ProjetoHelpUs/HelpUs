import React from 'react';
//importação de funções
import { TouchableOpacity, Text, Image, Linking, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { css } from './css';


export default function Home({ route, navigation }) {

    return (
        //Tela Home
        <ScrollView style={css.scrollview}>
            <KeyboardAvoidingView style={css.screen}>
                <Image style={css.logo} source={require('../../assets/helpUs.png')} />
                    
                <Text style={css.txtAjudar}>Como você deseja participar?</Text>

                <TouchableOpacity
                    style={css.btnDoador}
                    onPress={() => navigation.navigate('Cadastro')} >
                    <Text style={css.txtButton}>Doador</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={css.btnDonatario}
                    onPress={() => navigation.navigate('Donatario')} >
                    <Text style={css.txtButton}>Donatário</Text>

                </TouchableOpacity>

                <Text style={css.texto}>Ao criar uma conta, você concorda com nossos
            <Text style={css.link} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>
                <Text style={css.txtCopy}>Copyright HelpUs 2021 ©</Text>

            </KeyboardAvoidingView>
        </ScrollView>

    );
};