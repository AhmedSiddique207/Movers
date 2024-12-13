import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../store/LoginSignupSlice';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomHeader from '../../CustomComponents/CustomHeader';

export default function Navigator() {
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
            <CustomHeader title={'Navigator'}
                onBackPress={() => navigation.goBack()} />
            <View style={styles.dataCont}>
                <View style={styles.leftCont}>
                    <Text style={styles.text} >Use as my default navigator</Text>
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
            <View style={styles.btnCont}>
                <CustomButton title={'Logout'} onPress={handlelogout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCont: {
        flex: 1
    },
    dataCont: {
        height: hp(10),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        flexDirection: 'row'
    },
    leftCont: {
        width: wp(86),
        height: hp(10),
    },
    rightCont: {
        width: wp(11),
        height: hp(10),
    },
    text: {
        color: '#424A54',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(18)
    },
    btnCont: {
        width: wp(95),
        alignSelf: 'center',
        height: hp(79),
        justifyContent: 'flex-end',
    }

})