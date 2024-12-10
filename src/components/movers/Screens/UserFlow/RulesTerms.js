import { StyleSheet, Text, View, FlatList, Pressable, Alert, Switch } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../CustomComponents/CustomHeader'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomIcon from '../../CustomComponents/CustomIcon';
export default function RulesTerms() {
    const navigation = useNavigation();
    const ruleslist = [
        { id: 1, heading: 'Service Rules' },
        { id: 2, heading: 'Terms & Condition', iconname: 'chevron-right', icontype: 'evilIcons' },
        { id: 3, heading: 'Privacy Policy', iconname: 'chevron-right', icontype: 'evilIcons' },
        { id: 4, heading: 'License', iconname: 'chevron-right', icontype: 'evilIcons' },
        { id: 5, heading: 'App Version', version: '5.0.98(767)', iconname: 'chevron-right', icontype: 'evilIcons' },
        { id: 6, heading: 'App Issues', iconname: 'chevron-right', icontype: 'evilIcons' },
        { id: 7, heading: 'About in MoveFaster', iconname: 'chevron-right', icontype: 'evilIcons' },
    ]
    const renderItem = ({ item }) => (

        <View style={styles.datacont}>
            <View style={styles.rowcont}>
                <View style={styles.leftcont}>
                    <Text style={styles.text}>{item.heading}</Text>
                    <Text style={styles.versiontext}>{item.version}</Text>
                </View>
                <View style={styles.rightcont}>
                    <CustomIcon type={item.icontype} icon={item.iconname} size={RFValue(28)} color={'#000'} />
                </View>
            </View>
        </View>

    )
    return (
        <View style={styles.maincont}>
            <CustomHeader title={'Rules & Terms'} onBackPress={() => navigation.goBack()} />
            <FlatList
                data={ruleslist}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    maincont: {
        flex: 1
    },
    datacont: {
        width: wp(100),
        height: hp(10),
        // backgroundColor: 'yellow',


    },
    rowcont: {
        paddingHorizontal: wp(2),
        paddingVertical: hp(1),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftcont: {
        width: wp(88),
        height: hp(9),
        // backgroundColor: 'skyblue'
    },
    rightcont: {
        width: wp(10),
        height: hp(9),
        // backgroundColor: 'pink'
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(18),
        color: '#424A54',
    },
    versiontext: {
        fontFamily: 'Poppins-SemiMedium',
        fontSize: RFValue(15),
        color: '#424A54',
    }

})