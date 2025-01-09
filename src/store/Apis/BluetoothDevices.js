import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CustomButton from '../../components/movers/CustomComponents/CustomButton'
import CustomHeader from '../../components/movers/CustomComponents/CustomHeader'
import CustomIcon from '../../components/movers/CustomComponents/CustomIcon'
import CustomBottomSheet from '../../components/movers/CustomComponents/CustomBottomSheet'
import { BluetoothDevicesNames } from '../../utils/constants/Data'

export default function BluetoothDevices() {

    const renderItem = ({ item }) => (
        <View>
            <View style={styles.devicesItemsCont}>
                <View style={styles.leftCont}>
                    <Text style={styles.deviceName}>{item.deviceName}</Text>
                    <Text style={styles.deviceId}>{item.deviceId}</Text>
                </View>

                <View style={styles.rightCont}>
                    <Text style={styles.deviceTime}>{item.duration}</Text>

                </View>
            </View>
            <View style={styles.hrCont}></View>
        </View>
    )

    return (
        <View style={styles.mainCont}>
            <View style={styles.questionCont}>
                <CustomIcon
                    type={'octicons'} icon={'question'} size={RFValue(25)} color={'#686868'} />
            </View>

            <View style={styles.headingCont}>
                <Text style={styles.headingHome}>Home</Text>
            </View>

            <View style={styles.btnCont}>
                <View>
                    <CustomButton title={'Create New Print'} style={{ backgroundColor: 'black', color: '#fff', }} onPress={''} />
                </View>
                <View style={styles.btnScanCont}>
                    <CustomButton title={'Scan New Device'} style={{ backgroundColor: '#fff', color: '#000', }} onPress={''} />
                </View>
            </View>

            <View style={styles.devicesHeadingCont}>
                <Text style={styles.headingLatest}>Latest Devices</Text>
                <Text style={styles.headingView}>View all</Text>
            </View>

            <View style={styles.devicesCont}>
          
                    <FlatList
                        data={BluetoothDevicesNames}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        paddingHorizontal: wp(4),
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    questionCont: {
        width: wp(90),
        height: hp(5),
        alignItems: 'flex-end',
    },
    headingCont: {
        width: wp(90),
        height: hp(10),
    },
    btnCont: {
        width: wp(90),
        height: hp(18),
        justifyContent: 'space-evenly',
        paddingHorizontal: wp(4),
    },
    devicesHeadingCont: {
        width: wp(90),
        height: hp(12),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',


    },
    devicesCont: {
        width: wp(90),
        // height: hp(54),
        flex: 1,
        marginBottom:hp(0.5),
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: RFValue(10),
        elevation: RFValue(50),
        borderColor: 'white'

    },

    headingHome: {
        fontSize: RFValue(25),
        color: 'black',
        textTransform: 'uppercase'
    },
    headingLatest: {
        fontSize: RFValue(20),
        color: 'gray',
        fontWeight: '500',
        textTransform: 'capitalize'
    },
    btnScanCont: {
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),

    },
    headingView: {
        fontSize: RFValue(15),
        color: 'lightgray',
        textTransform: 'capitalize'
    },
    //render items styles

    devicesItemsCont: {
        width: wp(90),
        height: hp(12),
        paddingHorizontal: wp(3),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    deviceName: {
        fontSize: RFValue(18),
        color: 'gray',
        fontWeight: '500',
        textTransform: 'capitalize'
    },
    deviceId: {
        fontSize: RFValue(14),
        color: 'lightgray',
        fontFamily: 'Poppins-SemiMedium'
    },
    deviceTime: {
        fontSize: RFValue(14),
        color: '#686868',
        fontFamily: 'Poppins-SemiMedium'
    },
    hrCont: {
        borderWidth: wp(0.1),
        color: 'lightgray',
        width: wp(85),
        alignSelf: 'center'
    }
})