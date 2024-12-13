import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import edit from '../../../../utils/edit.png';
import userprofileicon from '../../../../utils/userprofileicon.png';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomHeader from '../../CustomComponents/CustomHeader';

export default function ProfileSetting() {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');

  const handlesubmit = () => {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Location:', location);
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        title={'Profile Settings'}
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.secondaryContainer}>
        <View style={styles.profileIconCont}>
          <Pressable onPress={() => { Alert.alert('Unable to view your Profile Picture.') }}>
            <Image source={userprofileicon} style={styles.icon} />
          </Pressable>
          <View style={styles.editIconContainer}>
            <Pressable onPress={() => { Alert.alert('Unable to apply Profile Picture.') }}>
              <Image source={edit} style={styles.editIcon} />
            </Pressable>
          </View>
        </View>

        <View style={styles.userDetailsCont}>
          <View style={styles.firstNameCont}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.field}
              placeholder="William"
              placeholderTextColor="#9A9A9A"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View style={styles.lastNameCont}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.field}
              placeholder="Wordsworth"
              placeholderTextColor="#9A9A9A"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <View style={styles.location}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.field}
              placeholder="Saudia, PO Box 24724, Saudi Arabia."
              placeholderTextColor="#9A9A9A"
              value={location}
              onChangeText={setLocation}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton title={'Update'} onPress={handlesubmit} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  secondaryContainer: {
    width: wp(90),
    height: hp(90),
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  profileIconCont: {
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
    borderColor: "#fff",
    borderWidth: 3,
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
  userDetailsCont: {
    height: hp(33),
    width: wp(90),
    justifyContent: 'space-between',
    // backgroundColor:'pink'
  },
  buttonContainer: {
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
