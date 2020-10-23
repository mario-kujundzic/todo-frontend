import React from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

export default function StyledCheckBox({value, onValueChange}) {
    const toggleValue = () => {
        onValueChange(!value);
    }

    return (
        <TouchableOpacity onPress={toggleValue}>
            {value ? (
                <MaterialIcons style={styles.checkBox} name="check-box" size={40} color="black" />
            )
            : (
                <MaterialIcons style={styles.checkBox} name="check-box-outline-blank" size={40} color="black" />
            )
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkBox: {
        paddingTop: 5,
        paddingRight: 10
    }
})