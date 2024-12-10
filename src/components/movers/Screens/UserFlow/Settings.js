// import { StyleSheet, Text, View, FlatList, Pressable, Alert } from 'react-native'
// import React, { useState } from 'react'
// import CustomHeader from '../../CustomComponents/CustomHeader'
// import { useNavigation } from '@react-navigation/native';
// import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { RFValue } from 'react-native-responsive-fontsize';
// import CustomButton from '../../CustomComponents/CustomButton';
// import { useSelector, useDispatch } from 'react-redux';
// import Icontwo from 'react-native-vector-icons/EvilIcons';
// import { logout, deleteAccount } from '../../../../store/LoginSignupSlice';
// import CustomModal from '../../CustomComponents/CustomModal';

// export default function Settings() {
//     const navigation = useNavigation();
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [modalTitle, setModalTitle] = useState("");
//     const [modalVisible, setModalVisible] = useState(false);

//     const { error, user } = useSelector((state) => state.auth);
//     const dispatch = useDispatch();
//     const handlelogout = () => {
//         dispatch(logout())
//         navigation.navigate('Login')
//     }

//     const handledelete = () => {
//         console.log('Deleting account');
//         dispatch(deleteAccount())
//         navigation.navigate('Login')
//     }

//     const handleModal = (item) => {
//         setModalTitle(item.modaltitle)
//         setSelectedItem(item);
//         setModalVisible(true)
//     }
//     const settingList = [
//         { id: 1, mainheading: 'Phone Number', secondaryheading: user?.mobileNumber, icon: 'chevron-right',  type: 'modal', modaltitle: 'Do you want to use a new phone number?' },
//         { id: 2, mainheading: 'Language', secondaryheading: 'Default', icon: 'chevron-right',link:'Languages', type: 'navigate' },
//         { id: 3, mainheading: 'Date and distance', icon: 'chevron-right', link: 'DateDistance', type: 'navigate' },
//         { id: 4, mainheading: 'Navigator', icon: 'chevron-right', link: 'Navigator', type: 'navigate' },
//         { id: 5, mainheading: 'Rules and terms', icon: 'chevron-right', link: 'RulesTerms', type: 'navigate' },
//         { id: 6, mainheading: 'Delete account', icon: 'chevron-right', type: 'modal', modaltitle: "Are you sure you want to delete this account?" },

//     ]
//     const renderItem = ({ item }) => (
//         <View style={styles.settingmaincont}>
//             <View style={styles.settingdatacont}>
//                 <View style={styles.settingtextcont}>
//                     <Text style={styles.settingmainheading}>{item.mainheading}</Text>
//                     <Text style={styles.settingsecondaryheading}>{item.secondaryheading}</Text>
//                 </View>
//                 <View style={styles.settingiconcont}>
//                     <Pressable
//                         onPress={item.type === 'modal'
//                             ? () => handleModal(item)
//                             : () => navigation.navigate(item.link)}>
//                         <Icontwo name={item.icon} size={RFValue(40)} color="#000" />
//                     </Pressable>
//                 </View>
//             </View>
//         </View>
//     )

//     return (
//         <View style={styles.maincont}>
//             <CustomHeader title={'Settings'}
//                 onBackPress={() => navigation.goBack()} />

//             <FlatList
//                 data={settingList}
//                 keyExtractor={(item) => item.id}
//                 renderItem={renderItem}
//             />

//             <CustomModal
//                 visible={modalVisible}
//                 title={modalTitle}
//                 onClose={() => setModalVisible(false)}
//                 onPressYes={() => {
//                     if (selectedItem?.mainheading === 'Delete account') {
//                         handledelete();
//                     } else {
//                         setModalVisible(false);
//                     }
//                 }}>

                    
// <View style={styles.mainmodalcont}>
//                 <View style={styles.datacont} >
//                     <View style={styles.modaltextcont}>
//                         <Text style={styles.title} numberOfLines={2} >{title}</Text>
//                     </View>
//                     <View style={styles.modalbtncont}>
//                         <View style={styles.singlebtnleftcont}>
//                             <CustomButton title={'Yes'} style={{ backgroundColor: '#FFFFFF', color: '#000000', }} onPress={onPressYes} />
//                         </View>
//                         <View style={styles.singlebtnrightcont}>
//                             <CustomButton title={'No'} onPress={onClose} />
//                         </View>
//                     </View>
//                 </View>
//             </View>


//                 </CustomModal>
//             <View style={styles.btncont}>
//                 <CustomButton title={'Logout'} onPress={handlelogout} />
//             </View>
//         </View>

//     )
// }

// const styles = StyleSheet.create({
//     maincont: {
//         // flex:1
//     },
//     settingmaincont: {
//         width: wp(100),
//         height: hp(10),
//         paddingHorizontal: wp(3),
//         // backgroundColor:'yellow',
//         justifyContent: 'center',
//     },
//     settingdatacont: {
//         width: wp(97),
//         height: hp(8),
//         alignSelf: 'center',
//         // backgroundColor:'red',
//         flexDirection: 'row'
//     },
//     settingtextcont: {
//         width: wp(87),
//         height: hp(8),
//         // backgroundColor: 'skyblue'
//     },
//     settingiconcont: {
//         width: wp(10),
//         height: hp(8),
//         // backgroundColor: 'pink',
//         // alignSelf: 'center',
//         justifyContent: 'flex-start',
//         alignItems: "center"
//     },
//     settingmainheading: {
//         color: '#424A54',
//         fontFamily: 'Poppins-Medium',
//         fontSize: RFValue(18)
//     },
//     settingsecondaryheading: {
//         color: '#424A54',
//         fontFamily: 'Poppins-Medium',
//         fontSize: RFValue(14)
//     },
//     btncont: {
//         width: wp(95),
//         alignSelf: 'center',
//         height: hp(29),
//         justifyContent: 'flex-end'
//     },
//     mainmodalcont: {
//         width: wp(80),
//         height: hp(25),
//         borderRadius: RFValue(10),
//         backgroundColor: '#ffffff',
//         alignSelf: 'center',
//         justifyContent: 'center',
//     },
//     datacont: {
//         width: wp(60),
//         height: hp(20),
//         // backgroundColor:'yellow',
//         alignSelf: 'center'
//     },
//     modaltextcont: {
//         width: wp(60),
//         height: hp(10),
//         // backgroundColor:'pink',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     modalbtncont: {
//         width: wp(60),
//         height: hp(10),
//         // backgroundColor:'skyblue',
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     title: {
//         color: "#000000",
//         fontFamily: 'Poppins-SemiBold',
//         fontSize: RFValue(16),


//     },
//     singlebtnleftcont: {
//         width: wp(25),
//         borderWidth: RFValue(1),
//         borderRadius: RFValue(10),
//     },
//     singlebtnrightcont: {
//         width: wp(25),
//     }
// })



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
                        style={{ backgroundColor: '#fff',color:'#000'}}
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
                        style={{ backgroundColor: '#2D89CF',color:'#fff'}}
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
        fontSize: RFValue(16),
        textAlign: 'center',
        marginBottom: hp(2),
        color:'#000',
        fontFamily:'Poppins-Medium'
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(2),

    },
    buttonContainer: {
        width: wp(95),
        alignSelf: 'center',
        height: hp(10),
        justifyContent: 'center',
    },
    modalyesbtn:{
        width:wp(35),
        borderWidth:RFValue(2),
        borderRadius:RFValue(10),
        justifyContent:'center',
    },
    modalnobtn:{
        width:wp(35),
        justifyContent:'center',
    }
});


