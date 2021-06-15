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
                <Image style={css.perfil1} source={require('../../assets/img/doador1.png')} />
                <Text style={css.txtPerfil}> Emerson Pereira {"\n"} 38 Anos {"\n"} Desempregado {"\n"} Solteiro {"\n"} Belo Horizonte - MG</Text>
                <Text style={css.txtHistoria}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non laoreet ante. Sed consectetur eleifend enim,
                    id tempor tortor consectetur nec. In iaculis sem sed risus eleifend vulputate. Nulla tristique ultricies
                    pellentesque. Mauris placerat, turpis eget lacinia tincidunt, dui eros tempus eros, tincidunt efficitur justo
                    orci non ipsum. Vestibulum facilisis eros ut imperdiet sollicitudin. Mauris id pellentesque diam. Nam semper
                    nulla eu mauris ultricies ultricies. Quisque at urna lorem. Ut cursus mollis massa, non ultrices urna mollis quis.
                    Donec sodales, tortor accumsan rutrum egestas, metus magna porta enim, ut accumsan lorem dolor vel risus.
                </Text>
                <Text style={css.texto}>Ao criar uma conta, você concorda com nossos
                    <Text style={css.termoUso} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>
                <Text style={css.txtCopy}>Copyright HelpUs 2021 ©</Text>

            </KeyboardAvoidingView>
        </ScrollView>
    );
};