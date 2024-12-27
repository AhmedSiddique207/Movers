import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomHeader from '../../CustomComponents/CustomHeader';
import CustomIcon from '../../CustomComponents/CustomIcon';
import { safetylist } from '../../../../utils/constants/Data';
import { Safetymark } from '../../../../utils/constants/Images';
export default function Safety() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={styles.safetyDataMainCont}>
            <View style={styles.leftCont}>
                <CustomIcon type={item.iconleftType} icon={item.iconleft} size={RFValue(28)} color={'#000'} />
            </View>
            <View style={styles.midCont}>
                <Text style={styles.midText} >{item.mainheading}</Text>
            </View>
            <View style={styles.rightCont}>
                <CustomIcon type={item.iconrightType} icon={item.iconright} size={RFValue(40)} color={'#000'} />
            </View>
        </View>
    )
    return (
        <View style={styles.mainCont}>
            <CustomHeader title={'Safety'} onBackPress={() => navigation.goBack()} />
            <View style={styles.safetyIconCont}>
                <Image source={Safetymark} style={styles.safetyIcon} />
            </View>
            <View style={styles.mainheadingContainer}>
                <Text style={styles.headingMainText}>Who do you want to contact?</Text>
            </View>

            <View style={styles.safetylist}>
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
    mainCont: {
        flex: 1
    },
    safetyIconCont: {
        height: hp(29.5),
        width: wp(100),
        alignItems: 'center',
        justifyContent: 'center',
    },
    safetyIcon: {
        width: wp(35),
        height: hp(35),
        resizeMode: 'contain',
    },
    mainheadingContainer: {
        height: hp(10),
        width: wp(100),
        alignItems: 'center',
        justifyContent: 'center',
    },
    safetylist: {
        height: hp(45),
        width: wp(100),
    },
    headingMainText: {
        color: '#424A54',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(16)
    },
    safetyDataMainCont: {
        height: hp(8.5),
        width: wp(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(2),
        paddingVertical: wp(5),
    },
    leftCont: {
        height: hp(6),
        width: hp(6),
        backgroundColor: '#E8E7E7',
        borderRadius: RFValue(100),
        justifyContent: 'center',
        alignItems: 'center'
    },
    midCont: {
        height: hp(7),
        width: wp(60),
        justifyContent: 'center'
    },
    rightCont: {
        height: hp(7),
        width: wp(8),
        justifyContent: 'center',
        alignItems: 'center'
    },
    midText: {
        color: '#424A54',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(18)
    }
})