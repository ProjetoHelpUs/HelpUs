import React from 'react';
import { useState } from 'react';
//importação de funções
import { Text, Image, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Linking } from 'react-native';


export default function Logout({ navigation }){
    navigation.navigate('Login')
    alert('você saiu')
}