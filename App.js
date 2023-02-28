import React from 'react'


import Login from './screens/Login'
import Registro from './screens/Registro'
import EsqueciSenha from './screens/EsqueciSenha'
import Vendedor from './screens/Vendedor'
import TelaVendedor from './screens/TelaVendedor'
import VenderItem from './screens/VenderItem'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Registro" component={Registro}/>
            <Stack.Screen name="EsqueciSenha" component={EsqueciSenha}/>
            <Stack.Screen name="Vendedor" component={Vendedor}/>
            <Stack.Screen name="TelaVendedor" component={TelaVendedor}/>
            <Stack.Screen name="VenderItem" component={VenderItem}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
}

