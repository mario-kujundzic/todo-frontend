import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from '../screens/app/MainScreen';
import UserContext from "../context/UserContext";

const Stack = createStackNavigator();

function MainNavigator({route}) {

    return (
        <UserContext.Provider value={route.params.user}>
            <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen 
                    name="MainScreen"
                    component={MainScreen}
                    options={{ title: "Main screen"}}
                    />
            </Stack.Navigator>
        </UserContext.Provider>
    )
}
export {UserContext};
export default MainNavigator;