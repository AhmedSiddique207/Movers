import { StyleSheet, Text, View, FlatList, Pressable, Alert, Switch } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../CustomComponents/CustomHeader'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomButton from '../../CustomComponents/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../../store/LoginSignupSlice';

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
        <View style={styles.maincont}>
            <CustomHeader title={'Navigator'}
                onBackPress={() => navigation.goBack()} />
            <View style={styles.datacont}>
                <View style={styles.leftcont}>
                    <Text style={styles.text} >Use as my default navigator</Text>
                </View>
                <View style={styles.rightcont}>
                    <Switch
                        trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                        thumbColor={isEnabled ? "#2D89CF" : "#7D7D7D"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <View style={styles.btncont}>
                <CustomButton title={'Logout'} onPress={handlelogout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincont: {
        flex: 1
    },
    datacont: {
        // backgroundColor:'yellow',
        width: wp(100),
        height: hp(12),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row'
    },
    leftcont: {
        // backgroundColor:'skyblue',
        width: wp(86),
        height: hp(10),
    },
    rightcont: {
        // backgroundColor:'pink',
        width: wp(11),
        height: hp(10),
    },
    text: {
        color: '#424A54',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(18)
    },
    btncont: {
        width: wp(95),
        alignSelf: 'center',
        height: hp(77),
        justifyContent: 'flex-end',
    }

})