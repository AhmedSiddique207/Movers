import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import CustomButton from './CustomButton';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Forget() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.mainview}
      behavior={'height'}
      keyboardVerticalOffset={ 0} 
    >
      <View style={styles.secondaryview}>
        <View>
          <Text style={styles.heading}>Enter Your Email</Text>
        </View>

        <View style={styles.detailsview}>
          <View style={styles.email}>
            <Text style={styles.emailheading}>Email</Text>
            <TextInput 
              style={styles.inputemail} 
              placeholder="Enter Email" 
              placeholderTextColor="#000" 
            />
          </View>
        </View>

        <View style={styles.loginbuttonview}>
          <CustomButton title={'Next'} onPress={() => navigation.navigate('Forgetotp')} />
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
  loginbuttonview: {
    position: 'absolute',
    bottom: 0,                
    left: 0,
    right: 0,
    justifyContent: 'center',  
    // alignItems: 'center',
    marginBottom: 40,   
    width:'100%',
    // backgroundColor:'red'        
},
});
