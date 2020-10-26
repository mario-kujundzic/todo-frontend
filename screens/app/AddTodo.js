import React from 'react';
import { StyleSheet, View } from 'react-native';
import ViewTodo from '../../components/todos/ViewTodo';
import TodoService from '../../services/TodoService';

export default function AddTodo({navigation}) {

    const finishAdd = async (todo) => {
        await TodoService.addTodo(todo);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>  
            <ViewTodo finishAction={finishAdd} />
        </View>
    )
}

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