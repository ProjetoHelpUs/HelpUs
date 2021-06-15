import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import Styles from './css'

export default class Card extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.centeredView}>
          <View style={Styles.cardView}>
            <Image style={Styles.image} source={{ uri: this.props.data.picture.medium }} />
            <View style={Styles.descriptionText}>
              <Text style={Styles.titleText}>{this.props.data.name.first}</Text>
              <Text style={Styles.priceText}>{this.props.data.gender}</Text>

              <TouchableOpacity style={Styles.btnPerfil} onPress={() => { navigation.navigate('Perfil') }}>
                <Text style={Styles.txtPerfil}>Ver perfil</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </View>
    )
  }
}
