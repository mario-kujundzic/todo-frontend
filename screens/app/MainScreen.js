import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../../state/userSlice';
import AuthService from '../../services/AuthService';
import StyledButton from '../../components/form/StyledButton';
import MyTodos from '../../components/todos/MyTodos';

export default function MainScreen() {
    const user = useSelector(selectUser);

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome, {user}!</Text>
            <MyTodos />
            <StyledButton text="Logout" onPress={AuthService.logout} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
        backgroundColor: 'white'
    },
    welcome: {
        fontSize: 20
    }
});