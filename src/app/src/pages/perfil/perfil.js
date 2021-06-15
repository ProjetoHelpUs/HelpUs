import React from 'react';

//importação de funções
import { Text, Image, Linking, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { css } from './css';


export default function Perfil({ route, navigation }) {
    const { userNome, userFone, userEmail, userEndereco, userBanco, userConta,userAgencia, 
        userPix, userDatanasc, userHistoria, userFoto } = route.params;      
    
        
    return (
        //Tela Home
        <ScrollView style={css.scrollview}>
        <KeyboardAvoidingView style={css.screen}>

            <Image style={css.logo} source={require('../../assets/helpUs.png')} />
            <Image style={css.perfil1} source={{ uri: userFoto }} />
            <Text style={css.txtPerfil}>Nome: {userNome} {"\n"}Contato: {userFone} {"\n"}Endereço: {userEndereco} {"\n"}Banco: {userBanco} {"\n"}
            Agencia: {userAgencia} Conta: {userConta} {"\n"}Pix: {userPix}
            </Text>
            <Text style={css.txtHistoria}>
                {userHistoria}
            </Text>
            
            <Text style={css.txtCopy}>Copyright HelpUs 2021 ©</Text>

        </KeyboardAvoidingView>
    </ScrollView>

    );
};






