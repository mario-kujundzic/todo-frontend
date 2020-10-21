import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/app/MainScreen';
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import { useSelector } from 'react-redux';
import { selectUser } from '../state/userSlice';

const Stack = createStackNavigator();

function AppNavigator() {
    const user = useSelector(selectUser);

    return (
        <>
        {user ?
        (
        <Stack.Navigator>   
            <Stack.Screen 
                name="MainScreen"
                component={MainScreen}
                options={{ title: "Main screen"}}
                />
        </Stack.Navigator>
        ) 
        : 
        (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
                options={{ title: "Login"}}
                />
            <Stack.Screen 
                name="Register"
                component={RegisterScreen}
                options={{ title: "Register"}}
                />
        </Stack.Navigator>
        )
        }
        </>
    )
}

export default AppNavigator;