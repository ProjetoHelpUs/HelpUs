import React from 'react';
import { useState } from 'react';
//importação de funções
import { Text, Image, TextInput, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Linking, Alert} from 'react-native';



export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [emailError, setemailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setpasswordError] = useState('')
  const [message, setMessage] = useState('')



  const handleSignIn = async() =>{
    await fetch("https://localhost:44344/logar", {
      method:'POST',
      headers:{'Accept': 'application/json',
               'Content-type':'application/json'},
              body: JSON.stringify({
                'email': email,
                'password': password
              })
            })
      .then( res => res.json())
      .then(resData => {
        alert(resData.message)
        })

      }
  
 
  return (
    //formulário de login
      <KeyboardAvoidingView style={styles.screen}>
        <Text style={styles.txtBemVindo}>Bem Vindo!</Text>

        <Image style={styles.logo} source={require('../../assets/helpUs.png')} />

        <Text style={styles.txtTexto}>Faça login utilizando</Text>

        <View style={styles.inputbox}>
          <TextInput style={styles.txtinput}
          placeholder="Digite seu e-mail"
          keyboardType={'email-address'}
          id='email'
          value={email}
          onChangeText={(email) => setEmail(email)}
          onChange={() => setemailError('')}
          />
        </View>
        <View style={styles.inputbox}>
          <TextInput style={styles.txtinput}
          secureTextEntry={true}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={(password) => setPassword(password)}
          onChange={() => setpasswordError('')}
          />
        </View>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={ () => {handleSignIn()} }
        >
          <Text style={styles.txtLogin}>Login</Text>

        </TouchableOpacity>

        <TouchableOpacity
        
          style={styles.btnCadastro}
          onPress={ () => navigation.navigate('Cadastro')}    >   
          <Text style={styles.txtLogin}>Cadatre-se</Text>
        </TouchableOpacity> 

        <Text style={styles.termoUso}>Ao criar uma conta, você concorda com nosso 
        <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>
        <Text style={styles.txtTexto}>Copyright Helpus 2021 ©</Text>
        </KeyboardAvoidingView>
      
      
  );
  }

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#98fb98',
    flex: 1,
    alignContent: 'center',
  },
  logo: {
    width: 350,
    left: 25,
    right: -70,
    height:160,
    marginTop: 25, 
  },
  inputbox: {
    backgroundColor: '#fff',
    color: "blue",
    marginTop: 25,
    borderRadius: 25,
    width: 300,
    marginLeft: 50,
  },


  txtinput: {
    fontSize: 20,
    marginLeft: 20,
  },


  btnLogin: {
   width: 300,
   height: 42,
   backgroundColor: '#3498dc',
   marginTop: 25,
   borderRadius: 25,
   alignItems: 'center',
   justifyContent: 'center',
   marginLeft: 50,
  },

  btnCadastro: {
    width: 300,
    height: 42,
    backgroundColor: '#3498dc',
    marginTop: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
   },

   txtLogin: {
    fontSize: 16,
    color: '#fff'
  },

  txtCadastro: {
    fontSize: 16,
    color: '#fff'
  },

  termoUso: {
    color: 'blue',
    marginTop: 26,
    textAlign: 'center',
    fontSize: 12,
  },

  txtBemVindo: {
    color: 'blue',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 35,
  },

  txtTexto: {
    marginTop: 13,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 12,
  },
});
