import React, { useRef, useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Pressable, Switch } from 'react-native';
import CustomBottomSheet from '../../CustomComponents/CustomBottomSheet';
import CustomButton from '../../CustomComponents/CustomButton';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const OfferDriver = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const bottomSheetRef = useRef(null);

    useEffect(() => {
        bottomSheetRef.current.open();
    }, []);

    const closeBottomSheet = () => {
        bottomSheetRef.current?.close();
    };

    return (
        <View style={styles.maincontainer}>

            <CustomBottomSheet sheetRef={bottomSheetRef} sheetHeight={hp(50)} title="Driver Offer">
                <View style={styles.bottomsheetcontainer}>

                    <View style={styles.heading}>
                        <Text style={styles.titletop}>Finding Drivers...</Text>
                        <Text style={styles.titlemid}>Your Offer</Text>
                    </View>

                    <View style={styles.pricingcontainer}>
                        <View style={styles.pricingbtndec}>
                            <CustomButton title={'-5'} style={{ backgroundColor: '#DFDFDF', color: '#282828' }} />
                        </View>
                        <View style={styles.pricingtitlecont}>
                            <Text style={styles.pricingtitle}>AED 359</Text>
                        </View>

                        <View style={styles.pricingbtninc}>
                            <CustomButton title={'+5'} />
                        </View>
                    </View>

                    <View style={styles.buttoncontainerOne}>
                        <CustomButton title={'Search'} onPress={() => navigation.navigate('SelectDriver')} />
                    </View>

                    <View style={styles.buttoncontainerTwo}>
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
            </CustomBottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomsheetcontainer: {
        width: wp(90),
        height: hp(45),
        // backgroundColor: 'red',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(90),
        height: hp(8),
        // backgroundColor: 'yellow'
    },
    titletop: {
        fontSize: RFValue(17),
        fontFamily: 'Poppins-Bold',
        color: 'black',
    },
    titlemid: {
        fontSize: RFValue(15),
        fontFamily: 'Poppins-medium',
        color: 'black',
    },
    pricingcontainer: {
        width: wp(90),
        height: hp(7),
        // backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    pricingtitlecont: {

    },
    pricingtitle: {
        fontSize: RFValue(30),
        fontFamily: 'Poppins-Bold',
        color: 'black',
    },
    pricingbtndec: {
        width: wp(20),
    },
    pricingbtninc: {
        width: wp(20),
    },
    buttoncontainerOne: {
        width: wp(90),
        height: hp(7),
        // backgroundColor: 'pink'
    },
    buttoncontainerTwo: {
        width: wp(90),
        height: hp(7),
        // backgroundColor: 'aqua'
    },
    acceptancecontainer: {
        width: wp(90),
        height: hp(7),
        // backgroundColor: 'orange',
        flexDirection: 'row'
    },
    acceptanceText: {
        width: wp(80),
        // backgroundColor: 'blue',
        height: hp(7),
    },
    acceptancetoggle: {
        width: wp(10),
        height: hp(7),
        // backgroundColor: 'pink'
    },
    textacceptancetitle: {
        fontSize: RFValue(14),
        fontFamily: 'Poppins-Bold',
        color: 'black',
    },
    acceptancetoggle: {
        justifyContent: 'center',
    }

});

export default OfferDriver;
