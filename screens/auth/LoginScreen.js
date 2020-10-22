import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import imageLogo from '../../assets/logo.png';
import AuthService from '../../services/AuthService';
import StyledButton from '../../components/StyledButton';
import StyledErrorText from '../../components/StyledErrorText';
import StyledTextField from '../../components/StyledTextField';
import { getEmailErrors, getPasswordErrors} from '../../util';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (newEmail) => {
        let error = getEmailErrors(newEmail);
        setEmail(newEmail);
        if (error) {
            setErrors(oldErrs => ({...oldErrs, 'email': error}));
        } else {
            const {email, unknown, ...newErrors} = {...errors}
            setErrors(newErrors);
        };
    }

    const validatePassword = (newPassword) => {
        let error = getPasswordErrors(newPassword);
        setPassword(newPassword);
        if (error) {
            setErrors(oldErrs => ({...oldErrs, 'password': error}));
        } else {
            const {password, unknown, ...newErrors} = {...errors}
            setErrors(newErrors);
        };
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