import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  screen: {
    backgroundColor: '#fcfcfc',
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
    borderRadius: 8,
    width: 300,
    marginLeft: 50,
    borderColor: '#ccc',
    borderWidth: 2,
    padding:6,
  },

  txtinput: {
    fontSize: 15,
    marginLeft: 20,
  },

  btnCadastro: {
    width: 300,
    height: 42,
    backgroundColor: '#086b90',
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
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 12,

  },
  link: {
    color: '#333',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 12,
  },
});

export { css };