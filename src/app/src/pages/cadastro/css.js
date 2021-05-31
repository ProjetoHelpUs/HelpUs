import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  screen: {
    backgroundColor: '#98fb98',
    flex: 1,
    alignContent: 'center',
  },
  logo: {
    width: 350,
    left: 25,
    right: -70,
    height: 160,
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
    fontSize: 15,
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

export { css };