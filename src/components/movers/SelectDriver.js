import React, { useRef, useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Pressable, Switch, FlatList, Image, Alert } from 'react-native';
import CustomBottomSheet from './CustomBottomSheet';
import CustomButton from './CustomButton';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import userprofileicon from '../../utils/userprofileicon.png'
import Iconrating from 'react-native-vector-icons/Octicons';

const SelectDriver = () => {

    const driveroffer = [
        { id: 1, icon: userprofileicon, name: 'Arfeen', time: '4 min', distance: '443M', rating: '4.9(13)', price: 359 },
        { id: 2, icon: userprofileicon, name: 'Jhon', time: '2 min', distance: '200M', rating: '4.6(10)', price: 200 },

    ]

    const renderItem = ({ item }) => (
        <View style={styles.drivercontainer}>
            <View style={styles.drivercard}>
                <View style={styles.driverCardTopCont}>
                    <View style={styles.driverCardTopleftCont}>
                        <Image source={item.icon} style={styles.icon} />
                    </View>

                    <View style={styles.driverCardTopmidCont}>
                        <View style={styles.nameview} >
                            <Text style={styles.drivernametext}>{item.name}</Text>
                            <View style={styles.ratingview}>
                                <Iconrating
                                    name={'star-fill'}
                                    size={20}
                                    color="#FF9B26"
                                    style={styles.starss}
                                />
                                <Text style={styles.ratingText}>  4.9 (13)</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.driverCardToprightCont}>
                        <View style={styles.timecont}>
                            <Text style={styles.texttime}>{item.time}</Text>
                        </View>
                        <View style={styles.distancecont}>
                            <Text style={styles.textdistance}>{item.distance}</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.drivercardbottomcont}>
                    <View style={styles.bottomleftcont}>
                        <View style={styles.bottomprice}>
                            <Text style={styles.pricetext}>AED {item.price}</Text>

                        </View>
                    </View>
                    <View style={styles.bottomrightcont}>
                        <View style={styles.bottombtn}>
                            <CustomButton title={'Accept'} onPress={() => {
                                console.log('accept button pressed')
                                Alert.alert('bhutto')
                            }} />

                        </View>
                    </View>
                </View>

            </View>
        </View>
    );



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
            <FlatList
                data={driveroffer}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />

            <CustomBottomSheet sheetRef={bottomSheetRef} sheetHeight={hp(25)} title="Select Offer">
                <View style={styles.bottomsheetcontainer}>



                    <View style={styles.cancelbuttoncontainer}>
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
    },
    bottomsheetcontainer: {
        width: wp(90),
        height: hp(20),
        alignSelf: 'center',
        justifyContent: 'space-evenly',

    },
    cancelbuttoncontainer: {
        width: wp(90),
        height: hp(7),
    },
    acceptancecontainer: {
        width: wp(90),
        height: hp(7),
        flexDirection: 'row'
    },
    acceptanceText: {
        width: wp(80),
        height: hp(7),
    },
    acceptancetoggle: {
        width: wp(10),
        height: hp(7),
    },
    textacceptancetitle: {
        fontSize: RFValue(14),
        fontFamily: 'Poppins-Bold',
        color: 'black',
    },
    acceptancetoggle: {
        justifyContent: 'center',
    },
    drivercontainer: {
        alignItems: 'center',

    },
    drivercard: {
        width: wp(95),
        height: hp(25),
        backgroundColor: '#fff',
        borderRadius: RFValue(10),
        marginVertical: hp(1.5),
        elevation: RFValue(5),
        paddingHorizontal: wp(2)
    },
    driverCardTopCont: {
        height: hp(15),
        flexDirection: 'row',
        // backgroundColor:'purple'
    },
    drivercardbottomcont: {
        height: hp(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'yellow'

    },
    driverCardTopleftCont: {
        width: wp(25),
        height: hp(17),
        alignItems: 'center',
    },
    driverCardTopmidCont: {
        width: wp(45),
        height: hp(15),
        justifyContent: 'center'
    },
    nameview: {
        paddingHorizontal: wp(1),
    },
    ratingview: {
        alignItems: 'flex-start',
        flexDirection: 'row'

    },
    ratingText: {
        color: '#2B2B2B',

    },
    driverCardToprightCont: {
        width: wp(25),
        height: hp(17),
        justifyContent: 'space-around',
        paddingVertical: hp(3),
    },
    bottomleftcont: {
        width: wp(35),
        height: hp(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomrightcont: {
        width: wp(35),
        height: hp(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottombtn: {
        width: wp(30),
        height: hp(8),
        justifyContent: 'center',
    },
    bottomprice: {
        width: wp(30),
        height: hp(8),
        justifyContent: 'center',
    },

    pricetext: {
        fontSize: RFValue(25),
        fontFamily: 'Poppins-SemiBold',
        color: '#000000'
    },
    drivernametext: {
        fontSize: RFValue(20),
        fontFamily: 'Poppins-SemiBold',
        color: '#000000'
    },
    icon: {
        width: wp(22.5),
        height: hp(14),
        resizeMode: 'contain'
    },
    starss: {
        transform: [{ rotate: '180deg' }]
    },
    texttime: {
        fontSize: RFValue(12.5),
        fontFamily: 'Poppins-Medium',
        color: '#2B2B2B',
        alignSelf: 'center',
    },
    textdistance: {
        fontSize: RFValue(12.5),
        fontFamily: 'Poppins-Medium',
        color: '#2B2B2B',
        alignSelf: 'center',
    }
});


export default SelectDriver;