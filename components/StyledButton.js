import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function StyledButton({onPress, disabled = false, text}) {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={disabled 
            ? styles.buttonDisabled
            : styles.button}
            disabled={disabled}
            >
                <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3CB043",
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255,255,255,0.7)"
    },
    buttonDisabled: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CDCDCD",
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255,255,255,0.7)"
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        height: 20
    }
});