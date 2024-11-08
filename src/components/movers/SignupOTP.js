import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import CustomButton from './Button';
import { useNavigation } from '@react-navigation/native';
import OtpInputs from 'react-native-otp-inputs';


export default function SignupOTP() {
    const navigation = useNavigation();
    const [counter, setCounter] = useState(60);
    const [isResendVisible, setIsResendVisible] = useState(false);

    const handlePress = () => {
        Alert.alert('Dear User You are Registered!');
        navigation.navigate('Login');
    };

    useEffect(() => {
        if (counter > 0) {
            const timer = setTimeout(() => setCounter(counter - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setIsResendVisible(true);
        }
    }, [counter]);

    const handleResendOTP = () => {
        setCounter(60);
        setIsResendVisible(false);
        console.log('Resend OTP triggered');
    };

    return (
        <KeyboardAvoidingView
            style={styles.mainview}
            behavior={'height'}
            keyboardVerticalOffset={0}
        >
            <View style={styles.secondaryview}>
                <View>
                    <Text style={styles.heading}>Verification</Text>
                </View>
                <View style={styles.verificationtextview}>
                    <Text style={styles.verificationtext}>
                        Enter verification code we just sent
                        <Text style={styles.verificationtextremain}> you on your email address.</Text>
                    </Text>
                </View>

                <View style={styles.otpmainview}>
                    <OtpInputs numberOfInputs={4} style={styles.otp} inputStyles={styles.otpInput} />
                </View>

                {isResendVisible ? (
                    <TouchableOpacity onPress={handleResendOTP}>
                        <Text style={styles.resendText}>Resend OTP</Text>
                    </TouchableOpacity>
                ) : (
                    <Text style={styles.timerText}>Code Expire in <Text style={styles.countercount}> {counter}s </Text></Text>
                )}

                <View style={styles.loginbuttonview}>
                    <CustomButton title={'Next'} onPress={handlePress} />
                </View>
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
    verificationtextview: {
        height: 80,
    },
    verificationtext: {
        color: "rgba(0, 0, 0, 1)",
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        marginTop: 22,
        fontSize: RFValue(16),
        lineHeight: 24,
    },
    verificationtextremain: {
        alignContent: 'space-between',
    },
 
    timerText: {
        marginTop: 20,
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
    countercount: {
        color: 'rgba(45, 137, 207, 1)'
    },
    resendText: {
        marginTop: 20,
        fontSize: 16,
        color: 'rgba(45, 137, 207, 1)',
        textAlign: 'center',
        // textDecorationLine: 'underline',
    },
    loginbuttonview: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        marginBottom: 40,
        width: '100%',
    },
    otp: {
        justifyContent: 'center', 
        flexDirection: 'row',
        marginTop:20,
        width: '80%', 
        alignSelf: 'center', 
      },
      otpInput: {
        width:70, 
        height:70,
        borderRadius: 10,
        borderWidth: 1, 
        borderColor: 'rgba(0, 0, 0, 1)',
        textAlign: 'center',
        justifyContent:'center',
        fontSize: 30, 
        marginHorizontal: 10,
        color: '#333',
        backgroundColor: '#f9f9f9', 
        padding: 10, 
        fontFamily:'Poppins-SemiBold'
      },
  

});
