import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

export default function MainScreen({user, logOut}) {

    return (
        <View>
            <Text>Welcome to the app, {user}!</Text>
        </View>
    )
}