// import { StyleSheet, Text, View, FlatList, Pressable, Alert, Switch } from 'react-native'
// import React, { useState } from 'react'
// import CustomHeader from '../../CustomComponents/CustomHeader'
// import { useNavigation } from '@react-navigation/native';
// import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { RFValue } from 'react-native-responsive-fontsize';
// import CustomButton from '../../CustomComponents/CustomButton';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../../../../store/LoginSignupSlice';
// import CustomModal from '../../CustomComponents/CustomModal';

// export default function DateDistance() {
//     const [isEnabled, setIsEnabled] = useState(false);
//     const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
//     const dispatch = useDispatch();
//     const navigation = useNavigation();
//     const handlelogout = () => {
//         dispatch(logout())
//         navigation.navigate('Login')
//     }
//     return (
//         <View style={styles.maincont}>
//             <CustomHeader title={'Date and Distance'}
//                 onBackPress={() => navigation.goBack()} />
//             <View style={styles.topcont}>
//                 <View style={styles.leftcont}>
//                     <Text style={styles.text} >24-Hour Time</Text>
//                 </View>
//                 <View style={styles.rightcont}>
//                     <Switch
//                         trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
//                         thumbColor={isEnabled ? "#2D89CF" : "#7D7D7D"}
//                         ios_backgroundColor="#3e3e3e"
//                         onValueChange={toggleSwitch}
//                         value={isEnabled}
//                     />
//                 </View>
//             </View>
//             <View style={styles.midcont}>
//                 <Text style={styles.text} >Distance</Text>
//                 <Pressable>
//                 <Text style={styles.distanceUnittext} >Kilometers</Text>
//                 </Pressable>
//             </View>
//             <View style={styles.bottomcont}>
//                 <CustomButton title={'Logout'} onPress={handlelogout} />
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     maincont: {
//         flex: 1
//     },
//     topcont: {
//         // backgroundColor:'yellow',
//         width: wp(100),
//         height: hp(8),
//         paddingHorizontal: wp(3),
//         paddingVertical: hp(2),
//         flexDirection: 'row'
//     },
//     midcont: {
//         width: wp(100),
//         height: hp(10),
//         paddingHorizontal: wp(3),
//         paddingVertical: hp(2),
//         justifyContent: 'center',
//         // backgroundColor:'purple'
//     },
//     leftcont: {
//         // backgroundColor:'skyblue',
//         width: wp(86),
//         height: hp(8),
//     },
//     rightcont: {
//         // backgroundColor:'pink',
//         width: wp(11),
//         height: hp(8),
//     },
//     text: {
//         color: '#424A54',
//         fontFamily: 'Poppins-Medium',
//         fontSize: RFValue(18)
//     },
//     distanceUnittext: {
//         color: '#2D89CF',
//         fontFamily: 'Poppins-Medium',
//         fontSize: RFValue(16)
//     },
//     bottomcont: {
//         width: wp(95),
//         alignSelf: 'center',
//         height: hp(71),
//         justifyContent: 'flex-end',
//     }

// })



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
import CustomModal from '../../CustomComponents/CustomModal';

export default function DateDistance() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
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
            <CustomHeader title={'Date and Distance'}
                onBackPress={() => navigation.goBack()} />
            <View style={styles.topcont}>
                <View style={styles.leftcont}>
                    <Text style={styles.text} >24-Hour Time</Text>
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
            <View style={styles.midcont}>
                <Text style={styles.text} >Distance</Text>
                <Pressable onPress={setModalVisible}>
                <Text style={styles.distanceUnittext} >Kilometers</Text>
                </Pressable>

{/* render on click modal start*/}
<CustomModal  visible={modalVisible} title={'Distances'} />
{/* render on click modal end*/}

            </View>
            <View style={styles.bottomcont}>
                <CustomButton title={'Logout'} onPress={handlelogout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincont: {
        flex: 1
    },
    topcont: {
        // backgroundColor:'yellow',
        width: wp(100),
        height: hp(8),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        flexDirection: 'row'
    },
    midcont: {
        width: wp(100),
        height: hp(10),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        justifyContent: 'center',
        // backgroundColor:'purple'
    },
    leftcont: {
        // backgroundColor:'skyblue',
        width: wp(86),
        height: hp(8),
    },
    rightcont: {
        // backgroundColor:'pink',
        width: wp(11),
        height: hp(8),
    },
    text: {
        color: '#424A54',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(18)
    },
    distanceUnittext: {
        color: '#2D89CF',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(16)
    },
    bottomcont: {
        width: wp(95),
        alignSelf: 'center',
        height: hp(71),
        justifyContent: 'flex-end',
    }

})