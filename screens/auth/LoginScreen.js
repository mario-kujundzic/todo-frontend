import React, {useState} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import imageLogo from '../../assets/logo.png';
import AuthService from '../../services/AuthService';
import StyledButton from '../../components/form/StyledButton';
import StyledErrorText from '../../components/form/StyledErrorText';
import StyledTextField from '../../components/form/StyledTextField';
import { getEmailErrors, getPasswordErrors} from '../../util';

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [otherError, setOtherError] = useState('');

    const [loading, setLoading] = useState(false);

    const validateEmail = (newEmail) => {
        let error = getEmailErrors(newEmail);
        setEmail(newEmail);
        if (error) {
            setEmailError(error);;
        } else {
            setEmailError('');
            if (otherError) {
                setOtherError('');
            }
        };
    }

    const validatePassword = (newPassword) => {
        let error = getPasswordErrors(newPassword);
        setPassword(newPassword);
        if (error) {
            setPasswordError(error);
        } else {
            setPasswordError('');
            if (otherError) {
                setOtherError('');
            }
        };
    }

    const loginAsync = async () => {
        if (!emailError && !passwordError && !otherError && !loading) {
            setLoading(true);
            let authErrors = await AuthService.login(email, password);
            if (authErrors) {
                if (authErrors.email) {
                    setEmailError(authErrors.email);
                }
                if (authErrors.password) {
                    setPasswordError(authErrors.password);
                }
                if (authErrors.email) {
                    setOtherError(authErrors.other);
                }
                setLoading(false);
            }
        }
    };

    const navigateRegisterPage = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <Image source={imageLogo} style={styles.logo} />
            <View style={styles.form}>
                <StyledTextField 
                    text={email}
                    onChangeText={validateEmail}
                    placeholder="Email"
                    errorText={emailError}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    />
                <StyledTextField 
                    text={password}
                    setText={validatePassword}
                    placeholder="Password"
                    errorText={passwordError}
                    secureTextEntry
                    />
                <StyledButton 
                    onPress={loginAsync}
                    disabled={!email || !password || loading} 
                    text='Login'
                    loading={loading} />
                <StyledErrorText text={otherError} />
                <StyledButton 
                    onPress={navigateRegisterPage}
                    text='Register' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        backgroundColor: "white",
        padding: 30
    },
    logo: {
        width: "100%",
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    form: {
        flex: 5,
        justifyContent: "center",
        alignItems: 'stretch',
    }
});