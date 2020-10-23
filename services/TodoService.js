import axios from './AxiosService';
import { set, removeTodo, updateTodo } from '../state/todoSlice';
import store from '../state/store';
import { Alert } from 'react-native';

class TodoService {
    getMyTodos = async () => {
        let todos = await axios.client('todos', {method: 'GET'})
        store.dispatch(set(todos.data));
    };

    deleteTodo = async (id) => {
        try {
            await axios.client(`todos/${id}`, {method: 'DELETE'})
            store.dispatch(removeTodo(id));
        } catch (e) {
            Alert.alert('Deleting failed!');
        }
    }

    updateTodo = async (todo) => {
        try {
            let res = await axios.client(`todos/${todo.id}`, 
                            {method: 'PUT', data: {...todo}});
            store.dispatch(updateTodo(res.data));
        } catch (e) {
            return err.errorMessages;
        }
    }
}

export default new TodoService();