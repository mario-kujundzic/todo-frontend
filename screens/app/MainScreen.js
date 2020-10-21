import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../../state/userSlice';
import AuthService from '../../services/AuthService';

export default function MainScreen() {
    const user = useSelector(selectUser);

    return (
        <View>
            <Text>Welcome to the app, {user}!</Text>
            <TouchableOpacity onPress={AuthService.logout}>
                <Text>
                    Log me out!
                </Text>
            </TouchableOpacity>
        </View>
    )
}