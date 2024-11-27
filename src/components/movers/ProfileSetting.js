import { Image, StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import React from 'react';
import CustomHeader from './CustomHeader';
import { useNavigation } from '@react-navigation/native';
import userprofileicon from '../../utils/userprofileicon.png';
import edit from '../../utils/edit.png';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomButton from './CustomButton';

export default function ProfileSetting() {
  const navigation = useNavigation();

  return (
    <View style={styles.maincontainer}>
      <CustomHeader
        title={'Profile Settings'}
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.secondarycontainer}>

        <View style={styles.profileiconview}>
          <Pressable onPress={()=>{Alert.alert('Unable to view your Profile Picture.')}}>
          <Image source={userprofileicon} style={styles.icon} />
          </Pressable>
          <View style={styles.editIconContainer}>
          <Pressable onPress={()=>{Alert.alert('Unable to apply Profile Picture.')}}>
            <Image source={edit} style={styles.editIcon} />
          </Pressable>
          </View>
        </View>

        <View style={styles.userdetailsview}>
          <View style={styles.firstname}>
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.field} placeholder="William " placeholderTextColor="#9A9A9A" />
          </View>

          <View style={styles.lastname}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.field} placeholder="Wordsworth" placeholderTextColor="#9A9A9A" />
          </View>

          <View style={styles.location}>
            <Text style={styles.label}>Location</Text>
            <TextInput style={styles.field} placeholder="Saudia, PO Box 24724, Saudi Arabia." placeholderTextColor="#9A9A9A" />
          </View>
        </View>

        <View style={styles.buttoncontainer} >
          <CustomButton title={'Update'}  />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  secondarycontainer: {
    width: wp(90),
    height: hp(90),
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  profileiconview: {
    height: hp(30),
    width: wp(90),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'yellow'
  },
  icon: {
    width: wp(40),
    height: hp(40),
    resizeMode: 'contain',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: hp(5), 
    right: wp(25), 
    backgroundColor: '#2D89CF',
    borderRadius: wp(5),
    borderColor:"#fff",
    borderWidth:3,
    width: wp(10),
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, 
  },
  editIcon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
  },
  userdetailsview: {
    height: hp(33),
    width: wp(90),
    justifyContent: 'space-between',
    // backgroundColor:'pink'
  },
  buttoncontainer: {
    height: hp(25),
    width: wp(90),
    justifyContent: 'flex-end',
    // backgroundColor:'skyblue'
  },
  label: {
    fontFamily: 'Poppins-Regular',
    color: 'rgba(66, 74, 84, 1)',
    fontSize: RFValue(17),
  },
  field: {
    fontSize: RFValue(14),
    color: '#000',
    backgroundColor: 'rgba(244, 244, 244, 1)',
    borderRadius: 7,
  },
});
