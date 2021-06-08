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
        marginTop: 30,
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
        color: 'blue',
    },

    texto: {
        marginTop: 75,
        textAlign: 'center',
        color: 'blue',
    },
    txtCopy: {
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