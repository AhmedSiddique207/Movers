import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, TextInput, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icontwo from 'react-native-vector-icons/Fontisto';
import Iconthree from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useForm, Controller } from 'react-hook-form';
import CustomButton from './Button';
import { useNavigation } from '@react-navigation/native';


export default OrderFreight = () => {
    const navigation = useNavigation();
    const { control, handleSubmit, reset } = useForm();
    const [sizevehicle, setSizeVehicle] = useState([
        { id: '1', title: '72 feet long', selected: true, imageselected: require('../../utils/size.png'), imageunselected: require('../../utils/sizeunselected.png') },
        { id: '2', title: '8.5 feet wide', selected: false, imageselected: require('../../utils/size.png'), imageunselected: require('../../utils/sizeunselected.png') },
        { id: '3', title: '13.5 feet tall', selected: false, imageselected: require('../../utils/size.png'), imageunselected: require('../../utils/sizeunselected.png') },
        { id: '4', title: '15 feet long', selected: false, imageselected: require('../../utils/size.png'), imageunselected: require('../../utils/sizeunselected.png') },
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
            Alert.alert('Your Freight has been Confirmed');
            reset();
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
                <TouchableOpacity style={styles.refreshButton}>
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
        color: '#333',
        fontFamily: 'Poppins-Bold',
    },
    listContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
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
        marginTop: 5,
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
        paddingTop: 10
    },
    loginbuttonview: {
        padding: 10
    },
})
