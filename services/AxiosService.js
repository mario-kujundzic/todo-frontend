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
            // add check for status code 403 and try re-authentication...
            if (status == 401) {
                AsyncStorage.removeItem('token');
                AsyncStorage.removeItem('user');
                error.errorMessages = {"password": "Invalid password!"};
            } else {
                let errors = error.response.data.errors;
                if (errors) {
                    var myErrors = {};
                    for (const key in errors) {
                        myErrors[key] = errors[key][0];
                    }
                    error.errorMessages = myErrors;
                }
                else
                    error.errorMessages = {'other': "An unknown error has occured!"};
            }
            return Promise.reject(error);
        }
        catch(error) {
            error.errorMessages = {'other': "An unknown error has occured!"};
            return Promise.reject(error);
        }
    }
}

const axiosService = new AxiosService();
export default axiosService;