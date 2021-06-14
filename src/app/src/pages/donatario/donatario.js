import React from 'react';
//importação de funções
import { Text, Image, Linking, KeyboardAvoidingView, TextInput, View, ScrollView, TouchableOpacity, Navgate } from 'react-native';
import { css } from './css';


export default function Donatario(navigation) {
    return (
        //Tela Doador
        <ScrollView style={css.scrollview}>
            <KeyboardAvoidingView
                style={css.screen}>
                <Image style={css.logo} source={require('../../assets/helpUs.png')} />

                <Text style={css.texto1}>Cadastro como Donatário</Text>
                <Text style={css.texto2}>Informações Básicas</Text>

                <View style={css.inputBox}>
                    <TextInput style={css.textinput}
                        placeholder="Digite seu nome"
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.datNasc}
                        placeholder="Data nascimento"
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.sexo}
                        placeholder="Sexo"
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.contBanc}
                        placeholder="Conta Bancária"
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.Pix}
                        placeholder="Pix"
                    />
                </View>
                <View style={css.inputBox}>
                    <TextInput style={css.telefone}
                        placeholder="Telefone"
                    />
                </View>
                <View style={css.inputBox}>
                    <TextInput style={css.historia}
                        placeholder=" Conte sua história"
                    />
                </View>

                <Text style={css.texto2}>Endereço:</Text>

                <View style={css.inputBox}>
                    <TextInput style={css.rua}
                        placeholder="Rua"
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.numero}
                        placeholder="Número"
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.cidade}
                        placeholder="Cidade"
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.estado}
                        placeholder="Estado"
                    />
                </View>

                <TouchableOpacity
                    style={css.btnCadastro}
                    onPress={() => navigation.navigate('Perfil')} >
                    <Text style={css.txtButton}>Cadastrar</Text>
                </TouchableOpacity>

                <Text style={css.texto}>Ao criar uma conta, você concorda com nossos
            <Text style={css.link} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>
                <Text style={css.txtCopy}>Copyright HelpUs 2021 ©</Text>

            </KeyboardAvoidingView>
        </ScrollView>

    );
};