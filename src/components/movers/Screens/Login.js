import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from '../CustomComponents/CustomButton';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../../../store/LoginSignupSlice';
import { useForm, Controller } from 'react-hook-form';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Login() {
  const navigation = useNavigation();
  const { control, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const { error, user } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    const { fullName, email, password, mobileNumber } = data;

    if (user && email === user.email && password === user.password && fullName === user.fullName && mobileNumber === user.mobileNumber) {
      dispatch(loginSuccess({ email, password }));
      // Alert.alert('Login successful!');
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
    <View style={styles.mainCont}>
      <View style={styles.secondaryView}>
        <View style={styles.headingview}>
          <Text style={styles.heading}>Welcome,</Text>
          <Text style={styles.signinHeading}>Sign in to continue</Text>
        </View>

        <View style={styles.detailsCont}>

          <View style={styles.email}>
            <Text style={styles.label}>Full Name</Text>
            <Controller
              control={control}
              name="fullName"
              rules={{ required: 'Full name is required' }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.inputFeilds}
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
            <Text style={styles.label}>Email</Text>
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
                  style={styles.inputFeilds}
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
            <Text style={styles.label}>Password</Text>
            <Controller
              control={control}
              name="password"
              rules={{ required: 'Password is required' }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.inputFeilds}
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
            <Text style={styles.label}>Mobile Number</Text>
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
                  style={styles.inputFeilds}
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

          <View style={styles.forgetView}>
            <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
              <Text style={styles.forget}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginbuttonview}>
            <CustomButton title={'Log In'} onPress={handleSubmit(onSubmit)} />
          </View>
          <View style={styles.signupLinkCont}>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signupLink}>
                Don't have an account? <Text style={styles.signupBold}>Signup</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: 'white',

  },
  secondaryView: {
    height: hp(90),
    paddingVertical: hp(2),
    width: wp(90),
    alignSelf: 'center',
  },
  heading: {
    fontFamily: 'Poppins-ExtraBold',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: RFValue(28),
  },
  signinHeading: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: RFValue(16),
  },
  headingview: {
    width: wp(90),
    height: hp(12),
  },
  detailsCont: {
    width: wp(90),
    height: hp(73),
    justifyContent: 'space-between',
  },

  label: {
    fontFamily: 'Poppins-Regular',
    color: "rgba(66, 74, 84, 1)",
    fontWeight: '600',
    fontSize: RFValue(17),
  },
  inputFeilds: {
    fontSize: RFValue(14),
    color: '#000',
    backgroundColor: 'rgba(244, 244, 244, 1)',
    borderRadius: 7,
  },
  forgetView: {
    alignSelf: 'center'
  },
  signupLinkCont: {
    alignSelf: 'center'
  },
  forget: {
    fontFamily: 'Poppins-Regular',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: RFValue(13),
  },

  signupLink: {
    justifyContent: 'center',
    fontFamily: 'Poppins-Regular',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: RFValue(13),
  },
  signupBold: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(13),
  },
  errorText: {
    color: 'red',
    fontSize: RFValue(12),
    fontWeight: 'bold'
  },
});
