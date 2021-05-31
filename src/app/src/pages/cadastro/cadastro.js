import React from 'react';
//importação de funções
import { View, TouchableOpacity, Text, Image, TextInput, Linking } from 'react-native';
import { css } from './css';


export default function Cadastro() {

  return (
    //formulário ed cadastro
    <View style={css.screen}>
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
          secureTextEntry={true}
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
        onPress={() => { this.clicou() }}
      >
        <Text style={css.txtButton}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={css.texto}>Ao criar uma conta, você concorda com nossos
                  <Text style={css.link} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>

      <Text style={css.texto}>Copyright HelpUs 2021 ©</Text>

    </View>
  );
};
