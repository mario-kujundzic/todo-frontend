import React from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function StyledCheckBox({value, onValueChange}) {
    const toggleValue = () => {
        onValueChange(!value);
    }

    return (
        <TouchableOpacity onPress={toggleValue}>
            {value ? (
                <MaterialIcons name="check-box" size={45} color="black" />
            )
            : (
                <MaterialIcons name="check-box-outline-blank" size={45} color="black" />
            )
            }
        </TouchableOpacity>
    )
}