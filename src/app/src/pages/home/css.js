import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    screen: {
        backgroundColor: '#fcfcfc',
        flex: 1,
        alignContent: 'center',
    },
    scrollview: {
        backgroundColor: '#fcfcfc',
      },
    logo: {
        width: 350,
        left: 25,
        right: -70,
        height: 160,
        marginTop: 30,
    },
   
    btnDoador: {
        width: 300,
        height: 42,
        backgroundColor: '#086b90',
        marginTop: 70,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
    },

    txtButton: {
        fontSize: 16,
        color: '#fff'
    },

    btnDonatario: {
        width: 300,
        height: 42,
        backgroundColor: '#086b90',
        marginTop: 25,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
    },

    termoUso: {
        color: 'blue',
        marginTop: 26,
        textAlign: 'center',
        fontSize: 12,
    },

    txtAjudar: {
        marginTop: 55,
        textAlign: 'center',
        color: '#333',
    },

    texto: {
        marginTop: 75,
        textAlign: 'center',
        color: '#333',
    },
    txtCopy: {
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