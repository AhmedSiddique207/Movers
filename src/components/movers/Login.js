import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from './Button';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../../store/LoginSignupSlice';
import { useForm, Controller } from 'react-hook-form';

export default function Login() {
  const navigation = useNavigation();
  const { control, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const { error, user } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    const { fullName, email, password, mobileNumber } = data;

    if (!email || !password || !mobileNumber || !fullName) {
      Alert.alert('Please fill in all fields.');
      dispatch(loginFailure('Please fill in all fields.'));
      return;
    }

    if (user && email === user.email && password === user.password && fullName === user.fullName && mobileNumber === user.mobileNumber) {
      dispatch(loginSuccess({ email, password }));
      Alert.alert('Login successful!');
      reset();
      navigation.navigate('SelectCategory');
    } else {
      Alert.alert('Invalid Credentials.');
      dispatch(loginFailure('Invalid Credentials.'));
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
            <Text style={styles.passwordheading}>Email</Text>
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Email is required',
                pattern: { 
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email'
                }
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.inputpassword}
                  placeholder="Email"
                  placeholderTextColor="#9A9A9A"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
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
            <Text style={styles.passwordheading}>Mobile Number</Text>
            <Controller
              control={control}
              name="mobileNumber"
              rules={{
                required: 'Mobile number is required',
                pattern: {
                  value: /^(\+92|0)[0-9]{10}$/,
                  message: 'Invalid phone number.',
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

          <View style={styles.forgetview}>
            <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
              <Text style={styles.forget}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginbuttonview}>
            <CustomButton title={'Log In'} onPress={handleSubmit(onSubmit)} />
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
    marginTop: 60,
  },
  signuplink: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Poppins',
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '400',
    fontSize: RFValue(13),
  },
  signupbold: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: RFValue(13),
  },
  errorText: {
    color: 'red',
    fontSize: RFValue(12),
    marginTop: 5,
    fontWeight:'bold'
  },
});
