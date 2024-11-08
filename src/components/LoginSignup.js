import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signupSuccess, signupFailure, loginSuccess, loginFailure, logout } from '../store/LoginSignupSlice';

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const dispatch = useDispatch();
    const { user, error } = useSelector((state) => state.auth);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        const { email, password } = data;

        if (isLogin) {
            if (user && user.email === email && user.password === password) {
                dispatch(loginSuccess());
                Alert.alert('Login successful!');
            } else {
                dispatch(loginFailure('Invalid credentials'));
            }
        } else {
            if (email && password) {
                dispatch(signupSuccess({ email, password }));
                Alert.alert('Signup successful! ');
            } else {
                dispatch(signupFailure('Signup failed'));
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{isLogin ? 'Login' : 'Signup'}</Text>

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="email"
                rules={{ required: true }}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
                rules={{ required: true }}
            />
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

            {error && <Text style={styles.error}>{error}</Text>}

            <Button title={isLogin ? 'Login' : 'Signup'} onPress={handleSubmit(onSubmit)} />

            <Text style={styles.toggleText} onPress={() => setIsLogin(prev => !prev)}>
                {isLogin ? 'Dont have an account? Signup' : 'Already have an account? Login'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    toggleText: {
        color: '#0059d6',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default LoginSignup;
