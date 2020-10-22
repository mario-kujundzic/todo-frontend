import React, { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import TodoService from '../services/TodoService';
import TodoCard from './TodoCard';
import { selectTodos } from '../state/todoSlice';
import { StyleSheet } from 'react-native';

export default function TodoView() {
    const todos = useSelector(selectTodos);

    useEffect(() => {
        TodoService.getMyTodos();
    }, [])

    return (
        <ScrollView style={styles.container}>
            {todos.map((todo, index) => 
                ( <TodoCard todo={todo} key={index}/> ) )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
    }

})