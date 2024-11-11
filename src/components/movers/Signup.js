import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from './Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { signupSuccess, signupFailure } from '../../store/LoginSignupSlice';

export default function Signup() {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const { error } = useSelector((state) => state.auth);

    const onSubmit = () => {
        if (fullName && email && password && confirmPassword && mobileNumber) {
            if (password === confirmPassword) {
                dispatch(signupSuccess({ email, password, fullName, mobileNumber }));
                Alert.alert('Signup successful!');
                navigation.navigate('Login');
            } else {
                Alert.alert('Passwords do not match!');
                dispatch(signupFailure('Passwords do not match!'));
            }
        } else {
            Alert.alert('Please fill in all fields.');
            dispatch(signupFailure('Please fill in all fields.'));
        }
    };

    useEffect(() => {
        if (error) {
            Alert.alert('Signup Error', error);
        }
    }, [error]);

    return (
        <KeyboardAvoidingView style={styles.mainview}>
            <View style={styles.secondaryview}>
                <View>
                    <Text style={styles.heading}>Welcome,</Text>
                    <Text style={styles.signinheading}>Sign up to continue</Text>
                </View>

                <View style={styles.detailsview}>
                    <View style={styles.email}>
                        <Text style={styles.emailheading}>Full Name</Text>
                        <TextInput
                            style={styles.inputemail}
                            placeholder="Enter Full Name"
                            placeholderTextColor="#9A9A9A"
                            value={fullName}
                            onChangeText={setFullName}
                        />
                    </View>

                    <View style={styles.password}>
                        <Text style={styles.passwordheading}>Password</Text>
                        <TextInput
                            style={styles.inputpassword}
                            placeholder="Enter Password"
                            secureTextEntry
                            placeholderTextColor="#9A9A9A"
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <View style={styles.password}>
                        <Text style={styles.passwordheading}>Confirm Password</Text>
                        <TextInput
                            style={styles.inputpassword}
                            placeholder="Confirm Password"
                            secureTextEntry
                            placeholderTextColor="#9A9A9A"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </View>

                    <View style={styles.password}>
                        <Text style={styles.passwordheading}>Mobile Number</Text>
                        <TextInput
                            style={styles.inputpassword}
                            placeholder="+12458367271123"
                            placeholderTextColor="#9A9A9A"
                            value={mobileNumber}
                            onChangeText={setMobileNumber}
                        />
                    </View>

                    <View style={styles.email}>
                        <Text style={styles.emailheading}>Email</Text>
                        <TextInput
                            style={styles.inputemail}
                            placeholder="Enter Email"
                            placeholderTextColor="#9A9A9A"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.loginbuttonview}>
                <CustomButton title={'Next'} onPress={() => navigation.navigate('SignupOTP')} />
            </View>
            <View style={styles.loginbuttonview}>
                <CustomButton title={'Signup Emergency'} onPress={onSubmit} />
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
    detailsview: {
        width: RFValue(310),
        height: RFValue(195.7),
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
        marginTop: 12,
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
        marginTop: 12,
        paddingLeft: 10,
    },
    loginbuttonview: {
        justifyContent: 'center',
        marginBottom: 70,
        marginLeft: 20,
        marginRight: 20,
    },
});
