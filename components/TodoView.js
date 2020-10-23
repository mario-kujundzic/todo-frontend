import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import TodoService from '../services/TodoService';
import TodoCard from './TodoCard';
import { selectTodos } from '../state/todoSlice';
import { StyleSheet, Text } from 'react-native';

export default function TodoView() {
    const todos = useSelector(selectTodos);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const renderTodo = (todo) => <TodoCard todo={todo} 
                        setSelected={setSelectedTodo} />;

    const empty = (<Text>No todos currently added!</Text>);

    useEffect(() => {
        TodoService.getMyTodos();
    }, [])

    return (
        <FlatList data={todos} 
            renderItem={({item}) => renderTodo(item)} 
            keyExtractor={item => item.id.toString()} 
            ListEmptyComponent={empty} 
            extraData={selectedTodo} />
        
    )
}

const styles = StyleSheet.create({
    container: {
    }

})