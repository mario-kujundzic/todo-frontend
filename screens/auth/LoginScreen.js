import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import imageLogo from '../../assets/logo.png';
import AuthService from '../../services/AuthService';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const loginAsync = async () => {
        let errors = await AuthService.login(email, password);
        if (errors)
            setErrors(errors);
    };

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