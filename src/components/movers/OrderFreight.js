import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icontwo from 'react-native-vector-icons/Fontisto';
import Iconthree from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomButton from './Button';

const OrderFreight = () => {
    const [sizevehicle, setSizeVehicle] = useState([
        { id: '1', title: '72 feet long', selected: true, image: require('../../utils/size.png'), imageunselected: require('../../utils/sizeunselected.png') },
        { id: '2', title: '8.5 feet wide', selected: false, image: require('../../utils/size.png'), imageunselected: require('../../utils/sizeunselected.png') },
        { id: '3', title: '13.5 feet tall', selected: false, image: require('../../utils/size.png'), imageunselected: require('../../utils/sizeunselected.png') },
        { id: '4', title: '15 feet long', selected: false, image: require('../../utils/size.png'), imageunselected: require('../../utils/sizeunselected.png') },
    ]);

    const handleSelect = (id) => {
        const updatedData = sizevehicle.map((item) =>
            item.id === id ? { ...item, selected: true } : { ...item, selected: false }
        );
        setSizeVehicle(updatedData);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.optionContainer, item.selected ? styles.selected : styles.unselected]}
            onPress={() => handleSelect(item.id)}
        >
            <Image source={item.selected ? item.image : item.imageunselected} style={styles.image} />
            <Text style={item.selected ? styles.selectedText : styles.unselectedText}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.topNav}>
                <TouchableOpacity style={styles.backButton}>
                    <Icon name="menu" size={20} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.title}>Freight</Text>
                <TouchableOpacity style={styles.refreshButton}>
                    <Icontwo name="share-a" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    data={sizevehicle}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
            <ScrollView>
                <View style={styles.mainContent}>

                    <View style={styles.email}>
                        <Text style={styles.emailheading}>Pickup Location</Text>
                        <TextInput
                            style={styles.inputemail}
                            placeholder="Saudia, PO Box 24724, Jeddah 21446,"
                            placeholderTextColor="#000"

                        />
                    </View>


                    <View style={styles.email}>
                        <Text style={styles.emailheadings}>Destination</Text>
                        <TextInput
                            style={styles.inputemail}
                            placeholder="Jeddah 21446, Saudia Arabia"
                            placeholderTextColor="#000"

                        />
                    </View>

                    <View style={styles.email}>
                        <Text style={styles.emailheadings}>Date and Time</Text>
                        <TextInput
                            style={styles.inputemail}
                            placeholder="Now"
                            placeholderTextColor="#000"

                        />
                    </View>


                    <View style={styles.email}>
                        <Text style={styles.emailheadings}>Description of a Cargo</Text>
                        <TextInput
                            style={styles.inputemail}
                            placeholder="Write a description"
                            placeholderTextColor="#000"

                        />
                    </View>


                    <View style={styles.email}>
                        <Text style={styles.emailheadings}>Vehicle Size</Text>
                        <TextInput
                            style={styles.inputemail}
                            placeholder="72 Feet Long"
                            placeholderTextColor="#000"

                        />
                    </View>

                    <View style={styles.email}>
                        <Text style={styles.emailheadings}>Offer</Text>
                        <TextInput
                            style={styles.inputemail}
                            placeholder="Offer your Fare"
                            placeholderTextColor="#000"

                        />
                    </View>

                </View>
                <View style={styles.loginbuttonview}>
                    <CustomButton
                        title={'Order Freight'}
                    />
                </View>

                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navButton}>
                        <Icon name="add-circle-outline" size={24} color="#2d89cf" />
                        <Text style={styles.navText}>Create Request</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navButton}>
                        <Iconthree name="checkbox-multiple-marked-outline" size={24} color="#2d89cf" />
                        <Text style={styles.navText}>My Request</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topNav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    backButton: {
        padding: 10,
        backgroundColor: 'rgba(45, 137, 207, 1)',
        borderRadius: 10,
    },
    refreshButton: {
        padding: 10,
        backgroundColor: 'rgba(45, 137, 207, 1)',
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'Poppins-Bold',
    },
    listContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    optionContainer: {
        width: 95,
        height: 80,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        padding: 5
    },
    image: {
        width: 50,
        height: 35,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    selected: {
        backgroundColor: '#2d89cf',
    },
    unselected: {
        backgroundColor: 'rgba(238, 238, 238, 1)',
    },
    selectedText: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    unselectedText: {
        color: '#A0A0A0',
        textAlign: 'center',
    },
    mainContent: {
        flex: 1,
        padding: 10,
    },
    placeholderText: {
        fontSize: 16,
        color: '#A0A0A0',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#FEFEFA',
        // borderWidth:0.5,

    },
    navButton: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 16,
        color: 'rgba(21, 21, 21, 1)',
        fontFamily: 'Poppins-Medium'
    },
    inputemail: {
        fontSize: 16,
        color: '#000',
        backgroundColor: 'rgba(244, 244, 244, 1)',
        borderRadius: 7,
        marginTop: 12,
        paddingLeft: 10,
    },
    emailheading: {
        fontFamily: 'Poppins-Medium',
        color: "rgba(66, 74, 84, 1)",
        fontWeight: '600',
        fontSize: RFValue(17),

    },
    emailheadings: {
        fontFamily: 'Poppins-Medium',
        color: "rgba(66, 74, 84, 1)",
        fontWeight: '600',
        fontSize: RFValue(17),
        paddingTop: 20
    },
    loginbuttonview: {
        padding: 10
    },
});

export default OrderFreight;


