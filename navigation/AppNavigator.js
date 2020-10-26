import React from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { useSelector } from 'react-redux';
import { selectUser } from '../state/userSlice';

function AppNavigator() {
    const user = useSelector(selectUser);

    return (
        <>
        {user ?
        (   
            <MainNavigator />
        ) 
        : 
        (
            <AuthNavigator />
        )
        }
        </>
    )
}

export default AppNavigator;