import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../../CustomComponents/CustomHeader';
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
    const [modalVisible, setModalVisible] = useState(false);

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigation.navigate('Login');
    };

    const handleDeleteAccount = () => {
        dispatch(deleteAccount());
        navigation.navigate('Login');
    };

    const handleModal = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const settingList = [
        { id: 1, mainheading: 'Phone Number', secondaryheading: user?.mobileNumber, icon: 'chevron-right', type: 'modal' },
        { id: 2, mainheading: 'Language', secondaryheading: 'Default', icon: 'chevron-right', link: 'Languages', type: 'navigate' },
        { id: 3, mainheading: 'Date and distance', icon: 'chevron-right', link: 'DateDistance', type: 'navigate' },
        { id: 4, mainheading: 'Navigator', icon: 'chevron-right', link: 'Navigator', type: 'navigate' },
        { id: 5, mainheading: 'Rules and terms', icon: 'chevron-right', link: 'RulesTerms', type: 'navigate' },
        { id: 6, mainheading: 'Delete account', icon: 'chevron-right', type: 'modal' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.settingMainContainer}>
            <View style={styles.settingDataContainer}>
                <View style={styles.settingTextContainer}>
                    <Text style={styles.settingMainHeading}>{item.mainheading}</Text>
                    <Text style={styles.settingSecondaryHeading}>{item.secondaryheading}</Text>
                </View>
                <View style={styles.settingIconContainer}>
                    <Pressable
                        onPress={item.type === 'modal'
                            ? () => handleModal(item)
                            : () => navigation.navigate(item.link)}
                    >
                        <Icontwo name={item.icon} size={RFValue(40)} color="#000" />
                    </Pressable>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <CustomHeader
                title="Settings"
                onBackPress={() => navigation.goBack()}
            />

            <FlatList
                data={settingList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />

            <CustomModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                // modalStyle={{width:wp(10)}}
                modalStyle={{width:wp(85),height:hp(24),paddingHorizontal:wp(3),paddingVertical:hp(3)}}
            >
                <Text style={styles.modalText}>
                    {selectedItem?.mainheading === 'Delete account'
                        ? 'Are you sure you want to delete this account?'
                        : 'Do you want to use a new phone number?'}
                </Text>
                <View style={styles.modalButtonContainer}>
                    <View style={styles.modalyesbtn}>
                        <CustomButton
                            title="Yes"
                            style={{ backgroundColor: '#fff', color: '#000' }}
                            onPress={() => {
                                if (selectedItem?.mainheading === 'Delete account') {
                                    handleDeleteAccount();
                                }
                                setModalVisible(false);
                            }}
                        />
                    </View>
                    <View style={styles.modalnobtn}>
                        <CustomButton
                            title="No"
                            onPress={() => setModalVisible(false)}
                            style={{ backgroundColor: '#2D89CF', color: '#fff' }}
                        />
                    </View>
                </View>
            </CustomModal>

            <View style={styles.buttonContainer}>
                <CustomButton title="Logout" onPress={handleLogout} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    settingMainContainer: {
        width: wp(100),
        height: hp(10),
        paddingHorizontal: wp(3),
        justifyContent: 'center',
    },
    settingDataContainer: {
        width: wp(97),
        height: hp(8),
        alignSelf: 'center',
        flexDirection: 'row',
    },
    settingTextContainer: {
        width: wp(87),
        height: hp(8),
    },
    settingIconContainer: {
        width: wp(10),
        height: hp(8),
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingMainHeading: {
        color: '#424A54',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(18),
    },
    settingSecondaryHeading: {
        color: '#424A54',
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(14),
    },
    modalText: {
        fontSize: RFValue(17),
        textAlign: 'center',
        marginBottom: hp(2),
        color: '#000',
        fontFamily: 'Poppins-Medium'
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: hp(2),

    },
    buttonContainer: {
        width: wp(95),
        alignSelf: 'center',
        height: hp(10),
        justifyContent: 'center',
    },
    modalyesbtn: {
        width: wp(30),
        borderWidth: RFValue(2),
        borderRadius: RFValue(10),
        justifyContent: 'center',
    },
    modalnobtn: {
        width: wp(30),
        justifyContent: 'center',
        borderWidth: RFValue(2),
        borderRadius: RFValue(10),
       borderColor:'#fff'
    }
});


