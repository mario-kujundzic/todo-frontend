import React from 'react';
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import StyledErrorText from "./StyledErrorText";

export default function StyledTextField({text, setText, placeholder, errorText, ...props}) {
    return (
        <>
            <TextInput
                style={styles.textInput}
                onChangeText={t => setText(t)}
                value={text}
                placeholder={placeholder}
                {...props}
            />
            <StyledErrorText text={errorText} />
        </>
    )
}


const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: "silver",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    }
});