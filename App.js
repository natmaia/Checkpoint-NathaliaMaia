import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import ListaScreen from './src/screens/ListaScreen';
import CadastrarScreen from './src/screens/CadastrarScreen';

const Stack = createNativeStackNavigator();

export default function App({Navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
        <Stack.Screen name="Listar" component={ListaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
