import React from 'react';

import { StyleSheet, Text, View } from "react-native";

export default function TodoCard({todo, setSelected}) {
    return (
        <View style={styles.card}>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    {todo.title}
                </Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    {todo.description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height:150,
        marginTop: 10,
        marginBottom: 10,
    },
    title: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        backgroundColor: '#2F56E9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 5
    },
    titleText: {
        color: 'white',
        fontSize: 24
    },  
    description: {
        flexGrow: 1,
        backgroundColor: '#89DBEC',
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 5
    },
    descriptionText: {
        fontSize: 18
    }
})