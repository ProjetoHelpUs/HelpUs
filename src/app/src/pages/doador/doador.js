import React from 'react';
//importação de funções
import { Text, Image, Linking, KeyboardAvoidingView } from 'react-native';
import { css } from './css';


export default function Doador() {
    return (
        //Tela Doador
        <KeyboardAvoidingView style={css.screen}>
            <Image style={css.logo} source={require('../../assets/helpUs.png')} />

            <Text style={css.txtAjudar}>Quem você quer ajudar hoje?</Text>
            <Text style={css.txtPessoa}>Clique e conheça a história da pessoa.</Text>

            <Image style={css.doador1} source={require('../../assets/img/doador1.png')} />
            <Text style={css.texto1}>Emerson, 38 Anos - MG </Text>
            
            <Image style={css.doador2} source={require('../../assets/img/doador2.png')} />
            <Text style={css.texto2}>Joana, 42 Anos - RJ </Text>

            <Image style={css.doador3} source={require('../../assets/img/doador3.png')} />
            <Text style={css.texto3}>Carla, 52 Anos - MG </Text>

            <Image style={css.doador4} source={require('../../assets/img/doador4.png')} />
            <Text style={css.texto4}>Antônia, 45 Anos - SP </Text>
            

            <Text style={css.texto}>Ao criar uma conta, você concorda com nossos
            <Text style={css.link} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>
            <Text style={css.txtCopy}>Copyright HelpUs 2021 ©</Text>

        </KeyboardAvoidingView>

    );
};