import React, { useState } from 'react';
import { View, TextInput, Pressable, Alert, StyleSheet, Text } from 'react-native';

export default function CadastrarScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCadastro = () => {
        const endpoint = 'http://profkaz-api.keepinvest.com.br/user/sign-up';
        const requestBody = {
            username: username,
            email: email,
            nomeCompleto: nomeCompleto,
            password: password,
            confirmPassword: confirmPassword,
        };

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => {
                if (response.ok) {
                    Alert.alert('Sucesso', 'Cadastrado com sucesso');
                    navigation.goBack();
                } else {
                    Alert.alert('Erro', 'Erro ao cadastrar');
                }
            })
            .catch((error) => {
                console.error(error);
                Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição');
            });
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
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                onChangeText={setNomeCompleto}
                value={nomeCompleto}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmar Senha"
                secureTextEntry
                onChangeText={setConfirmPassword}
                value={confirmPassword}
            />
            <Pressable style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar </Text>
            </Pressable>

            <View style={styles.footer}>
                <Text style={styles.footerText1}>2TDSS-2023 - RM96320 </Text>
                <Text style={styles.footerText2}>Produzido por: NathaliaMaia </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
