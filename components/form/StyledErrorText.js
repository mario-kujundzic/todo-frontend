import React from 'react';
import { StyleSheet, Text } from "react-native";

export default function StyledErrorText({text}) {
    return (
        <Text style={styles.error}>
            {text || ""}
        </Text>
    )
}

const styles = StyleSheet.create({
    error: {
        height: 20,
        color: "red"
    }
});