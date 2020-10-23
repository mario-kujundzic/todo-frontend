import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from "@expo/vector-icons";

export default function StyledRadioGroup({value, options, onValueChange}) {
    return (
        <View>
            {options.map(res => {
            return (
                <View key={res.id} style={styles.container}>
                    <Text style={styles.radioText}>{res.text}</Text>
                    <TouchableOpacity
                        style={styles.radioCircle}
                        onPress={() => {
                            onValueChange(res.id);
                        }} >
                        {res.id === value ? (
                        <MaterialIcons name="radio-button-checked" 
                            size={30} color="black" />
                        ) : (
                        <MaterialIcons name="radio-button-unchecked" 
                            size={30} color="black" />
                        )}
                        </TouchableOpacity>
                </View>
            )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "40%"
	},
    radioText: {
        marginRight: 35,
        fontSize: 18,
        color: '#000',
    },
	radioCircle: {
		height: 30,
		width: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
})