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
            <Text style={css.txtPerfil}> {userNome} {"\n"} {userDatanasc} {"\n"} Contato: {userFone} {"\n"} {userEndereco} {"\n"} Belo Horizonte - MG</Text>
            <Text style={css.txtHistoria}>
                {userHistoria}
            </Text>
            <Text style={css.texto}>Ao criar uma conta, você concorda com nossos
                <Text style={css.termoUso} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>
            <Text style={css.txtCopy}>Copyright HelpUs 2021 ©</Text>

        </KeyboardAvoidingView>
    </ScrollView>

    );
};






