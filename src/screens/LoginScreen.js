import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Pressable, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const endpoint = 'http://profkaz-api.keepinvest.com.br/login';
    const requestBody = {
      username: username,
      password: password,
    };

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          navigation.replace('Listar', { token: data.token });
        } else {
          Alert.alert('Erro', 'Usuário ou senha incorretos');
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição');
      });
  };

  const handleCadastro = () => {
    navigation.push('Cadastrar');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar </Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar </Text>
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.footerText1}>2TDSS-2023 - RM96320 </Text>
        <Text style={styles.footerText2}>Produzido por: NathaliaMaia</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#690A69',
    padding: 8,
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText1: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginTop: 8,
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    alignItems: 'center',
  },
  footerText1: {
    fontSize: 12,
    color: 'gray',
  },
  footerText2: {
    fontSize: 12,
    color: 'gray',
    marginTop: 8,
  },
});
