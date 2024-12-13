import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { signupFailure, signupSuccess } from '../../../store/LoginSignupSlice';
import CustomButton from '../CustomComponents/CustomButton';

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
        <KeyboardAvoidingView style={styles.mainCont}>
            <View style={styles.secondaryCont}>
                <Text style={styles.heading}>Welcome,</Text>
                <Text style={styles.signUpHeading}>Sign up to continue</Text>


                <ScrollView contentContainerStyle={styles.scrollview} showsVerticalScrollIndicator={false}>
                    <View style={styles.detailsCont}>

                        <View style={styles.email}>
                            <Text style={styles.passwordHeading}>Full Name</Text>
                            <Controller
                                control={control}
                                name="fullName"
                                rules={{ required: 'Full name is required' }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.inputPassword}
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
                            <Text style={styles.passwordHeading}>Password</Text>
                            <Controller
                                control={control}
                                name="password"
                                rules={{ required: 'Password is required' }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.inputPassword}
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
                            <Text style={styles.passwordHeading}>Confirm Password</Text>
                            <Controller
                                control={control}
                                name="confirmPassword"
                                rules={{ required: 'Confirm password is required' }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.inputPassword}
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
                            <Text style={styles.passwordHeading}>Mobile Number</Text>
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
                                        style={styles.inputPassword}
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
                            <Text style={styles.passwordHeading}>Email</Text>
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
                                        style={styles.inputPassword}
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
    mainCont: {
        flex: 1,
        height: hp(100),
        width: wp(100),
        backgroundColor: 'white',
    },
    secondaryCont: {
        paddingVertical: hp(2),
        width: wp(90),
        alignSelf: 'center',
    },
    heading: {
        fontFamily: 'Poppins-ExtraBold',
        color: 'rgba(0, 0, 0, 1)',
        fontSize: RFValue(28),
    },
    signUpHeading: {
        color: "rgba(0, 0, 0, 1)",
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        fontSize: RFValue(16),
    },
    headingviewww: {
        width: wp(90),
        height: hp(12),
    },
    detailsCont: {
        width: wp(90),
        height: hp(85),
        justifyContent: 'space-between',
    },

    passwordHeading: {
        fontFamily: 'Poppins-Regular',
        color: "rgba(66, 74, 84, 1)",
        fontWeight: '600',
        fontSize: RFValue(17),
    },
    inputPassword: {
        fontSize: RFValue(14),
        color: '#000',
        backgroundColor: 'rgba(244, 244, 244, 1)',
        borderRadius: 7,
    },
    errorText: {
        color: 'red',
        fontSize: RFValue(12),
        fontWeight: 'bold'
    },
});