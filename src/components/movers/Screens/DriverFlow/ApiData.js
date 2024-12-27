import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useGetProductsQuery } from '../../../../store/Apis/ItemsApi.js';


export default function ApiData() {
    const { data } = useGetProductsQuery();
    console.log(data)
    return (
        <View>
            <ScrollView>
                {data?.map((product, index) => (
                    <Text key={index} style={styles.text}>
                        {data[1].description}
                    </Text>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontFamily: 'Poppins-Medium',
        margin: heightPercentageToDP(5),
        margin: widthPercentageToDP(10),
    },
});


