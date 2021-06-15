import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Button, Linking } from 'react-native'
import Styles from './css'


class Card extends React.Component {
  constructor(props) {
    super(props)
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
                onPress={() => navigation.navigate('Perfil')} >
              </Button>
            </View>
          </View>
        </View >
    )
  }
}

export default Card
