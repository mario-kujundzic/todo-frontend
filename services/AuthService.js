import AsyncStorage from '@react-native-community/async-storage';
import store from '../state/store';
import { set, reset} from '../state/userSlice';
import axios from './AxiosService';

class AuthService {
    
    login = async (email, password) => {
        try {
            let msg = await axios.client('auth/login', {method: 'POST', data: {email, password}})
            const header = 'Bearer ' + msg.data.access_token;
            axios.attachHeaders({'Authorization': header});
            await AsyncStorage.setItem('token', header);
            await AsyncStorage.setItem('user', msg.data.user);
            store.dispatch(set(msg.data.user));
        }
        catch (err) {
            return err.errorMessages;
        }
    }
    
    logout = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
        store.dispatch(reset());
    }

}

export default new AuthService();