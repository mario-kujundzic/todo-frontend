import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import axios from 'axios';
import imageLogo from './assets/logo.png';

export default function Login({setUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const loginAsync = () => {
      axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      const postData = {email: email, password: password};
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
      }).catch(err => {
          console.log(err.response.status);
            if (err.response.status === 422) {
                const newErrors = err.response.data.errors;
                console.log(newErrors);
                const errors = {};
                if (newErrors.email) {
                    errors.email = newErrors.email[0];
                };
                if (newErrors.password){
                    errors.password = newErrors.password[0];
                };
                setErrors(errors);
            }
            else if (err.response.status === 401) {
                const errors = {password: "Invalid password!"};
                setErrors(errors);
            }
      });
    }

    return (
        <View style={styles.container}>
            <Image source={imageLogo} style={styles.header} />
            <View style={styles.form}>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                    />
                <Text style={styles.error}>
                    {errors.email || ""}
                </Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                    />
                <Text style={styles.error}>
                    {errors.password || ""}
                </Text>
                <TouchableOpacity 
                    onPress={loginAsync}
                    style={styles.button}
                    >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        //justifyContent: "space-between"
    },
    logo: {
        flex: 1,
        width: "100%",
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    form: {
        flex: 10,
        justifyContent: "center",
        width: 300
    },
    textInput: {
        height: 40,
        borderColor: "silver",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    },
    button: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3CB043",
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255,255,255,0.7)"
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        height: 20
    },
    error: {
        height: 20,
        color: "red"
    }
});