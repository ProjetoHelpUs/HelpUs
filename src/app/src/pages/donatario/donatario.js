import React from 'react';
import { useState } from 'react';
//importação de funções
import { Text, Image, Linking, KeyboardAvoidingView, TextInput, View, ScrollView, TouchableOpacity, Navgate } from 'react-native';
import { css } from './css';


export default function Donatario({ navigation }) {
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setPasswordConf] = useState('')
    const [datNasc, setdatNasc] = useState('')
    const [sexo, setSexo] = useState('')
    const [contBanc, setcontBanc] = useState('')
    const [agBanc, setagBanc] = useState('')
    const [banco, setBanco] = useState('')
    const [pix, setPix] = useState('')
    const [telefone, setTelefone] = useState('')
    const [historia, setHistoria] = useState('')
    const [rua, setRua] = useState('')
    const [num, setNum] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [linkImagem, setlinkImagem] = useState('')
    const endereco = rua + ", " + num + ", " + cidade + ", "+ estado


    const handleSignUp = async () => {
      if (!email || !password|| !nome || !sexo || !historia) {
        alert("Preencha os campos obrigatórios")
      }
      else {
        await fetch("https://2cae89c5771f.ngrok.io/cadastrar", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            'nome': nome,
            'email': email,
            'password': password,
            'confirmPassword': confirmPassword,
            'tipo': 1,
            'telefone': telefone,
            'endereco': endereco,
            'banco': banco,
            'contaBancaria': contBanc,
            'agenciaBancaria': agBanc,
            'pix': pix,
            'descricao': historia,
            'linkImagem': linkImagem,
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
                        id="name"
                        value={nome}
                        onChangeText={(nome) => setNome(nome)}
                    />
                </View>
                <View style={css.inputBox}>
                    <TextInput style={css.textinput}
                        placeholder="Digite seu e-mail"
                        id="email"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.textinput}
                        secureTextEntry={true}
                        placeholder="Digite sua senha"
                        id="password"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.textinput}
                        secureTextEntry={true}
                        placeholder="Confirme sua senha"
                        id="passwordConf"
                        value={confirmPassword}
                        onChangeText={(confirmPassword) => setPasswordConf(confirmPassword)}
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.datNasc}
                        placeholder="Data nascimento"
                        id="datNasc"
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.sexo}
                        placeholder="Sexo"
                        id="datNasc"
                        value={sexo}
                        onChangeText={(sexo) => setSexo(sexo)}
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.contBanc}
                        placeholder="Banco"
                        id="banco"
                        value={banco}
                        onChangeText={(banco) => setBanco(banco)}
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.Pix}
                        placeholder="Agência Bancária"
                        id="agBanc"
                        value={agBanc}
                        onChangeText={(agBanc) => setagBanc(agBanc)}
                    />
                </View>


                <View style={css.inputBox}>
                    <TextInput style={css.contBanc}
                        placeholder="Conta Bancária"
                        id="contBanc"
                        value={contBanc}
                        onChangeText={(contBanc) => setcontBanc(contBanc)}
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.Pix}
                        placeholder="Pix"
                        id="pix"
                        value={pix}
                        onChangeText={(pix) => setPix(pix)}
                    />
                </View>
                <View style={css.inputBox}>
                    <TextInput style={css.telefone}
                        placeholder="Telefone"
                        id="telefone"
                        value={telefone}
                        onChangeText={(telefone) => setTelefone(telefone)}
                    />
                </View>
                <View style={css.inputBox}>
                    <TextInput style={css.historia}
                        placeholder=" Conte sua história"
                        id="historia"
                        value={historia}
                        onChangeText={(historia) => setHistoria(historia)}
                    />
                </View>

                <Text style={css.texto2}>Endereço:</Text>

                <View style={css.inputBox}>
                    <TextInput style={css.rua}
                        placeholder="Rua"
                        id="rua"
                        value={rua}
                        onChangeText={(rua) => setRua(rua)}
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.numero}
                        placeholder="Número"
                        id="num"
                        value={num}
                        onChangeText={(num) => setNum(num)}
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.cidade}
                        placeholder="Cidade"
                        id="cidade"
                        value={cidade}
                        onChangeText={(cidade) => setCidade(cidade)}
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.estado}
                        placeholder="Estado"
                        id="estado"
                        value={estado}
                        onChangeText={(estado) => setEstado(estado)}
                    />
                </View>

                <View style={css.inputBox}>
                    <TextInput style={css.textinput}
                        placeholder="Insira o link para uma de suas fotos"
                        id="linkImagem"
                        value={linkImagem}
                        onChangeText={(linkImagem) => setlinkImagem(linkImagem)}
                    />
                </View>


                <TouchableOpacity
                    style={css.btnCadastro}
                    onPress={() => handleSignUp()} >
                    <Text style={css.txtButton}>Cadastrar</Text>
                </TouchableOpacity>

                <Text style={css.texto}>Ao criar uma conta, você concorda com nossos
                <Text style={css.link} onPress={() => Linking.openURL('http://google.com')}>Termos de uso!</Text></Text>
                <Text style={css.txtCopy}>Copyright HelpUs 2021 ©</Text>

            </KeyboardAvoidingView>
        </ScrollView>

    );
};