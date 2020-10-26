import React, {useState} from 'react';
import { StyleSheet, Text, View } from "react-native";
import StyledButton from '../../components/form/StyledButton';
import StyledTextField from '../../components/form/StyledTextField';
import { getEmailErrors, getPasswordErrors } from '../../util';
import AuthService from '../../services/AuthService';

export default function RegisterScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const [loading, setLoading] = useState(false);

    const validateName = (newName) => {
        setName(newName);
        if (newName.trim() === "") {
            setNameError('Name is required!');;
        } else {
            setNameError('');
        };

    }

    const validateEmail = (newEmail) => {
        let error = getEmailErrors(newEmail);
        setEmail(newEmail);
        if (error) {
            setEmailError(error);;
        } else {
            setEmailError('');
        };
    }

    const validatePassword = (newPassword) => {
        let error = getPasswordErrors(newPassword);
        setPassword(newPassword);
        if (error) {
            setPasswordError(error);
        } else {
            setPasswordError('');
        };
    }

    const validateConfirmPass = (newConfirmPass) => {
        setConfirmPass(newConfirmPass);
        if (newConfirmPass != password) {
            setConfirmPassError('Passwords must match!');
        } else {
            setConfirmPassError('');
        };

    }

    const formIsValid = () => {
        return !emailError && !nameError 
                && !passwordError && !confirmPassError
    }

    const registerAsync = async () => {
        if (formIsValid()) {
            setLoading(true);
            let regErrors = await AuthService.register({name, email, password});
            if (regErrors) {
                if (regErrors.email) {
                    setEmailError(regErrors.email);
                }
                if (regErrors.password) {
                    setPasswordError(regErrors.password);
                }
                if (regErrors.name) {
                    setNameError(regErrors.name);
                }
                setLoading(false);
            }
            
        }
    }

    return (
        <View style={styles.container}>
            <Text>Name</Text>
            <StyledTextField
                text={name}
                onChangeText={validateName}
                placeholder="Enter your name..."
                errorText={nameError}
                />
            <Text>Email</Text>
            <StyledTextField
                text={email}
                onChangeText={validateEmail}
                placeholder="Enter your email..."
                errorText={emailError}
                autoCapitalize="none"
                />
            <Text>Password</Text>
            <StyledTextField
                text={password}
                onChangeText={validatePassword}
                placeholder="Enter a password (min. 6 characters)..."
                errorText={passwordError}
                secureTextEntry
                />
            <Text>Confirm your password</Text>
            <StyledTextField
                text={confirmPass}
                onChangeText={validateConfirmPass}
                placeholder="Confirm your password..."
                errorText={confirmPassError}
                secureTextEntry
                />
            <StyledButton
                onPress={registerAsync}
                text='Register' 
                disabled={!email || !password ||
                          !name || !confirmPass ||loading}
                loading={loading} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        backgroundColor: "white",
        padding: 30
    }
})