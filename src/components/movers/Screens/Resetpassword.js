import { StyleSheet, Text, View, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from '../CustomComponents/CustomButton';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ResetPassword() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.mainview}
      behavior={'padding'}
      keyboardVerticalOffset={20}
    >
      <View style={styles.secondaryview}>
        <View>
          <Text style={styles.heading}>Reset Password,</Text>
        </View>

        <View style={styles.detailsview}>
          <View style={styles.email}>
            <Text style={styles.emailheading}>New Password</Text>
            <TextInput
              style={styles.inputemail}
              placeholder="New Password"
              secureTextEntry
              placeholderTextColor="#000"
            />
          </View>

          <View style={styles.password}>
            <Text style={styles.passwordheading}>Confirm Password</Text>
            <TextInput
              style={styles.inputpassword}
              placeholder="Confirm Password"
              secureTextEntry
              placeholderTextColor="#000"
            />
          </View>
        </View>
      <View style={styles.loginbuttonview}>
        <CustomButton title={'Change Password'} onPress={() => Alert.alert('Password Changed!')} />
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
  detailsview: {
    width: RFValue(310),
    marginTop: 20,
    flex: 1,
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
    marginBottom: 80,
  },
});

