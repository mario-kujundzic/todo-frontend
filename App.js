import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, {useState, useRef, useEffect} from 'react';
import { AppLoading } from 'expo';
import axios from './services/AxiosService';
import AppNavigator from './navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {
    const [ready, setReady] = useState(false);
    const [user, setUser] = useState(null);
    const navRef = useRef(null);

    useEffect(() => {
        if (user) {
            console.log('redirecting..');
            navRef.current?.navigate('MainStack', {user: user});
        }
    }, [ready])

    const startLoadingAsync = async () => {
        console.log('started');
        let token = await AsyncStorage.getItem('token');
        if (token)
            axios.attachHeaders({'Authorization': token});
        let user = await AsyncStorage.getItem('user');
        if (user)
            setUser(user);
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
            <AppNavigator />
            <StatusBar style="auto" />
        </NavigationContainer>
    )
};

