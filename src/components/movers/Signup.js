import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Alert, ScrollView } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from './Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { signupSuccess, signupFailure } from '../../store/LoginSignupSlice';
import { useForm, Controller } from 'react-hook-form';

export default function Signup() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { control, handleSubmit, reset, formState: { errors } } = useForm();
    const { error } = useSelector((state) => state.auth);

    const onSubmit = (data) => {
        const { fullName, email, password, confirmPassword, mobileNumber } = data;

        if (password !== confirmPassword) {
            Alert.alert('Passwords do not match!');
            dispatch(signupFailure('Passwords do not match!'));
            return;
        }

        dispatch(signupSuccess({ email, password, fullName, mobileNumber }));
        Alert.alert('Signup successful!');
        reset();
        navigation.navigate('Login');
    };

    useEffect(() => {
        if (error) {
            Alert.alert('Signup Error', error);
        }
    }, [error]);

    return (
        <KeyboardAvoidingView style={styles.mainview}>
            <View style={styles.secondaryview}>
                <Text style={styles.heading}>Welcome,</Text>
                <Text style={styles.signinheading}>Sign up to continue</Text>


                <ScrollView contentContainerStyle={styles.scrollview} showsVerticalScrollIndicator={false}>
                    <View style={styles.detailsview}>

                        <View style={styles.email}>
                            <Text style={styles.emailheading}>Full Name</Text>
                            <Controller
                                control={control}
                                name="fullName"
                                rules={{ required: 'Full name is required' }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.inputemail}
                                        placeholder="Enter Full Name"
                                        placeholderTextColor="#9A9A9A"
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                            {errors.fullName && <Text style={styles.errorText}>{errors.fullName.message}</Text>}
                        </View>


                        <View style={styles.password}>
                            <Text style={styles.passwordheading}>Password</Text>
                            <Controller
                                control={control}
                                name="password"
                                rules={{ required: 'Password is required' }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.inputpassword}
                                        placeholder="Enter Password"
                                        secureTextEntry
                                        placeholderTextColor="#9A9A9A"
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
                        </View>


                        <View style={styles.password}>
                            <Text style={styles.passwordheading}>Confirm Password</Text>
                            <Controller
                                control={control}
                                name="confirmPassword"
                                rules={{ required: 'Confirm password is required' }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.inputpassword}
                                        placeholder="Confirm Password"
                                        secureTextEntry
                                        placeholderTextColor="#9A9A9A"
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                            {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}
                        </View>


                        <View style={styles.password}>
                            <Text style={styles.passwordheading}>Mobile Number</Text>
                            <Controller
                                control={control}
                                name="mobileNumber"
                                rules={{
                                    required: 'Mobile number is required',
                                    pattern: {
                                        value: /^(\+92|0)[0-9]{10}$/,
                                        message: 'Invalid phone number format',
                                    },
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.inputpassword}
                                        placeholder="+923182759371"
                                        placeholderTextColor="#9A9A9A"
                                        value={value}
                                        onChangeText={onChange}
                                        keyboardType="phone-pad"
                                    />
                                )}
                            />
                            {errors.mobileNumber && <Text style={styles.errorText}>{errors.mobileNumber.message}</Text>}
                        </View>


                        <View style={styles.email}>
                            <Text style={styles.emailheading}>Email</Text>
                            <Controller
                                control={control}
                                name="email"
                                rules={{
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Invalid email address',
                                    },
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.inputemail}
                                        placeholder="Enter Email"
                                        placeholderTextColor="#9A9A9A"
                                        value={value}
                                        onChangeText={onChange}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                    />
                                )}
                            />
                            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
                        </View>


                        <View style={styles.loginbuttonview}>
                            <CustomButton title={'Next'} onPress={() => navigation.navigate('SignupOTP')} />
                        </View>
                        <View style={styles.loginbuttonview}>
                            <CustomButton title={'Signup Emergency'} onPress={handleSubmit(onSubmit)} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: 'white',
    },
    secondaryview: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
    },
    heading: {
        fontFamily: 'Poppins-ExtraBold',
        color: 'rgba(0, 0, 0, 1)',
        fontSize: RFValue(28),
        lineHeight: 41,
    },
    signinheading: {
        color: "rgba(0, 0, 0, 1)",
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        fontSize: RFValue(16),
        lineHeight: 41,
    },
    scrollview: {
        paddingBottom: 30,
    },
    detailsview: {
        width: RFValue(310),
        marginTop: 20,
    },
    emailheading: {
        fontFamily: 'Poppins',
        color: "rgba(66, 74, 84, 1)",
        fontWeight: '600',
        fontSize: RFValue(17),
    },
    inputemail: {
        fontSize: 16,
        color: '#000',
        backgroundColor: 'rgba(244, 244, 244, 1)',
        borderRadius: 7,
        marginTop: 5,
        paddingLeft: 10,
    },
    password: {
        marginTop: 20,
    },
    passwordheading: {
        fontFamily: 'Poppins',
        color: "rgba(66, 74, 84, 1)",
        fontWeight: '600',
        fontSize: RFValue(17),
    },
    inputpassword: {
        fontSize: 16,
        color: '#000',
        backgroundColor: 'rgba(244, 244, 244, 1)',
        borderRadius: 7,
        marginTop: 5,
        paddingLeft: 10,
    },
    loginbuttonview: {
        marginTop: 15
    },
    errorText: {
        color: 'red',
        fontSize: RFValue(12),
        marginTop: 5,
        fontWeight:'bold'
    },
});

