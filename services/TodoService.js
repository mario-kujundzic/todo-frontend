import axios from './AxiosService';
import { set } from '../state/todoSlice';
import store from '../state/store';

class TodoService {
    getMyTodos = async () => {
        let todos = await axios.client('todos', {method: 'GET'})
        todos.data
        store.dispatch(set(todos.data));
    };
}

export default new TodoService();