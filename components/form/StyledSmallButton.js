import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function StyledButton({onPress, icon}) {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={styles.button}
            >
                <Image source={icon} style={styles.buttonIcon} />
        </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
    },
    buttonIcon: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    }
});