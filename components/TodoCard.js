import React from 'react';

import { StyleSheet, Text, View } from "react-native";
import deleteIcon from '../assets/delete-icon.png';
import editIcon from '../assets/edit-icon.png';
import TodoService from '../services/TodoService';
import ConfirmDialog from './ConfirmDialog';
import StyledSmallButton from './StyledSmallButton';

export default function TodoCard({todo, setSelected}) {

    const editTodo = () => {
    }

    const deleteTodo = async () => {
        const confirmDelete = () => {
            TodoService.deleteTodo(todo.id);
        }

        ConfirmDialog('Delete todo', 
                    'Are you sure you want to delete the selected todo?',
                    confirmDelete,
                    () => {});
    }

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
                <View style={styles.buttonDrawer}>
                    <StyledSmallButton onPress={editTodo} icon={editIcon} />
                    <StyledSmallButton onPress={deleteTodo} icon={deleteIcon} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
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
        backgroundColor: '#89DBEC',
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 5
    },
    descriptionText: {
        fontSize: 18,
        flex: 4,
        justifyContent: 'flex-start'
    },
    buttonDrawer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})