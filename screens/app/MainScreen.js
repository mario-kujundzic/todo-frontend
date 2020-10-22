import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../../state/userSlice';
import AuthService from '../../services/AuthService';
import StyledButton from '../../components/StyledButton';
import TodoView from '../../components/TodoView';

export default function MainScreen() {
    const user = useSelector(selectUser);

    return (
        <View style={styles.container}>
            <Text>Welcome, {user}!</Text>
            <TodoView />
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
    }
});