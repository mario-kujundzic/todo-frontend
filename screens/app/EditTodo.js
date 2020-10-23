import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewTodo from '../../components/todos/ViewTodo';
import { useSelector } from 'react-redux';
import { selectTodo } from '../../state/todoSlice';
import TodoService from '../../services/TodoService';

export default function EditTodo({route, navigation}) {
    const todo = useSelector((state) => selectTodo(state, route.params?.todo))
    
    const finishEdit = async (todo) => {
        await TodoService.updateTodo(todo);
        navigation.goBack();
    }
    return (
        <View style={styles.container}>  
            <ViewTodo todo={todo} finishAction={finishEdit} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
        backgroundColor: 'white'
    }
})