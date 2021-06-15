import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  scrollview: {
    backgroundColor: '#fcfcfc',
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 30
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '94%',
    minHeight: 200
  },
  image: {
    width: '50%'
  },
  descriptionText: {
    flex: 1
  },
  titleText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    margin: 5
  },
  priceText: {
    color: "#e73931",
    fontWeight: "bold",
    fontSize: 16,
    margin: 5
  },
  btnPerfil: {
    backgroundColor: "#086b90",
    borderRadius: 15,
    padding: 5,
    elevation: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',  
  },
  txtLogin: {
    color: "#fff",
    fontWeight: "bold",
    margin: 5
  },
  textLinkButton: {
    color: "#FFFFFF",
    textAlign: 'center'
  },
  promotionsList: {
    minHeight: '90%',
    maxHeight: '90%',
    backgroundColor: '#fcfcfc'
  }
})
