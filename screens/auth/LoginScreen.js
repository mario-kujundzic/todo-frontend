import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import imageLogo from '../../assets/logo.png';
import AuthService from '../../services/AuthService';
import StyledButton from '../../components/StyledButton';
import StyledErrorText from '../../components/StyledErrorText';
import StyledTextField from '../../components/StyledTextField';

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
                <StyledTextField 
                    text={email}
                    onChangeText={validateEmail}
                    placeholder="Email"
                    errorText={errors.email}
                    keyboardType="email-address"
                    />
                <StyledTextField 
                    text={password}
                    setText={validatePassword}
                    placeholder="Password"
                    errorText={errors.password}
                    secureTextEntry
                    />
                <StyledButton 
                    onPress={loginAsync}
                    disabled={email === "" || password === ""} 
                    text='Login'/>
                <StyledErrorText text={errors.unknown} />
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
    }
});