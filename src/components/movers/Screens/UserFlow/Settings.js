import { StyleSheet, Text, View, FlatList, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../CustomComponents/CustomHeader'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomButton from '../../CustomComponents/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import Icontwo from 'react-native-vector-icons/EvilIcons';
import { logout, deleteAccount } from '../../../../store/LoginSignupSlice';
import CustomModal from '../../CustomComponents/CustomModal';

export default function Settings() {
    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalTitle, setModalTitle] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const { error, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const handlelogout = () => {
        dispatch(logout())
        navigation.navigate('Login')
    }

    const handledelete = () => {
        console.log('Deleting account');
        dispatch(deleteAccount())
        navigation.navigate('Login')
    }

    const handleModal = (item) => {
        setModalTitle(item.modaltitle)
        setSelectedItem(item);
        setModalVisible(true)
    }
    const settingList = [
        { id: 1, mainheading: 'Phone Number', secondaryheading: user?.mobileNumber, icon: 'chevron-right',  type: 'modal', modaltitle: 'Do you want to use a new phone number?' },
        { id: 2, mainheading: 'Language', secondaryheading: 'Default', icon: 'chevron-right',link:'Languages', type: 'navigate' },
        { id: 3, mainheading: 'Date and distance', icon: 'chevron-right', link: 'DateDistance', type: 'navigate' },
        { id: 4, mainheading: 'Navigator', icon: 'chevron-right', link: 'Navigator', type: 'navigate' },
        { id: 5, mainheading: 'Rules and terms', icon: 'chevron-right', link: 'RulesTerms', type: 'navigate' },
        { id: 6, mainheading: 'Delete account', icon: 'chevron-right', type: 'modal', modaltitle: "Are you sure you want to delete this account?" },

    ]
    const renderItem = ({ item }) => (
        <View style={styles.settingmaincont}>
            <View style={styles.settingdatacont}>
                <View style={styles.settingtextcont}>
                    <Text style={styles.settingmainheading}>{item.mainheading}</Text>
                    <Text style={styles.settingsecondaryheading}>{item.secondaryheading}</Text>
                </View>
                <View style={styles.settingiconcont}>
                    <Pressable
                        onPress={item.type === 'modal'
                            ? () => handleModal(item)
                            : () => navigation.navigate(item.link)}>
                        <Icontwo name={item.icon} size={RFValue(40)} color="#000" />
                    </Pressable>
                </View>
            </View>
        </View>
    )

    return (
        <View style={styles.maincont}>
            <CustomHeader title={'Settings'}
                onBackPress={() => navigation.goBack()} />

            <FlatList
                data={settingList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />


            <CustomModal
                visible={modalVisible}
                title={modalTitle}
                onClose={() => setModalVisible(false)}
                onPressYes={() => {
                    if (selectedItem?.mainheading === 'Delete account') {
                        handledelete();
                    } else {
                        setModalVisible(false);
                    }
                }}
            />
            <View style={styles.btncont}>
                <CustomButton title={'Logout'} onPress={handlelogout} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    maincont: {
        // flex:1
    },
    settingmaincont: {
        width: wp(100),
        height: hp(10),
        paddingHorizontal: wp(3),
        // backgroundColor:'yellow',
        justifyContent: 'center',
    },
    settingdatacont: {
        width: wp(97),
        height: hp(8),
        alignSelf: 'center',
        // backgroundColor:'red',
        flexDirection: 'row'
    },
    settingtextcont: {
        width: wp(87),
        height: hp(8),
        // backgroundColor: 'skyblue'
    },
    settingiconcont: {
        width: wp(10),
        height: hp(8),
        // backgroundColor: 'pink',
        // alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    settingmainheading: {
        color: '#424A54',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(18)
    },
    settingsecondaryheading: {
        color: '#424A54',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(14)
    },
    btncont: {
        width: wp(95),
        alignSelf: 'center',
        height: hp(29),
        justifyContent: 'flex-end'
    }
})

