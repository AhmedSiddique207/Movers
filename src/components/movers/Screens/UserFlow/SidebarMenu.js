import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as HP, widthPercentageToDP as WP } from 'react-native-responsive-screen';
import Icontwo from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconrating from 'react-native-vector-icons/Octicons';
import { useSelector } from 'react-redux';
import Button from '../../CustomComponents/CustomButton';
import { menuItems } from '../../../../utils/constants/Data';
import { fb, insta, profileicon } from '../../../../utils/constants/Images';

export default function SidebarMenu() {
    const { user } = useSelector((state) => state.auth);
    const stars = Array(5).fill('star-fill');
    const navigation = useNavigation();

    const renderMenuItem = ({ item }) => (
        <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
                console.log(`${item.title} clicked`);
                navigation.navigate(item.link)
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
                <View style={styles.btnCont}>
                    <Button title={'Driver Mode'} style={{ backgroundColor: 'rgba(45, 137, 207, 1)' }} />
                </View>
                <View style={styles.socialIconCont}>
                    <Image source={fb} style={styles.socialIconfb} />
                    <Image source={insta} style={styles.socialIconinsta} />
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
        height: HP(75),
        // backgroundColor: 'red',
        paddingHorizontal: WP(3)
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        height: HP(15)
    },
    profileIconContainer: {
        width: WP(20),
        height: HP(15),
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'pink'

    },
    profileIcon: {
        width: WP(15),
        height: HP(15),
        resizeMode: 'contain',
    },
    centerContainer: {
        width: WP(40),
        height: HP(15),
        // backgroundColor: "yellow",
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
        // backgroundColor: 'green'

    },
    starss: {
        transform: [{ rotate: '180deg' }]
    },
    ratingText: {
        color: '#2B2B2B',

    },
    rightContainer: {
        width: WP(10),
        height: HP(15),
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',

    },
    menucontainer: {
        // backgroundColor: 'purple'
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: HP(2),

    },
    menuIcon: {
        color: '#000',
    },
    menuTitle: {
        fontSize: RFValue(14),
        color: '#000',
        paddingHorizontal: WP(3)
    },

    bottom: {
        flex: 1,
        height: HP(25),
        // backgroundColor: 'purple',
        borderTopWidth: 1,
        borderColor: '#D7D7D7',
        justifyContent: 'space-evenly'

    },
    btnCont: {
        height: HP(8),
        justifyContent: 'center',
        width: WP(65),
        alignSelf: 'center',
        // backgroundColor:'yellow',
    },
    socialIconCont: {
        height: HP(8),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        // backgroundColor:'green'

    },
    socialIconfb: {
        width: WP(13),
        aspectRatio: 1,
        justifyContent: 'center',
        resizeMode: 'contain',
        marginRight: WP(1)
    },
    socialIconinsta: {
        width: WP(13),
        aspectRatio: 1,
        justifyContent: 'center',
        resizeMode: 'contain',
        marginLeft: WP(1)
    },
});
