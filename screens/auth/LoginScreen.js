import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import imageLogo from '../../assets/logo.png';
import AuthService from '../../services/AuthService';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (newEmail) => {
        let validated = true;
        let newError = '';
        if (newEmail === '') {
            validated = false;
            newError = "Email is required!";
        } else if (!/\S+@\S+\.\S+/.test(newEmail)) {
            validated = false;
            newError = "Email must be valid!";
        }
        setEmail(newEmail);
        if (validated) {
            const {email, unknown, ...newErrors} = {...errors}
            setErrors(newErrors);
        } else {
            const newErrors = {...errors, 'email': newError};
            setErrors(newErrors);
        }
    }

    const validatePassword = (newPassword) => {
        let validated = true;
        let newError = '';
        if (newPassword === '') {
            validated = false;
            newError = "Password is required!";
        } else if (newPassword.length < 6) {
            validated = false;
            newError = "Password must be at least 6 characters!";
        }
        setPassword(newPassword);
        if (validated) {
            const {password, unknown, ...newErrors} = {...errors}
            setErrors(newErrors);
        } else {
            const newErrors = {...errors, 'password': newError};
            setErrors(newErrors);
        }
    }

    const loginAsync = async () => {
        if (!Object.keys(errors).length) {
            let authErrors = await AuthService.login(email, password);
            if (authErrors)
                setErrors(authErrors);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={imageLogo} style={styles.header} />
            <View style={styles.form}>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={text => validateEmail(text)}
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                    />
                <Text style={styles.error}>
                    {errors.email || ""}
                </Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={text => validatePassword(text)}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                    />
                <Text style={styles.error}>
                    {errors.password || ""}
                </Text>
                <TouchableOpacity 
                    onPress={loginAsync}
                    style={email === "" || password === "" 
                        ? styles.buttonDisabled
                        : styles.button}
                    disabled={email === "" || password === "" }
                    >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.error}>
                    {errors.unknown || ""}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
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
    buttonDisabled: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CDCDCD",
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