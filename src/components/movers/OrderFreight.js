import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function OrderFreight() {
    return (
        <View style={styles.mainview}>
            <View style={styles.secondaryview}>
                <View style={styles.topbar}>

                    <Text style={styles.texttwo}>ahmed</Text>

                    <Text style={styles.text}>Freight</Text>

                    <Text style={styles.textthree}>memon</Text>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: 'white',
    },
    secondaryview: {
        flex: 1,
        marginTop: hp(3),
        gap: 20,
    },
    topbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: 'black',
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        fontSize: RFValue(25),
        textAlign: 'center',
        flex: 1,
    },
    texttwo: {
        color: 'black',
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        fontSize: RFValue(25),
        flex: 1,
        textAlign: 'left',
    },
    textthree: {
        color: 'black',
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        fontSize: RFValue(25),
        flex: 1,
        textAlign: 'right',
    },
});
