import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login">
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
export default AuthNavigator;