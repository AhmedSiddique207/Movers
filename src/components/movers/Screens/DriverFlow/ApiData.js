import { StyleSheet, Text, View,ScrollView } from 'react-native';
import React from 'react';
import { useGetProductsQuery } from '../../../../store/Apis/CricketPlayerApi.js';


export default function ApiData() {
    const { data } = useGetProductsQuery();
    return (
        <View>
            <ScrollView>
            {data?.map((product, index) => (
                <Text key={index} style={styles.text}>
                    {data[0].description}
                </Text>
            ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        margin: 5,
    },
});


