import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

export default function StyledButton({onPress, icon, size}) {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={styles.button}
            >
                <MaterialIcons name={icon} size={size} />
        </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
    }
});