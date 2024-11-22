import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import profileicon from '../../utils/profileicon.png';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Iconrating from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icontwo from 'react-native-vector-icons/EvilIcons';
import Button from './Button';
import fb from "../../utils/fb.png";
import insta from "../../utils/insta.png";
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as HP, widthPercentageToDP as WP } from 'react-native-responsive-screen';

export default function SidebarMenu() {
    const { user } = useSelector((state) => state.auth);
    const stars = Array(5).fill('star-fill');
    const navigation = useNavigation();

    const menuItems = [
        { id: '1', title: 'City', icon: 'car' },
        { id: '2', title: 'Request History', icon: 'history' },
        { id: '3', title: 'City To City', icon: 'globe' },
        { id: '4', title: 'Settings', icon: 'cog' },
        { id: '5', title: 'Safety', icon: 'shield' },
        { id: '6', title: 'FAQ', icon: 'info-circle' },
        { id: '7', title: 'Online Registration', icon: 'pencil' },
    ];

    const renderMenuItem = ({ item }) => (
        <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
                console.log(`${item.title} clicked`);
            }}
        >
            <Icon name={item.icon} size={20} style={styles.menuIcon} />
            <Text style={styles.menuTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.mainContainer}>
            <View style={styles.top}>
                <View style={styles.profile}>
                    <View style={styles.profileIconContainer}>
                        <Image source={profileicon} style={styles.profileIcon} />
                    </View>

                    <View style={styles.centerContainer}>
                        <Text style={styles.username}>
                            {user?.fullName || null}
                        </Text>
                        <View style={styles.ratingStarContainer}>
                            {stars.map((icon, index) => (
                                <Iconrating
                                    key={index}
                                    name={icon}
                                    size={18}
                                    color="#FF9B26"
                                    style={styles.starss}
                                />
                            ))}
                            <Text style={styles.ratingText}>4.9 (13)</Text>
                        </View>
                    </View>

                    <View style={styles.rightContainer}>
                        <Pressable
                            onPress={() => navigation.navigate('ProfileSetting')}>
                            <Icontwo name="chevron-right" size={24} color="#000" />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.menucontainer}>
                    <FlatList
                        data={menuItems}
                        keyExtractor={(item) => item.id}
                        renderItem={renderMenuItem}
                    />
                </View>
            </View>

            <View style={styles.bottom}>
                <View style={styles.buttoncontainer}>
                    <Button title={'Driver Mode'} />
                </View>
                <View style={styles.socialIconscontainer}>
                    <Image source={fb} style={styles.socialIcon} />
                    <Image source={insta} style={styles.socialIcon} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    top: {
        height: HP(80),
        // backgroundColor:'red'
    },
    bottom: {
        flex: 1,
        height: HP(20),
        // backgroundColor:'purple',
        borderTopWidth: 1,
        borderColor: '#D7D7D7'

    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        height: HP(15)
    },
    profileIconContainer: {
        width: WP(20),
        justifyContent: 'center',
        alignItems: 'center',

    },
    profileIcon: {
        width: WP(15),
        height: HP(15),
        resizeMode: 'contain',
    },
    centerContainer: {
        width: WP(40),
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    username: {
        fontSize: RFValue(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#000',
    },
    ratingStarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: RFValue(5),

    },
    starss: {
        transform: [{ rotate: '45deg' }]
    },
    ratingText: {
        color: '#2B2B2B',

    },
    rightContainer: {
        width: WP(10),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red'
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: HP(2),
        paddingHorizontal: WP(2),
    },
    menuIcon: {
        marginRight: RFValue(15),
        color: '#000',
    },
    menuTitle: {
        fontSize: RFValue(14),
        color: '#000',
    },
    buttoncontainer: {
        padding: RFValue(15)
    },
    socialIconscontainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignSelf: 'center',
        gap: RFValue(10)
    },

    socialIcon: {
        width: WP(13),
        resizeMode: 'contain',
    },
});
