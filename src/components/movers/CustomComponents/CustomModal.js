import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import ReactNativeModal from 'react-native-modal';

export default function CustomModal({ title, onClose, onPressYes, visible }) {
    return (
        <ReactNativeModal isVisible={visible}  backdropOpacity={0.4}>
            <View style={styles.maincont}>
                <View style={styles.datacont} >
                    <View style={styles.modaltextcont}>
                        <Text style={styles.title} numberOfLines={2} >{title}</Text>
                    </View>
                    <View style={styles.modalbtncont}>
                        <View style={styles.singlebtnleftcont}>
                            <CustomButton title={'Yes'} style={{ backgroundColor: '#FFFFFF', color: '#000000', }} onPress={onPressYes} />
                        </View>
                        <View style={styles.singlebtnrightcont}>
                            <CustomButton title={'No'} onPress={onClose} />
                        </View>
                    </View>
                </View>
            </View>
        </ReactNativeModal>
    )
}

const styles = StyleSheet.create({
    maincont: {
        width: wp(80),
        height: hp(25),
        borderRadius: RFValue(10),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    datacont: {
        width: wp(60),
        height: hp(20),
        // backgroundColor:'yellow',
        alignSelf: 'center'
    },
    modaltextcont: {
        width: wp(60),
        height: hp(10),
        // backgroundColor:'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalbtncont: {
        width: wp(60),
        height: hp(10),
        // backgroundColor:'skyblue',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: "#000000",
        fontFamily: 'Poppins-SemiBold',
        fontSize: RFValue(16),


    },
    singlebtnleftcont: {
        width: wp(25),
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
    },
    singlebtnrightcont: {
        width: wp(25),
    }
})