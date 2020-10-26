import React from 'react';

import { Alert, StyleSheet, Text, View } from "react-native";
import TodoService from '../../services/TodoService';
import ConfirmDialog from '../form/ConfirmDialog';
import StyledCheckBox from '../form/StyledCheckBox';
import StyledSmallButton from '../form/StyledSmallButton';

export default function TodoCard({todo, edit, setSelected}) {

    const editTodo = () => {        
        edit(todo.id);
    }
    
    const toggleFinished = async (val) => {
        const newTodo = {...todo, completed: val};
        let error = await TodoService.updateTodo(newTodo);
        if (error) {
            Alert.alert("Something went wrong!");
        } else  {
            setSelected(todo.id.toString())
        }
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
                    <StyledCheckBox value={todo.completed} onValueChange={toggleFinished} />
                    <StyledSmallButton onPress={editTodo} icon="edit" size={40} />
                    <StyledSmallButton onPress={deleteTodo} icon="delete" size={40} />
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
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})