import React from 'react';
import { useState } from 'react';
//importação de funções
import { Text, Image, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import { css } from './css';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('petronio@gmail.com')
  const [emailError, setemailError] = useState('')
  const [password, setPassword] = useState('Senha@123')
  const [passwordError, setpasswordError] = useState('')
  const [message, setMessage] = useState('')


  const handleSignIn = async () => {
    await fetch("https://5c3861bd6b95.ngrok.io/logar", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
      .then(res => res.json())
      .then(resData => {  
        if(resData.statusCode === null){
          navigation.navigate('Dashboard')
        }
        else{
          alert("Email ou senha incorretos")
        }
      })
  }
  return (
    //formulário de login
    <ScrollView style={css.scrollview}>
    <KeyboardAvoidingView style={css.screen}>


      <Image style={css.logo} source={require('../../assets/helpUs.png')} />

      <Text style={css.txtTexto}>Faça login utilizando</Text>

      <View style={css.inputbox}>
        <TextInput style={css.txtinput}
          placeholder="Digite seu e-mail"
          keyboardType={'email-address'}
          id='email'
          value={email}
          onChangeText={(email) => setEmail(email)}
          onChange={() => setemailError('')}
        />
      </View>
      <View style={css.inputbox}>
        <TextInput style={css.txtinput}
          secureTextEntry={true}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={(password) => setPassword(password)}
          onChange={() => setpasswordError('')}
        />
      </View>

      <TouchableOpacity
        style={css.btnLogin}
        onPress={() => { handleSignIn() }} >
        <Text style={css.txtLogin}>Login</Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={css.btnCadastro}
        onPress={() => navigation.navigate('Home')} >
        <Text style={css.txtLogin}>Cadatre-se</Text>
      </TouchableOpacity>

      <Text style={css.termoUso}>Ao criar uma conta, você concorda com nossos 
      <Text style={css.link} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>
      <Text style={css.txtTexto}>Copyright HelpUs 2021 ©</Text>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};
