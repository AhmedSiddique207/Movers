import React, { useRef, useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Pressable, Switch, FlatList, Image, Alert } from 'react-native';
import CustomButton from '../../../CustomComponents/CustomButton';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

export default function SelectDriverBottomSheet() {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View style={styles.bottomsheetmaincont}>
            <View style={styles.topdragbar}></View>
            <View style={styles.bottomsheetcontainer}>


                <View style={styles.cancelbuttoncontainer}>
                    <CustomButton title={'Cancel Request'} onPress={() => navigation.navigate('OrderFreight')} style={{ backgroundColor: '#CF372D' }} />
                </View>

                <View style={styles.acceptancecontainer}>
                    <View style={styles.acceptanceText}>
                        <Text style={styles.textacceptancetitle}>Automatically accept the nearest driver for AED 219</Text>
                    </View>
                    <View style={styles.acceptancetoggle}>
                        <Switch
                            trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                            thumbColor={isEnabled ? "#2D89CF" : "#7D7D7D"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomsheetmaincont: {
        backgroundColor: '#fff',
        borderRadius: RFValue(10),
        elevation: RFValue(15),
        height: hp(23.5),
    },
    bottomsheetcontainer: {
        justifyContent: 'space-evenly',
        width: wp(90),
        height: hp(20),
        alignSelf: 'center',

    },
    topdragbar: {
        width: wp(1.5),
        height: hp(3.5),
        backgroundColor: '#000',
        borderRadius: RFValue(10),
        transform: [{ rotate: '90deg' }],
        alignSelf: 'center'
    },
    cancelbuttoncontainer: {
        width: wp(90),
        height: hp(7),
    },
    acceptancecontainer: {
        width: wp(90),
        height: hp(7),
        flexDirection: 'row'
    },
    acceptanceText: {
        width: wp(80),
        height: hp(7),
    },
    acceptancetoggle: {
        width: wp(10),
        height: hp(7),
    },
    textacceptancetitle: {
        fontSize: RFValue(14),
        fontFamily: 'Poppins-Bold',
        color: 'black',
    },
    acceptancetoggle: {
        justifyContent: 'center',
    },
})