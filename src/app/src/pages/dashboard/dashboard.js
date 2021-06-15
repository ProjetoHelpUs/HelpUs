import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Button, Linking } from 'react-native'
import Styles from './css'


class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  handleProfile = () => {
    var userData = ''
    fetch(`https://2cae89c5771f.ngrok.io/api/Busca/Usuarios/${this.props.data.email}`)
     .then(res => res.json())
     .then(resData => {  
       userData = resData
      
        this.props.navigation.navigate('Perfil', {userNome: userData.value.nome, userFone: userData.value.telefone, userEmail: userData.value.email,
          userEndereco: userData.value.endereco, userBanco: userData.value.banco, userConta: userData.value.contaBancaria,
          userAgencia: userData.value.agenciaBancaria, userPix: userData.value.pix, userDatanasc: userData.value.dataNascimento, 
          userHistoria: userData.value.descricao, userFoto: userData.value.linkImagem})
     })
 }

  render() {
    return (
        <View style={Styles.centeredView}>
          <View style={Styles.cardView}>
            <Image style={Styles.image} source={{ uri: this.props.data.linkImagem }} />
            <View style={Styles.descriptionText}>
              <Text style={Styles.titleText}>{this.props.data.nome}</Text>
              <Text style={Styles.priceText}>{this.props.data.endereco}</Text>
              <Button
                title="Ver perfil"
                onPress={() => this.handleProfile()} >
              </Button>
            </View>
          </View>
        </View >
    )
  }
}

export default Card
