import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

export default function Login({setUser}) {
    const loginAsync = () => {
      axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      const postData = {email: "mariokipoki@gmail.com", password: "mariokipoki"};
      axios('http://127.0.0.1:8000/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
          },
          data: postData
        })
        .then((msg) => {
          console.log('Successfully logged in!');
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + msg.data.access_token;
          setUser(msg.data.user);
      }).catch(err=> {
        console.log("nesto je poslo po zlu");
      });
    }


    return (
        <View>
            <Text>Username: mariokipoki@gmail.com</Text>
            <Text>Password: mariokipoki</Text>
            <TouchableOpacity onPress={loginAsync}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}