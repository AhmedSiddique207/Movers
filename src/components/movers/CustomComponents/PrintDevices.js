import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomHeader from './CustomHeader'
import CustomInput from './CustomInput'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PrintInput } from '../../../utils/constants/Data';
import CustomButton from './CustomButton';

export default function PrintDevices() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={styles.flatlistCont}>
            <View>
                <CustomInput label={item.label} multiline={item.isMultiline === 'yes'} />
            </View>

        </View>
    )

    return (
        <View style={styles.mainCont}>
            <CustomHeader title={'New Print'} onBackPress={() => navigation.goBack()} />
            <View style={styles.inputCont}>
                <FlatList
                    data={PrintInput}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
                <View style={styles.btnCont}>
                    <CustomButton title={'Print'} style={{ backgroundColor: 'black', color: '#fff' }} onPress={''} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        backgroundColor: '#fff',

    },
    inputCont: {
        paddingHorizontal: wp(4),
        height: hp(83.5),
        alignItems: 'center',
    },
    btnCont: {
        width: wp(90)
    }
})