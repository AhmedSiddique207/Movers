import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Iconrating from 'react-native-vector-icons/Octicons';
import userprofileicon from '../../../../../utils/userprofileicon.png';
import CustomButton from '../../../CustomComponents/CustomButton';
import SelectDriverBottomSheet from '../../UserFlow/SelectDriver/SelectDriverBottomSheet';

const SelectDriver = () => {

    const driveroffer = [
        { id: 1, icon: userprofileicon, name: 'Arfeen', time: '4 min', distance: '443M', rating: '4.9(13)', price: 359 },
        { id: 2, icon: userprofileicon, name: 'Jhon', time: '2 min', distance: '200M', rating: '4.6(10)', price: 200 },

    ]

    const renderItem = ({ item }) => (
        <View style={styles.driverContainer}>
            <View style={styles.driverCard}>
                <View style={styles.driverCardTopCont}>
                    <View style={styles.driverCardTopleftCont}>
                        <Image source={item.icon} style={styles.icon} />
                    </View>

                    <View style={styles.driverCardTopmidCont}>
                        <View style={styles.nameCont} >
                            <Text style={styles.drivernameText}>{item.name}</Text>
                            <View style={styles.ratingCont}>
                                <Iconrating
                                    name={'star-fill'}
                                    size={20}
                                    color="#FF9B26"
                                    style={styles.starsIcon}
                                />
                                <Text style={styles.ratingText}>  4.9 (13)</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.driverCardToprightCont}>
                        <View style={styles.timeCont}>
                            <Text style={styles.textTime}>{item.time}</Text>
                        </View>
                        <View style={styles.distanceCont}>
                            <Text style={styles.textDistance}>{item.distance}</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.driverCardBottomCont}>
                    <View style={styles.bottomLeftCont}>
                        <View style={styles.bottomPrice}>
                            <Text style={styles.priceText}>AED {item.price}</Text>

                        </View>
                    </View>
                    <View style={styles.bottomRightCont}>
                        <View style={styles.bottomBtn}>
                            <CustomButton title={'Accept'} onPress={() => {
                                Alert.alert('Your ride has been Accepted. The Driver will reach you soon.')
                                navigation.navigate('OrderFreight')
                            }} />

                        </View>
                    </View>
                </View>

            </View>
        </View>
    );



    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={driveroffer}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />


            <SelectDriverBottomSheet />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },

    driverContainer: {
        alignItems: 'center',

    },
    driverCard: {
        width: wp(95),
        height: hp(25),
        backgroundColor: '#fff',
        borderRadius: RFValue(10),
        marginVertical: hp(1.5),
        elevation: RFValue(5),
        paddingHorizontal: wp(2)
    },
    driverCardTopCont: {
        height: hp(15),
        flexDirection: 'row',
        // backgroundColor:'purple'
    },
    driverCardBottomCont: {
        height: hp(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'yellow'

    },
    driverCardTopleftCont: {
        width: wp(25),
        height: hp(17),
        alignItems: 'center',
    },
    driverCardTopmidCont: {
        width: wp(45),
        height: hp(15),
        justifyContent: 'center'
    },
    nameCont: {
        paddingHorizontal: wp(1.5),
    },
    ratingCont: {
        alignItems: 'flex-start',
        flexDirection: 'row'

    },
    ratingText: {
        color: '#2B2B2B',

    },
    driverCardToprightCont: {
        width: wp(25),
        height: hp(17),
        justifyContent: 'space-evenly',
    },
    bottomLeftCont: {
        width: wp(35),
        height: hp(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomRightCont: {
        width: wp(35),
        height: hp(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomBtn: {
        width: wp(30),
        height: hp(8),
        justifyContent: 'center',
    },
    bottomPrice: {
        width: wp(30),
        height: hp(8),
        justifyContent: 'center',
    },

    priceText: {
        fontSize: RFValue(25),
        fontFamily: 'Poppins-SemiBold',
        color: '#000000'
    },
    drivernameText: {
        fontSize: RFValue(20),
        fontFamily: 'Poppins-SemiBold',
        color: '#000000'
    },
    icon: {
        width: wp(22.5),
        height: hp(14),
        resizeMode: 'contain'
    },
    starsIcon: {
        transform: [{ rotate: '180deg' }]
    },
    textTime: {
        fontSize: RFValue(12.5),
        fontFamily: 'Poppins-Medium',
        color: '#2B2B2B',
        alignSelf: 'center',
    },
    textDistance: {
        fontSize: RFValue(12.5),
        fontFamily: 'Poppins-Medium',
        color: '#2B2B2B',
        alignSelf: 'center',
    }
});


export default SelectDriver;