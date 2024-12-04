import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, TextInput, ScrollView, Alert, Share } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icontwo from 'react-native-vector-icons/Fontisto';
import { RFValue } from 'react-native-responsive-fontsize';
import { useForm, Controller } from 'react-hook-form';
import CustomButton from '../../CustomComponents/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as HP, widthPercentageToDP as WP } from 'react-native-responsive-screen';

export default OrderFreight = () => {
    const navigation = useNavigation();
    const { control, handleSubmit, reset } = useForm();
    const [sizevehicle, setSizeVehicle] = useState([
        { id: '1', title: '72 feet long', selected: true, imageselected: require('../../../../utils/size.png'), imageunselected: require('../../../../utils/sizeunselected.png') },
        { id: '2', title: '8.5 feet wide', selected: false, imageselected: require('../../../../utils/size.png'), imageunselected: require('../../../../utils/sizeunselected.png') },
        { id: '3', title: '13.5 feet tall', selected: false, imageselected: require('../../../../utils/size.png'), imageunselected: require('../../../../utils/sizeunselected.png') },
        { id: '4', title: '15 feet long', selected: false, imageselected: require('../../../../utils/size.png'), imageunselected: require('../../../../utils/sizeunselected.png') },
    ]);

    const [selectedVehicleSize, setSelectedVehicleSize] = useState('');

    const handleSelect = (id) => {
        const updatedData = sizevehicle.map((item) =>
            item.id === id ? { ...item, selected: true } : { ...item, selected: false }
        );
        setSizeVehicle(updatedData);

        const selectedItem = updatedData.find((item) => item.id === id);
        if (selectedItem) {
            setSelectedVehicleSize(selectedItem.title);
        }
    };

    const onSubmit = (data) => {
        if (!data.pickupLocation || !data.destination || !data.dateTime || !data.cargoDescription || !data.offer) {
            Alert.alert('Please Fill All Required Fields');
        } else {
            console.log('Form Data:', { ...data, vehicleSize: selectedVehicleSize });
            navigation.navigate('OfferDriver')
            reset();
        }
    };
    const onShare = async () => {
        try {
            await Share.share({
                message: 'This is an movers application.',
            });
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.optionContainer, item.selected ? styles.selected : styles.unselected]}
            onPress={() => handleSelect(item.id)}
        >
            <Image source={item.selected ? item.imageselected : item.imageunselected} style={styles.image} />
            <Text style={item.selected ? styles.selectedText : styles.unselectedText}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.topNav}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.openDrawer()}
                >
                    <Icon name="menu" size={20} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.title}>Freight</Text>
                <TouchableOpacity style={styles.refreshButton} onPress={onShare}>
                    <Icontwo name="share-a" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={sizevehicle}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />

            <ScrollView>
                <View style={styles.mainContent}>
                    <Text style={styles.emailheading}>Pickup Location</Text>
                    <Controller
                        control={control}
                        name="pickupLocation"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.inputemail}
                                placeholder="Saudia, PO Box 24724, Jeddah 21446"
                                placeholderTextColor="#9A9A9A"
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Text style={styles.emailheadings}>Destination</Text>
                    <Controller
                        control={control}
                        name="destination"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.inputemail}
                                placeholder="Jeddah 21446, Saudia Arabia"
                                placeholderTextColor="#9A9A9A"
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Text style={styles.emailheadings}>Date and Time</Text>
                    <Controller
                        control={control}
                        name="dateTime"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.inputemail}
                                placeholder="Now"
                                placeholderTextColor="#9A9A9A"
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Text style={styles.emailheadings}>Description of a Cargo</Text>
                    <Controller
                        control={control}
                        name="cargoDescription"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.inputemail}
                                placeholder="Write a description"
                                placeholderTextColor="#9A9A9A"
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Text style={styles.emailheadings}>Vehicle Size</Text>
                    <TextInput
                        style={styles.inputemail}
                        value={selectedVehicleSize}
                        placeholder="72 Feet Long"
                        placeholderTextColor="#9A9A9A"
                        editable={false}
                    />

                    <Text style={styles.emailheadings}>Offer</Text>
                    <Controller
                        control={control}
                        name="offer"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.inputemail}
                                placeholder="Offer your Fare"
                                placeholderTextColor="#9A9A9A"
                                onChangeText={onChange}
                                value={value}
                                keyboardType="phone-pad"
                            />
                        )}
                    />
                </View>

                <View style={styles.loginbuttonview}>
                    <CustomButton title="Order Freight" onPress={handleSubmit(onSubmit)} />
                </View>


            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: WP(3),
        paddingVertical: WP(2),
        backgroundColor: '#fff',
        // backgroundColor: 'green',

    },
    topNav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //    backgroundColor:'red'
    },
    backButton: {
        padding: RFValue(10),
        backgroundColor: 'rgba(45, 137, 207, 1)',
        borderRadius: 10,
    },
    refreshButton: {
        padding: RFValue(10),
        backgroundColor: 'rgba(45, 137, 207, 1)',
        borderRadius: 10,
    },
    title: {
        fontSize: RFValue(16),
        color: '#333',
        fontFamily: 'Poppins-Bold',
    },
    listContainer: {
        paddingVertical: HP(2),
        alignItems: 'center',
        // backgroundColor:'purple'
    },
    optionContainer: {
        marginHorizontal: WP(1),
        width: WP(25),
        height: HP(10),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: WP(15),
        height: HP(5),
        resizeMode: 'contain',
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
        // textAlign: 'center',
    },
    unselectedText: {
        color: '#A0A0A0',
        // textAlign: 'center',
    },
    mainContent: {
        // backgroundColor:'pink',
        justifyContent: 'space-between',
    },
    placeholderText: {
        fontSize: RFValue(14),
        color: '#A0A0A0',
    },
    navButton: {
        alignItems: 'center',
    },

    inputemail: {
        fontSize: RFValue(14),
        color: '#000',
        backgroundColor: 'rgba(244, 244, 244, 1)',
        borderRadius: 7,
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
        paddingTop: RFValue(10)
    },
    loginbuttonview: {
        marginTop: HP(2),
        // backgroundColor:'yellow'

    },
})