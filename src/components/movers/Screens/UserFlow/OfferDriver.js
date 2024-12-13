import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomBottomSheet from '../../CustomComponents/CustomBottomSheet';
import CustomButton from '../../CustomComponents/CustomButton';

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
        <View style={styles.mainContainer}>

            <CustomBottomSheet sheetRef={bottomSheetRef} sheetHeight={hp(50)} title="Driver Offer">
                <View style={styles.bottomsheetContainer}>

                    <View style={styles.heading}>
                        <Text style={styles.titleTop}>Finding Drivers...</Text>
                        <Text style={styles.titleMid}>Your Offer</Text>
                    </View>

                    <View style={styles.pricingContainer}>
                        <View style={styles.pricingBtnDec}>
                            <CustomButton title={'-5'} style={{ backgroundColor: '#DFDFDF', color: '#282828' }} />
                        </View>
                        <View style={styles.pricingtitlecont}>
                            <Text style={styles.pricingTitle}>AED 359</Text>
                        </View>

                        <View style={styles.pricingBtnInc}>
                            <CustomButton title={'+5'} />
                        </View>
                    </View>

                    <View style={styles.buttonContainerSearch}>
                        <CustomButton title={'Search'} onPress={() => navigation.navigate('SelectDriver')} />
                    </View>

                    <View style={styles.buttonContainerCancel}>
                        <CustomButton title={'Cancel Request'} onPress={() => navigation.navigate('OrderFreight')} style={{ backgroundColor: '#CF372D' }} />
                    </View>

                    <View style={styles.acceptanceContainer}>
                        <View style={styles.acceptanceTextCont}>
                            <Text style={styles.textAcceptanceTitle}>Automatically accept the nearest driver for AED 219</Text>
                        </View>
                        <View style={styles.acceptanceToggle}>
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
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomsheetContainer: {
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
    titleTop: {
        fontSize: RFValue(17),
        fontFamily: 'Poppins-Bold',
        color: 'black',
    },
    titleMid: {
        fontSize: RFValue(15),
        fontFamily: 'Poppins-medium',
        color: 'black',
    },
    pricingContainer: {
        width: wp(90),
        height: hp(7),
        // backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    pricingTitle: {
        fontSize: RFValue(30),
        fontFamily: 'Poppins-Bold',
        color: 'black',
    },
    pricingBtnDec: {
        width: wp(20),
    },
    pricingBtnInc: {
        width: wp(20),
    },
    buttonContainerSearch: {
        width: wp(90),
        height: hp(7),
        // backgroundColor: 'pink'
    },
    buttonContainerCancel: {
        width: wp(90),
        height: hp(7),
        // backgroundColor: 'aqua'
    },
    acceptanceContainer: {
        width: wp(90),
        height: hp(7),
        // backgroundColor: 'orange',
        flexDirection: 'row'
    },
    acceptanceTextCont: {
        width: wp(80),
        // backgroundColor: 'blue',
        height: hp(7),
    },
    acceptanceToggle: {
        width: wp(10),
        height: hp(7),
        justifyContent: 'center',
        // backgroundColor: 'pink'
    },
    textAcceptanceTitle: {
        fontSize: RFValue(14),
        fontFamily: 'Poppins-Bold',
        color: 'black',
    },

});

export default OfferDriver;
