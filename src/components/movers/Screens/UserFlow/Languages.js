import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomHeader from '../../CustomComponents/CustomHeader';
import { languageList } from '../../../../utils/constants/Data';

export default function Languages() {
    const navigation = useNavigation();


    const renderItem = ({ item }) => (
        <View style={styles.Languagelistcont}>
            <Pressable onPress={() => navigation.goBack()}>
                <Text style={styles.text}>{item.heading}</Text>
                <Text style={styles.subText} >{item.subheading}</Text>
            </Pressable>
        </View>
    )

    return (
        <View style={styles.mainCont}>
            <CustomHeader title={'Languages'}
                onBackPress={() => navigation.goBack()} />
            <FlatList
                data={languageList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        // backgroundColor:'red'
    },
    Languagelistcont: {
        height: hp(10),
        marginBottom: hp(1),
        justifyContent: "center",
        // backgroundColor: 'yellow',
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(18),
        color: '#424A54',
    },
    subText: {
        fontFamily: 'Poppins-SemiMedium',
        fontSize: RFValue(15),
        color: '#424A54',
    }
})