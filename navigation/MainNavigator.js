import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/app/MainScreen';
import EditTodo from '../screens/app/EditTodo';
import AddTodo from '../screens/app/AddTodo';

const Stack = createStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator>   
            <Stack.Screen 
                name="MainScreen"
                component={MainScreen}
                options={{ title: "Main screen"}}
            />
            <Stack.Screen 
                name="EditTodo"
                component={EditTodo}
                options={{ title: "Edit todo"}}
            />
            <Stack.Screen 
                name="AddTodo"
                component={AddTodo}
                options={{ title: "Add todo"}}
            />

        </Stack.Navigator>
    )
}
