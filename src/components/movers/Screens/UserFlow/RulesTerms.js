import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { version } from 'react-native/package.json';
import CustomHeader from '../../CustomComponents/CustomHeader';
import CustomIcon from '../../CustomComponents/CustomIcon';
import { ruleslist } from '../../../../utils/constants/Data';
export default function RulesTerms() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (

        <View style={styles.dataCont}>
            <View style={styles.rowCont}>
                <View style={styles.leftCont}>
                    <Text style={styles.text}>{item.heading}</Text>
                    <Text style={styles.versionText}>{item.version}</Text>
                </View>
                <View style={styles.rightCont}>
                    <CustomIcon type={item.icontype} icon={item.iconname} size={RFValue(28)} color={'#000'} />
                </View>
            </View>
        </View>

    )
    return (
        <View style={styles.mainCont}>
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
    mainCont: {
        flex: 1
    },
    dataCont: {
        width: wp(100),
        height: hp(9),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),


    },
    rowCont: {
        flexDirection: 'row',
    },
    leftCont: {
        width: wp(88),
        height: hp(9),

    },
    rightCont: {
        width: wp(10),
        height: hp(9),
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(18),
        color: '#424A54',
    },
    versionText: {
        fontFamily: 'Poppins-SemiMedium',
        fontSize: RFValue(15),
        color: '#424A54',
    }

})