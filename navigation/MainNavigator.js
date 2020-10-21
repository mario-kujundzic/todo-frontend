import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/app/MainScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator>   
            <Stack.Screen 
                name="MainScreen"
                component={MainScreen}
                options={{ title: "Main screen"}}
            />
        </Stack.Navigator>
    )
}
