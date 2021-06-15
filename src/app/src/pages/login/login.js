import React from 'react';
import { useState } from 'react';
//importação de funções
import { Text, Image, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import { css } from './css';


export default function Login({ navigation }) {

  const [email, setEmail] = useState('donatario01@gmail.com')
  const [emailError, setemailError] = useState('')
  const [password, setPassword] = useState('Senha@123')
  const [passwordError, setpasswordError] = useState('')
  const [message, setMessage] = useState('')
  var userType = ''
  var userData = ''

  const handleTypeUser = async () => {
    await fetch("https://1de6092cd694.ngrok.io/api/Usuarios")
      .then(res => res.json())
      .then(resData => {  
        userType = resData.find(usuario => usuario.email === email)
      })
  }

  const handleProfile = () => {

    fetch(`https://1de6092cd694.ngrok.io/api/Busca/Usuarios/${email}`)
     .then(res => res.json())
     .then(resData => {  
       userData = resData
     })
 }



  const handleSignIn = async () => {
    await fetch("https://1de6092cd694.ngrok.io/logar", {
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
        handleTypeUser()
        handleProfile()
        if(resData.statusCode === null){
          if(userType.tipo == 0){          
            navigation.navigate('Dashboard')
          }
          
          else if(userType.tipo == 1){          
            navigation.navigate('Perfil', {userNome: userData.value.nome, userFone: userData.value.telefone, userEmail: userData.value.email,
            userEndereco: userData.value.endereco, userBanco: userData.value.banco, userConta: userData.value.contaBancaria,
          userAgencia: userData.value.agenciaBancaria, userPix: userData.value.pix, userDatanasc: userData.value.dataNascimento, 
          userHistoria: userData.value.descricao, userFoto: userData.value.linkImagem  })

          }
          
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

      <Text style={css.txtTexto}>Login</Text>

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
        <Text style={css.txtLogin}>Cadastre-se</Text>
      </TouchableOpacity>

      <Text style={css.termoUso}>Ao criar uma conta, você concorda com nossos 
      <Text style={css.link} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>
      <Text style={css.txtTexto}>Copyright HelpUs 2021 ©</Text>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};
