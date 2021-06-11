import React from 'react';
import { useState } from 'react';
//importação de funções
import { View, TouchableOpacity, Text, Image, TextInput, Linking, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { css } from './css';


export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState('')
  const [emailError, setemailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setpasswordError] = useState('')
  const [confirmPassword, setPasswordConf] = useState('')
  const [message, setMessage] = useState('')


  const handleSignUp = async () => {
    if (!email || !password) {
      alert("Preencha todos os campos")
    }
    else {
      await fetch("http://d5b66deeeb81.ngrok.io/cadastrar", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          'email': email,
          'password': password,
          'confirmPassword': confirmPassword,
        })
      })
        .then(res => res.json())
        .then(resData => {
          if (resData.statusCode === null) {
            alert("Cadastro realizado com sucesso")
            navigation.navigate('Login')
          }
          else {
            alert("Não foi possível efetuar o seu cadastro")
          }
        })
    }
  }

  return (
    //formulário ed cadastro
    <ScrollView style={css.scrollview}>
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
            value={email}
            onChangeText={(email) => setEmail(email)}
            onChange={() => setpasswordError('')}
          />
        </View>

        <View style={css.inputbox}>
          <TextInput style={css.txtinput}
            secureTextEntry={true}
            placeholder="Senha"
            id="password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            onChange={() => setpasswordError('')}
          />
        </View>

        <View style={css.inputbox}>
          <TextInput style={css.txtinput}
            secureTextEntry={true}
            placeholder="Confirmação de senha"
            id="passwordconf"
            value={confirmPassword}
            onChangeText={(confirmPassword) => setPasswordConf(confirmPassword)}
            onChange={() => setpasswordError('')}
          />
        </View>

        <TouchableOpacity
          style={css.btnCadastro}
          onPress={() => { handleSignUp() }} >
          <Text style={css.txtButton}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={css.texto}>Ao criar uma conta, você concorda com nossos
      <Text style={css.link} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>
        <Text style={css.texto}>Copyright HelpUs 2021 ©</Text>

      </KeyboardAvoidingView>
    </ScrollView>
  );
};
