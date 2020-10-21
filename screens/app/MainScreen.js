import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { reset, selectUser } from '../../state/userSlice';

export default function MainScreen() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logOutAsync = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
        dispatch(reset());
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