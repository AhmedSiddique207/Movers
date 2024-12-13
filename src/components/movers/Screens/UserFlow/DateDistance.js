import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../store/LoginSignupSlice';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomHeader from '../../CustomComponents/CustomHeader';
import CustomIcon from '../../CustomComponents/CustomIcon';
import CustomModal from '../../CustomComponents/CustomModal';


export default function DateDistance() {
    const [modalVisible, setModalVisible] = useState(false);
    const [distance, setDistance] = useState('Kilometers')
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handlelogout = () => {
        dispatch(logout())
        navigation.navigate('Login')
    }
    return (
        <View style={styles.mainCont}>
            <CustomHeader title={'Date and Distance'}
                onBackPress={() => navigation.goBack()} />
            <View style={styles.topCont}>
                <View style={styles.leftCont}>
                    <Text style={styles.text} >24-Hour Time</Text>
                </View>
                <View style={styles.rightCont}>
                    <Switch
                        trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                        thumbColor={isEnabled ? "#2D89CF" : "#7D7D7D"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <View style={styles.midCont}>
                <Text style={styles.text} >Distance</Text>
                <Pressable onPress={setModalVisible}>
                    <Text style={styles.distanceUnitText} >{distance}</Text>
                </Pressable>

                {/* render on click modal start*/}

                <CustomModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    modalStyle={styles.ModalCont}
                >
                    <View style={styles.modalTop}>
                        <Text style={styles.modalText}>Distances</Text>
                    </View>
                    <View style={styles.modalMid}>
                        <Pressable
                            onPress={() => { setDistance('Miles'), setModalVisible(false) }}
                            style={styles.radioBtnCont}
                        >
                            <CustomIcon
                                type={'ionicons'} disabled icon={distance === 'Miles' ? 'radio-button-on-sharp' : 'radio-button-off-sharp'} size={RFValue(24)} color={'#2D89CF'} />
                            <View style={styles.distanceTextContainer}>
                                <Text style={styles.distanceText}>Miles</Text>
                            </View>
                        </Pressable>




                        <Pressable
                            onPress={() => { setDistance('Kilometers'), setModalVisible(false) }}
                            style={styles.radioBtnCont}

                        >
                            <CustomIcon
                                type={'ionicons'} disabled icon={distance === 'Kilometers' ? 'radio-button-on-sharp' : 'radio-button-off-sharp'} size={RFValue(24)} color={'#2D89CF'} />
                            <View style={styles.distanceTextContainer}>
                                <Text style={styles.distanceText}>Kilometers</Text>
                            </View>
                        </Pressable>

                    </View>
                    <View style={styles.modalBottom}>
                        <View style={styles.modalBtn}>
                            <CustomButton
                                title="Cancel"
                                onPress={() => setModalVisible(false)}
                                style={{ backgroundColor: '#2D89CF', color: '#fff', }}
                            />
                        </View>
                    </View>
                </CustomModal>


                {/* render on click modal end*/}

            </View>
            <View style={styles.bottomCont}>
                <CustomButton title={'Logout'} onPress={handlelogout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCont: {
        flex: 1
    },
    topCont: {
        width: wp(100),
        height: hp(8),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        flexDirection: 'row'
    },
    midCont: {
        width: wp(100),
        height: hp(10),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        justifyContent: 'center',
    },
    leftCont: {
        width: wp(86),
        height: hp(8),
    },
    rightCont: {
        width: wp(11),
        height: hp(8),
    },
    text: {
        color: '#424A54',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(18)
    },
    distanceUnitText: {
        color: '#2D89CF',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(16)
    },
    bottomCont: {
        width: wp(95),
        alignSelf: 'center',
        height: hp(71),
        justifyContent: 'flex-end',
    },
    mainHeadingCont: {
        height: hp(6),
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        fontSize: RFValue(18),
        color: '#000',
        fontFamily: 'Poppins-SemiBold'
    },
    radioBtnCont: {
        flexDirection: "row",
        width: wp(33),
    },

    modalDistanceCont: {
        height: hp(6),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    distanceTextContainer: {
        width: wp(25),
        height: hp(4),
        justifyContent: 'space-evenly',
    },
    distanceText: {
        color: '#000',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(15),
        paddingHorizontal: wp(0.5)

    },

    modalTop: {
        height: hp(6),
        width: wp(78),
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalMid: {
        height: hp(6),
        width: wp(78),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    modalBottom:
    {
        height: hp(7),
        width: wp(78),
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBtn: {
        width: wp(70),
        justifyContent: 'center',
    },
    ModalCont: {
        width: wp(85),
        height: hp(26),
        justifyContent: 'space-between',
        paddingHorizontal: wp(3),
        paddingVertical: hp(2)
    }

})