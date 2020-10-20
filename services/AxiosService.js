import react from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class AxiosService {
    constructor() {
        let options = {
            baseURL: "http://127.0.0.1:8000/api/",
            headers: {'X-Requested-With': 'XMLHttpRequest',
                        'Accept': "application/json"},
        };
        this.client = axios.create(options);
        this.client.interceptors.response.use(this.handleSuccess, this.handleError);
    }

    attachHeaders(headers) {
        Object.assign(this.client.defaults.headers, headers);
    }

    removeHeaders(headerKeys) {
        headerKeys.forEach(key => delete this.client.defaults.headers[key]);
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        try {
            const status = error.response.status;
            if (status == 401) {
                AsyncStorage.removeItem('token');
                AsyncStorage.removeItem('user');
            }
            let errors = error.response.data.errors;
            if (errors) {
                var myErrors = {};
                for (const key in errors) {
                    myErrors[key] = errors[key][0];
                }
                error.errorMessages = myErrors;
            }
            return Promise.reject(error);
        }
        catch(error) {
            return Promise.reject(error);
        }
    }
}

const axiosService = new AxiosService();
export default axiosService;