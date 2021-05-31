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


    btnLogin: {
        width: 300,
        height: 42,
        backgroundColor: '#3498dc',
        marginTop: 25,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
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

    txtLogin: {
        fontSize: 16,
        color: '#fff'
    },

    txtCadastro: {
        fontSize: 16,
        color: '#fff'
    },

    termoUso: {
        color: 'blue',
        marginTop: 26,
        textAlign: 'center',
        fontSize: 12,
    },

    txtBemVindo: {
        color: 'blue',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 35,
    },

    txtTexto: {
        marginTop: 13,
        textAlign: 'center',
        color: 'blue',
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