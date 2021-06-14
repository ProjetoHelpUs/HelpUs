import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import Styles from './css'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <View style={Styles.centeredView}>
          <View style={Styles.cardView}>
            <Image style={Styles.image} source={{ uri: this.props.data.picture.medium }} />
            <View style={Styles.descriptionText}>
              <Text style={Styles.titleText}>{this.props.data.name.first}</Text>
              <Text style={Styles.priceText}>{this.props.data.gender}</Text>

              <TouchableOpacity
                style={css.btnPerfil}
                onPress={() => navigation.navigate('Perfil')} >
                <Text style={css.txtLogin}>Cadatre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View >
      </ScrollView>
    )
  }
}

export default Card
