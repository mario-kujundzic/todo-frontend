import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
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
