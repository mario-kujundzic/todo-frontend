import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="AuthStack">
            <Stack.Screen 
                name="AuthStack"
                component={AuthNavigator}
                options={{ title: "Authentication"}}
            />
            <Stack.Screen 
                name="MainStack"
                component={MainNavigator}
                options={{ title: "Main window"}}
            />
        </Stack.Navigator>
    )
}

export default AppNavigator;