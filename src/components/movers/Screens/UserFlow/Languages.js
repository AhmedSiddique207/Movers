import { StyleSheet, Text, View, FlatList, Pressable, Alert, Switch } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../CustomComponents/CustomHeader'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

export default function Languages() {
    const navigation = useNavigation();
    const Languagesopt = [
        { id: 1, heading: 'English', subheading: 'English' },
        { id: 2, heading: 'French', subheading: 'Farncia' },
        { id: 3, heading: 'Urdu', subheading: 'Urdu' },
        { id: 4, heading: 'Hindi', subheading: 'Hindi' },
        { id: 5, heading: 'Filpino', subheading: 'Filpine' },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.Languagelistcont}>
            <Pressable onPress={() => navigation.goBack()}>
                <Text style={styles.text}>{item.heading}</Text>
                <Text style={styles.subtext} >{item.subheading}</Text>
            </Pressable>
        </View>
    )

    return (
        <View style={styles.maincont}>
            <CustomHeader title={'Languages'}
                onBackPress={() => navigation.goBack()} />
            <FlatList
                data={Languagesopt}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    maincont: {
        flex: 1,
        // backgroundColor:'red'
    },
    Languagelistcont: {
        height: hp(10),
        marginBottom:hp(1),
        justifyContent:"center",
        // backgroundColor: 'yellow',
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(18),
        color: '#424A54',
    },
    subtext: {
        fontFamily: 'Poppins-SemiMedium',
        fontSize: RFValue(15),
        color: '#424A54',
    }
})