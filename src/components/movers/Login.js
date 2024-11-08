import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from './Button';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../../store/LoginSignupSlice';

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const { error, user } = useSelector((state) => state.auth);

  const onSubmit = () => {
    if (!email || !password || !mobileNumber || !fullName) {
      Alert.alert('Please fill in all fields.');
      dispatch(loginFailure('Please fill in all fields.'));
      return;
    }

    if (user && email === user.email && password === user.password && fullName === user.fullName && mobileNumber === user.mobileNumber) {
      dispatch(loginSuccess({ email, password }));
      Alert.alert('Login successful!');
      navigation.navigate('SelectCategory')
    } else {
      Alert.alert('Invalid Credentials.');
      dispatch(loginFailure('Invalid Crendentials.'));
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Login Error', error);
    }
  }, [error]);

  return (
    <View style={styles.mainview}>
      <View style={styles.secondaryview}>
        <View>
          <Text style={styles.heading}>Welcome,</Text>
          <Text style={styles.signinheading}>Sign in to continue</Text>
        </View>

        <View style={styles.detailsview}>

          <View style={styles.email}>
            <Text style={styles.emailheading}>Full Name</Text>
            <TextInput
              style={styles.inputemail}
              placeholder="Enter Full Name"
              placeholderTextColor="#000"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>


          <View style={styles.password}>
            <Text style={styles.passwordheading}>Email</Text>
            <TextInput
              style={styles.inputpassword}
              placeholder="Email"
              placeholderTextColor="#000"
              value={email}
              onChangeText={setEmail}
            />
          </View>



          <View style={styles.password}>
            <Text style={styles.passwordheading}>Password</Text>
            <TextInput
              style={styles.inputpassword}
              placeholder="Enter Password"
              secureTextEntry
              placeholderTextColor="#000"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.password}>
            <Text style={styles.passwordheading}>Mobile Number</Text>
            <TextInput
              style={styles.inputpassword}
              placeholder="+12458367271123"
              placeholderTextColor="#000"
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />
          </View>

          <View style={styles.forgetview}>
            <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
              <Text style={styles.forget}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginbuttonview}>
            <CustomButton title={'Log In'} onPress={onSubmit} />
          </View>
          <View style={styles.signuplinkview}>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signuplink}>
                Don't have an account? <Text style={styles.signupbold}>Signup</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
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
  forget: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Poppins',
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: 40,
    fontWeight: '400',
    fontSize: RFValue(13),
  },
  signuplinkview: {
    marginTop: 60
  },
  signuplink: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Poppins',
    color: 'rgba(0, 0, 0, 1)',
    // lineHeight: 140,
    fontWeight: '400',
    fontSize: RFValue(13),
  },
  signupbold: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: RFValue(13),
  },
});



