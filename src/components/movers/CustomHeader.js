import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({ title, onBackPress }) => {
    return (
        <View style={styles.headerContainer}>
            <View>
                <TouchableOpacity onPress={onBackPress} style={styles.leftContainer}>
                    <Icon name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.centerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: heightPercentageToDP(1),
        backgroundColor: '#fff',
        height: heightPercentageToDP(8),
        width: '100%',
        alignItems: "center"
    },
    leftContainer: {
        width: widthPercentageToDP(14),
        justifyContent: "center"

    },
    centerContainer: {
        width: widthPercentageToDP(70),
        alignItems: "center",
        justifyContent: "center"

    },
    title: {
        fontSize: RFValue(17),
        fontFamily: 'Poppins-Medium',
        color: 'black',
    }

});

export default CustomHeader;