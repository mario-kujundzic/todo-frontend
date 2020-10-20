import React, {useContext, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import UserContext from '../../context/UserContext';

export default function MainScreen({navigation}) {
    user = useContext(UserContext);
    const logOutAsync = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
        navigation.navigate('AuthStack');
    };

    return (
        <View>
            <Text>Welcome to the app, {user}!</Text>
            <TouchableOpacity onPress={logOutAsync}>
                <Text>
                    Log me out!
                </Text>
            </TouchableOpacity>
        </View>
    )
}