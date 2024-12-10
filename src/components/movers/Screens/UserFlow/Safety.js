import { StyleSheet, Text, View, FlatList, Pressable, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../CustomComponents/CustomHeader'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomButton from '../../CustomComponents/CustomButton';
import Safetymark from '../../../../utils/safetymark.png'
import CustomIcon from '../../CustomComponents/CustomIcon';

export default function Safety() {
    const navigation = useNavigation();
    const safetylist = [
        { id: 1, iconleft: 'call-outline', iconleftType: 'ionicons', mainheading: 'Ambulance', iconright: 'chevron-right', iconrightType: 'evilIcons' },
        { id: 2, iconleft: 'call-outline', iconleftType: 'ionicons', mainheading: 'Police', iconright: 'chevron-right', iconrightType: 'evilIcons' },
        { id: 3, iconleft: 'shield-checkmark-outline', iconleftType: 'ionicons', mainheading: 'Safety Tips', iconright: 'chevron-right', iconrightType: 'evilIcons' },
        { id: 4, iconleft: 'call-outline', iconleftType: 'ionicons', mainheading: 'Fire extinguisher call', iconright: 'chevron-right', iconrightType: 'evilIcons' },
        { id: 5, iconleft: 'call-outline', iconleftType: 'ionicons', mainheading: 'Admin Call', iconright: 'chevron-right', iconrightType: 'evilIcons' },
    ]
    const renderItem = ({ item }) => (
        <View style={styles.safetydatamaincont}>
            <View style={styles.leftcont}>
                <CustomIcon type={item.iconleftType} icon={item.iconleft} size={RFValue(28)} color={'#000'} />
            </View>
            <View style={styles.midcont}>
                <Text style={styles.midtext} >{item.mainheading}</Text>
            </View>
            <View style={styles.rightcont}>
                <CustomIcon type={item.iconrightType} icon={item.iconright} size={RFValue(40)} color={'#000'} />
            </View>
        </View>
    )
    return (
        <View style={styles.maincont}>
            <CustomHeader title={'Safety'}   onBackPress={() => navigation.goBack()} />
            <View style={styles.safetyiconcont}>
                <Image source={Safetymark} style={styles.safetyicon} />
            </View>
            <View style={styles.mainheadingcontainer}>
                <Text style={styles.headingmaintext}>Who do you want to contact?</Text>
            </View>

            <View style={styles.listsafety}>
                <FlatList
                    data={safetylist}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    maincont: {
        flex: 1
    },
    safetyiconcont: {
        height: hp(30),
        width: wp(100),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'yellow'
    },
    safetyicon: {
        width: wp(35),
        height: hp(35),
        resizeMode: 'contain',
    },
    mainheadingcontainer: {
        height: hp(10),
        width: wp(100),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'pink'
    },
    listsafety: {
        height: hp(45),
        width: wp(100),
        // backgroundColor:'skyblue'
    },
    headingmaintext: {
        color: '#424A54',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(16)
    },
    safetydatamaincont: {
        height: hp(8),
        width: wp(100),
        // backgroundColor:'aqua',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(2),
        paddingVertical: wp(5)
    },
    leftcont: {
        height: hp(6),
        width: hp(6),
        backgroundColor: '#E8E7E7',
        borderRadius: RFValue(100),
        justifyContent: 'center',
        alignItems: 'center'
    },
    midcont: {
        height: hp(7),
        width: wp(60),
        // backgroundColor:'red',
        justifyContent: 'center'
    },
    rightcont: {
        height: hp(7),
        width: wp(8),
        // backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    midtext: {
        color: '#424A54',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(18)
    }
})