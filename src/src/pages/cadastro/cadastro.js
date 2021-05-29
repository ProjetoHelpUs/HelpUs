import React from 'react';
//importação de funções
import { View, TouchableOpacity, Text, Image, TextInput, StyleSheet, Linking } from 'react-native';


export default function Cadastro() {

  return (
    //formulário ed cadastro
      <View style={styles.screen}>
        <Image style={styles.logo} source={require('../../assets/helpUs.png')} />
        
        <Text style={styles.texto}>Preencha os campos a seguir para concluir o cadastro</Text>

        <View style={styles.inputbox}>
          <TextInput style={styles.txtinput}
          placeholder="Nome"
          id="name"
          />
        </View>

        <View style={styles.inputbox}>
          <TextInput style={styles.txtinput}
          secureTextEntry={true}
          placeholder="E-mail"
          id="email"
          />
        </View>

        <View style={styles.inputbox}>
          <TextInput style={styles.txtinput}
          secureTextEntry={true}
          placeholder="Senha"
          id="password"
          />
        </View>

        <View style={styles.inputbox}>
          <TextInput style={styles.txtinput}
          secureTextEntry={true}
          placeholder="Confirmação de senha"
          id="passwordconf"
          />
        </View>

        <TouchableOpacity
          style={styles.btnCadastro}
          onPress={ () => {this.clicou()} }
        >
          <Text style={styles.txtButton}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.texto}>Ao criar uma conta, você concorda com nossos 
                  <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>

        <Text style={styles.texto}>Copyright Helpus 2021 ©</Text>

      </View>
  );
};




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

   txtButton: {
    fontSize: 16,
    color: '#fff'
  },

  texto: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 12,
  },
  
  link: {
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 12,
  },
});
