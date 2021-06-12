import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image, Linking } from 'react-native'
import Styles from './styles'

class PromotionCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={ Styles.centeredView }>
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri: this.props.data.picture.medium} }  />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>{this.props.data.name.first}</Text>
            <Text style={ Styles.priceText }>{this.props.data.gender}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default PromotionCard
