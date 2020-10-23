import axios from './AxiosService';
import { set, removeTodo } from '../state/todoSlice';
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
}

export default new TodoService();