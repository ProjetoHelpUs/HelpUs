import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    scrollview: {
        backgroundColor: '#fcfcfc',
      },
    screen: {
        backgroundColor: '#fcfcfc',
        flex: 1,
        alignContent: 'center',
    },
    logo: {
        width: 350,
        height: 160,
        marginTop: 32,
        marginBottom: 64,
        marginLeft: 32,
        marginRight: 32,
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


    btnLogin: {
        width: 300,
        height: 42,
        backgroundColor: '#086b90',
        marginTop: 25,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
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

    txtLogin: {
        fontSize: 16,
        color: '#fff'
    },

    txtCadastro: {
        fontSize: 16,
        color: '#fff'
    },

    termoUso: {
        color: '#333',
        marginTop: 26,
        textAlign: 'center',
        fontSize: 12,
    },

    txtBemVindo: {
        color: '#333',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 35,
    },

    txtTexto: {
        marginTop: 13,
        textAlign: 'center',
        color: '#333',
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