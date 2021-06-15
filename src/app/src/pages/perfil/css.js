import { StyleSheet } from 'react-native'


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
        width: 150,
        height: 60,
        marginTop: 32,
        marginBottom: 64,
        marginLeft: 32,
        marginRight: 32,
    },
    texto: {
        marginTop: 75,
        textAlign: 'center',
        color: '#333',
    },
    perfil1: {
        width: 150,
        height: 150,
        marginTop: -35,
        marginLeft: 15,
    },
    txtPerfil: {
        marginTop: -145,
        marginLeft: 180,
        fontWeight: 'bold'
    },
    txtVar: {
        marginTop: -100,
        marginLeft: 180,
    },
    txtCopy: {
        marginBottom: 0,
        textAlign: 'center',
        color: '#333',
        padding: 40
    },

    termoUso: {
        color: '#333',
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        fontSize: 12,
    },
    txtHistoria: {
        color: '#333',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'justify',
    },
});

export { css };