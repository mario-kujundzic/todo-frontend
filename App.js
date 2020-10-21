import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef } from 'react';
import { AppLoading } from 'expo';
import axios from './services/AxiosService';
import AppNavigator from './navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider, useDispatch } from 'react-redux';
import { set } from './state/userSlice';
import store from './state/store';

const ReduxWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )    
}

const App = () => {
    const [ready, setReady] = useState(false);
    const dispatch = useDispatch();
    const navRef = useRef(null);

    const startLoadingAsync = async () => {
        let token = await AsyncStorage.getItem('token');
        if (token)
            axios.attachHeaders({'Authorization': token});
        let user = await AsyncStorage.getItem('user');
        if (user)
            dispatch(set(user));
        return Promise.resolve();
    };

    const handleLoadError = (err) => {
        console.log('load errored');
        alert('Error in loading');
    };

    const handleLoadSuccess = () => {
        setReady(true);
    };


    if (!ready) {
        return (
            <AppLoading
                startAsync={startLoadingAsync}
                onError={handleLoadError}
                onFinish={handleLoadSuccess}
            />
        )
    };
    return (
        <NavigationContainer ref={navRef} >
            <AppNavigator/>
            <StatusBar style="auto" />
        </NavigationContainer>
    )
};

export default ReduxWrapper;