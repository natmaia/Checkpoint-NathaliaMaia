import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';

import LoginScreen from './LoginScreen';

export default function ListaScreen({ route, navigation }) {
    const [data, setData] = useState([]);
    const { token } = route.params;

    useEffect(() => {
        fetch('http://profkaz-api.keepinvest.com.br/item', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [token]);

    const handleLogout = () => {
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Sair </Text>
            </Pressable>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.descricao}</Text>
                    </View>
                )}
            />
            <View style={styles.footer}>
                <Text style={styles.footerText1}>2TDSS-2023 - RM96320</Text>
                <Text style={styles.footerText2}>Produzido por: NathaliaMaia</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    itemContainer: {
        backgroundColor: '#CDD1D8',
        padding: 10,
        marginBottom: 8,
        borderRadius: 5,
        //borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    itemText: {
        fontSize: 16,
    },
    button: {
        backgroundColor: '#690A69',
        padding: 8,
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 8,
        marginBottom: 25,
        paddingHorizontal: 8,
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