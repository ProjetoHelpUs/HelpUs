import React from 'react';

//importação de funções
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Button, Image } from 'react-native';

//importação de telas
import Cadastro from './src/pages/cadastro/cadastro'
import Login from './src/pages/login/login'
import Home from './src/pages/home/home';
import Doador from './src/pages/doador/doador';
import Donatario from './src/pages/donatario/donatario';
import List from './src/pages/dashboard/lista';

import Logout from './src/functions/Login';
import Perfil from './src/pages/perfil/perfil';

//inicia o método de criação de Stack para navegação entre telas
const Stack = createStackNavigator();

export default function App({ navigation }) {
  const Logout = async () => {
    await navigation.navigate('Login')
    alert('você saiu')
  }

  return (
    //Cria os as rotas entre telas com nomes e títulos
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"
          component={Login}
          options={{ title: "HelpUs - Login" }}
        />

        <Stack.Screen name="Cadastro"
          component={Cadastro}
          options={{ title: "HelpUs - Cadastre-se" }}
        />

        <Stack.Screen name="Home"
          component={Home}
          options={{ title: "HelpUs - Cadastro" }}
        />

        <Stack.Screen name="Doador"
          component={Doador}
          options={{ title: "HelpUs - Doador" }}
        />

        <Stack.Screen name="Donatario"
          component={Donatario}
          options={{ title: "HelpUs - Donatário" }}
        />

        <Stack.Screen name="Dashboard"
          component={List}
          options={{ title: "HelpUs - Dashboard" }}
        />

        <Stack.Screen name="Perfil"
          component={Perfil}
          options={{ title: "HelpUs - Perfil" }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
};
