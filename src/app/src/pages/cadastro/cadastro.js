import React from 'react';
import { useState } from 'react';
//importação de funções
import { View, TouchableOpacity, Text, Image, TextInput, Linking, KeyboardAvoidingView } from 'react-native';
import { css } from './css';


export default function Cadastro({ navigation }) {

  return (
    //formulário ed cadastro
    <KeyboardAvoidingView style={css.screen}>
      <Image style={css.logo} source={require('../../assets/helpUs.png')} />

      <Text style={css.texto}>Preencha os campos a seguir para concluir o cadastro</Text>

      <View style={css.inputbox}>
        <TextInput style={css.txtinput}
          placeholder="Nome"
          id="name"
        />
      </View>

      <View style={css.inputbox}>
        <TextInput style={css.txtinput}
          placeholder="E-mail"
          id="email"
        />
      </View>

      <View style={css.inputbox}>
        <TextInput style={css.txtinput}
          secureTextEntry={true}
          placeholder="Senha"
          id="password"
        />
      </View>

      <View style={css.inputbox}>
        <TextInput style={css.txtinput}
          secureTextEntry={true}
          placeholder="Confirmação de senha"
          id="passwordconf"
        />
      </View>

      <TouchableOpacity
        style={css.btnCadastro}
        onPress={() => navigation.navigate('Home')} >
        <Text style={css.txtButton}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={css.texto}>Ao criar uma conta, você concorda com nossos
      <Text style={css.link} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>
      <Text style={css.texto}>Copyright HelpUs 2021 ©</Text>

    </KeyboardAvoidingView>
  );
};
